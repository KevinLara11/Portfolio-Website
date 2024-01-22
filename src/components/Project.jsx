import React from "react";

import appweather from "../assets/portfolio/AppWeather.png";
import todoapp from "../assets/portfolio/TodoApp.png";
import cotizadorseguro from "../assets/portfolio/cotizador.PNG";
import windbnb from '../assets/portfolio/Windbnb-app.png'

const Project = () => {
  const projects = [
    {
      id: 1,
      src: windbnb,
      link: 'https://windbnb-nine-eta.vercel.app/',
      repo: 'https://github.com/KevinLara11/windbnb-app'
    },
    {
      id: 2,
      src: todoapp,
      link: 'https://todo-app-iota-liart-89.vercel.app/',
      repo: 'https://github.com/KevinLara11/TodoApp'
    },
    {
      id: 3,
      src: appweather,
      link: 'https://proyecto-weather.vercel.app/',
      repo: 'https://github.com/KevinLara11/AppWeather'
    },
    {
      id: 4,
      src: cotizadorseguro,
      link: 'https://app-cotizar-seguro.vercel.app/',
      repo: 'https://github.com/KevinLara11/AppCotizarSeguro'
    },
  ];

  return (
    <div
      name="project"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
