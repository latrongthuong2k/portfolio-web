"use client";

import React, { useMemo } from "react";
import SectionHeading from "./section-heading";
import { projectsData, projectsDataJP } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";

function ProjectContentJP() {
  return (
    <>
      {projectsDataJP.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project} />
        </React.Fragment>
      ))}
    </>
  );
}

function ProjectContentEN() {
  return (
    <>
      {projectsData.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project} />
        </React.Fragment>
      ))}
    </>
  );
}

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const { language } = useLanguage();
  const selectedLanguageContent = useMemo(() => {
    switch (language) {
      case "JP":
        return <ProjectContentJP />;
      case "EN":
        return <ProjectContentEN />;
      default:
        return null;
    }
  }, [language]);
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 w-full">
      <SectionHeading>My projects</SectionHeading>
      <div className={"flex justify-evenly flex-wrap "}>
        <div className={"flex flex-wrap md:w-[101rem] gap-4"}>
          {selectedLanguageContent}
        </div>
      </div>
    </section>
  );
}
