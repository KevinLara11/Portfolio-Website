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
        Soy un desarrollador autodidacta y de rápido aprendizaje, con una mentalidad proactiva y comprometida estoy constantemente enfrentando nuevos desafíos y bien predispuesto para el trabajo en equipo.<br /> <br /> 
        Me considero una persona curiosa, proactiva, comprometida y con ganas de crecer tanto profesional como personalmente.
        Además, tengo la capacidad de ser una persona que se adapta y aprende de cualquier tema en muy poco tiempo. Estoy dispuesto a aprender algo nuevo y mejorar mis habilidades constantemente. <br /> <br /> 
        En busca de mi primera experiencia como Desarrollador Full Stack, estoy emocionado de explorar nuevas oportunidades en tecnologías. Aunque me adapto a otras tecnologías, tengo una gran pasión por el backend y creo que puedo aportar un valor significativo a su equipo.... 
        </p>
      </div>
    </div>
  );
};

export default About;
