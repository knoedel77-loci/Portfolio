export type ProjectMetaItem = {
  label: string;
  value: string;
};

export type ProjectMediaItem = {
  type: "image" | "video" | "audio" | "code" | "instagram";
  src?: string;
  alt?: string;
  caption?: string;
  code?: string;
  language?: string;
  embedUrl?: string;
  link?: string;
  caption?: string;
};

export type ProjectStorySlide = {
  type: "image" | "video";
  src: string;
  alt?: string;
  caption?: string;
  stepLabel?: string;
};

export type ProjectProcessSection = {
  title: string;
  text?: string;
  media?: ProjectMediaItem[];
};

export type ProjectOverview = {
  context: string;
  method: string;
  outcome: string;
  system?: string;
  media?: ProjectMediaItem;
};

export type ProjectInfoBlock = {
  title: string;
  text: string;
};

export type ProjectSystem = {
  overview: string;
  interaction: string;
  adaptivity: string;
  memory: string;
  media?: {
    overview?: ProjectMediaItem;
    interaction?: ProjectMediaItem;
    adaptivity?: ProjectMediaItem;
    memory?: ProjectMediaItem;
  };
};

export type ProjectSystemConceptBlock = {
  title: string;
  text: string;
  image?: string;
  imageAlt?: string;
  caption?: string;
  insight?: string;
};

export type ProjectSystemConcept = {
  eyebrow?: string;
  title: string;
  intro: string;
  caption?: string;
  context?: string;
  insight?: string;
  overview?: ProjectSystemConceptBlock;
  modes?: ProjectSystemConceptBlock;
  profile?: ProjectSystemConceptBlock;
  vividness?: ProjectSystemConceptBlock;
  memory?: ProjectSystemConceptBlock;
  reflection?: Omit<ProjectSystemConceptBlock, "image" | "imageAlt">;
  discussion?: string;
};

export type ProjectRecurringQuestionsItem = {
  title: string;
  context?: string;
  question: string;
  text: string;
  images?: {
    src: string;
    alt: string;
    caption?: string;
  }[];
};

export type ProjectRecurringQuestions = {
  eyebrow?: string;
  title: string;
  intro?: string;
  items: ProjectRecurringQuestionsItem[];
  closing?: string;
};

export type ProductionContextItem = {
  title: string;
  image: {
    src: string;
    alt: string;
    caption?: string;
  };
  points: string[];
};

export type ProductionContext = {
  title: string;
  intro?: string;
  items: ProductionContextItem[];
  conclusion?: string;
};

export type ProjectInterventionParameterMedia = {
  src: string;
  alt: string;
  caption?: string;
  group?: string;
  layout?: string;
  text?: string;
};

export type ProjectInterventionParameter = {
  title: string;
  text?: string;
  detail?: string;
  layout?: string;
  observation?: string;
  behaviour?: string;
  sensitiveRange?: string;
  media?: ProjectInterventionParameterMedia[];
};

export type ProjectInterventionParameterGroup = {
  title: string;
  intro?: string;
  items: ProjectInterventionParameter[];
  layout?: string;
  text?: string;
};

export type ProjectIntervention = {
  title: string;
  intro?: string;
  media?: {
    src: string;
    alt: string;
    caption?: string;
    group?: string;
    position?: string;
    layout?: string;
    text?: string;
  };
  conclusion?: string;
  parameterGroups?: ProjectInterventionParameterGroup[];
  parameterIntro?: {
    title: string;
    text: string;
  };
};

export type ProjectFormationItem = {
  title: string;
  subtitle?: string;
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
  images?: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  text: string;
  parameters?: {
    label: string;
    value: string;
  }[];
};

export type ProjectFormation = {
  title: string;
  intro?: string;
  items: ProjectFormationItem[];
};

export type Project = {
  slug: string;
  title: string;
  subtitle?: string;

  hero?: {
    media: ProjectMediaItem;
  };

  meta?: ProjectMetaItem[];

  thesis?: {
    label?: string;
    question: string;
    motivation?: string;
  };

  system?: ProjectSystem;
  systemConcept?: ProjectSystemConcept;

  summaryCard?: {
    summary: string;
    role: string[];
    tools: string[];
  };

  foundations?: ProjectInfoBlock[];
  designPrinciples?: ProjectInfoBlock[];

  overview?: ProjectOverview;
  processSections?: ProjectProcessSection[];
  media?: ProjectMediaItem[];

  storySequence?: {
    title?: string;
    intro?: string;
    slides: ProjectStorySlide[];
  };

  researchOverview?: {
    eyebrow?: string;
    title: string;
    description: string;
    image: string;
    imageAlt?: string;
  };

  userResearch?: {
    intro?: string;
    testA?: string;
    testB?: string;
  };

  featuredPost?: {
    title?: string;
    text?: string;
    videoSrc?: string;
    imageSrc?: string;
    instagramUrl?: string;
  };

  reflection?: {
    summary?: string;
    nextStep?: string;
    discussion?: string;
  };

  productionContext?: ProductionContext;
  intervention?: ProjectIntervention;
  formations?: ProjectFormation;
  recurringQuestions?: ProjectRecurringQuestions;
interactionSection?: ProjectInteractionSection;

};
export type AboutHero = {
  intro: string;
  body: string;
  markers: string[];
  image: {
    src: string;
    alt: string;
  };
};

export type AboutWorkMethod = {
  title: string;
  text: string;
};

export type AboutCVItem = {
  label: string;
  values: string[];
};

export type AboutExperiments = {
  eyebrow: string;
  title: string;
  intro: string;
  items: {
    title: string;
    text: string;
  }[];
};

export type AboutData = {
  hero: AboutHero;
  interests: {
    eyebrow?: string;
    title?: string;
    intro?: string;
    items?: AboutInterest[];
  };
  work: {
    eyebrow: string;
    title: string;
    items: AboutWorkMethod[];
  };
  experiments: AboutExperiments;
  cv: {
    eyebrow?: string;
    title: string;
    items: AboutCVItem[];
  };
};

export type AboutInterest = {
  title: string;
  text: string;
  questions?: string[];
};
export type ProjectInteractionSketch = {
  title?: string;
  image: string;
  imageAlt?: string;
  caption: string;
};

export type ProjectInteractionSection = {
  eyebrow?: string;
  title: string;
  description?: string;
  sketches: ProjectInteractionSketch[];
};


  
