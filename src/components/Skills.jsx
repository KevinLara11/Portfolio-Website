import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import axios from "../assets/Axios.png";
import tailwind from "../assets/tailwind.png";
import mysql from "../assets/Mysql.png";
import git from "../assets/Git.png";
import github from "../assets/github.png";
import sql from "../assets/sql.png";
import dbeaver from "../assets/dbeaver.png";
import laravel from "../assets/laravel.png";
import phpmyadmin from "../assets/phpmyadmin.png";
import vue from "../assets/vue.png";
import php from "../assets/php.png";
import postman from "../assets/postman.png";
import figma from "../assets/figma.png";
const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: axios,
      title: "Axios",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: mysql,
      title: "MySql",
      style: "shadow-green-400",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      src: git,
      title: "Git",
      style: "shadow-red-400",
    },
    {
      id: 9,
      src: github,
      title: "Github",
      style: "shadow-white",
    },
    {
      id: 10,
      src: sql,
      title: "Sql",
      style: "shadow-blue",
    },
    {
      id: 11,
      src: dbeaver ,
      title: "Dbeaver",
      style: "shadow-blue",
    },
    {
      id: 12,
      src: laravel,
      title: "Laravel",
      style: "shadow-orange-500",
    },
    {
      id: 13,
      src: phpmyadmin,
      title: "PhpMyAdmin",
      style: "shadow-blue-500",
    },
    {
      id: 14,
      src: vue,
      title: "Vue",
      style: "shadow-yellow-500",
    },
    {
      id: 15,
      src: php,
      title: "Php",
      style: "shadow-blue-600",
    },
    {
      id: 16,
      src: postman,
      title: "Postman",
      style: "shadow-sky-400",
    },
    {
      id: 17,
      src: figma,
      title: "Figma",
      style: "shadow-green-400",
    },
  ];

  return (
    <div
      name="skill"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen experience"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>

        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
