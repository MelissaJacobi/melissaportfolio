"use client";
import Card from "../components/Card";


export default function uiux() {
  const projects = [
    {
      imgUrl: "/BCWLA-cover.png",
      projectName: "BCWLA",
      softwares: ["Adobe Illustrator"],
    },
    {
      imgUrl: "/reachout-cover-proper.png",
      projectName: "ReachOut",
      softwares: ["Adobe After Effects", "Adobe Illustrator", "Adobe Premier Pro", "Figma", "Trello"],
    },
    {
      imgUrl: "/hivefive-cover.png",
      projectName: "Hivefive",
      softwares: [ "Adobe Illustrator", "Javascript", "Next.js", "Figma", "HTML", "CSS"],
    },
  ];


  return (
    <div className="flex flex-wrap justify-center gap-10 p-10 ">
      {projects.map((project, index) => (
        <Card
          key={index}
          imgUrl={project.imgUrl}
          projectName={project.projectName}
          softwares={project.softwares}
        />
      ))}
    </div>
  );
}
