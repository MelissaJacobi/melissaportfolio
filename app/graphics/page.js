"use client";
import Card from "../components/Card";

export default function Graphics() {
  const projects = [
    {
      imgUrl: "/dellamatritch-low.jpg",
      projectName: "Dellamatritch",
      softwares: ["Adobe Photoshop", "Adobe Illustrator"],
    },
    {
      imgUrl: "/elfheim.jpg",
      projectName: "Elfheim",
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
