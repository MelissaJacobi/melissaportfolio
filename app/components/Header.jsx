"use client"; // This marks the file as a Client Component

import { usePathname } from 'next/navigation';

export default function Header() {
  // Get the current pathname
  const pathname = usePathname();

  // Determine the header text based on the pathname
  const headerText =
    pathname === '/' ? "Hi! I'm Melissa Jacobi" : pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);

  return (
    <header>
      <div
        className="relative w-full h-[40rem] bg-gradient-to-r animate-gradient-x"
        style={{
          backgroundImage:
            'linear-gradient(45deg, rgb(251, 83, 115) 30%, rgb(66, 92, 199) 60%, rgb(255, 164, 0) 90%)',
        }}
      >
        <h1 className="font-quicksand absolute bottom-4 text-4xl font-bold text-black text-center w-full m-0">
          {headerText}
        </h1>
      </div>
    </header>
  );
}
