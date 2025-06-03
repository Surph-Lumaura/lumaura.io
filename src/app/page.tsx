import Image from 'next/image';
import LumauraMenu from "@/components/LumauraMenu";
export default function Home() {
  return (<>
<LumauraMenu />

    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-12">
      <Image 
        src="/lumaura-hero.png" 
        alt="Lumaura Genesis" 
        width={800} 
        height={800} 
        className="rounded-lg mb-10 border border-orange-500 shadow-xl"
        priority
      />
      <h1 className="text-5xl font-bold text-orange-400 mb-6 tracking-widest">LUMAURA</h1>
      <p className="text-center text-lg text-gray-300 max-w-xl">
        Welcome to the Genesis Portal. This is your entry into Scroll Intelligence, Prism Computation, and Sovereign AI.
      </p>
    </main>
  </>
);
}
