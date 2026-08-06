import type { Locale } from "./config";

export type DocsBlock =
  | { kind: "h3" | "h4"; text: string }
  | { kind: "p"; text: string }
  | { kind: "ul" | "ol"; items: string[] }
  | { kind: "callout"; tone: "note" | "important" | "tip"; text: string }
  | { kind: "image"; name: string; alt: string };

export type DocsMessages = {
  meta: { title: string; description: string; ogTitle: string; ogDescription: string };
  brand: { name: string; tagline: string };
  nav: { topics: string; close: string; sidebarLabel: string };
  toc: {
    mensagem: string;
    conceitos: string;
    instalacao: string;
    primeirosPassos: string;
    adicionandoMusica: string;
    enviandoNuvem: string;
    realizandoAlteracoes: string;
    backup: string;
    baixando: string;
    suporte: string;
  };
  callouts: { note: string; important: string; tip: string };
  imagesNote: string;
  footer: { email: string; dev: string };
  sections: {
    mensagem: { blocks: DocsBlock[] };
    conceitos: { blocks: DocsBlock[] };
    instalacao: { blocks: DocsBlock[] };
    primeirosPassos: { blocks: DocsBlock[] };
    adicionandoMusica: { blocks: DocsBlock[] };
    enviandoNuvem: { blocks: DocsBlock[] };
    realizandoAlteracoes: { blocks: DocsBlock[] };
    baixando: { blocks: DocsBlock[] };
    backup: { blocks: DocsBlock[] };
    suporte: { blocks: DocsBlock[] };
  };
};

const ptBR: DocsMessages = {
  meta: {
    title: "Documentação: Ottavada",
    description:
      "Documentação oficial do Ottavada. Guias, referência e tutoriais para organizar e sincronizar partituras da sua orquestra.",
    ogTitle: "Documentação: Ottavada",
    ogDescription: "Guias, referência e tutoriais do Ottavada.",
  },
  brand: { name: "Ottavada", tagline: "O seu maestro de partituras" },
  nav: { topics: "Tópicos", close: "Fechar menu", sidebarLabel: "Navegação da documentação" },
  toc: {
    mensagem: "Mensagem do desenvolvedor",
    conceitos: "Conceitos essenciais",
    instalacao: "Instalação",
    primeirosPassos: "Primeiros passos",
    adicionandoMusica: "Adicionando música",
    enviandoNuvem: "Enviando para a nuvem",
    realizandoAlteracoes: "Realizando alterações",
    backup: "Recuperando backup",
    baixando: "Baixando no computador de ensaio",
    suporte: "Suporte",
  },
  callouts: { note: "Observação", important: "Importante", tip: "Dica" },
  imagesNote: "Desculpe, mas em seu idioma as imagens estão apenas em inglês.",
  footer: {
    email: "Email de contato: ottavada@hotmail.com",
    dev: "Desenvolvido por Rhafaell (faell4328)",
  },
  sections: {
    mensagem: {
      blocks: [
        {
          kind: "p",
          text: "O Ottavada está em fase inicial de desenvolvimento. Tentei mantê-lo o mais simples e flexível possível, mas ainda há muitas funcionalidades que gostaria de implementar e outras sobre as quais tenho dúvidas.",
        },
        {
          kind: "p",
          text: "Por isso, seu feedback é muito importante. Envie opiniões, ideias, críticas ou qualquer outra sugestão para **ottavada@hotmail.com**. Isso ajuda (e muito) o projeto.",
        },
        {
          kind: "p",
          text: "Outra coisa **muito importante**, essa documentação foi projetada para ser a mais enxuta possível, então leia-a por completo para conseguir utilizar a ferramenta sem confusão ou dor de cabeça.",
        },
      ],
    },
    conceitos: {
      blocks: [
        { kind: "h3", text: "Como Funciona?" },
        { kind: "h4", text: "Computador do Maestro" },
        {
          kind: "p",
          text: "É o computador responsável por adicionar, editar e remover músicas, partituras, categorias, compositores, arranjadores e enviar backups para o provedor de nuvem.",
        },
        { kind: "h4", text: "Provedor de Nuvem" },
        {
          kind: "p",
          text: "É o intermediador entre os computadores. Ele recebe os arquivos enviados pelo **Computador do Maestro** e os repassa para os outros computadores.",
        },
        { kind: "h4", text: "Computador de Ensaio" },
        {
          kind: "p",
          text: "É o computador utilizado unicamente para consultar as músicas e partituras **permitidas** pelo **computador do maestro**.",
        },
        { kind: "h3", text: "Limitações" },
        { kind: "h4", text: "Mais de um computador maestro sendo usado ao mesmo tempo" },
        {
          kind: "p",
          text: "O Ottavada não suporta o uso simultâneo de mais de um **computador do maestro**. Essa é uma limitação intencional da arquitetura: como o Ottavada não depende de um servidor central, não há custo alto de manutenção para o desenvolvedor, e por isso a ferramenta pode ser totalmente gratuita, sem assinatura, sem cobrança e sem nada vendido dentro dela.",
        },
        {
          kind: "p",
          text: "Você pode ter mais de um **computador do maestro**, desde que sejam usados em **momentos diferentes**. Como o Ottavada envia informações para o provedor de nuvem continuamente, ter vários enviando ao mesmo tempo pode causar conflitos e perda de dados. Caso precise usar simultaneamente, você pode fazer, mas assumindo o risco de conflitos. **Uma solução para esse cenário já está em planejamento**.",
        },
        {
          kind: "callout",
          tone: "note",
          text: "O **computador do ensaio** não tem essa limitação, pois é usado apenas para leitura e não envia nada para a nuvem.",
        },
        { kind: "h3", text: "Músicas e partituras" },
        {
          kind: "p",
          text: "Agora que você entende como os computadores se conectam, vamos ao conteúdo em si. O Ottavada funciona com base no que você **já tem** organizado no seu computador. Ele não cria uma estrutura nova: ele lê a que você já usa.",
        },
        { kind: "p", text: "A ideia é simples:" },
        {
          kind: "ul",
          items: [
            "Cada **música** é uma **pasta**.",
            "Cada **partitura** é um **arquivo** dentro dessa pasta.",
          ],
        },
        {
          kind: "p",
          text: "Quando você aponta uma pasta para o Ottavada, ele a **indexa**, ou seja, lê a pasta e os arquivos dentro dela para entender que aquela pasta é a música X e cada arquivo é uma partitura de um instrumento. Isso se chama **indexar pasta (diretório)**.",
        },
        {
          kind: "p",
          text: "O Ottavada possui um sistema de sugestão de nome da música e dos instrumentos. Para que ele funcione é preciso:",
        },
        {
          kind: "ul",
          items: [
            "O **nome da pasta** ser o **nome da música**.",
            "O **nome do arquivo** ser o **nome do instrumento**.",
          ],
        },
        { kind: "p", text: "Exemplo de uma pasta bem organizada:" },
        {
          kind: "ul",
          items: [
            "**Can-Can/**\n  - **Score.mscz** ou **Can-Can - Score.mscz**\n  - **Flauta.mscz** ou **Can-Can - Flauta.mscz**\n  - **Violino.mscz** ou **Can-Can - Violino.mscz**\n  - **Cello.mscz** ou **Can-Can - Cello.mscz**",
          ],
        },
        {
          kind: "p",
          text: "Com isso o nome da música sugerida é **Can-Can** e os instrumentos: **score**, **flauta**, **violino** e **cello**. Caso não seja identificado um instrumento válido no nome do arquivo, o campo fica vazio, sendo necessário preenchê-lo manualmente.",
        },
        {
          kind: "p",
          text: "A ideia veio para agilizar o cadastro de músicas no Ottavada, observando um padrão: **nome da música na pasta** e **nome do instrumento no arquivo**.",
        },
        {
          kind: "callout",
          tone: "note",
          text: "Internamente, a partitura com todos os instrumentos (chamada de **score** ou **grade**) também é tratada como um instrumento. Ela aparece sempre no topo da lista dentro de uma música.",
        },
        { kind: "h3", text: "Regras" },
        {
          kind: "p",
          text: "O Ottavada aplica algumas regras para manter a biblioteca organizada e evitar conflitos. São elas:",
        },
        { kind: "h4", text: "Status de Música e Partitura" },
        {
          kind: "p",
          text: "Toda **música** e **partitura** possui um **status** que define o que será ou não enviado para o **computador de ensaio**.",
        },
        { kind: "p", text: "**Status Música:**" },
        {
          kind: "ul",
          items: [
            "**Envio permitido:** a música é enviada para o **computador de ensaio** e tem ao menos um instrumento com status **envio permitido**.",
            "**Envio não permitido:** a música não é enviada para o **computador de ensaio** e tem todos os instrumentos com status **envio não permitido**.",
            "**Sem partitura:** a música não é enviada para o **computador de ensaio** e, além disso, não possui nenhuma partitura.",
          ],
        },
        { kind: "p", text: "**Status Partitura:**" },
        {
          kind: "ul",
          items: [
            "**Envio permitido:** a partitura é enviada para o **computador de ensaio**.",
            "**Envio não permitido:** a partitura não é enviada para o **computador de ensaio**.",
            "**Ignorado:** a partitura é ignorada pelo Ottavada, como se não existisse.",
          ],
        },
        { kind: "callout", tone: "tip", text: "Ao clicar na imagem, você poderá vê-la em tela cheia." },
        {
          kind: "p",
          text: "**Exemplo:** Na imagem abaixo, o **Computador do Maestro** (esquerda) tem uma música cuja partitura de **Oboé I** está com status **envio não permitido**. Note que no **Computador de Ensaio** (direita), essa música não aparece.",
        },
        { kind: "image", name: "image1", alt: "" },
        {
          kind: "p",
          text: "Da mesma forma, se a música inteira estiver com status **envio não permitido**, ela também não aparecerá no computador de ensaio.",
        },
        { kind: "image", name: "image2", alt: "" },
        { kind: "h4", text: "Não é permitido duplicar" },
        {
          kind: "p",
          text: "**Músicas com o mesmo nome:** você pode ter músicas com o mesmo nome, desde que tenham **compositor** ou **arranjador** diferente. Por exemplo, pode ter \"Can-Can\" sem compositor, \"Can-Can\" com compositor X, ou \"Can-Can\" com compositor X e arranjador Y — essas são consideradas músicas diferentes.",
        },
        {
          kind: "p",
          text: "No entanto, se você adicionar uma música sem compositor e sem arranjador, e depois tentar adicionar outra com o mesmo nome também sem compositor e sem arranjador, será considerado duplicação. Da mesma forma, se você adicionar uma música com compositor X, e depois tentar adicionar outra com o mesmo nome e compositor X, também será duplicação.",
        },
        {
          kind: "p",
          text: "**Partituras com o mesmo nome:** não é permitido ter o mesmo instrumento duas vezes na mesma música, por exemplo: **Violino** e **Violino**. É necessário diferenciar, ex: **Violino I** e **Violino II** ou **Violino** e **Violino (Solo)**. Mesmo sendo arquivos com extensões diferentes, ex: **Violino.mus** e **Violino.pdf**, é considerado duplicação.",
        },
      ],
    },
    instalacao: {
      blocks: [
        { kind: "p", text: "Na página home, clique em **Baixar gratuitamente**." },
        {
          kind: "p",
          text: "Será baixado o \"ottavada.cmd\"; ao clicar nele, aparecerá um aviso, mas basta clicar em **Executar**.",
        },
        { kind: "image", name: "image3", alt: "" },
        {
          kind: "p",
          text: "Será aberto o script de instalação que identifica o seu sistema operacional e instala o Ottavada de acordo com ele.",
        },
        { kind: "image", name: "image4", alt: "" },
        { kind: "p", text: "Após a instalação, o Ottavada será iniciado." },
      ],
    },
    primeirosPassos: {
      blocks: [
        { kind: "p", text: "Ao abrir o Ottavada pela primeira vez, será iniciada a etapa de configuração." },
        { kind: "h3", text: "1ª Etapa: Selecionar Idioma" },
        {
          kind: "p",
          text: "Aqui você seleciona o idioma que deseja que o Ottavada use. O aplicativo sugere um idioma com base na configuração do seu computador, mas você pode alterar para o de sua preferência.",
        },
        { kind: "h3", text: "2ª Etapa: Tipo de Computador" },
        { kind: "p", text: "Aqui você seleciona o tipo de computador. Temos dois:" },
        {
          kind: "ul",
          items: [
            "**Computador do Maestro**: responsável por adicionar, editar e remover músicas e partituras, controlando o que vai ou não para os outros computadores.",
            "**Computador de Ensaio**: utilizado apenas para leitura das músicas e partituras que o **computador do maestro** disponibilizou.",
          ],
        },
        { kind: "h3", text: "3ª Etapa: Nome do Computador e Nome da Organização ou Instituição" },
        {
          kind: "p",
          text: "Aqui basta colocar o nome do seu computador (por exemplo: \"Computador de Casa\" ou \"Computador da Orquestra\") e, no outro campo, o nome da orquestra, banda, instituição ou apenas um nome para uso pessoal.",
        },
        { kind: "h3", text: "4ª Etapa: Configuração do Provedor de Nuvem" },
        {
          kind: "p",
          text: "Atualmente o Ottavada suporta o **Koofr** (recomendado) e o **Google Drive**. O Koofr é recomendado porque é **muito** mais rápido que o Google Drive, mas, em contrapartida, é mais chato de configurar.",
        },
        {
          kind: "callout",
          tone: "important",
          text: "Você precisa usar a mesma conta do provedor de nuvem nos outros computadores com Ottavada. Isso é necessário para que todos consigam acessar os mesmos arquivos.",
        },
        { kind: "h4", text: "Koofr" },
        {
          kind: "p",
          text: "Caso você não tenha uma conta, acesse: [Koofr](https://koofr.eu) ou pesquise por **koofr** no Google. Recomendo criar a conta pelo Google: o processo é mais rápido.",
        },
        {
          kind: "p",
          text: "Logado no Koofr e na página inicial do Drive, clique no canto superior direito e selecione **Preferências**.",
        },
        { kind: "image", name: "image5", alt: "" },
        {
          kind: "p",
          text: "Vá em **Password**. Em **Passwords da App**, coloque um nome (por exemplo: \"Ottavada\") e clique em **Gerar**.",
        },
        { kind: "image", name: "image6", alt: "" },
        {
          kind: "p",
          text: "Será aberto um pop-up com sua senha gerada, clique no botão de **Copiar**.",
        },
        { kind: "image", name: "image7", alt: "" },
        {
          kind: "p",
          text: "Recomendo **salvar essa senha**: ela será usada nos seus outros computadores com Ottavada.",
        },
        {
          kind: "p",
          text: "Voltando ao Ottavada, coloque o e-mail que você utilizou para acessar o Koofr (caso seja pelo Gmail, use o mesmo e-mail do Gmail) e depois a senha que você copiou.",
        },
        { kind: "h4", text: "Google Drive" },
        {
          kind: "p",
          text: "Aqui é bem mais simples que o Koofr, mas, em contrapartida, é **muito** mais lento. Basta clicar no botão **Configurar e testar Google Drive**. Será aberto o navegador para você selecionar uma conta e pronto.",
        },
        { kind: "image", name: "image8", alt: "" },
        { kind: "h3", text: "5ª Etapa: Revisão das informações" },
        {
          kind: "p",
          text: "E, finalmente, temos a tela de revisão das informações, mostrando o nome do computador, o nome da orquestra ou instituição, o tipo de computador e o provedor de nuvem.",
        },
      ],
    },
    adicionandoMusica: {
      blocks: [
        {
          kind: "p",
          text: "Como explicado em **Conceitos essenciais**, o Ottavada indexa pastas e sugere nomes com base no padrão: **nome da música na pasta** e **nome do instrumento no arquivo**.",
        },
        { kind: "p", text: "**Pasta** e **arquivos** do exemplo:" },
        { kind: "p", text: "Pasta:" },
        { kind: "image", name: "image9", alt: "" },
        { kind: "p", text: "Arquivos dentro da pasta:" },
        { kind: "image", name: "image10", alt: "" },
        {
          kind: "p",
          text: "Agora vamos ver na prática: para indexar um diretório, clique no ícone de uma pasta com uma lupa, no topo à direita.",
        },
        { kind: "image", name: "image11", alt: "" },
        {
          kind: "p",
          text: "Ao clicar, será aberto o Explorador de Arquivos. Navegue até a pasta com as partituras, selecione-a e clique em **Selecionar pasta**.",
        },
        { kind: "image", name: "image12", alt: "" },
        {
          kind: "p",
          text: "Aparecerá um modal com os campos **Nome da Música**, **Nome do Compositor**, **Nome do Arranjador** e **os instrumentos**. Cada arquivo é considerado um instrumento pelo Ottavada. Assim, mesmo que a partitura com todos os instrumentos juntos não seja um instrumento específico, ela é considerada um instrumento com nomes como **Score**, **Grade** ou outros.",
        },
        { kind: "image", name: "image13", alt: "" },
        {
          kind: "callout",
          tone: "important",
          text: "O nome que você colocar na música ou no instrumento dentro do Ottavada não altera o nome do arquivo original no seu computador.",
        },
      ],
    },
    enviandoNuvem: {
      blocks: [
        {
          kind: "p",
          text: "Após adicionar suas músicas, é hora de enviá-las para o **provedor de nuvem**, e o processo é bem simples. Basta clicar no ícone de **sync** (duas setas em círculo se apontando), localizado ao lado do botão de adicionar partitura.",
        },
        { kind: "image", name: "image14", alt: "" },
        {
          kind: "p",
          text: "Ao clicar no ícone de sync, o Ottavada faz uma varredura em todas as músicas e partituras que você adicionou, modificou ou removeu, e abre o **modal com relatório**. No exemplo, só foi adicionada uma música e alguns instrumentos, então a imagem mostra apenas isso, mas se houvesse outras alterações elas também apareceriam.",
        },
        { kind: "image", name: "image15", alt: "" },
        {
          kind: "p",
          text: "O envio para a nuvem só é efetivamente realizado depois que você clica em **continuar**. Ao clicar, será exibida uma barra com o progresso do envio das músicas e partituras.",
        },
        { kind: "image", name: "image16", alt: "" },
        {
          kind: "callout",
          tone: "note",
          text: "Sempre revise com atenção antes de clicar em **continuar**. As alterações listadas no relatório são exatamente o que será enviado para a nuvem.",
        },
        {
          kind: "callout",
          tone: "note",
          text: "Caso identifique algum problema, por exemplo, o status de uma música errado, clique em **cancelar**, corrija o que for necessário e clique no ícone de sync novamente.",
        },
      ],
    },
    realizandoAlteracoes: {
      blocks: [
        {
          kind: "p",
          text: "Exemplo: precisamos alterar a partitura de **Oboé I**. Abra a música clicando nela e dê dois cliques na partitura do Oboé I.",
        },
        { kind: "image", name: "image17", alt: "" },
        {
          kind: "p",
          text: "No caso, é um arquivo **.mscz**, que é aberto no seu computador com MuseScore. À esquerda está a partitura antes da alteração e à direita, a alterada (foi adicionado o trecho marcado em vermelho).",
        },
        { kind: "image", name: "image18", alt: "" },
        {
          kind: "p",
          text: "Após fazer a alteração, clique no ícone de **sync** (duas setas em círculo). O relatório mostrará que o arquivo foi alterado e o status mudará para **envio não permitido**.",
        },
        { kind: "image", name: "image19", alt: "" },
        {
          kind: "p",
          text: "**Se a alteração ainda não está pronta:** clique em **continuar**. A partitura será enviada com status **envio não permitido** e não aparecerá nos computadores de ensaio.",
        },
        {
          kind: "p",
          text: "**Quando a alteração estiver pronta:** clique em **cancelar** no relatório. Depois, vá até a música e a partitura.",
        },
        { kind: "image", name: "image20", alt: "" },
        {
          kind: "p",
          text: "O status estará como **envio não permitido** (porque a partitura foi alterada). Clique nos três pontinhos e selecione **Permitir para envio**.",
        },
        { kind: "image", name: "image21", alt: "" },
        {
          kind: "p",
          text: "Agora, ao clicar novamente no ícone de **sync**, o relatório mostrará o status como **envio permitido** e a partitura será enviada para os computadores de ensaio. O processo é o mesmo descrito em [enviando para nuvem](#enviando-nuvem).",
        },
      ],
    },
    baixando: {
      blocks: [
        { kind: "h3", text: "Instalando no computador de ensaio" },
        {
          kind: "p",
          text: "O processo é o mesmo do tópico de [instalação](#instalacao). A única diferença é que, na 2ª etapa, você seleciona **computador de ensaio**.",
        },
        {
          kind: "callout",
          tone: "important",
          text: "Você deve usar o **mesmo provedor de nuvem** (Koofr ou Google Drive) e a **mesma conta** que está no **computador do maestro**. Caso contrário, os computadores não conseguirão trocar informações.",
        },
        { kind: "p", text: "Na tela inicial do Ottavada, clique no ícone de **sync**." },
        { kind: "image", name: "image22", alt: "" },
        { kind: "p", text: "Será mostrado o progresso do download das músicas e partituras." },
        { kind: "image", name: "image23", alt: "" },
        {
          kind: "p",
          text: "E pronto, simples assim. O que foi adicionado, modificado e até removido no **computador do maestro** já aparece no **computador de ensaio**. No nosso exemplo foi apenas adicionado e alterado (foi alterada a de **Oboé I**, mas como foi definido como status **envio permitido** ele apareceu).",
        },
        { kind: "image", name: "image24", alt: "" },
      ],
    },
    backup: {
      blocks: [
        {
          kind: "p",
          text: "Vamos simular que seu computador estragou e você comprou um novo, e precisa recuperar todas as músicas/partituras. É muito simples e elas voltam para o mesmo lugar em que estavam no antigo computador.",
        },
        {
          kind: "p",
          text: "Você precisa instalar o Ottavada no computador e seguir os procedimentos do [instalação](#instalacao), na 2ª etapa, você seleciona **computador do maestro** e usa o mesmo provedor de nuvem e credenciais (no caso do Koofr, email e senha do aplicativo ou, no caso do Google Drive, acesso à conta).",
        },
        { kind: "p", text: "Basta ir em configurações (ícone de engrenagem)." },
        { kind: "image", name: "image25", alt: "" },
        { kind: "p", text: "Role a tela até a seção **backup de nuvem** e clicar em **importar backup**." },
        { kind: "image", name: "image26", alt: "" },
        {
          kind: "p",
          text: "Irá mostrar o progresso e ao final os arquivos estarão nas pastas originais e também no Ottavada.",
        },
        { kind: "image", name: "image27", alt: "" },
      ],
    },
    suporte: {
      blocks: [
        {
          kind: "p",
          text: "Em caso de dúvidas, entre em contato pelo email [ottavada@hotmail.com](mailto:ottavada@hotmail.com) ou use o chatbot no canto inferior da tela.",
        },
      ],
    },
  },
};

