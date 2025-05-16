"use client";
import Card from "../components/Card";


export default function uiux() {
  const projects = [
    {
      imgUrl: "/hive-five-cover.png",
      projectName: "Hivefive",
      softwares: [ "Adobe Illustrator", "Javascript", "Next.js", "Figma", "HTML", "CSS"],
    },
    {
      imgUrl: "/reachout-cover-proper.jpg",
      projectName: "ReachOut",
      softwares: ["Adobe After Effects", "Adobe Illustrator", "Adobe Premier Pro", "Figma", "Trello"],
    },
  ];


  return (
    <div className="flex flex-wrap gap-10 p-10 ">
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
