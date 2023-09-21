import { Copyright } from "@/components/CopyRight";
import { Hero } from "@/components/Hero";
import { SingIn } from "@/components/Singin";ep 3 min 20 
export default function Home() {
  return <main className="grid grid-cols-2 min-h-screen">
    {/* left */}
    <div className="relative flex flex-col items-start justify-between px-28 py-16 overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">
      <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 -translate-x-1/2 rounded-full  bg-purple-700 opacity-50 blur-full"/>
      <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes "/>
    
      <SingIn/>

      <Hero/>

      <Copyright/>
    </div>

    {/* right */}
    <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
      <div className="flex flex-1 items-center justify-center">
        <p className="text-center leading-relaxed w-[360px]">
          Você ainda não registrou nenhuma lembrança, Comece com a {''}
          <a href="" className="underline hover:text-gray-50">Criar agora</a>
        </p>
      </div>
    </div>
  </main>
}