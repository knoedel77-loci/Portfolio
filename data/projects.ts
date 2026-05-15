import { Project } from "./types";


const projects: Project[] = [
  {
    slug: "dj-ai",
    title: "DJ AI",
    subtitle: "A system for AI-integrated live coding in real-time musical performance",

    hero: {
      media: {
        type: "image",
        src: "/Images/projects/DJs.jpg",
        alt: "DJ AI project hero image",
        caption: "Performance and interface setup",
      },
    },

    meta: [
  { label: "Year", value: "2024" },
  { label: "Type", value: "AI-assisted Livecoding tool" },
  { label: "Project", value: "University project" },
  /*{ label: "Role", value: "ROLE: Concept, System Design, Package Development, AI Integration" },
  { label: "Tools", value: "TOOLS: Pulsar · TidalCycles · SuperCollider · Hydra · OpenAI API" },*/
  { label: "Supervisor", value: "Prof. Dr. Michael Markert" },
],

    thesis: {
      question:
        "How can AI be integrated directly into a live coding workflow to support real-time musical performance without removing performer control?",
      motivation: `
          Live coding enables performers to create music in real time by writing and modifying code. 
          In contrast, many AI-based music systems generate fixed outputs that are not directly editable and therefore limit control over the result.

          This project explores how AI can be integrated into a live coding workflow, allowing performers to receive context-aware code suggestions directly within the environment.

          The goal is to support improvisation through AI assistance while preserving full creative control over the generated material.
          `,
    },

    summaryCard: {
      summary:
         "A custom Pulsar package that lets performers trigger AI-generated TidalCycles code directly inside the live coding editor, returning editable output to the performance workflow in real time.",
      role: ["Concept", "System Design", "Plugin Development", "AI Integration"],
      tools: ["Pulsar", "TidalCycles", "SuperCollider", "Hydra", "OpenAI API"],
    },

    overview: {
      context: `
        Live coding is a form of musical performance in which sound is created by writing and modifying code in real time. 
        Music emerges through a continuous process where composition, improvisation and execution converge.

        In this context, code functions simultaneously as tool, material and expressive medium, forming the basis for further system extensions.
        `,
      method:
       `The system was developed as a custom package for the Pulsar editor, embedding AI-assisted code generation directly into the live coding environment.

        Development focused on integrating API communication, designing a reusable prompt structure and incorporating domain-specific reference material to guide the generation process.

        The setup was iteratively tested and refined in live coding scenarios, ensuring stability, usability and responsiveness within a performance context.
        `,
outcome: `
        The project resulted in a functional system that enables performers to generate and integrate TidalCycles code directly within the live coding environment.

        By returning editable code instead of fixed outputs, the system supports a more fluid and improvisational workflow while maintaining full control over the generated material.

        The project demonstrates how AI can function as a collaborative component within a coding-based performance, rather than as a standalone generative tool.
        `, 
      system: `
        The system operates as a real-time feedback loop between performer and AI.

        Code and prompts are written directly within the editor and sent to the model, including the current context and structured guidance. 
        The generated output is returned as executable code and reinserted into the live coding environment.

        Because the result remains fully editable, it can be adapted, extended or discarded at any moment during the performance.
        `,
media: {
        type: "image",
        src: "/Images/projects/API.png",
        alt: "AI live coding workflow diagram",
        caption: "System workflow connecting live coding, AI prompting and audio synthesis"
      },
      
    },

    processSections: [
  {
    title: "Understanding the live coding environment",
    text: `
      Establishing a stable live coding workflow required first understanding how musical structure, timing and syntax operate within TidalCycles and SuperCollider.

      Rather than focusing on AI from the beginning, this phase concentrated on how code behaves as a performative medium, where every change directly affects sound in real time. This foundation defined the constraints for any later system integration.
      `,
  },
  {
    title: "Evaluating external AI support",
    text: `
      Early experiments with external AI tools showed that generating code suggestions can support musical exploration, but only in a disconnected way.

      Moving between tools introduced friction: generated outputs had to be manually transferred, interpreted and adjusted before they became usable. This made it clear that meaningful support requires integration directly within the coding environment.
      `,
  },
  {
    title: "Embedding the AI model into the editor",
    text: `
      Integrating the AI model into Pulsar involved establishing API communication, configuring the environment and enabling prompt execution directly from within the editor.

      At this stage, prompts could be sent and responses returned, but the interaction remained cumbersome. Outputs often included unnecessary text, and usable code still required manual extraction, limiting real-time applicability.
      `,
  },
  {
    title: "Designing context and interaction",
    text: `
      The system became usable only after restructuring how information is sent to the model.

      A reusable parent prompt and additional reference material were introduced to provide consistent context, reducing repetitive input and improving output relevance. This shifted the system from a technical integration toward a controllable interaction model, where suggestions become part of an ongoing coding process rather than isolated results.
      `,
  },
  
],

interactionSection: {
  eyebrow: "Final Interaction Model",
  title: "Designing AI as an interruptible part of the live coding workflow",
  description:
    "The final interaction model was designed around a core principle: AI should accelerate live coding without replacing performer agency. Instead of producing autonomous musical output, the system returns editable code that can be reviewed, modified, ignored, or manually activated by the performer.",

  sketches: [
    {
      
      image: "/Images/projects/interactivflowww.jpg",
      imageAlt:
        "Hand-drawn interaction flow showing how AI-generated code enters a live coding workflow",
      caption:
        "Interaction flow showing how AI is embedded into a live coding workflow while preserving performer control. The system supports moments of need, but every generated output remains editable, reviewable, and manually activated.",
    },
    {
      
      image: "/Images/projects/technicalfloww.png",
      imageAlt:
        "Technical sketch showing how prompt, code context, parent prompt and references are assembled before AI code generation",
      caption:
        "Technical flow showing how the system assembles user input, current code context, hidden behavioral instructions, and syntax references before generating editable TidalCycles code. This layer defines how AI behavior is constrained and made useful inside the performance environment.",
    },
  ],
},

    media: [
      {
        type: "image",
        src: "/public/Images/projects/retro.jpg",
        alt: "Project documentation image",
        caption: "Early visual documentation of the project",
      },
      
    ],

      storySequence: {
      title: "Livecoding Sequence",
      intro:
  "A step-by-step performance sequence showing how the track evolves through layered live coding. Each slide introduces an additional musical layer, making the compositional process progressively audible.",
      slides: [
        {
          type: "video",
          src: "/videos/insta1.1.mp4",
          caption: "The session begins with a first rhythmic foundation.",
          stepLabel: "01",
        },
        {
          type: "image",
          src: "/videos/insta1.2.jpg",
          caption: "A first visual post introduces the evolving setup.",
          stepLabel: "02",
        },
        {
          type: "video",
          src: "/videos/insta1.3.mp4",
          caption: "The groove is expanded through new coded variations.",
          stepLabel: "03",
        },
         {
          type: "video",
          src: "/videos/insta1.4.mp4",
          caption: "The groove is expanded through new coded variations.",
          stepLabel: "03",
        },
         {
          type: "video",
          src: "/videos/insta1.5.mp4",
          caption: "The groove is expanded through new coded variations.",
          stepLabel: "03",
        },
         {
          type: "video",
          src: "/videos/insta1.6.mp4",
          caption: "The groove is expanded through new coded variations.",
          stepLabel: "03",
        },
         {
          type: "video",
          src: "/videos/insta1.7.mp4",
          caption: "The groove is expanded through new coded variations.",
          stepLabel: "03",
        },
         {
          type: "video",
          src: "/videos/insta1.8.mp4",
          caption: "The groove is expanded through new coded variations.",
          stepLabel: "03",
        },
         {
          type: "video",
          src: "/videos/insta1.9.mp4",
          caption: "The groove is expanded through new coded variations.",
          stepLabel: "03",
        },
         {
          type: "video",
          src: "/videos/insta1.10.mp4",
          caption: "The groove is expanded through new coded variations.",
          stepLabel: "03",
        },
         {
          type: "video",
          src: "/videos/insta1.11.mp4",
          caption: "The groove is expanded through new coded variations.",
          stepLabel: "03",
        },
         {
          type: "video",
          src: "/videos/insta1.12.mp4",
          caption: "The groove is expanded through new coded variations.",
          stepLabel: "03",
        },
      ],
    },

  featuredPost: {
      title: "Additional Performance Clip",
      text:
  "An audiovisual performance where both the performer and DJ AI gradually build the track together. As new musical layers emerge, visuals alternate between human and AI contributions, making the collaborative composition process visible.",
      videoSrc: "/videos/Algorave.mp4",
      instagramUrl: "https://www.instagram.com/reel/C3cjaHtNouz/?utm_source=ig_web_copy_link",
    },
 


   reflection: {
  summary: `
      Editable output fundamentally changes how generative systems can be used in live coding.

      Instead of producing fixed results, the AI model generates code that remains visible, interpretable and modifiable. This allows suggestions to be integrated selectively, maintaining continuity within the performance rather than interrupting it.

      At the same time, the project exposes current limitations. Generated responses are often verbose, inconsistently precise and highly dependent on prompt structure. Without carefully designed context, outputs become unreliable and difficult to use in time-sensitive situations.

      The key insight is that the usefulness of AI in this setting does not depend on generation quality alone, but on how well it can be embedded into an existing workflow while remaining interruptible and transparent.
      `,
  nextStep: `
      Further development should focus on making the interaction more immediate and predictable within performance.
      This includes reducing unnecessary output, improving how generated code is inserted into the editor, and strengthening the context layer to produce more concise and reliable responses.
      In a next iteration, the system could be extended through a more structured dataset or adapted model behavior, enabling outputs that align more closely with the constraints and expectations of real-time live coding.
      `,
},
  },

 {
  slug: "memory-palace-ba",
  title: "Mensch-KI-Interaktion zur Wissensorganisation",
  subtitle: "Digitale Weiterentwicklung kognitiver Lernmethoden am Beispiel des Gedächtnispalastes",

  hero: {
    media: {
      type: "image",
      src: "/Images/projects/Bachelor/platzhalter.png",
      alt: "Bachelor thesis project hero image",
      caption: "Konzeption eines partizipativen KI-Lernsystems zur mnemonischen Wissensorganisation",
    },
  },

  meta: [
    { label: "Year", value: "2025" },
    { label: "Type", value: "Bachelor Thesis" },
    { label: "Type", value: "Design-based Research" },
    { label: "Focus", value: "Human-in-the-Loop" },
    {label:"Theme", value:"Cybernetics"},
    { label: "Supervisor", value: "Prof. Dr. Michael Markert" },
  ],

  thesis: {
    question: `
            Wie kann ein KI-gestütztes Lernsystem Nutzer:innen dabei unterstützen, mnemotechnische Verfahren wie den Gedächtnispalast so anzuwenden, dass selbstgenerierte Assoziationen gestärkt und langfristiger Wissenserhalt gefördert werden?
            `,
    motivation: `
            Mnemotechniken wie die Methode der Loci gelten als effektive Strategien zur Gedächtnisbildung, werden jedoch im Bildungskontext kaum systematisch vermittelt. In formalen Bildungskontexten werden solche Verfahren jedoch kaum systematisch vermittelt. Die Erstellung individueller, bildgestützter Assoziationen erfordert ein hohes Maß an kognitiver Eigenleistung und Personalisierung, das sich nur schwer mit standardisierten Lernumgebungen vereinbaren lässt. Gleichzeitig fehlt es häufig an didaktischer Verankerung und methodischer Ausbildung.

            Aktuelle Entwicklungen im Bereich Adaptiver Lernsysteme zeigen Potenziale in adaptiver Personalisierung, dialogischer Interaktion und kontextsensitiver Unterstützung von Lernprozessen.

            In dieser Arbeit wird untersucht, inwiefern sich diese Eigenschaften nutzen lassen, um die Anwendung mnemotechnischer Verfahren zu unterstützen und den Aufbau individueller Gedächtnisstrukturen durch KI-basierte Interaktion zu begleiten.`,
              },

  foundations: [
    {
      title: "Historische und moderne Perspektiven der Gedächtniskunst",
      text: `
            Die antike Gedächtniskunst, insbesondere die Methode der Loci, beschreibt ein System zur strukturierten Organisation von Wissen, bei dem Informationen durch räumliche Anordnung und bildhafte Assoziationen verankert werden.

            Zentrale Voraussetzung für die Wirksamkeit dieser Methode ist die aktive Generierung individueller, möglichst auffälliger und bedeutungsvoller mentaler Bilder, die entlang stabiler, mentaler Routen organisiert werden. Die Struktur folgt dabei einem hierarchischen Prinzip aus übergeordneten Gedächtnisräumen, untergeordneten Bereichen und konkreten Ablagepunkten.

            Die Methode ermöglicht sowohl die temporäre Speicherung alltagsnaher Informationen als auch den Aufbau langfristiger, komplexer Wissensstrukturen. Ihre Effektivität hängt wesentlich von wiederholter Anwendung, klarer Strukturierung und der Qualität der gebildeten Assoziationen ab.

            Im gegenwärtigen Kontext digitaler Technologien zeigt sich jedoch eine zunehmende Auslagerung kognitiver Prozesse in externe Systeme (cognitive offloading), wodurch die Nutzung interner Gedächtnisstrategien an Bedeutung verliert.`,
                },
    {
      title: "Neurologische Grundlagen: Wie lernt der Mensch?",
      text: `
            Gedächtnisbildung lässt sich als mehrstufiger Prozess aus Enkodierung, Speicherung und Abruf von Informationen beschreiben.

            Entscheidend für die Qualität der Enkodierung ist die Verarbeitungstiefe sowie die Verknüpfung neuer Informationen mit bestehenden Wissensstrukturen. Dabei werden Informationen nicht isoliert verarbeitet, sondern in räumliche und kontextuelle Zusammenhänge eingebettet.

            Emotionale Reize und multisensorische Verarbeitung verstärken die Gedächtnisleistung, indem sie stabilere Gedächtnisspuren erzeugen. Ebenso führt die aktive Generierung von Inhalten zu einer signifikant besseren Erinnerbarkeit als passives Aufnehmen von Informationen.

            Langfristige Speicherung erfolgt durch Konsolidierungsprozesse, die durch Wiederholung unterstützt werden. Der Abruf von Informationen ist kontextabhängig und erfolgt als rekonstruktiver Prozess.` ,  
          },
            {
      title: "Maschinelles Lernen: Wie lernt die Maschine?",
      text: `
          Der theoretische Fokus dieses Kapitels liegt auf grundlegenden Prinzipien maschinellen Lernens, der Architektur künstlicher neuronaler Netze sowie der technischen Realisierung von Gedächtnis und zielgerichtetem Verhalten in KI-Systemen. Im Zentrum steht dabei eine Auswahl derjenigen Konzepte, die für das in dieser Arbeit entwickelte sprachbasierte Assistenzsystem unmittelbar relevant sind.

          Künstliche Intelligenz wird als technisches System beschrieben, das Aufgaben bearbeitet, für deren Bewältigung üblicherweise menschliche Fähigkeiten wie Mustererkennung, Lernen aus Erfahrung oder Problemlösung erforderlich sind. Die Entwicklung von ML ist eng mit interdisziplinären Wissenschaftenwie beispielsweise auch der Neurobiologie verbunden. Besonders deutlich zeigt sich dies in künstlichen neuronalen Netzen, deren Aufbau lose an biologische Nervensysteme angelehnt ist und die eine zentrale Grundlage moderner lernfähiger Systeme bilden.

          Innerhalb der KI wird maschinelles Lernen als datenbasiertes Verfahren beschrieben, das aus Beispielen generalisierbare Strukturen ableitet. Deep Learning erweitert diesen Ansatz durch mehrschichtige neuronale Netze zur Verarbeitung hochdimensionaler Daten. Im Fokus dieser Arbeit stehen große Sprachmodelle (LLMs) und generative KI-Systeme, die auf probabilistischen Vorhersagen basieren und zur Erzeugung neuer Inhalte eingesetzt werden. Damit bilden sie die technische Grundlage für dialogische, adaptive und sprachbasierte Interaktion im späteren Systemkonzept.
          `  },
{
      title: "Adaptive lernsysteme",
      text: `
          Digitale Lernsysteme ermöglichen die strukturierte Unterstützung von Lernprozessen durch interaktive und technisch vermittelte Umgebungen. Sie gestalten meist den Lernprozess aktiv mit, indem sie Inhalte strukturieren, Rückmeldungen geben und Interaktionen ermöglichen.

          Ein zentraler Bestandteil solcher Systeme sind adaptive Mechanismen, durch die Inhalte und Interaktionen an individuelle Voraussetzungen, Nutzungsverhalten und Lernprozesse angepasst werden können. Diese Anpassung erfolgt auf Grundlage von Rückkopplungsschleifen, in denen Eingaben verarbeitet und in veränderte Systemreaktionen überführt werden.

          Innerhalb dieser Entwicklung bilden KI-basierte Systeme eine spezifische Ausprägung digitaler Lernsysteme, insbesondere im Kontext dialogischer Interaktion. Dabei bleibt der Mensch als aktiver Bestandteil im System integriert (Human-in-the-loop) und wirkt an der Strukturierung und Gestaltung des Lernprozesses mit.

          Lernen wird in diesem Zusammenhang als dynamischer Prozess verstanden, der durch kontinuierliche Wechselwirkungen zwischen Nutzer und System entsteht. Eine zentrale Herausforderung besteht darin, unterstützende Systemfunktionen mit der Aufrechterhaltung kognitiver Eigenleistung in Balance zu halten.`,
              },
  ],

  summaryCard: {
    summary:
      "Ein forschungsbasiertes Systemkonzept für ein KI-gestütztes Lernsystem, das dialogische Unterstützung, adaptive Führung und graphbasierte Wissensspeicherung miteinander verbindet.",
    role: ["Research", "System Design", "Interaction Design", "Prototype Design"],
    tools: ["LLM", "Neo4j", "Speech Interface", "Prompt Design", "User Testing"],
  },

  researchOverview: {
  eyebrow: "Research Overview",
  title: "Iterative Design-Based Research Process",
  description:
    `Diese Arbeit folgt einem iterativen, forschungsbasierten Designprozess. Die theoretischen Grundlagen wurden durch zwei Usertests überprüft, erweitert und kontinuierlich reflektiert. Die daraus gewonnenen Erkenntnisse aus Theorie und Interaktion wurden zu Designprinzipien verdichtet, die in die Entwicklung eines konzeptionellen Systemmodells eingeflossen sind.`,
  image: "/Images/projects/iteration.png",
  imageAlt:
    "Diagram showing the iterative design-based research process of the bachelor thesis",
},

userResearch: {
  intro:
    `Aufbauend auf den theoretischen Grundlagen wurden zwei aufeinander aufbauende Usertests durchgeführt.

Ziel war es, sowohl die Ausgangssituation der Lernenden als auch die Interaktion mit einem KI-gestützten Lernsystem empirisch zu untersuchen. Während der erste Test bestehende Lernpraktiken, kognitive Voraussetzungen und Einstellungen gegenüber KI analysierte, fokussierte der zweite Test die konkrete Anwendung eines prototypischen Systems in einem geführten Lernprozess.`,

  testA:
    `Der erste Usertest wurde als qualitative Vorstudie durchgeführt und diente der Exploration bestehender Lernstrategien, visueller Vorstellungskraft sowie der Wahrnehmung von KI im Lernkontext. Die Datenerhebung erfolgte durch halbstrukturierte Interviews, ergänzt durch eine Imaginationsübung, in der Teilnehmende vertraute Räume mental rekonstruieren sollten.

Die Ergebnisse zeigen eine deutliche Dominanz repetitiver Lernmethoden wie wiederholtes Lesen, Abschreiben oder Karteikartenlernen. Diese Strategien wurden jedoch häufig als monoton, anstrengend und wenig nachhaltig beschrieben. Gleichzeitig zeigte sich, dass die Fähigkeit zur räumlich-visuellen Vorstellung bei den meisten Teilnehmenden grundsätzlich vorhanden ist, im Lernprozess jedoch kaum bewusst genutzt wird.

Ein weiterer zentraler Befund betrifft den Umgang mit KI: Die Teilnehmenden verfügten bereits über erste Berührungspunkte mit KI-Systemen, insbesondere in Form von textbasierten Anwendungen. Die Wahrnehmung war dabei ambivalent. Während einige die Unterstützung als hilfreich und effizient einordneten, äußerten andere Unsicherheiten hinsichtlich Verlässlichkeit, Kontrolle und eigener Abhängigkeit. KI wurde somit nicht als neutrale Technologie wahrgenommen, sondern als System, dem aktiv vertraut oder misstraut wird.

Insgesamt macht der Usertest eine Diskrepanz sichtbar zwischen vorhandenen kognitiven Fähigkeiten, bestehenden Lernpraktiken und der tatsächlichen Nutzung digitaler Unterstützung.`,
  testB:
    `Der zweite Usertest untersuchte die Interaktion mit einem KI-gestützten, dialogbasierten Prototypen zur Vermittlung der Gedächtnispalast-Methode. Der Test folgte einem strukturierten Ablauf, in dem alle Teilnehmenden durch denselben Lernprozess geführt wurden: Auswahl eines vertrauten Raums, Definition von Stationen, Entwicklung von bildhaften Assoziationen sowie anschließende Wiederholung und Abfrage.

Im Gegensatz zur Vorstudie handelt es sich hierbei um einen Anwendungstest, bei dem zwei zentrale Unsicherheitsfaktoren zusammenkommen: die Nutzer selbst sowie das Verhalten des KI-Systems. Beide wirken als „Blackboxes“, deren interne Prozesse nicht vollständig kontrollierbar oder vorhersagbar sind. Dies führt dazu, dass die Interaktion nicht vollständig standardisierbar ist und Ergebnisse stets im Kontext individueller Unterschiede interpretiert werden müssen.

Die Ergebnisse zeigen, dass die Methode grundsätzlich nachvollziehbar ist, jedoch nicht unmittelbar verstanden wird, sondern sich erst im Verlauf der Interaktion erschließt. Gleichzeitig wurden deutliche Unterschiede im Kommunikationsverhalten, im Lerntempo sowie im Unterstützungsbedarf sichtbar.

Besonders relevant ist die Rolle der KI: Während sie in Teilen unterstützend wirkt, bleibt sie in anderen Situationen zu reaktiv und erkennt nicht zuverlässig, wann zusätzliche Anleitung oder Struktur erforderlich ist. Dadurch wird deutlich, dass die Wirksamkeit eines solchen Systems weniger von der Methode selbst abhängt, sondern von der Qualität der Interaktionsgestaltung.`,
},

  /*overview: {
    context: `
Diese wissenschaftliche Arbeit bewegt sich zeischen koginition, mensch-kiinteraktion und cybernetcs. eine balance, zwischen partizipation und überfordunerg, zwischen onload und offload, zwischen wissen lernen und lernen zu lernen, ist ein großes spannungsfeld. 
`,
    method: `
Die Arbeit folgt einem forschungsorientierten Designprozess, der theoretische Analyse mit empirischer Exploration verbindet. Eine qualitative Vorstudie untersuchte Lernstrategien, Imagination und Einstellungen gegenüber KI. Darauf aufbauend wurde ein strukturierter Interaktionstest mit einem chatbasierten Prototyp durchgeführt. Die Erkenntnisse aus Theorie und Usertests wurden anschließend in Designprinzipien überführt und in ein Systemkonzept übersetzt.
`,
    outcome: `
Das Ergebnis ist ein konzeptionelles KI-Lernsystem, das den Aufbau und die Navigation von Gedächtnispalästen durch Dialog, Moduslogik und graphbasierte Speicherung unterstützen soll. Im Zentrum steht die Unterstützung selbstgenerierter Assoziationen und langfristiger Wissensorganisation. Also das lernen di elernmethode ohne das system anwenden zu können, wobei das system geichzeit aber auch als "backup speicherplatz " fungieren kann. 
`,
    media: {
      type: "image",
      src: "/Images/projects/BA-system-diagram.png",
      alt: "System overview of the AI-supported memory palace concept",
      caption: "Konzeptionelle Systemarchitektur aus Dialog, adaptiven Modi und graphbasierter Gedächtnisstruktur",
    },
  },*/

  systemConcept: {
  eyebrow: "System Concept",
  title: "Konzeptionelle Übersetzung der Designprinzipien in ein lernunterstützendes System",
  intro:  `
Das Systemkonzept versteht sich als explorativer Entwurf eines dialogischen, auditiven und adaptiven Lernsystems. Es basiert auf den zuvor abgeleiteten Designprinzipien und empirischen Gestaltungsanforderungen und beschreibt keine fertige Produktlösung, sondern eine mögliche Systemlogik für die Unterstützung mnemotechnischen Lernens.  

Die Interaktion wird dabei über mehrere funktionale Modi strukturiert, die unterschiedliche Phasen des Lernprozesses abbilden.
`,
  overview: {
    title: "System Overview",
    text:`
Das System ist als modularer, dialogisch gesteuerter Lernprozess konzipiert, in dem unterschiedliche funktionale Komponenten situativ zusammenwirken.

Zentrale Rolle übernimmt ein Sprachmodell, das Nutzereingaben interpretiert und den aktuellen Lernkontext analysiert. Auf dieser Grundlage werden dynamisch passende Modi, Werkzeuge und Speicherstrukturen aktiviert.

Die Architektur bildet kein lineares Ablaufschema, sondern ein adaptives Zusammenspiel aus Interaktion, Steuerung und Gedächtnisstruktur, das sich kontinuierlich an den Verlauf des Lernprozesses anpasst.
`,
    image: "/Images/projects/Bachelor/5.1.png",
    imageAlt: "Abbildung 5.1 - Überblick über die technische Systemarchitektur",
    caption: `Die Abbildung zeigt die grundlegende Systemarchitektur: Nutzereingaben werden vom Sprachmodell interpretiert und über eine zwischengelagerte Steuerlogik in passende Modi, Werkzeuge und Speicherbereiche überführt. Abhängig vom Kontext werden spezialisierte Module aktiviert und unterschiedliche Gedächtnisformen angesprochen.`,
  },

  modes: {
    title: "Dialogische Steuerung der Moduslogik",
    text: ` Die Interaktion des Systems wird über vier funktionale Modi strukturiert: Navigation, Assoziation, Reflexion und Vividness.

Diese Modi adressieren unterschiedliche kognitive Phasen des Lernprozesses und steuern nicht nur die dialogische Interaktion, sondern auch den Zugriff auf systeminterne Funktionen. Je nach aktivem Modus werden spezifische Promptkonfigurationen, Werkzeuge und Datenquellen eingebunden.

Während der Navigationsmodus den Zugriff auf gespeicherte Gedächtnisstrukturen ermöglicht, unterstützt der Assoziationsmodus die Umwandlung von Inhalten in mentale Bilder. Der Reflexionsmodus dient der metakognitiven Auswertung, während der Vividness-Modus die sensorische und emotionale Ausarbeitung von Szenen vertieft.

Die Moduslogik bildet damit die zentrale Steuerungsebene des Systems und ermöglicht eine situative Anpassung von Interaktion, Verarbeitung und Zugriff auf unterschiedliche Speicherformen.
`,   caption: `Die Abbildung zeigt den Ablauf eines Moduswechsels im System. Ausgehend von einer Nutzereingabe wird der Intent durch das Sprachmodell analysiert und geprüft, ob ein Wechsel des Interaktionsmodus erforderlich ist. Wird ein Wechsel erkannt, übernimmt eine externe Steuerlogik die Aktualisierung der Systemkonfiguration, lädt entsprechende Modusprompts sowie zugehörige Tools und Datenzugriffe und übergibt diese an das Sprachmodell. Die ursprüngliche Anfrage wird anschließend auf Basis der neuen Konfiguration verarbeitet.`,
    image: "/Images/projects/Bachelor/5.3.png",
    imageAlt: "Abbildung 5.2 - Ablaufsteuerung bei einem Moduswechsel",
  },

  profile: {
    title: "Partizipative Profilanpassung",
    text: `
Das Nutzerprofil fungiert als zentrale Steuerstruktur zur kontextsensitiven Anpassung des Systemverhaltens und ist parallel zur Promptarchitektur aufgebaut.

Es gliedert sich in drei zeitliche Ebenen: ein statisches Profil für grundlegende Einstellungen, ein dynamisches Profil für langfristige Muster und Präferenzen sowie ein temporäres Profil für situative Zustände innerhalb einer Sitzung. Diese Ebenen werden getrennt erfasst, wirken jedoch gemeinsam auf die Interaktion und Antwortgenerierung des Systems.

Anpassungen erfolgen nicht automatisch, sondern entstehen aus der Analyse wiederkehrender Muster über mehrere Sitzungen hinweg. Diese werden im Dialog reflektiert und erst nach expliziter Zustimmung der Nutzer:innen in das Profil übernommen.

Das Profil wirkt damit nicht als passiver Speicher, sondern als verhaltenssteuerndes Element, das die Interaktion kontinuierlich kontextualisiert, ohne die Kontrolle der Lernenden zu unterlaufen.
`,
    caption: `
Die Abbildung zeigt die mehrschichtige Struktur des Nutzerprofils sowie dessen zyklische Weiterentwicklung. 
Statische, dynamische und temporäre Informationen werden getrennt erfasst und kontextabhängig in die Systemsteuerung integriert.  Anpassungen des dynamischen Profils erfolgen ausschließlich über wiederkehrende Musteranalysen und werden erst nach dialogischer Rückkopplung und Zustimmung übernommen.
`,
    image: "/Images/projects/Bachelor/5.2.png",
    imageAlt: "Abbildung 5.4 - Reflexionsprozess zur Profilanpassung",
  },

  vividness: {
    title: "Vividness als adaptive Bildvertiefung",
     text: `
Der Vividness-Modus wird exemplarisch dargestellt, um die dialogisch-adaptive Steuerlogik des Systems zu verdeutlichen.

Ausgangspunkt ist eine von den Nutzer:innen beschriebene mentale Szene, die hinsichtlich ihrer sensorischen und emotionalen Qualität analysiert wird. Auf dieser Grundlage formuliert das System gezielte Impulse zur Weiterentwicklung, ohne Inhalte eigenständig zu verändern.

Die Interaktion ist als ko-konstruktiver Prozess angelegt: Nutzer:innen können Vorschläge annehmen, modifizieren oder ablehnen. Dadurch entsteht eine fortlaufende Abstimmung zwischen Systemimpulsen und individueller Ausgestaltung.

Der Modus macht damit sichtbar, wie adaptive Unterstützung, Rückkopplung und Nutzerkontrolle im System zusammenwirken.
`,
    caption: `
Die Abbildung zeigt die dialogisch-adaptive Feedbackschleife des Vividness-Modus.  Dargestellt ist der Prozess zwischen Szeneingabe, Analyse, Rückmeldung und Anpassung, einschließlich der beteiligten Systemkomponenten.  Hervorgehoben sind Entscheidungswege, Rückfragen sowie die Bedingungen für eine mögliche Speicherung.
`,
    image: "/Images/projects/Bachelor/5.4.png",
    imageAlt: "Abbildung 5.5 - Dialogisch-adaptive Feedbackschleife des Vividness-Modus",
  },

  memory: {
  title: "Graphbasierte Gedächtnisstruktur",
  text: `
Der Gedächtnispalast basiert auf der Verknüpfung räumlicher, bildhafter und semantischer Elemente. Im System wird diese Struktur nicht linear gespeichert, sondern als Netzwerk modelliert. Eine graphbasierte Datenbank ermöglicht es, zentrale Bestandteile wie Räume, Loci, Szenen, Informationen und Assoziationen als miteinander verbundene Einheiten abzubilden.

Diese Modellierung überträgt die Funktionsweise des Gedächtnispalasts in eine formale Struktur, in der Beziehungen explizit gespeichert und verarbeitet werden können. Die zugrunde liegende Netzwerkstruktur bleibt für Nutzer:innen unsichtbar und dient ausschließlich der internen Organisation, Analyse und Navigation innerhalb des Systems.
`,
  image: "/Images/projects/Bachelor/5.5.png",
  imageAlt: "Abbildung 5.6 - Mögliche Umsetzung der Speicherung der Gedächtnispalaststruktur in Neo4j",
  caption: `
Die dargestellten Knoten sind über semantische Beziehungen miteinander verknüpft, die räumliche Zugehörigkeit, Reihenfolgen und inhaltliche Verbindungen abbilden. Aus diesen Verknüpfungen entsteht ein zunehmend komplexes, jedoch strukturiertes Netzwerk, das die Organisation des Gedächtnispalasts formal repräsentiert.
`,
  insight: `
Durch diese Netzwerkstruktur können Inhalte nicht nur gespeichert, sondern gezielt analysiert und reaktiviert werden. Schwache Assoziationen oder lange nicht genutzte Bereiche lassen sich identifizieren und als Ausgangspunkt für adaptive Wiederholungen nutzen.

Da Szenen, Assoziationen und Informationen miteinander verknüpft sind, entstehen mehrere Zugriffspfade auf Inhalte. Dies ermöglicht einen flexiblen, kontextabhängigen Abruf und unterstützt die mentale Navigation innerhalb des Gedächtnispalasts.
`,
},

  reflection: {
    title: "Reflexion des Konzepts",
    text:`
Das Systemkonzept verdeutlicht mehrere strukturelle Spannungsfelder, die sich aus der Verbindung von mnemotechnischem Lernen und KI-gestützter Interaktion ergeben.

Zentral ist dabei die Frage, in welchem Maß ein System in kognitive Prozesse eingreifen kann, ohne deren Wirksamkeit zu unterlaufen. Da mnemotechnische Verfahren wesentlich auf Selbstgenerierung, bildhafter Ausarbeitung und aktiver Strukturierung beruhen, entsteht ein inhärenter Widerspruch: Jede Form von Unterstützung birgt zugleich das Risiko, genau jene Prozesse zu schwächen, die sie fördern soll.

Auch die partizipative Steuerlogik bleibt ambivalent. Sie soll Kontrolle und Transparenz sichern, führt jedoch zu einer zusätzlichen Ebene von Entscheidungen und Reflexion, die den Lernprozess selbst komplexer machen kann. Damit verschiebt sich die Herausforderung nicht nur auf die inhaltliche Ebene des Lernens, sondern auch auf die Gestaltung der Interaktion.

Darüber hinaus zeigt sich eine Diskrepanz zwischen konzeptioneller Modellierung und praktischer Umsetzbarkeit. Die entworfene Systemarchitektur setzt ein hohes Maß an Kontextverständnis, Anpassungsfähigkeit und stabiler Echtzeitverarbeitung voraus, das in prototypischen Umsetzungen bislang nur eingeschränkt erreicht wird.

Die rein sprachbasierte Interaktion verstärkt diese Problematik zusätzlich. Sie ermöglicht zwar eine naturnahe, kontinuierliche Kommunikation, ist jedoch stark kontextabhängig und nicht in allen Nutzungssituationen oder für alle Nutzergruppen gleichermaßen geeignet.

Insgesamt wird das System weniger als abgeschlossene Lösung, sondern vielmehr als konzeptioneller Rahmen sichtbar, der zentrale Fragen zur Gestaltung lernunterstützender KI-Systeme aufwirft, ohne diese vollständig aufzulösen.`, },
},

  /*processSections: [
    {
      title: "Theoretische Untersuchung",
      text: `
Eine interdisziplinäre Analyse von Mnemotechniken, neurobiologischen Lernmechanismen und adaptiver Mensch-KI-Interaktion bildete die konzeptionelle Grundlage des Projekts.
`,
    },
    {
      title: "Explorative Vorstudie",
      text: `
Ein qualitativer Pre-Test untersuchte bestehende Lernstrategien, visuelle Vorstellungskraft und Einstellungen gegenüber KI-gestützter Interaktion.
`,
    },
    {
      title: "Interaktionstest mit Prototyp",
      text: `
Ein strukturierter chatbasierter Prototyp wurde eingesetzt, um zu beobachten, wie Nutzer:innen mit einem KI-gestützten Gedächtnispalast-Prozess umgehen.
`,
    },
    {
      title: "Synthese in Designprinzipien",
      text: `
Erkenntnisse aus Theorie und Nutzerforschung wurden in Designprinzipien übersetzt, die das spätere Systemkonzept strukturell und inhaltlich leiten.
`,
    },
  ],*/

  /*designPrinciples: [
    {
      title: "KI sollte kognitive Prozesse stützen, nicht ersetzen",
      text: `
Das System soll mnemotechnisches Lernen unterstützen, ohne die assoziative Eigenleistung zu übernehmen, die für wirksame Gedächtnisbildung zentral ist.
`,
    },
    {
      title: "Lernen basiert auf selbstgenerierter Imagination",
      text: `
Persönliche, lebendige und bedeutungsvolle mentale Bilder müssen aktiv von den Lernenden selbst erzeugt werden.
`,
    },
    {
      title: "Adaptivität ist notwendig",
      text: `
Menschen unterscheiden sich deutlich in Vorwissen, Vorstellungsfähigkeit und Kommunikationsstil. Ein unterstützendes System muss darauf flexibel reagieren können.
`,
    },
    {
      title: "Wissen braucht räumliche Struktur",
      text: `
Langfristiges Erinnern profitiert von hierarchischen und räumlich organisierten Gedächtnisstrukturen statt von isoliert gespeicherten Einzelinformationen.
`,
    },
    {
      title: "Unterstützung muss transparent und kontrollierbar bleiben",
      text: `
KI-gestützte Lernsysteme sollten nachvollziehbar sein und die Autonomie sowie das Vertrauen der Nutzer:innen erhalten.
`,
    },
  ],*/

designPrinciples: [
  {
    title: "KI als Unterstützung kognitiver Prozesse",
    text: `
Nachhaltiges Lernen entsteht durch aktive Verarbeitung und selbst erzeugte Assoziationen. Gleichzeitig zeigte sich, dass eine zu starke Systemführung die Eigenleistung einschränken kann.  
Das System sollte initial unterstützen und sich schrittweise zurücknehmen, um selbstständiges Lernen zu ermöglichen.
`,
  },
  {
    title: "Selbstgenerierte Imagination als Grundlage des Lernens",
    text: `
Bildhafte, emotionale und multisensorische Vorstellungen stärken die Gedächtnisleistung, werden jedoch nicht von allen Lernenden gleichermaßen entwickelt.  
Das System sollte die aktive Bildgenerierung fördern und bei Bedarf die Qualität und Lebendigkeit der Vorstellungen unterstützen.
`,
  },
  {
    title: "Adaptivität in Bezug auf Lernende und Lernprozesse",
    text: `
Die Untersuchungen zeigen deutliche Unterschiede in Vorwissen, Vorstellungskraft und Kommunikationsverhalten der Lernenden.  
Das System sollte sowohl individuelle Voraussetzungen als auch den Verlauf des Lernprozesses flexibel berücksichtigen.
`,
  },
  {
    title: "Strukturierte und verknüpfte Gedächtnisräume",
    text: `
Erinnern basiert auf räumlicher Ordnung und der Verknüpfung von Informationen innerhalb stabiler, aber erweiterbarer Strukturen.  
Das System sollte diese Beziehungen erfassen, sie speichern und sie flexibel zugänglich machen, statt Inhalte isoliert zu behandeln.
`,
  },
  {
    title: "Partizipative, transparente und kontrollierbare Unterstützung",
    text: `
Der Umgang mit KI ist von unterschiedlichen Erwartungen und Unsicherheiten geprägt. Gleichzeitig erfordert lernförderliche Interaktion eine klare und nachvollziehbare Rollenverteilung.  
Das System sollte als partizipatives Gegenüber agieren, und transparent bleiben, sowie die Kontrolle bei den Lernenden belassen.
`,
  },
  {
    title: "Feedbackgesteuerte Regelkreise im Lernprozess",
    text: `
Lernen verläuft als dynamischer Prozess aus Handlung, Rückmeldung und Anpassung. Die Analyse zeigt, dass wirksame Unterstützung davon abhängt, ob Rückmeldungen in den weiteren Verlauf integriert werden.  
Das System sollte kontinuierlich auf Eingaben reagieren und  den Lernprozess über Feedbackschleifen steuern.
`,
  },
],
  
  reflection: {
    discussion: `
Die Arbeit zeigt, dass die Unterstützung mnemotechnischen Lernens durch KI weniger von der Generierung von Inhalten als von der Strukturierung kognitiver Prozesse abhängt. Entscheidend ist eine dialogische Interaktion, die die Bildung selbstgenerierter, bildhafter Assoziationen gezielt anregt und begleitet.

Die Ergebnisse weisen darauf hin, dass insbesondere sprachliche Führung, adaptive Rückkopplung und partizipative Steuerung als wirksam wahrgenommen werden. Gleichzeitig wird deutlich, dass die Qualität der Unterstützung an eine sensible Abstimmung zwischen Systemintervention und Eigenaktivität der Lernenden gebunden ist.

Die Untersuchung ist explorativ angelegt und basiert auf einer begrenzten Stichprobe. Zudem unterliegt das Systemverhalten durch den Einsatz eines Sprachmodells einer eingeschränkten Vorhersagbarkeit, was die Replizierbarkeit der Ergebnisse begrenzt.

Auch technisch zeigen sich aktuelle Einschränkungen, insbesondere in Bezug auf Latenz, Kontextverarbeitung und die Integration sprachbasierter Systeme in Echtzeitinteraktionen.

Darüber hinaus ergeben sich ethische Implikationen, insbesondere im Umgang mit sensiblen Inhalten, der Transparenz von Systementscheidungen sowie potenziellen Verzerrungen in den zugrunde liegenden Modellen.

Insgesamt versteht sich die Arbeit als konzeptioneller Beitrag zur Gestaltung dialogischer Lernsysteme, der zentrale Spannungsfelder aufzeigt und eine Grundlage für weiterführende empirische Untersuchungen bietet.`,  

nextStep: `
Zukünftige Arbeit sollte sich auf die praktische Umsetzung und Evaluation des Systemkonzepts konzentrieren. Besonders relevant ist dabei die langfristige Nutzung: Wie entwickelt sich die Interaktion zwischen Mensch und System über mehrere Lernphasen hinweg, und in welchem Maß unterstützt das System selbstgesteuertes Lernen?

Gleichzeitig zeigen erste prototypische Umsetzungen technische Herausforderungen, insbesondere in Bezug auf Latenz, Modellkapazität und die Integration sprachbasierter Systeme.

Darüber hinaus bleiben methodische und ethische Fragen offen, etwa im Umgang mit intransparenten Systemverhalten, Datensensibilität und der Gestaltung partizipativer, nachvollziehbarer KI-Interaktionen.
`,
  },

},
  
  {
  slug: "hacking-porcelain",
  title: "Hacking the Porcelain Industry",
  subtitle: "Ein experimentelles System, in dem Form durch Material, menschliche Bewegung und Schwerkraft entsteht",

  hero: {
    media: {
      type: "image",
      src: "/Images/projects/Pasta.png", 
      alt: "Extrudiertes Porzellanobjekt mit verschlungenen Strukturen",
      caption: "Manuelle Extrusion als offenes Formgenerierungssystem",
    },
  },

  meta: [
    { label: "Year", value: "2023" },
    { label: "Type", value: "Materialforschung & Prozessdesign" },
    { label: "Project", value: "Universitätsprojekt in Kooperation mit Kober Porzellan" },
    { label: "Supervisor", value: "Prof. Natalie Weinmann · LB Julia Wolf" },
  ],

  thesis: {
  question: `Wie lässt sich industrielle Porzellanextrusion so öffnen, dass Form nicht vorgegeben, sondern im Zusammenspiel von Material, Werkzeug, Bewegung und Schwerkraft erzeugt wird?`,

  motivation: `Industrielle Extrusionsverfahren sind auf Wiederholbarkeit und Kontrolle ausgelegt. Form wird dabei weitgehend vorab definiert und während des Prozesses reproduziert. Gleichzeitig zeigt sich, dass diese Form der Kontrolle die direkte Auseinandersetzung mit dem Material und die Möglichkeit spontaner Entscheidungen stark einschränkt.

Das Projekt geht von der Frage aus, ob und wie sich dieser Prozess so erweitern lässt, dass Variabilität, situative Eingriffe und eine stärkere Einbindung des Menschen wieder Teil der Formgebung werden können.`
},

productionContext: {
  title: "Context",
  intro: `Das Projekt entstand im Rahmen einer Kooperation mit Kober Porzellan in Steinwiesen. Im Produktionsumfeld wurden unterschiedliche Verfahren sichtbar, die mit extrudierter Porzellanmasse arbeiten.

Neben industriellen Extrusionsanlagen, die zur Herstellung keramischer Profile eingesetzt werden, wird auch keramischer 3D-Druck genutzt, bei dem Material schichtweise im Raum aufgebaut wird.

Die folgenden Beispiele zeigen beide Verfahren in ihrem jeweiligen Einsatzkontext.`,
items: [
    {
      title: "Industrielle Extrusion",
      image: {
        src: "/Images/projects/Porcelain/image00008.jpeg",
        alt: "Industrieller Extruder bei Kober Porzellan",
        caption: "Form wird durch eine feste Matrize definiert und kontinuierlich extrudiert",
      },
          points: [
      "Form wird durch eine feste Matrize definiert",
      "Kontinuierlicher, linearer Materialfluss",
      "Herstellung standardisierter keramischer Profile",
      "Prozess basiert auf wiederholbarer Produktion",
    ],
    },
    {
      title: "Keramischer 3D-Druck",
      image: {
        src: "/Images/projects/Porcelain/3D-Drucker.jpg",
        alt: "Keramischer 3D-Drucker",
        caption: "Form entsteht durch schichtweises Auftragen entlang einer gesteuerten Bewegungsbahn",
      },
    points: [
  "Druckkopf bewegt sich entlang koordinierter X-, Y- und Z-Achsen",
  "Material wird schichtweise aufgebaut",
  "Ermöglicht die Herstellung freier, komplexer Formen",
  "Form wird digital vorab definiert",
],

    },
  ],
  conclusion: `Beide Verfahren zeigen klar definierte Formen der Steuerung: Während in der industriellen Extrusion Form über die Geometrie der Matrize festgelegt wird, entsteht sie im 3D-Druck durch eine vorab bestimmte Bewegungsabfolge im Raum.

In beiden Fällen ist der Prozess weitgehend vorstrukturiert und lässt nur begrenzten Spielraum für situative Eingriffe während der Formgebung.

Aus dieser Gegenüberstellung entsteht die Frage, ob sich Extrusion als Verfahren so erweitern lässt, dass Form nicht ausschließlich durch Werkzeug oder digitale Planung bestimmt wird, sondern im direkten Zusammenspiel von Material, Bewegung und menschlicher Entscheidung entsteht.`,
},


intervention: {
  title: "Manual Extrusion System",

   intro: `Ausgehend vom Vergleich industrieller Extrusion und keramischem 3D-Druck wurde ein eigenes manuelles Extrusionssetup entwickelt. Im Vordergrund stand nicht ein fertiges Produkt, sondern ein Verfahren, das während der Formgebung offen für Materialverhalten, Bewegung und situative Entscheidungen bleibt.`,
  media: {
    src: "/Images/projects/Porcelain/Extruderaufbau.png",
    alt: "Aufbau des manuellen Extrusionssystems mit Kartuschenpresse, Schablonen, Schwamm, Bomse und Trennmittel",
    caption: "Aufbau der manuellen Extrusion: Die vorbereitete Porzellanmasse wird mit einer Kartuschenpresse durch austauschbare Schablonen gedrückt und auf mit Trennmittel beschichtete Bomsen extrudiert.",
  },
    parameterIntro: {
  title: "Beobachtete Einflussfaktoren",
  text: `Im Verlauf der Arbeit zeigen sich unterschiedliche Faktoren, die beeinflussen, wie die Porzellanstränge austreten, sich ablegen und im Raum verhalten. Diese wirken gleichzeitig und überlagern sich während des Prozesses.

Einige dieser Faktoren lassen sich direkt verändern, andere ergeben sich aus der räumlichen Situation oder treten erst im Verlauf der Extrusion in Erscheinung.`,},

parameterGroups: [
  {
    title: "Steuerbare Parameter",
    intro: "Diese Parameter können vor oder während der Extrusion verändert werden und bilden die aktiven Eingriffspunkte des Prozesses.",
    items: [

      // Materialkonsistenz
      {
        title: "Materialkonsistenz",
        text: "Die Konsistenz der Porzellanmasse bestimmt die Viskosität und verändert, wie sich die Stränge während und nach der Extrusion verhalten.",
        observation:
          "Die Viskosität wird über den Wasseranteil gesteuert und bestimmt Fließen, Stabilität und Bruchverhalten.",
        behaviour:
          "Bei hohem Wasseranteil fließen die Stränge, verlieren ihr Profil und verbinden sich. Bei geringem Wasseranteil sind sie stabiler, aber spröde und brechen schneller.",
        sensitiveRange:
          `Innerhalb eines bestimmten Bereichs lassen sich die Stränge gleichmäßig extrudieren. Sie bleiben stabil, können übereinandergelegt werden und bilden Überhänge oder Spannungen.
    Dieser Bereich verschiebt sich bereits durch kleine Prozessveränderungen.`,

        media: [
          {
            src: "/Images/projects/Porcelain/materialfluessig02.jpg",
            group: "höherer Wasseranteil",
            alt: "Flache Porzellanstränge, die sich auf einer Oberfläche zu einem zusammenhängenden Netzwerk verbinden",
            caption: "Die Stränge verlaufen nach dem Auftrag und verbinden sich zu einer flächigen Struktur mit weichen Übergängen. Einzelne Bahnen bleiben nur teilweise lesbar, während das Material unter Eigengewicht weiterfließt."
          },
          {
            src: "/Images/projects/Porcelain/materialfluessig01.jpg",
            group: "höherer Wasseranteil",
            alt: "Mehrere weiche Porzellansegmente mit abgerundeten Formen und sichtbarer seitlicher Verformung",
            caption: "Die extrudierten Segmente behalten zunächst ihre Spur, setzen sich jedoch zu niedrigen, abgerundeten Formen ab. Das Material zeigt ein Nachgeben nach der Ablage und verändert seine Kontur weiter."
          },
          {
            src: "/Images/projects/Porcelain/Materialstabil02.jpg",
            group: "mittlerer Wasseranteil",
            alt: "Lange Porzellanstränge, die sich in einer Form überlagern und Schlaufen bilden",
            caption: "Die Stränge sammeln sich im Formkörper, behalten weitgehend ihr Profil und bilden Schlaufen und Überlagerungen. In diesem Zustand reagiert das Material flexibel auf Ablage, Krümmung und Eigengewicht."
          },
          {
            src: "/Images/projects/Porcelain/materialstabil01.jpg",
            group: "mittlerer Wasseranteil",
            alt: "Porzellanstränge, die sich um die Wand eines Gefäßes legen und zwischen Punkten spannen",
            caption: "Die Stränge legen sich um die Gefäßform und bleiben als einzelne Linien erkennbar. Das Material folgt der Krümmung, ohne unmittelbar zu verlaufen, und bildet stellenweise gespannte Verbindungen zwischen Auflagepunkten."
          },
          {
            src: "/Images/projects/Porcelain/materialfest01.JPG",
            group: "geringerer Wasseranteil",
            alt: "Porzellan wird aus einer Düse gepresst, wobei der Strang ungleichmäßig austritt und an der Oberfläche aufreißt",
            caption: "Der Strang tritt ungleichmäßig aus der Düse aus und zeigt eine raue, aufgerissene Oberfläche. Das Material lässt sich weiter extrudieren, reagiert aber weniger fließend und bildet Unterbrechungen in der Spur."
          },
          {
            src: "/Images/projects/Porcelain/materialfest02.jpg",
            group: "geringerer Wasseranteil",
            alt: "Spiralförmig aufgebaute Porzellanstruktur mit mehreren Brüchen an den Kanten",
            caption: "Die gewickelte Struktur behält ihre Form, zeigt jedoch mehrere Bruchstellen entlang der belasteten Bereiche. Das Material bleibt formstabil, reagiert aber empfindlich auf Biegung und Spannung."
          }
        ]
      },

      // Schablone
      {
        title: "Schablone",
        text: "Die Schablone bestimmt den Querschnitt des extrudiereten Materials und mitbestimt dessen Verhalten.",
        observation: "Unterschiedliche Öffnungen erzeugen Stränge mit verschiedenen Querschnitten, von runden bis zu eckigen und asymmetrischen Profilen. Auch feine Strukturen wie Rillen bleiben im Material sichtbar.",
        behaviour: "Die Stränge treten je nach Profil unterschiedlich aus. Runde Öffnungen erscheinen gleichmäßiger, während komplexere oder ungleichmäßige Profile unruhigere Kanten zeigen. Bei asymmetrischen Öffnungen zeigt der Strang bereits beim Austritt eine seitliche Bewegung.",
        sensitiveRange: "Alle getesteten Profile lassen sich extrudieren. Unterschiede zeigen sich in der Ausprägung: Einige Stränge übernehmen das Profil klar, andere zeigen Abweichungen in Form und Ablage.",

        media: [
          {
            src: "/Images/projects/Porcelain/schablonen.jpg",
            alt: "Laserprofile für die Schablonen",
            caption: "Verschiedene Öffnungsgeometrien, die als Schablonen für die Extrusion verwendet wurden, darunter rechteckige, asymmetrische und profilierte Formen. Teilweise basieren sie auf Variationen einer Grundform."
          },
          {
            src: "/Images/projects/Porcelain/extruderprofil.JPG",
            alt: "Zwei unterschiedliche Profile treten gleichzeitig aus der Schablone aus",
            caption: "Zwei unterschiedliche Profile treten gleichzeitig aus einer Schablone aus. Die Stränge unterscheiden sich in Länge der extrudierten Masse und Oberflächenstruktur. Während der Strang mit dem runden Profil eine relativ geschlossene Oberfläche zeigt, wirkt das ovale Profil aufgerissen und fragmentiert."
          },
          {
            src: "/Images/projects/Porcelain/schabloneGlatt.JPG",
            alt: "Stapelung extrudierter Masse mit glattem Profil",
            caption: "Das flache Profil wird als durchgehender Strang extrudiert und legt sich in gleichmäßigen Bahnen übereinander. Die Form bleibt stabil, die Schichten sind klar nachvollziehbar und weitgehend glatt, mit vereinzelten kleinen Rissen."
          },
          {
            src: "/Images/projects/Porcelain/schabloneRillen.JPG",
            alt: "Stapelung extrudierter Masse mit gerilltem Profil",
            caption: "Das Material wird mit feinen, durchgehenden Rillen extrudiert, die auch in Krümmungen erhalten bleiben. Die Stränge legen sich ebenfalls gleichmäßig übereinander, wirken teilweise aber spröde."
          },
          {
            src: "/Images/projects/Porcelain/schabloneRund.JPG",
            alt: "Stapelung extrudierter Masse mit rundem Profil",
            caption: "Mehrere runde Stränge werden gleichzeitig extrudiert und bleiben als einzelne Linien getrennt erkennbar. Sie legen sich nicht in geordneten Bahnen ab, sondern überlagern und verschlingen sich räumlich."
          }
        ]
      },

      // Extruderführung
      {
        title: "Extruderührung",

        text: "Die Führung beschreibt, wie der Extruder im Raum bewegt wird und wie sich dies in der Ablage der Stränge zeigen kann.",

        observation:
          "Der Extruder wird in der Hand geführt. Abstand, Winkel, Richtung und Geschwindigkeit können frei gewählt und während des Prozesses verändert werden. Die Bewegung kann konstant bleiben oder spontan angepasst werden.",

        behaviour:
          "Die Bewegung wirkt sich auf die Ablage der Stränge aus. Je nach Führung entstehen unterschiedliche Ablagen, Verdichtungen, Überlagerungen oder frei fallende Abschnitte. Die Ausprägung wird dabei auch durch das Verhalten des Materials beeinflusst.",

        sensitiveRange:
          "Die Bewegung gibt eine Richtung vor, wird jedoch durch das Verhalten des Materials mitgeprägt. Wiederholte Abläufe führen zu ähnlichen Strukturen, bleiben jedoch in ihrer konkreten Ausformung variabel. Veränderungen in der Bewegung können sich direkt in der Ablage der Stränge zeigen.",

        media: [
          {
            src: "/Images/projects/Porcelain/bewegung01.jpeg",
            alt: "Extrusion innerhalb einer Schale mit sichtbarer Ablage der Stränge",
            caption: "Die Stränge treten kontinuierlich aus dem Extruder aus und werden direkt in die begrenzte Form abgelegt. Während der Bewegung lagern sie sich übereinander, weichen einander aus und verdichten sich in einzelnen Bereichen. Die Ablage verändert sich je nach Position im Raum und der vorhandenen Begrenzung.",
          },
          {
            src: "/Images/projects/Porcelain/bewegung001.jpg",
            alt: "Vergleich zwischen gerader und bewegter Extrusion",
            caption: "Bei gleichbleibender Extrusionsmenge zeigen sich unterschiedliche Ablagen in Abhängigkeit von der Bewegung. Eine gleichmäßige, lineare Führung ergibt gestreckte Stränge, während bei langsamerer Bewegung Material lokal aufstaut, seitlich verdrängt wird und in Krümmungen sowie Überlagerungen ausweicht.",
          },
          {
            src: "/Images/projects/Porcelain/Bewegungskizze.jpg",
            alt: "Skizze einer Bewegungsabfolge und daraus resultierende Struktur",
            caption: "Wiederholte Bewegungsabfolgen werden als kontinuierliche Linien beschrieben. In der materiellen Ablage folgen die Stränge dieser Bewegungslogik, zeigen jedoch Abweichungen in ihrer Ausformung durch Eigengewicht und Materialverhalten.",
          },
          {
            src: "/Images/projects/Porcelain/Bewegung45.jpg",
            alt: "Vergleich zweier Extrusionen mit unterschiedlichem Abstand zur Form",
            caption: "Bei geringem Abstand lagern sich die Stränge dicht und lokal begrenzt ab. Bei größerem Abstand treten sie zunächst frei aus, fallen weiter und verteilen sich räumlich, wodurch offenere und weiter gestreute Strukturen entstehen.",
          },
          {
            src: "/Images/projects/Porcelain/BewegungAB.jpg",
            alt: "Vergleich zwischen zwei Ablagesituationen bei unterschiedlicher Ausrichtung",
            caption: "Bei konstanter Extrusion zeigen sich unterschiedliche Ablagen in Abhängigkeit von Ausrichtung und Bewegung. Wird der Extruder parallel zur Oberfläche gehalten, lagern sich die Stränge schichtweise und geordnet ab. Bei senkrechter Ausrichtung können sie nicht direkt aufliegen und weichen seitlich aus, wodurch Schlaufen und Überlagerungen entstehen.",
          }
        ]
      },
    ],
  },

  {
    title: "Räumliche Bedingungen",
    intro: "Diese Elemente definieren den Raum, in dem sich die extrudierten Stränge ablegen, stützen oder begrenzen.",
    items: [
      {
        title: "Bomse",
        text: "Die Bomse dient als formgebender Gegenkörper und temporäre Stütze während der Extrusion, des Trocknens und des Brandes.",

        observation:
          "Die gegossenen Elemente werden vor der Extrusion positioniert und mit Trennmittel vorbereitet. Die Porzellanstränge werden auf, um oder zwischen diesen Formen abgelegt und übernehmen dabei deren räumliche Situation als Ausgangspunkt für die weitere Ablage.",

        behaviour:
          "Je nach Form und Anordnung der Bomsen verändern sich Auflagepunkte, Abstände und Richtungen der Stränge. Dadurch entstehen unterschiedliche Ablagen: Stränge können sich über Oberflächen legen, zwischen Punkten geführt werden oder sich an bestimmten Bereichen sammeln.",

        sensitiveRange:
          "Die Bomse bleibt während des Prozesses als unterstützende Struktur erhalten und wird gemeinsam mit dem extrudierten Material gebrannt. Dadurch können auch fragile oder schwer transportierbare Strukturen bis zum Brand gestützt bleiben.",

        media: [
          {
            src: "/Images/projects/Porcelain/bomse01.jpg",
            alt: "Extrudierte Stränge auf zwei vorbereiteten Bomsen vor dem Brand",
            caption: "Die Stränge werden auf zwei mit Trennmittel vorbereitete Bomsen extrudiert. Sie liegen teilweise auf den Oberflächen auf, überbrücken jedoch einzelne Bereiche und bilden freie Abschnitte zwischen den Kontaktflächen."
          },
          {
            src: "/Images/projects/Porcelain/bomse03.jpg",
            alt: "Extrusion auf einer vertikalen Bomse mit Überhängen",
            caption: "Die Extrusion erfolgt auf einer vertikal ausgerichteten Bomse. Die Stränge werden über die Kante hinaus abgelegt und bilden Überhänge, die entlang der Form nach unten verlaufen aber auh frei stehen."
          },
          {
            src: "/Images/projects/Porcelain/bomse04.JPG",
            alt: "Mehrere Bomsen als Stützstruktur für extrudierte Stränge",
            caption: "Mehrere Bomsen werden als Stützstruktur kombiniert. Die Stränge lagern sich auf den Kontaktflächen ab und verbinden einzelne Körper über kurze Abschnitte miteinander."
          },
          {
            src: "/Images/projects/Porcelain/bomse05.jpg",
            alt: "Extrusion innerhalb einer Brennkapsel mit zwei Bomsen",
            caption: "Die Extrusion erfolgt innerhalb einer Brennkapsel, die den Raum begrenzt. Zwei Bomsen sind darin positioniert und besetzen Teile dieses Volumens. Die Stränge lagern sich im verbleibenden Raum ab, wodurch die von den Bomsen eingenommenen Bereiche im extrudierten Körper ausgespart bleiben."
          },
          {
            src: "/Images/projects/Porcelain/bomse07.jpg",
            alt: "Vertikale Schlaufen extrudierter Stränge auf hoher Bomse",
            caption: "Die Stränge werden auf eine hohe Bomse extrudiert und bilden vertikal ausgerichtete Schlaufen. Einzelne Abschnitte hängen frei nach unten, während andere den Boden erreichen und sich dort ablegen."
          },
          {
            src: "/Images/projects/Porcelain/bomse06.jpg",
            alt: "Freie Abschnitte extrudierter Stränge ohne direkte Auflage",
            caption: "Die Stränge werden zwischen mehreren Punkten abgelegt und bilden Abschnitte ohne direkte Auflage. Einige dieser Bereiche bleiben frei gespannt, ohne unmittelbar abzusacken."
          }
        ]
      },
    ],
  },

  
{
  title: "Prozessdynamiken",
  intro: "Diese Dynamiken entstehen während der Extrusion aus dem Zusammenspiel von Material, Bewegung, Raum und Schwerkraft. Sie lassen sich beeinflussen, aber nicht vollständig kontrollieren.",
  items: [
    {
      title: "Schwerkraft",
      text: "Schwerkraft wirkt während der Extrusion kontinuierlich auf das Material und wird im Prozess als formgebende Kraft mitgenutzt.",
      observation:
        "Freie Strangabschnitte hängen durch, fallen auf darunterliegende Bereiche oder legen sich entlang vorhandener Formen ab. Je nach Abstand, Auflagepunkt und Bewegung entstehen gespannte Bereiche, Überhänge oder Verdichtungen.",
      behaviour:
        "Die Schwerkraft lässt sich nicht direkt einstellen, wird aber durch die Führung des Extruders und die Position der Bomsen unterschiedlich wirksam. Wird Material über Kanten, Zwischenräume oder aus größerem Abstand abgelegt, verändert sich seine räumliche Ablage deutlich.",
      sensitiveRange:
        "Kleine Veränderungen in Abstand, Materialkonsistenz oder Auflagepunkten können bestimmen, ob ein Strang frei hängt, sich spannt, absackt oder auf einer Form aufliegt.",
    },
    {
      title: "Stranginteraktion",
      text: "Während der Extrusion reagieren die Stränge nicht nur auf Werkzeug und Untergrund, sondern auch aufeinander.",
      observation:
        "Stränge treffen aufeinander, liegen übereinander, bleiben getrennt sichtbar oder weichen seitlich aus. In dichter Ablage entstehen Überlagerungen und Verdichtungen, während bei größerem Abstand offenere Zwischenräume sichtbar bleiben.",
      behaviour:
        "Die Interaktion der Stränge wird durch Bewegung, Winkel, Abstand und Materialmenge beeinflusst. Je nachdem, wie der Extruder geführt wird, können Stränge parallel abgelegt werden, sich kreuzen, gegenseitig verdrängen oder ineinander verschlingen.",
      sensitiveRange:
        "Die genaue Interaktion entsteht im Moment der Ablage und bleibt nur begrenzt vorhersagbar. Wiederholte Bewegungen können ähnliche Strukturen erzeugen, aber die konkreten Berührungen, Verschiebungen und Überlagerungen variieren.",
    },
  ],
},
],

conclusion: `Die Untersuchungen zeigen, dass Form nicht als vorab definierte Geometrie entsteht, sondern als Ergebnis eines Prozesses, in dem Material, Werkzeug, Bewegung und räumliche Bedingungen gleichzeitig wirken.

Die Formbildung verschiebt sich damit von einer kontrollierten Ausführung hin zu einer situativen Aushandlung im Prozess. Entscheidungen entstehen nicht nur vorab, sondern kontinuierlich während der Extrusion.

Das Setup eröffnet damit eine Form der Gestaltung, die weniger auf Reproduzierbarkeit ausgerichtet ist, sondern auf das gezielte Arbeiten mit Variabilität, Materialverhalten und Prozessdynamiken.`,
},

formations: {
  title: "Weiterführende Untersuchungen",

  intro: `Im Anschluss an die Versuche wurde mit den entstandenen Elementen weitergearbeitet. Dabei ging es weniger um einzelne Objekte als um die Frage, welche Eigenschaften sich aus der Arbeitsweise ergeben und in welche Richtungen sich diese weiterentwickeln lassen.

Die folgenden Beispiele zeigen unterschiedliche Ansätze, in denen Wiederholung, Kombination und räumliche Konfiguration erprobt wurden.`,

  items: [

    {
      title: "Wiederholung und Variation",
      image: {
        src: "/Images/projects/Porcelain/quadratisch.jpg",
        alt: "Mehrere ähnliche extrudierte Porzellanobjekte mit variierenden Ausprägungen",
      },

      text: `Mehrere Elemente entstehen unter vergleichbaren Bedingungen und zeigen eine gemeinsame formale Richtung. Gleichzeitig unterscheiden sie sich in ihrer konkreten Ausprägung, etwa in Dichte, Auslenkung oder Überlagerung.

Es entsteht eine Reihe von Formen, die sich als zusammengehörig lesen lassen, ohne identisch zu sein. Daraus ergibt sich die Frage, inwiefern sich solche Serien gezielt weiterentwickeln oder differenzieren lassen.`,

      parameters: [
        { label: "Material", value: "vergleichbare Konsistenz" },
        { label: "Schablone", value: "gleiches Profil" },
        { label: "Führung", value: "ähnliche Bewegungsabläufe" },
      ],
    },

    {
  title: "Verbindungen und Verdichtung",
  subtitle: "Vom Einzelstrang zum zusammenhängenden Gefüge",

  images: [
    {
      src: "/Images/projects/Porcelain/Verbindung01.jpg",
      alt: "Lose extrudierte Porzellanstränge, einzeln liegend",
    },
    {
      src: "/Images/projects/Porcelain/einzel01.JPG",
      alt: "Zwei Stränge werden manuell miteinander verbunden",
    },
    
    {
      src: "/Images/projects/Porcelain/verbindung03.JPG",
      alt: "Mehrere Stränge bilden ein dichtes, zusammenhängendes Gefüge",
    },
    {
      src: "/Images/projects/Porcelain/verbindung02.jpg",
      alt: "Vertikale Struktur aus mehreren miteinander verbundenen Strängen",
    },
  ],

  text: `Aus einzelnen extrudierten Strängen entstehen durch Schlaufen und Unregelmäßigkeiten Verbindungen, die sich zu größeren Gefügen verdichten können. Dabei entstehen Strukturen, in denen sich Tragfähigkeit, Flexibilität und gegenseitige Stützung unterschiedlich ausprägen. Die Versuche zeigen Ansätze, wie sich aus einzelnen Elementen zusammenhängende Körper entwickeln könnten.`,

  parameters: [
    { label: "Profil", value: "variierende Dicke" },
    { label: "Verbindung", value: "Schlaufen, Einhaken" },
    { label: "Dynamik", value: "Eigengewicht, Spannung" },
    { label: "Variation", value: "Einzelteil → Gefüge" },
  ],
},

    {
      title: "Räumliche Konfiguration",


      images: [
    {
      src: "/Images/projects/Porcelain/komplex01.png",
      alt: "Lose extrudierte Porzellanstränge, einzeln liegend",
    },
    {
      src: "/Images/projects/Porcelain/komplex02.png",
      alt: "Zwei Stränge werden manuell miteinander verbunden",
    },
    
    
    {
      src: "/Images/projects/Porcelain/kompakt7.JPG",
      alt: "Vertikale Struktur aus mehreren miteinander verbundenen Strängen",
    },
    {
      src: "/Images/projects/Porcelain/kompakt.JPG",
      alt: "Mehrere Stränge bilden ein dichtes, zusammenhängendes Gefüge",
    },
  ],

      text: `Die räumliche Konfiguration beeinflusst maßgeblich, wie sich extrudierte Stränge organisieren und welche strukturellen Eigenschaften daraus entstehen.

Während offene Anordnungen mit größeren Zwischenräumen, Überhängen und Schlaufen arbeiten, entstehen durch begrenzte oder fokussierte Ablage kompaktere Gefüge. Die Stränge lagern sich dabei dichter übereinander, stabilisieren sich gegenseitig und bilden klar abgegrenzte Volumen.

Der Unterschied liegt nicht nur im Grad der Dichte, sondern in der zugrunde liegenden räumlichen Logik: Verteilte Ablage erzeugt durchlässige, ausgreifende Strukturen, während gebündelte Führung zu konzentrierten, verdichteten Körpern führt.

Die Versuche zeigen, dass sich durch die gezielte Variation der räumlichen Rahmenbedingungen unterschiedliche strukturelle Zustände erzeugen lassen – von offenen Netzwerken bis hin zu kompakten, eigenständigen Volumen.`,
  
  parameters: [
    { label: "Raumtyp", value: "offen / begrenzt" },
    { label: "Ablage", value: "verteilt / gebündelt" },
    { label: "Struktur", value: "durchlässig / verdichtet" },
    { label: "Dynamik", value: "Überhänge, Schlaufen, Auflage" }
  ]
    },

  ],
},


reflection: {
  summary: `Das Projekt hat gezeigt, dass sich industrielle Porzellanextrusion tatsächlich öffnen lässt, wenn Kontrolle teilweise abgegeben wird und Materialverhalten stärker in den Gestaltungsprozess eingebunden wird. Durch die Kombination aus Material, Werkzeug, Bewegung und Schwerkraft entstanden Formen, die im Voraus nur bedingt planbar waren und sich erst im Prozess entwickelt haben.

Besonders spannend war zu beobachten, wie aus einfachen Eingriffen zunehmend komplexere Strukturen entstehen konnten. Gleichzeitig wurde deutlich, wie stark der Prozess von manueller Steuerung, situativen Entscheidungen und begrenzter Zeit geprägt war. Gerade diese Eingriffe eröffneten neue formale Möglichkeiten, machten einzelne Ergebnisse jedoch auch schwer reproduzierbar. Viele Beobachtungen konnten dadurch nur angerissen und nicht vollständig untersucht werden.`,


nextStep: `Eine mögliche Weiterentwicklung besteht darin, die entstandenen Erkenntnisse gezielter weiterzuentwickeln und einzelne Zusammenhänge präziser zu untersuchen. Gleichzeitig interessiert mich, wie sich die Offenheit des Prozesses in digitale oder hybride Fertigungssysteme übertragen lässt — beispielsweise durch robotische Steuerung, Simulation oder generative Prozesse.

Spannend wäre dabei vor allem die Frage, wie sich Kontrolle und Offenheit neu ausbalancieren lassen, ohne die emergenten Qualitäten des Materials zu verlieren.

Langfristig könnte der Ansatz auch auf größere Material-, Produktions- oder räumliche Systeme übertragen werden.`,
}



},
{
  slug: "additional-projects",
  title: "Recurring Questions",
  subtitle:
    "Kleinere Untersuchungen zu Infrastruktur, Materialökologie, Care, Bewegung und Wahrnehmung",

  hero: {
    media: {
      type: "image",
      src: "/Images/projects/Mindmap.png",
      alt: "Collage verschiedener kleiner Projekte",
      caption:
        "Unterschiedliche Projekte, verbunden durch wiederkehrende systemische Fragestellungen",
    },
  },

  meta: [
    { label: "Year", value: "2020–2024" },
    { label: "Type", value: "Additional Investigations" },
    { label: "Focus", value: "Behavior · Ecology · Accessibility" },
  ],

  thesis: {
    label: "Positioning",
  question: `Why These Projects Matter`,

  motivation: `Diese Seite versammelt kleinere Projekte, die in unterschiedlichen Kontexten entstanden sind und nicht alle als vollständig ausgearbeitete Hauptarbeiten verstanden werden.

Für mich sind sie trotzdem relevant, weil sie zeigen, welche Fragen in meiner Arbeit immer wieder auftauchen: Wie beeinflussen gestaltete Systeme menschliches Verhalten? Welche ökologischen oder sozialen Folgen entstehen durch alltägliche Objekte? Und wie kann Gestaltung unterstützen, ohne Kontrolle vollständig zu übernehmen?

Die Projekte sind daher weniger als Sammlung abgeschlossener Ergebnisse zu verstehen, sondern als Hinweise auf wiederkehrende Interessen, die sich durch mein Portfolio ziehen: Systeme, Abhängigkeiten, Zugänglichkeit, Materialspuren und menschliche Handlungsspielräume.`,
},

    recurringQuestions: {
  eyebrow: "Additional Investigations",
  title: "Weitere Projekte",

  intro: `Diese Auswahl versammelt kleinere Projekte, Skizzen und Untersuchungen, die nicht den Umfang meiner Hauptprojekte haben, aber einzelne Interessen und Denkbewegungen sichtbar machen. Die Arbeiten reichen von Material- und Objektstudien bis zu Fragen rund um Mobilität, Wohnen, Gesundheit und Wahrnehmung.

Ich verstehe sie weniger als abgeschlossene Positionen, sondern als kurze Einblicke in Themen, die ich ausprobiert, weitergedacht oder später wieder aufgegriffen habe.`,

items: [
        {
  title: "Seeing Through Sound",
  context: "Perception · Echolocation · Wearable Interfaces",
  question:
    "How can sound become an alternative way of sensing space?",
  text: `Das Projekt entstand aus dem übergeordneten Thema Sound und der Frage, welche Rolle Geräusche für unsere Orientierung im Alltag spielen. Durch Soundwalks und erste Klangexperimente wurde mir bewusst, wie viele räumliche Informationen wir permanent über akustische Signale wahrnehmen — meist unbewusst.

Im Rahmen meiner Recherche entdeckte ich die Arbeit von blinden Echoortungs-Nutzer:innen wie Daniel Kish, die ihre Umgebung über Klickgeräusche und deren Reflexion räumlich erfassen. Mich faszinierte die Frage, wie präzise das Gehirn diese Informationen verarbeiten kann.

Daraufhin beschäftigte ich mich mit Studien zu Neuroplastizität und auditiver Wahrnehmung. Besonders spannend war für mich die Erkenntnis, dass reflektierte Schallinformationen bei geübten Nutzer:innen teilweise im visuellen Cortex verarbeitet werden.

Parallel führte ich eigene Experimente durch und testete, wie unterschiedliche Materialien, Formen und Winkel reflektierten Schall verändern. Mit Alltagsobjekten versuchte ich selbst, räumliche Unterschiede über Klickgeräusche wahrzunehmen und ein besseres Verständnis für diese Wahrnehmungsform zu entwickeln.

Darauf aufbauend untersuchte ich, wie ein unterstützendes technisches System gestaltet werden könnte: Welche Frequenzen eignen sich für unterschiedliche Distanzen? Wo müsste eine Schallquelle am Körper positioniert sein? Wie könnte ein System gesteuert und durch Bewegung oder körpernahe Energiequellen versorgt werden?

Das Projekt war eine offene Untersuchung eines wenig erforschten Wahrnehmungsphänomens und der Frage, ob und wie dieses technisch sinnvoll unterstützt werden könnte.`,
  

images: [
    {
      src: "/Images/projects/additional/ChatGPT Image 4. Mai 2026, 00_53_40.png",
      alt: "Research material on human echolocation and click sonar",
      caption:
  "Speculative visualization of a wearable interface that translates human echolocation into navigational feedback. AI-assisted concept image."
    },
    {
      src: "/Images/projects/additional/soundproto.png",
      alt: "Sketches of wearable sound and sensor concepts",
      caption:
  "Early body-placement experiments testing where acoustic feedback could be perceived most intuitively — including finger, wrist and forehead placements."
    },
    {
      src: "/Images/projects/additional/soundpiezo.png",
      alt: "Sketches of wearable sound and sensor concepts",
      caption:
  "Hands-on experiments with piezo transducers and resonating materials to explore how directional sound could be amplified and spatialized."
    },
    {
      src: "/Images/projects/additional/soundscience.png",
      alt: "Wearable prototype experiments for sound-based perception",
      caption:
  "Acoustic analysis of human echolocation clicks used as research reference for understanding frequency patterns and reflected signals. Source: Thaler et al., PLOS Computational Biology (2017)"
    },
  ],
  },

      {
  title: "Traces of Dust",
  context: "Material Systems · Circular Production · Speculative Ecology",
  question:
    "What do we leave behind without noticing?",

  text: `Das Projekt entstand aus dem übergeordneten Thema Staub und der Frage, welche materiellen Spuren alltägliche Routinen hinterlassen. Ein oft übersehener Abrieb entsteht bei Schuhsohlen: Mit jedem Schritt lösen sich kleinste Partikel, die als Mikroplastik in Umweltkreisläufe gelangen- ein Prozess, an dem nahezu jede Person täglich beteiligt ist, ohne ihn bewusst wahrzunehmen.

Statt lediglich zu überlegen, wie sich dieser Abrieb reduzieren lässt, untersuchte ich nach dem Cradle-to-Cradle-Prinzip, ob daraus sogar ein positiver Beitrag entstehen kann. Frei nach dem Gedanken „weniger schlecht ist nicht automatisch gut“ stellte sich die Frage, ob ein Material, das sich bewusst abträgt, im besten Fall der Umwelt sogar etwas zurückgeben könnte.

Dafür entwickelte ich eigene Biokunststoffe auf Dextrinbasis und experimentierte mit verschiedenen organischen Zusatzstoffen wie Kaffeesatz, Dünger und gepressten biologischen Reststoffen wie Pferdemist.

Parallel entstand die Idee eines offenen Produktionssystems: Sohlenformen können individuell angepasst und per 3D-Druck selbst hergestellt werden, während Rezepturen und Produktionsdaten Open Source zugänglich bleiben. Nutzer:innen könnten ihre Sohlen selbst produzieren, reparieren und mit neuen Materialmischungen weiterentwickeln.

Durch die eigene Herstellung und Reparatur entsteht ein direkterer Bezug zum Produkt und seinem Materialverbrauch. Anstelle eines Wegwerfprodukts rückt ein bewussterer Umgang mit Verschleiß, Nutzung und Lebensdauer in den Fokus.

Das Projekt versteht Schuhsohlen als Teil eines größeren Materialkreislaufs und untersucht, wie alternative Produktionsmodelle unseren Umgang mit Ressourcen verändern könnten.`,
  images: [
    {
      src: "/Images/projects/additional/Waage.JPG",
      alt: "Visualisierung von Schuhsohlenabrieb",
      caption:
        "100 Gramm konventionelles Sohlenmaterial. Ungefähr die Menge, die eine Person pro Jahr durchschnittlich durch Schuhabrieb verliert und meist unbemerkt in Umweltkreisläufe abgibt.",
    },

    {
      src: "/Images/projects/additional/fläschchen.JPG",
      alt: "Materialkomponenten des Biokunststoffs",
      caption:
        "Materialrezept des finalen Biokunststoffs: Essig, Zucker, Dextrin und ein variabler Feststoff - hier Kaffeesatz.",
    },

    {
      src: "/Images/projects/additional/Material.JPG",
      alt: "Materialtests",
      caption:
        "Materialtests zur Untersuchung von Flexibilität, Abriebverhalten und Bearbeitbarkeit des entwickelten Sohlenmaterials.",
    },

    {
      src: "/Images/projects/additional/sohlenform.JPG",
      alt: "Form zur Sohlenherstellung",
      caption:
        "Offene Produktionsform zur eigenständigen Herstellung, Reparatur und Reproduktion individuell angepasster Sohlen.",
    },

    {
      src: "/Images/projects/additional/Sandale.JPG",
      alt: "Finaler Sandalenprototyp",
      caption:
        "Finaler Prototyp, der die Materialexperimente in ein tragbares Artefakt übersetzt.",
    },
  ],
},

        
      ],

      closing: `pliplaplupppibumuumumumussssss`,
    },
  },
];

export default projects;