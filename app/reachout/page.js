"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import NextProjectButton from "../components/NextProjectButton";
import { FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

const timelineSteps = [
  {
    id: 1,
    title: "Prisoner is released",
    description:
      "Since Canadian prisons do not allow any internet use, recently released prisoners feel overwhelmed searching for a new job, as they have not used the internet for the duration of their incarceration.",
    image: "/overwhelmed.svg",
  },
  {
    id: 2,
    title: "Prisoners reach out to nonprofit organizations",
    description:
      "These organizations assist them in finding jobs and provide guidance on reintegration.",
    image: "/help.svg",
  },
  {
    id: 3,
    title: "Organizations apply to employers on the individual's behalf",
    description:
      "Before ReachOut, Organizations would utilize mutliple tools to apply for jobs such as glassdoor and indeed. They would rely on excel to keep their clients organized.",
    image: "/sent.svg",
    badge: true,
  },
];

const discoveryText = [
  "1. There was no integrated system for these nonprofit organizations.",
  "2. Employers were facing labour shortages.",
  "3. Former prisoners possess the skills, motivation, and dedication to exceed expectations.",
];

const timelineStages = [
  {
    id: 1,
    title: "Initial Design",
    image: "/initial.png",
  },
  {
    id: 2,
    title: "Revision One",
    image: "/revision.png",
  },
  {
    id: 3,
    title: "Final Design",
    image: "/final.png",
  },
];





export default function Reachout({ params }) {

  const projectName = params?.projectName || "";

  const router = useRouter();

  const projects = [
    { name: "driftstone", url: "/driftstone", image: "/driftstone-hero.jpg" },
  ];
  const currentIndex = projects.findIndex((p) => p.name.toLowerCase() === projectName.toLowerCase());
  const nextProject = projects[(currentIndex + 1) % projects.length] || projects[0];



  return (
    <div className='p-[1.5rem] flex flex-col items-center w-full overflow-hidden'>
      <div className="flex justify-center max-w-[70rem] bg-[#222A41] pl-6 ">
        <div className="flex justify-center">
          <video className="hidden sm:block w-[150rem] " autoPlay muted>
            <source src="/mockup-hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-[23rem]">
          <h2 className="font-mitr font-semibold text-[2rem] mt-[2rem]">ReachOut</h2>
          <h2 className="font-quicksand text-[1.5rem] mr-[2rem]">Building Bridges to Employment</h2>
          <p className="w-[18rem] font-quicksand leading-[2rem] mb-[15rem] mt-[1rem] mr-[4rem]">
            ReachOut is a platform designed to bridge the gap between organizations helping ex-offenders and employers who are open to second-chance hiring.
          </p>
          <div className="flex justify-between">
            <div className="w-[50%]">
              <h2 className="font-mitr font-semibold text-[2rem] mt-10">My Role</h2>
              <p className="w-[25rem] font-quicksand leading-[2rem] mb-[2rem]">Graphic Designer</p>
            </div>
            <div>
              <img
                src="/my-role.svg"
                alt="Elfheim"
                className="h-[10rem] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[70rem] mt-[8rem] border-[#222A41] border-solid border-[0.25rem] flex flex-col items-center">
        <h2 className="font-mitr font-semibold text-[2rem] mt-[4rem]">The Final Product</h2>
        <p className="mt-2 font-quicksand leading-[2rem] max-w-[50rem] text-center p-6">
        While the app is live, access is currently limited to verified non-profit organizations and businesses. 
        In the meantime, please feel free to explore this high-fidelity prototype to get a detailed view of its features and design.
        You can also check out the code on github!
        </p> 
        <div className="flex justify-center mb-[4rem]">
        <button
            className=" px-3 h-[3rem] w-[7rem] mt-[2rem] mx-3 bg-white text-black rounded-[3rem] font-quicksand font-bold duration-300 hover:translate-y-1 transition"
            onClick={() => window.open("https://www.figma.com/proto/MfGA57RbqWErt7qTMGdR8c/ReachOut---Design-Draft?node-id=517-3168&t=dwV9uPSWTKMfbXkJ-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=424%3A1831", "_blank")}
            >
            Prototype!
        </button>
        <button
            className=" px-3 h-[3rem] w-[7rem] mt-[2rem] mx-3 bg-white text-black rounded-[3rem] font-quicksand font-bold duration-300 hover:translate-y-1 transition"
            onClick={() => window.open("https://github.com/mangaslave/ReachOut", "_blank")}
            >
            Github!
        </button>

        </div>
      </div>


      <div className="w-full max-w-[70rem] mt-[8rem] px-4">
  <h2 className="font-mitr font-semibold text-[2rem]">Research</h2>
  <p className="w-full max-w-[40rem] font-quicksand leading-[2rem]">
    To begin this project, the team researched what happens when someone is released from prison. Here's what was found...
  </p>

  <div className="relative mt-10">
    {timelineSteps.map((step, index) => (
      <motion.div
        key={step.id}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true }}
        className="relative flex flex-col lg:flex-row items-start mb-[7rem]"
      >
        {/* Step Circle */}
        <div className="w-[5rem] h-[5rem] bg-[#222A41] rounded-full flex items-center justify-center text-[2rem] text-white font-bold mb-4 lg:mb-0 lg:mr-6">
          {step.id}
        </div>

        {/* Content Box with responsive layout */}
        <div className="bg-[#222A41] shadow-md w-full lg:w-[60rem] p-6 flex flex-col lg:flex-row items-start lg:items-center">
          {/* Text */}
          <div className="lg:mr-6">
            <h3 className="font-mitr text-2xl font-semibold">{step.title}</h3>
            <p className="font-quicksand leading-[1.75rem] mt-2">{step.description}</p>
            {step.badge && (
              <motion.span
                className="inline-block bg-[#995267] text-white font-semibold px-3 py-1 mt-3 font-quicksand"
                initial={{ scale: 0.85 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              >
                This is where ReachOut comes in!
              </motion.span>
            )}
          </div>

          {/* Image */}
          <img
            src={step.image}
            alt={step.title}
            className="w-full max-w-full h-auto mt-4 lg:mt-0 lg:h-[25rem]"
          />
        </div>
      </motion.div>
    ))}
  </div>
</div>


          
      {/* Our Discovery Section */}
      <div className="w-full max-w-[70rem] p-8 ">
        <h2 className="font-mitr font-semibold text-[2rem] mb-[2rem]">Discoveries</h2>
        <div className="mt-4 space-y-12">
          {discoveryText.map((sentence, sentenceIndex) => (
            <div key={sentenceIndex} className="text-2xl font-quicksand text-white">
              {sentence.split(" ").map((word, wordIndex) => (
                <motion.span
                  key={wordIndex}
                  className="inline-block mr-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: sentenceIndex * 1 + wordIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-[70rem] mt-[8rem] bg-[#374869] ">
        <h2 className="font-mitr font-semibold text-[2rem] mt-[2rem] ml-8">Personas</h2>
        <p className="w-[80%] font-quicksand leading-[2rem] ml-8 mr-6">
         Based on these discoveries two distinct personas were created. One non-profit worker and one Employer interested in second chance hiring.
        </p>
        <div className="flex justify-between mt-8 p-2">
          <div className="w-[45%] cursor-pointer bg-[#222A41] m-8 ">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center"
              onClick={() => window.open('/leena.pdf', '_blank')}
            >
              <img
                src="/leena-vector.svg"
                alt="Leena"
                className="w-[16rem]"
              />
              <p className="mt-2 font-mitr text-xl font-semibold text-white">Leena</p>
              <p className="font-quicksand text-xl text-white  p-2">Non-profit Worker</p>
            </motion.div>
          </div>

          <div className="w-[45%] cursor-pointer bg-[#222A41] m-8 ">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center"
              onClick={() => window.open('/ryan.pdf', '_blank')}
            >
              <img
                src="/ryan-vector.svg"
                alt="Ryan"
                className="w-[16rem]"
              />
              <p className="mt-2 font-mitr text-xl font-semibold text-white">Ryan</p>
              <p className="font-quicksand text-xl text-white bg-[#222A41] p-2 px-3">Employer</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Flows Section */}
        <div className="w-full max-w-[70rem] mt-[8rem] px-4 py-8">
          <h2 className="font-mitr font-semibold text-[2rem] ml-4">Flows</h2>
          <p className="w-full font-quicksand leading-[2rem] ml-4">
            This research also informed two distinct Flows. One for Non-profit workers, and one for Employers.
          </p>

          <div className="flex flex-col lg:flex-row justify-between items-center mt-8 gap-8">
            {/* Employer Flow */}
            <div className="w-full lg:w-[45%] cursor-pointer relative group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center relative overflow-hidden h-full"
                onClick={() => window.open('/employer-flow.png', '_blank')}
              >
                <img
                  src="/employer-flow.png"
                  alt="Employer Flow"
                  className="w-full max-w-[30rem] h-[22rem] object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-85 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-center transition-opacity duration-300 px-4">
                  <p className="text-white text-xl font-mitr w-full h-[3rem]">Organization Flow</p>
                  <p className="w-full max-w-[18rem] font-quicksand">
                    The Organization flow allows non-profits to keep their clients organized, view job listings, and create new resumes for their clients.
                  </p>
                  <p className="w-full max-w-[20rem] mt-4 font-quicksand text-gray-300">Click to see more!</p>
                </div>
              </motion.div>
            </div>

            {/* Organization Flow */}
            <div className="w-full lg:w-[45%] cursor-pointer relative group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center relative overflow-hidden h-full"
                onClick={() => window.open('/organization-flow.png', '_blank')}
              >
                <img
                  src="/organization-flow.png"
                  alt="Organization Flow"
                  className="w-full max-w-[30rem] h-[22rem] object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-85 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-center transition-opacity duration-300 px-4">
                  <p className="text-white text-xl font-mitr w-full h-[3rem]">Employer Flow</p>
                  <p className="w-full max-w-[18rem] font-quicksand">
                    The Employer flow allows businesses to post job listings, keep track of their applicants and stay on top of interviews.
                  </p>
                  <p className="w-full max-w-[20rem] mt-4 font-quicksand text-gray-300">Click to see more!</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>



        <div className="w-full max-w-[70rem] h-auto mt-[8rem] flex flex-col md:flex-row bg-[#222A41] overflow-hidden">
          <div className="w-full md:w-[35%] p-8">
            <h2 className="font-mitr font-semibold text-[2rem]">AI Job Matching</h2>
            <p className="font-quicksand leading-[2rem] mt-4">
              The research showed that it was exhausting for organizations to have to filter through each job listing only to find one or two criteria their client lacked.
              With the help of AI and ReachOut, these non-profit workers can tell at a glance whether or not a job posting is right for their client.
            </p>
          </div>

          <div className="w-full md:w-[65%] flex justify-center items-center p-4">
            <img
              src="/reachout-matching.png"
              alt="AI job matching shows at a glance whether or not the job listings match the client"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>


        <div className="w-full max-w-[70rem] h-auto mt-[8rem] flex flex-col-reverse md:flex-row overflow-hidden">
          <div className="w-full md:w-[50%] flex justify-center items-center p-4">
            <img
              src="/logo-breakdown.svg"
              alt="Logo breakdown shows the symbolism behind the brand"
              className="h-[40rem] translate-y-[-2.25rem]"
            />
          </div>

          <div className="w-full md:w-[50%] p-8">
            <h2 className="font-mitr font-semibold text-[2rem]">Logo and Branding</h2>
            <ul className="font-quicksand leading-[2rem] list-none mt-4">
              <li className="mt-4">The logo combines two main parts.</li>
              <li className="mt-4 flex">
                <span className="mr-2">1.</span>
                The hands, which represent aid and assistance to symbolize ReachOut’s mission to assist formerly incarcerated individuals.
              </li>
              <li className="mt-2 flex">
                <span className="mr-2">2.</span>
                The second part is the bird found in the negative space. This bird represents the freedom these individuals find themselves with.
              </li>
              <li className="mt-4">Together these images create a picture of newfound freedom, being aided in that new freedom, and finding a path forward.</li>
            </ul>
          </div>
        </div>



        <div className="w-full max-w-[70rem] h-auto flex flex-col-reverse md:flex-row bg-[#222A41] overflow-hidden mt-[8rem]">
          <div className="w-full md:w-[35%] p-8">
            <h2 className="font-mitr font-semibold text-[2rem]">Styleguide</h2>
            <p className="mt-4 font-quicksand leading-[2rem]">
              The goal of the brand colours was to be calming and trustworthy. The fonts were chosen to be legible, going with a sans serif to keep it
              minimalist.
            </p>
          </div>

          <div className="w-full md:w-[65%] flex justify-center items-center p-4">
            <img
              src="/style-tile.jpg"
              alt="Style tile showing brand colours and typography"
              className="md:translate-y-[2rem] md:translate-x-[3rem]"
            />
          </div>
        </div>


        <div className="w-full max-w-[70rem] mt-[8rem] bg-[#222A41] p-8">
          <h2 className="font-mitr font-semibold text-[2rem]">Design Process</h2>
          <p className="w-full mt-4 font-quicksand leading-[2rem]">
            The design process relied heavily on user feedback. Below is an example of how our design for the listing cards changed based on user feedback.
            Through this practice the cards were refined to have tooltips and maintain the same colour to minimize confusion. 
          </p> 
        </div>

        <div className="w-full max-w-[70rem] mt-8 flex justify-center">
          <div className="flex flex-col md:flex-row gap-6 w-full">
            {timelineStages.map((stage, index) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                viewport={{ once: true }}
                className="bg-[#222A41] p-6 text-center shadow-md w-full md:w-[30%]"
              >
                <img
                  src={stage.image}
                  alt={stage.title}
                  className="w-full h-[15rem] object-cover mb-4"
                />
                <h3 className="font-mitr text-2xl font-semibold text-white">{stage.title}</h3>
              </motion.div>
            ))}
          </div>
</div>


      <div className="max-w-[70rem] content-center">
        <h2 className="font-mitr font-semibold text-[2rem] ml-8 mt-[8rem]">Challenges</h2>
        <ul className="font-quicksand leading-[2rem] ml-8 list-none">
                <li className="mt-4">During this process the team encountered many challenges. the most notable ones being</li>
                <li className="mt-4 flex">
                    <span className="mr-2 font-bold text-lg">1.</span>
                    Interviews. Finding willing participants to answer our surveys and sit down for interviews was very difficult.
                    To combat this the team used personal connections, and sent out many emails to gather enough data to make meaningfull 
                    steps forward
                </li>
                <li className="mt-4 flex">
                    <span className="mr-2 font-bold text-lg">2.</span>
                    Logo. Finding a way to incorperate the bird, hands, and a professional atmosphere into the logo while maintianing
                    a cohesive image was difficult. To ensure the logo effectively 
                    combined these aspects many drafts were sketched out and feedback was received at various points during the design process. 
                </li>
            </ul>
      </div>

      <div className="w-full max-w-[70rem] mt-[8rem] bg-[#374869]">
        <h2 className="font-mitr font-semibold text-[2rem] mt-[2rem] ml-8">Final Screens</h2>
        <img
                src="/screens.png"
                alt="screens of settings, job listings and client management"
                className="translate-x-[2rem]"
            />
      </div>

      <div className="w-full max-w-[70rem] mt-[8rem] bg-[#222A41] ">
        <h2 className="font-mitr font-semibold text-[2rem] mt-[2rem] ml-8">Brochure</h2>
        <img
                src="/brochure.png"
                alt="screens of settings, job listings and client management"
                className="scale-110"
            />
      </div>

      <div className="w-full max-w-[70rem] mt-[8rem] bg-[#121726] p-1">
        
        <h2 className="font-mitr font-semibold text-[2rem] my-[2rem] ml-8">Promotional Video</h2>
        <iframe
          width="100%"
          className=""
          src="https://www.youtube.com/embed/MhxQqgt3FUk"
          title="ReachOut Video"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-[40rem] "
        ></iframe>
  
        </div>


        <NextProjectButton nextProjectUrl={nextProject.url} image={nextProject.image} /> 

    </div>
  );
}
