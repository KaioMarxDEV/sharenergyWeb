import Head from 'next/head';
import Image from 'next/image';
import SizeDown from '../components/animations/SizeDown';
import Login from '../components/Login';

export default function Home() {
  return (
    <>
      {/* header component scoped to this page */}
      <Head>
        <title>Sharenergy</title>
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
          <Login />
        </div>
      </main>
    </>
  );
}
