import Head from 'next/head';
import Image from 'next/image';
import { ThumbsUp } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import SlideLeft from '../components/animations/SlideLeft';
import ForgotBanner from '../components/ForgotBanner';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // TODO: implement properly
    console.log(email);
    setSubmitSuccess(true);
  }

  const isContinueDisable = email === '' ? true : false;

  return (
    <>
      <Head>
        <title>Esqueci a senha - Sharenergy</title>
        <meta
          name="description"
          content="Recupere acesso a conta Shareenergy"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex min-h-screen items-center justify-center">
          <SlideLeft>
            <div className="mx-auto flex flex-col rounded-xl bg-white pt-10 md:flex-row md:py-10 md:drop-shadow-xl">
              <div className="flex flex-1 flex-col items-center px-4  py-6 md:items-start md:px-10 md:py-10">
                <Image
                  src="/logo.png"
                  className="h-auto w-auto"
                  width={75}
                  height={75}
                  alt="logo"
                />
                <div className="mt-10 flex flex-col gap-4 md:gap-10">
                  <strong className="text-2xl">Informações Importantes</strong>
                  <p className="text-xl">
                    Por favor, leia as informações abaixo e forneça as
                    informações solicitadas.
                  </p>
                  <ul className="list-disc pl-4  text-lg font-medium">
                    <li>Não revele sua senha a ninguém</li>
                    <li>Não reutilize senhas</li>
                    <li>Use senhas alfanuméricas (letras e números)</li>
                  </ul>
                </div>
              </div>

              {/* forgot password component */}
              <div className="mt-14 flex flex-1 flex-col gap-10 rounded-tl-3xl rounded-tr-3xl bg-share-blue px-4 py-10 text-white md:mt-0 md:rounded-tr-none md:rounded-tl-3xl md:rounded-bl-3xl md:px-10 md:py-10 md:drop-shadow-lg">
                {!submitSuccess ? (
                  <ForgotBanner
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    isContinueDisable={isContinueDisable}
                  />
                ) : (
                  <SlideLeft>
                    <div className="flex flex-col items-center py-32">
                      <ThumbsUp
                        className="animate-pulse rounded-full bg-white p-2 text-share-blue"
                        size={80}
                      />
                      <div className="mt-4 flex flex-col justify-center">
                        <strong className="text-center text-xl underline underline-offset-4">
                          Recebemos sua solicitação!
                        </strong>
                        <p className="mt-2 text-center">
                          Enviamos um email para redefinição de senha
                        </p>
                      </div>
                    </div>
                  </SlideLeft>
                )}
              </div>
            </div>
          </SlideLeft>
        </div>
      </main>
    </>
  );
}
