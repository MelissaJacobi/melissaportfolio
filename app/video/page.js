"use client";
import Card from "../components/Card";


export default function uiux() {
  const projects = [
    {
      imgUrl: "/finch-cover.png",
      projectName: "Tutorial",
      softwares: [ "Adobe Illustrator", "After Effects"],
    },
  ];


  return (
    <div className="flex flex-wrap gap-10 p-10 justify-center">
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
