
const CityCard = ({ nombre, cuerpos, temp }) => {
  return (
    <div className="w-full rounded-2xl px-5 py-2 bg-[#0000002f] text-gray-50 flex justify-between items-center">

      {/* Izquiera */}
      <div className="flex flex-col gap-y-1">
        <h2 className="text-xl font-semibold">{nombre}</h2>
      </div>

      <div className="flex items-center justify-end w-full gap-x-1">
        <div>
          <img
            src="https://images.vexels.com/media/users/3/274185/isolated/preview/4556e606e55d73b963d46ef35ba06e20-escena-de-la-naturaleza-del-estanque.png"
            className="w-12 h-12"
          />
        </div>
        <div>
          {cuerpos}
        </div>
      </div>

    </div>
  );
};

export default CityCard;
