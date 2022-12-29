import { Envelope } from 'phosphor-react';
import { ChangeEvent, FormEvent } from 'react';

interface Props {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isContinueDisable: boolean;
}

export default function ForgotBanner({
  handleSubmit,
  handleChange,
  isContinueDisable,
}: Props) {
  return (
    <>
      <h1 className="text-5xl">
        Esqueceu a <br />
        Senha?
      </h1>

      <span className="text-2xl">Não se preocupe, Nos podemos ajudar.</span>

      <form onSubmit={handleSubmit}>
        {/* Email input  */}
        <label className="flex items-center justify-between rounded-xl bg-white pr-4 text-sm">
          <input
            className="w-full rounded-xl bg-white p-4 text-black placeholder:text-gray-400"
            type="email"
            placeholder="Preencha seu endereço de email"
            onChange={handleChange}
          />
          <Envelope className="text-gray-400" size={32} />
        </label>

        {/* Submit Button */}
        <div className="mt-20 flex justify-end ">
          <button
            className="cursor-pointer rounded-xl bg-orange-500 px-6 py-4 disabled:cursor-not-allowed disabled:bg-orange-400/80 "
            type="submit"
            disabled={isContinueDisable}
          >
            {isContinueDisable ? 'Preencha o email' : 'Continuar'}
          </button>
        </div>
      </form>
    </>
  );
}
