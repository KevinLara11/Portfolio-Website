import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <br />

        <p className="text-xl">
        Soy un Programador web full stack junior autodidacta con 1 año de experiencia trabajando de manera independiente en el estudio y aplicación de tecnologías web.  <br /> <br />
        Me apasiona profundizar en nuevas tecnologías y aportar al desarrollo de proyectos.<br /> <br />
        Soy una persona proactiva y con ganas de crecer tanto profesional como personalmente, y poseo habilidades para el trabajo en equipo..
        </p>
      </div>
    </div>
  );
};

export default About;