const en: DocsMessages = {
  meta: {
    title: "Documentation: Ottavada",
    description:
      "Official Ottavada documentation. Guides, reference and tutorials to organize and sync your orchestra's sheet music.",
    ogTitle: "Documentation: Ottavada",
    ogDescription: "Ottavada guides, reference and tutorials.",
  },
  brand: { name: "Ottavada", tagline: "Your sheet music conductor" },
  nav: { topics: "Topics", close: "Close menu", sidebarLabel: "Documentation navigation" },
  toc: {
    mensagem: "Message from the developer",
    conceitos: "Essential concepts",
    instalacao: "Installation",
    primeirosPassos: "First steps",
    adicionandoMusica: "Adding music",
    enviandoNuvem: "Sending to the cloud",
    realizandoAlteracoes: "Making changes",
    backup: "Restoring a backup",
    baixando: "Downloading on the rehearsal computer",
    suporte: "Support",
  },
  callouts: { note: "Note", important: "Important", tip: "Tip" },
  imagesNote: "Sorry, but in your language the images are only available in English.",
  footer: {
    email: "Contact email: ottavada@hotmail.com",
    dev: "Developed by Rhafaell (faell4328)",
  },
  sections: {
    mensagem: {
      blocks: [
        {
          kind: "p",
          text: "Ottavada is in the early stages of development. I tried to keep it as simple and flexible as possible, but there are still many features I would like to implement and others I have questions about.",
        },
        {
          kind: "p",
          text: "That's why your feedback is very important. Send opinions, ideas, criticism or any other suggestion to **ottavada@hotmail.com**. It helps the project a lot.",
        },
        {
          kind: "p",
          text: "Another **very important** thing: this documentation was designed to be as concise as possible, so read it all the way through to use the tool without confusion or headaches.",
        },
      ],
    },
    conceitos: {
      blocks: [
        { kind: "h3", text: "How does it work?" },
        { kind: "h4", text: "Conductor's computer" },
        {
          kind: "p",
          text: "It is the computer responsible for adding, editing and removing songs, scores, categories, composers, arrangers, and sending backups to the cloud provider.",
        },
        { kind: "h4", text: "Cloud Provider" },
        {
          kind: "p",
          text: "It is the intermediary between the computers. It receives the files sent by the **Conductor's computer** and forwards them to the other computers.",
        },
        { kind: "h4", text: "Rehearsal Computer" },
        {
          kind: "p",
          text: "It is the computer used solely to consult the songs and scores **allowed** by the **conductor's computer**.",
        },
        { kind: "h3", text: "Limitations" },
        { kind: "h4", text: "More than one conductor computer being used at the same time" },
        {
          kind: "p",
          text: "Ottavada does not support the simultaneous use of more than one **conductor's computer**. This is an intentional architectural limitation: since Ottavada does not depend on a central server, there is no high maintenance cost for the developer, which is why the tool can be completely free, with no subscription, no charges, and nothing sold within it.",
        },
        {
          kind: "p",
          text: "You can have more than one **conductor's computer**, as long as they are used at **different times**. Since Ottavada continuously sends information to the cloud provider, having several sending at the same time can cause conflicts and data loss. If you need to use them simultaneously, you can, but assuming the risk of conflicts. **A solution for this scenario is already being planned**.",
        },
        {
          kind: "callout",
          tone: "note",
          text: "The **rehearsal computer** does not have this limitation, as it is used only for reading and does not send anything to the cloud.",
        },
        { kind: "h3", text: "Songs and scores" },
        {
          kind: "p",
          text: "Now that you understand how the computers connect, let's get to the content itself. Ottavada works based on what you **already have** organized on your computer. It does not create a new structure: it reads the one you already use.",
        },
        { kind: "p", text: "The idea is simple:" },
        {
          kind: "ul",
          items: [
            "Each **song** is a **folder**.",
            "Each **score** is a **file** inside that folder.",
          ],
        },
        {
          kind: "p",
          text: "When you point a folder to Ottavada, it **indexes** it, that is, it reads the folder and the files inside it to understand that folder is song X and each file is a score for an instrument. This is called **indexing a folder (directory)**.",
        },
        {
          kind: "p",
          text: "Ottavada has a system that suggests names for the song and instruments. For it to work, you need:",
        },
        {
          kind: "ul",
          items: [
            "The **folder name** to be the **song name**.",
            "The **file name** to be the **instrument name**.",
          ],
        },
        { kind: "p", text: "Example of a well-organized folder:" },
        {
          kind: "ul",
          items: [
            "**Can-Can/**\n  - **Score.mscz** or **Can-Can - Score.mscz**\n  - **Flauta.mscz** or **Can-Can - Flauta.mscz**\n  - **Violino.mscz** or **Can-Can - Violino.mscz**\n  - **Cello.mscz** or **Can-Can - Cello.mscz**",
          ],
        },
        {
          kind: "p",
          text: "With this, the suggested song name is **Can-Can** and the instruments: **score**, **flauta**, **violino** and **cello**. If a valid instrument is not identified in the file name, the field is left blank and must be filled in manually.",
        },
        {
          kind: "p",
          text: "The idea came from speeding up song registration in Ottavada, observing a pattern: **song name in the folder** and **instrument name in the file**.",
        },
        {
          kind: "callout",
          tone: "note",
          text: "Internally, the score with all instruments (called **score** or **grade**) is also treated as an instrument. It always appears at the top of the list inside a song.",
        },
        { kind: "h3", text: "Rules" },
        {
          kind: "p",
          text: "Ottavada applies some rules to keep the library organized and avoid conflicts. They are:",
        },
        { kind: "h4", text: "Song and Score Status" },
        {
          kind: "p",
          text: "Every **song** and **score** has a **status** that defines what will or will not be sent to the **rehearsal computer**.",
        },
        { kind: "p", text: "**Song status:**" },
        {
          kind: "ul",
          items: [
            "**Send allowed:** the song is sent to the **rehearsal computer** and has at least one instrument with status **send allowed**.",
            "**Send not allowed:** the song is not sent to the **rehearsal computer** and all its instruments have status **send not allowed**.",
            "**No score:** the song is not sent to the **rehearsal computer** and, in addition, has no score.",
          ],
        },
        { kind: "p", text: "**Score status:**" },
        {
          kind: "ul",
          items: [
            "**Send allowed:** the score is sent to the **rehearsal computer**.",
            "**Send not allowed:** the score is not sent to the **rehearsal computer**.",
            "**Ignored:** the score is ignored by Ottavada, as if it didn't exist.",
          ],
        },
        { kind: "callout", tone: "tip", text: "By clicking on the image, you can view it full screen." },
        {
          kind: "p",
          text: "**Example:** In the image below, the **Conductor's Computer** (left) has a song whose **Oboe I** score has status **send not allowed**. Note that on the **Rehearsal Computer** (right), that song does not appear.",
        },
        { kind: "image", name: "image1", alt: "" },
        {
          kind: "p",
          text: "Likewise, if the whole song has status **send not allowed**, it will also not appear on the rehearsal computer.",
        },
        { kind: "image", name: "image2", alt: "" },
        { kind: "h4", text: "Duplicates are not allowed" },
        {
          kind: "p",
          text: "**Songs with the same name:** you can have songs with the same name, as long as they have a different **composer** or **arranger**. For example, you can have \"Can-Can\" with no composer, \"Can-Can\" with composer X, or \"Can-Can\" with composer X and arranger Y — these are considered different songs.",
        },
        {
          kind: "p",
          text: "However, if you add a song with no composer and no arranger, and then try to add another with the same name also with no composer and no arranger, it will be considered a duplicate. Likewise, if you add a song with composer X, and then try to add another with the same name and composer X, it will also be a duplicate.",
        },
        {
          kind: "p",
          text: "**Scores with the same name:** it is not allowed to have the same instrument twice in the same song, for example: **Violino** and **Violino**. You need to differentiate them, e.g.: **Violino I** and **Violino II** or **Violino** and **Violino (Solo)**. Even files with different extensions, e.g.: **Violino.mus** and **Violino.pdf**, are considered duplicates.",
        },
      ],
    },
    instalacao: {
      blocks: [
        { kind: "p", text: "On the home page, click **Download for free**." },
        {
          kind: "p",
          text: "The \"ottavada.cmd\" file will be downloaded; when you click it, a warning will appear, but just click **Run**.",
        },
        { kind: "image", name: "image3", alt: "" },
        {
          kind: "p",
          text: "The installation script will open, detecting your operating system and installing Ottavada accordingly.",
        },
        { kind: "image", name: "image4", alt: "" },
        { kind: "p", text: "After installation, Ottavada will start." },
      ],
    },
    primeirosPassos: {
      blocks: [
        { kind: "p", text: "When you open Ottavada for the first time, the configuration step will start." },
        { kind: "h3", text: "Step 1: Select Language" },
        {
          kind: "p",
          text: "Here you select the language you want Ottavada to use. The app suggests a language based on your computer's settings, but you can change it to your preference.",
        },
        { kind: "h3", text: "Step 2: Computer Type" },
        { kind: "p", text: "Here you select the computer type. There are two:" },
        {
          kind: "ul",
          items: [
            "**Conductor's Computer**: responsible for adding, editing and removing songs and scores, controlling what goes or doesn't go to the other computers.",
            "**Rehearsal Computer**: used only for reading the songs and scores that the **conductor's computer** has made available.",
          ],
        },
        { kind: "h3", text: "Step 3: Computer Name and Organization or Institution Name" },
        {
          kind: "p",
          text: "Here you just enter your computer name (for example: \"Home Computer\" or \"Orchestra Computer\") and, in the other field, the name of the orchestra, band, institution or just a name for personal use.",
        },
        { kind: "h3", text: "Step 4: Cloud Provider Configuration" },
        {
          kind: "p",
          text: "Currently Ottavada supports **Koofr** (recommended) and **Google Drive**. Koofr is recommended because it is **much** faster than Google Drive, but, on the other hand, it is more cumbersome to set up.",
        },
        {
          kind: "callout",
          tone: "important",
          text: "You must use the same cloud provider account on the other computers with Ottavada. This is necessary so that all of them can access the same files.",
        },
        { kind: "h4", text: "Koofr" },
        {
          kind: "p",
          text: "If you don't have an account, go to: [Koofr](https://koofr.eu) or search for **koofr** on Google. I recommend creating the account through Google: the process is faster.",
        },
        {
          kind: "p",
          text: "Logged into Koofr and on the Drive home page, click in the upper right corner and select **Preferences**.",
        },
        { kind: "image", name: "image5", alt: "" },
        {
          kind: "p",
          text: "Go to **Password**. Under **App Passwords**, enter a name (for example: \"Ottavada\") and click **Generate**.",
        },
        { kind: "image", name: "image6", alt: "" },
        {
          kind: "p",
          text: "A pop-up will open with your generated password; click the **Copy** button.",
        },
        { kind: "image", name: "image7", alt: "" },
        {
          kind: "p",
          text: "I recommend **saving this password**: it will be used on your other computers with Ottavada.",
        },
        {
          kind: "p",
          text: "Back in Ottavada, enter the email you used to access Koofr (if you signed up with Gmail, use the same Gmail email) and then the password you copied.",
        },
        { kind: "h4", text: "Google Drive" },
        {
          kind: "p",
          text: "This is much simpler than Koofr, but, on the other hand, it is **much** slower. Just click the **Configure and test Google Drive** button. Your browser will open so you can select an account and you're done.",
        },
        { kind: "image", name: "image8", alt: "" },
        { kind: "h3", text: "Step 5: Review of information" },
        {
          kind: "p",
          text: "And finally, we have the information review screen, showing the computer name, the orchestra or institution name, the computer type, and the cloud provider.",
        },
      ],
    },
    adicionandoMusica: {
      blocks: [
        {
          kind: "p",
          text: "As explained in **Essential concepts**, Ottavada indexes folders and suggests names based on the pattern: **song name in the folder** and **instrument name in the file**.",
        },
        { kind: "p", text: "**Folder** and **files** from the example:" },
        { kind: "p", text: "Folder:" },
        { kind: "image", name: "image9", alt: "" },
        { kind: "p", text: "Files inside the folder:" },
        { kind: "image", name: "image10", alt: "" },
        {
          kind: "p",
          text: "Now let's see it in practice: to index a directory, click the folder-with-magnifying-glass icon, in the top right.",
        },
        { kind: "image", name: "image11", alt: "" },
        {
          kind: "p",
          text: "When you click, the File Explorer will open. Navigate to the folder with the scores, select it and click **Select folder**.",
        },
        { kind: "image", name: "image12", alt: "" },
        {
          kind: "p",
          text: "A modal will appear with the fields **Song Name**, **Composer Name**, **Arranger Name** and **the instruments**. Each file is considered an instrument by Ottavada. So even though the score with all instruments together is not a specific instrument, it is considered an instrument with names like **Score**, **Grade** or others.",
        },
        { kind: "image", name: "image13", alt: "" },
        {
          kind: "callout",
          tone: "important",
          text: "The name you give the song or instrument in Ottavada does not change the original file name on your computer.",
        },
      ],
    },
    enviandoNuvem: {
      blocks: [
        {
          kind: "p",
          text: "After adding your songs, it's time to send them to the **cloud provider**, and the process is quite simple. Just click the **sync** icon (two arrows forming a circle), located next to the add-score button.",
        },
        { kind: "image", name: "image14", alt: "" },
        {
          kind: "p",
          text: "When you click the sync icon, Ottavada scans all the songs and scores you have added, modified or removed, and opens the **report modal**. In the example, only one song and a few instruments were added, so the image only shows that, but if there were other changes they would also appear.",
        },
        { kind: "image", name: "image15", alt: "" },
        {
          kind: "p",
          text: "The upload to the cloud is only actually performed after you click **continue**. When you do, a progress bar will appear showing the upload progress for songs and scores.",
        },
        { kind: "image", name: "image16", alt: "" },
        {
          kind: "callout",
          tone: "note",
          text: "Always review carefully before clicking **continue**. The changes listed in the report are exactly what will be sent to the cloud.",
        },
        {
          kind: "callout",
          tone: "note",
          text: "If you spot any problem, for example, a wrong song status, click **cancel**, fix what is needed and click the sync icon again.",
        },
      ],
    },
    realizandoAlteracoes: {
      blocks: [
        {
          kind: "p",
          text: "Example: we need to change the **Oboe I** score. Open the song by clicking on it and double-click the Oboe I score.",
        },
        { kind: "image", name: "image17", alt: "" },
        {
          kind: "p",
          text: "In this case, it is a **.mscz** file, which opens on your computer with MuseScore. On the left is the score before the change, and on the right the modified one (the section marked in red was added).",
        },
        { kind: "image", name: "image18", alt: "" },
        {
          kind: "p",
          text: "After making the change, click the **sync** icon (two arrows forming a circle). The report will show that the file was changed and the status will change to **send not allowed**.",
        },
        { kind: "image", name: "image19", alt: "" },
        {
          kind: "p",
          text: "**If the change is not ready yet:** click **continue**. The score will be sent with status **send not allowed** and will not appear on the rehearsal computers.",
        },
        {
          kind: "p",
          text: "**When the change is ready:** click **cancel** in the report. Then go to the song and the score.",
        },
        { kind: "image", name: "image20", alt: "" },
        {
          kind: "p",
          text: "The status will be **send not allowed** (because the score was changed). Click the three dots and select **Allow sending**.",
        },
        { kind: "image", name: "image21", alt: "" },
        {
          kind: "p",
          text: "Now, when you click the **sync** icon again, the report will show the status as **send allowed** and the score will be sent to the rehearsal computers. The process is the same as described in [sending to the cloud](#enviando-nuvem).",
        },
      ],
    },
    baixando: {
      blocks: [
        { kind: "h3", text: "Installing on the rehearsal computer" },
        {
          kind: "p",
          text: "The process is the same as the [installation](#instalacao) topic. The only difference is that, in step 2, you select **rehearsal computer**.",
        },
        {
          kind: "callout",
          tone: "important",
          text: "You must use the **same cloud provider** (Koofr or Google Drive) and the **same account** that is on the **conductor's computer**. Otherwise, the computers will not be able to exchange information.",
        },
        { kind: "p", text: "On the Ottavada home screen, click the **sync** icon." },
        { kind: "image", name: "image22", alt: "" },
        { kind: "p", text: "The download progress for songs and scores will be shown." },
        { kind: "image", name: "image23", alt: "" },
        {
          kind: "p",
          text: "And that's it, that simple. What was added, modified, or even removed on the **conductor's computer** already appears on the **rehearsal computer**. In our example only an addition and a change were made (the **Oboe I** score was changed, but since it was set to status **send allowed** it appeared).",
        },
        { kind: "image", name: "image24", alt: "" },
      ],
    },
    backup: {
      blocks: [
        {
          kind: "p",
          text: "Let's simulate that your computer broke and you bought a new one, and you need to recover all the songs/scores. It is very simple and they come back in the same place they were on the old computer.",
        },
        {
          kind: "p",
          text: "You need to install Ottavada on the computer and follow the [installation](#instalacao) procedures; in step 2, select **conductor's computer** and use the same cloud provider and credentials (for Koofr, email and app password; for Google Drive, account access).",
        },
        { kind: "p", text: "Just go to settings (gear icon)." },
        { kind: "image", name: "image25", alt: "" },
        { kind: "p", text: "Scroll down to the **cloud backup** section and click **import backup**." },
        { kind: "image", name: "image26", alt: "" },
        {
          kind: "p",
          text: "The progress will be shown and at the end the files will be in the original folders and also in Ottavada.",
        },
        { kind: "image", name: "image27", alt: "" },
      ],
    },
    suporte: {
      blocks: [
        {
          kind: "p",
          text: "If you have any questions, contact us by email [ottavada@hotmail.com](mailto:ottavada@hotmail.com) or use the chatbot in the lower corner of the screen.",
        },
      ],
    },
  },
};

