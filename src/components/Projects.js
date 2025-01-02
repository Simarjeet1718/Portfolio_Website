import React from 'react';

import chat from "../assets/ChatApp.jpg";
import finance from "../assets/financetracker.jpg";
import portfolio from '../assets/portfolio.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: chat,
      pname: "SocialSync",
      projectLink: "https://socialsync-m654.onrender.com", 
      codeLink: "https://github.com/Simarjeet1718/SocialSync", 
    },
    {
      id: 2,
      image: finance,
      pname: "Budget Buddy",
      projectLink: "https://budgetbuddy-app.com", 
      codeLink: "https://github.com/user/budgetbuddy", 
    },
    {
      id: 3,
      image: portfolio,
      pname: "Personal Portfolio",
      projectLink: "https://zingy-florentine-9c54d0.netlify.app", // Replace with your live project link
      codeLink: "https://github.com/Simarjeet1718/Portfolio_Website", // Replace with your GitHub repo link
    },
  ];

  return (
    <div name="Projects" className="bg-gradient-to-b from-black to-gray-800 text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
          <p className="py-6">Check Out My Projects Here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, image, pname, projectLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={image}
                alt={pname}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => window.open(projectLink, "_blank")}
                  className="w-1/2 px-6 py-4 m-4 duration-200 hover:scale-105"
                >
                  Link
                </button>
                <button
                  onClick={() => window.open(codeLink, "_blank")}
                  className="w-1/2 px-6 py-4 m-4 duration-200 hover:scale-105"
                >
                  Code
                </button>
              </div>
              <h2 className="text-2xl text-cyan-600 text-center mt-2">{pname}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
