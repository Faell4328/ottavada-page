import type { Locale } from "./config";

export type BenefitMessages = {
  duplicacoesOcultas: { title: string; body: string };
  busca: { title: string; body: string };
  ordem: { title: string; body: string };
  favoritos: { title: string; body: string };
  ferramentas: { title: string; body: string };
  maestro: { title: string; body: string };
  ensaio: { title: string; body: string };
  nuvem: { title: string; body: string };
  backup: { title: string; body: string };
  arquivos: { title: string; body: string };
  desinstalou: { title: string; body: string };
  escolha: { title: string; body: string };
  copias: { title: string; body: string };
  idiomas: { title: string; body: string };
  gratuito: { title: string; body: string };
  evolucao: { title: string; body: string };
  semLigar: { title: string; body: string };
  limPastas: { title: string; body: string };
  limMovida: { title: string; body: string };
  limGerir: { title: string; body: string };
  limInternet: { title: string; body: string };
  limAdaptacao: { title: string; body: string };
};

export type HomeMessages = {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  brand: { name: string; tagline: string };
  nav: { download: string; docs: string };
  hero: {
    line1: string;
    line2: string;
    cta: string;
    ctaOs: string;
    ctaNote: string;
    otherSystem: string;
  };
  sections: {
    descricao: { kicker: string; text: string };
    comoFunciona: { kicker: string; text: string };
    paraQuem: { kicker: string; text: string };
    organizacao: { kicker: string; heading: string };
    sincronizacao: { kicker: string; heading: string };
    liberdade: { kicker: string; heading: string };
    maisVantagens: { kicker: string; heading: string };
    limitacoes: { kicker: string; heading: string; intro: string };
  };
  benefits: BenefitMessages;
  footer: { email: string; dev: string };
  help: {
    kicker: string;
    heading: string;
    subtitle: string;
    docs: { title: string; body: string };
  };
};

