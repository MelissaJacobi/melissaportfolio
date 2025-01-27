"use client";
import Card from "../components/Card";


export default function uiux() {
  const projects = [
    {
      imgUrl: "/hivefive.jpg",
      projectName: "Hivefive",
      softwares: [ "Adobe Illustrator", "javascript", "Next.js", "Figma", "HTML", "CSS"],
    },
  ];


  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
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
