import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FileText } from 'phosphor-react';
import Form from '../components/Form';
import SizeDown from '../components/SizeDown';

export default function Home() {
  return (
    <>
      {/* header component scoped to this page */}
      <Head>
        <title>Login - Sharenergy</title>
        <meta
          name="description"
          content="Faça login na sua conta Shareenergy, Faça parte desse movimento!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* content container */}
        <div className="mx-auto mb-20 flex flex-col gap-10 py-4 px-4 lg:mb-0 lg:min-h-screen lg:flex-row lg:gap-0 lg:py-11 lg:px-20">
          {/* login image */}
          <div className="flex flex-1 flex-col items-center justify-center ">
            <SizeDown>
              <Image
                priority
                width={640}
                height={640}
                className="scale-75 drop-shadow-lg lg:scale-100"
                src="/Illustration.svg"
                alt="Illustration"
              />
            </SizeDown>
          </div>

          {/* login form component */}
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

            <Form />

            <p className="mt-12 flex justify-center gap-2">
              Não possui conta ainda?
              <Link
                className="font-bold tracking-wide text-blue-600 underline"
                href="/register"
              >
                Registre-se
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
