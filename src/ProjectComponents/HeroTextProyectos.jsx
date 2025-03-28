import Vector from "../assets/Vector.png";
export const HeroTextProyectos = () => {
  return (
    <div className="container-text-proyects">
      <h2 className="texto-principal-proyectos">
        <span className="spanBold">Construyendo </span>espacios que superan
        expectativas
      </h2>
      <h3 className="texto-secundario-proyectos">
        Cada obra es un nuevo desafio.
      </h3>
      <h4 className="texto-terciario-proyectos">
        ¿Tenés un proyecto en mente?
      </h4>
      <h3 className="titulo-proyectos">
        {" "}
        <img src={Vector} alt="" />
        Nuestros proyectos:
      </h3>
    </div>
  );
};
