'use client'
import Image from "next/image";
import Search from "./Search";

export default function Home() {
  return (
    <div className="relative min-h-screen font-[family-name:var(--font-ubuntu-sans)]">
      <div className="absolute inset-0 overflow-hidden bg-fixed">
        <img className="object-cover w-full h-full"
          src="/Satriales.jpg"
          alt="Background"

        />
      </div>
      <div className="flex items-center justify-center absolute inset-0 z-10">
        <main className="flex flex-col gap-[32px] items-center sm:items-start">
          <Search className="flex justify-center bg-black/75 p-4 rounded-lg shadow-lg text-gray-400" />
        </main>
      </div>
    </div>
  );
}
