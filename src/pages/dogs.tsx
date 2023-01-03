import axios from 'axios';
import Image from 'next/image';
import { ArrowClockwise, ArrowRight } from 'phosphor-react';
import { useEffect, useState } from 'react';

export default function Dogs() {
  const [dog, setDog] = useState('');

  async function DogLoad() {
    const response = await axios.get('https://random.dog/woof');

    setDog(response.data);
  }

  useEffect(() => {
    DogLoad();
  }, []);

  return (
    <div className="flex min-h-screen">
      <div className="w-full bg-slate-800 px-2 pt-16 md:pl-16">
        <h1 className="mt-6 text-center text-4xl font-bold text-gray-300">
          Imagem infinita de cachorrinho
        </h1>
        <div className="mt-4 flex flex-col items-center justify-center gap-6 ">
          <Image
            className="h-96 w-96 rounded-2xl border-4 border-share-blue p-1"
            src={`https://random.dog/${dog}`}
            width={384}
            height={384}
            alt="dog image"
          />

          <button
            onClick={DogLoad}
            className="group rounded-full border-b-4 border-slate-700 bg-slate-500 p-3 text-white transition-all duration-200 ease-linear active:translate-y-2 active:border-slate-500"
          >
            <ArrowRight className="block group-active:hidden" size={64} />
            <ArrowClockwise
              className="hidden group-active:block group-active:animate-spin"
              size={64}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