const es: DocsMessages = {
  meta: {
    title: "Documentación: Ottavada",
    description:
      "Documentación oficial de Ottavada. Guías, referencia y tutoriales para organizar y sincronizar las partituras de tu orquesta.",
    ogTitle: "Documentación: Ottavada",
    ogDescription: "Guías, referencia y tutoriales de Ottavada.",
  },
  brand: { name: "Ottavada", tagline: "Tu director de partituras" },
  nav: { topics: "Temas", close: "Cerrar menú", sidebarLabel: "Navegación de la documentación" },
  toc: {
    mensagem: "Mensaje del desarrollador",
    conceitos: "Conceptos esenciales",
    instalacao: "Instalación",
    primeirosPassos: "Primeros pasos",
    adicionandoMusica: "Añadir música",
    enviandoNuvem: "Enviando a la nube",
    realizandoAlteracoes: "Realizando cambios",
    backup: "Recuperar copia de seguridad",
    baixando: "Descargar en el ordenador de ensayo",
    suporte: "Soporte",
  },
  callouts: { note: "Nota", important: "Importante", tip: "Consejo" },
  imagesNote: "Lo sentimos, pero en tu idioma las imágenes solo están disponibles en inglés.",
  footer: {
    email: "Email de contacto: ottavada@hotmail.com",
    dev: "Desarrollado por Rhafaell (faell4328)",
  },
  sections: {
    mensagem: {
      blocks: [
        {
          kind: "p",
          text: "Ottavada se encuentra en una fase inicial de desarrollo. Intenté mantenerlo lo más simple y flexible posible, pero todavía hay muchas funcionalidades que me gustaría implementar y otras sobre las que tengo dudas.",
        },
        {
          kind: "p",
          text: "Por eso, tu opinión es muy importante. Envía opiniones, ideas, críticas o cualquier otra sugerencia a **ottavada@hotmail.com**. Esto ayuda (y mucho) al proyecto.",
        },
        {
          kind: "p",
          text: "Otra cosa **muy importante**: esta documentación fue diseñada para ser lo más breve posible, así que léela por completo para utilizar la herramienta sin confusión ni dolores de cabeza.",
        },
      ],
    },
    conceitos: {
      blocks: [
        { kind: "h3", text: "¿Cómo funciona?" },
        { kind: "h4", text: "Ordenador del Director" },
        {
          kind: "p",
          text: "Es el ordenador responsable de añadir, editar y eliminar músicas, partituras, categorías, compositores, arreglistas y enviar copias de seguridad al proveedor de nube.",
        },
        { kind: "h4", text: "Proveedor de Nube" },
        {
          kind: "p",
          text: "Es el intermediario entre los ordenadores. Recibe los archivos enviados por el **Ordenador del Director** y los reenvía a los demás ordenadores.",
        },
        { kind: "h4", text: "Ordenador de Ensayo" },
        {
          kind: "p",
          text: "Es el ordenador utilizado únicamente para consultar las músicas y partituras **permitidas** por el **ordenador del director**.",
        },
        { kind: "h3", text: "Limitaciones" },
        { kind: "h4", text: "Más de un ordenador director usándose al mismo tiempo" },
        {
          kind: "p",
          text: "Ottavada no admite el uso simultáneo de más de un **ordenador del director**. Esta es una limitación intencional de la arquitectura: como Ottavada no depende de un servidor central, no hay un alto coste de mantenimiento para el desarrollador, y por eso la herramienta puede ser totalmente gratuita, sin suscripción, sin cobros y sin nada vendido dentro.",
        },
        {
          kind: "p",
          text: "Puedes tener más de un **ordenador del director**, siempre que se usen en **momentos diferentes**. Como Ottavada envía información al proveedor de nube continuamente, tener varios enviando al mismo tiempo puede causar conflictos y pérdida de datos. Si necesitas usarlos simultáneamente, puedes hacerlo, pero asumiendo el riesgo de conflictos. **Ya se está planificando una solución para este escenario**.",
        },
        {
          kind: "callout",
          tone: "note",
          text: "El **ordenador de ensayo** no tiene esta limitación, ya que se usa solo para lectura y no envía nada a la nube.",
        },
        { kind: "h3", text: "Músicas y partituras" },
        {
          kind: "p",
          text: "Ahora que entiendes cómo se conectan los ordenadores, vamos al contenido en sí. Ottavada funciona en base a lo que **ya tienes** organizado en tu ordenador. No crea una estructura nueva: lee la que ya usas.",
        },
        { kind: "p", text: "La idea es sencilla:" },
        {
          kind: "ul",
          items: [
            "Cada **música** es una **carpeta**.",
            "Cada **partitura** es un **archivo** dentro de esa carpeta.",
          ],
        },
        {
          kind: "p",
          text: "Cuando señalas una carpeta a Ottavada, la **indexa**, es decir, lee la carpeta y los archivos dentro de ella para entender que esa carpeta es la música X y cada archivo es una partitura de un instrumento. Esto se llama **indexar carpeta (directorio)**.",
        },
        {
          kind: "p",
          text: "Ottavada dispone de un sistema de sugerencia de nombre de la música y de los instrumentos. Para que funcione es necesario:",
        },
        {
          kind: "ul",
          items: [
            "Que el **nombre de la carpeta** sea el **nombre de la música**.",
            "Que el **nombre del archivo** sea el **nombre del instrumento**.",
          ],
        },
        { kind: "p", text: "Ejemplo de una carpeta bien organizada:" },
        {
          kind: "ul",
          items: [
            "**Can-Can/**\n  - **Score.mscz** o **Can-Can - Score.mscz**\n  - **Flauta.mscz** o **Can-Can - Flauta.mscz**\n  - **Violino.mscz** o **Can-Can - Violino.mscz**\n  - **Cello.mscz** o **Can-Can - Cello.mscz**",
          ],
        },
        {
          kind: "p",
          text: "Con esto, el nombre sugerido de la música es **Can-Can** y los instrumentos: **score**, **flauta**, **violino** y **cello**. Si no se identifica un instrumento válido en el nombre del archivo, el campo queda vacío, siendo necesario rellenarlo manualmente.",
        },
        {
          kind: "p",
          text: "La idea surgió para agilizar el registro de músicas en Ottavada, observando un patrón: **nombre de la música en la carpeta** y **nombre del instrumento en el archivo**.",
        },
        {
          kind: "callout",
          tone: "note",
          text: "Internamente, la partitura con todos los instrumentos (llamada **score** o **grade**) también se trata como un instrumento. Aparece siempre en la parte superior de la lista dentro de una música.",
        },
        { kind: "h3", text: "Reglas" },
        {
          kind: "p",
          text: "Ottavada aplica algunas reglas para mantener la biblioteca organizada y evitar conflictos. Son las siguientes:",
        },
        { kind: "h4", text: "Estado de Música y Partitura" },
        {
          kind: "p",
          text: "Toda **música** y **partitura** tiene un **estado** que define lo que se enviará o no al **ordenador de ensayo**.",
        },
        { kind: "p", text: "**Estado de la música:**" },
        {
          kind: "ul",
          items: [
            "**Envío permitido:** la música se envía al **ordenador de ensayo** y tiene al menos un instrumento con estado **envío permitido**.",
            "**Envío no permitido:** la música no se envía al **ordenador de ensayo** y todos sus instrumentos tienen estado **envío no permitido**.",
            "**Sin partitura:** la música no se envía al **ordenador de ensayo** y, además, no tiene ninguna partitura.",
          ],
        },
        { kind: "p", text: "**Estado de la partitura:**" },
        {
          kind: "ul",
          items: [
            "**Envío permitido:** la partitura se envía al **ordenador de ensayo**.",
            "**Envío no permitido:** la partitura no se envía al **ordenador de ensayo**.",
            "**Ignorado:** la partitura es ignorada por Ottavada, como si no existiera.",
          ],
        },
        { kind: "callout", tone: "tip", text: "Al hacer clic en la imagen, podrás verla a pantalla completa." },
        {
          kind: "p",
          text: "**Ejemplo:** En la imagen de abajo, el **Ordenador del Director** (izquierda) tiene una música cuya partitura de **Oboe I** está con estado **envío no permitido**. Fíjate que en el **Ordenador de Ensayo** (derecha) esa música no aparece.",
        },
        { kind: "image", name: "image1", alt: "" },
        {
          kind: "p",
          text: "Del mismo modo, si toda la música está con estado **envío no permitido**, tampoco aparecerá en el ordenador de ensayo.",
        },
        { kind: "image", name: "image2", alt: "" },
        { kind: "h4", text: "No se permite duplicar" },
        {
          kind: "p",
          text: "**Músicas con el mismo nombre:** puedes tener músicas con el mismo nombre, siempre que tengan un **compositor** o **arreglista** diferente. Por ejemplo, puedes tener \"Can-Can\" sin compositor, \"Can-Can\" con compositor X, o \"Can-Can\" con compositor X y arreglista Y — se consideran músicas diferentes.",
        },
        {
          kind: "p",
          text: "Sin embargo, si añades una música sin compositor y sin arreglista, y luego intentas añadir otra con el mismo nombre también sin compositor y sin arreglista, se considerará duplicación. De la misma forma, si añades una música con compositor X y luego intentas añadir otra con el mismo nombre y compositor X, también será duplicación.",
        },
        {
          kind: "p",
          text: "**Partituras con el mismo nombre:** no se permite tener el mismo instrumento dos veces en la misma música, por ejemplo: **Violino** y **Violino**. Es necesario diferenciarlos, por ejemplo: **Violino I** y **Violino II** o **Violino** y **Violino (Solo)**. Incluso siendo archivos con extensiones diferentes, p. ej.: **Violino.mus** y **Violino.pdf**, se considera duplicación.",
        },
      ],
    },
    instalacao: {
      blocks: [
        { kind: "p", text: "En la página de inicio, haz clic en **Descargar gratis**." },
        {
          kind: "p",
          text: "Se descargará el archivo \"ottavada.cmd\"; al hacer clic en él, aparecerá una advertencia, pero basta con hacer clic en **Ejecutar**.",
        },
        { kind: "image", name: "image3", alt: "" },
        {
          kind: "p",
          text: "Se abrirá el script de instalación, que detecta tu sistema operativo e instala Ottavada en consecuencia.",
        },
        { kind: "image", name: "image4", alt: "" },
        { kind: "p", text: "Después de la instalación, Ottavada se iniciará." },
      ],
    },
    primeirosPassos: {
      blocks: [
        { kind: "p", text: "Al abrir Ottavada por primera vez, se iniciará la etapa de configuración." },
        { kind: "h3", text: "Paso 1: Seleccionar Idioma" },
        {
          kind: "p",
          text: "Aquí seleccionas el idioma que quieres que use Ottavada. La aplicación sugiere un idioma en función de la configuración de tu ordenador, pero puedes cambiarlo al de tu preferencia.",
        },
        { kind: "h3", text: "Paso 2: Tipo de Ordenador" },
        { kind: "p", text: "Aquí seleccionas el tipo de ordenador. Hay dos:" },
        {
          kind: "ul",
          items: [
            "**Ordenador del Director**: responsable de añadir, editar y eliminar músicas y partituras, controlando lo que va o no a los demás ordenadores.",
            "**Ordenador de Ensayo**: utilizado solo para la lectura de las músicas y partituras que el **ordenador del director** haya puesto a disposición.",
          ],
        },
        { kind: "h3", text: "Paso 3: Nombre del Ordenador y Nombre de la Organización o Institución" },
        {
          kind: "p",
          text: "Aquí basta con poner el nombre de tu ordenador (por ejemplo: \"Ordenador de Casa\" o \"Ordenador de la Orquesta\") y, en el otro campo, el nombre de la orquesta, banda, institución o simplemente un nombre para uso personal.",
        },
        { kind: "h3", text: "Paso 4: Configuración del Proveedor de Nube" },
        {
          kind: "p",
          text: "Actualmente Ottavada es compatible con **Koofr** (recomendado) y **Google Drive**. Koofr se recomienda porque es **mucho** más rápido que Google Drive, pero, en contrapartida, es más tedioso de configurar.",
        },
        {
          kind: "callout",
          tone: "important",
          text: "Debes usar la misma cuenta del proveedor de nube en los demás ordenadores con Ottavada. Esto es necesario para que todos puedan acceder a los mismos archivos.",
        },
        { kind: "h4", text: "Koofr" },
        {
          kind: "p",
          text: "Si no tienes una cuenta, accede a: [Koofr](https://koofr.eu) o busca **koofr** en Google. Recomiendo crear la cuenta a través de Google: el proceso es más rápido.",
        },
        {
          kind: "p",
          text: "Con la sesión iniciada en Koofr y en la página de inicio del Drive, haz clic en la esquina superior derecha y selecciona **Preferencias**.",
        },
        { kind: "image", name: "image5", alt: "" },
        {
          kind: "p",
          text: "Ve a **Password**. En **Passwords de la App**, escribe un nombre (por ejemplo: \"Ottavada\") y haz clic en **Generar**.",
        },
        { kind: "image", name: "image6", alt: "" },
        {
          kind: "p",
          text: "Se abrirá una ventana emergente con tu contraseña generada; haz clic en el botón **Copiar**.",
        },
        { kind: "image", name: "image7", alt: "" },
        {
          kind: "p",
          text: "Recomiendo **guardar esta contraseña**: se utilizará en tus otros ordenadores con Ottavada.",
        },
        {
          kind: "p",
          text: "Volviendo a Ottavada, introduce el correo electrónico que utilizaste para acceder a Koofr (si es con Gmail, usa el mismo correo de Gmail) y luego la contraseña que copiaste.",
        },
        { kind: "h4", text: "Google Drive" },
        {
          kind: "p",
          text: "Aquí es mucho más sencillo que Koofr, pero, en contrapartida, es **mucho** más lento. Basta con hacer clic en el botón **Configurar y probar Google Drive**. Se abrirá el navegador para que selecciones una cuenta y listo.",
        },
        { kind: "image", name: "image8", alt: "" },
        { kind: "h3", text: "Paso 5: Revisión de la información" },
        {
          kind: "p",
          text: "Y, por último, tenemos la pantalla de revisión de la información, mostrando el nombre del ordenador, el nombre de la orquesta o institución, el tipo de ordenador y el proveedor de nube.",
        },
      ],
    },
    adicionandoMusica: {
      blocks: [
        {
          kind: "p",
          text: "Como se explicó en **Conceptos esenciales**, Ottavada indexa carpetas y sugiere nombres basándose en el patrón: **nombre de la música en la carpeta** y **nombre del instrumento en el archivo**.",
        },
        { kind: "p", text: "**Carpeta** y **archivos** del ejemplo:" },
        { kind: "p", text: "Carpeta:" },
        { kind: "image", name: "image9", alt: "" },
        { kind: "p", text: "Archivos dentro de la carpeta:" },
        { kind: "image", name: "image10", alt: "" },
        {
          kind: "p",
          text: "Ahora vamos a verlo en la práctica: para indexar un directorio, haz clic en el icono de una carpeta con una lupa, en la parte superior derecha.",
        },
        { kind: "image", name: "image11", alt: "" },
        {
          kind: "p",
          text: "Al hacer clic, se abrirá el Explorador de Archivos. Navega hasta la carpeta con las partituras, selecciónala y haz clic en **Seleccionar carpeta**.",
        },
        { kind: "image", name: "image12", alt: "" },
        {
          kind: "p",
          text: "Aparecerá un modal con los campos **Nombre de la Música**, **Nombre del Compositor**, **Nombre del Arreglista** y **los instrumentos**. Cada archivo es considerado un instrumento por Ottavada. Así, aunque la partitura con todos los instrumentos juntos no sea un instrumento específico, se considera un instrumento con nombres como **Score**, **Grade** u otros.",
        },
        { kind: "image", name: "image13", alt: "" },
        {
          kind: "callout",
          tone: "important",
          text: "El nombre que pongas a la música o al instrumento dentro de Ottavada no cambia el nombre del archivo original en tu ordenador.",
        },
      ],
    },
    enviandoNuvem: {
      blocks: [
        {
          kind: "p",
          text: "Después de añadir tus músicas, es hora de enviarlas al **proveedor de nube**, y el proceso es muy sencillo. Basta con hacer clic en el icono de **sync** (dos flechas formando un círculo), situado junto al botón de añadir partitura.",
        },
        { kind: "image", name: "image14", alt: "" },
        {
          kind: "p",
          text: "Al hacer clic en el icono de sync, Ottavada hace un escaneo de todas las músicas y partituras que has añadido, modificado o eliminado, y abre el **modal con el informe**. En el ejemplo, solo se añadió una música y algunos instrumentos, así que la imagen solo muestra eso, pero si hubiera otros cambios también aparecerían.",
        },
        { kind: "image", name: "image15", alt: "" },
        {
          kind: "p",
          text: "El envío a la nube solo se realiza de forma efectiva después de hacer clic en **continuar**. Al hacerlo, se mostrará una barra con el progreso del envío de las músicas y partituras.",
        },
        { kind: "image", name: "image16", alt: "" },
        {
          kind: "callout",
          tone: "note",
          text: "Revisa siempre con atención antes de hacer clic en **continuar**. Los cambios listados en el informe son exactamente lo que se enviará a la nube.",
        },
        {
          kind: "callout",
          tone: "note",
          text: "Si detectas algún problema, por ejemplo, el estado de una música equivocado, haz clic en **cancelar**, corrige lo necesario y vuelve a hacer clic en el icono de sync.",
        },
      ],
    },
    realizandoAlteracoes: {
      blocks: [
        {
          kind: "p",
          text: "Ejemplo: necesitamos cambiar la partitura de **Oboe I**. Abre la música haciendo clic en ella y haz doble clic en la partitura de Oboe I.",
        },
        { kind: "image", name: "image17", alt: "" },
        {
          kind: "p",
          text: "En este caso, es un archivo **.mscz**, que se abre en tu ordenador con MuseScore. A la izquierda está la partitura antes del cambio y a la derecha, la modificada (se añadió el fragmento marcado en rojo).",
        },
        { kind: "image", name: "image18", alt: "" },
        {
          kind: "p",
          text: "Después de hacer el cambio, haz clic en el icono de **sync** (dos flechas formando un círculo). El informe mostrará que el archivo fue modificado y el estado cambiará a **envío no permitido**.",
        },
        { kind: "image", name: "image19", alt: "" },
        {
          kind: "p",
          text: "**Si el cambio aún no está listo:** haz clic en **continuar**. La partitura se enviará con estado **envío no permitido** y no aparecerá en los ordenadores de ensayo.",
        },
        {
          kind: "p",
          text: "**Cuando el cambio esté listo:** haz clic en **cancelar** en el informe. Luego, ve a la música y a la partitura.",
        },
        { kind: "image", name: "image20", alt: "" },
        {
          kind: "p",
          text: "El estado estará como **envío no permitido** (porque la partitura fue modificada). Haz clic en los tres puntos y selecciona **Permitir envío**.",
        },
        { kind: "image", name: "image21", alt: "" },
        {
          kind: "p",
          text: "Ahora, al hacer clic de nuevo en el icono de **sync**, el informe mostrará el estado como **envío permitido** y la partitura se enviará a los ordenadores de ensayo. El proceso es el mismo que el descrito en [enviando a la nube](#enviando-nuvem).",
        },
      ],
    },
    baixando: {
      blocks: [
        { kind: "h3", text: "Instalación en el ordenador de ensayo" },
        {
          kind: "p",
          text: "El proceso es el mismo que el del tema de [instalación](#instalacao). La única diferencia es que, en el paso 2, seleccionas **ordenador de ensayo**.",
        },
        {
          kind: "callout",
          tone: "important",
          text: "Debes usar el **mismo proveedor de nube** (Koofr o Google Drive) y la **misma cuenta** que está en el **ordenador del director**. De lo contrario, los ordenadores no podrán intercambiar información.",
        },
        { kind: "p", text: "En la pantalla inicial de Ottavada, haz clic en el icono de **sync**." },
        { kind: "image", name: "image22", alt: "" },
        { kind: "p", text: "Se mostrará el progreso de la descarga de las músicas y partituras." },
        { kind: "image", name: "image23", alt: "" },
        {
          kind: "p",
          text: "Y listo, así de simple. Lo que se añadió, modificó e incluso se eliminó en el **ordenador del director** ya aparece en el **ordenador de ensayo**. En nuestro ejemplo solo se añadió y modificó (se modificó la de **Oboe I**, pero como se definió con estado **envío permitido** apareció).",
        },
        { kind: "image", name: "image24", alt: "" },
      ],
    },
    backup: {
      blocks: [
        {
          kind: "p",
          text: "Vamos a simular que tu ordenador se estropeó y compraste uno nuevo, y necesitas recuperar todas las músicas/partituras. Es muy sencillo y vuelven al mismo lugar en el que estaban en el antiguo ordenador.",
        },
        {
          kind: "p",
          text: "Necesitas instalar Ottavada en el ordenador y seguir los procedimientos del [instalación](#instalacao); en el paso 2, seleccionas **ordenador del director** y usas el mismo proveedor de nube y credenciales (en el caso de Koofr, email y contraseña de la aplicación; en el caso de Google Drive, acceso a la cuenta).",
        },
        { kind: "p", text: "Solo ve a la configuración (icono de engranaje)." },
        { kind: "image", name: "image25", alt: "" },
        { kind: "p", text: "Desplázate hasta la sección **copia de seguridad en la nube** y haz clic en **importar copia de seguridad**." },
        { kind: "image", name: "image26", alt: "" },
        {
          kind: "p",
          text: "Mostrará el progreso y al final los archivos estarán en las carpetas originales y también en Ottavada.",
        },
        { kind: "image", name: "image27", alt: "" },
      ],
    },
    suporte: {
      blocks: [
        {
          kind: "p",
          text: "Si tienes alguna duda, contacta por email [ottavada@hotmail.com](mailto:ottavada@hotmail.com) o utiliza el chatbot en la esquina inferior de la pantalla.",
        },
      ],
    },
  },
};

