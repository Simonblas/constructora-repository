export const BotonMapaGoogle = () => {
    const lat = -34.603722;
    const lng = -58.381592;

    const handleClick = () => {
        const url = `https://www.google.com/maps?q=${lat},${lng}`;
        window.open(url, '_blank');
    };

    return (
        <button onClick={handleClick}>
            Abrir en Google Maps
        </button>
    );
};
