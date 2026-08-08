import type { Locale } from "./config";

export type BenefitMessages = {
  indexacao: { title: string; body: string };
  duplicatas: { title: string; body: string };
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
  openSource: { title: string; body: string };
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
    subtitle: string;
    cta: string;
    ctaOs: string;
    ctaNote: string;
    otherSystem: string;
  };
  sections: {
    descricao: { kicker: string; text: string };
    paraQuem: { kicker: string; text: string };
    organizacao: { kicker: string; heading: string };
    sincronizacao: { kicker: string; heading: string };
    liberdade: { kicker: string; heading: string };
    maisVantagens: { kicker: string; heading: string };
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
      line1: "Chega de trabalho manual com suas músicas e partituras: organize, sincronize e proteja tudo automaticamente com Ottavada.",
      line2: "",
      subtitle:
        "Seu repertório sempre organizado e sincronizado entre maestro e ensaio. Sem mudar nada no seu jeito de trabalhar.",
      cta: "Baixar gratuitamente",
      ctaOs: "Baixar para %s",
      ctaNote: "Para Windows, Linux e Mac — 100% gratuito",
      otherSystem: "Todos os downloads",
    },
    sections: {
      descricao: {
        kicker: "O problema de quem mexe com partituras",
        text: "O gerenciamento de partituras ainda é feito manualmente: troca de mensagens, pastas duplicadas e o risco constante de tocar a versão errada no ensaio. O Ottavada resolve isso de uma vez.",
      },
      paraQuem: {
        kicker: "Para quem é o Ottavada?",
        text: "Para regentes, músicos e orquestras que lidam com partituras no dia a dia. Se você organiza músicas manualmente, perde tempo procurando arquivos ou sofre com versões diferentes entre os computadores, o Ottavada resolve isso de uma vez.",
      },
      organizacao: {
        kicker: "Organização",
        heading: "Ache qualquer partitura em segundos. Sem caça ao tesouro.",
      },
      sincronizacao: {
        kicker: "Sincronização",
        heading: "Um só aplicativo. Dois modos: maestro e ensaio.",
      },
      liberdade: {
        kicker: "Liberdade",
        heading: "Seus arquivos, suas regras. Sem prender ninguém.",
      },
      maisVantagens: {
        kicker: "Mais vantagens",
        heading: "Pequenos detalhes que fazem toda a diferença.",
      },
    },
    benefits: {
      indexacao: {
        title: "Cadastre partituras rapidamente",
        body: "Selecione uma pasta com partituras e pronto: o Ottavada lê o nome da música pela pasta e sugere os instrumentos a partir dos arquivos. Sem digitar um por um.",
      },
      duplicatas: {
        title: "Sem dúvida: saiba sempre a partitura certa",
        body: 'O sistema não permite dois nomes iguais de música ou partitura. Se tem dois violinos, serão "Violino I" e "Violino II", nunca "Violino" repetido no ensaio.',
      },
      duplicacoesOcultas: {
        title: "Encontre duplicações que nem você percebeu",
        body: "O Ottavada analisa seu repertório e revela músicas ou partituras repetidas que passaram despercebidas, mesmo em pastas diferentes.",
      },
      busca: {
        title: "Encontre com extrema facilidade",
        body: "Pesquise por nome ou filtre por categoria, compositor e arranjador. Perfeito para orquestras com centenas de partituras.",
      },
      ordem: {
        title: "Ordem padrão de grade mundial",
        body: 'Ao abrir uma música, as partituras aparecem na ordem padrão: madeiras, metais, percussão, teclados e cordas. O mesmo "Standard Orchestral Score Order" usado no mundo todo.',
      },
      favoritos: {
        title: "Favoritos e atalhos a um clique",
        body: 'Marque músicas como favoritas e acesse rapidamente seções como "Não permitidas" ou "Sem partituras". Tudo na ponta dos dedos.',
      },
      ferramentas: {
        title: "Continue usando suas ferramentas favoritas",
        body: "Funciona com Finale, MuseScore, Sibelius, Dorico e qualquer arquivo em PDF, MusicXML ou MIDI. Você não muda nada no seu fluxo de trabalho.",
      },
      maestro: {
        title: "Computador do maestro: controle total",
        body: "Adicione, edite e remova músicas e partituras. Defina o que vai para o ensaio e o que fica só com você. Você manda, sempre.",
      },
      ensaio: {
        title: "Computador de ensaio: só leitura, zero risco",
        body: "Consulta rápida para a sala de ensaio. Os arquivos só podem ser visualizados, sem risco de alguém apagar ou alterar a partitura sem querer.",
      },
      nuvem: {
        title: "Sincronize de graça pelo Google Drive ou Koofr",
        body: "Sem custo de assinatura. Os arquivos são compactados antes do envio, ocupando menos espaço e sincronizando mais rápido.",
      },
      backup: {
        title: "PC formatou? Tudo de volta em 1 clique",
        body: "Trocou de máquina ou formatou o computador? Suas partituras, categorias, compositores e arranjadores estão salvos. Um clique e tudo volta ao lugar, nas mesmas pastas de antes.",
      },
      arquivos: {
        title: "Seus arquivos, suas regras",
        body: "O Ottavada não renomeia pastas nem arquivos, não move nada e não impõe formatos proprietários. Sua organização manual é respeitada e incentivada.",
      },
      desinstalou: {
        title: "Desinstalou? Suas partituras continuam lá",
        body: "Se um dia decidir parar de usar, suas partituras continuam exatamente onde estavam, organizadas, acessíveis e sem nenhuma dependência do Ottavada.",
      },
      escolha: {
        title: "Você decide o que vai para o ensaio",
        body: "Nem toda partitura precisa ir para o computador de ensaio. Você escolhe: enviar, bloquear ou ignorar. Partituras em rascunho ficam só com você.",
      },
      idiomas: {
        title: "Em 6 idiomas, do Brasil à Alemanha",
        body: "Disponível em português, inglês, espanhol, francês, italiano e alemão. Para orquestras, bandas e músicos do mundo todo.",
      },
      gratuito: {
        title: "Gratuito de verdade. Sem pegadinhas.",
        body: "100% gratuito para uso pessoal, orquestras, bandas e instituições. Sem assinatura, sem limite de músicas, sem anúncio e sem servidor próprio para manter.",
      },
      evolucao: {
        title: "Em evolução",
        body: "O Ottavada está em fase inicial, mas recebe melhorias frequentes. Novas funcionalidades, correções e idiomas são adicionados com base no que os usuários pedem.",
      },
      semLigar: {
        title: "Sem deixar o PC ligado 24h",
        body: "Cada computador acessa a nuvem por conta própria. Você não precisa manter o computador do maestro ligado para usar o de ensaio a sincronização acontece direto pela nuvem.",
      },
      openSource: {
        title: "Open source no GitHub, sem letras miúdas",
        body: "O código é aberto: você pode ver, sugerir mudanças e contribuir.",
      },
      copias: {
        title: "Funciona offline no ensaio",
        body: "As partituras ficam salvas no seu computador. Acesse tudo mesmo sem internet durante o ensaio. Rápido, confiável e sem depender da nuvem na hora H.",
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
      line1: "No more manual work with your songs and sheet music: organize, sync and protect everything automatically with Ottavada.",
      line2: "",
      subtitle:
        "Your repertoire always organized and synced between conductor and rehearsal. No changing the way you work.",
      cta: "Download for free",
      ctaOs: "Download for %s",
      ctaNote: "For Windows, Linux and Mac — 100% free",
      otherSystem: "All downloads",
    },
    sections: {
      descricao: {
        kicker: "The problem for anyone who works with sheet music",
        text: "Sheet music management is still done manually: message exchanges, duplicate folders, and the constant risk of playing the wrong version at rehearsal. Ottavada fixes that for good.",
      },
      paraQuem: {
        kicker: "Who is Ottavada for?",
        text: "For conductors, musicians and orchestras who work with sheet music every day. If you organize music manually, waste time searching for files or struggle with different versions between computers. Ottavada fixes this once and for all.",
      },
      organizacao: {
        kicker: "Organization",
        heading: "Find any sheet music in seconds. No more treasure hunts.",
      },
      sincronizacao: {
        kicker: "Sync",
        heading: "One app. Two modes: conductor and rehearsal.",
      },
      liberdade: {
        kicker: "Freedom",
        heading: "Your files, your rules. No lock-in.",
      },
      maisVantagens: {
        kicker: "More perks",
        heading: "Small details that make all the difference.",
      },
    },
    benefits: {
      indexacao: {
        title: "Add sheet music quickly",
        body: "Just select a folder with sheet music and you're done: Ottavada reads the song name from the folder and suggests the instruments from the files. No typing one by one.",
      },
      duplicatas: {
        title: "No confusion: always know the right sheet",
        body: 'The system does not allow two identical names for a piece or sheet. If there are two violins, they will be "Violin I" and "Violin II", never a duplicate "Violin" at rehearsal.',
      },
      duplicacoesOcultas: {
        title: "Find duplicates you never noticed",
        body: "Ottavada scans your repertoire and reveals repeated songs or sheet music that went unnoticed, even in different folders.",
      },
      busca: {
        title: "Find anything with incredible ease",
        body: "Search by name or filter by category, composer and arranger. Perfect for orchestras with hundreds of scores.",
      },
      ordem: {
        title: "World-standard score order",
        body: 'When you open a piece, sheet music appears in standard order: woodwinds, brass, percussion, keyboards and strings. The same "Standard Orchestral Score Order" used worldwide.',
      },
      favoritos: {
        title: "Favorites and shortcuts in one click",
        body: 'Mark pieces as favorites and quickly access sections like "Not allowed" or "No sheet music". Everything at your fingertips.',
      },
      ferramentas: {
        title: "Keep using your favorite tools",
        body: "Works with Finale, MuseScore, Sibelius, Dorico and any file in PDF, MusicXML or MIDI. You don't change a thing in your workflow.",
      },
      maestro: {
        title: "Conductor computer: full control",
        body: "Add, edit and remove pieces and sheet music. Decide what goes to rehearsal and what stays with you. You call the shots, always.",
      },
      ensaio: {
        title: "Rehearsal computer: read-only, zero risk",
        body: "Quick reference for the rehearsal room. Files can only be viewed, with no risk of someone accidentally deleting or changing a score.",
      },
      nuvem: {
        title: "Sync free via Google Drive or Koofr",
        body: "No subscription fees. Files are compressed before upload, taking up less space and syncing faster.",
      },
      backup: {
        title: "PC formatted? Back in 1 click",
        body: "Switched machines or formatted the computer? Your sheet music, categories, composers and arrangers are saved. One click and everything is back in place, in the same folders as before.",
      },
      arquivos: {
        title: "Your files, your rules",
        body: "Ottavada does not rename folders or files, does not move anything, and does not impose proprietary formats. Your manual organization is respected and encouraged.",
      },
      desinstalou: {
        title: "Uninstalled? Your sheet music stays",
        body: "If one day you decide to stop using it, your sheet music stays exactly where it was, organized, accessible, and with no dependency on Ottavada.",
      },
      escolha: {
        title: "You decide what goes to rehearsal",
        body: "Not every score needs to go to the rehearsal computer. You choose: send, block or ignore. Drafts stay only with you.",
      },
      idiomas: {
        title: "In 6 languages, from Brazil to Germany",
        body: "Available in Portuguese, English, Spanish, French, Italian and German. For orchestras, bands and musicians worldwide.",
      },
      gratuito: {
        title: "Truly free. No catch.",
        body: "100% free for personal use, orchestras, bands and institutions. No subscription, no limit on pieces, no ads and no proprietary server to maintain.",
      },
      evolucao: {
        title: "Always evolving",
        body: "Ottavada is in early stages, but receives frequent improvements. New features, fixes and languages are added based on user requests.",
      },
      semLigar: {
        title: "No need to keep a PC on 24/7",
        body: "Each computer accesses the cloud on its own. You don't need to keep the conductor computer on for the rehearsal computer to work — sync happens directly through the cloud.",
      },
      openSource: {
        title: "Open source on GitHub, no fine print",
        body: "The code is open: you can view it, suggest changes and contribute.",
      },
      copias: {
        title: "Works offline at rehearsal",
        body: "Sheet music is saved on your computer. Access everything even without internet during rehearsal. Fast, reliable, and no cloud dependency when it matters most.",
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
      line1: "Basta de trabajo manual con tus canciones y partituras: organiza, sincroniza y protege todo automáticamente con Ottavada.",
      line2: "",
      subtitle:
        "Tu repertorio siempre organizado y sincronizado entre director y ensayo. Sin cambiar tu forma de trabajar.",
      cta: "Descargar gratis",
      ctaOs: "Descargar para %s",
      ctaNote: "Para Windows, Linux y Mac — 100% gratuito",
      otherSystem: "Todos los downloads",
    },
    sections: {
      descricao: {
        kicker: "El problema de quien trabaja con partituras",
        text: "La gestión de partituras todavía se hace manualmente: intercambio de mensajes, carpetas duplicadas y el riesgo constante de tocar la versión equivocada en el ensayo. Ottavada lo resuelve de una vez.",
      },
      paraQuem: {
        kicker: "¿Para quién es Ottavada?",
        text: "Para directores, músicos y orquestas que trabajan con partituras a diario. Si organizas música manualmente, pierdes tiempo buscando archivos o sufres con versiones diferentes entre los ordenadores. Ottavada lo resuelve de una vez.",
      },
      organizacao: {
        kicker: "Organización",
        heading: "Encuentra cualquier partitura en segundos. Sin búsqueda del tesoro.",
      },
      sincronizacao: {
        kicker: "Sincronización",
        heading: "Una sola app. Dos modos: director y ensayo.",
      },
      liberdade: {
        kicker: "Libertad",
        heading: "Tus archivos, tus reglas. Sin ataduras.",
      },
      maisVantagens: {
        kicker: "Más ventajas",
        heading: "Pequeños detalles que marcan toda la diferencia.",
      },
    },
    benefits: {
      indexacao: {
        title: "Registra partituras rápidamente",
        body: "Solo selecciona una carpeta con partituras y listo: Ottavada lee el nombre de la canción por la carpeta y sugiere los instrumentos a partir de los archivos. Sin teclear uno por uno.",
      },
      duplicatas: {
        title: "Sin confusión: siempre la partitura correcta",
        body: 'El sistema no permite dos nombres iguales de canción o partitura. Si hay dos violines, serán "Violín I" y "Violín II", nunca un "Violín" repetido en el ensayo.',
      },
      duplicacoesOcultas: {
        title: "Encuentra duplicados que ni notaste",
        body: "Ottavada analiza tu repertorio y revela canciones o partituras repetidas que pasaron desapercibidas, incluso en carpetas diferentes.",
      },
      busca: {
        title: "Encuentra con extrema facilidad",
        body: "Busca por nombre o filtra por categoría, compositor y arreglista. Perfecto para orquestas con cientos de partituras.",
      },
      ordem: {
        title: "Orden estándar de partitura mundial",
        body: 'Al abrir una canción, las partituras aparecen en el orden estándar: maderas, metales, percusión, teclados y cuerdas. El mismo "Standard Orchestral Score Order" usado en todo el mundo.',
      },
      favoritos: {
        title: "Favoritos y atajos a un clic",
        body: 'Marca canciones como favoritas y accede rápidamente a secciones como "No permitidas" o "Sin partituras". Todo al alcance de la mano.',
      },
      ferramentas: {
        title: "Sigue usando tus herramientas favoritas",
        body: "Funciona con Finale, MuseScore, Sibelius, Dorico y cualquier archivo en PDF, MusicXML o MIDI. No cambias nada en tu flujo de trabajo.",
      },
      maestro: {
        title: "Ordenador del director: control total",
        body: "Añade, edita y elimina canciones y partituras. Define qué va al ensayo y qué se queda solo contigo. Tú mandas, siempre.",
      },
      ensaio: {
        title: "Ordenador de ensayo: solo lectura, cero riesgo",
        body: "Consulta rápida para la sala de ensayo. Los archivos solo se pueden visualizar, sin riesgo de que alguien borre o cambie una partitura por accidente.",
      },
      nuvem: {
        title: "Sincroniza gratis con Google Drive o Koofr",
        body: "Sin coste de suscripción. Los archivos se comprimen antes del envío, ocupando menos espacio y sincronizando más rápido.",
      },
      backup: {
        title: "¿PC formateado? Todo vuelve en 1 clic",
        body: "¿Cambiaste de máquina o formateaste el ordenador? Tus partituras, categorías, compositores y arreglistas están a salvo. Un clic y todo vuelve a su lugar, en las mismas carpetas de antes.",
      },
      arquivos: {
        title: "Tus archivos, tus reglas",
        body: "Ottavada no renombra carpetas ni archivos, no mueve nada y no impone formatos propietarios. Tu organización manual es respetada e incentivada.",
      },
      desinstalou: {
        title: "¿Desinstalado? Tus partituras siguen allí",
        body: "Si un día decides dejar de usarlo, tus partituras siguen exactamente donde estaban, organizadas, accesibles y sin ninguna dependencia de Ottavada.",
      },
      escolha: {
        title: "Tú decides qué va al ensayo",
        body: "No toda partitura necesita ir al ordenador de ensayo. Tú eliges: enviar, bloquear o ignorar. Los borradores se quedan solo contigo.",
      },
      idiomas: {
        title: "En 6 idiomas, de Brasil a Alemania",
        body: "Disponible en portugués, inglés, español, francés, italiano y alemán. Para orquestas, bandas y músicos de todo el mundo.",
      },
      gratuito: {
        title: "Gratis de verdad. Sin trampas.",
        body: "100% gratuito para uso personal, orquestas, bandas e instituciones. Sin suscripción, sin límite de canciones, sin anuncios y sin servidor propio que mantener.",
      },
      evolucao: {
        title: "En evolución",
        body: "Ottavada está en fase inicial, pero recibe mejoras frecuentes. Se añaden nuevas funcionalidades, correcciones e idiomas según lo que piden los usuarios.",
      },
      semLigar: {
        title: "Sin dejar el PC encendido 24h",
        body: "Cada ordenador accede a la nube por su cuenta. No necesitas mantener el ordenador del director encendido para usar el de ensayo: la sincronización ocurre directamente en la nube.",
      },
      openSource: {
        title: "Open source en GitHub, sin letra pequeña",
        body: "El código es abierto: puedes verlo, sugerir cambios y contribuir.",
      },
      copias: {
        title: "Funciona offline en el ensayo",
        body: "Las partituras se guardan en tu ordenador. Accede a todo incluso sin internet durante el ensayo. Rápido, fiable y sin depender de la nube en el momento clave.",
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
      line1: "Assez de travail manuel avec vos morceaux et partitions : organisez, synchronisez et protégez tout automatiquement avec Ottavada.",
      line2: "",
      subtitle:
        "Votre répertoire toujours organisé et synchronisé entre chef et répétition. Sans changer votre façon de travailler.",
      cta: "Télécharger gratuitement",
      ctaOs: "Télécharger pour %s",
      ctaNote: "Pour Windows, Linux et Mac — 100 % gratuit",
      otherSystem: "Tous les téléchargements",
    },
    sections: {
      descricao: {
        kicker: "Le problème de quiconque travaille avec des partitions",
        text: "La gestion des partitions se fait encore manuellement : échanges de messages, dossiers en double et le risque constant de jouer la mauvaise version en répétition. Ottavada règle ça pour de bon.",
      },
      paraQuem: {
        kicker: "Pour qui est Ottavada ?",
        text: "Pour les chefs, musiciens et orchestres qui travaillent avec des partitions au quotidien. Si vous organisez votre musique manuellement, perdez du temps à chercher des fichiers ou souffrez de versions différentes entre les ordinateurs. Ottavada règle ça pour de bon.",
      },
      organizacao: {
        kicker: "Organisation",
        heading: "Trouvez n’importe quelle partition en secondes. Finie la chasse au trésor.",
      },
      sincronizacao: {
        kicker: "Synchronisation",
        heading: "Une seule app. Deux modes : chef et répétition.",
      },
      liberdade: {
        kicker: "Liberté",
        heading: "Vos fichiers, vos règles. Aucun verrouillage.",
      },
      maisVantagens: {
        kicker: "Plus d'avantages",
        heading: "De petits détails qui changent tout.",
      },
    },
    benefits: {
      indexacao: {
        title: "Ajoutez des partitions rapidement",
        body: "Sélectionnez un dossier de partitions et c’est tout : Ottavada lit le nom du morceau via le dossier et suggère les instruments à partir des fichiers. Plus de saisie une par une.",
      },
      duplicatas: {
        title: "Aucune confusion : toujours la bonne partition",
        body: "Le système n’autorise pas deux noms identiques de morceau ou de partition. S’il y a deux violons, ce seront « Violon I » et « Violon II », jamais un « Violon » répété en répétition.",
      },
      duplicacoesOcultas: {
        title: "Trouvez les doublons que vous n’aviez pas remarqués",
        body: "Ottavada analyse votre répertoire et révèle les morceaux ou partitions en double passés inaperçus, même dans des dossiers différents.",
      },
        title: "Trouvez tout avec une grande facilité",
      busca: {
        title: "Trouvez tout avec une grande facilité",
        body: "Recherchez par nom ou filtrez par catégorie, compositeur et arrangeur. Parfait pour les orchestres avec des centaines de partitions.",
      },
      ordem: {
        title: "Ordre de partition standard mondial",
        body: "À l’ouverture d’un morceau, les partitions apparaissent dans l’ordre standard : bois, cuivres, percussions, claviers et cordes. Le même « Standard Orchestral Score Order » utilisé dans le monde entier.",
      },
      favoritos: {
        title: "Favoris et raccourcis en un clic",
        body: "Marquez des morceaux comme favoris et accédez rapidement aux sections comme « Non autorisées » ou « Sans partitions ». Tout à portée de main.",
      },
      ferramentas: {
        title: "Gardez vos outils préférés",
        body: "Compatible avec Finale, MuseScore, Sibelius, Dorico et tout fichier en PDF, MusicXML ou MIDI. Vous ne changez rien à votre flux de travail.",
      },
      maestro: {
        title: "Ordinateur du chef : contrôle total",
        body: "Ajoutez, modifiez et supprimez des morceaux et partitions. Définissez ce qui va en répétition et ce qui reste avec vous. C’est vous qui décidez, toujours.",
      },
      ensaio: {
        title: "Ordinateur de répétition : lecture seule, zéro risque",
        body: "Consultation rapide pour la salle de répétition. Les fichiers sont en lecture seule, sans risque qu’une partition soit supprimée ou modifiée par accident.",
      },
      nuvem: {
        title: "Synchronisation gratuite via Google Drive ou Koofr",
        body: "Sans frais d’abonnement. Les fichiers sont compressés avant l’envoi : moins d’espace utilisé et synchronisation plus rapide.",
      },
      backup: {
        title: "PC formaté ? Tout revient en 1 clic",
        body: "Vous avez changé de machine ou formaté votre ordinateur ? Vos partitions, catégories, compositeurs et arrangeurs sont sauvegardés. Un clic et tout revient à sa place, dans les mêmes dossiers qu’avant.",
      },
      arquivos: {
        title: "Vos fichiers, vos règles",
        body: "Ottavada ne renomme ni les dossiers ni les fichiers, ne déplace rien et n’impose pas de formats propriétaires. Votre organisation manuelle est respectée et encouragée.",
      },
      desinstalou: {
        title: "Désinstallé ? Vos partitions restent",
        body: "Si un jour vous décidez d’arrêter, vos partitions restent exactement là où elles étaient, organisées, accessibles et sans aucune dépendance à Ottavada.",
      },
      escolha: {
        title: "Vous décidez ce qui va en répétition",
        body: "Toutes les partitions n’ont pas besoin d’aller sur l’ordinateur de répétition. Vous choisissez : envoyer, bloquer ou ignorer. Les brouillons restent uniquement avec vous.",
      },
      idiomas: {
        title: "En 6 langues, du Brésil à l’Allemagne",
        body: "Disponible en portugais, anglais, espagnol, français, italien et allemand. Pour les orchestres, bandas et musiciens du monde entier.",
      },
      gratuito: {
        title: "Vraiment gratuit. Sans piège.",
        body: "100 % gratuit pour usage personnel, orchestres, bandas et institutions. Sans abonnement, sans limite de morceaux, sans publicité et sans serveur propriétaire à maintenir.",
      },
      evolucao: {
        title: "En évolution",
        body: "Ottavada en est à ses débuts, mais reçoit des améliorations fréquentes. Nouvelles fonctionnalités, corrections et langues sont ajoutées en fonction des demandes des utilisateurs.",
      },
      semLigar: {
        title: "Pas besoin de laisser le PC allumé 24h/24",
        body: "Chaque ordinateur accède au cloud de son côté. Vous n’avez pas besoin de garder l’ordinateur du chef allumé pour utiliser celui de répétition — la synchronisation se fait directement via le cloud.",
      },
      openSource: {
        title: "Open source sur GitHub, sans petites lignes",
        body: "Le code est ouvert : vous pouvez le consulter, suggérer des changements et contribuer.",
      },
      copias: {
        title: "Fonctionne hors ligne en répétition",
        body: "Les partitions sont enregistrées sur votre ordinateur. Accédez à tout même sans internet pendant la répétition. Rapide, fiable et aucune dépendance au cloud au moment crucial.",
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
      line1: "Basta lavoro manuale con le tue canzoni e spartiti: organizza, sincronizza e proteggi tutto automaticamente con Ottavada.",
      line2: "",
      subtitle:
        "Il tuo repertorio sempre organizzato e sincronizzato tra direttore e prove. Senza cambiare il tuo modo di lavorare.",
      cta: "Scarica gratuitamente",
      ctaOs: "Scarica per %s",
      ctaNote: "Per Windows, Linux e Mac — 100% gratuito",
      otherSystem: "Tutti i download",
    },
    sections: {
      descricao: {
        kicker: "Il problema di chi lavora con gli spartiti",
        text: "La gestione degli spartiti è ancora fatta manualmente: scambi di messaggi, cartelle duplicate e il rischio costante di suonare la versione sbagliata in prova. Ottavada risolve il problema una volta per tutte.",
      },
      paraQuem: {
        kicker: "Per chi è Ottavada?",
        text: "Per direttori, musicisti e orchestre che lavorano con gli spartiti ogni giorno. Se organizzi la musica manualmente, perdi tempo a cercare file o soffri di versioni diverse tra i computer. Ottavada risolve il problema una volta per tutte.",
      },
      organizacao: {
        kicker: "Organizzazione",
        heading: "Trova qualsiasi spartito in secondi. Basta cacce al tesoro.",
      },
      sincronizacao: {
        kicker: "Sincronizzazione",
        heading: "Una sola app. Due modalità: direttore e prove.",
      },
      liberdade: {
        kicker: "Libertà",
        heading: "I tuoi file, le tue regole. Nessun vincolo.",
      },
      maisVantagens: {
        kicker: "Altri vantaggi",
        heading: "Piccoli dettagli che fanno tutta la differenza.",
      },
    },
    benefits: {
      indexacao: {
        title: "Aggiungi spartiti rapidamente",
        body: "Seleziona una cartella con spartiti e il gioco è fatto: Ottavada legge il nome del brano dalla cartella e suggerisce gli strumenti dai file. Niente più inserimenti uno per uno.",
      },
      duplicatas: {
        title: "Nessuna confusione: sempre lo spartito giusto",
        body: "Il sistema non permette due nomi uguali di brano o spartito. Se ci sono due violini, saranno “Violino I” e “Violino II”, mai un “Violino” ripetuto in prova.",
      },
      duplicacoesOcultas: {
        title: "Trova i duplicati che non avevi notato",
        body: "Ottavada analizza il tuo repertorio e rivela brani o spartiti ripetuti che sono passati inosservati, anche in cartelle diverse.",
      },
      busca: {
        title: "Trova tutto con estrema facilità",
        body: "Cerca per nome o filtra per categoria, compositore e arrangiatore. Perfetto per orchestre con centinaia di spartiti.",
      },
      ordem: {
        title: "Ordine di partitura standard mondiale",
        body: "All’apertura di un brano, gli spartiti appaiono nell’ordine standard: legni, ottoni, percussioni, tastiere e archi. Lo stesso \"Standard Orchestral Score Order\" usato in tutto il mondo.",
      },
      favoritos: {
        title: "Preferiti e scorciatoie in un clic",
        body: "Segna i brani come preferiti e accedi rapidamente a sezioni come \"Non consentite\" o \"Senza spartiti\". Tutto a portata di mano.",
      },
      ferramentas: {
        title: "Continua a usare i tuoi strumenti preferiti",
        body: "Funziona con Finale, MuseScore, Sibelius, Dorico e qualsiasi file in PDF, MusicXML o MIDI. Non cambi nulla nel tuo flusso di lavoro.",
      },
      maestro: {
        title: "Computer del direttore: controllo totale",
        body: "Aggiungi, modifica e rimuovi brani e spartiti. Decidi cosa va in prova e cosa resta solo con te. Comandi tu, sempre.",
      },
      ensaio: {
        title: "Computer delle prove: sola lettura, zero rischi",
        body: "Consultazione rapida per la sala prove. I file possono essere solo visualizzati, senza rischio che qualcuno elimini o modifichi uno spartito per sbaglio.",
      },
      nuvem: {
        title: "Sincronizza gratis con Google Drive o Koofr",
        body: "Nessun costo di abbonamento. I file vengono compressi prima dell’invio: occupano meno spazio e si sincronizzano più velocemente.",
      },
      backup: {
        title: "PC formattato? Tutto torna in 1 clic",
        body: "Hai cambiato macchina o formattato il computer? I tuoi spartiti, categorie, compositori e arrangiatori sono al sicuro. Un clic e tutto torna al suo posto, nelle stesse cartelle di prima.",
      },
      arquivos: {
        title: "I tuoi file, le tue regole",
        body: "Ottavada non rinomina cartelle né file, non sposta nulla e non impone formati proprietari. La tua organizzazione manuale è rispettata e incoraggiata.",
      },
      desinstalou: {
        title: "Disinstallato? I tuoi spartiti restano",
        body: "Se un giorno decidi di non usarlo più, i tuoi spartiti rimangono esattamente dove erano, organizzati, accessibili e senza alcuna dipendenza da Ottavada.",
      },
      escolha: {
        title: "Decidi tu cosa va in prova",
        body: "Non tutti gli spartiti devono andare sul computer delle prove. Scegli tu: inviare, bloccare o ignorare. Le bozze restano solo con te.",
      },
      idiomas: {
        title: "In 6 lingue, dal Brasile alla Germania",
        body: "Disponibile in portoghese, inglese, spagnolo, francese, italiano e tedesco. Per orchestre, bande e musicisti di tutto il mondo.",
      },
      gratuito: {
        title: "Gratuito davvero. Senza trucchi.",
        body: "100% gratuito per uso personale, orchestre, bande e istituzioni. Nessun abbonamento, nessun limite di brani, nessuna pubblicità e nessun server proprietario da mantenere.",
      },
      evolucao: {
        title: "In evoluzione",
        body: "Ottavada è in fase iniziale, ma riceve miglioramenti frequenti. Nuove funzionalità, correzioni e lingue vengono aggiunte in base alle richieste degli utenti.",
      },
      semLigar: {
        title: "Senza tenere il PC acceso 24 ore",
        body: "Ogni computer accede al cloud per conto proprio. Non devi tenere acceso il computer del direttore per usare quello delle prove: la sincronizzazione avviene direttamente tramite il cloud.",
      },
      openSource: {
        title: "Open source su GitHub, senza clausole nascoste",
        body: "Il codice è aperto: puoi vederlo, suggerire modifiche e contribuire.",
      },
      copias: {
        title: "Funziona offline in prova",
        body: "Gli spartiti sono salvati sul tuo computer. Accedi a tutto anche senza internet durante le prove. Veloce, affidabile e senza dipendenza dal cloud nei momenti cruciali.",
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
      line1: "Schluss mit manueller Arbeit mit Ihren Liedern und Noten: organisieren, synchronisieren und schützen Sie alles automatisch mit Ottavada.",
      line2: "",
      subtitle:
        "Ihr Repertoire immer organisiert und synchronisiert zwischen Dirigent und Probe. Ohne Ihre Arbeitsweise zu ändern.",
      cta: "Kostenlos herunterladen",
      ctaOs: "Herunterladen für %s",
      ctaNote: "Für Windows, Linux und Mac — 100 % kostenlos",
      otherSystem: "Alle Downloads",
    },
    sections: {
      descricao: {
        kicker: "Das Problem für jeden, der mit Noten arbeitet",
        text: "Notenverwaltung passiert immer noch manuell: Nachrichtenaustausch, doppelte Ordner und das ständige Risiko, in der Probe die falsche Version zu spielen. Ottavada löst das ein für alle Mal.",
      },
      paraQuem: {
        kicker: "Für wen ist Ottavada?",
        text: "Für Dirigenten, Musiker und Orchester, die täglich mit Noten arbeiten. Wenn Sie Ihre Musik manuell organisieren, Zeit mit der Suche nach Dateien verschwenden oder unter unterschiedlichen Versionen zwischen Computern leiden. Ottavada löst das ein für alle Mal.",
      },
      organizacao: {
        kicker: "Organisation",
        heading: "Finden Sie jede Note in Sekunden. Schluss mit der Schnitzeljagd.",
      },
      sincronizacao: {
        kicker: "Synchronisation",
        heading: "Eine App. Zwei Modi: Dirigent und Probe.",
      },
      liberdade: {
        kicker: "Freiheit",
        heading: "Ihre Dateien, Ihre Regeln. Keine Bindung.",
      },
      maisVantagens: {
        kicker: "Weitere Vorteile",
        heading: "Kleine Details, die den Unterschied machen.",
      },
    },
    benefits: {
      indexacao: {
        title: "Noten schnell hinzufügen",
        body: "Wählen Sie einfach einen Ordner mit Noten und fertig: Ottavada liest den Stücknamen aus dem Ordner und schlägt die Instrumente aus den Dateien vor. Kein Eintippen mehr, eines nach dem anderen.",
      },
      duplicatas: {
        title: "Keine Verwechslung: immer die richtige Note",
        body: "Das System erlaubt keine zwei gleichen Namen für ein Stück oder eine Note. Wenn es zwei Violinen gibt, heißen sie „Violine I“ und „Violine II“, niemals eine doppelte „Violine“ in der Probe.",
      },
      duplicacoesOcultas: {
        title: "Finden Sie Duplikate, die Sie nie bemerkt haben",
        body: "Ottavada durchsucht Ihr Repertoire und deckt wiederholte Lieder oder Noten auf, die unbemerkt blieben, selbst in verschiedenen Ordnern.",
      },
      busca: {
        title: "Alles mit größter Leichtigkeit finden",
        body: "Suchen Sie nach Namen oder filtern Sie nach Kategorie, Komponist und Arrangeur. Perfekt für Orchester mit Hunderten von Noten.",
      },
      ordem: {
        title: "Weltweiter Standard-Notenlayout",
        body: "Beim Öffnen eines Stücks erscheinen die Noten in der Standardreihenfolge: Holzbläser, Blechbläser, Schlagzeug, Tasteninstrumente und Streicher. Derselbe „Standard Orchestral Score Order“, der weltweit verwendet wird.",
      },
      favoritos: {
        title: "Favoriten und Verknüpfungen mit einem Klick",
        body: "Markieren Sie Stücke als Favoriten und greifen Sie schnell auf Bereiche wie „Nicht erlaubt“ oder „Keine Noten“ zu. Alles in Reichweite.",
      },
      ferramentas: {
        title: "Behalten Sie Ihre Lieblingswerkzeuge",
        body: "Funktioniert mit Finale, MuseScore, Sibelius, Dorico und jeder Datei in PDF, MusicXML oder MIDI. Sie ändern nichts in Ihrem Workflow.",
      },
      maestro: {
        title: "Dirigenten-Computer: volle Kontrolle",
        body: "Fügen Sie Stücke und Noten hinzu, bearbeiten und entfernen Sie sie. Legen Sie fest, was zur Probe geht und was nur bei Ihnen bleibt. Sie haben das Sagen, immer.",
      },
      ensaio: {
        title: "Proben-Computer: schreibgeschützt, null Risiko",
        body: "Schnelle Referenz für den Probenraum. Dateien können nur angezeigt werden, ohne dass jemand versehentlich eine Note löscht oder ändert.",
      },
      nuvem: {
        title: "Kostenlos synchronisieren via Google Drive oder Koofr",
        body: "Keine Abo-Gebühren. Dateien werden vor dem Hochladen komprimiert: weniger Speicherplatz und schnellere Synchronisation.",
      },
      backup: {
        title: "PC formatiert? Alles in 1 Klick zurück",
        body: "Computer gewechselt oder formatiert? Ihre Noten, Kategorien, Komponisten und Arrangeure sind gesichert. Ein Klick und alles ist wieder da, in denselben Ordnern wie zuvor.",
      },
      arquivos: {
        title: "Ihre Dateien, Ihre Regeln",
        body: "Ottavada benennt weder Ordner noch Dateien um, verschiebt nichts und erzwingt keine proprietären Formate. Ihre manuelle Organisation wird respektiert und gefördert.",
      },
      desinstalou: {
        title: "Deinstalliert? Ihre Noten bleiben",
        body: "Wenn Sie sich eines Tages entscheiden, es nicht mehr zu verwenden, bleiben Ihre Noten genau dort, wo sie waren, organisiert, zugänglich und ohne Abhängigkeit von Ottavada.",
      },
      escolha: {
        title: "Sie entscheiden, was zur Probe geht",
        body: "Nicht jede Note muss auf den Proben-Computer. Sie wählen: senden, blockieren oder ignorieren. Entwürfe bleiben nur bei Ihnen.",
      },
      idiomas: {
        title: "In 6 Sprachen, von Brasilien bis Deutschland",
        body: "Verfügbar in Portugiesisch, Englisch, Spanisch, Französisch, Italienisch und Deutsch. Für Orchester, Bands und Musiker weltweit.",
      },
      gratuito: {
        title: "Wirklich kostenlos. Ohne Tricks.",
        body: "100 % kostenlos für den persönlichen Gebrauch, Orchester, Bands und Institutionen. Kein Abo, keine Stückbegrenzung, keine Werbung und kein eigener Server zu warten.",
      },
      evolucao: {
        title: "Ständig in Entwicklung",
        body: "Ottavada befindet sich in einer frühen Phase, erhält jedoch häufig Verbesserungen. Neue Funktionen, Korrekturen und Sprachen werden basierend auf Nutzeranfragen hinzugefügt.",
      },
      semLigar: {
        title: "PC muss nicht 24/7 laufen",
        body: "Jeder Computer greift eigenständig auf die Cloud zu. Sie müssen den Dirigenten-Computer nicht eingeschaltet lassen, damit der Proben-Computer funktioniert — die Synchronisation erfolgt direkt über die Cloud.",
      },
      openSource: {
        title: "Open Source auf GitHub, ohne Kleingedrucktes",
        body: "Der Code ist offen: Sie können ihn einsehen, Änderungen vorschlagen und beitragen.",
      },
      copias: {
        title: "Funktioniert offline in der Probe",
        body: "Die Noten werden auf Ihrem Computer gespeichert. Greifen Sie auch ohne Internet während der Probe auf alles zu. Schnell, zuverlässig und in entscheidenden Momenten unabhängig von der Cloud.",
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
