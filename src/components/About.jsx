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
        Soy una persona autodidacta y de rápido aprendizaje. Constantemente enfrentando nuevos desafíos y bien predispuesto para el trabajo en equipo. <br /> <br /> 
        Me considero una persona curiosa, proactiva, comprometida y con ganas de crecer tanto profesional cómo personalmente.<br /> <br /> 
        Y siempre dispuesto en  aprender algo nuevo además, tengo la capacidad de ser una persona qué se adapta y aprende de cualquier tema en muy poco tiempo... 
        </p>
      </div>
    </div>
  );
};

export default About;
