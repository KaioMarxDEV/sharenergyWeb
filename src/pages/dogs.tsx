import axios from 'axios';
import Image from 'next/image';
import { ArrowRight } from 'phosphor-react';
import { useEffect, useState } from 'react';
import SideBar from '../components/SiderBar';

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
      <SideBar />
      <div className="ml-16 flex w-full flex-col items-center justify-center gap-6 ">
        <div className="flex items-center gap-6">
          <Image
            className="max-w-96 max-h-96 rounded-2xl border-4 border-share-blue p-1"
            src={`https://random.dog/${dog}`}
            width={384}
            height={384}
            alt="dog image"
          />

          <button
            onClick={DogLoad}
            className="rounded-full bg-slate-500 p-3 text-white"
          >
            <ArrowRight size={64} />
          </button>
        </div>
      </div>
    </div>
  );
}
