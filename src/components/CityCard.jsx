const CityCard = ({ nombre, cuerpos, temp }) => {
  return (
    <div className="w-full h-auto rounded-2xl px-5 py-2 bg-[#0000002f] text-gray-50 flex justify-between items-center">
      {/* <div className="w-full h-full "> */}

      {/* Izquiera */}
      <div className="h-auto flex flex-col gap-y-1">
        <h2 className="text-2xl font-bold">{nombre}</h2>

        {/* img y num */}
        <div className="w-full gap-x-2 justify-start items-center">
          <div className="w-min relative">
            <div className="w-[40px]">
              <img
                src="https://images.vexels.com/media/users/3/274185/isolated/preview/4556e606e55d73b963d46ef35ba06e20-escena-de-la-naturaleza-del-estanque.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <h5 className="text-sm font-semibold absolute right-0 top-0">
              {cuerpos}
            </h5>
          </div>
        </div>
      </div>

      {/* Derecha */}
      <div className="flex flex-col justify-center items-center">
        <div className="h-[30px]">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4005/4005857.png"
            alt="Clima"
            className="h-full"
          />
        </div>
        <h4 className="text-2xl font-semibold">{temp}°</h4>
      </div>
      {/* </div> */}
    </div>
  );
};

export default CityCard;
