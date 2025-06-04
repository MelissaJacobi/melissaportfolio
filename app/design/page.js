"use client";
import Card from "../components/Card";
import Footer from "../components/Footer";


export default function Design() {
  const projects = [
    {
      imgUrl: "/can-mockup.png",
      projectName: "Driftstone",
      softwares: ["Adobe Photoshop", "Adobe Illustrator"],
    },
    {
      imgUrl: "/gatsby-cover.png",
      projectName: "Gatsby",
      softwares: ["Adobe Photoshop", "Adobe Illustrator"],
    },
    {
      imgUrl: "/elfheim-cover.png",
      projectName: "Elfheim",
      softwares: ["Adobe Photoshop", "Adobe Illustrator"],
    },
    {
      imgUrl: "/drill-cover.png",
      projectName: "Drill",
      softwares: ["Adobe Illustrator"],
    },
    {
      imgUrl: "/quackattack-cover.png",
      projectName: "QuackAttack",
      softwares: ["Adobe Illustrator", "Krita", "Photoshop", "AfterEffects", "Gdevelop"],
    },
  ];


  return (
    <>
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
    </>
  );
}
