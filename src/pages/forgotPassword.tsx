import Head from 'next/head';

export default function ForgotPassword() {
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
        <div className="flex min-h-screen items-center justify-center ">
          <div className="rounded-lg bg-white p-4">
            <h1>Redefinição de senha</h1>
          </div>
        </div>
      </main>
    </>
  );
}
