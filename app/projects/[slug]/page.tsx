import { notFound } from "next/navigation";
import projects from "@/data/projects";

import ProjectHero from "@/components/projects/ProjectHero";
import ProjectThesis from "@/components/projects/ProjectThesis";
import ProjectOverview from "@/components/projects/ProjectOverview";
import ProjectProcess from "@/components/projects/ProjectProcess";
import ProjectInteraction from "@/components/projects/ProjectInteraction";
import ProjectMedia from "@/components/projects/ProjectMedia";
import ProjectOutcome from "@/components/projects/ProjectOutcome";
import ProjectSummaryCard from "@/components/ui/project/ProjectSummaryCard";
import { mapProjectToSummaryCardProps } from "@/components/ui/project/mapProjectToSummaryCardProps";
import ProjectFoundations from "@/components/projects/ProjectFoundations";
import ProjectDesignPrinciples from "@/components/projects/ProjectDesignPrinciples";
import ProjectSystemConcept from "@/components/projects/ProjectSystemConcept";
import ProjectResearchOverview from "@/components/projects/ProjectResearchOverview";
import ProjectUserResearch from "@/components/projects/ProjectUserResearch";
import ProjectProductionContext from "@/components/ui/project/ProjectProductionContext";
import ProjectIntervention from "@/components/ui/project/ProjectIntervention";
import ProjectFormations from "@/components/projects/ProjectFormations";
import ProjectRecurringQuestions from "@/components/projects/ProjectRecurringQuestions";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const summaryCardProps = mapProjectToSummaryCardProps(project);

  return (
    <main className="project-page">
      <ProjectHero project={project} />
      <ProjectThesis project={project} />
      <ProjectRecurringQuestions project={project} />
      <ProjectProductionContext productionContext={project.productionContext}/>
      <ProjectIntervention intervention={project.intervention} />
      <ProjectFormations project={project} />
      <ProjectResearchOverview project={project} />
      <ProjectFoundations foundations={project.foundations} />
      <ProjectUserResearch project={project} />
      <ProjectDesignPrinciples designPrinciples={project.designPrinciples} />
      <ProjectOverview project={project} />
      <ProjectProcess project={project} />
      <ProjectInteraction project={project} />
      <ProjectSystemConcept project={project} />
      <ProjectMedia project={project} />
      <ProjectOutcome project={project} />
    </main>
  );
}