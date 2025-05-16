"use client";
import Card from "../components/Card";


export default function uiux() {
  const projects = [
    {
      imgUrl: "/finch.jpg",
      projectName: "Tutorial",
      softwares: [ "Adobe Illustrator", "After Effects"],
    },
    {
      imgUrl: "/violin-tut.webp",
      projectName: "Violin",
      softwares: [ "Adobe Illustrator", "After Effects"],
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
