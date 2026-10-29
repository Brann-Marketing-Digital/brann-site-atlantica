// Conteúdo do blog.
// Os slugs preservam os caminhos originais (/post/<slug>). Os campos `html` e `items`
// só trazem <strong>, <em>, <br> e <a>, escritos à mão, e são
// renderizados com `set:html`.

import type { ImageMetadata } from "astro";

import imgVeiculoRecuperado from "../assets/blog/post-veiculo-recuperado.jpg";
import imgInvestirEssencial from "../assets/blog/post-investir-essencial.jpg";
import imgGarantirSeguranca from "../assets/blog/post-garantir-seguranca.jpg";
import imgBeneficios from "../assets/blog/post-beneficios.jpg";

export type PostBlock =
  | { type: "p" | "h2" | "h3" | "h4"; html: string }
  | { type: "ul" | "ol"; items: string[] }
  | { type: "img"; image: ImageMetadata; alt: string };

export interface Post {
  slug: string;
  title: string;
  /** Data de publicação (sem ano). */
  date: string;
  readTime: string;
  /** Capa usada na lista do blog (só o primeiro post tem). */
  cover?: ImageMetadata;
  /** Resumo mostrado na lista do blog. */
  excerpt: string;
  blocks: PostBlock[];
}

export const posts: Post[] = [
  {
    slug: "veículo-furtado-é-recuperado-em-menos-de-40-minutos-pela-atlântica",
    title: "Veículo furtado é recuperado em menos de 40 minutos pela Atlântica",
    date: "22 de set.",
    readTime: "1 min de leitura",
    cover: imgVeiculoRecuperado,
    excerpt:
      "Um veículo furtado em Barra Velha, no litoral de Santa Catarina, foi recuperado no mesmo dia após a rápida atuação da Atlântica e o acionamento das autoridades.",
    blocks: [
      { type: "img", image: imgVeiculoRecuperado, alt: "" },
      {
        type: "p",
        html: "Um veículo furtado em Barra Velha, no litoral de Santa Catarina, foi recuperado no mesmo dia após a rápida atuação da Atlântica e o acionamento das autoridades.",
      },
      {
        type: "p",
        html: "O caso aconteceu no dia 9 de setembro. O proprietário retornou ao local onde havia deixado seu Volkswagen Polo e constatou que o veículo não estava mais lá. Diante da situação, a Atlântica foi acionada e iniciou imediatamente os procedimentos necessários para auxiliar na localização do automóvel.",
      },
      {
        type: "p",
        html: "A ocorrência foi comunicada às 18h50. Pouco tempo depois, as informações sobre a localização do veículo foram repassadas às autoridades responsáveis.",
      },
      {
        type: "p",
        html: "Às 19h24, apenas 34 minutos após o acionamento da associação, a Polícia chegou ao ponto indicado e encontrou o veículo, que estava abandonado em uma via do bairro Jardim Icaraí.",
      },
      {
        type: "p",
        html: "O automóvel foi localizado sem registro de danos aparentes nas imagens do momento da recuperação. Após a localização, foi iniciado o processo de retorno do veículo, ainda na mesma noite.",
      },
      { type: "p", html: "<strong>Agilidade que faz a diferença</strong>" },
      {
        type: "p",
        html: "Casos como esse mostram a importância de contar com uma estrutura preparada para oferecer suporte ao associado em momentos de emergência.",
      },
      {
        type: "p",
        html: "Do primeiro contato até a localização do veículo, foram apenas 34 minutos. A atuação rápida permitiu que as autoridades chegassem ao local indicado e realizassem a recuperação ainda naquela noite.",
      },
      {
        type: "p",
        html: "Para a Atlântica, mais do que oferecer proteção, estar ao lado do associado quando ele mais precisa faz parte do compromisso de proporcionar segurança e tranquilidade em situações inesperadas.",
      },
    ],
  },
  {
    slug: "por-que-investir-em-proteção-veicular-é-essencial",
    title: "Por Que Investir em Proteção Veicular é Essencial?",
    date: "22 de set.",
    readTime: "3 min de leitura",
    excerpt:
      "A proteção veicular é um tema que merece atenção, especialmente em um mundo onde os imprevistos podem ocorrer a qualquer momento. Você já parou para pensar no que aconteceria se seu veículo fosse danificado ou roubado? A resposta pode ser mais impactante do que você imagina. Neste post, vamos explorar as razões pelas quais investir em proteção veicular é essencial, abordando desde a segurança financeira até a tranquilidade emocional que essa decisão pode proporcionar.",
    blocks: [
      {
        type: "p",
        html: "A proteção veicular é um tema que merece atenção, especialmente em um mundo onde os imprevistos podem ocorrer a qualquer momento. Você já parou para pensar no que aconteceria se seu veículo fosse danificado ou roubado? A resposta pode ser mais impactante do que você imagina. Neste post, vamos explorar as razões pelas quais investir em proteção veicular é essencial, abordando desde a segurança financeira até a tranquilidade emocional que essa decisão pode proporcionar.",
      },
      {
        type: "img",
        image: imgInvestirEssencial,
        alt: "Close-up view of a car parked safely in a garage",
      },
      { type: "h2", html: "O Que é Proteção Veicular?" },
      {
        type: "p",
        html: "A proteção veicular é um serviço que oferece cobertura para danos e perdas relacionadas a veículos. Diferente do seguro tradicional, que é regulamentado por órgãos governamentais, a proteção veicular é geralmente oferecida por associações ou cooperativas. Isso significa que, em caso de sinistro, os associados podem contar com um suporte mais personalizado e, muitas vezes, com custos mais acessíveis.",
      },
      { type: "h3", html: "Tipos de Cobertura" },
      {
        type: "p",
        html: "Existem diferentes tipos de cobertura que podem ser oferecidos pelas empresas de proteção veicular, incluindo:",
      },
      {
        type: "ul",
        items: [
          "<strong>Cobertura contra roubo e furto</strong>: Protege o proprietário em caso de perda do veículo.",
          "<strong>Cobertura contra colisões</strong>: Cobre danos causados a terceiros ou ao próprio veículo em caso de acidentes.",
          "<strong>Assistência 24 horas</strong>: Oferece suporte em situações de emergência, como pane ou acidentes.",
          "<strong>Cobertura de danos a terceiros</strong>: Protege o motorista contra reclamações de danos causados a outras pessoas ou propriedades.",
        ],
      },
      { type: "h2", html: "Por Que a Proteção Veicular é Importante?" },
      { type: "h3", html: "Segurança Financeira" },
      {
        type: "p",
        html: "Um dos principais motivos para investir em proteção veicular é a segurança financeira. Um acidente ou roubo pode resultar em despesas inesperadas que podem impactar significativamente o seu orçamento. Com a proteção veicular, você pode evitar gastos altos com reparos ou a compra de um novo veículo.",
      },
      { type: "h4", html: "Exemplo Prático" },
      {
        type: "p",
        html: "Imagine que você está envolvido em um acidente e o custo para reparar seu carro é de R$ 10.000. Sem proteção, você teria que arcar com essa despesa do seu próprio bolso. Com a proteção veicular, esse custo pode ser coberto, dependendo da sua apólice.",
      },
      { type: "h3", html: "Tranquilidade Emocional" },
      {
        type: "p",
        html: "Além da segurança financeira, a proteção veicular também oferece tranquilidade emocional. Saber que você está protegido contra imprevistos pode reduzir o estresse e a ansiedade. Isso é especialmente importante para quem utiliza o veículo diariamente, seja para trabalho ou lazer.",
      },
      { type: "h3", html: "Valorização do Veículo" },
      {
        type: "p",
        html: "Outro ponto a ser considerado é a valorização do seu veículo. Um carro bem cuidado e protegido tende a manter seu valor de mercado. Ao investir em proteção veicular, você está contribuindo para a preservação do seu patrimônio.",
      },
      { type: "h2", html: "Como Escolher a Melhor Proteção Veicular?" },
      { type: "h3", html: "Pesquise e Compare" },
      {
        type: "p",
        html: "Antes de escolher uma empresa de proteção veicular, é fundamental pesquisar e comparar as opções disponíveis. Verifique as coberturas oferecidas, os preços e a reputação da empresa. Leia avaliações de outros clientes para entender a qualidade do serviço.",
      },
      { type: "h3", html: "Entenda as Condições" },
      {
        type: "p",
        html: "Cada empresa possui suas próprias condições e regras. É importante ler atentamente o contrato e entender o que está coberto e o que não está. Preste atenção especial às cláusulas de exclusão, que podem limitar a cobertura em determinadas situações.",
      },
      { type: "h3", html: "Considere o Atendimento ao Cliente" },
      {
        type: "p",
        html: "Um bom atendimento ao cliente é essencial. Em momentos de crise, como um acidente, você precisa de suporte rápido e eficiente. Verifique se a empresa oferece canais de comunicação acessíveis e se possui um bom histórico de atendimento.",
      },
      { type: "h2", html: "Casos de Sucesso" },
      { type: "h3", html: "Histórias de Clientes" },
      {
        type: "p",
        html: "Muitos clientes que investiram em proteção veicular relatam experiências positivas. Um exemplo é o caso de Maria, que teve seu carro roubado. Graças à proteção veicular que contratou, ela conseguiu receber o valor de mercado do veículo e adquiriu um novo carro sem comprometer suas finanças.",
      },
      {
        type: "p",
        html: "Outro exemplo é o de João, que se envolveu em um acidente. Com a proteção veicular, ele não apenas teve os custos de reparo cobertos, mas também recebeu assistência 24 horas, o que facilitou a resolução do problema.",
      },
      { type: "h2", html: "Mitos e Verdades sobre Proteção Veicular" },
      { type: "h3", html: "Mito: É Muito Caro" },
      {
        type: "p",
        html: "Um dos mitos mais comuns é que a proteção veicular é muito cara. Na verdade, existem opções acessíveis que podem se adequar ao seu orçamento. Além disso, o custo pode ser compensado pelas economias que você terá em caso de sinistro.",
      },
      { type: "h3", html: "Verdade: É Mais Flexível que o Seguro Tradicional" },
      {
        type: "p",
        html: "A proteção veicular oferece mais flexibilidade em comparação com o seguro tradicional. Muitas vezes, você pode personalizar sua cobertura de acordo com suas necessidades específicas.",
      },
      { type: "h2", html: "Conclusão" },
      {
        type: "p",
        html: "Investir em proteção veicular é uma decisão inteligente que pode trazer segurança financeira e tranquilidade emocional. Ao escolher a melhor opção para você, considere as coberturas, o atendimento ao cliente e as experiências de outros usuários. Não deixe seu patrimônio desprotegido. A proteção veicular é um passo importante para garantir que você e seu veículo estejam sempre seguros.",
      },
      {
        type: "p",
        html: "Lembre-se, a vida é cheia de imprevistos, e estar preparado para eles faz toda a diferença. Avalie suas opções e faça a escolha que melhor se adapta às suas necessidades.",
      },
    ],
  },
  {
    slug: "proteção-veicular-como-garantir-a-segurança-do-seu-carro",
    title: "Proteção Veicular: Como Garantir a Segurança do Seu Carro",
    date: "22 de set.",
    readTime: "4 min de leitura",
    excerpt:
      "A segurança do seu carro é uma preocupação constante para muitos motoristas. Com o aumento da criminalidade e o número de acidentes nas estradas, é fundamental adotar medidas que garantam a proteção do seu veículo. Neste post, vamos explorar as melhores práticas e opções disponíveis para proteger seu carro, desde a escolha de um bom seguro até dicas de segurança.",
    blocks: [
      {
        type: "p",
        html: "A segurança do seu carro é uma preocupação constante para muitos motoristas. Com o aumento da criminalidade e o número de acidentes nas estradas, é fundamental adotar medidas que garantam a proteção do seu veículo. Neste post, vamos explorar as melhores práticas e opções disponíveis para proteger seu carro, desde a escolha de um bom seguro até dicas de segurança.",
      },
      {
        type: "img",
        image: imgGarantirSeguranca,
        alt: "Close-up view of a car alarm system installed in a vehicle",
      },
      { type: "h2", html: "O que é Proteção Veicular?" },
      {
        type: "p",
        html: "A proteção veicular é um conjunto de medidas e serviços que visam garantir a segurança do seu carro. Isso pode incluir seguros tradicionais, proteção contra roubo, assistência em caso de acidentes e até mesmo serviços de rastreamento. A escolha da proteção ideal depende das suas necessidades e do perfil do seu veículo.",
      },
      { type: "h3", html: "Tipos de Proteção Veicular" },
      {
        type: "p",
        html: "Existem diferentes tipos de proteção veicular disponíveis no mercado. Vamos analisar os principais:",
      },
      {
        type: "ol",
        items: [
          "<strong>Seguro de Carro</strong> <br>O seguro de carro é a forma mais comum de proteção. Ele cobre danos ao veículo em caso de acidentes, roubo e até mesmo danos a terceiros. É importante ler as cláusulas do contrato e entender o que está coberto.",
          "<strong>Proteção Veicular</strong> <br>A proteção veicular é uma alternativa ao seguro tradicional. Geralmente, é oferecida por associações ou cooperativas e pode ter um custo mais baixo. No entanto, é essencial verificar a credibilidade da empresa.",
          "<strong>Rastreamento Veicular</strong> <br>O rastreamento é uma tecnologia que permite localizar o veículo em caso de roubo. Esse serviço pode ser combinado com outros tipos de proteção para aumentar a segurança.",
          "<strong>Alarmes e Dispositivos de Segurança</strong> <br>Instalar um sistema de alarme ou outros dispositivos de segurança pode desencorajar ladrões e aumentar a proteção do seu carro.",
        ],
      },
      { type: "h2", html: "Por que Investir em Proteção Veicular?" },
      { type: "p", html: "Investir em proteção veicular é essencial por várias razões:" },
      {
        type: "ul",
        items: [
          "<strong>Redução de Riscos</strong>: Com a proteção adequada, você minimiza os riscos de perda financeira em caso de roubo ou acidente.",
          "<strong>Tranquilidade</strong>: Saber que seu carro está protegido proporciona paz de espírito, permitindo que você dirija com mais confiança.",
          "<strong>Valorização do Veículo</strong>: Carros bem protegidos tendem a manter seu valor de mercado, o que é importante caso você decida vendê-lo no futuro.",
        ],
      },
      { type: "h2", html: "Como Escolher a Melhor Proteção para Seu Carro" },
      {
        type: "p",
        html: "Escolher a proteção veicular ideal pode ser desafiador. Aqui estão algumas dicas para ajudá-lo:",
      },
      { type: "h3", html: "Avalie Suas Necessidades" },
      { type: "p", html: "Antes de decidir, considere:" },
      {
        type: "ul",
        items: [
          "<strong>Tipo de Veículo</strong>: Carros mais caros podem exigir uma proteção mais robusta.",
          "<strong>Localização</strong>: Se você mora em uma área com alta taxa de criminalidade, pode ser necessário um seguro mais abrangente.",
          "<strong>Uso do Veículo</strong>: Se você usa seu carro diariamente, a proteção deve ser mais rigorosa.",
        ],
      },
      { type: "h3", html: "Compare Opções" },
      {
        type: "p",
        html: "Pesquise diferentes seguradoras e empresas de proteção veicular. Compare preços, coberturas e avaliações de clientes. Não hesite em pedir recomendações a amigos e familiares.",
      },
      { type: "h3", html: "Leia as Condições" },
      {
        type: "p",
        html: "Antes de assinar qualquer contrato, leia atentamente as condições. Preste atenção em detalhes como:",
      },
      {
        type: "ul",
        items: [
          "<strong>Franquias</strong>: O valor que você terá que pagar em caso de sinistro.",
          "<strong>Coberturas</strong>: O que está incluído e o que não está.",
          "<strong>Assistência</strong>: Quais serviços de assistência estão disponíveis.",
        ],
      },
      { type: "h2", html: "Dicas de Segurança para Proteger Seu Carro" },
      {
        type: "p",
        html: "Além de escolher a proteção adequada, existem várias medidas que você pode adotar para aumentar a segurança do seu veículo:",
      },
      { type: "h3", html: "Estacione com Segurança" },
      {
        type: "ul",
        items: [
          "<strong>Escolha Locais Iluminados</strong>: Sempre que possível, estacione em áreas bem iluminadas e movimentadas.",
          "<strong>Use o Freio de Estacionamento</strong>: Isso pode ajudar a evitar que o carro seja movido.",
        ],
      },
      { type: "h3", html: "Instale Dispositivos de Segurança" },
      {
        type: "ul",
        items: [
          "<strong>Alarmes</strong>: Um bom sistema de alarme pode ser um grande dissuasor para ladrões.",
          "<strong>Câmeras de Segurança</strong>: Instalar câmeras em casa pode ajudar a monitorar seu carro.",
        ],
      },
      { type: "h3", html: "Mantenha o Veículo em Boas Condições" },
      {
        type: "p",
        html: "Um carro bem mantido é menos suscetível a problemas mecânicos que podem ocorrer na estrada. Além disso, um veículo em boas condições é mais valorizado.",
      },
      { type: "h2", html: "O Papel da Tecnologia na Proteção Veicular" },
      {
        type: "p",
        html: "A tecnologia tem desempenhado um papel crucial na proteção veicular. Aqui estão algumas inovações que podem ajudar:",
      },
      { type: "h3", html: "Sistemas de Rastreamento" },
      {
        type: "p",
        html: "Os sistemas de rastreamento modernos permitem que você localize seu veículo em tempo real. Isso é especialmente útil em caso de roubo. Algumas opções populares incluem:",
      },
      {
        type: "ul",
        items: [
          "<strong>GPS</strong>: Permite rastreamento em tempo real e pode ser integrado a aplicativos de smartphone.",
          "<strong>Aplicativos de Segurança</strong>: Muitos serviços de rastreamento oferecem aplicativos que permitem monitorar seu carro de qualquer lugar.",
        ],
      },
      { type: "h3", html: "Alarmes Inteligentes" },
      {
        type: "p",
        html: "Os alarmes inteligentes podem enviar notificações para o seu smartphone em caso de atividade suspeita. Isso significa que você pode agir rapidamente se algo acontecer com seu veículo.",
      },
      { type: "h2", html: "O Que Fazer em Caso de Roubo ou Acidente" },
      {
        type: "p",
        html: "Se o pior acontecer e seu carro for roubado ou você se envolver em um acidente, siga estas etapas:",
      },
      {
        type: "ol",
        items: [
          "<strong>Notifique a Polícia</strong>: Sempre faça um boletim de ocorrência. Isso é essencial para qualquer reclamação de seguro.",
          "<strong>Contate sua Seguradora</strong>: Informe sua seguradora sobre o ocorrido o mais rápido possível.",
          "<strong>Documente Tudo</strong>: Tire fotos do local e colete informações de testemunhas, se possível.",
        ],
      },
      { type: "h2", html: "Considerações Finais" },
      {
        type: "p",
        html: "A proteção veicular é um investimento que pode salvar você de grandes dores de cabeça e perdas financeiras. Ao escolher a melhor opção para o seu carro, considere suas necessidades, compare diferentes serviços e adote medidas de segurança adicionais. Lembre-se de que a segurança do seu veículo começa com você.",
      },
      {
        type: "p",
        html: "Agora que você está mais informado sobre como garantir a segurança do seu carro, que tal revisar suas opções de proteção veicular? Avalie o que melhor se adapta ao seu estilo de vida e faça a escolha certa para proteger seu patrimônio.",
      },
    ],
  },
  {
    slug: "os-benefícios-da-proteção-veicular-para-seu-veículo",
    title: "Os Benefícios da Proteção Veicular Para Seu Veículo",
    date: "22 de set.",
    readTime: "3 min de leitura",
    excerpt:
      "A proteção veicular é uma opção cada vez mais popular entre os proprietários de veículos. Com o aumento da criminalidade e a crescente preocupação com a segurança, muitos motoristas estão buscando maneiras de garantir que seus bens estejam protegidos. Neste post, vamos explorar os principais benefícios da proteção veicular e como ela pode ser uma escolha inteligente para você e seu veículo.",
    blocks: [
      {
        type: "p",
        html: "A proteção veicular é uma opção cada vez mais popular entre os proprietários de veículos. Com o aumento da criminalidade e a crescente preocupação com a segurança, muitos motoristas estão buscando maneiras de garantir que seus bens estejam protegidos. Neste post, vamos explorar os principais benefícios da proteção veicular e como ela pode ser uma escolha inteligente para você e seu veículo.",
      },
      { type: "img", image: imgBeneficios, alt: "Close-up view of a car with a protective cover" },
      { type: "h2", html: "O Que É Proteção Veicular?" },
      {
        type: "p",
        html: "A proteção veicular é um serviço que oferece cobertura para veículos em caso de roubo, furto, colisão e outros danos. Diferente do seguro tradicional, a proteção veicular é geralmente oferecida por associações ou cooperativas, que funcionam de maneira diferente das seguradoras convencionais.",
      },
      { type: "h3", html: "Como Funciona?" },
      {
        type: "p",
        html: "A proteção veicular funciona através de um sistema de cotas, onde os associados pagam mensalmente para garantir a cobertura de seus veículos. Em caso de sinistro, a associação se responsabiliza por indenizar o associado, de acordo com as regras estabelecidas no contrato.",
      },
      { type: "h2", html: "Benefícios da Proteção Veicular" },
      { type: "h3", html: "1. Custo-Benefício" },
      {
        type: "p",
        html: "Um dos principais atrativos da proteção veicular é o custo. Em geral, as mensalidades são mais acessíveis do que as de um seguro tradicional. Isso se deve ao fato de que as associações não têm os mesmos custos operacionais que as seguradoras.",
      },
      { type: "h3", html: "2. Cobertura Abrangente" },
      { type: "p", html: "A proteção veicular oferece uma gama de coberturas que podem incluir:" },
      {
        type: "ul",
        items: [
          "<strong>Roubo e furto</strong>: Indenização em caso de roubo ou furto do veículo.",
          "<strong>Danos a terceiros</strong>: Cobertura para danos causados a outros veículos ou propriedades.",
          "<strong>Colisão</strong>: Indenização em caso de acidentes.",
        ],
      },
      {
        type: "p",
        html: "Essas coberturas podem variar de acordo com a associação, por isso é importante ler o contrato com atenção.",
      },
      { type: "h3", html: "3. Atendimento Personalizado" },
      {
        type: "p",
        html: "As associações de proteção veicular costumam oferecer um atendimento mais personalizado. Isso significa que você pode ter um contato mais próximo e direto com a equipe responsável, facilitando a resolução de problemas e dúvidas.",
      },
      { type: "h3", html: "4. Facilidade na Adesão" },
      {
        type: "p",
        html: "A adesão à proteção veicular é geralmente mais simples e rápida do que a contratação de um seguro. Muitas associações permitem que você se inscreva online, sem a necessidade de uma análise de perfil tão rigorosa quanto a exigida pelas seguradoras.",
      },
      { type: "h3", html: "5. Menos Burocracia" },
      {
        type: "p",
        html: "Um dos pontos que mais incomodam os motoristas ao contratar um seguro é a burocracia. Na proteção veicular, o processo de sinistro tende a ser mais ágil, com menos exigências documentais.",
      },
      { type: "h2", html: "Considerações Importantes" },
      { type: "h3", html: "1. Limitações e Exclusões" },
      {
        type: "p",
        html: "É fundamental estar ciente das limitações e exclusões da proteção veicular. Por exemplo, algumas associações podem não cobrir veículos com mais de um certo número de anos ou podem ter restrições para veículos de alto valor.",
      },
      { type: "h3", html: "2. Comparação com Seguro Tradicional" },
      {
        type: "p",
        html: "Embora a proteção veicular tenha suas vantagens, é importante comparar com o seguro tradicional. O seguro pode oferecer coberturas adicionais, como assistência 24 horas e carro reserva, que podem ser valiosas em determinadas situações.",
      },
      { type: "h3", html: "3. Escolha da Associação" },
      {
        type: "p",
        html: "A escolha da associação de proteção veicular é crucial. Pesquise sobre a reputação da empresa, leia avaliações de outros associados e verifique se a associação é regulamentada.",
      },
      { type: "h2", html: "Exemplos de Situações em Que a Proteção Veicular é Útil" },
      { type: "h3", html: "1. Roubo de Veículo" },
      {
        type: "p",
        html: "Imagine que você estacionou seu carro em um local público e, ao voltar, percebe que ele foi roubado. Com a proteção veicular, você pode acionar a associação e receber a indenização rapidamente, minimizando o impacto financeiro.",
      },
      { type: "h3", html: "2. Acidente de Trânsito" },
      {
        type: "p",
        html: "Se você se envolver em um acidente, a proteção veicular pode cobrir os danos ao seu veículo e a terceiros, evitando que você tenha que arcar com todos os custos.",
      },
      { type: "h3", html: "3. Danos por Fenômenos Naturais" },
      {
        type: "p",
        html: "Algumas associações oferecem cobertura para danos causados por fenômenos naturais, como granizo ou enchentes. Isso pode ser um grande alívio em regiões onde esses eventos são comuns.",
      },
      { type: "h2", html: "Conclusão" },
      {
        type: "p",
        html: "A proteção veicular é uma alternativa viável e econômica para quem busca segurança e tranquilidade em relação ao seu veículo. Com uma variedade de coberturas e um atendimento mais personalizado, essa opção pode ser a solução ideal para muitos motoristas.",
      },
      {
        type: "p",
        html: "Se você está considerando a proteção veicular, faça uma pesquisa cuidadosa, compare opções e escolha a associação que melhor atende às suas necessidades. Lembre-se, proteger seu veículo é um investimento na sua segurança e tranquilidade.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

/** Os outros posts, na ordem do blog (regra usada em "Posts recentes"). */
export function getRecentPosts(slug: string): Post[] {
  return posts.filter((post) => post.slug !== slug).slice(0, 3);
}
