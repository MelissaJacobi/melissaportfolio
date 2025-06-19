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
      imgUrl: "/wcddp-cover.png",
      projectName: "WCDDP",
      softwares: ["Adobe Photoshop", "Adobe Illustrator"],
    },
    {
      imgUrl: "/aqua-horse-mockup.png",
      projectName: "AquaHorse",
      softwares: ["Adobe Photoshop", "Adobe Illustrator"],
    },
    {
      imgUrl: "/werx-cover.png",
      projectName: "TheWerx",
      softwares: ["Adobe Photoshop", "Adobe Illustrator"],
    },
    {
      imgUrl: "/itb-parts-cover.png",
      projectName: "ITB",
      softwares: ["Adobe Photoshop", "Adobe Illustrator", "html", "turn.js", "javascript"],
    },
    {
      imgUrl: "/jared-walker-cover.png",
      projectName: "JaredWalker",
      softwares: ["Adobe Photoshop"],
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
    </>
  );
}
