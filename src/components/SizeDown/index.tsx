import { Transition } from '@headlessui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function SizeDown({ children }: Props) {
  return (
    <Transition
      appear={true}
      show={true}
      enter="transition-all delay-300 duration-1000"
      enterFrom="opacity-0 scale-110"
      enterTo="opacity-100 scale-100"
      leave="transition-all duration-1000"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-110"
    >
      {children}
    </Transition>
  );
}
