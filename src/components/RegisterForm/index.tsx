import {
  Key,
  LinkSimple,
  PaperPlaneRight,
  SpinnerGap,
  User,
  WarningOctagon,
} from 'phosphor-react';
import SlideLeft from '../SlideLeft';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import Link from 'next/link';

// object schema part of zod validation pattern
const loginSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(8, 'Senha Precisa ter 8 dígitos'),
});

// input types and fields inference from zod schema/object
type loginInputs = z.infer<typeof loginSchema>;

export default function RegisterForm() {
  // hook form instance handler and zod resolver
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<loginInputs>({
    resolver: zodResolver(loginSchema),
  });

  // method used by handleSubmit to manipulate data inputted
  async function onSubmit(data: loginInputs) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    // TODO: handle data submitted and remember me option on local storage
    console.log(data);
  }

  return (
    <SlideLeft>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        {/* Call to action title */}
        <h3 className="text-center text-xl text-slate-800">
          Crie uma conta nova
        </h3>

        {/* Inputs container */}
        <div className="flex flex-col gap-5">
          {/* Error message from Password input component */}
          {errors.password && (
            <p
              className="flex animate-pulse items-center gap-1 text-red-600"
              role="alert"
            >
              <WarningOctagon className="text-xl text-red-600" weight="fill" />
              {errors.password?.message}
            </p>
          )}

          {/* Username input component */}
          <div className="flex items-center gap-6 rounded-lg bg-gray-200 px-6 pb-5 pt-4 ">
            <User className="text-3xl text-share-blue" />
            <div className="flex w-full flex-col gap-2">
              <span className="pl-1 text-xs text-slate-800">
                Nome de usuário
              </span>
              <input
                placeholder="Digite o seu usuário"
                className=" bg-gray-200 p-1 text-black hover:cursor-pointer"
                type="text"
                {...register('username')}
                required
              />
            </div>
          </div>
          {errors.username && (
            <p className="animate-pulse text-red-600" role="alert">
              {errors.username?.message}
            </p>
          )}

          {/* Password input component */}
          <div className="flex items-center gap-6 rounded-lg bg-gray-200 px-6 pb-5 pt-4 ">
            <Key className="text-3xl text-share-blue" />
            <div className="flex w-full flex-col gap-2">
              <span className="pl-1 text-xs text-slate-800 ">Senha</span>
              <input
                placeholder="Digite sua senha secreta"
                className=" bg-gray-200 p-1 text-black hover:cursor-pointer"
                type="password"
                {...register('password')}
                required
              />
            </div>
          </div>
        </div>

        {/* Submit button */}
        <button
          className="mt-4 flex items-center justify-center gap-4 rounded-l-full 
          rounded-r-full bg-share-blue py-7 disabled:cursor-not-allowed disabled:bg-share-blue/25"
          type="submit"
          disabled={isSubmitting}
        >
          {!isSubmitting ? (
            <>
              <span className="text-lg text-white">Criar Conta</span>
              <PaperPlaneRight className="text-white" size={32} weight="fill" />
            </>
          ) : (
            <SpinnerGap
              className="animate-spin text-white"
              size={32}
              weight="fill"
            />
          )}
        </button>
      </form>
    </SlideLeft>
  );
}