export const home: Record<Locale, HomeMessages> = {
  "pt-BR": {
    meta: {
      title: "Ottavada: chega de trabalho manual com suas músicas e partituras",
      description:
        "Cansado de trabalho manual com partituras? O Ottavada organiza, sincroniza e protege o repertório da sua orquestra entre computadores. Gratuito, open source e sem assinatura. Para Windows, Linux e Mac.",
      ogTitle: "Ottavada: Chega de trabalho manual com suas partituras",
      ogDescription:
        "Software gratuito e open source para organizar e sincronizar o repertório da sua orquestra. Sem assinatura, sem servidor próprio.",
    },
    brand: { name: "Ottavada", tagline: "O maestro digital da sua orquestra" },
    nav: { download: "Baixar agora", docs: "Documentação" },
    hero: {
      line1: "Você cuida da música. O Ottavada cuida da organização, do compartilhamento entre seus computadores e da cópia de segurança.",
      line2: "",
      cta: "Baixar gratuitamente",
      ctaOs: "Baixar para %s",
      ctaNote: "Para Windows, Linux e Mac — 100% gratuito",
      otherSystem: "Todos os downloads",
    },
    sections: {
      descricao: {
        kicker: "O problema de quem mexe com partituras",
        text: "Músicas e partituras duplicadas, um padrão de organização difícil de entender para outras pessoas, movimentação entre computadores de forma manual e outros computadores com a versão incorreta da música. O Ottavada resolve exatamente isso.",
      },
      comoFunciona: {
        kicker: "Como o Ottavada faz isso?",
        text: "Você aponta a pasta onde estão as músicas e as partituras, o Ottavada faz o resto. Com isso, o Ottavada se molda à forma como você organiza suas partituras e não o contrário. Seus arquivos não saem do lugar: nada é movido, renomeado ou apagado sem a sua ordem. E se um dia quiser parar de usar? É só desinstalar. Suas pastas e arquivos ficam exatamente onde sempre estiveram.",
      },
      paraQuem: {
        kicker: "Para quem é o Ottavada?",
        text: "Para regentes, músicos e orquestras que lidam com partituras no dia a dia.",
      },
      organizacao: {
        kicker: "Organização",
        heading: "Ache qualquer partitura em segundos.",
      },
      sincronizacao: {
        kicker: "Sincronização",
        heading: "Um só aplicativo. Dois modos: Gerir e Consultar.",
      },
      liberdade: {
        kicker: "Liberdade",
        heading: "Seus arquivos, suas regras. Sem prender ninguém.",
      },
      maisVantagens: {
        kicker: "Mais vantagens",
        heading: "Pequenos detalhes que fazem toda a diferença.",
      },
      limitacoes: {
        kicker: "Limitações",
        heading: "Com grandes benefícios, vem grandes limitações",
        intro:
          "O Ottavada não é perfeito e entender isso é o primeiro passo para aproveitá-lo ao máximo. A boa notícia: as limitações de hoje já têm soluções em planejamento, então versões futuras devem reduzi-las ou eliminar de vez.",
      },
    },
    benefits: {
      duplicacoesOcultas: {
        title: "Encontre e remova duplicação que nem você percebeu",
        body: "O Ottavada analisa seu repertório e revela músicas ou partituras repetidas que passaram despercebidas, evitando que seu repertório tenha várias músicas duplicadas.",
      },
      busca: {
        title: "Encontre com extrema facilidade",
        body: "Pesquise por nome e/ou filtre por categoria, compositor e arranjador. Perfeito para repertórios grandes.",
      },
      ordem: {
        title: "Ordem padrão de grade mundial",
        body: 'Ao abrir uma música, as partituras aparecem na ordem padrão: madeiras, metais, percussão, teclados, harpa e cordas. O mesmo "Standard Orchestral Score Order" usado no mundo todo.',
      },
      favoritos: {
        title: "Favoritos",
        body: "Marque como favoritas as músicas que você mais usa e encontre-as facilmente na seção de favoritas.",
      },
      ferramentas: {
        title: "Continue usando suas ferramentas favoritas",
        body: "Funciona com Finale, MuseScore, Sibelius, Dorico e Encore, além de PDF, MusicXML, MIDI. Você não muda nada no seu fluxo de trabalho.",
      },
      maestro: {
        title: "Modo Gerir: controle total",
        body: "Adicione, edite e remova músicas e partituras. Use uma partitura como base para criar outra. Defina o que vai para o modo Consultar e o que fica só com você.",
      },
      ensaio: {
        title: "Modo Consultar: só leitura, zero risco",
        body: "Consulta rápida para a sala de ensaio. Os arquivos só podem ser visualizados, sem risco de alguém apagar ou alterar a partitura sem querer.",
      },
      nuvem: {
        title: "Sincronize de graça pelo Google Drive ou Koofr",
        body: "Sem custo de assinatura (com exceção se precisar de mais espaço do que os planos gratuitos suportam). Os arquivos são compactados antes do envio, ocupando menos espaço e sincronizando mais rápido.",
      },
      backup: {
        title: "PC formatou? Tudo de volta em 1 clique",
        body: "Trocou de máquina ou formatou o computador? O Ottavada faz backup automático a cada hora, mantendo os 10 mais recentes. Suas pastas, arquivos e informações no Ottavada estão salvos. Um clique e tudo volta ao lugar, nas mesmas pastas de antes.",
      },
      arquivos: {
        title: "Seus arquivos, suas regras",
        body: "O Ottavada não renomeia pastas nem arquivos e não impõe formatos proprietários. A única exceção é quando você opta por mover uma música ou partitura para a lixeira.",
      },
      desinstalou: {
        title: "Desinstalou? Suas partituras continuam lá",
        body: "Se um dia decidir parar de usar, suas partituras continuam exatamente onde estavam, organizadas, acessíveis e sem nenhuma dependência do Ottavada.",
      },
      escolha: {
        title: "Você decide o que vai para o modo Consultar",
        body: "Nem toda partitura precisa ir para o modo Consultar. Você escolhe: enviar, não enviar ou ignorar. Partituras em rascunho ficam só com você até ficarem prontas para ir para os outros computadores.",
      },
      idiomas: {
        title: "Em 6 idiomas, do Brasil à Alemanha",
        body: "Disponível em português, inglês, espanhol, francês, italiano e alemão. Para orquestras, bandas e músicos do mundo todo.",
      },
      gratuito: {
        title: "Gratuito de verdade. Sem pegadinhas.",
        body: "100% gratuito, sem assinatura, sem limite de músicas, sem anúncio e sem servidor próprio para manter.",
      },
      evolucao: {
        title: "Em evolução",
        body: "O Ottavada está em fase inicial, mas recebe melhorias frequentes. Novas funcionalidades, correções e idiomas são adicionados com base no que os usuários pedem.",
      },
      semLigar: {
        title: "Sem servidor, sem PC ligado 24h",
        body: "Outras ferramentas exigem um computador ligado o tempo todo como servidor. O Ottavada não: cada computador fala direto com o provedor de nuvem (Koofr ou Google Drive). Não sendo necessário manter ou contratar um servidor para usar o Ottavada.",
      },
      copias: {
        title: "Funciona offline no ensaio",
        body: "As partituras ficam salvas no seu computador. Acesse tudo mesmo sem internet durante o ensaio. Rápido, confiável e sem depender da nuvem na hora H.",
      },
      limPastas: {
        title: "Você mesmo precisa criar as pastas",
        body: "O Ottavada não organiza seus arquivos por você, ele lê o que você já tem. Para adicionar uma música nova, o trabalho manual é seu: criar a pasta, dar o nome e colocar as partituras dentro. Só depois disso o Ottavada entra em ação. É simples, mas é uma etapa que continua sendo sua.",
      },
      limMovida: {
        title: "Mudou uma pasta de lugar? Precisa avisar o Ottavada",
        body: "O Ottavada guarda o endereço de cada pasta indexada. Se você mover ou renomear a pasta de uma música, ele perde o caminho e você precisa indexar de novo para ele reencontrar. Não é complicado, mas é um passo a mais para lembrar.",
      },
      limGerir: {
        title: "Dois computadores em Modo Gerir ao mesmo tempo? Evite",
        body: "A nuvem é a ponte entre seus computadores. Se dois computadores em Modo Gerir sincronizarem ao mesmo tempo, eles podem se atrapalhar, um sobrescreve o que o outro enviou. Por isso a recomendação é clara: use um computador em Modo Gerir por vez.",
      },
      limInternet: {
        title: "Sincronização precisa de internet",
        body: "A troca de músicas entre computadores depende da conexão. Sem internet, o Modo Consultar continua funcionando com tudo que já foi baixado antes, mas nada de novo chega até a conexão voltar.",
      },
      limAdaptacao: {
        title: "É uma ferramenta nova: leva um tempinho para se acostumar",
        body: "Como tudo que é novo, o Ottavada exige um período de adaptação: entender os dois modos, o que significa \"permitir envio\", como indexar. Nada de outro mundo, mas é bom saber antes de começar.",
      },
    },
    footer: {
      email: "Email de contato: ottavada@hotmail.com",
      dev: "Desenvolvido por Rhafaell (faell4328)",
    },
    help: {
      kicker: "Precisa de ajuda?",
      heading: "Tem dúvidas? A gente te ajuda.",
      subtitle:
        "Veja os guias passo a passo ou pergunte ao nosso assistente no canto inferior direito da tela.",
      docs: {
        title: "Ler a documentação",
        body: "Como instalar, configurar e usar o Ottavada do zero, com guias passo a passo.",
      },
    },
  },
  en: {
    meta: {
      title: "Ottavada: no more manual work with your songs and sheet music",
      description:
        "Tired of manual work with sheet music? Ottavada organizes, syncs and protects your orchestra's repertoire across computers. Free, open source, no subscription. For Windows, Linux and Mac.",
      ogTitle: "Ottavada: No more manual work with your sheet music",
      ogDescription:
        "Free and open source software to organize, sync and share your orchestra's repertoire. No subscription, no proprietary server.",
    },
    brand: { name: "Ottavada", tagline: "Your orchestra's digital conductor" },
    nav: { download: "Download now", docs: "Documentation" },
    hero: {
      line1: "You take care of the music. Ottavada takes care of organization, sharing across your computers and backup.",
      line2: "",
      cta: "Download for free",
      ctaOs: "Download for %s",
      ctaNote: "For Windows, Linux and Mac — 100% free",
      otherSystem: "All downloads",
    },
    sections: {
      descricao: {
        kicker: "The problem for anyone who works with sheet music",
        text: "Duplicate songs and scores, an organization pattern hard for others to understand, manually moving files between computers, and other computers with the wrong version of the music. Ottavada fixes exactly that.",
      },
      comoFunciona: {
        kicker: "How does Ottavada do it?",
        text: "You point to the folder where your songs and scores are, and Ottavada does the rest. That way, Ottavada molds to how you organize your scores, not the other way around. Your files never leave their place: nothing is moved, renamed or deleted without your order. And if one day you want to stop using it? Just uninstall. Your folders and files stay exactly where they have always been.",
      },
      paraQuem: {
        kicker: "Who is Ottavada for?",
        text: "For conductors, musicians and orchestras that deal with sheet music every day.",
      },
      organizacao: {
        kicker: "Organization",
        heading: "Find any sheet music in seconds.",
      },
      sincronizacao: {
        kicker: "Sync",
        heading: "One app. Two modes: Manage and Consult.",
      },
      liberdade: {
        kicker: "Freedom",
        heading: "Your files, your rules. No lock-in.",
      },
      maisVantagens: {
        kicker: "More perks",
        heading: "Small details that make all the difference.",
      },
      limitacoes: {
        kicker: "Limitations",
        heading: "With great benefits come great limitations",
        intro:
          "Ottavada is not perfect, and understanding that is the first step to making the most of it. The good news: today's limitations already have planned solutions, so future versions should reduce or eliminate them for good.",
      },
    },
    benefits: {
      duplicacoesOcultas: {
        title: "Find and remove duplicates you never noticed",
        body: "Ottavada scans your repertoire and reveals repeated songs or sheet music that went unnoticed, keeping your repertoire free of duplicates.",
      },
      busca: {
        title: "Find anything with incredible ease",
        body: "Search by name and/or filter by category, composer and arranger. Perfect for large repertoires.",
      },
      ordem: {
        title: "World-standard score order",
        body: 'When you open a piece, sheet music appears in standard order: woodwinds, brass, percussion, keyboards, harp and strings. The same "Standard Orchestral Score Order" used worldwide.',
      },
      favoritos: {
        title: "Favorites",
        body: "Mark as favorites the pieces you use the most and find them easily in the favorites section.",
      },
      ferramentas: {
        title: "Keep using your favorite tools",
        body: "Works with Finale, MuseScore, Sibelius, Dorico and Encore, plus PDF, MusicXML, MIDI. You don't change a thing in your workflow.",
      },
      maestro: {
        title: "Manage mode: full control",
        body: "Add, edit and remove pieces and sheet music. Use a score as a base to create another. Decide what goes to Consult mode and what stays only with you.",
      },
      ensaio: {
        title: "Consult mode: read-only, zero risk",
        body: "Quick reference for the rehearsal room. Files can only be viewed, with no risk of someone accidentally deleting or changing a score.",
      },
      nuvem: {
        title: "Sync free via Google Drive or Koofr",
        body: "No subscription fees (unless you need more space than the free plans support). Files are compressed before upload, taking up less space and syncing faster.",
      },
      backup: {
        title: "PC formatted? Back in 1 click",
        body: "Switched machines or formatted the computer? Ottavada makes an automatic backup every hour, keeping the 10 most recent. Your folders, files and Ottavada information are saved. One click and everything is back in place, in the same folders as before.",
      },
      arquivos: {
        title: "Your files, your rules",
        body: "Ottavada does not rename folders or files and does not impose proprietary formats. The only exception is when you choose to move a piece or score to the trash.",
      },
      desinstalou: {
        title: "Uninstalled? Your sheet music stays",
        body: "If one day you decide to stop using it, your sheet music stays exactly where it was, organized, accessible, and with no dependency on Ottavada.",
      },
      escolha: {
        title: "You decide what goes to Consult mode",
        body: "Not every score needs to go to Consult mode. You choose: send, don't send or ignore. Draft scores stay only with you until they're ready to go to your other computers.",
      },
      idiomas: {
        title: "In 6 languages, from Brazil to Germany",
        body: "Available in Portuguese, English, Spanish, French, Italian and German. For orchestras, bands and musicians worldwide.",
      },
      gratuito: {
        title: "Truly free. No catch.",
        body: "100% free, no subscription, no limit on pieces, no ads and no proprietary server to maintain.",
      },
      evolucao: {
        title: "Always evolving",
        body: "Ottavada is in early stages, but receives frequent improvements. New features, fixes and languages are added based on user requests.",
      },
      semLigar: {
        title: "No server, no PC on 24/7",
        body: "Other tools require a computer running all the time as a server. Ottavada doesn't: each computer talks directly to the cloud provider (Koofr or Google Drive). No need to maintain or hire a server to use Ottavada.",
      },
      copias: {
        title: "Works offline at rehearsal",
        body: "Sheet music is saved on your computer. Access everything even without internet during rehearsal. Fast, reliable, and no cloud dependency when it matters most.",
      },
      limPastas: {
        title: "You need to create the folders yourself",
        body: "Ottavada doesn't organize your files for you, it reads what you already have. To add a new piece, the manual work is yours: create the folder, give it a name and put the sheet music inside. Only then Ottavada kicks in. Simple, but it's still your step.",
      },
      limMovida: {
        title: "Moved a folder? You need to tell Ottavada",
        body: "Ottavada stores the address of each indexed folder. If you move or rename a piece's folder, it loses the path and you need to index it again so it can find it. Not complicated, but an extra step to remember.",
      },
      limGerir: {
        title: "Two computers in Manage mode at the same time? Avoid it",
        body: "The cloud is the bridge between your computers. If two Manage mode computers sync at the same time, they can interfere with each other, one overwriting what the other sent. So the recommendation is clear: use one Manage mode computer at a time.",
      },
      limInternet: {
        title: "Sync needs internet",
        body: "Exchanging music between computers depends on the connection. Without internet, Consult mode keeps working with everything already downloaded, but nothing new arrives until the connection is back.",
      },
      limAdaptacao: {
        title: "It's a new tool: takes some getting used to",
        body: "Like anything new, Ottavada needs an adjustment period: understanding the two modes, what \"allow sending\" means, how to index. Nothing out of this world, but good to know before you start.",
      },
    },
    footer: {
      email: "Contact email: ottavada@hotmail.com",
      dev: "Developed by Rhafaell (faell4328)",
    },
    help: {
      kicker: "Need help?",
      heading: "Got questions? We've got you covered.",
      subtitle:
        "Browse step-by-step guides or ask our assistant at the bottom-right of the screen.",
      docs: {
        title: "Read the documentation",
        body: "How to install, set up and use Ottavada from scratch, with step-by-step guides.",
      },
    },
  },
  es: {
    meta: {
      title: "Ottavada: basta de trabajo manual con tus canciones y partituras",
      description:
        "¿Cansado del trabajo manual con partituras? Ottavada organiza, sincroniza y protege el repertorio de tu orquesta entre ordenadores. Gratuito, open source y sin suscripción. Para Windows, Linux y Mac.",
      ogTitle: "Ottavada: Basta de trabajo manual con tus partituras",
      ogDescription:
        "Software gratuito y open source para organizar, sincronizar y compartir el repertorio de tu orquesta. Sin suscripción, sin servidor propio.",
    },
    brand: { name: "Ottavada", tagline: "El director digital de tu orquesta" },
    nav: { download: "Descargar ahora", docs: "Documentación" },
    hero: {
      line1: "Tú te encargas de la música. Ottavada se encarga de la organización, de compartir entre tus ordenadores y de la copia de seguridad.",
      line2: "",
      cta: "Descargar gratis",
      ctaOs: "Descargar para %s",
      ctaNote: "Para Windows, Linux y Mac — 100% gratuito",
      otherSystem: "Todos los downloads",
    },
    sections: {
      descricao: {
        kicker: "El problema de quien trabaja con partituras",
        text: "Canciones y partituras duplicadas, un patrón de organización difícil de entender para otras personas, mover archivos entre ordenadores manualmente y otros ordenadores con la versión incorrecta de la música. Ottavada resuelve exactamente eso.",
      },
      comoFunciona: {
        kicker: "¿Cómo lo hace Ottavada?",
        text: "Señalas la carpeta donde están tus canciones y partituras, y Ottavada hace el resto. Así, Ottavada se amolda a la forma en que organizas tus partituras, y no al revés. Tus archivos no salen de su lugar: nada se mueve, renombra o elimina sin tu orden. ¿Y si un día quieres dejar de usarlo? Solo desinstala. Tus carpetas y archivos quedan exactamente donde siempre estuvieron.",
      },
      paraQuem: {
        kicker: "¿Para quién es Ottavada?",
        text: "Para directores, músicos y orquestas que trabajan con partituras a diario.",
      },
      organizacao: {
        kicker: "Organización",
        heading: "Encuentra cualquier partitura en segundos.",
      },
      sincronizacao: {
        kicker: "Sincronización",
        heading: "Una sola app. Dos modos: Gestionar y Consultar.",
      },
      liberdade: {
        kicker: "Libertad",
        heading: "Tus archivos, tus reglas. Sin ataduras.",
      },
      maisVantagens: {
        kicker: "Más ventajas",
        heading: "Pequeños detalles que marcan toda la diferencia.",
      },
      limitacoes: {
        kicker: "Limitaciones",
        heading: "Con grandes beneficios vienen grandes limitaciones",
        intro:
          "Ottavada no es perfecto, y entenderlo es el primer paso para aprovecharlo al máximo. La buena noticia: las limitaciones de hoy ya tienen soluciones en planificación, así que las versiones futuras deberían reducirlas o eliminarlas de una vez.",
      },
    },
    benefits: {
      duplicacoesOcultas: {
        title: "Encuentra y elimina duplicados que ni notaste",
        body: "Ottavada analiza tu repertorio y revela canciones o partituras repetidas que pasaron desapercibidas, evitando que tu repertorio tenga varias canciones duplicadas.",
      },
      busca: {
        title: "Encuentra con extrema facilidad",
        body: "Busca por nombre y/o filtra por categoría, compositor y arreglista. Perfecto para repertorios grandes.",
      },
      ordem: {
        title: "Orden estándar de partitura mundial",
        body: 'Al abrir una canción, las partituras aparecen en el orden estándar: maderas, metales, percusión, teclados, arpa y cuerdas. El mismo "Standard Orchestral Score Order" usado en todo el mundo.',
      },
      favoritos: {
        title: "Favoritos",
        body: "Marca como favoritas las canciones que más usas y encuéntralas fácilmente en la sección de favoritas.",
      },
      ferramentas: {
        title: "Sigue usando tus herramientas favoritas",
        body: "Funciona con Finale, MuseScore, Sibelius, Dorico y Encore, además de PDF, MusicXML, MIDI. No cambias nada en tu flujo de trabajo.",
      },
      maestro: {
        title: "Modo Gestionar: control total",
        body: "Añade, edita y elimina canciones y partituras. Usa una partitura como base para crear otra. Define qué va al modo Consultar y qué se queda solo contigo.",
      },
      ensaio: {
        title: "Modo Consultar: solo lectura, cero riesgo",
        body: "Consulta rápida para la sala de ensayo. Los archivos solo se pueden visualizar, sin riesgo de que alguien borre o cambie una partitura por accidente.",
      },
      nuvem: {
        title: "Sincroniza gratis con Google Drive o Koofr",
        body: "Sin coste de suscripción (salvo que necesites más espacio del que admiten los planes gratuitos). Los archivos se comprimen antes del envío, ocupando menos espacio y sincronizando más rápido.",
      },
      backup: {
        title: "¿PC formateado? Todo vuelve en 1 clic",
        body: "¿Cambiaste de máquina o formateaste el ordenador? Ottavada hace una copia de seguridad automática cada hora, conservando las 10 más recientes. Tus carpetas, archivos e información en Ottavada están a salvo. Un clic y todo vuelve a su lugar, en las mismas carpetas de antes.",
      },
      arquivos: {
        title: "Tus archivos, tus reglas",
        body: "Ottavada no renombra carpetas ni archivos y no impone formatos propietarios. La única excepción es cuando decides mover una canción o partitura a la papelera.",
      },
      desinstalou: {
        title: "¿Desinstalado? Tus partituras siguen allí",
        body: "Si un día decides dejar de usarlo, tus partituras siguen exactamente donde estaban, organizadas, accesibles y sin ninguna dependencia de Ottavada.",
      },
      escolha: {
        title: "Tú decides qué va al modo Consultar",
        body: "No toda partitura necesita ir al modo Consultar. Tú eliges: enviar, no enviar o ignorar. Los borradores se quedan solo contigo hasta que estén listos para ir a tus otros ordenadores.",
      },
      idiomas: {
        title: "En 6 idiomas, de Brasil a Alemania",
        body: "Disponible en portugués, inglés, español, francés, italiano y alemán. Para orquestas, bandas y músicos de todo el mundo.",
      },
      gratuito: {
        title: "Gratis de verdad. Sin trampas.",
        body: "100% gratuito, sin suscripción, sin límite de canciones, sin anuncios y sin servidor propio que mantener.",
      },
      evolucao: {
        title: "En evolución",
        body: "Ottavada está en fase inicial, pero recibe mejoras frecuentes. Se añaden nuevas funcionalidades, correcciones e idiomas según lo que piden los usuarios.",
      },
      semLigar: {
        title: "Sin servidor, sin PC encendido 24h",
        body: "Otras herramientas exigen un ordenador encendido todo el tiempo como servidor. Ottavada no: cada ordenador habla directamente con el proveedor de nube (Koofr o Google Drive). Sin necesidad de mantener o contratar un servidor para usar Ottavada.",
      },
      copias: {
        title: "Funciona offline en el ensayo",
        body: "Las partituras se guardan en tu ordenador. Accede a todo incluso sin internet durante el ensayo. Rápido, fiable y sin depender de la nube en el momento clave.",
      },
      limPastas: {
        title: "Tú mismo necesitas crear las carpetas",
        body: "Ottavada no organiza tus archivos por ti, lee lo que ya tienes. Para añadir una canción nueva, el trabajo manual es tuyo: crear la carpeta, ponerle nombre y colocar las partituras dentro. Solo después Ottavada entra en acción. Es simple, pero sigue siendo tu paso.",
      },
      limMovida: {
        title: "¿Moviste una carpeta? Debes avisar a Ottavada",
        body: "Ottavada guarda la dirección de cada carpeta indexada. Si mueves o renombras la carpeta de una canción, pierde el camino y tienes que indexar de nuevo para que la vuelva a encontrar. No es complicado, pero es un paso más a recordar.",
      },
      limGerir: {
        title: "¿Dos ordenadores en Modo Gestionar a la vez? Evítalo",
        body: "La nube es el puente entre tus ordenadores. Si dos ordenadores en Modo Gestionar sincronizan al mismo tiempo, pueden estorbarse, uno sobrescribe lo que envió el otro. Por eso la recomendación es clara: usa un ordenador en Modo Gestionar por vez.",
      },
      limInternet: {
        title: "La sincronización necesita internet",
        body: "El intercambio de canciones entre ordenadores depende de la conexión. Sin internet, el Modo Consultar sigue funcionando con todo lo descargado antes, pero nada nuevo llega hasta que la conexión vuelva.",
      },
      limAdaptacao: {
        title: "Es una herramienta nueva: lleva un tiempo acostumbrarse",
        body: "Como todo lo nuevo, Ottavada exige un período de adaptación: entender los dos modos, qué significa \"permitir envío\", cómo indexar. Nada del otro mundo, pero es bueno saberlo antes de empezar.",
      },
    },
    footer: {
      email: "Email de contacto: ottavada@hotmail.com",
      dev: "Desarrollado por Rhafaell (faell4328)",
    },
    help: {
      kicker: "¿Necesitas ayuda?",
      heading: "¿Tienes dudas? Te ayudamos.",
      subtitle:
        "Consulta las guías paso a paso o pregunta a nuestro asistente en la esquina inferior derecha.",
      docs: {
        title: "Leer la documentación",
        body: "Cómo instalar, configurar y usar Ottavada desde cero, con guías paso a paso.",
      },
    },
  },
  fr: {
    meta: {
      title: "Ottavada : assez de travail manuel avec vos morceaux et partitions",
      description:
        "Marre du travail manuel avec vos partitions ? Ottavada organise, synchronise et protège le répertoire de votre orchestre entre ordinateurs. Gratuit, open source et sans abonnement. Pour Windows, Linux et Mac.",
      ogTitle: "Ottavada : Assez de travail manuel avec vos partitions",
      ogDescription:
        "Logiciel gratuit et open source pour organiser, synchroniser et partager le répertoire de votre orchestre. Sans abonnement, sans serveur propriétaire.",
    },
    brand: { name: "Ottavada", tagline: "Le chef numérique de votre orchestre" },
    nav: { download: "Télécharger", docs: "Documentation" },
    hero: {
      line1: "Vous vous occupez de la musique. Ottavada s’occupe de l’organisation, du partage entre vos ordinateurs et de la sauvegarde.",
      line2: "",
      cta: "Télécharger gratuitement",
      ctaOs: "Télécharger pour %s",
      ctaNote: "Pour Windows, Linux et Mac — 100 % gratuit",
      otherSystem: "Tous les téléchargements",
    },
    sections: {
      descricao: {
        kicker: "Le problème de quiconque travaille avec des partitions",
        text: "Morceaux et partitions en double, un modèle d’organisation difficile à comprendre pour les autres, le déplacement manuel de fichiers entre ordinateurs et d’autres ordinateurs avec la mauvaise version de la musique. Ottavada règle exactement ça.",
      },
      comoFunciona: {
        kicker: "Comment Ottavada fait-il ?",
        text: "Vous pointez vers le dossier où se trouvent vos morceaux et partitions, et Ottavada fait le reste. Ainsi, Ottavada s’adapte à la façon dont vous organisez vos partitions, et non l’inverse. Vos fichiers ne bougent pas de place : rien n’est déplacé, renommé ou supprimé sans votre ordre. Et si un jour vous voulez arrêter de l’utiliser ? Il suffit de désinstaller. Vos dossiers et fichiers restent exactement là où ils ont toujours été.",
      },
      paraQuem: {
        kicker: "Pour qui est Ottavada ?",
        text: "Pour les chefs, musiciens et orchestres qui travaillent avec des partitions au quotidien.",
      },
      organizacao: {
        kicker: "Organisation",
        heading: "Trouvez n’importe quelle partition en secondes.",
      },
      sincronizacao: {
        kicker: "Synchronisation",
        heading: "Une seule app. Deux modes : Gérer et Consulter.",
      },
      liberdade: {
        kicker: "Liberté",
        heading: "Vos fichiers, vos règles. Aucun verrouillage.",
      },
      maisVantagens: {
        kicker: "Plus d'avantages",
        heading: "De petits détails qui changent tout.",
      },
      limitacoes: {
        kicker: "Limitations",
        heading: "Aux grands bénéfices, les grandes limites",
        intro:
          "Ottavada n’est pas parfait, et le comprendre est le premier pas pour en tirer le meilleur. Bonne nouvelle : les limites d’aujourd’hui ont déjà des solutions prévues, donc les versions futures devraient les réduire ou les éliminer pour de bon.",
      },
    },
    benefits: {
      duplicacoesOcultas: {
        title: "Trouvez et éliminez les doublons que vous n’aviez pas remarqués",
        body: "Ottavada analyse votre répertoire et révèle les morceaux ou partitions en double passés inaperçus, évitant ainsi que votre répertoire ait plusieurs morceaux dupliqués.",
      },
      busca: {
        title: "Trouvez tout avec une grande facilité",
        body: "Recherchez par nom et/ou filtrez par catégorie, compositeur et arrangeur. Parfait pour les grands répertoires.",
      },
      ordem: {
        title: "Ordre de partition standard mondial",
        body: "À l’ouverture d’un morceau, les partitions apparaissent dans l’ordre standard : bois, cuivres, percussions, claviers, harpe et cordes. Le même « Standard Orchestral Score Order » utilisé dans le monde entier.",
      },
      favoritos: {
        title: "Favoris",
        body: "Marquez comme favoris les morceaux que vous utilisez le plus et retrouvez-les facilement dans la section des favoris.",
      },
      ferramentas: {
        title: "Gardez vos outils préférés",
        body: "Compatible avec Finale, MuseScore, Sibelius, Dorico et Encore, ainsi que PDF, MusicXML, MIDI. Vous ne changez rien à votre flux de travail.",
      },
      maestro: {
        title: "Mode Gérer : contrôle total",
        body: "Ajoutez, modifiez et supprimez des morceaux et partitions. Utilisez une partition comme base pour en créer une autre. Définissez ce qui va en mode Consulter et ce qui reste uniquement avec vous.",
      },
      ensaio: {
        title: "Mode Consulter : lecture seule, zéro risque",
        body: "Consultation rapide pour la salle de répétition. Les fichiers sont en lecture seule, sans risque qu’une partition soit supprimée ou modifiée par accident.",
      },
      nuvem: {
        title: "Synchronisation gratuite via Google Drive ou Koofr",
        body: "Sans frais d’abonnement (sauf si vous avez besoin de plus d’espace que les offres gratuites ne le permettent). Les fichiers sont compressés avant l’envoi : moins d’espace utilisé et synchronisation plus rapide.",
      },
      backup: {
        title: "PC formaté ? Tout revient en 1 clic",
        body: "Vous avez changé de machine ou formaté votre ordinateur ? Ottavada fait une sauvegarde automatique toutes les heures, en conservant les 10 plus récentes. Vos dossiers, fichiers et informations dans Ottavada sont sauvegardés. Un clic et tout revient à sa place, dans les mêmes dossiers qu’avant.",
      },
      arquivos: {
        title: "Vos fichiers, vos règles",
        body: "Ottavada ne renomme ni les dossiers ni les fichiers et n’impose pas de formats propriétaires. La seule exception est lorsque vous choisissez de déplacer un morceau ou une partition vers la corbeille.",
      },
      desinstalou: {
        title: "Désinstallé ? Vos partitions restent",
        body: "Si un jour vous décidez d’arrêter, vos partitions restent exactement là où elles étaient, organisées, accessibles et sans aucune dépendance à Ottavada.",
      },
      escolha: {
        title: "Vous décidez ce qui va en mode Consulter",
        body: "Toutes les partitions n’ont pas besoin d’aller en mode Consulter. Vous choisissez : envoyer, ne pas envoyer ou ignorer. Les brouillons restent uniquement avec vous jusqu’à ce qu’ils soient prêts à partir vers vos autres ordinateurs.",
      },
      idiomas: {
        title: "En 6 langues, du Brésil à l’Allemagne",
        body: "Disponible en portugais, anglais, espagnol, français, italien et allemand. Pour les orchestres, bandas et musiciens du monde entier.",
      },
      gratuito: {
        title: "Vraiment gratuit. Sans piège.",
        body: "100 % gratuit, sans abonnement, sans limite de morceaux, sans publicité et sans serveur propriétaire à maintenir.",
      },
      evolucao: {
        title: "En évolution",
        body: "Ottavada en est à ses débuts, mais reçoit des améliorations fréquentes. Nouvelles fonctionnalités, corrections et langues sont ajoutées en fonction des demandes des utilisateurs.",
      },
      semLigar: {
        title: "Sans serveur, sans PC allumé 24h/24",
        body: "D’autres outils exigent un ordinateur allumé en permanence comme serveur. Ottavada non : chaque ordinateur parle directement au fournisseur de cloud (Koofr ou Google Drive). Aucun besoin de maintenir ou de louer un serveur pour utiliser Ottavada.",
      },
      copias: {
        title: "Fonctionne hors ligne en répétition",
        body: "Les partitions sont enregistrées sur votre ordinateur. Accédez à tout même sans internet pendant la répétition. Rapide, fiable et aucune dépendance au cloud au moment crucial.",
      },
      limPastas: {
        title: "Vous devez créer les dossiers vous-même",
        body: "Ottavada n’organise pas vos fichiers à votre place, il lit ce que vous avez déjà. Pour ajouter un nouveau morceau, le travail manuel est le vôtre : créer le dossier, lui donner un nom et mettre les partitions dedans. Ce n’est qu’ensuite qu’Ottavada entre en action. Simple, mais c’est une étape qui reste la vôtre.",
      },
      limMovida: {
        title: "Déplacé un dossier ? Il faut prévenir Ottavada",
        body: "Ottavada enregistre l’adresse de chaque dossier indexé. Si vous déplacez ou renommez le dossier d’un morceau, il perd le chemin et vous devez réindexer pour qu’il le retrouve. Pas compliqué, mais un pas de plus à retenir.",
      },
      limGerir: {
        title: "Deux ordinateurs en mode Gérer en même temps ? Évitez",
        body: "Le cloud est le pont entre vos ordinateurs. Si deux ordinateurs en mode Gérer synchronisent en même temps, ils peuvent se gêner, l’un écrasant ce que l’autre a envoyé. La recommandation est donc claire : utilisez un ordinateur en mode Gérer à la fois.",
      },
      limInternet: {
        title: "La synchronisation a besoin d’internet",
        body: "L’échange de morceaux entre ordinateurs dépend de la connexion. Sans internet, le mode Consulter continue de fonctionner avec tout ce qui a déjà été téléchargé, mais rien de nouveau n’arrive tant que la connexion ne revient pas.",
      },
      limAdaptacao: {
        title: "C’est un nouvel outil : il faut un peu de temps pour s’y habituer",
        body: "Comme tout ce qui est nouveau, Ottavada demande une période d’adaptation : comprendre les deux modes, ce que signifie « autoriser l’envoi », comment indexer. Rien d’extraordinaire, mais c’est bon à savoir avant de commencer.",
      },
    },
    footer: {
      email: "Email de contact : ottavada@hotmail.com",
      dev: "Développé par Rhafaell (faell4328)",
    },
    help: {
      kicker: "Besoin d’aide ?",
      heading: "Une question ? On vous aide.",
      subtitle:
        "Consultez les guides pas à pas ou posez votre question à notre assistant en bas à droite.",
      docs: {
        title: "Lire la documentation",
        body: "Comment installer, configurer et utiliser Ottavada de zéro, avec des guides pas à pas.",
      },
    },
  },
  it: {
    meta: {
      title: "Ottavada: basta lavoro manuale con le tue canzoni e spartiti",
      description:
        "Stanco del lavoro manuale con gli spartiti? Ottavada organizza, sincronizza e protegge il repertorio della tua orchestra tra computer. Gratuito, open source e senza abbonamento. Per Windows, Linux e Mac.",
      ogTitle: "Ottavada: Basta lavoro manuale con i tuoi spartiti",
      ogDescription:
        "Software gratuito e open source per organizzare, sincronizzare e condividere il repertorio della tua orchestra. Senza abbonamento, senza server proprietario.",
    },
    brand: { name: "Ottavada", tagline: "Il direttore digitale della tua orchestra" },
    nav: { download: "Scarica ora", docs: "Documentazione" },
    hero: {
      line1: "Ti occupi tu della musica. Ottavada si occupa dell’organizzazione, della condivisione tra i tuoi computer e del backup.",
      line2: "",
      cta: "Scarica gratuitamente",
      ctaOs: "Scarica per %s",
      ctaNote: "Per Windows, Linux e Mac — 100% gratuito",
      otherSystem: "Tutti i download",
    },
    sections: {
      descricao: {
        kicker: "Il problema di chi lavora con gli spartiti",
        text: "Canzoni e spartiti duplicati, un modello di organizzazione difficile da capire per gli altri, spostare file tra computer manualmente e altri computer con la versione sbagliata della musica. Ottavada risolve esattamente questo.",
      },
      comoFunciona: {
        kicker: "Come fa Ottavada?",
        text: "Indichi la cartella dove si trovano le tue canzoni e spartiti, e Ottavada fa il resto. Così Ottavada si adatta a come organizzi i tuoi spartiti, e non il contrario. I tuoi file non escono dal loro posto: nulla viene spostato, rinominato o cancellato senza il tuo ordine. E se un giorno vuoi smettere di usarlo? Basta disinstallare. Le tue cartelle e file restano esattamente dove sono sempre stati.",
      },
      paraQuem: {
        kicker: "Per chi è Ottavada?",
        text: "Per direttori, musicisti e orchestre che lavorano con gli spartiti ogni giorno.",
      },
      organizacao: {
        kicker: "Organizzazione",
        heading: "Trova qualsiasi spartito in secondi.",
      },
      sincronizacao: {
        kicker: "Sincronizzazione",
        heading: "Una sola app. Due modi: Gestire e Consulta.",
      },
      liberdade: {
        kicker: "Libertà",
        heading: "I tuoi file, le tue regole. Nessun vincolo.",
      },
      maisVantagens: {
        kicker: "Altri vantaggi",
        heading: "Piccoli dettagli che fanno tutta la differenza.",
      },
      limitacoes: {
        kicker: "Limitazioni",
        heading: "A grandi benefici, grandi limitazioni",
        intro:
          "Ottavada non è perfetto, e capirlo è il primo passo per sfruttarlo al massimo. La buona notizia: le limitazioni di oggi hanno già soluzioni in programmazione, quindi le versioni future dovrebbero ridurle o eliminarle del tutto.",
      },
    },
    benefits: {
      duplicacoesOcultas: {
        title: "Trova ed elimina i duplicati che non avevi notato",
        body: "Ottavada analizza il tuo repertorio e rivela brani o spartiti ripetuti che sono passati inosservati, evitando che il tuo repertorio abbia più brani duplicati.",
      },
      busca: {
        title: "Trova tutto con estrema facilità",
        body: "Cerca per nome e/o filtra per categoria, compositore e arrangiatore. Perfetto per repertori grandi.",
      },
      ordem: {
        title: "Ordine di partitura standard mondiale",
        body: "All’apertura di un brano, gli spartiti appaiono nell’ordine standard: legni, ottoni, percussioni, tastiere, arpa e archi. Lo stesso \"Standard Orchestral Score Order\" usato in tutto il mondo.",
      },
      favoritos: {
        title: "Preferiti",
        body: "Segna come preferiti i brani che usi di più e trovati facilmente nella sezione dei preferiti.",
      },
      ferramentas: {
        title: "Continua a usare i tuoi strumenti preferiti",
        body: "Funziona con Finale, MuseScore, Sibelius, Dorico e Encore, oltre a PDF, MusicXML, MIDI. Non cambi nulla nel tuo flusso di lavoro.",
      },
      maestro: {
        title: "Modo Gestire: controllo totale",
        body: "Aggiungi, modifica e rimuovi brani e spartiti. Usa uno spartito come base per crearne un altro. Decidi cosa va nel modo Consulta e cosa resta solo con te.",
      },
      ensaio: {
        title: "Modo Consulta: sola lettura, zero rischi",
        body: "Consultazione rapida per la sala prove. I file possono essere solo visualizzati, senza rischio che qualcuno elimini o modifichi uno spartito per sbaglio.",
      },
      nuvem: {
        title: "Sincronizza gratis con Google Drive o Koofr",
        body: "Nessun costo di abbonamento (a meno che tu non abbia bisogno di più spazio di quanto consentano i piani gratuiti). I file vengono compressi prima dell’invio: occupano meno spazio e si sincronizzano più velocemente.",
      },
      backup: {
        title: "PC formattato? Tutto torna in 1 clic",
        body: "Hai cambiato macchina o formattato il computer? Ottavada fa un backup automatico ogni ora, conservando i 10 più recenti. Le tue cartelle, i tuoi file e le informazioni in Ottavada sono al sicuro. Un clic e tutto torna al suo posto, nelle stesse cartelle di prima.",
      },
      arquivos: {
        title: "I tuoi file, le tue regole",
        body: "Ottavada non rinomina cartelle né file e non impone formati proprietari. L’unica eccezione è quando scegli di spostare un brano o uno spartito nel cestino.",
      },
      desinstalou: {
        title: "Disinstallato? I tuoi spartiti restano",
        body: "Se un giorno decidi di non usarlo più, i tuoi spartiti rimangono esattamente dove erano, organizzati, accessibili e senza alcuna dipendenza da Ottavada.",
      },
      escolha: {
        title: "Decidi tu cosa va nel modo Consulta",
        body: "Non tutti gli spartiti devono andare nel modo Consulta. Scegli tu: inviare, non inviare o ignorare. Le bozze restano solo con te finché non sono pronte per andare sugli altri computer.",
      },
      idiomas: {
        title: "In 6 lingue, dal Brasile alla Germania",
        body: "Disponibile in portoghese, inglese, spagnolo, francese, italiano e tedesco. Per orchestre, bande e musicisti di tutto il mondo.",
      },
      gratuito: {
        title: "Gratuito davvero. Senza trucchi.",
        body: "100% gratuito, nessun abbonamento, nessun limite di brani, nessuna pubblicità e nessun server proprietario da mantenere.",
      },
      evolucao: {
        title: "In evoluzione",
        body: "Ottavada è in fase iniziale, ma riceve miglioramenti frequenti. Nuove funzionalità, correzioni e lingue vengono aggiunte in base alle richieste degli utenti.",
      },
      semLigar: {
        title: "Nessun server, nessun PC acceso 24 ore",
        body: "Altri strumenti richiedono un computer acceso tutto il tempo come server. Ottavada no: ogni computer parla direttamente con il provider cloud (Koofr o Google Drive). Nessuna necessità di mantenere o noleggiare un server per usare Ottavada.",
      },
      copias: {
        title: "Funziona offline in prova",
        body: "Gli spartiti sono salvati sul tuo computer. Accedi a tutto anche senza internet durante le prove. Veloce, affidabile e senza dipendenza dal cloud nei momenti cruciali.",
      },
      limPastas: {
        title: "Devi creare tu stesso le cartelle",
        body: "Ottavada non organizza i tuoi file al posto tuo, legge quello che hai già. Per aggiungere un nuovo brano, il lavoro manuale è tuo: creare la cartella, darle un nome e mettere gli spartiti dentro. Solo dopo Ottavada entra in azione. Semplice, ma è un passo che resta tuo.",
      },
      limMovida: {
        title: "Spostata una cartella? Devi avvisare Ottavada",
        body: "Ottavada memorizza l’indirizzo di ogni cartella indicizzata. Se sposti o rinomini la cartella di un brano, perde il percorso e devi indicizzare di nuovo perché la ritrovi. Non è complicato, ma è un passaggio in più da ricordare.",
      },
      limGerir: {
        title: "Due computer in Modo Gestire nello stesso momento? Evita",
        body: "Il cloud è il ponte tra i tuoi computer. Se due computer in Modo Gestire si sincronizzano nello stesso momento, possono interferire tra loro, uno sovrascrive ciò che ha inviato l’altro. Per questo la raccomandazione è chiara: usa un computer in Modo Gestire alla volta.",
      },
      limInternet: {
        title: "La sincronizzazione ha bisogno di internet",
        body: "Lo scambio di brani tra computer dipende dalla connessione. Senza internet, il Modo Consulta continua a funzionare con tutto ciò che è già stato scaricato, ma nulla di nuovo arriva finché la connessione non torna.",
      },
      limAdaptacao: {
        title: "È uno strumento nuovo: serve un po' di tempo per abituarsi",
        body: "Come tutto ciò che è nuovo, Ottavada richiede un periodo di adattamento: capire i due modi, cosa significa \"consentire l'invio\", come indicizzare. Niente di impossibile, ma è meglio saperlo prima di iniziare.",
      },
    },
    footer: {
      email: "Email di contatto: ottavada@hotmail.com",
      dev: "Sviluppato da Rhafaell (faell4328)",
    },
    help: {
      kicker: "Hai bisogno di aiuto?",
      heading: "Hai dubbi? Ti aiutiamo.",
      subtitle:
        "Consulta le guide passo passo o chiedi al nostro assistente nell’angolo in basso a destra.",
      docs: {
        title: "Leggi la documentazione",
        body: "Come installare, configurare e usare Ottavada da zero, con guide passo passo.",
      },
    },
  },
  de: {
    meta: {
      title: "Ottavada: Schluss mit manueller Arbeit mit Ihren Liedern und Noten",
      description:
        "Müde von manueller Arbeit mit Noten? Ottavada organisiert, synchronisiert und schützt das Repertoire Ihres Orchesters zwischen Computern. Kostenlos, Open Source und ohne Abo. Für Windows 10 und 11.",
      ogTitle: "Ottavada: Schluss mit manueller Arbeit mit Ihren Noten",
      ogDescription:
        "Kostenlose und Open-Source-Software zum Organisieren, Synchronisieren und Teilen des Repertoires Ihres Orchesters. Ohne Abo, ohne eigenen Server.",
    },
    brand: { name: "Ottavada", tagline: "Der digitale Dirigent Ihres Orchesters" },
    nav: { download: "Jetzt herunterladen", docs: "Dokumentation" },
    hero: {
      line1: "Sie kümmern sich um die Musik. Ottavada kümmert sich um die Organisation, den Austausch zwischen Ihren Computern und die Sicherungskopien.",
      line2: "",
      cta: "Kostenlos herunterladen",
      ctaOs: "Herunterladen für %s",
      ctaNote: "Für Windows, Linux und Mac — 100 % kostenlos",
      otherSystem: "Alle Downloads",
    },
    sections: {
      descricao: {
        kicker: "Das Problem für jeden, der mit Noten arbeitet",
        text: "Doppelte Lieder und Noten, ein Organisationsmuster, das für andere schwer zu verstehen ist, manuelles Verschieben von Dateien zwischen Computern und andere Computer mit der falschen Version der Musik. Ottavada löst genau das.",
      },
      comoFunciona: {
        kicker: "Wie macht Ottavada das?",
        text: "Sie zeigen auf den Ordner mit Ihren Liedern und Noten, und Ottavada erledigt den Rest. So passt sich Ottavada an Ihre Art der Notenorganisation an – und nicht umgekehrt. Ihre Dateien bleiben an ihrem Platz: nichts wird ohne Ihre Anweisung verschoben, umbenannt oder gelöscht. Und wenn Sie es eines Tages nicht mehr nutzen wollen? Einfach deinstallieren. Ihre Ordner und Dateien bleiben genau dort, wo sie immer waren.",
      },
      paraQuem: {
        kicker: "Für wen ist Ottavada?",
        text: "Für Dirigenten, Musiker und Orchester, die täglich mit Noten arbeiten.",
      },
      organizacao: {
        kicker: "Organisation",
        heading: "Finden Sie jede Note in Sekunden.",
      },
      sincronizacao: {
        kicker: "Synchronisation",
        heading: "Eine App. Zwei Modi: Verwalten und Konsultieren.",
      },
      liberdade: {
        kicker: "Freiheit",
        heading: "Ihre Dateien, Ihre Regeln. Keine Bindung.",
      },
      maisVantagens: {
        kicker: "Weitere Vorteile",
        heading: "Kleine Details, die den Unterschied machen.",
      },
      limitacoes: {
        kicker: "Einschränkungen",
        heading: "Mit großen Vorteilen kommen große Einschränkungen",
        intro:
          "Ottavada ist nicht perfekt, und das zu verstehen ist der erste Schritt, um das Beste daraus zu machen. Die gute Nachricht: Die heutigen Einschränkungen haben bereits geplante Lösungen, daher sollten zukünftige Versionen sie reduzieren oder ganz beseitigen.",
      },
    },
    benefits: {
      duplicacoesOcultas: {
        title: "Finden und entfernen Sie Duplikate, die Sie nie bemerkt haben",
        body: "Ottavada durchsucht Ihr Repertoire und deckt wiederholte Lieder oder Noten auf, die unbemerkt blieben – damit Ihr Repertoire keine mehrfach duplizierten Stücke hat.",
      },
      busca: {
        title: "Alles mit größter Leichtigkeit finden",
        body: "Suchen Sie nach Namen und/oder filtern Sie nach Kategorie, Komponist und Arrangeur. Perfekt für große Repertoires.",
      },
      ordem: {
        title: "Weltweiter Standard-Notenlayout",
        body: "Beim Öffnen eines Stücks erscheinen die Noten in der Standardreihenfolge: Holzbläser, Blechbläser, Schlagzeug, Tasteninstrumente, Harfe und Streicher. Derselbe „Standard Orchestral Score Order“, der weltweit verwendet wird.",
      },
      favoritos: {
        title: "Favoriten",
        body: "Markieren Sie die Stücke, die Sie am häufigsten verwenden, als Favoriten und finden Sie sie leicht im Favoritenbereich.",
      },
      ferramentas: {
        title: "Behalten Sie Ihre Lieblingswerkzeuge",
        body: "Funktioniert mit Finale, MuseScore, Sibelius, Dorico und Encore sowie PDF, MusicXML, MIDI. Sie ändern nichts in Ihrem Workflow.",
      },
      maestro: {
        title: "Verwalten-Modus: volle Kontrolle",
        body: "Fügen Sie Stücke und Noten hinzu, bearbeiten und entfernen Sie sie. Verwenden Sie eine Note als Basis für eine andere. Legen Sie fest, was in den Konsultieren-Modus geht und was nur bei Ihnen bleibt.",
      },
      ensaio: {
        title: "Konsultieren-Modus: schreibgeschützt, null Risiko",
        body: "Schnelle Referenz für den Probenraum. Dateien können nur angezeigt werden, ohne dass jemand versehentlich eine Note löscht oder ändert.",
      },
      nuvem: {
        title: "Kostenlos synchronisieren via Google Drive oder Koofr",
        body: "Keine Abo-Gebühren (außer Sie benötigen mehr Speicherplatz, als die kostenlosen Pläne erlauben). Dateien werden vor dem Hochladen komprimiert: weniger Speicherplatz und schnellere Synchronisation.",
      },
      backup: {
        title: "PC formatiert? Alles in 1 Klick zurück",
        body: "Computer gewechselt oder formatiert? Ottavada erstellt jede Stunde automatisch ein Backup und behält die 10 neuesten. Ihre Ordner, Dateien und Informationen in Ottavada sind gesichert. Ein Klick und alles ist wieder da, in denselben Ordnern wie zuvor.",
      },
      arquivos: {
        title: "Ihre Dateien, Ihre Regeln",
        body: "Ottavada benennt weder Ordner noch Dateien um und erzwingt keine proprietären Formate. Die einzige Ausnahme ist, wenn Sie ein Stück oder eine Note in den Papierkorb verschieben.",
      },
      desinstalou: {
        title: "Deinstalliert? Ihre Noten bleiben",
        body: "Wenn Sie sich eines Tages entscheiden, es nicht mehr zu verwenden, bleiben Ihre Noten genau dort, wo sie waren, organisiert, zugänglich und ohne Abhängigkeit von Ottavada.",
      },
      escolha: {
        title: "Sie entscheiden, was in den Konsultieren-Modus geht",
        body: "Nicht jede Note muss in den Konsultieren-Modus. Sie wählen: senden, nicht senden oder ignorieren. Entwürfe bleiben nur bei Ihnen, bis sie bereit sind, zu Ihren anderen Computern zu gehen.",
      },
      idiomas: {
        title: "In 6 Sprachen, von Brasilien bis Deutschland",
        body: "Verfügbar in Portugiesisch, Englisch, Spanisch, Französisch, Italienisch und Deutsch. Für Orchester, Bands und Musiker weltweit.",
      },
      gratuito: {
        title: "Wirklich kostenlos. Ohne Tricks.",
        body: "100 % kostenlos, kein Abo, keine Stückbegrenzung, keine Werbung und kein eigener Server zu warten.",
      },
      evolucao: {
        title: "Ständig in Entwicklung",
        body: "Ottavada befindet sich in einer frühen Phase, erhält jedoch häufig Verbesserungen. Neue Funktionen, Korrekturen und Sprachen werden basierend auf Nutzeranfragen hinzugefügt.",
      },
      semLigar: {
        title: "Kein Server, kein PC, der 24/7 läuft",
        body: "Andere Tools erfordern einen Computer, der die ganze Zeit als Server läuft. Ottavada nicht: Jeder Computer spricht direkt mit dem Cloud-Anbieter (Koofr oder Google Drive). Es ist nicht nötig, einen Server zu warten oder zu mieten, um Ottavada zu nutzen.",
      },
      copias: {
        title: "Funktioniert offline in der Probe",
        body: "Die Noten werden auf Ihrem Computer gespeichert. Greifen Sie auch ohne Internet während der Probe auf alles zu. Schnell, zuverlässig und in entscheidenden Momenten unabhängig von der Cloud.",
      },
      limPastas: {
        title: "Sie müssen die Ordner selbst erstellen",
        body: "Ottavada organisiert Ihre Dateien nicht für Sie, es liest, was Sie bereits haben. Um ein neues Stück hinzuzufügen, ist die manuelle Arbeit Ihre: Ordner erstellen, benennen und die Noten hineinlegen. Erst danach übernimmt Ottavada. Einfach, aber es bleibt Ihr Schritt.",
      },
      limMovida: {
        title: "Ordner verschoben? Sie müssen Ottavada Bescheid geben",
        body: "Ottavada speichert die Adresse jedes indizierten Ordners. Wenn Sie den Ordner eines Stücks verschieben oder umbenennen, verliert es den Pfad und Sie müssen erneut indizieren, damit es ihn wiederfindet. Nicht kompliziert, aber ein zusätzlicher Schritt, an den man denken muss.",
      },
      limGerir: {
        title: "Zwei Computer im Verwalten-Modus gleichzeitig? Vermeiden",
        body: "Die Cloud ist die Brücke zwischen Ihren Computern. Wenn zwei Computer im Verwalten-Modus gleichzeitig synchronisieren, können sie sich gegenseitig stören – einer überschreibt, was der andere gesendet hat. Daher die klare Empfehlung: Nutzen Sie jeweils einen Computer im Verwalten-Modus.",
      },
      limInternet: {
        title: "Synchronisation braucht Internet",
        body: "Der Austausch von Stücken zwischen Computern hängt von der Verbindung ab. Ohne Internet funktioniert der Konsultieren-Modus mit allem, was bereits heruntergeladen wurde, weiter, aber nichts Neues kommt an, bis die Verbindung zurück ist.",
      },
      limAdaptacao: {
        title: "Es ist ein neues Tool: Man braucht eine Weile, um sich daran zu gewöhnen",
        body: "Wie alles Neue erfordert Ottavada eine Eingewöhnungszeit: die beiden Modi verstehen, was \"Senden erlauben\" bedeutet, wie man indiziert. Nichts Weltbewegendes, aber gut zu wissen, bevor man beginnt.",
      },
    },
    footer: {
      email: "Kontakt-E-Mail: ottavada@hotmail.com",
      dev: "Entwickelt von Rhafaell (faell4328)",
    },
    help: {
      kicker: "Brauchen Sie Hilfe?",
      heading: "Haben Sie Fragen? Wir helfen Ihnen.",
      subtitle:
        "Sehen Sie sich die Schritt-für-Schritt-Anleitungen an oder fragen Sie unseren Assistenten unten rechts.",
      docs: {
        title: "Dokumentation lesen",
        body: "Wie Sie Ottavada von Grund auf installieren, einrichten und nutzen, mit Schritt-für-Schritt-Anleitungen.",
      },
    },
  },
};