const fr: DocsMessages = {
  meta: {
    title: "Documentation : Ottavada",
    description:
      "Documentation officielle d’Ottavada. Guides, références et tutoriels pour organiser et synchroniser les partitions de votre orchestre.",
    ogTitle: "Documentation : Ottavada",
    ogDescription: "Guides, références et tutoriels d’Ottavada.",
  },
  brand: { name: "Ottavada", tagline: "Votre chef de partitions" },
  nav: { topics: "Sujets", close: "Fermer le menu", sidebarLabel: "Navigation de la documentation" },
  toc: {
    mensagem: "Message du développeur",
    conceitos: "Concepts essentiels",
    instalacao: "Installation",
    primeirosPassos: "Premiers pas",
    adicionandoMusica: "Ajouter de la musique",
    enviandoNuvem: "Envoi vers le cloud",
    realizandoAlteracoes: "Effectuer des modifications",
    backup: "Restaurer une sauvegarde",
    baixando: "Téléchargement sur l’ordinateur de répétition",
    suporte: "Support",
  },
  callouts: { note: "Remarque", important: "Important", tip: "Astuce" },
  imagesNote: "Désolé, mais dans votre langue les images ne sont disponibles qu’en anglais.",
  footer: {
    email: "Email de contact : ottavada@hotmail.com",
    dev: "Développé par Rhafaell (faell4328)",
  },
  sections: {
    mensagem: {
      blocks: [
        {
          kind: "p",
          text: "Ottavada est à un stade précoce de développement. J’ai essayé de le garder aussi simple et flexible que possible, mais il reste de nombreuses fonctionnalités que j’aimerais implémenter et d’autres sur lesquelles j’ai des doutes.",
        },
        {
          kind: "p",
          text: "C’est pourquoi votre avis est très important. Envoyez vos opinions, idées, critiques ou toute autre suggestion à **ottavada@hotmail.com**. Cela aide (vraiment) le projet.",
        },
        {
          kind: "p",
          text: "Autre chose **très importante** : cette documentation a été conçue pour être la plus concise possible, alors lisez-la entièrement pour utiliser l’outil sans confusion ni mal de tête.",
        },
      ],
    },
    conceitos: {
      blocks: [
        { kind: "h3", text: "Comment ça marche ?" },
        { kind: "h4", text: "Ordinateur du Chef" },
        {
          kind: "p",
          text: "C’est l’ordinateur chargé d’ajouter, modifier et supprimer des morceaux, partitions, catégories, compositeurs, arrangeurs, et d’envoyer des sauvegardes vers le fournisseur de cloud.",
        },
        { kind: "h4", text: "Fournisseur de Cloud" },
        {
          kind: "p",
          text: "C’est l’intermédiaire entre les ordinateurs. Il reçoit les fichiers envoyés par l’**Ordinateur du Chef** et les transmet aux autres ordinateurs.",
        },
        { kind: "h4", text: "Ordinateur de Répétition" },
        {
          kind: "p",
          text: "C’est l’ordinateur utilisé uniquement pour consulter les morceaux et partitions **autorisés** par l’**ordinateur du chef**.",
        },
        { kind: "h3", text: "Limitations" },
        { kind: "h4", text: "Plus d’un ordinateur chef utilisé en même temps" },
        {
          kind: "p",
          text: "Ottavada ne prend pas en charge l’utilisation simultanée de plus d’un **ordinateur du chef**. Il s’agit d’une limitation intentionnelle de l’architecture : comme Ottavada ne dépend pas d’un serveur central, il n’y a pas de coût de maintenance élevé pour le développeur, et c’est pourquoi l’outil peut être entièrement gratuit, sans abonnement, sans frais et sans rien vendu à l’intérieur.",
        },
        {
          kind: "p",
          text: "Vous pouvez avoir plus d’un **ordinateur du chef**, à condition qu’ils soient utilisés à des **moments différents**. Comme Ottavada envoie continuellement des informations au fournisseur de cloud, en avoir plusieurs qui envoient en même temps peut provoquer des conflits et des pertes de données. Si vous avez besoin de les utiliser simultanément, vous pouvez le faire, mais en assumant le risque de conflits. **Une solution pour ce scénario est déjà en cours de planification**.",
        },
        {
          kind: "callout",
          tone: "note",
          text: "L’**ordinateur de répétition** n’a pas cette limitation, car il est utilisé uniquement pour la lecture et n’envoie rien vers le cloud.",
        },
        { kind: "h3", text: "Morceaux et partitions" },
        {
          kind: "p",
          text: "Maintenant que vous comprenez comment les ordinateurs se connectent, passons au contenu lui-même. Ottavada fonctionne à partir de ce que vous **avez déjà** organisé sur votre ordinateur. Il ne crée pas de nouvelle structure : il lit celle que vous utilisez déjà.",
        },
        { kind: "p", text: "L’idée est simple :" },
        {
          kind: "ul",
          items: [
            "Chaque **morceau** est un **dossier**.",
            "Chaque **partition** est un **fichier** dans ce dossier.",
          ],
        },
        {
          kind: "p",
          text: "Lorsque vous pointez un dossier vers Ottavada, il l’**indexe**, c’est-à-dire qu’il lit le dossier et les fichiers qu’il contient pour comprendre que ce dossier correspond au morceau X et que chaque fichier est une partition d’un instrument. Cela s’appelle **indexer un dossier (répertoire)**.",
        },
        {
          kind: "p",
          text: "Ottavada dispose d’un système de suggestion de nom pour le morceau et les instruments. Pour qu’il fonctionne, il faut :",
        },
        {
          kind: "ul",
          items: [
            "Que le **nom du dossier** soit le **nom du morceau**.",
            "Que le **nom du fichier** soit le **nom de l’instrument**.",
          ],
        },
        { kind: "p", text: "Exemple d’un dossier bien organisé :" },
        {
          kind: "ul",
          items: [
            "**Can-Can/**\n  - **Score.mscz** ou **Can-Can - Score.mscz**\n  - **Flauta.mscz** ou **Can-Can - Flauta.mscz**\n  - **Violino.mscz** ou **Can-Can - Violino.mscz**\n  - **Cello.mscz** ou **Can-Can - Cello.mscz**",
          ],
        },
        {
          kind: "p",
          text: "Avec cela, le nom suggéré pour le morceau est **Can-Can** et les instruments : **score**, **flauta**, **violino** et **cello**. Si aucun instrument valide n’est identifié dans le nom du fichier, le champ reste vide et doit être rempli manuellement.",
        },
        {
          kind: "p",
          text: "L’idée est venue pour accélérer l’enregistrement de morceaux dans Ottavada, en observant un modèle : **nom du morceau dans le dossier** et **nom de l’instrument dans le fichier**.",
        },
        {
          kind: "callout",
          tone: "note",
          text: "En interne, la partition avec tous les instruments (appelée **score** ou **grade**) est également traitée comme un instrument. Elle apparaît toujours en haut de la liste à l’intérieur d’un morceau.",
        },
        { kind: "h3", text: "Règles" },
        {
          kind: "p",
          text: "Ottavada applique quelques règles pour garder la bibliothèque organisée et éviter les conflits. Les voici :",
        },
        { kind: "h4", text: "Statut du morceau et de la partition" },
        {
          kind: "p",
          text: "Chaque **morceau** et chaque **partition** possède un **statut** qui définit ce qui sera envoyé ou non à l’**ordinateur de répétition**.",
        },
        { kind: "p", text: "**Statut du morceau :**" },
        {
          kind: "ul",
          items: [
            "**Envoi autorisé :** le morceau est envoyé à l’**ordinateur de répétition** et a au moins un instrument avec le statut **envoi autorisé**.",
            "**Envoi non autorisé :** le morceau n’est pas envoyé à l’**ordinateur de répétition** et tous ses instruments ont le statut **envoi non autorisé**.",
            "**Sans partition :** le morceau n’est pas envoyé à l’**ordinateur de répétition** et, de plus, n’a aucune partition.",
          ],
        },
        { kind: "p", text: "**Statut de la partition :**" },
        {
          kind: "ul",
          items: [
            "**Envoi autorisé :** la partition est envoyée à l’**ordinateur de répétition**.",
            "**Envoi non autorisé :** la partition n’est pas envoyée à l’**ordinateur de répétition**.",
            "**Ignoré :** la partition est ignorée par Ottavada, comme si elle n’existait pas.",
          ],
        },
        { kind: "callout", tone: "tip", text: "En cliquant sur l’image, vous pourrez la voir en plein écran." },
        {
          kind: "p",
          text: "**Exemple :** Dans l’image ci-dessous, l’**Ordinateur du Chef** (à gauche) contient un morceau dont la partition de **Hautbois I** est en statut **envoi non autorisé**. Notez que sur l’**Ordinateur de Répétition** (à droite), ce morceau n’apparaît pas.",
        },
        { kind: "image", name: "image1", alt: "" },
        {
          kind: "p",
          text: "De la même manière, si tout le morceau est en statut **envoi non autorisé**, il n’apparaîtra pas non plus sur l’ordinateur de répétition.",
        },
        { kind: "image", name: "image2", alt: "" },
        { kind: "h4", text: "Les doublons ne sont pas autorisés" },
        {
          kind: "p",
          text: "**Morceaux portant le même nom :** vous pouvez avoir des morceaux portant le même nom, à condition qu’ils aient un **compositeur** ou un **arrangeur** différent. Par exemple, vous pouvez avoir « Can-Can » sans compositeur, « Can-Can » avec le compositeur X, ou « Can-Can » avec le compositeur X et l’arrangeur Y — ce sont des morceaux différents.",
        },
        {
          kind: "p",
          text: "Cependant, si vous ajoutez un morceau sans compositeur ni arrangeur, puis que vous tentez d’en ajouter un autre avec le même nom, également sans compositeur ni arrangeur, cela sera considéré comme un doublon. De même, si vous ajoutez un morceau avec le compositeur X puis tentez d’en ajouter un autre avec le même nom et le compositeur X, ce sera aussi un doublon.",
        },
        {
          kind: "p",
          text: "**Partitions portant le même nom :** il n’est pas permis d’avoir deux fois le même instrument dans le même morceau, par exemple : **Violino** et **Violino**. Il faut les différencier, par ex. : **Violino I** et **Violino II** ou **Violino** et **Violino (Solo)**. Même des fichiers avec des extensions différentes, par ex. : **Violino.mus** et **Violino.pdf**, sont considérés comme des doublons.",
        },
      ],
    },
    instalacao: {
      blocks: [
        { kind: "p", text: "Sur la page d’accueil, cliquez sur **Télécharger gratuitement**." },
        {
          kind: "p",
          text: "Le fichier « ottavada.cmd » sera téléchargé ; en cliquant dessus, un avertissement apparaîtra, mais il suffit de cliquer sur **Exécuter**.",
        },
        { kind: "image", name: "image3", alt: "" },
        {
          kind: "p",
          text: "Le script d’installation s’ouvrira, détectant votre système d’exploitation et installant Ottavada en conséquence.",
        },
        { kind: "image", name: "image4", alt: "" },
        { kind: "p", text: "Après l’installation, Ottavada démarrera." },
      ],
    },
    primeirosPassos: {
      blocks: [
        { kind: "p", text: "À la première ouverture d’Ottavada, l’étape de configuration démarre." },
        { kind: "h3", text: "Étape 1 : Sélectionner la langue" },
        {
          kind: "p",
          text: "Ici, vous choisissez la langue que vous souhaitez qu’Ottavada utilise. L’application suggère une langue en fonction de la configuration de votre ordinateur, mais vous pouvez la modifier selon votre préférence.",
        },
        { kind: "h3", text: "Étape 2 : Type d’ordinateur" },
        { kind: "p", text: "Ici, vous sélectionnez le type d’ordinateur. Il y en a deux :" },
        {
          kind: "ul",
          items: [
            "**Ordinateur du Chef** : responsable de l’ajout, de la modification et de la suppression des morceaux et partitions, en contrôlant ce qui va ou non vers les autres ordinateurs.",
            "**Ordinateur de Répétition** : utilisé uniquement pour lire les morceaux et partitions que l’**ordinateur du chef** a mis à disposition.",
          ],
        },
        { kind: "h3", text: "Étape 3 : Nom de l’ordinateur et nom de l’organisation ou institution" },
        {
          kind: "p",
          text: "Il suffit d’entrer le nom de votre ordinateur (par exemple : « Ordinateur de la maison » ou « Ordinateur de l’orchestre ») et, dans l’autre champ, le nom de l’orchestre, du groupe, de l’institution ou simplement un nom pour un usage personnel.",
        },
        { kind: "h3", text: "Étape 4 : Configuration du fournisseur de cloud" },
        {
          kind: "p",
          text: "Actuellement, Ottavada prend en charge **Koofr** (recommandé) et **Google Drive**. Koofr est recommandé car il est **beaucoup** plus rapide que Google Drive, mais, en contrepartie, il est plus pénible à configurer.",
        },
        {
          kind: "callout",
          tone: "important",
          text: "Vous devez utiliser le même compte de fournisseur de cloud sur les autres ordinateurs avec Ottavada. Cela est nécessaire pour que tous puissent accéder aux mêmes fichiers.",
        },
        { kind: "h4", text: "Koofr" },
        {
          kind: "p",
          text: "Si vous n’avez pas de compte, allez sur : [Koofr](https://koofr.eu) ou recherchez **koofr** sur Google. Je recommande de créer le compte via Google : le processus est plus rapide.",
        },
        {
          kind: "p",
          text: "Connecté à Koofr et sur la page d’accueil du Drive, cliquez en haut à droite et sélectionnez **Préférences**.",
        },
        { kind: "image", name: "image5", alt: "" },
        {
          kind: "p",
          text: "Allez dans **Password**. Dans **Passwords de l’App**, saisissez un nom (par exemple : « Ottavada ») et cliquez sur **Générer**.",
        },
        { kind: "image", name: "image6", alt: "" },
        {
          kind: "p",
          text: "Une fenêtre contextuelle s’ouvrira avec votre mot de passe généré ; cliquez sur le bouton **Copier**.",
        },
        { kind: "image", name: "image7", alt: "" },
        {
          kind: "p",
          text: "Je recommande **d’enregistrer ce mot de passe** : il sera utilisé sur vos autres ordinateurs avec Ottavada.",
        },
        {
          kind: "p",
          text: "De retour dans Ottavada, saisissez l’adresse e-mail utilisée pour accéder à Koofr (si c’est via Gmail, utilisez la même adresse Gmail) puis le mot de passe que vous avez copié.",
        },
        { kind: "h4", text: "Google Drive" },
        {
          kind: "p",
          text: "C’est bien plus simple que Koofr, mais, en contrepartie, c’est **beaucoup** plus lent. Cliquez simplement sur le bouton **Configurer et tester Google Drive**. Le navigateur s’ouvrira pour que vous sélectionniez un compte et c’est tout.",
        },
        { kind: "image", name: "image8", alt: "" },
        { kind: "h3", text: "Étape 5 : Vérification des informations" },
        {
          kind: "p",
          text: "Et, enfin, nous avons l’écran de vérification des informations, affichant le nom de l’ordinateur, le nom de l’orchestre ou de l’institution, le type d’ordinateur et le fournisseur de cloud.",
        },
      ],
    },
    adicionandoMusica: {
      blocks: [
        {
          kind: "p",
          text: "Comme expliqué dans **Concepts essentiels**, Ottavada indexe les dossiers et suggère des noms en se basant sur le modèle : **nom du morceau dans le dossier** et **nom de l’instrument dans le fichier**.",
        },
        { kind: "p", text: "**Dossier** et **fichiers** de l’exemple :" },
        { kind: "p", text: "Dossier :" },
        { kind: "image", name: "image9", alt: "" },
        { kind: "p", text: "Fichiers dans le dossier :" },
        { kind: "image", name: "image10", alt: "" },
        {
          kind: "p",
          text: "Voyons maintenant en pratique : pour indexer un répertoire, cliquez sur l’icône d’un dossier avec une loupe, en haut à droite.",
        },
        { kind: "image", name: "image11", alt: "" },
        {
          kind: "p",
          text: "En cliquant, l’Explorateur de fichiers s’ouvrira. Naviguez jusqu’au dossier contenant les partitions, sélectionnez-le et cliquez sur **Sélectionner un dossier**.",
        },
        { kind: "image", name: "image12", alt: "" },
        {
          kind: "p",
          text: "Une fenêtre modale apparaîtra avec les champs **Nom du morceau**, **Nom du compositeur**, **Nom de l’arrangeur** et **les instruments**. Chaque fichier est considéré comme un instrument par Ottavada. Ainsi, même si la partition contenant tous les instruments n’est pas un instrument spécifique, elle est considérée comme un instrument portant des noms comme **Score**, **Grade** ou autres.",
        },
        { kind: "image", name: "image13", alt: "" },
        {
          kind: "callout",
          tone: "important",
          text: "Le nom que vous donnez au morceau ou à l’instrument dans Ottavada ne modifie pas le nom du fichier d’origine sur votre ordinateur.",
        },
      ],
    },
    enviandoNuvem: {
      blocks: [
        {
          kind: "p",
          text: "Après avoir ajouté vos morceaux, il est temps de les envoyer vers le **fournisseur de cloud**, et le processus est très simple. Cliquez simplement sur l’icône de **sync** (deux flèches formant un cercle), située à côté du bouton d’ajout de partition.",
        },
        { kind: "image", name: "image14", alt: "" },
        {
          kind: "p",
          text: "En cliquant sur l’icône de sync, Ottavada analyse tous les morceaux et partitions que vous avez ajoutés, modifiés ou supprimés, et ouvre la **fenêtre modale de rapport**. Dans l’exemple, un seul morceau et quelques instruments ont été ajoutés, donc l’image ne montre que cela, mais s’il y avait d’autres modifications, elles apparaîtraient aussi.",
        },
        { kind: "image", name: "image15", alt: "" },
        {
          kind: "p",
          text: "L’envoi vers le cloud n’est réellement effectué qu’après que vous cliquiez sur **continuer**. Une barre de progression de l’envoi des morceaux et partitions s’affichera alors.",
        },
        { kind: "image", name: "image16", alt: "" },
        {
          kind: "callout",
          tone: "note",
          text: "Vérifiez toujours attentivement avant de cliquer sur **continuer**. Les modifications listées dans le rapport sont exactement ce qui sera envoyé vers le cloud.",
        },
        {
          kind: "callout",
          tone: "note",
          text: "Si vous identifiez un problème, par exemple un statut de morceau erroné, cliquez sur **annuler**, corrigez ce qui est nécessaire et cliquez à nouveau sur l’icône de sync.",
        },
      ],
    },
    realizandoAlteracoes: {
      blocks: [
        {
          kind: "p",
          text: "Exemple : nous devons modifier la partition de **Hautbois I**. Ouvrez le morceau en cliquant dessus et double-cliquez sur la partition du Hautbois I.",
        },
        { kind: "image", name: "image17", alt: "" },
        {
          kind: "p",
          text: "Dans ce cas, c’est un fichier **.mscz**, qui s’ouvre sur votre ordinateur avec MuseScore. À gauche se trouve la partition avant la modification et à droite, la partition modifiée (le passage marqué en rouge a été ajouté).",
        },
        { kind: "image", name: "image18", alt: "" },
        {
          kind: "p",
          text: "Après avoir effectué la modification, cliquez sur l’icône de **sync** (deux flèches formant un cercle). Le rapport montrera que le fichier a été modifié et le statut passera à **envoi non autorisé**.",
        },
        { kind: "image", name: "image19", alt: "" },
        {
          kind: "p",
          text: "**Si la modification n’est pas encore prête :** cliquez sur **continuer**. La partition sera envoyée avec le statut **envoi non autorisé** et n’apparaîtra pas sur les ordinateurs de répétition.",
        },
        {
          kind: "p",
          text: "**Lorsque la modification est prête :** cliquez sur **annuler** dans le rapport. Ensuite, allez jusqu’au morceau et à la partition.",
        },
        { kind: "image", name: "image20", alt: "" },
        {
          kind: "p",
          text: "Le statut sera **envoi non autorisé** (parce que la partition a été modifiée). Cliquez sur les trois points et sélectionnez **Autoriser l’envoi**.",
        },
        { kind: "image", name: "image21", alt: "" },
        {
          kind: "p",
          text: "Maintenant, en cliquant à nouveau sur l’icône de **sync**, le rapport affichera le statut **envoi autorisé** et la partition sera envoyée vers les ordinateurs de répétition. Le processus est le même que celui décrit dans [envoi vers le cloud](#enviando-nuvem).",
        },
      ],
    },
    baixando: {
      blocks: [
        { kind: "h3", text: "Installation sur l’ordinateur de répétition" },
        {
          kind: "p",
          text: "Le processus est le même que celui du sujet [installation](#instalacao). La seule différence est qu’à la 2ᵉ étape, vous sélectionnez **ordinateur de répétition**.",
        },
        {
          kind: "callout",
          tone: "important",
          text: "Vous devez utiliser le **même fournisseur de cloud** (Koofr ou Google Drive) et le **même compte** que celui de l’**ordinateur du chef**. Sinon, les ordinateurs ne pourront pas échanger d’informations.",
        },
        { kind: "p", text: "Sur l’écran d’accueil d’Ottavada, cliquez sur l’icône **sync**." },
        { kind: "image", name: "image22", alt: "" },
        { kind: "p", text: "La progression du téléchargement des morceaux et partitions s’affichera." },
        { kind: "image", name: "image23", alt: "" },
        {
          kind: "p",
          text: "Et voilà, c’est aussi simple que ça. Ce qui a été ajouté, modifié, et même supprimé sur l’**ordinateur du chef** apparaît déjà sur l’**ordinateur de répétition**. Dans notre exemple, seuls un ajout et une modification ont été effectués (la partition de **Hautbois I** a été modifiée, mais comme elle a été définie avec le statut **envoi autorisé**, elle est apparue).",
        },
        { kind: "image", name: "image24", alt: "" },
      ],
    },
    backup: {
      blocks: [
        {
          kind: "p",
          text: "Imaginons que votre ordinateur tombe en panne et que vous en achetiez un nouveau, et que vous ayez besoin de récupérer tous les morceaux/partitions. C’est très simple et ils reviennent exactement à la même place que sur l’ancien ordinateur.",
        },
        {
          kind: "p",
          text: "Vous devez installer Ottavada sur l’ordinateur et suivre les procédures de l’[installation](#instalacao) ; à la 2ᵉ étape, sélectionnez **ordinateur du chef** et utilisez le même fournisseur de cloud et les mêmes identifiants (pour Koofr, e-mail et mot de passe de l’application ; pour Google Drive, accès au compte).",
        },
        { kind: "p", text: "Allez simplement dans les paramètres (icône d’engrenage)." },
        { kind: "image", name: "image25", alt: "" },
        { kind: "p", text: "Faites défiler jusqu’à la section **sauvegarde cloud** et cliquez sur **importer une sauvegarde**." },
        { kind: "image", name: "image26", alt: "" },
        {
          kind: "p",
          text: "La progression s’affichera et à la fin, les fichiers seront dans les dossiers d’origine ainsi que dans Ottavada.",
        },
        { kind: "image", name: "image27", alt: "" },
      ],
    },
    suporte: {
      blocks: [
        {
          kind: "p",
          text: "En cas de questions, contactez-nous par e-mail [ottavada@hotmail.com](mailto:ottavada@hotmail.com) ou utilisez le chatbot dans le coin inférieur de l’écran.",
        },
      ],
    },
  },
};

