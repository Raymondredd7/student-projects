import Image from 'next/image'
import Link from 'next/link'

export default function HeaderSection() {
  return (
    <div className="relative mx-8 h-[88.8vh]">
      <div className="absolute -z-20 top-0 w-full h-full ">
        <Image src="/images/hero.jpg" layout="fill" className="object-cover " />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      </div>
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className="text-white	text-5xl font-xl text-7xl font-bold capitalize w-[35%] text-center leading-[1.2em]">
          Projektet e nxenesve te shkolles SHMTK
        </h1>
        <div className="flex gap-4 h-[20%]">
          <Link href="/projects">
            <button
              type="button"
              className="mt-6 inline-block p-8  flex items-center h-[10%] text-white  text-xs leading-tight uppercase rounded text-base font-bold uppercase leading-[1em] hover:bg-[#818a91]/70 hover:mt-10 hover:border-[#818a91]  hover:transition-opacity hover:ease-in   bg-[#f619197d]/40  border-solid border-2 border-[#f619197d]"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Shiko Projektet
            </button>
          </Link>

          <Link href="/projects">
            <button
              type="button"
              className="mt-6 inline-block p-8  flex items-center h-[10%] hover:bg-[#818a91]/70 hover:mt-10 hover:border-[#818a91]  hover:transition-opacity hover:ease-in  text-white  text-xs leading-tight uppercase rounded text-base font-bold uppercase leading-[1em] bg-transparent  border-solid border-2 border-white"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Shiko Projektet
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
