export const InfoServicio = ({ titulo, punto1, punto2, punto3 }) => {
  return (
    <div className="container-info-servicio">
      <h1 className="titulo-info-servicio">{titulo}</h1>
      <div className="container-texto-servicio">
        <p className="info-servicio">{punto1}</p>
        <p className="info-servicio">{punto2}</p>
        <p className="info-servicio">{punto3}</p>
      </div>
    </div>
  );
};