const it: DocsMessages = {
  meta: {
    title: "Documentazione: Ottavada",
    description:
      "Documentazione ufficiale di Ottavada. Guide, riferimenti e tutorial per organizzare e sincronizzare gli spartiti della tua orchestra.",
    ogTitle: "Documentazione: Ottavada",
    ogDescription: "Guide, riferimenti e tutorial di Ottavada.",
  },
  brand: { name: "Ottavada", tagline: "Il tuo direttore di spartiti" },
  nav: { topics: "Argomenti", close: "Chiudi menu", sidebarLabel: "Navigazione della documentazione" },
  toc: {
    mensagem: "Messaggio dello sviluppatore",
    conceitos: "Concetti essenziali",
    instalacao: "Installazione",
    primeirosPassos: "Primi passi",
    adicionandoMusica: "Aggiungere musica",
    enviandoNuvem: "Invio al cloud",
    realizandoAlteracoes: "Apportare modifiche",
    backup: "Ripristinare un backup",
    baixando: "Download sul computer delle prove",
    suporte: "Supporto",
  },
  callouts: { note: "Nota", important: "Importante", tip: "Suggerimento" },
  imagesNote: "Ci scusiamo, ma nella tua lingua le immagini sono disponibili solo in inglese.",
  footer: {
    email: "Email di contatto: ottavada@hotmail.com",
    dev: "Sviluppato da Rhafaell (faell4328)",
  },
  sections: {
    mensagem: {
      blocks: [
        {
          kind: "p",
          text: "Ottavada è in una fase iniziale di sviluppo. Ho cercato di mantenerlo il più semplice e flessibile possibile, ma ci sono ancora molte funzionalità che vorrei implementare e altre su cui ho dei dubbi.",
        },
        {
          kind: "p",
          text: "Per questo il tuo feedback è molto importante. Invia opinioni, idee, critiche o qualsiasi altro suggerimento a **ottavada@hotmail.com**. Aiuta (e molto) il progetto.",
        },
        {
          kind: "p",
          text: "Un’altra cosa **molto importante**: questa documentazione è stata progettata per essere la più essenziale possibile, quindi leggila fino in fondo per usare lo strumento senza confusione o mal di testa.",
        },
      ],
    },
    conceitos: {
      blocks: [
        { kind: "h3", text: "Come funziona?" },
        { kind: "h4", text: "Computer del Maestro" },
        {
          kind: "p",
          text: "È il computer responsabile di aggiungere, modificare e rimuovere brani, spartiti, categorie, compositori, arrangiatori e di inviare backup al provider cloud.",
        },
        { kind: "h4", text: "Provider Cloud" },
        {
          kind: "p",
          text: "È l’intermediario tra i computer. Riceve i file inviati dal **Computer del Maestro** e li inoltra agli altri computer.",
        },
        { kind: "h4", text: "Computer delle Prove" },
        {
          kind: "p",
          text: "È il computer utilizzato unicamente per consultare i brani e gli spartiti **consentiti** dal **computer del maestro**.",
        },
        { kind: "h3", text: "Limitazioni" },
        { kind: "h4", text: "Più di un computer maestro usato contemporaneamente" },
        {
          kind: "p",
          text: "Ottavada non supporta l’uso simultaneo di più di un **computer del maestro**. È una limitazione intenzionale dell’architettura: poiché Ottavada non dipende da un server centrale, non c’è un alto costo di manutenzione per lo sviluppatore, e per questo lo strumento può essere completamente gratuito, senza abbonamento, senza costi e senza nulla venduto al suo interno.",
        },
        {
          kind: "p",
          text: "Puoi avere più di un **computer del maestro**, a patto che vengano usati in **momenti diversi**. Poiché Ottavada invia continuamente informazioni al provider cloud, averne più di uno che invia contemporaneamente può causare conflitti e perdita di dati. Se hai bisogno di usarli simultaneamente, puoi farlo, ma assumendoti il rischio di conflitti. **Una soluzione per questo scenario è già in fase di pianificazione**.",
        },
        {
          kind: "callout",
          tone: "note",
          text: "Il **computer delle prove** non ha questa limitazione, perché viene usato solo per la lettura e non invia nulla al cloud.",
        },
        { kind: "h3", text: "Brani e spartiti" },
        {
          kind: "p",
          text: "Ora che capisci come si collegano i computer, passiamo al contenuto vero e proprio. Ottavada funziona sulla base di ciò che hai **già** organizzato sul tuo computer. Non crea una struttura nuova: legge quella che già usi.",
        },
        { kind: "p", text: "L’idea è semplice:" },
        {
          kind: "ul",
          items: [
            "Ogni **brano** è una **cartella**.",
            "Ogni **spartito** è un **file** dentro quella cartella.",
          ],
        },
        {
          kind: "p",
          text: "Quando punti una cartella a Ottavada, la **indicizza**, cioè legge la cartella e i file al suo interno per capire che quella cartella è il brano X e ogni file è uno spartito di uno strumento. Questo si chiama **indicizzare una cartella (directory)**.",
        },
        {
          kind: "p",
          text: "Ottavada ha un sistema di suggerimento del nome del brano e degli strumenti. Affinché funzioni è necessario:",
        },
        {
          kind: "ul",
          items: [
            "Che il **nome della cartella** sia il **nome del brano**.",
            "Che il **nome del file** sia il **nome dello strumento**.",
          ],
        },
        { kind: "p", text: "Esempio di una cartella ben organizzata:" },
        {
          kind: "ul",
          items: [
            "**Can-Can/**\n  - **Score.mscz** o **Can-Can - Score.mscz**\n  - **Flauta.mscz** o **Can-Can - Flauta.mscz**\n  - **Violino.mscz** o **Can-Can - Violino.mscz**\n  - **Cello.mscz** o **Can-Can - Cello.mscz**",
          ],
        },
        {
          kind: "p",
          text: "Con ciò il nome suggerito per il brano è **Can-Can** e gli strumenti: **score**, **flauta**, **violino** e **cello**. Se nel nome del file non viene identificato uno strumento valido, il campo resta vuoto e deve essere compilato manualmente.",
        },
        {
          kind: "p",
          text: "L’idea è nata per velocizzare la registrazione dei brani in Ottavada, osservando uno schema: **nome del brano nella cartella** e **nome dello strumento nel file**.",
        },
        {
          kind: "callout",
          tone: "note",
          text: "Internamente, lo spartito con tutti gli strumenti (chiamato **score** o **grade**) è trattato anch’esso come uno strumento. Compare sempre in cima alla lista all’interno di un brano.",
        },
        { kind: "h3", text: "Regole" },
        {
          kind: "p",
          text: "Ottavada applica alcune regole per mantenere la libreria organizzata ed evitare conflitti. Eccole:",
        },
        { kind: "h4", text: "Stato di brano e spartito" },
        {
          kind: "p",
          text: "Ogni **brano** e ogni **spartito** ha uno **stato** che definisce cosa sarà o non sarà inviato al **computer delle prove**.",
        },
        { kind: "p", text: "**Stato del brano:**" },
        {
          kind: "ul",
          items: [
            "**Invio consentito:** il brano viene inviato al **computer delle prove** e ha almeno uno strumento con stato **invio consentito**.",
            "**Invio non consentito:** il brano non viene inviato al **computer delle prove** e tutti i suoi strumenti hanno stato **invio non consentito**.",
            "**Senza spartito:** il brano non viene inviato al **computer delle prove** e, inoltre, non ha nessuno spartito.",
          ],
        },
        { kind: "p", text: "**Stato dello spartito:**" },
        {
          kind: "ul",
          items: [
            "**Invio consentito:** lo spartito viene inviato al **computer delle prove**.",
            "**Invio non consentito:** lo spartito non viene inviato al **computer delle prove**.",
            "**Ignorato:** lo spartito viene ignorato da Ottavada, come se non esistesse.",
          ],
        },
        { kind: "callout", tone: "tip", text: "Cliccando sull’immagine, potrai vederla a schermo intero." },
        {
          kind: "p",
          text: "**Esempio:** Nell’immagine qui sotto, il **Computer del Maestro** (sinistra) ha un brano il cui spartito di **Oboe I** è con stato **invio non consentito**. Nota che nel **Computer delle Prove** (destra) quel brano non appare.",
        },
        { kind: "image", name: "image1", alt: "" },
        {
          kind: "p",
          text: "Allo stesso modo, se l’intero brano è con stato **invio non consentito**, non apparirà nemmeno sul computer delle prove.",
        },
        { kind: "image", name: "image2", alt: "" },
        { kind: "h4", text: "Non è consentito duplicare" },
        {
          kind: "p",
          text: "**Brani con lo stesso nome:** puoi avere brani con lo stesso nome, purché abbiano un **compositore** o un **arrangiatore** diverso. Ad esempio, puoi avere \"Can-Can\" senza compositore, \"Can-Can\" con compositore X, o \"Can-Can\" con compositore X e arrangiatore Y — sono considerati brani diversi.",
        },
        {
          kind: "p",
          text: "Tuttavia, se aggiungi un brano senza compositore e senza arrangiatore, e poi provi ad aggiungerne un altro con lo stesso nome, anch’esso senza compositore e senza arrangiatore, verrà considerato un duplicato. Allo stesso modo, se aggiungi un brano con compositore X e poi provi ad aggiungerne un altro con lo stesso nome e compositore X, sarà anch’esso un duplicato.",
        },
        {
          kind: "p",
          text: "**Spartiti con lo stesso nome:** non è consentito avere lo stesso strumento due volte nello stesso brano, ad esempio: **Violino** e **Violino**. È necessario differenziarli, es.: **Violino I** e **Violino II** o **Violino** e **Violino (Solo)**. Anche file con estensioni diverse, es.: **Violino.mus** e **Violino.pdf**, sono considerati duplicati.",
        },
      ],
    },
    instalacao: {
      blocks: [
        { kind: "p", text: "Nella pagina iniziale, clicca su **Scarica gratuitamente**." },
        {
          kind: "p",
          text: "Verrà scaricato il file \"ottavada.cmd\"; cliccandoci sopra apparirà un avviso, ma basta cliccare su **Esegui**.",
        },
        { kind: "image", name: "image3", alt: "" },
        {
          kind: "p",
          text: "Si aprirà lo script di installazione, che rileva il tuo sistema operativo e installa Ottavada di conseguenza.",
        },
        { kind: "image", name: "image4", alt: "" },
        { kind: "p", text: "Dopo l’installazione, Ottavada verrà avviato." },
      ],
    },
    primeirosPassos: {
      blocks: [
        { kind: "p", text: "Quando apri Ottavada per la prima volta, inizia la fase di configurazione." },
        { kind: "h3", text: "1ª fase: Selezionare la lingua" },
        {
          kind: "p",
          text: "Qui selezioni la lingua che vuoi che Ottavada utilizzi. L’app suggerisce una lingua in base alle impostazioni del tuo computer, ma puoi cambiarla a tuo piacimento.",
        },
        { kind: "h3", text: "2ª fase: Tipo di computer" },
        { kind: "p", text: "Qui selezioni il tipo di computer. Ce ne sono due:" },
        {
          kind: "ul",
          items: [
            "**Computer del Maestro**: responsabile di aggiungere, modificare e rimuovere brani e spartiti, controllando cosa va o non va verso gli altri computer.",
            "**Computer delle Prove**: utilizzato solo per la lettura dei brani e spartiti che il **computer del maestro** ha reso disponibili.",
          ],
        },
        { kind: "h3", text: "3ª fase: Nome del computer e nome dell’organizzazione o istituzione" },
        {
          kind: "p",
          text: "Qui basta inserire il nome del tuo computer (ad esempio: \"Computer di casa\" o \"Computer dell’orchestra\") e, nell’altro campo, il nome dell’orchestra, banda, istituzione o semplicemente un nome per uso personale.",
        },
        { kind: "h3", text: "4ª fase: Configurazione del provider cloud" },
        {
          kind: "p",
          text: "Attualmente Ottavada supporta **Koofr** (consigliato) e **Google Drive**. Koofr è consigliato perché è **molto** più veloce di Google Drive, ma, di contro, è più noioso da configurare.",
        },
        {
          kind: "callout",
          tone: "important",
          text: "Devi usare lo stesso account del provider cloud sugli altri computer con Ottavada. Questo è necessario affinché tutti possano accedere agli stessi file.",
        },
        { kind: "h4", text: "Koofr" },
        {
          kind: "p",
          text: "Se non hai un account, vai su: [Koofr](https://koofr.eu) o cerca **koofr** su Google. Consiglio di creare l’account tramite Google: il processo è più veloce.",
        },
        {
          kind: "p",
          text: "Dopo aver effettuato l’accesso a Koofr e trovandoti nella pagina iniziale del Drive, clicca nell’angolo in alto a destra e seleziona **Preferenze**.",
        },
        { kind: "image", name: "image5", alt: "" },
        {
          kind: "p",
          text: "Vai su **Password**. In **Password dell’App**, inserisci un nome (ad esempio: \"Ottavada\") e clicca su **Genera**.",
        },
        { kind: "image", name: "image6", alt: "" },
        {
          kind: "p",
          text: "Si aprirà un pop-up con la password generata; clicca sul pulsante **Copia**.",
        },
        { kind: "image", name: "image7", alt: "" },
        {
          kind: "p",
          text: "Consiglio di **salvare questa password**: verrà usata sugli altri tuoi computer con Ottavada.",
        },
        {
          kind: "p",
          text: "Tornando in Ottavada, inserisci l’email che hai usato per accedere a Koofr (se tramite Gmail, usa la stessa email di Gmail) e poi la password che hai copiato.",
        },
        { kind: "h4", text: "Google Drive" },
        {
          kind: "p",
          text: "Qui è molto più semplice di Koofr, ma, di contro, è **molto** più lento. Basta cliccare sul pulsante **Configura e testa Google Drive**. Si aprirà il browser per selezionare un account e il gioco è fatto.",
        },
        { kind: "image", name: "image8", alt: "" },
        { kind: "h3", text: "5ª fase: Revisione delle informazioni" },
        {
          kind: "p",
          text: "E, infine, abbiamo la schermata di revisione delle informazioni, che mostra il nome del computer, il nome dell’orchestra o istituzione, il tipo di computer e il provider cloud.",
        },
      ],
    },
    adicionandoMusica: {
      blocks: [
        {
          kind: "p",
          text: "Come spiegato in **Concetti essenziali**, Ottavada indicizza le cartelle e suggerisce i nomi in base allo schema: **nome del brano nella cartella** e **nome dello strumento nel file**.",
        },
        { kind: "p", text: "**Cartella** e **file** dell’esempio:" },
        { kind: "p", text: "Cartella:" },
        { kind: "image", name: "image9", alt: "" },
        { kind: "p", text: "File all’interno della cartella:" },
        { kind: "image", name: "image10", alt: "" },
        {
          kind: "p",
          text: "Ora vediamolo in pratica: per indicizzare una directory, clicca sull’icona di una cartella con una lente d’ingrandimento, in alto a destra.",
        },
        { kind: "image", name: "image11", alt: "" },
        {
          kind: "p",
          text: "Cliccando, si aprirà Esplora File. Naviga fino alla cartella con gli spartiti, selezionala e clicca su **Seleziona cartella**.",
        },
        { kind: "image", name: "image12", alt: "" },
        {
          kind: "p",
          text: "Apparirà un modale con i campi **Nome del brano**, **Nome del compositore**, **Nome dell’arrangiatore** e **gli strumenti**. Ogni file è considerato uno strumento da Ottavada. Così, anche se lo spartito con tutti gli strumenti insieme non è uno strumento specifico, viene considerato uno strumento con nomi come **Score**, **Grade** o altri.",
        },
        { kind: "image", name: "image13", alt: "" },
        {
          kind: "callout",
          tone: "important",
          text: "Il nome che assegni al brano o allo strumento in Ottavada non cambia il nome del file originale sul tuo computer.",
        },
      ],
    },
    enviandoNuvem: {
      blocks: [
        {
          kind: "p",
          text: "Dopo aver aggiunto i tuoi brani, è il momento di inviarli al **provider cloud**, e il processo è molto semplice. Basta cliccare sull’icona di **sync** (due frecce che formano un cerchio), situata accanto al pulsante di aggiunta spartito.",
        },
        { kind: "image", name: "image14", alt: "" },
        {
          kind: "p",
          text: "Cliccando sull’icona di sync, Ottavada esegue una scansione di tutti i brani e spartiti che hai aggiunto, modificato o rimosso, e apre il **modale con il report**. Nell’esempio è stato aggiunto solo un brano e alcuni strumenti, quindi l’immagine mostra solo quello, ma se ci fossero state altre modifiche apparirebbero anch’esse.",
        },
        { kind: "image", name: "image15", alt: "" },
        {
          kind: "p",
          text: "L’invio al cloud viene effettivamente eseguito solo dopo che clicchi su **continua**. Cliccando, verrà mostrata una barra con il progresso dell’invio dei brani e degli spartiti.",
        },
        { kind: "image", name: "image16", alt: "" },
        {
          kind: "callout",
          tone: "note",
          text: "Rivedi sempre con attenzione prima di cliccare su **continua**. Le modifiche elencate nel report sono esattamente ciò che verrà inviato al cloud.",
        },
        {
          kind: "callout",
          tone: "note",
          text: "Se noti qualche problema, ad esempio uno stato di un brano sbagliato, clicca su **annulla**, correggi ciò che è necessario e clicca di nuovo sull’icona di sync.",
        },
      ],
    },
    realizandoAlteracoes: {
      blocks: [
        {
          kind: "p",
          text: "Esempio: dobbiamo modificare lo spartito di **Oboe I**. Apri il brano cliccandoci sopra e fai doppio clic sullo spartito di Oboe I.",
        },
        { kind: "image", name: "image17", alt: "" },
        {
          kind: "p",
          text: "In questo caso, è un file **.mscz**, che si apre sul tuo computer con MuseScore. A sinistra c’è lo spartito prima della modifica e a destra quello modificato (è stato aggiunto il passaggio segnato in rosso).",
        },
        { kind: "image", name: "image18", alt: "" },
        {
          kind: "p",
          text: "Dopo aver apportato la modifica, clicca sull’icona di **sync** (due frecce che formano un cerchio). Il report mostrerà che il file è stato modificato e lo stato cambierà in **invio non consentito**.",
        },
        { kind: "image", name: "image19", alt: "" },
        {
          kind: "p",
          text: "**Se la modifica non è ancora pronta:** clicca su **continua**. Lo spartito verrà inviato con stato **invio non consentito** e non apparirà sui computer delle prove.",
        },
        {
          kind: "p",
          text: "**Quando la modifica è pronta:** clicca su **annulla** nel report. Quindi, vai al brano e allo spartito.",
        },
        { kind: "image", name: "image20", alt: "" },
        {
          kind: "p",
          text: "Lo stato sarà **invio non consentito** (perché lo spartito è stato modificato). Clicca sui tre puntini e seleziona **Consenti invio**.",
        },
        { kind: "image", name: "image21", alt: "" },
        {
          kind: "p",
          text: "Ora, cliccando di nuovo sull’icona di **sync**, il report mostrerà lo stato come **invio consentito** e lo spartito verrà inviato ai computer delle prove. Il processo è lo stesso descritto in [invio al cloud](#enviando-nuvem).",
        },
      ],
    },
    baixando: {
      blocks: [
        { kind: "h3", text: "Installazione sul computer delle prove" },
        {
          kind: "p",
          text: "Il processo è lo stesso dell’argomento [installazione](#instalacao). L’unica differenza è che, nella 2ª fase, selezioni **computer delle prove**.",
        },
        {
          kind: "callout",
          tone: "important",
          text: "Devi usare lo **stesso provider cloud** (Koofr o Google Drive) e lo **stesso account** che è sul **computer del maestro**. Altrimenti, i computer non potranno scambiare informazioni.",
        },
        { kind: "p", text: "Nella schermata iniziale di Ottavada, clicca sull’icona di **sync**." },
        { kind: "image", name: "image22", alt: "" },
        { kind: "p", text: "Verrà mostrato il progresso del download dei brani e degli spartiti." },
        { kind: "image", name: "image23", alt: "" },
        {
          kind: "p",
          text: "E basta, semplice così. Ciò che è stato aggiunto, modificato e anche rimosso sul **computer del maestro** appare già sul **computer delle prove**. Nel nostro esempio sono stati solo aggiunti e modificati (è stato modificato lo spartito di **Oboe I**, ma poiché era stato impostato con stato **invio consentito** è apparso).",
        },
        { kind: "image", name: "image24", alt: "" },
      ],
    },
    backup: {
      blocks: [
        {
          kind: "p",
          text: "Ipotizziamo che il tuo computer si sia rotto e tu ne abbia comprato uno nuovo, e che tu debba recuperare tutti i brani/spartiti. È molto semplice e tornano nello stesso posto in cui erano nel vecchio computer.",
        },
        {
          kind: "p",
          text: "Devi installare Ottavada sul computer e seguire le procedure di [installazione](#instalacao); nella 2ª fase, seleziona **computer del maestro** e usa lo stesso provider cloud e le stesse credenziali (nel caso di Koofr, email e password dell’app; nel caso di Google Drive, accesso all’account).",
        },
        { kind: "p", text: "Vai semplicemente nelle impostazioni (icona dell’ingranaggio)." },
        { kind: "image", name: "image25", alt: "" },
        { kind: "p", text: "Scorri fino alla sezione **backup cloud** e clicca su **importa backup**." },
        { kind: "image", name: "image26", alt: "" },
        {
          kind: "p",
          text: "Verrà mostrato il progresso e alla fine i file saranno nelle cartelle originali e anche in Ottavada.",
        },
        { kind: "image", name: "image27", alt: "" },
      ],
    },
    suporte: {
      blocks: [
        {
          kind: "p",
          text: "In caso di dubbi, contattaci via email [ottavada@hotmail.com](mailto:ottavada@hotmail.com) o usa il chatbot nell’angolo in basso dello schermo.",
        },
      ],
    },
  },
};

