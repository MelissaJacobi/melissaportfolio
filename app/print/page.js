"use client";
import Card from "../components/Card";


export default function Graphics() {
  const projects = [
    {
      imgUrl: "/can-mockup.jpg",
      projectName: "Driftale",
      softwares: ["Adobe Photoshop", "Adobe Illustrator"],
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
