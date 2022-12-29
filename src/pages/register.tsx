import Head from 'next/head';
import Image from 'next/image';
import { FileText } from 'phosphor-react';
import Form from '../components/Form';
import SizeDown from '../components/SizeDown';

export default function Register() {
  return (
    <>
      {/* header component scoped to this page */}
      <Head>
        <title>Registro - Sharenergy</title>
        <meta
          name="description"
          content="Crie sua conta na Shareenergy, Faça parte desse movimento!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>register</h1>
      </main>
    </>
  );
}
