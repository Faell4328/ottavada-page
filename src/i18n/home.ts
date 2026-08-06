import type { Locale } from "./config";

export type BenefitMessages = {
  indexacao: { title: string; body: string };
  duplicatas: { title: string; body: string };
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
    ctaNote: string;
  };
  sections: {
    descricao: { kicker: string; text: string };
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
      title: "Ottavada: organize e sincronize partituras da sua orquestra",
      description:
        "Ottavada é um software gratuito para gerenciar, organizar e sincronizar partituras. Para Windows 10 e 11.",
      ogTitle: "Ottavada: Organize e Sincronize Partituras",
      ogDescription:
        "Software gratuito para gerenciar e sincronizar partituras da sua orquestra.",
    },
    brand: { name: "Ottavada", tagline: "O seu maestro de partituras" },
    nav: { download: "Baixar agora", docs: "Documentação" },
    hero: {
      line1: "Encontre, organize e compartilhe",
      line2: "partituras sem duplicação entre seus computadores.",
      subtitle:
        "Gerencie, organize e sincronize suas partituras. Sem complicações, sem mudar a sua forma de trabalhar.",
      cta: "Baixar gratuitamente",
      ctaNote: "Para Windows 10 e 11",
    },
    sections: {
      descricao: {
        kicker: "Por que o Ottavada?",
        text: "O gerenciamento de partituras ainda é feito manualmente: troca de e-mails, pen drives, pastas e partituras duplicadas, e risco constante de perder a versão certa. O Ottavada resolve isso.",
      },
      organizacao: {
        kicker: "Organização",
        heading: "Nunca mais perca tempo procurando a partitura certa.",
      },
      sincronizacao: {
        kicker: "Sincronização",
        heading: "Um só aplicativo. Dois modos de uso.",
      },
      liberdade: {
        kicker: "Liberdade",
        heading: "Você não fica preso à ferramenta.",
      },
      maisVantagens: {
        kicker: "Mais vantagens",
        heading: "Pequenos detalhes que fazem diferença.",
      },
    },
    benefits: {
      indexacao: {
        title: "Indexação inteligente",
        body: "Basta selecionar uma pasta com partituras. O Ottavada identifica o nome da música pela pasta e sugere os instrumentos a partir dos arquivos, sem cadastro manual.",
      },
      duplicatas: {
        title: "Chega de duplicatas",
        body: 'O sistema não permite dois nomes iguais de música ou partitura. Se tem dois violinos, serão "Violino I" e "Violino II", nunca "Violino" repetido.',
      },
      busca: {
        title: "Busca e filtros inteligentes",
        body: "Encontre qualquer música em segundos. Pesquise por nome ou filtre por categoria, compositor e arranjador. Perfeito para acervos grandes.",
      },
      ordem: {
        title: "Ordem padrão de grade",
        body: 'Ao expandir uma música, as partituras aparecem na ordem padrão de grade: madeiras, metais, percussão, teclados e cordas, igual ao "Standard Orchestral Score Order", padrão mundial.',
      },
      favoritos: {
        title: "Favoritos e seções rápidas",
        body: 'Marque músicas como favoritas e acesse seções como "Não permitidas" ou "Sem partituras" com um clique. Tudo ao alcance da mão.',
      },
      ferramentas: {
        title: "Use as ferramentas que você já conhece",
        body: "Funciona com Finale, MuseScore, Sibelius, Dorico e qualquer arquivo em PDF, MusicXML ou MIDI. Você continua trabalhando do seu jeito, sem mudar nada.",
      },
      maestro: {
        title: "Modo computador do maestro",
        body: "Controle total do repertório: adicione, edite e remova músicas e partituras. Defina quais vão para o computador de ensaio e quais ficam só com você.",
      },
      ensaio: {
        title: "Modo computador de ensaio",
        body: "Consulta rápida para a sala de ensaio. Os arquivos só podem ser visualizados, sem risco de alterar ou remover nada sem querer.",
      },
      nuvem: {
        title: "Nuvem gratuita",
        body: "Sincronize pelo Google Drive ou Koofr sem custo adicional. Arquivos são compactados antes do envio, ocupando menos espaço e sendo mais rápidos.",
      },
      backup: {
        title: "Computador quebrou? Nada se perdeu",
        body: "Formatou ou trocou de máquina? Suas partituras, categorias, compositores e arranjadores estão seguros. Com um clique, tudo volta ao lugar.",
      },
      arquivos: {
        title: "Seus arquivos, suas regras",
        body: "O Ottavada não renomeia pastas nem arquivos, não movimenta nada e não impõe formatos proprietários. Sua organização manual é respeitada e incentivada.",
      },
      desinstalou: {
        title: "Desinstalou? Seus arquivos continuam lá",
        body: "Se um dia decidir não usar mais, suas partituras continuam exatamente onde estavam, organizadas, acessíveis e sem nenhuma dependência do Ottavada.",
      },
      escolha: {
        title: "Você decide o que vai para o ensaio",
        body: "Nem tudo precisa ir para o computador do ensaio. Você escolhe: essa partitura pode ser enviada, bloqueada ou ignorada. Você no controle, sempre.",
      },
      idiomas: {
        title: "Multi-idiomas",
        body: "Disponível em português, inglês, espanhol, francês, italiano e alemão, para atender músicos de qualquer lugar.",
      },
      gratuito: {
        title: "Gratuito, sem pegadinhas",
        body: "Totalmente gratuito para uso pessoal, orquestras, bandas e instituições. Sem assinatura, sem limite de músicas e sem servidor próprio para manter.",
      },
      evolucao: {
        title: "Em constante evolução",
        body: "O Ottavada está em fase inicial de desenvolvimento, mas recebe melhorias frequentes. Novas funcionalidades, correções e idiomas são adicionados com base no feedback dos usuários.",
      },
      semLigar: {
        title: "Sem deixar o computador ligado",
        body: "Cada computador acessa a nuvem por conta própria. Você não precisa manter o computador do maestro ligado para usar o de ensaio, a sincronização acontece direto pela nuvem.",
      },
      openSource: {
        title: "Open source",
        body: "O Ottavada é open source. Você pode ver o código, sugerir mudanças e contribuir no GitHub.",
      },
      copias: {
        title: "Cópias locais",
        body: "As partituras ficam salvas no seu computador. Acesse tudo mesmo sem internet durante o ensaio. Rápido e sem depender de nuvem.",
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
      title: "Ottavada: organize and sync your orchestra's sheet music",
      description:
        "Ottavada is free software to manage, organize and sync sheet music. For Windows 10 and 11.",
      ogTitle: "Ottavada: Organize and Sync Sheet Music",
      ogDescription:
        "Free software to manage and sync your orchestra's sheet music.",
    },
    brand: { name: "Ottavada", tagline: "Your sheet music conductor" },
    nav: { download: "Download now", docs: "Documentation" },
    hero: {
      line1: "Find, organize and share",
      line2: "sheet music without duplication across your computers.",
      subtitle:
        "Manage, organize and sync your sheet music. No complications, no changing the way you work.",
      cta: "Download for free",
      ctaNote: "For Windows 10 and 11",
    },
    sections: {
      descricao: {
        kicker: "Why Ottavada?",
        text: "Sheet music management is still done manually: email exchanges, pen drives, duplicate folders and sheets, and constant risk of losing the right version. Ottavada solves this.",
      },
      organizacao: {
        kicker: "Organization",
        heading: "Never waste time looking for the right sheet music again.",
      },
      sincronizacao: {
        kicker: "Sync",
        heading: "One app. Two usage modes.",
      },
      liberdade: {
        kicker: "Freedom",
        heading: "You're not locked into the tool.",
      },
      maisVantagens: {
        kicker: "More perks",
        heading: "Small details that make a difference.",
      },
    },
    benefits: {
      indexacao: {
        title: "Smart indexing",
        body: "Just select a folder with sheet music. Ottavada identifies the song name from the folder and suggests instruments from the files, with no manual entry needed.",
      },
      duplicatas: {
        title: "No more duplicates",
        body: 'The system does not allow two identical names for a piece or sheet. If there are two violins, they will be "Violin I" and "Violin II", never a duplicate "Violin".',
      },
      busca: {
        title: "Smart search and filters",
        body: "Find any piece in seconds. Search by name or filter by category, composer, and arranger. Perfect for large collections.",
      },
      ordem: {
        title: "Standard score order",
        body: 'When expanding a piece, sheet music appears in standard score order: woodwinds, brass, percussion, keyboards and strings, matching the world standard "Standard Orchestral Score Order".',
      },
      favoritos: {
        title: "Favorites and quick sections",
        body: 'Mark pieces as favorites and access sections like "Not allowed" or "No sheet music" with a single click. Everything at your fingertips.',
      },
      ferramentas: {
        title: "Use the tools you already know",
        body: "Works with Finale, MuseScore, Sibelius, Dorico and any file in PDF, MusicXML or MIDI. You keep working your way, with no changes.",
      },
      maestro: {
        title: "Conductor computer mode",
        body: "Full repertoire control: add, edit and remove pieces and sheet music. Choose what goes to the rehearsal computer and what stays with you.",
      },
      ensaio: {
        title: "Rehearsal computer mode",
        body: "Quick reference for the rehearsal room. Files can only be viewed, with no risk of accidentally changing or deleting anything.",
      },
      nuvem: {
        title: "Free cloud sync",
        body: "Sync via Google Drive or Koofr at no extra cost. Files are compressed before upload, taking up less space and being faster.",
      },
      backup: {
        title: "Computer broke? Nothing is lost",
        body: "Formatted or switched machines? Your sheet music, categories, composers and arrangers are safe. One click and everything is back in place.",
      },
      arquivos: {
        title: "Your files, your rules",
        body: "Ottavada does not rename folders or files, does not move anything, and does not impose proprietary formats. Your manual organization is respected and encouraged.",
      },
      desinstalou: {
        title: "Uninstalled? Your files stay",
        body: "If you ever decide to stop using it, your sheet music stays exactly where it was, organized, accessible, and with no dependency on Ottavada.",
      },
      escolha: {
        title: "You decide what goes to rehearsal",
        body: "Not everything needs to go to the rehearsal computer. You choose: this sheet can be sent, blocked, or ignored. You're in control, always.",
      },
      idiomas: {
        title: "Multi-language",
        body: "Available in Portuguese, English, Spanish, French, Italian and German, to serve musicians from anywhere.",
      },
      gratuito: {
        title: "Free, no tricks",
        body: "Totally free for personal use, orchestras, bands and institutions. No subscription, no limit on pieces, and no proprietary server to maintain.",
      },
      evolucao: {
        title: "Constantly evolving",
        body: "Ottavada is in early development, but receives frequent improvements. New features, fixes and languages are added based on user feedback.",
      },
      semLigar: {
        title: "No need to keep a computer on",
        body: "Each computer accesses the cloud on its own. You don't need to keep the conductor computer on for the rehearsal computer to work — sync happens directly through the cloud.",
      },
      openSource: {
        title: "Open source",
        body: "Ottavada is open source. You can view the code, suggest changes, and contribute on GitHub.",
      },
      copias: {
        title: "Local copies",
        body: "Sheet music is saved on your computer. Access everything even without internet during rehearsal. Fast and no cloud dependency.",
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
      title: "Ottavada: organiza y sincroniza las partituras de tu orquesta",
      description:
        "Ottavada es un software gratuito para gestionar, organizar y sincronizar partituras. Para Windows 10 y 11.",
      ogTitle: "Ottavada: Organiza y Sincroniza Partituras",
      ogDescription:
        "Software gratuito para gestionar y sincronizar las partituras de tu orquesta.",
    },
    brand: { name: "Ottavada", tagline: "Tu director de partituras" },
    nav: { download: "Descargar ahora", docs: "Documentación" },
    hero: {
      line1: "Encuentra, organiza y comparte",
      line2: "partituras sin duplicados entre tus ordenadores.",
      subtitle:
        "Gestiona, organiza y sincroniza tus partituras. Sin complicaciones, sin cambiar tu forma de trabajar.",
      cta: "Descargar gratis",
      ctaNote: "Para Windows 10 y 11",
    },
    sections: {
      descricao: {
        kicker: "¿Por qué Ottavada?",
        text: "La gestión de partituras todavía se hace manualmente: intercambio de correos, pen drives, carpetas y partituras duplicadas, y riesgo constante de perder la versión correcta. Ottavada lo resuelve.",
      },
      organizacao: {
        kicker: "Organización",
        heading: "Nunca más pierdas tiempo buscando la partitura correcta.",
      },
      sincronizacao: {
        kicker: "Sincronización",
        heading: "Una sola aplicación. Dos modos de uso.",
      },
      liberdade: {
        kicker: "Libertad",
        heading: "No estás atado a la herramienta.",
      },
      maisVantagens: {
        kicker: "Más ventajas",
        heading: "Pequeños detalles que marcan la diferencia.",
      },
    },
    benefits: {
      indexacao: {
        title: "Indexación inteligente",
        body: "Solo selecciona una carpeta con partituras. Ottavada identifica el nombre de la canción por la carpeta y sugiere los instrumentos a partir de los archivos, sin registro manual.",
      },
      duplicatas: {
        title: "Adiós a los duplicados",
        body: 'El sistema no permite dos nombres iguales de canción o partitura. Si hay dos violines, serán "Violín I" y "Violín II", nunca un "Violín" duplicado.',
      },
      busca: {
        title: "Búsqueda y filtros inteligentes",
        body: "Encuentra cualquier canción en segundos. Busca por nombre o filtra por categoría, compositor y arreglista. Perfecto para colecciones grandes.",
      },
      ordem: {
        title: "Orden estándar de partitura",
        body: 'Al expandir una canción, las partituras aparecen en el orden estándar de partitura: maderas, metales, percusión, teclados y cuerdas, igual al estándar mundial "Standard Orchestral Score Order".',
      },
      favoritos: {
        title: "Favoritos y secciones rápidas",
        body: 'Marca canciones como favoritas y accede a secciones como "No permitidas" o "Sin partituras" con un solo clic. Todo al alcance de la mano.',
      },
      ferramentas: {
        title: "Usa las herramientas que ya conoces",
        body: "Funciona con Finale, MuseScore, Sibelius, Dorico y cualquier archivo en PDF, MusicXML o MIDI. Sigues trabajando a tu manera, sin cambiar nada.",
      },
      maestro: {
        title: "Modo computadora del director",
        body: "Control total del repertorio: añade, edita y elimina canciones y partituras. Define cuáles van a la computadora de ensayo y cuáles se quedan solo contigo.",
      },
      ensaio: {
        title: "Modo computadora de ensayo",
        body: "Consulta rápida para la sala de ensayo. Los archivos solo se pueden visualizar, sin riesgo de alterar o eliminar nada sin querer.",
      },
      nuvem: {
        title: "Nube gratuita",
        body: "Sincroniza mediante Google Drive o Koofr sin costo adicional. Los archivos se comprimen antes del envío, ocupando menos espacio y siendo más rápidos.",
      },
      backup: {
        title: "¿Computadora rota? Nada se perdió",
        body: "¿Formateaste o cambiaste de máquina? Tus partituras, categorías, compositores y arreglistas están seguros. Con un clic, todo vuelve a su lugar.",
      },
      arquivos: {
        title: "Tus archivos, tus reglas",
        body: "Ottavada no renombra carpetas ni archivos, no mueve nada y no impone formatos propietarios. Tu organización manual es respetada e incentivada.",
      },
      desinstalou: {
        title: "¿Desinstalado? Tus archivos siguen allí",
        body: "Si algún día decides dejar de usarlo, tus partituras siguen exactamente donde estaban, organizadas, accesibles y sin ninguna dependencia de Ottavada.",
      },
      escolha: {
        title: "Tú decides qué va al ensayo",
        body: "No todo necesita ir a la computadora de ensayo. Tú eliges: esta partitura puede ser enviada, bloqueada o ignorada. Tú tienes el control, siempre.",
      },
      idiomas: {
        title: "Multi-idioma",
        body: "Disponible en portugués, inglés, español, francés, italiano y alemán, para atender a músicos de cualquier lugar.",
      },
      gratuito: {
        title: "Gratuito, sin trampas",
        body: "Totalmente gratuito para uso personal, orquestas, bandas e instituciones. Sin suscripción, sin límite de canciones y sin servidor propio que mantener.",
      },
      evolucao: {
        title: "En constante evolución",
        body: "Ottavada está en fase inicial de desarrollo, pero recibe mejoras frecuentes. Se añaden nuevas funcionalidades, correcciones e idiomas según los comentarios de los usuarios.",
      },
      semLigar: {
        title: "Sin dejar el ordenador encendido",
        body: "Cada ordenador accede a la nube por su cuenta. No necesitas mantener el ordenador del director encendido para usar el de ensayo, la sincronización ocurre directamente en la nube.",
      },
      openSource: {
        title: "Open source",
        body: "Ottavada es open source. Puedes ver el código, sugerir cambios y contribuir en GitHub.",
      },
      copias: {
        title: "Copias locales",
        body: "Las partituras se guardan en tu computadora. Accede a todo incluso sin internet durante el ensayo. Rápido y sin depender de la nube.",
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
      title: "Ottavada : organisez et synchronisez les partitions de votre orchestre",
      description:
        "Ottavada est un logiciel gratuit pour gérer, organiser et synchroniser des partitions. Pour Windows 10 et 11.",
      ogTitle: "Ottavada : Organisez et Synchronisez des Partitions",
      ogDescription:
        "Logiciel gratuit pour gérer et synchroniser les partitions de votre orchestre.",
    },
    brand: { name: "Ottavada", tagline: "Votre chef de partitions" },
    nav: { download: "Télécharger", docs: "Documentation" },
    hero: {
      line1: "Trouvez, organisez et partagez",
      line2: "des partitions sans doublons entre vos ordinateurs.",
      subtitle:
        "Gérez, organisez et synchronisez vos partitions. Sans complications, sans changer votre façon de travailler.",
      cta: "Télécharger gratuitement",
      ctaNote: "Pour Windows 10 et 11",
    },
    sections: {
      descricao: {
        kicker: "Pourquoi Ottavada ?",
        text: "La gestion des partitions se fait encore manuellement : échanges d’e-mails, clés USB, dossiers et partitions en double, et risque constant de perdre la bonne version. Ottavada résout cela.",
      },
      organizacao: {
        kicker: "Organisation",
        heading: "Ne perdez plus jamais de temps à chercher la bonne partition.",
      },
      sincronizacao: {
        kicker: "Synchronisation",
        heading: "Une seule application. Deux modes d’utilisation.",
      },
      liberdade: {
        kicker: "Liberté",
        heading: "Vous n’êtes pas prisonnier de l’outil.",
      },
      maisVantagens: {
        kicker: "Plus d'avantages",
        heading: "De petits détails qui font la différence.",
      },
    },
    benefits: {
      indexacao: {
        title: "Indexation intelligente",
        body: "Sélectionnez simplement un dossier contenant des partitions. Ottavada identifie le nom du morceau par le dossier et suggère les instruments à partir des fichiers, sans saisie manuelle.",
      },
      duplicatas: {
        title: "Fini les doublons",
        body: "Le système n’autorise pas deux noms identiques de morceau ou de partition. S’il y a deux violons, ce seront « Violon I » et « Violon II », jamais un « Violon » en double.",
      },
      busca: {
        title: "Recherche et filtres intelligents",
        body: "Trouvez n’importe quel morceau en quelques secondes. Recherchez par nom ou filtrez par catégorie, compositeur et arrangeur. Parfait pour les grandes collections.",
      },
      ordem: {
        title: "Ordre standard de la partition",
        body: "Lorsque vous développez un morceau, les partitions apparaissent dans l’ordre standard de la partition : bois, cuivres, percussions, claviers et cordes, conformément au standard mondial \"Standard Orchestral Score Order\".",
      },
      favoritos: {
        title: "Favoris et sections rapides",
        body: "Marquez des morceaux comme favoris et accédez aux sections comme « Non autorisées » ou « Sans partitions » en un seul clic. Tout à portée de main.",
      },
      ferramentas: {
        title: "Utilisez les outils que vous connaissez déjà",
        body: "Fonctionne avec Finale, MuseScore, Sibelius, Dorico et tout fichier en PDF, MusicXML ou MIDI. Vous continuez à travailler à votre façon, sans rien changer.",
      },
      maestro: {
        title: "Mode ordinateur du chef",
        body: "Contrôle total du répertoire : ajoutez, modifiez et supprimez des morceaux et partitions. Définissez ce qui va sur l’ordinateur de répétition et ce qui reste avec vous.",
      },
      ensaio: {
        title: "Mode ordinateur de répétition",
        body: "Consultation rapide pour la salle de répétition. Les fichiers ne peuvent être que consultés, sans risque de modifier ou supprimer quoi que ce soit par erreur.",
      },
      nuvem: {
        title: "Cloud gratuit",
        body: "Synchronisez via Google Drive ou Koofr sans frais supplémentaires. Les fichiers sont compressés avant l’envoi, occupant moins d’espace et étant plus rapides.",
      },
      backup: {
        title: "Ordinateur cassé ? Rien n’est perdu",
        body: "Formaté ou changé de machine ? Vos partitions, catégories, compositeurs et arrangeurs sont en sécurité. Un clic et tout revient à sa place.",
      },
      arquivos: {
        title: "Vos fichiers, vos règles",
        body: "Ottavada ne renomme ni les dossiers ni les fichiers, ne déplace rien et n’impose pas de formats propriétaires. Votre organisation manuelle est respectée et encouragée.",
      },
      desinstalou: {
        title: "Désinstallé ? Vos fichiers restent",
        body: "Si vous décidez un jour de ne plus l’utiliser, vos partitions restent exactement là où elles étaient, organisées, accessibles et sans aucune dépendance à Ottavada.",
      },
      escolha: {
        title: "Vous décidez de ce qui va en répétition",
        body: "Tout ne doit pas aller sur l’ordinateur de répétition. Vous choisissez : cette partition peut être envoyée, bloquée ou ignorée. Vous avez le contrôle, toujours.",
      },
      idiomas: {
        title: "Multi-langues",
        body: "Disponible en portugais, anglais, espagnol, français, italien et allemand, pour servir les musiciens du monde entier.",
      },
      gratuito: {
        title: "Gratuit, sans piège",
        body: "Totalement gratuit pour usage personnel, orchestres, bands et institutions. Sans abonnement, sans limite de morceaux et sans serveur propriétaire à maintenir.",
      },
      evolucao: {
        title: "En évolution constante",
        body: "Ottavada est en phase initiale de développement, mais reçoit des améliorations fréquentes. De nouvelles fonctionnalités, corrections et langues sont ajoutées en fonction des retours des utilisateurs.",
      },
      semLigar: {
        title: "Sans laisser l’ordinateur allumé",
        body: "Chaque ordinateur accède au cloud par lui-même. Vous n’avez pas besoin de garder l’ordinateur du chef allumé pour utiliser celui de répétition, la synchronisation se fait directement via le cloud.",
      },
      openSource: {
        title: "Open source",
        body: "Ottavada est open source. Vous pouvez voir le code, suggérer des changements et contribuer sur GitHub.",
      },
      copias: {
        title: "Copies locales",
        body: "Les partitions sont enregistrées sur votre ordinateur. Accédez à tout même sans internet pendant la répétition. Rapide et sans dépendance au cloud.",
      },
    },
    footer: {
      email: "Email de contact : ottavada@hotmail.com",
      dev: "Développé par Rhafaell (faell4328)",
    },
    help: {
      kicker: "Besoin d’aide ?",
      heading: "Une question ? On vous aide.",
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
      title: "Ottavada: organizza e sincronizza gli spartiti della tua orchestra",
      description:
        "Ottavada è un software gratuito per gestire, organizzare e sincronizzare spartiti. Per Windows 10 e 11.",
      ogTitle: "Ottavada: Organizza e Sincronizza Spartiti",
      ogDescription:
        "Software gratuito per gestire e sincronizzare gli spartiti della tua orchestra.",
    },
    brand: { name: "Ottavada", tagline: "Il tuo direttore di spartiti" },
    nav: { download: "Scarica ora", docs: "Documentazione" },
    hero: {
      line1: "Trova, organizza e condividi",
      line2: "spartiti senza duplicati tra i tuoi computer.",
      subtitle:
        "Gestisci, organizza e sincronizza i tuoi spartiti. Senza complicazioni, senza cambiare il tuo modo di lavorare.",
      cta: "Scarica gratuitamente",
      ctaNote: "Per Windows 10 e 11",
    },
    sections: {
      descricao: {
        kicker: "Perché Ottavada?",
        text: "La gestione degli spartiti è ancora fatta manualmente: scambi di email, pen drive, cartelle e spartiti duplicati, e il rischio costante di perdere la versione giusta. Ottavada risolve questo.",
      },
      organizacao: {
        kicker: "Organizzazione",
        heading: "Non perdere mai più tempo a cercare lo spartito giusto.",
      },
      sincronizacao: {
        kicker: "Sincronizzazione",
        heading: "Una sola app. Due modalità d’uso.",
      },
      liberdade: {
        kicker: "Libertà",
        heading: "Non sei vincolato allo strumento.",
      },
      maisVantagens: {
        kicker: "Altri vantaggi",
        heading: "Piccoli dettagli che fanno la differenza.",
      },
    },
    benefits: {
      indexacao: {
        title: "Indicizzazione intelligente",
        body: "Basta selezionare una cartella con gli spartiti. Ottavada identifica il nome del brano dalla cartella e suggerisce gli strumenti dai file, senza inserimento manuale.",
      },
      duplicatas: {
        title: "Basta duplicati",
        body: 'Il sistema non permette due nomi uguali di brano o spartito. Se ci sono due violini, saranno "Violino I" e "Violino II", mai un "Violino" duplicato.',
      },
      busca: {
        title: "Ricerca e filtri intelligenti",
        body: "Trova qualsiasi brano in pochi secondi. Cerca per nome o filtra per categoria, compositore e arrangiatore. Perfetto per grandi raccolte.",
      },
      ordem: {
        title: "Ordine standard della partitura",
        body: "Quando espandi un brano, gli spartiti appaiono nell’ordine standard della partitura: legni, ottoni, percussioni, tastiere e archi, secondo lo standard mondiale \"Standard Orchestral Score Order\".",
      },
      favoritos: {
        title: "Preferiti e sezioni rapide",
        body: 'Segna i brani come preferiti e accedi a sezioni come "Non consentite" o "Senza spartiti" con un solo clic. Tutto a portata di mano.',
      },
      ferramentas: {
        title: "Usa gli strumenti che già conosci",
        body: "Funziona con Finale, MuseScore, Sibelius, Dorico e qualsiasi file in PDF, MusicXML o MIDI. Continui a lavorare a modo tuo, senza cambiare nulla.",
      },
      maestro: {
        title: "Modalità computer del direttore",
        body: "Controllo totale del repertorio: aggiungi, modifica e rimuovi brani e spartiti. Decidi cosa va sul computer delle prove e cosa resta solo con te.",
      },
      ensaio: {
        title: "Modalità computer delle prove",
        body: "Consultazione rapida per la sala prove. I file possono essere solo visualizzati, senza il rischio di modificare o eliminare nulla per sbaglio.",
      },
      nuvem: {
        title: "Cloud gratuito",
        body: "Sincronizza tramite Google Drive o Koofr senza costi aggiuntivi. I file vengono compressi prima dell’invio, occupando meno spazio ed essendo più veloci.",
      },
      backup: {
        title: "Computer rotto? Nulla è perduto",
        body: "Formattato o cambiato macchina? I tuoi spartiti, categorie, compositori e arrangiatori sono al sicuro. Un clic e tutto torna al suo posto.",
      },
      arquivos: {
        title: "I tuoi file, le tue regole",
        body: "Ottavada non rinomina cartelle né file, non sposta nulla e non impone formati proprietari. La tua organizzazione manuale è rispettata e incoraggiata.",
      },
      desinstalou: {
        title: "Disinstallato? I tuoi file rimangono",
        body: "Se un giorno decidi di non usarlo più, i tuoi spartiti rimangono esattamente dove erano, organizzati, accessibili e senza alcuna dipendenza da Ottavada.",
      },
      escolha: {
        title: "Decidi tu cosa va alle prove",
        body: "Non tutto deve andare sul computer delle prove. Scegli tu: questo spartito può essere inviato, bloccato o ignorato. Tu hai il controllo, sempre.",
      },
      idiomas: {
        title: "Multi-lingua",
        body: "Disponibile in portoghese, inglese, spagnolo, francese, italiano e tedesco, per servire musicisti di tutto il mondo.",
      },
      gratuito: {
        title: "Gratuito, senza trucchi",
        body: "Totalmente gratuito per uso personale, orchestre, bande e istituzioni. Nessun abbonamento, nessun limite di brani e nessun server proprietario da mantenere.",
      },
      evolucao: {
        title: "In costante evoluzione",
        body: "Ottavada è in fase iniziale di sviluppo, ma riceve miglioramenti frequenti. Nuove funzionalità, correzioni e lingue vengono aggiunte in base al feedback degli utenti.",
      },
      semLigar: {
        title: "Senza tenere il computer acceso",
        body: "Ogni computer accede al cloud per conto proprio. Non devi tenere acceso il computer del direttore per usare quello delle prove, la sincronizzazione avviene direttamente tramite il cloud.",
      },
      openSource: {
        title: "Open source",
        body: "Ottavada è open source. Puoi vedere il codice, suggerire modifiche e contribuire su GitHub.",
      },
      copias: {
        title: "Copie locali",
        body: "Gli spartiti sono salvati sul tuo computer. Accedi a tutto anche senza internet durante le prove. Veloce e senza dipendenza dal cloud.",
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
      title: "Ottavada: Organisieren und synchronisieren Sie die Noten Ihres Orchesters",
      description:
        "Ottavada ist eine kostenlose Software zum Verwalten, Organisieren und Synchronisieren von Noten. Für Windows 10 und 11.",
      ogTitle: "Ottavada: Noten organisieren und synchronisieren",
      ogDescription:
        "Kostenlose Software zum Verwalten und Synchronisieren der Noten Ihres Orchesters.",
    },
    brand: { name: "Ottavada", tagline: "Ihr Noten-Dirigent" },
    nav: { download: "Jetzt herunterladen", docs: "Dokumentation" },
    hero: {
      line1: "Finden, organisieren und teilen Sie",
      line2: "Noten ohne Duplikate zwischen Ihren Computern.",
      subtitle:
        "Verwalten, organisieren und synchronisieren Sie Ihre Noten. Ohne Komplikationen, ohne Ihre Arbeitsweise zu ändern.",
      cta: "Kostenlos herunterladen",
      ctaNote: "Für Windows 10 und 11",
    },
    sections: {
      descricao: {
        kicker: "Warum Ottavada?",
        text: "Die Notenverwaltung erfolgt immer noch manuell: E-Mail-Austausch, USB-Sticks, doppelte Ordner und Noten sowie die ständige Gefahr, die richtige Version zu verlieren. Ottavada löst das.",
      },
      organizacao: {
        kicker: "Organisation",
        heading: "Verschwenden Sie nie wieder Zeit mit der Suche nach der richtigen Note.",
      },
      sincronizacao: {
        kicker: "Synchronisation",
        heading: "Eine App. Zwei Nutzungsmodi.",
      },
      liberdade: {
        kicker: "Freiheit",
        heading: "Sie sind nicht an das Werkzeug gebunden.",
      },
      maisVantagens: {
        kicker: "Weitere Vorteile",
        heading: "Kleine Details, die den Unterschied machen.",
      },
    },
    benefits: {
      indexacao: {
        title: "Intelligente Indizierung",
        body: "Wählen Sie einfach einen Ordner mit Noten aus. Ottavada erkennt den Namen des Stücks anhand des Ordners und schlägt Instrumente aus den Dateien vor, ohne manuelle Eingabe.",
      },
      duplicatas: {
        title: "Schluss mit Duplikaten",
        body: "Das System erlaubt keine zwei gleichen Namen für ein Stück oder eine Note. Wenn es zwei Violinen gibt, heißen sie „Violine I“ und „Violine II“, niemals eine doppelte „Violine“.",
      },
      busca: {
        title: "Intelligente Suche und Filter",
        body: "Finden Sie jedes Stück in Sekunden. Suchen Sie nach Namen oder filtern Sie nach Kategorie, Komponist und Arrangeur. Perfekt für große Sammlungen.",
      },
      ordem: {
        title: "Standard-Partituranordnung",
        body: "Beim Erweitern eines Stücks erscheinen die Noten in der Standard-Partituranordnung: Holzbläser, Blechbläser, Schlagzeug, Tasteninstrumente und Streicher, gemäß dem weltweiten Standard \"Standard Orchestral Score Order\".",
      },
      favoritos: {
        title: "Favoriten und Schnellbereiche",
        body: "Markieren Sie Stücke als Favoriten und greifen Sie mit einem Klick auf Bereiche wie „Nicht erlaubt“ oder „Keine Noten“ zu. Alles griffbereit.",
      },
      ferramentas: {
        title: "Nutzen Sie die Werkzeuge, die Sie bereits kennen",
        body: "Funktioniert mit Finale, MuseScore, Sibelius, Dorico und jeder Datei in PDF, MusicXML oder MIDI. Sie arbeiten weiter wie gewohnt, ohne etwas zu ändern.",
      },
      maestro: {
        title: "Modus Dirigenten-Computer",
        body: "Volle Kontrolle über das Repertoire: Fügen Sie Stücke und Noten hinzu, bearbeiten und entfernen Sie sie. Legen Sie fest, was auf den Proben-Computer geht und was nur bei Ihnen bleibt.",
      },
      ensaio: {
        title: "Modus Proben-Computer",
        body: "Schnelle Referenz für den Probenraum. Dateien können nur angezeigt werden, ohne Gefahr, versehentlich etwas zu ändern oder zu löschen.",
      },
      nuvem: {
        title: "Kostenlose Cloud",
        body: "Synchronisieren Sie über Google Drive oder Koofr ohne zusätzliche Kosten. Dateien werden vor dem Hochladen komprimiert, nehmen weniger Platz ein und sind schneller.",
      },
      backup: {
        title: "Computer kaputt? Nichts ist verloren",
        body: "Formatiert oder das Gerät gewechselt? Ihre Noten, Kategorien, Komponisten und Arrangeure sind sicher. Ein Klick und alles ist wieder an seinem Platz.",
      },
      arquivos: {
        title: "Ihre Dateien, Ihre Regeln",
        body: "Ottavada benennt weder Ordner noch Dateien um, verschiebt nichts und erzwingt keine proprietären Formate. Ihre manuelle Organisation wird respektiert und gefördert.",
      },
      desinstalou: {
        title: "Deinstalliert? Ihre Dateien bleiben",
        body: "Wenn Sie sich eines Tages entscheiden, es nicht mehr zu verwenden, bleiben Ihre Noten genau dort, wo sie waren, organisiert, zugänglich und ohne Abhängigkeit von Ottavada.",
      },
      escolha: {
        title: "Sie entscheiden, was zur Probe geht",
        body: "Nicht alles muss auf den Proben-Computer. Sie wählen: Diese Partitur kann gesendet, blockiert oder ignoriert werden. Sie haben die Kontrolle, immer.",
      },
      idiomas: {
        title: "Mehrsprachig",
        body: "Verfügbar in Portugiesisch, Englisch, Spanisch, Französisch, Italienisch und Deutsch, um Musiker aus aller Welt zu bedienen.",
      },
      gratuito: {
        title: "Kostenlos, ohne Tricks",
        body: "Vollständig kostenlos für den persönlichen Gebrauch, Orchester, Bands und Institutionen. Kein Abonnement, keine Stückbegrenzung und kein eigener Server zu warten.",
      },
      evolucao: {
        title: "In ständiger Weiterentwicklung",
        body: "Ottavada befindet sich in einer frühen Entwicklungsphase, erhält jedoch häufig Verbesserungen. Neue Funktionen, Korrekturen und Sprachen werden basierend auf dem Feedback der Benutzer hinzugefügt.",
      },
      semLigar: {
        title: "Ohne den Computer eingeschaltet zu lassen",
        body: "Jeder Computer greift eigenständig auf die Cloud zu. Sie müssen den Dirigenten-Computer nicht eingeschaltet lassen, damit der Proben-Computer funktioniert — die Synchronisation erfolgt direkt über die Cloud.",
      },
      openSource: {
        title: "Open Source",
        body: "Ottavada ist Open Source. Sie können den Code einsehen, Änderungen vorschlagen und auf GitHub beitragen.",
      },
      copias: {
        title: "Lokale Kopien",
        body: "Die Noten werden auf Ihrem Computer gespeichert. Greifen Sie auch ohne Internet während der Probe auf alles zu. Schnell und ohne Cloud-Abhängigkeit.",
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
