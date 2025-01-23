"use client";
import Card from "../components/Card";
import Footer from "../components/Footer";


export default function Graphics() {
  const projects = [
    {
      imgUrl: "/can-mockup.jpg",
      projectName: "Driftstone",
      softwares: ["Adobe Photoshop", "Adobe Illustrator"],
    },
    {
      imgUrl: "/gatsby-glamour.jpg",
      projectName: "Gatsby",
      softwares: ["Adobe Photoshop", "Adobe Illustrator"],
    },
  ];


  return (
    <>
      <div className="flex flex-wrap justify-center gap-6 p-6 h-lvh">
        {projects.map((project, index) => (
          <Card
            key={index}
            imgUrl={project.imgUrl}
            projectName={project.projectName}
            softwares={project.softwares}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}
