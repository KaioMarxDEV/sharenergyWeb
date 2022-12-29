import Link from 'next/link';
import { FileText } from 'phosphor-react';
import { Dispatch, SetStateAction } from 'react';
import LoginForm from '../LoginForm';

interface Props {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

export default function Login({ setIsLogin }: Props) {
  return (
    <div className="flex flex-1 flex-col rounded-lg bg-white p-4 pb-10  drop-shadow-lg lg:pt-11 lg:pr-11 lg:pl-16 lg:pb-20">
      {/* Greetings Title */}
      <h1 className="flex flex-row items-center justify-center gap-2 text-xl font-normal text-slate-800 md:text-3xl lg:flex-col lg:items-start lg:justify-center lg:text-4xl">
        Bem-vindo a
        <span className="text-2xl font-bold tracking-wider text-share-blue md:text-4xl lg:text-[2.875rem]">
          Sharenergy
        </span>
      </h1>

      {/* Separator */}
      <div className="my-10 flex items-center gap-4 lg:my-9 lg:gap-9">
        <div className="h-0.5 w-full bg-zinc-300" />
        <FileText className="text-zinc-300" size={64} />
        <div className="h-0.5 w-full bg-zinc-300" />
      </div>

      <LoginForm />

      <p className="mt-12 flex justify-center gap-2 text-sm">
        Não possui conta ainda?
        <button
          className="font-bold tracking-wide text-blue-600 underline"
          onClick={() => setIsLogin(false)}
        >
          Registre-se
        </button>
      </p>
    </div>
  );
}