const de: DocsMessages = {
  meta: {
    title: "Dokumentation: Ottavada",
    description:
      "Offizielle Ottavada-Dokumentation. Anleitungen, Referenzen und Tutorials zum Organisieren und Synchronisieren der Noten Ihres Orchesters.",
    ogTitle: "Dokumentation: Ottavada",
    ogDescription: "Anleitungen, Referenzen und Tutorials zu Ottavada.",
  },
  brand: { name: "Ottavada", tagline: "Ihr Noten-Dirigent" },
  nav: { topics: "Themen", close: "Menü schließen", sidebarLabel: "Dokumentationsnavigation" },
  toc: {
    mensagem: "Nachricht vom Entwickler",
    conceitos: "Grundlegende Konzepte",
    instalacao: "Installation",
    primeirosPassos: "Erste Schritte",
    adicionandoMusica: "Musik hinzufügen",
    enviandoNuvem: "In die Cloud senden",
    realizandoAlteracoes: "Änderungen vornehmen",
    backup: "Backup wiederherstellen",
    baixando: "Auf dem Proben-Computer herunterladen",
    suporte: "Support",
  },
  callouts: { note: "Hinweis", important: "Wichtig", tip: "Tipp" },
  imagesNote: "Entschuldigung, aber in Ihrer Sprache sind die Bilder nur auf Englisch verfügbar.",
  footer: {
    email: "Kontakt-E-Mail: ottavada@hotmail.com",
    dev: "Entwickelt von Rhafaell (faell4328)",
  },
  sections: {
    mensagem: {
      blocks: [
        {
          kind: "p",
          text: "Ottavada befindet sich in einer frühen Entwicklungsphase. Ich habe versucht, es so einfach und flexibel wie möglich zu halten, aber es gibt noch viele Funktionen, die ich gerne implementieren würde, und andere, bei denen ich noch unsicher bin.",
        },
        {
          kind: "p",
          text: "Deshalb ist Ihr Feedback sehr wichtig. Senden Sie Meinungen, Ideen, Kritik oder andere Vorschläge an **ottavada@hotmail.com**. Das hilft (und wie) dem Projekt.",
        },
        {
          kind: "p",
          text: "Noch eine **sehr wichtige** Sache: Diese Dokumentation wurde so knapp wie möglich gehalten, also lesen Sie sie vollständig, um das Tool ohne Verwirrung oder Kopfschmerzen zu nutzen.",
        },
      ],
    },
    conceitos: {
      blocks: [
        { kind: "h3", text: "Wie funktioniert es?" },
        { kind: "h4", text: "Dirigenten-Computer" },
        {
          kind: "p",
          text: "Es ist der Computer, der für das Hinzufügen, Bearbeiten und Entfernen von Stücken, Partituren, Kategorien, Komponisten, Arrangeuren und das Senden von Backups an den Cloud-Anbieter zuständig ist.",
        },
        { kind: "h4", text: "Cloud-Anbieter" },
        {
          kind: "p",
          text: "Er ist der Vermittler zwischen den Computern. Er empfängt die vom **Dirigenten-Computer** gesendeten Dateien und leitet sie an die anderen Computer weiter.",
        },
        { kind: "h4", text: "Proben-Computer" },
        {
          kind: "p",
          text: "Es ist der Computer, der ausschließlich dazu verwendet wird, die vom **Dirigenten-Computer** **erlaubten** Stücke und Partituren einzusehen.",
        },
        { kind: "h3", text: "Einschränkungen" },
        { kind: "h4", text: "Mehr als ein Dirigenten-Computer zur gleichen Zeit" },
        {
          kind: "p",
          text: "Ottavada unterstützt nicht die gleichzeitige Nutzung von mehr als einem **Dirigenten-Computer**. Dies ist eine bewusste architektonische Einschränkung: Da Ottavada nicht von einem zentralen Server abhängt, entstehen für den Entwickler keine hohen Wartungskosten, weshalb das Tool völlig kostenlos sein kann, ohne Abonnement, ohne Gebühren und ohne irgendetwas, das darin verkauft wird.",
        },
        {
          kind: "p",
          text: "Sie können mehr als einen **Dirigenten-Computer** haben, solange sie zu **unterschiedlichen Zeiten** verwendet werden. Da Ottavada kontinuierlich Informationen an den Cloud-Anbieter sendet, können mehrere gleichzeitige Sendungen zu Konflikten und Datenverlust führen. Wenn Sie sie gleichzeitig verwenden müssen, können Sie das tun, aber Sie übernehmen das Risiko von Konflikten. **Eine Lösung für dieses Szenario ist bereits in Planung**.",
        },
        {
          kind: "callout",
          tone: "note",
          text: "Der **Proben-Computer** hat diese Einschränkung nicht, da er nur zum Lesen verwendet wird und nichts an die Cloud sendet.",
        },
        { kind: "h3", text: "Stücke und Partituren" },
        {
          kind: "p",
          text: "Nachdem Sie nun verstehen, wie die Computer verbunden sind, kommen wir zum eigentlichen Inhalt. Ottavada arbeitet auf Basis dessen, was Sie **bereits** auf Ihrem Computer organisiert haben. Es erstellt keine neue Struktur: es liest die, die Sie bereits verwenden.",
        },
        { kind: "p", text: "Die Idee ist einfach:" },
        {
          kind: "ul",
          items: [
            "Jedes **Stück** ist ein **Ordner**.",
            "Jede **Partitur** ist eine **Datei** in diesem Ordner.",
          ],
        },
        {
          kind: "p",
          text: "Wenn Sie Ottavada auf einen Ordner zeigen, **indiziert** es ihn, das heißt, es liest den Ordner und die darin enthaltenen Dateien, um zu verstehen, dass dieser Ordner Stück X ist und jede Datei eine Partitur für ein Instrument ist. Dies nennt sich **Ordner (Verzeichnis) indizieren**.",
        },
        {
          kind: "p",
          text: "Ottavada verfügt über ein System zur Namensvorschlag für das Stück und die Instrumente. Damit es funktioniert, ist Folgendes erforderlich:",
        },
        {
          kind: "ul",
          items: [
            "Der **Ordnername** ist der **Name des Stücks**.",
            "Der **Dateiname** ist der **Name des Instruments**.",
          ],
        },
        { kind: "p", text: "Beispiel für einen gut organisierten Ordner:" },
        {
          kind: "ul",
          items: [
            "**Can-Can/**\n  - **Score.mscz** oder **Can-Can - Score.mscz**\n  - **Flauta.mscz** oder **Can-Can - Flauta.mscz**\n  - **Violino.mscz** oder **Can-Can - Violino.mscz**\n  - **Cello.mscz** oder **Can-Can - Cello.mscz**",
          ],
        },
        {
          kind: "p",
          text: "Damit ist der vorgeschlagene Name für das Stück **Can-Can** und die Instrumente: **score**, **flauta**, **violino** und **cello**. Wenn im Dateinamen kein gültiges Instrument erkannt wird, bleibt das Feld leer und muss manuell ausgefüllt werden.",
        },
        {
          kind: "p",
          text: "Die Idee entstand, um das Registrieren von Stücken in Ottavada zu beschleunigen, indem ein Muster beobachtet wurde: **Name des Stücks im Ordner** und **Name des Instruments in der Datei**.",
        },
        {
          kind: "callout",
          tone: "note",
          text: "Intern wird die Partitur mit allen Instrumenten (sogenannte **score** oder **grade**) ebenfalls als Instrument behandelt. Sie erscheint immer oben in der Liste innerhalb eines Stücks.",
        },
        { kind: "h3", text: "Regeln" },
        {
          kind: "p",
          text: "Ottavada wendet einige Regeln an, um die Bibliothek organisiert zu halten und Konflikte zu vermeiden. Sie sind:",
        },
        { kind: "h4", text: "Status von Stück und Partitur" },
        {
          kind: "p",
          text: "Jedes **Stück** und jede **Partitur** hat einen **Status**, der definiert, was an den **Proben-Computer** gesendet wird oder nicht.",
        },
        { kind: "p", text: "**Stückstatus:**" },
        {
          kind: "ul",
          items: [
            "**Senden erlaubt:** das Stück wird an den **Proben-Computer** gesendet und hat mindestens ein Instrument mit Status **Senden erlaubt**.",
            "**Senden nicht erlaubt:** das Stück wird nicht an den **Proben-Computer** gesendet und alle seine Instrumente haben den Status **Senden nicht erlaubt**.",
            "**Keine Partitur:** das Stück wird nicht an den **Proben-Computer** gesendet und hat außerdem keine Partitur.",
          ],
        },
        { kind: "p", text: "**Partiturenstatus:**" },
        {
          kind: "ul",
          items: [
            "**Senden erlaubt:** die Partitur wird an den **Proben-Computer** gesendet.",
            "**Senden nicht erlaubt:** die Partitur wird nicht an den **Proben-Computer** gesendet.",
            "**Ignoriert:** die Partitur wird von Ottavada ignoriert, als ob sie nicht existieren würde.",
          ],
        },
        { kind: "callout", tone: "tip", text: "Durch Klicken auf das Bild können Sie es im Vollbildmodus ansehen." },
        {
          kind: "p",
          text: "**Beispiel:** Im Bild unten hat der **Dirigenten-Computer** (links) ein Stück, dessen **Oboe I**-Partitur den Status **Senden nicht erlaubt** hat. Beachten Sie, dass dieses Stück auf dem **Proben-Computer** (rechts) nicht erscheint.",
        },
        { kind: "image", name: "image1", alt: "" },
        {
          kind: "p",
          text: "Ebenso wird das Stück, wenn das gesamte Stück den Status **Senden nicht erlaubt** hat, auch nicht auf dem Proben-Computer angezeigt.",
        },
        { kind: "image", name: "image2", alt: "" },
        { kind: "h4", text: "Duplikate sind nicht erlaubt" },
        {
          kind: "p",
          text: "**Stücke mit demselben Namen:** Sie können Stücke mit demselben Namen haben, solange sie einen anderen **Komponisten** oder **Arrangeur** haben. Beispielsweise können Sie \"Can-Can\" ohne Komponisten, \"Can-Can\" mit Komponist X oder \"Can-Can\" mit Komponist X und Arrangeur Y haben — dies sind unterschiedliche Stücke.",
        },
        {
          kind: "p",
          text: "Wenn Sie jedoch ein Stück ohne Komponisten und ohne Arrangeur hinzufügen und dann versuchen, ein weiteres mit demselben Namen, ebenfalls ohne Komponisten und ohne Arrangeur, hinzuzufügen, wird dies als Duplikat betrachtet. Ebenso wird es als Duplikat betrachtet, wenn Sie ein Stück mit Komponist X hinzufügen und dann versuchen, ein weiteres mit demselben Namen und Komponist X hinzuzufügen.",
        },
        {
          kind: "p",
          text: "**Partituren mit demselben Namen:** es ist nicht erlaubt, dasselbe Instrument zweimal im selben Stück zu haben, zum Beispiel: **Violino** und **Violino**. Es ist nötig, sie zu unterscheiden, z. B.: **Violino I** und **Violino II** oder **Violino** und **Violino (Solo)**. Selbst Dateien mit unterschiedlichen Erweiterungen, z. B.: **Violino.mus** und **Violino.pdf**, werden als Duplikate betrachtet.",
        },
      ],
    },
    instalacao: {
      blocks: [
        { kind: "p", text: "Klicken Sie auf der Startseite auf **Kostenlos herunterladen**." },
        {
          kind: "p",
          text: "Die Datei \"ottavada.cmd\" wird heruntergeladen; wenn Sie darauf klicken, erscheint eine Warnung, aber klicken Sie einfach auf **Ausführen**.",
        },
        { kind: "image", name: "image3", alt: "" },
        {
          kind: "p",
          text: "Das Installationsskript wird geöffnet, erkennt Ihr Betriebssystem und installiert Ottavada entsprechend.",
        },
        { kind: "image", name: "image4", alt: "" },
        { kind: "p", text: "Nach der Installation wird Ottavada gestartet." },
      ],
    },
    primeirosPassos: {
      blocks: [
        { kind: "p", text: "Wenn Sie Ottavada zum ersten Mal öffnen, beginnt der Konfigurationsschritt." },
        { kind: "h3", text: "Schritt 1: Sprache auswählen" },
        {
          kind: "p",
          text: "Hier wählen Sie die Sprache aus, die Ottavada verwenden soll. Die App schlägt eine Sprache basierend auf den Einstellungen Ihres Computers vor, aber Sie können sie nach Ihren Wünschen ändern.",
        },
        { kind: "h3", text: "Schritt 2: Computertyp" },
        { kind: "p", text: "Hier wählen Sie den Computertyp. Es gibt zwei:" },
        {
          kind: "ul",
          items: [
            "**Dirigenten-Computer**: verantwortlich für das Hinzufügen, Bearbeiten und Entfernen von Stücken und Partituren und steuert, was an die anderen Computer gesendet wird oder nicht.",
            "**Proben-Computer**: wird nur zum Lesen der Stücke und Partituren verwendet, die der **Dirigenten-Computer** zur Verfügung gestellt hat.",
          ],
        },
        { kind: "h3", text: "Schritt 3: Computername und Name der Organisation oder Institution" },
        {
          kind: "p",
          text: "Hier geben Sie einfach den Namen Ihres Computers ein (zum Beispiel: \"Heimcomputer\" oder \"Orchesterrcomputer\") und, im anderen Feld, den Namen des Orchesters, der Band, der Institution oder einfach einen Namen für den persönlichen Gebrauch.",
        },
        { kind: "h3", text: "Schritt 4: Cloud-Anbieter-Konfiguration" },
        {
          kind: "p",
          text: "Derzeit unterstützt Ottavada **Koofr** (empfohlen) und **Google Drive**. Koofr wird empfohlen, weil es **viel** schneller als Google Drive ist, aber, andererseits, ist es umständlicher einzurichten.",
        },
        {
          kind: "callout",
          tone: "important",
          text: "Sie müssen dasselbe Cloud-Anbieter-Konto auf den anderen Computern mit Ottavada verwenden. Dies ist notwendig, damit alle auf dieselben Dateien zugreifen können.",
        },
        { kind: "h4", text: "Koofr" },
        {
          kind: "p",
          text: "Wenn Sie kein Konto haben, gehen Sie zu: [Koofr](https://koofr.eu) oder suchen Sie nach **koofr** auf Google. Ich empfehle, das Konto über Google zu erstellen: der Vorgang ist schneller.",
        },
        {
          kind: "p",
          text: "Wenn Sie bei Koofr angemeldet sind und sich auf der Drive-Startseite befinden, klicken Sie in der oberen rechten Ecke und wählen Sie **Einstellungen**.",
        },
        { kind: "image", name: "image5", alt: "" },
        {
          kind: "p",
          text: "Gehen Sie zu **Password**. Unter **App-Passwörter**, geben Sie einen Namen ein (zum Beispiel: \"Ottavada\") und klicken Sie auf **Generieren**.",
        },
        { kind: "image", name: "image6", alt: "" },
        {
          kind: "p",
          text: "Ein Pop-up mit Ihrem generierten Passwort wird geöffnet; klicken Sie auf die Schaltfläche **Kopieren**.",
        },
        { kind: "image", name: "image7", alt: "" },
        {
          kind: "p",
          text: "Ich empfehle, **dieses Passwort zu speichern**: es wird auf Ihren anderen Computern mit Ottavada verwendet.",
        },
        {
          kind: "p",
          text: "Zurück in Ottavada geben Sie die E-Mail-Adresse ein, mit der Sie auf Koofr zugegriffen haben (falls über Gmail, verwenden Sie dieselbe Gmail-Adresse) und dann das Passwort, das Sie kopiert haben.",
        },
        { kind: "h4", text: "Google Drive" },
        {
          kind: "p",
          text: "Hier ist es viel einfacher als bei Koofr, aber, andererseits, ist es **viel** langsamer. Klicken Sie einfach auf die Schaltfläche **Google Drive konfigurieren und testen**. Ihr Browser wird geöffnet, damit Sie ein Konto auswählen können, und das war’s.",
        },
        { kind: "image", name: "image8", alt: "" },
        { kind: "h3", text: "Schritt 5: Überprüfung der Informationen" },
        {
          kind: "p",
          text: "Und schließlich haben wir den Informationsüberprüfungsbildschirm, der den Computernamen, den Namen des Orchesters oder der Institution, den Computertyp und den Cloud-Anbieter anzeigt.",
        },
      ],
    },
    adicionandoMusica: {
      blocks: [
        {
          kind: "p",
          text: "Wie in **Grundlegende Konzepte** erklärt, indiziert Ottavada Ordner und schlägt Namen basierend auf dem Muster vor: **Name des Stücks im Ordner** und **Name des Instruments in der Datei**.",
        },
        { kind: "p", text: "**Ordner** und **Dateien** aus dem Beispiel:" },
        { kind: "p", text: "Ordner:" },
        { kind: "image", name: "image9", alt: "" },
        { kind: "p", text: "Dateien im Ordner:" },
        { kind: "image", name: "image10", alt: "" },
        {
          kind: "p",
          text: "Schauen wir es uns nun in der Praxis an: um ein Verzeichnis zu indizieren, klicken Sie auf das Ordner-mit-Lupe-Symbol oben rechts.",
        },
        { kind: "image", name: "image11", alt: "" },
        {
          kind: "p",
          text: "Wenn Sie klicken, wird der Datei-Explorer geöffnet. Navigieren Sie zum Ordner mit den Partituren, wählen Sie ihn aus und klicken Sie auf **Ordner auswählen**.",
        },
        { kind: "image", name: "image12", alt: "" },
        {
          kind: "p",
          text: "Es erscheint ein Modal mit den Feldern **Name des Stücks**, **Name des Komponisten**, **Name des Arrangeurs** und **die Instrumente**. Jede Datei wird von Ottavada als Instrument betrachtet. Selbst wenn die Partitur mit allen Instrumenten zusammen kein bestimmtes Instrument ist, wird sie als Instrument mit Namen wie **Score**, **Grade** oder anderen betrachtet.",
        },
        { kind: "image", name: "image13", alt: "" },
        {
          kind: "callout",
          tone: "important",
          text: "Der Name, den Sie dem Stück oder Instrument in Ottavada geben, ändert nicht den ursprünglichen Dateinamen auf Ihrem Computer.",
        },
      ],
    },
    enviandoNuvem: {
      blocks: [
        {
          kind: "p",
          text: "Nachdem Sie Ihre Stücke hinzugefügt haben, ist es an der Zeit, sie an den **Cloud-Anbieter** zu senden, und der Vorgang ist ganz einfach. Klicken Sie einfach auf das **Sync**-Symbol (zwei Pfeile, die einen Kreis bilden), das sich neben der Schaltfläche zum Hinzufügen einer Partitur befindet.",
        },
        { kind: "image", name: "image14", alt: "" },
        {
          kind: "p",
          text: "Wenn Sie auf das Sync-Symbol klicken, scannt Ottavada alle Stücke und Partituren, die Sie hinzugefügt, geändert oder entfernt haben, und öffnet das **Berichts-Modal**. Im Beispiel wurde nur ein Stück und einige Instrumente hinzugefügt, daher zeigt das Bild nur das, aber wenn es weitere Änderungen gäbe, würden diese ebenfalls erscheinen.",
        },
        { kind: "image", name: "image15", alt: "" },
        {
          kind: "p",
          text: "Das Hochladen in die Cloud wird erst durchgeführt, nachdem Sie auf **Fortfahren** geklickt haben. Dann wird ein Fortschrittsbalken mit dem Fortschritt des Sendens der Stücke und Partituren angezeigt.",
        },
        { kind: "image", name: "image16", alt: "" },
        {
          kind: "callout",
          tone: "note",
          text: "Überprüfen Sie immer sorgfältig, bevor Sie auf **Fortfahren** klicken. Die im Bericht aufgeführten Änderungen sind genau das, was an die Cloud gesendet wird.",
        },
        {
          kind: "callout",
          tone: "note",
          text: "Wenn Sie ein Problem feststellen, zum Beispiel einen falschen Status eines Stücks, klicken Sie auf **Abbrechen**, korrigieren Sie, was nötig ist, und klicken Sie erneut auf das Sync-Symbol.",
        },
      ],
    },
    realizandoAlteracoes: {
      blocks: [
        {
          kind: "p",
          text: "Beispiel: wir müssen die **Oboe I**-Partitur ändern. Öffnen Sie das Stück, indem Sie darauf klicken, und doppelklicken Sie auf die Oboe-I-Partitur.",
        },
        { kind: "image", name: "image17", alt: "" },
        {
          kind: "p",
          text: "In diesem Fall ist es eine **.mscz**-Datei, die auf Ihrem Computer mit MuseScore geöffnet wird. Links ist die Partitur vor der Änderung und rechts die geänderte (die rot markierte Stelle wurde hinzugefügt).",
        },
        { kind: "image", name: "image18", alt: "" },
        {
          kind: "p",
          text: "Nachdem Sie die Änderung vorgenommen haben, klicken Sie auf das **Sync**-Symbol (zwei Pfeile, die einen Kreis bilden). Der Bericht zeigt an, dass die Datei geändert wurde, und der Status ändert sich zu **Senden nicht erlaubt**.",
        },
        { kind: "image", name: "image19", alt: "" },
        {
          kind: "p",
          text: "**Wenn die Änderung noch nicht fertig ist:** klicken Sie auf **Fortfahren**. Die Partitur wird mit dem Status **Senden nicht erlaubt** gesendet und erscheint nicht auf den Proben-Computern.",
        },
        {
          kind: "p",
          text: "**Wenn die Änderung fertig ist:** klicken Sie im Bericht auf **Abbrechen**. Gehen Sie dann zum Stück und zur Partitur.",
        },
        { kind: "image", name: "image20", alt: "" },
        {
          kind: "p",
          text: "Der Status wird **Senden nicht erlaubt** sein (weil die Partitur geändert wurde). Klicken Sie auf die drei Punkte und wählen Sie **Senden erlauben**.",
        },
        { kind: "image", name: "image21", alt: "" },
        {
          kind: "p",
          text: "Wenn Sie nun erneut auf das **Sync**-Symbol klicken, zeigt der Bericht den Status als **Senden erlaubt** und die Partitur wird an die Proben-Computer gesendet. Der Vorgang ist derselbe wie unter [in die Cloud senden](#enviando-nuvem) beschrieben.",
        },
      ],
    },
    baixando: {
      blocks: [
        { kind: "h3", text: "Installation auf dem Proben-Computer" },
        {
          kind: "p",
          text: "Der Vorgang ist derselbe wie im Thema [Installation](#instalacao). Der einzige Unterschied ist, dass Sie in Schritt 2 **Proben-Computer** auswählen.",
        },
        {
          kind: "callout",
          tone: "important",
          text: "Sie müssen denselben **Cloud-Anbieter** (Koofr oder Google Drive) und dasselbe **Konto** verwenden, das auf dem **Dirigenten-Computer** ist. Andernfalls können die Computer keine Informationen austauschen.",
        },
        { kind: "p", text: "Klicken Sie auf dem Startbildschirm von Ottavada auf das **Sync**-Symbol." },
        { kind: "image", name: "image22", alt: "" },
        { kind: "p", text: "Der Fortschritt des Downloads der Stücke und Partituren wird angezeigt." },
        { kind: "image", name: "image23", alt: "" },
        {
          kind: "p",
          text: "Und das war’s, so einfach ist das. Was auf dem **Dirigenten-Computer** hinzugefügt, geändert oder sogar entfernt wurde, erscheint bereits auf dem **Proben-Computer**. In unserem Beispiel wurden nur eine Hinzufügung und eine Änderung vorgenommen (die **Oboe I**-Partitur wurde geändert, aber da sie auf den Status **Senden erlaubt** gesetzt wurde, erschien sie).",
        },
        { kind: "image", name: "image24", alt: "" },
      ],
    },
    backup: {
      blocks: [
        {
          kind: "p",
          text: "Nehmen wir an, Ihr Computer ist kaputtgegangen und Sie haben einen neuen gekauft und müssen alle Stücke/Partituren wiederherstellen. Es ist ganz einfach und sie kommen an denselben Ort wie auf dem alten Computer.",
        },
        {
          kind: "p",
          text: "Sie müssen Ottavada auf dem Computer installieren und die Schritte aus der [Installation](#instalacao) befolgen; in Schritt 2 wählen Sie **Dirigenten-Computer** und verwenden denselben Cloud-Anbieter und dieselben Anmeldedaten (für Koofr: E-Mail und App-Passwort; für Google Drive: Kontozugriff).",
        },
        { kind: "p", text: "Gehen Sie einfach zu den Einstellungen (Zahnrad-Symbol)." },
        { kind: "image", name: "image25", alt: "" },
        { kind: "p", text: "Scrollen Sie zum Abschnitt **Cloud-Backup** und klicken Sie auf **Backup importieren**." },
        { kind: "image", name: "image26", alt: "" },
        {
          kind: "p",
          text: "Der Fortschritt wird angezeigt und am Ende befinden sich die Dateien in den ursprünglichen Ordnern und auch in Ottavada.",
        },
        { kind: "image", name: "image27", alt: "" },
      ],
    },
    suporte: {
      blocks: [
        {
          kind: "p",
          text: "Bei Fragen kontaktieren Sie uns per E-Mail [ottavada@hotmail.com](mailto:ottavada@hotmail.com) oder nutzen Sie den Chatbot in der unteren Ecke des Bildschirms.",
        },
      ],
    },
  },
};

export const docs: Record<Locale, DocsMessages> = {
  "pt-BR": ptBR,
  en,
  es,
  fr,
  it,
  de,
};






