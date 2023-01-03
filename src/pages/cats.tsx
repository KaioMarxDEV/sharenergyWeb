import Image from 'next/image';
import { MagnifyingGlass, Warning } from 'phosphor-react';
import { FormEvent, useState } from 'react';

export default function Cats() {
  const [statusCode, setStatusCode] = useState('');
  const [cat, setCat] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setCat(`https://http.cat/${statusCode}.jpg`);
  }

  return (
    <div className="flex min-h-screen">
      <div className="w-full bg-slate-800 px-2 pt-16 md:pl-16">
        <h1 className="mt-6 text-center text-4xl font-bold text-gray-300">
          Procure Gatos com Status code
        </h1>
        <div className="mt-10 flex flex-col gap-4">
          {/* INPUT WARNING */}
          {statusCode.length > 3 && (
            <span className="mx-auto flex items-center gap-2 rounded-md border-2 border-red-700 p-3 text-base text-red-600">
              <Warning size={32} />
              Isso não parece com um Status Code 🕵️‍♂️
              <Warning size={32} />
            </span>
          )}

          {/* USER STATUS CODE INPUT */}
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex max-w-xl rounded-lg bg-slate-900"
          >
            <input
              className="mx-auto max-w-xl rounded-lg bg-slate-900 px-6 py-4 text-gray-100 placeholder:text-gray-500  focus:outline-none"
              type="text"
              placeholder="Digite um status code."
              onChange={(e) => setStatusCode(e.target.value)}
              required
            />
            <button
              type="submit"
              disabled={statusCode.length > 3}
              className="group border-l-2 border-gray-500 px-6 py-2 text-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <div className="rounded-full bg-slate-900 p-2 transition-all duration-200 ease-linear group-hover:bg-gray-500 group-disabled:opacity-50">
                <MagnifyingGlass size={16} />
              </div>
            </button>
          </form>

          {cat === '' && (
            <div className="mx-auto flex flex-col items-center justify-between rounded-lg bg-white">
              <span className="mt-10 font-mono text-2xl text-slate-800">
                Esperando um status code
              </span>
              <Image
                className="rounded-lg"
                src="/giphy.gif"
                width="480"
                height="240"
                alt="cat searching"
              />
            </div>
          )}

          {/* CAT IMAGE */}
          {cat != '' && (
            <Image
              className="mx-auto h-96 w-96 rounded-lg border-4 border-share-blue p-1"
              src={cat}
              width={384}
              height={384}
              alt="cat picture"
            />
          )}
        </div>
      </div>
    </div>
  );
}
