import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import macroscopicos from '../data/macroscopicos.json';
import microscopicos from '../data/microscopicos.json';

const SketchfabEmbed = () => {
  const screenWidth = window.innerWidth;

  return (
    <div className="sketchfab-embed-wrapper">
      <iframe
        title="Axolotl (Low Poly)"
        frameBorder="0"
        allowFullScreen
        mozAllowFullScreen="true"
        webkitAllowFullScreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        width={screenWidth}
        height={screenWidth / 1.8}
        src="https://sketchfab.com/models/38232d92ff0743cca9bc47d0bc314cc3/embed?transparent=1"
      ></iframe>
    </div>
  );
};

export default function AnimalDetailPage() {
  const { id } = useParams();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const type = params.get('type');

  const [show3D, setShow3D] = useState(false);

  let animalEncontrado = null;

  if (type === 'microscopico') {
    animalEncontrado = microscopicos.find(animal => animal.id === Number(id));
  } else if (type === 'macroscopico') {
    animalEncontrado = macroscopicos.find(animal => animal.id === Number(id));
  }

  console.log(animalEncontrado)

  return (
    <div>
      <img
        src={animalEncontrado.imagen}
        alt={animalEncontrado.nombre}
        className="object-cover w-full h-72"
      />

      <div className="p-5">
        <h1 className="text-2xl font-bold">
          {animalEncontrado.nombre}
        </h1>

        <p className='text-blue-600'>
          {animalEncontrado.especie}
        </p>

        <p className="pt-2">
          {animalEncontrado.descripcion}
        </p>

        {animalEncontrado.nombre === 'Ajolote' && (
          <div className='flex items-center justify-center'>
            {!show3D && (
              <button
                className='p-3 mt-4 bg-purple-100 rounded-xl'
                onClick={() => setShow3D(!show3D)}
              >
                Ver modelo 3d
              </button>
            )}

            {show3D && (
              <div className='fixed bottom-0 left-0'>
                <SketchfabEmbed />
              </div>
            )}

          </div>
        )}



      </div>
    </div>
  )
}
