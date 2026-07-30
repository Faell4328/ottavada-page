(function () {
  "use strict";

  var TRANSLATIONS = {
    "pt-BR": {
      "lang": "pt-BR",
      "langLabel": "Portugu\u00eas",
      "meta": {
        "title": "Ottavada \u2014 Organize e sincronize partituras da sua orquestra",
        "description": "Ottavada \u00e9 um software gratuito para gerenciar, organizar e sincronizar partituras. Para Windows 10 e 11.",
        "ogTitle": "Ottavada \u2014 Organize e Sincronize Partituras",
        "ogDescription": "Software gratuito para gerenciar e sincronizar partituras da sua orquestra."
      },
      "brand": { "name": "Ottavada", "tagline": "O seu maestro de partituras" },
      "nav": { "download": "Baixar agora" },
      "hero": {
        "line1": "Encontre, organize e compartilhe",
        "line2": "partituras sem duplica\u00e7\u00e3o entre seus computadores.",
        "subtitle": "Gerencie, organize e sincronize partituras da sua orquestra. Sem complica\u00e7\u00f5es, sem mudar a sua forma de trabalhar.",
        "cta": "Baixar gratuitamente",
        "ctaNote": "Para Windows 10 e 11 (x32 e x64)"
      },
      "sections": {
        "descricao": {
          "kicker": "Por que o Ottavada?",
          "text": "O gerenciamento de partituras em orquestras ainda \u00e9 feito manualmente: troca de e-mails, pen drives, pastas e partituras duplicadas, e risco constante de perder a vers\u00e3o certa. O Ottavada resolve isso."
        },
        "organizacao": { "kicker": "Organiza\u00e7\u00e3o", "heading": "Nunca mais perca tempo procurando a partitura certa." },
        "sincronizacao": { "kicker": "Sincroniza\u00e7\u00e3o", "heading": "Um s\u00f3 aplicativo. Dois modos de uso." },
        "liberdade": { "kicker": "Liberdade", "heading": "Voc\u00ea n\u00e3o fica preso \u00e0 ferramenta." },
      },
      "benefits": {
        "indexacao": { "title": "Indexa\u00e7\u00e3o inteligente", "body": "Basta selecionar uma pasta com partituras. O Ottavada identifica o nome da m\u00fasica pelo diret\u00f3rio e sugere os instrumentos a partir dos arquivos \u2014 sem cadastro manual." },
        "duplicatas": { "title": "Chega de duplicatas", "body": "O sistema n\u00e3o permite dois nomes iguais de m\u00fasica ou partitura. Se tem dois violinos, ser\u00e3o \"Violino I\" e \"Violino II\" \u2014 nunca \"Violino\" repetido." },
        "busca": { "title": "Busca e filtros inteligentes", "body": "Encontre qualquer m\u00fasica em segundos. Pesquise por nome ou filtre por categoria, compositor e arranjador. Perfeito para acervos grandes." },
        "ordem": { "title": "Ordem profissional de orquestra", "body": "Ao expandir uma m\u00fasica, as partituras aparecem na ordem padr\u00e3o de grade: madeiras, metais, percuss\u00e3o, teclados e cordas \u2014 igual ao Finale." },
        "favoritos": { "title": "Favoritos e se\u00e7\u00f5es r\u00e1pidas", "body": "Marque m\u00fasicas como favoritas e acesse se\u00e7\u00f5es como \"N\u00e3o permitidas\" ou \"Sem partituras\" com um clique. Tudo ao alcance da m\u00e3o." },
        "ferramentas": { "title": "Use as ferramentas que voc\u00ea j\u00e1 conhece", "body": "Funciona com Finale, MuseScore, Sibelius, Dorico e qualquer programa que gere PDF, MusicXML ou MIDI. Voc\u00ea continua trabalhando do seu jeito, sem mudar nada." },
        "maestro": { "title": "Computador do Maestro", "body": "Controle total do repert\u00f3rio: adicione, edite e remova m\u00fasicas e partituras. Defina quais v\u00e3o para o ensaio e quais ficam s\u00f3 com voc\u00ea." },
        "ensaio": { "title": "Computador de Ensaio", "body": "Consulta r\u00e1pida para a sala de ensaio. M\u00fasicos s\u00f3 visualizam o repert\u00f3rio, sem risco de alterar ou remover nada sem querer." },
        "nuvem": { "title": "Nuvem gratuita", "body": "Sincronize pelo Google Drive ou Koofr sem custo adicional. Arquivos s\u00e3o compactados antes do envio, ocupando menos espa\u00e7o e sendo mais r\u00e1pidos." },
        "backup": { "title": "Computador quebrou? Nada se perdeu", "body": "Formatou ou trocou de m\u00e1quina? Suas partituras, categorias, compositores e arranjadores est\u00e3o seguros. Com um clique, tudo volta ao lugar." },
        "arquivos": { "title": "Seus arquivos, suas regras", "body": "O Ottavada n\u00e3o renomeia pastas nem arquivos, n\u00e3o movimenta nada e n\u00e3o imp\u00f5e formatos propriet\u00e1rios. Sua organiza\u00e7\u00e3o manual \u00e9 respeitada e incentivada." },
        "desinstalou": { "title": "Desinstalou? Seus arquivos continuam l\u00e1", "body": "Se um dia decidir n\u00e3o usar mais, suas partituras continuam exatamente onde estavam \u2014 organizadas, acess\u00edveis e sem nenhuma depend\u00eancia do Ottavada." },
        "escolha": { "title": "Voc\u00ea decide o que vai para o ensaio", "body": "Nem tudo precisa ir para o computador do ensaio. Voc\u00ea escolhe: essa partitura pode ser enviada, bloqueada ou ignorada. Voc\u00ea no controle, sempre." },
        "idiomas": { "title": "Multi-idiomas", "body": "Suporte para portugu\u00eas, ingl\u00eas, espanhol, franc\u00eas e alem\u00e3o em desenvolvimento, para atender m\u00fasicos de qualquer lugar." },
        "atualizacoes": { "title": "Atualiza\u00e7\u00f5es autom\u00e1ticas", "body": "O aplicativo se mant\u00e9m atualizado sozinho, mas voc\u00ea decide quando aplicar a atualiza\u00e7\u00e3o. Nada \u00e9 for\u00e7ado." },
        "copias": { "title": "C\u00f3pias locais", "body": "As partituras ficam salvas no seu computador. Acesse tudo mesmo sem internet durante o ensaio. R\u00e1pido e sem depender de nuvem." }
      },
      "footer": { "email": "Email de contato: ottavada@hotmail.com", "dev": "Desenvolvido por Rhafaell (faell4328)" },
      "chat": {
        "welcome": "Ol\u00e1! Como posso ajudar? Envie sua mensagem.",
        "placeholder": "Digite sua mensagem...",
        "statusOnline": "Online",
        "statusTyping": "Digitando...",
        "statusSubtitle": "O OtavoBot \u00e9 um LLM, que pode demorar alguns segundos ou minutos dependendo da sua pergunta, por favor tenha paci\u00eancia.",
        "tooltip": "Caso tenha alguma d\u00favida, pergunte ao nosso chatbot",
        "tooltips": [
          "Caso tenha alguma d\u00favida, pergunte ao nosso chatbot",
          "Caso tenha alguma d\u00favida sobre a ferramenta, pode me perguntar",
          "Precisa de ajuda com o Ottavada? Pergunte aqui!"
        ],
        "error": "Desculpe, ocorreu um erro. Tente novamente.",
        "ariaLabel": "Abrir chat",
        "ariaClose": "Fechar chat",
        "ariaSend": "Enviar",
        "ariaMsg": "Mensagem"
      },
      "thanks": {
        "title": "Ottavada \u2014 Obrigado",
        "description": "Obrigado pelo interesse no Ottavada.",
        "heading": "Obrigado pelo interesse na ferramenta!",
        "countdown": "Voc\u00ea ser\u00e1 redirecionado \u00e0 p\u00e1gina inicial em {seconds} segundos..."
      },
      "alt": { "logo": "Ottavada" },
      "mobileCta": "Baixar o Ottavada"
    },
    "en": {
      "lang": "en",
      "langLabel": "English",
      "meta": {
        "title": "Ottavada \u2014 Organize and sync your orchestra's sheet music",
        "description": "Ottavada is free software to manage, organize and sync sheet music. For Windows 10 and 11.",
        "ogTitle": "Ottavada \u2014 Organize and Sync Sheet Music",
        "ogDescription": "Free software to manage and sync your orchestra's sheet music."
      },
      "brand": { "name": "Ottavada", "tagline": "Your sheet music conductor" },
      "nav": { "download": "Download now" },
      "hero": {
        "line1": "Find, organize and share",
        "line2": "sheet music without duplication across your computers.",
        "subtitle": "Manage, organize and sync your orchestra's sheet music. No complications, no changing the way you work.",
        "cta": "Download for free",
        "ctaNote": "For Windows 10 and 11 (x32 and x64)"
      },
      "sections": {
        "descricao": { "kicker": "Why Ottavada?", "text": "Sheet music management in orchestras is still done manually: email exchanges, pen drives, duplicate folders and sheets, and constant risk of losing the right version. Ottavada solves this." },
        "organizacao": { "kicker": "Organization", "heading": "Never waste time looking for the right sheet music again." },
        "sincronizacao": { "kicker": "Sync", "heading": "One app. Two usage modes." },
        "liberdade": { "kicker": "Freedom", "heading": "You're not locked into the tool." },
      },
      "benefits": {
        "indexacao": { "title": "Smart indexing", "body": "Just select a folder with sheet music. Ottavada identifies the song name from the directory and suggests instruments from the files \u2014 no manual entry needed." },
        "duplicatas": { "title": "No more duplicates", "body": "The system does not allow two identical names for a piece or sheet. If there are two violins, they will be \"Violin I\" and \"Violin II\" \u2014 never a duplicate \"Violin\"." },
        "busca": { "title": "Smart search and filters", "body": "Find any piece in seconds. Search by name or filter by category, composer, and arranger. Perfect for large collections." },
        "ordem": { "title": "Professional orchestra order", "body": "When expanding a piece, sheet music appears in standard score order: woodwinds, brass, percussion, keyboards and strings \u2014 just like Finale." },
        "favoritos": { "title": "Favorites and quick sections", "body": "Mark pieces as favorites and access sections like \"Not allowed\" or \"No sheet music\" with a single click. Everything at your fingertips." },
        "ferramentas": { "title": "Use the tools you already know", "body": "Works with Finale, MuseScore, Sibelius, Dorico and any program that generates PDF, MusicXML or MIDI. You keep working your way, with no changes." },
        "maestro": { "title": "Conductor's Computer", "body": "Full repertoire control: add, edit and remove pieces and sheet music. Choose what goes to rehearsal and what stays with you." },
        "ensaio": { "title": "Rehearsal Computer", "body": "Quick reference for the rehearsal room. Musicians can only view the repertoire, with no risk of accidentally changing or deleting anything." },
        "nuvem": { "title": "Free cloud sync", "body": "Sync via Google Drive or Koofr at no extra cost. Files are compressed before upload, taking up less space and being faster." },
        "backup": { "title": "Computer broke? Nothing is lost", "body": "Formatted or switched machines? Your sheet music, categories, composers and arrangers are safe. One click and everything is back in place." },
        "arquivos": { "title": "Your files, your rules", "body": "Ottavada does not rename folders or files, does not move anything, and does not impose proprietary formats. Your manual organization is respected and encouraged." },
        "desinstalou": { "title": "Uninstalled? Your files stay", "body": "If you ever decide to stop using it, your sheet music stays exactly where it was \u2014 organized, accessible, and with no dependency on Ottavada." },
        "escolha": { "title": "You decide what goes to rehearsal", "body": "Not everything needs to go to the rehearsal computer. You choose: this sheet can be sent, blocked, or ignored. You're in control, always." },
        "idiomas": { "title": "Multi-language", "body": "Support for Portuguese, English, Spanish, French and German in development, to serve musicians from anywhere." },
        "atualizacoes": { "title": "Automatic updates", "body": "The app keeps itself up to date automatically, but you decide when to apply the update. Nothing is forced." },
        "copias": { "title": "Local copies", "body": "Sheet music is saved on your computer. Access everything even without internet during rehearsal. Fast and no cloud dependency." }
      },
      "footer": { "email": "Contact email: ottavada@hotmail.com", "dev": "Developed by Rhafaell (faell4328)" },
      "chat": {
        "welcome": "Hello! How can I help? Send your message.",
        "placeholder": "Type your message...",
        "statusOnline": "Online",
        "statusTyping": "Typing...",
        "statusSubtitle": "OtavoBot is an LLM, which may take a few seconds or minutes depending on your question, please be patient.",
        "tooltip": "Have any questions? Ask our chatbot",
        "tooltips": [
          "Have any questions? Ask our chatbot",
          "If you have any questions about the tool, feel free to ask me",
          "Need help with Ottavada? Ask here!"
        ],
        "error": "Sorry, an error occurred. Please try again.",
        "ariaLabel": "Open chat",
        "ariaClose": "Close chat",
        "ariaSend": "Send",
        "ariaMsg": "Message"
      },
      "thanks": {
        "title": "Ottavada \u2014 Thank You",
        "description": "Thank you for your interest in Ottavada.",
        "heading": "Thank you for your interest in the tool!",
        "countdown": "You will be redirected to the homepage in {seconds} seconds..."
      },
      "alt": { "logo": "Ottavada" },
      "mobileCta": "Download Ottavada"
    },
    "es": {
      "lang": "es",
      "langLabel": "Espa\u00f1ol",
      "meta": {
        "title": "Ottavada \u2014 Organiza y sincroniza las partituras de tu orquesta",
        "description": "Ottavada es un software gratuito para gestionar, organizar y sincronizar partituras. Para Windows 10 y 11.",
        "ogTitle": "Ottavada \u2014 Organiza y Sincroniza Partituras",
        "ogDescription": "Software gratuito para gestionar y sincronizar las partituras de tu orquesta."
      },
      "brand": { "name": "Ottavada", "tagline": "Tu director de partituras" },
      "nav": { "download": "Descargar ahora" },
      "hero": {
        "line1": "Encuentra, organiza y comparte",
        "line2": "partituras sin duplicados entre tus ordenadores.",
        "subtitle": "Gestiona, organiza y sincroniza las partituras de tu orquesta. Sin complicaciones, sin cambiar tu forma de trabajar.",
        "cta": "Descargar gratis",
        "ctaNote": "Para Windows 10 y 11 (x32 y x64)"
      },
      "sections": {
        "descricao": { "kicker": "\u00bfPor qu\u00e9 Ottavada?", "text": "La gesti\u00f3n de partituras en orquestas todav\u00eda se hace manualmente: intercambio de correos, pen drives, carpetas y partituras duplicadas, y riesgo constante de perder la versi\u00f3n correcta. Ottavada lo resuelve." },
        "organizacao": { "kicker": "Organizaci\u00f3n", "heading": "Nunca m\u00e1s pierdas tiempo buscando la partitura correcta." },
        "sincronizacao": { "kicker": "Sincronizaci\u00f3n", "heading": "Una sola aplicaci\u00f3n. Dos modos de uso." },
        "liberdade": { "kicker": "Libertad", "heading": "No est\u00e1s atado a la herramienta." },
      },
      "benefits": {
        "indexacao": { "title": "Indexaci\u00f3n inteligente", "body": "Solo selecciona una carpeta con partituras. Ottavada identifica el nombre de la canci\u00f3n por el directorio y sugiere los instrumentos a partir de los archivos \u2014 sin registro manual." },
        "duplicatas": { "title": "Adi\u00f3s a los duplicados", "body": "El sistema no permite dos nombres iguales de canci\u00f3n o partitura. Si hay dos violines, ser\u00e1n \"Viol\u00edn I\" y \"Viol\u00edn II\" \u2014 nunca un \"Viol\u00edn\" duplicado." },
        "busca": { "title": "B\u00fasqueda y filtros inteligentes", "body": "Encuentra cualquier canci\u00f3n en segundos. Busca por nombre o filtra por categor\u00eda, compositor y arreglista. Perfecto para colecciones grandes." },
        "ordem": { "title": "Orden profesional de orquesta", "body": "Al expandir una canci\u00f3n, las partituras aparecen en el orden est\u00e1ndar de partitura: maderas, metales, percusi\u00f3n, teclados y cuerdas \u2014 igual que Finale." },
        "favoritos": { "title": "Favoritos y secciones r\u00e1pidas", "body": "Marca canciones como favoritas y accede a secciones como \"No permitidas\" o \"Sin partituras\" con un solo clic. Todo al alcance de la mano." },
        "ferramentas": { "title": "Usa las herramientas que ya conoces", "body": "Funciona con Finale, MuseScore, Sibelius, Dorico y cualquier programa que genere PDF, MusicXML o MIDI. Sigues trabajando a tu manera, sin cambiar nada." },
        "maestro": { "title": "Computadora del Director", "body": "Control total del repertorio: a\u00f1ade, edita y elimina canciones y partituras. Define cu\u00e1les van al ensayo y cu\u00e1les se quedan solo contigo." },
        "ensaio": { "title": "Computadora de Ensayo", "body": "Consulta r\u00e1pida para la sala de ensayo. Los m\u00fasicos solo visualizan el repertorio, sin riesgo de alterar o eliminar nada sin querer." },
        "nuvem": { "title": "Nube gratuita", "body": "Sincroniza mediante Google Drive o Koofr sin costo adicional. Los archivos se comprimen antes del env\u00edo, ocupando menos espacio y siendo m\u00e1s r\u00e1pidos." },
        "backup": { "title": "\u00bfComputadora rota? Nada se perdi\u00f3", "body": "\u00bfFormateaste o cambiaste de m\u00e1quina? Tus partituras, categor\u00edas, compositores y arreglistas est\u00e1n seguros. Con un clic, todo vuelve a su lugar." },
        "arquivos": { "title": "Tus archivos, tus reglas", "body": "Ottavada no renombra carpetas ni archivos, no mueve nada y no impone formatos propietarios. Tu organizaci\u00f3n manual es respetada e incentivada." },
        "desinstalou": { "title": "\u00bfDesinstalado? Tus archivos siguen all\u00ed", "body": "Si alg\u00fan d\u00eda decides dejar de usarlo, tus partituras siguen exactamente donde estaban \u2014 organizadas, accesibles y sin ninguna dependencia de Ottavada." },
        "escolha": { "title": "T\u00fa decides qu\u00e9 va al ensayo", "body": "No todo necesita ir a la computadora de ensayo. T\u00fa eliges: esta partitura puede ser enviada, bloqueada o ignorada. T\u00fa tienes el control, siempre." },
        "idiomas": { "title": "Multi-idioma", "body": "Soporte para portugu\u00e9s, ingl\u00e9s, espa\u00f1ol, franc\u00e9s y alem\u00e1n en desarrollo, para atender a m\u00fasicos de cualquier lugar." },
        "atualizacoes": { "title": "Actualizaciones autom\u00e1ticas", "body": "La aplicaci\u00f3n se mantiene actualizada sola, pero t\u00fa decides cu\u00e1ndo aplicar la actualizaci\u00f3n. Nada es forzado." },
        "copias": { "title": "Copias locales", "body": "Las partituras se guardan en tu computadora. Accede a todo incluso sin internet durante el ensayo. R\u00e1pido y sin depender de la nube." }
      },
      "footer": { "email": "Email de contacto: ottavada@hotmail.com", "dev": "Desarrollado por Rhafaell (faell4328)" },
      "chat": {
        "welcome": "\u00a1Hola! \u00bfC\u00f3mo puedo ayudar? Env\u00eda tu mensaje.",
        "placeholder": "Escribe tu mensaje...",
        "statusOnline": "En l\u00ednea",
        "statusTyping": "Escribiendo...",
        "statusSubtitle": "OtavoBot es un LLM, puede tardar unos segundos o minutos dependiendo de tu pregunta, por favor ten paciencia.",
        "tooltip": "\u00bfTienes alguna duda? Pregunta a nuestro chatbot",
        "tooltips": [
          "\u00bfTienes alguna duda? Pregunta a nuestro chatbot",
          "Si tienes alguna duda sobre la herramienta, puedes preguntarme",
          "\u00bfNecesitas ayuda con Ottavada? \u00a1Pregunta aqu\u00ed!"
        ],
        "error": "Lo siento, ocurri\u00f3 un error. Intenta de nuevo.",
        "ariaLabel": "Abrir chat",
        "ariaClose": "Cerrar chat",
        "ariaSend": "Enviar",
        "ariaMsg": "Mensaje"
      },
      "thanks": {
        "title": "Ottavada \u2014 Gracias",
        "description": "Gracias por tu inter\u00e9s en Ottavada.",
        "heading": "\u00a1Gracias por tu inter\u00e9s en la herramienta!",
        "countdown": "Ser\u00e1s redirigido a la p\u00e1gina principal en {seconds} segundos..."
      },
      "alt": { "logo": "Ottavada" },
      "mobileCta": "Descargar Ottavada"
    },
    "fr": {
      "lang": "fr",
      "langLabel": "Fran\u00e7ais",
      "meta": {
        "title": "Ottavada \u2014 Organisez et synchronisez les partitions de votre orchestre",
        "description": "Ottavada est un logiciel gratuit pour g\u00e9rer, organiser et synchroniser des partitions. Pour Windows 10 et 11.",
        "ogTitle": "Ottavada \u2014 Organisez et Synchronisez des Partitions",
        "ogDescription": "Logiciel gratuit pour g\u00e9rer et synchroniser les partitions de votre orchestre."
      },
      "brand": { "name": "Ottavada", "tagline": "Votre chef de partitions" },
      "nav": { "download": "T\u00e9l\u00e9charger" },
      "hero": {
        "line1": "Trouvez, organisez et partagez",
        "line2": "des partitions sans doublons entre vos ordinateurs.",
        "subtitle": "G\u00e9rez, organisez et synchronisez les partitions de votre orchestre. Sans complications, sans changer votre fa\u00e7on de travailler.",
        "cta": "T\u00e9l\u00e9charger gratuitement",
        "ctaNote": "Pour Windows 10 et 11 (x32 et x64)"
      },
      "sections": {
        "descricao": { "kicker": "Pourquoi Ottavada\u00a0?", "text": "La gestion des partitions dans les orchestres se fait encore manuellement\u00a0: \u00e9changes d\u2019e-mails, cl\u00e9s USB, dossiers et partitions en double, et risque constant de perdre la bonne version. Ottavada r\u00e9sout cela." },
        "organizacao": { "kicker": "Organisation", "heading": "Ne perdez plus jamais de temps \u00e0 chercher la bonne partition." },
        "sincronizacao": { "kicker": "Synchronisation", "heading": "Une seule application. Deux modes d\u2019utilisation." },
        "liberdade": { "kicker": "Libert\u00e9", "heading": "Vous n\u2019\u00eates pas prisonnier de l\u2019outil." },
      },
      "benefits": {
        "indexacao": { "title": "Indexation intelligente", "body": "S\u00e9lectionnez simplement un dossier contenant des partitions. Ottavada identifie le nom du morceau par le r\u00e9pertoire et sugg\u00e8re les instruments \u00e0 partir des fichiers \u2014 sans saisie manuelle." },
        "duplicatas": { "title": "Fini les doublons", "body": "Le syst\u00e8me n\u2019autorise pas deux noms identiques de morceau ou de partition. S\u2019il y a deux violons, ce seront \u00ab\u00a0Violon I\u00a0\u00bb et \u00ab\u00a0Violon II\u00a0\u00bb \u2014 jamais un \u00ab\u00a0Violon\u00a0\u00bb en double." },
        "busca": { "title": "Recherche et filtres intelligents", "body": "Trouvez n\u2019importe quel morceau en quelques secondes. Recherchez par nom ou filtrez par cat\u00e9gorie, compositeur et arrangeur. Parfait pour les grandes collections." },
        "ordem": { "title": "Ordre professionnel d\u2019orchestre", "body": "Lorsque vous d\u00e9veloppez un morceau, les partitions apparaissent dans l\u2019ordre standard de la partition\u00a0: bois, cuivres, percussions, claviers et cordes \u2014 comme dans Finale." },
        "favoritos": { "title": "Favoris et sections rapides", "body": "Marquez des morceaux comme favoris et acc\u00e9dez aux sections comme \u00ab\u00a0Non autoris\u00e9es\u00a0\u00bb ou \u00ab\u00a0Sans partitions\u00a0\u00bb en un seul clic. Tout \u00e0 port\u00e9e de main." },
        "ferramentas": { "title": "Utilisez les outils que vous connaissez d\u00e9j\u00e0", "body": "Fonctionne avec Finale, MuseScore, Sibelius, Dorico et tout programme g\u00e9n\u00e9rant des PDF, MusicXML ou MIDI. Vous continuez \u00e0 travailler \u00e0 votre fa\u00e7on, sans rien changer." },
        "maestro": { "title": "Ordinateur du Chef", "body": "Contr\u00f4le total du r\u00e9pertoire\u00a0: ajoutez, modifiez et supprimez des morceaux et partitions. D\u00e9finissez ce qui va en r\u00e9p\u00e9tition et ce qui reste avec vous." },
        "ensaio": { "title": "Ordinateur de R\u00e9p\u00e9tition", "body": "R\u00e9f\u00e9rence rapide pour la salle de r\u00e9p\u00e9tition. Les musiciens ne peuvent que consulter le r\u00e9pertoire, sans risque de modifier ou supprimer quoi que ce soit par erreur." },
        "nuvem": { "title": "Cloud gratuit", "body": "Synchronisez via Google Drive ou Koofr sans frais suppl\u00e9mentaires. Les fichiers sont compress\u00e9s avant l\u2019envoi, occupant moins d\u2019espace et \u00e9tant plus rapides." },
        "backup": { "title": "Ordinateur cass\u00e9\u00a0? Rien n\u2019est perdu", "body": "Format\u00e9 ou chang\u00e9 de machine\u00a0? Vos partitions, cat\u00e9gories, compositeurs et arrangeurs sont en s\u00e9curit\u00e9. Un clic et tout revient \u00e0 sa place." },
        "arquivos": { "title": "Vos fichiers, vos r\u00e8gles", "body": "Ottavada ne renomme ni les dossiers ni les fichiers, ne d\u00e9place rien et n\u2019impose pas de formats propri\u00e9taires. Votre organisation manuelle est respect\u00e9e et encourag\u00e9e." },
        "desinstalou": { "title": "D\u00e9sinstall\u00e9\u00a0? Vos fichiers restent", "body": "Si vous d\u00e9cidez un jour de ne plus l\u2019utiliser, vos partitions restent exactement l\u00e0 o\u00f9 elles \u00e9taient \u2014 organis\u00e9es, accessibles et sans aucune d\u00e9pendance \u00e0 Ottavada." },
        "escolha": { "title": "Vous d\u00e9cidez de ce qui va en r\u00e9p\u00e9tition", "body": "Tout ne doit pas aller sur l\u2019ordinateur de r\u00e9p\u00e9tition. Vous choisissez\u00a0: cette partition peut \u00eatre envoy\u00e9e, bloqu\u00e9e ou ignor\u00e9e. Vous avez le contr\u00f4le, toujours." },
        "idiomas": { "title": "Multi-langues", "body": "Prise en charge du portugais, de l\u2019anglais, de l\u2019espagnol, du fran\u00e7ais et de l\u2019allemand en cours de d\u00e9veloppement, pour servir les musiciens du monde entier." },
        "atualizacoes": { "title": "Mises \u00e0 jour automatiques", "body": "L\u2019application se met \u00e0 jour automatiquement, mais vous d\u00e9cidez quand appliquer la mise \u00e0 jour. Rien n\u2019est impos\u00e9." },
        "copias": { "title": "Copies locales", "body": "Les partitions sont enregistr\u00e9es sur votre ordinateur. Acc\u00e9dez \u00e0 tout m\u00eame sans internet pendant la r\u00e9p\u00e9tition. Rapide et sans d\u00e9pendance au cloud." }
      },
      "footer": { "email": "Email de contact\u00a0: ottavada@hotmail.com", "dev": "D\u00e9velopp\u00e9 par Rhafaell (faell4328)" },
      "chat": {
        "welcome": "Bonjour\u00a0! Comment puis-je vous aider\u00a0? Envoyez votre message.",
        "placeholder": "\u00c9crivez votre message...",
        "statusOnline": "En ligne",
        "statusTyping": "\u00c9crit...",
        "statusSubtitle": "OtavoBot est un LLM, cela peut prendre quelques secondes ou minutes selon votre question, merci de votre patience.",
        "tooltip": "Vous avez des questions\u00a0? Demandez \u00e0 notre chatbot",
        "tooltips": [
          "Vous avez des questions\u00a0? Demandez \u00e0 notre chatbot",
          "Si vous avez des questions sur l\u2019outil, n\u2019h\u00e9sitez pas \u00e0 me demander",
          "Besoin d\u2019aide avec Ottavada\u00a0? Demandez ici\u00a0!"
        ],
        "error": "D\u00e9sol\u00e9, une erreur s\u2019est produite. Veuillez r\u00e9essayer.",
        "ariaLabel": "Ouvrir le chat",
        "ariaClose": "Fermer le chat",
        "ariaSend": "Envoyer",
        "ariaMsg": "Message"
      },
      "thanks": {
        "title": "Ottavada \u2014 Merci",
        "description": "Merci de votre int\u00e9r\u00eat pour Ottavada.",
        "heading": "Merci de votre int\u00e9r\u00eat pour l\u2019outil\u00a0!",
        "countdown": "Vous serez redirig\u00e9 vers la page d\u2019accueil dans {seconds} secondes..."
      },
      "alt": { "logo": "Ottavada" },
      "mobileCta": "T\u00e9l\u00e9charger Ottavada"
    },
    "it": {
      "lang": "it",
      "langLabel": "Italiano",
      "meta": {
        "title": "Ottavada \u2014 Organizza e sincronizza gli spartiti della tua orchestra",
        "description": "Ottavada \u00e8 un software gratuito per gestire, organizzare e sincronizzare spartiti. Per Windows 10 e 11.",
        "ogTitle": "Ottavada \u2014 Organizza e Sincronizza Spartiti",
        "ogDescription": "Software gratuito per gestire e sincronizzare gli spartiti della tua orchestra."
      },
      "brand": { "name": "Ottavada", "tagline": "Il tuo direttore di spartiti" },
      "nav": { "download": "Scarica ora" },
      "hero": {
        "line1": "Trova, organizza e condividi",
        "line2": "spartiti senza duplicati tra i tuoi computer.",
        "subtitle": "Gestisci, organizza e sincronizza gli spartiti della tua orchestra. Senza complicazioni, senza cambiare il tuo modo di lavorare.",
        "cta": "Scarica gratuitamente",
        "ctaNote": "Per Windows 10 e 11 (x32 e x64)"
      },
      "sections": {
        "descricao": { "kicker": "Perch\u00e9 Ottavada?", "text": "La gestione degli spartiti nelle orchestre \u00e8 ancora fatta manualmente: scambi di email, pen drive, cartelle e spartiti duplicati, e il rischio costante di perdere la versione giusta. Ottavada risolve questo." },
        "organizacao": { "kicker": "Organizzazione", "heading": "Non perdere mai pi\u00f9 tempo a cercare lo spartito giusto." },
        "sincronizacao": { "kicker": "Sincronizzazione", "heading": "Una sola app. Due modalit\u00e0 d\u2019uso." },
        "liberdade": { "kicker": "Libert\u00e0", "heading": "Non sei vincolato allo strumento." },
      },
      "benefits": {
        "indexacao": { "title": "Indicizzazione intelligente", "body": "Basta selezionare una cartella con gli spartiti. Ottavada identifica il nome del brano dalla directory e suggerisce gli strumenti dai file \u2014 senza inserimento manuale." },
        "duplicatas": { "title": "Basta duplicati", "body": "Il sistema non permette due nomi uguali di brano o spartito. Se ci sono due violini, saranno \"Violino I\" e \"Violino II\" \u2014 mai un \"Violino\" duplicato." },
        "busca": { "title": "Ricerca e filtri intelligenti", "body": "Trova qualsiasi brano in pochi secondi. Cerca per nome o filtra per categoria, compositore e arrangiatore. Perfetto per grandi raccolte." },
        "ordem": { "title": "Ordine professionale d\u2019orchestra", "body": "Quando espandi un brano, gli spartiti appaiono nell\u2019ordine standard della partitura: legni, ottoni, percussioni, tastiere e archi \u2014 proprio come Finale." },
        "favoritos": { "title": "Preferiti e sezioni rapide", "body": "Segna i brani come preferiti e accedi a sezioni come \"Non consentite\" o \"Senza spartiti\" con un solo clic. Tutto a portata di mano." },
        "ferramentas": { "title": "Usa gli strumenti che gi\u00e0 conosci", "body": "Funziona con Finale, MuseScore, Sibelius, Dorico e qualsiasi programma che generi PDF, MusicXML o MIDI. Continui a lavorare a modo tuo, senza cambiare nulla." },
        "maestro": { "title": "Computer del Direttore", "body": "Controllo totale del repertorio: aggiungi, modifica e rimuovi brani e spartiti. Decidi cosa va alle prove e cosa resta solo con te." },
        "ensaio": { "title": "Computer delle Prove", "body": "Consultazione rapida per la sala prove. I musicisti possono solo visualizzare il repertorio, senza il rischio di modificare o eliminare nulla per sbaglio." },
        "nuvem": { "title": "Cloud gratuito", "body": "Sincronizza tramite Google Drive o Koofr senza costi aggiuntivi. I file vengono compressi prima dell\u2019invio, occupando meno spazio ed essendo pi\u00f9 veloci." },
        "backup": { "title": "Computer rotto? Nulla \u00e8 perduto", "body": "Formattato o cambiato macchina? I tuoi spartiti, categorie, compositori e arrangiatori sono al sicuro. Un clic e tutto torna al suo posto." },
        "arquivos": { "title": "I tuoi file, le tue regole", "body": "Ottavada non rinomina cartelle n\u00e9 file, non sposta nulla e non impone formati proprietari. La tua organizzazione manuale \u00e8 rispettata e incoraggiata." },
        "desinstalou": { "title": "Disinstallato? I tuoi file rimangono", "body": "Se un giorno decidi di non usarlo pi\u00f9, i tuoi spartiti rimangono esattamente dove erano \u2014 organizzati, accessibili e senza alcuna dipendenza da Ottavada." },
        "escolha": { "title": "Decidi tu cosa va alle prove", "body": "Non tutto deve andare sul computer delle prove. Scegli tu: questo spartito pu\u00f2 essere inviato, bloccato o ignorato. Tu hai il controllo, sempre." },
        "idiomas": { "title": "Multi-lingua", "body": "Supporto per portoghese, inglese, spagnolo, francese e tedesco in fase di sviluppo, per servire musicisti di tutto il mondo." },
        "atualizacoes": { "title": "Aggiornamenti automatici", "body": "L\u2019app si mantiene aggiornata da sola, ma decidi tu quando applicare l\u2019aggiornamento. Nulla \u00e8 forzato." },
        "copias": { "title": "Copie locali", "body": "Gli spartiti sono salvati sul tuo computer. Accedi a tutto anche senza internet durante le prove. Veloce e senza dipendenza dal cloud." }
      },
      "footer": { "email": "Email di contatto: ottavada@hotmail.com", "dev": "Sviluppato da Rhafaell (faell4328)" },
      "chat": {
        "welcome": "Ciao! Come posso aiutarti? Invia il tuo messaggio.",
        "placeholder": "Scrivi il tuo messaggio...",
        "statusOnline": "Online",
        "statusTyping": "Sta scrivendo...",
        "statusSubtitle": "OtavoBot \u00e8 un LLM, potrebbe impiegare alcuni secondi o minuti a seconda della tua domanda, per favore abbi pazienza.",
        "tooltip": "Hai qualche domanda? Chiedi al nostro chatbot",
        "tooltips": [
          "Hai qualche domanda? Chiedi al nostro chatbot",
          "Se hai domande sullo strumento, puoi chiedermelo",
          "Hai bisogno di aiuto con Ottavada? Chiedi qui!"
        ],
        "error": "Spiacenti, si \u00e8 verificato un errore. Riprova.",
        "ariaLabel": "Apri chat",
        "ariaClose": "Chiudi chat",
        "ariaSend": "Invia",
        "ariaMsg": "Messaggio"
      },
      "thanks": {
        "title": "Ottavada \u2014 Grazie",
        "description": "Grazie per il tuo interesse in Ottavada.",
        "heading": "Grazie per il tuo interesse nello strumento!",
        "countdown": "Sarai reindirizzato alla home page tra {seconds} secondi..."
      },
      "alt": { "logo": "Ottavada" },
      "mobileCta": "Scarica Ottavada"
    },
    "de": {
      "lang": "de",
      "langLabel": "Deutsch",
      "meta": {
        "title": "Ottavada \u2014 Organisieren und synchronisieren Sie die Noten Ihres Orchesters",
        "description": "Ottavada ist eine kostenlose Software zum Verwalten, Organisieren und Synchronisieren von Noten. F\u00fcr Windows 10 und 11.",
        "ogTitle": "Ottavada \u2014 Noten organisieren und synchronisieren",
        "ogDescription": "Kostenlose Software zum Verwalten und Synchronisieren der Noten Ihres Orchesters."
      },
      "brand": { "name": "Ottavada", "tagline": "Ihr Noten-Dirigent" },
      "nav": { "download": "Jetzt herunterladen" },
      "hero": {
        "line1": "Finden, organisieren und teilen Sie",
        "line2": "Noten ohne Duplikate zwischen Ihren Computern.",
        "subtitle": "Verwalten, organisieren und synchronisieren Sie die Noten Ihres Orchesters. Ohne Komplikationen, ohne Ihre Arbeitsweise zu \u00e4ndern.",
        "cta": "Kostenlos herunterladen",
        "ctaNote": "F\u00fcr Windows 10 und 11 (x32 und x64)"
      },
      "sections": {
        "descricao": { "kicker": "Warum Ottavada?", "text": "Die Notenverwaltung in Orchestern erfolgt immer noch manuell: E-Mail-Austausch, USB-Sticks, doppelte Ordner und Noten sowie die st\u00e4ndige Gefahr, die richtige Version zu verlieren. Ottavada l\u00f6st das." },
        "organizacao": { "kicker": "Organisation", "heading": "Verschwenden Sie nie wieder Zeit mit der Suche nach der richtigen Note." },
        "sincronizacao": { "kicker": "Synchronisation", "heading": "Eine App. Zwei Nutzungsmodi." },
        "liberdade": { "kicker": "Freiheit", "heading": "Sie sind nicht an das Werkzeug gebunden." },
      },
      "benefits": {
        "indexacao": { "title": "Intelligente Indizierung", "body": "W\u00e4hlen Sie einfach einen Ordner mit Noten aus. Ottavada erkennt den Namen des St\u00fccks anhand des Verzeichnisses und schl\u00e4gt Instrumente aus den Dateien vor \u2014 ohne manuelle Eingabe." },
        "duplicatas": { "title": "Schluss mit Duplikaten", "body": "Das System erlaubt keine zwei gleichen Namen f\u00fcr ein St\u00fcck oder eine Note. Wenn es zwei Violinen gibt, hei\u00dfen sie \u201eVioline I\u201c und \u201eVioline II\u201c \u2014 niemals eine doppelte \u201eVioline\u201c." },
        "busca": { "title": "Intelligente Suche und Filter", "body": "Finden Sie jedes St\u00fcck in Sekunden. Suchen Sie nach Namen oder filtern Sie nach Kategorie, Komponist und Arrangeur. Perfekt f\u00fcr gro\u00dfe Sammlungen." },
        "ordem": { "title": "Professionelle Orchesterordnung", "body": "Beim Erweitern eines St\u00fccks erscheinen die Noten in der Standard-Partituranordnung: Holzbl\u00e4ser, Blechbl\u00e4ser, Schlagzeug, Tasteninstrumente und Streicher \u2014 genau wie bei Finale." },
        "favoritos": { "title": "Favoriten und Schnellbereiche", "body": "Markieren Sie St\u00fccke als Favoriten und greifen Sie mit einem Klick auf Bereiche wie \u201eNicht erlaubt\u201c oder \u201eKeine Noten\u201c zu. Alles griffbereit." },
        "ferramentas": { "title": "Nutzen Sie die Werkzeuge, die Sie bereits kennen", "body": "Funktioniert mit Finale, MuseScore, Sibelius, Dorico und jedem Programm, das PDF, MusicXML oder MIDI erzeugt. Sie arbeiten weiter wie gewohnt, ohne etwas zu \u00e4ndern." },
        "maestro": { "title": "Computer des Dirigenten", "body": "Volle Kontrolle \u00fcber das Repertoire: F\u00fcgen Sie St\u00fccke und Noten hinzu, bearbeiten und entfernen Sie sie. Legen Sie fest, was zur Probe geht und was nur bei Ihnen bleibt." },
        "ensaio": { "title": "Proben-Computer", "body": "Schnelle Referenz f\u00fcr den Probenraum. Musiker k\u00f6nnen das Repertoire nur einsehen, ohne Gefahr, versehentlich etwas zu \u00e4ndern oder zu l\u00f6schen." },
        "nuvem": { "title": "Kostenlose Cloud", "body": "Synchronisieren Sie \u00fcber Google Drive oder Koofr ohne zus\u00e4tzliche Kosten. Dateien werden vor dem Hochladen komprimiert, nehmen weniger Platz ein und sind schneller." },
        "backup": { "title": "Computer kaputt? Nichts ist verloren", "body": "Formatiert oder das Ger\u00e4t gewechselt? Ihre Noten, Kategorien, Komponisten und Arrangeure sind sicher. Ein Klick und alles ist wieder an seinem Platz." },
        "arquivos": { "title": "Ihre Dateien, Ihre Regeln", "body": "Ottavada benennt weder Ordner noch Dateien um, verschiebt nichts und erzwingt keine propriet\u00e4ren Formate. Ihre manuelle Organisation wird respektiert und gef\u00f6rdert." },
        "desinstalou": { "title": "Deinstalliert? Ihre Dateien bleiben", "body": "Wenn Sie sich eines Tages entscheiden, es nicht mehr zu verwenden, bleiben Ihre Noten genau dort, wo sie waren \u2014 organisiert, zug\u00e4nglich und ohne Abh\u00e4ngigkeit von Ottavada." },
        "escolha": { "title": "Sie entscheiden, was zur Probe geht", "body": "Nicht alles muss auf den Proben-Computer. Sie w\u00e4hlen: Diese Note kann gesendet, blockiert oder ignoriert werden. Sie haben die Kontrolle, immer." },
        "idiomas": { "title": "Mehrsprachig", "body": "Unterst\u00fctzung f\u00fcr Portugiesisch, Englisch, Spanisch, Franz\u00f6sisch und Deutsch in Entwicklung, um Musiker aus aller Welt zu bedienen." },
        "atualizacoes": { "title": "Automatische Updates", "body": "Die App h\u00e4lt sich automatisch auf dem neuesten Stand, aber Sie entscheiden, wann das Update angewendet wird. Nichts wird erzwungen." },
        "copias": { "title": "Lokale Kopien", "body": "Die Noten werden auf Ihrem Computer gespeichert. Greifen Sie auch ohne Internet w\u00e4hrend der Probe auf alles zu. Schnell und ohne Cloud-Abh\u00e4ngigkeit." }
      },
      "footer": { "email": "Kontakt-E-Mail: ottavada@hotmail.com", "dev": "Entwickelt von Rhafaell (faell4328)" },
      "chat": {
        "welcome": "Hallo! Wie kann ich helfen? Senden Sie Ihre Nachricht.",
        "placeholder": "Schreiben Sie Ihre Nachricht...",
        "statusOnline": "Online",
        "statusTyping": "Schreibt...",
        "statusSubtitle": "OtavoBot ist ein LLM, die Antwort kann je nach Frage einige Sekunden oder Minuten dauern, bitte haben Sie Geduld.",
        "tooltip": "Haben Sie Fragen? Fragen Sie unseren Chatbot",
        "tooltips": [
          "Haben Sie Fragen? Fragen Sie unseren Chatbot",
          "Wenn Sie Fragen zum Tool haben, k\u00f6nnen Sie mich gerne fragen",
          "Brauchen Sie Hilfe mit Ottavada? Fragen Sie hier!"
        ],
        "error": "Entschuldigung, ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
        "ariaLabel": "Chat \u00f6ffnen",
        "ariaClose": "Chat schlie\u00dfen",
        "ariaSend": "Senden",
        "ariaMsg": "Nachricht"
      },
      "thanks": {
        "title": "Ottavada \u2014 Vielen Dank",
        "description": "Vielen Dank f\u00fcr Ihr Interesse an Ottavada.",
        "heading": "Vielen Dank f\u00fcr Ihr Interesse an dem Tool!",
        "countdown": "Sie werden in {seconds} Sekunden zur Startseite weitergeleitet..."
      },
      "alt": { "logo": "Ottavada" },
      "mobileCta": "Ottavada herunterladen"
    }
  };

  var SUPPORTED = ["pt-BR", "en", "es", "fr", "it", "de"];
  var DEFAULT = "en";

  function getUrlParam(name) {
    var m = window.location.search.match(new RegExp("[?&]" + name + "=([^&]*)"));
    return m ? decodeURIComponent(m[1]) : null;
  }

  function getLang() {
    var urlLang = getUrlParam("lang");
    if (urlLang && SUPPORTED.indexOf(urlLang) !== -1) return urlLang;
    var stored = localStorage.getItem("lang");
    if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
    var browser = (navigator.language || "").replace("_", "-");
    if (SUPPORTED.indexOf(browser) !== -1) return browser;
    var prefix = browser.split("-")[0];
    for (var i = 0; i < SUPPORTED.length; i++) {
      if (SUPPORTED[i].split("-")[0] === prefix) return SUPPORTED[i];
    }
    return DEFAULT;
  }

  function setLang(lang) {
    localStorage.setItem("lang", lang);
    var url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.location.href = url.toString();
  }

  function getNested(obj, path) {
    return path.split(".").reduce(function (cur, key) {
      return cur != null ? cur[key] : undefined;
    }, obj);
  }

  function apply(t) {
    var i, el, key, val;

    var els = document.querySelectorAll("[data-i18n]");
    for (i = 0; i < els.length; i++) {
      el = els[i];
      key = el.getAttribute("data-i18n");
      val = getNested(t, key);
      if (val !== undefined) el.textContent = val;
    }

    els = document.querySelectorAll("[data-i18n-placeholder]");
    for (i = 0; i < els.length; i++) {
      el = els[i];
      key = el.getAttribute("data-i18n-placeholder");
      val = getNested(t, key);
      if (val !== undefined) el.placeholder = val;
    }

    els = document.querySelectorAll("[data-i18n-aria]");
    for (i = 0; i < els.length; i++) {
      el = els[i];
      key = el.getAttribute("data-i18n-aria");
      val = getNested(t, key);
      if (val !== undefined) {
        var attr = el.getAttribute("data-i18n-aria-attr") || "aria-label";
        el.setAttribute(attr, val);
      }
    }

    els = document.querySelectorAll("[data-i18n-title]");
    for (i = 0; i < els.length; i++) {
      el = els[i];
      key = el.getAttribute("data-i18n-title");
      val = getNested(t, key);
      if (val !== undefined) el.setAttribute("title", val);
    }

    els = document.querySelectorAll("meta[data-i18n-content]");
    for (i = 0; i < els.length; i++) {
      el = els[i];
      key = el.getAttribute("data-i18n-content");
      val = getNested(t, key);
      if (val !== undefined) el.setAttribute("content", val);
    }

    document.documentElement.lang = t.lang;

    var base = window.location.origin + window.location.pathname;
    var hreflangs = [
      { lang: "en", href: base + "?lang=en" },
      { lang: "pt-BR", href: base + "?lang=pt-BR" },
      { lang: "es", href: base + "?lang=es" },
      { lang: "fr", href: base + "?lang=fr" },
      { lang: "it", href: base + "?lang=it" },
      { lang: "de", href: base + "?lang=de" },
      { lang: "x-default", href: base },
    ];
    for (i = 0; i < hreflangs.length; i++) {
      var link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = hreflangs[i].lang;
      link.href = hreflangs[i].href;
      document.head.appendChild(link);
    }

    document.documentElement.classList.add("i18n-ready");
  }

  function format(tpl, vars) {
    return tpl.replace(/\{(\w+)\}/g, function (_, k) {
      return vars[k] !== undefined ? vars[k] : "{" + k + "}";
    });
  }

  var lang = getLang();
  var translations = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT];

  window.__i18n = translations;
  window.__i18nFormat = format;
  window.__i18nGetLang = function () { return lang; };

  if (!getUrlParam("lang")) {
    var url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.location.replace(url.toString());
    return;
  }

  function initLangSwitcher() {
    var btns = document.querySelectorAll("[data-lang]");
    for (var i = 0; i < btns.length; i++) {
      var btn = btns[i];
      if (btn.getAttribute("data-lang") === lang) {
        btn.classList.add("active");
      }
      btn.addEventListener("click", function () {
        setLang(this.getAttribute("data-lang"));
      });
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    apply(translations);
    initLangSwitcher();
  });

  window.__i18nSetLang = setLang;
  window.__i18nSupported = SUPPORTED;
  window.__i18nData = TRANSLATIONS;
})();
