// Movimento da página:
// - entrada: [data-reveal] sobe 60px e aparece quando entra na tela (CSS em global.css);
// - parallax: [data-parallax] anda a 20% da velocidade da rolagem, só em telas largas.
// Sem JavaScript, ou com "reduzir movimento" ligado, nada fica escondido nem se move.

const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const wide = matchMedia("(min-width: 1024px)");

const revealTargets = document.querySelectorAll<HTMLElement>("[data-reveal]");

function startReveal() {
  if (!reduceMotion && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const element = entry.target as HTMLElement;
          element.style.setProperty("--reveal-delay", `${element.dataset.revealDelay ?? 0}ms`);
          element.classList.add("is-revealed");
          observer.unobserve(element);
        }
      },
      { rootMargin: "0px 0px -5% 0px" },
    );
    revealTargets.forEach((element) => observer.observe(element));
  } else {
    revealTargets.forEach((element) => element.classList.add("is-revealed"));
  }
}

// Com o vídeo de abertura na tela (Intro.astro), as entradas esperam ele sair para não
// rodarem escondidas atrás dele.
if (document.documentElement.classList.contains("intro-playing")) {
  addEventListener("intro:end", startReveal, { once: true });
} else {
  startReveal();
}

// A imagem desliza 0,8px para baixo a cada 1px de rolagem, ou seja, parece andar a 20%
// da velocidade da página. `scroll`: a partir do topo da página. `center`: a partir do
// momento em que a seção está centralizada na janela.
const PARALLAX_SHIFT = 0.8;
const layers = document.querySelectorAll<HTMLElement>("[data-parallax]");
let scheduled = false;

function updateParallax() {
  scheduled = false;
  for (const layer of layers) {
    if (reduceMotion || !wide.matches) {
      layer.style.transform = "";
      continue;
    }
    let offset = PARALLAX_SHIFT * scrollY;
    if (layer.dataset.parallax === "center" && layer.parentElement) {
      const host = layer.parentElement.getBoundingClientRect();
      offset = -PARALLAX_SHIFT * (host.top + host.height / 2 - innerHeight / 2);
    }
    layer.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
  }
}

function requestUpdate() {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(updateParallax);
}

if (layers.length > 0) {
  addEventListener("scroll", requestUpdate, { passive: true });
  addEventListener("resize", requestUpdate);
  wide.addEventListener("change", requestUpdate);
  updateParallax();
}
