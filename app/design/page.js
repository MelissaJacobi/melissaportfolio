"use client";
import Card from "../components/Card";
import Footer from "../components/Footer";


export default function Design() {
  const projects = [
    {
      imgUrl: "/can-mockup.jpg",
      projectName: "Driftstone",
      softwares: ["Adobe Photoshop", "Adobe Illustrator"],
    },
    {
      imgUrl: "/gatsby-mockup-sm.jpg",
      projectName: "Gatsby",
      softwares: ["Adobe Photoshop", "Adobe Illustrator"],
    },
    {
      imgUrl: "/elfheim-mockup-2.jpg",
      projectName: "Elfheim",
      softwares: ["Adobe Photoshop", "Adobe Illustrator"],
    },
    {
      imgUrl: "/drill.webp",
      projectName: "Drill",
      softwares: ["Adobe Illustrator"],
    },
    {
      imgUrl: "/quackattack.png",
      projectName: "QuackAttack",
      softwares: ["Adobe Illustrator", "Krita", "Photoshop", "AfterEffects", "Gdevelop"],
    },
  ];


  return (
    <>
      <div className="flex flex-wrap justify-center gap-6 p-6 ">
        {projects.map((project, index) => (
          <Card
            key={index}
            imgUrl={project.imgUrl}
            projectName={project.projectName}
            softwares={project.softwares}
          />
        ))}
      </div>
    </>
  );
}
