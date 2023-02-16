import Image from "next/image"
import Link from "next/link"

export default function HeaderSection() {
  return (
    <div className="relative z-0 h-screen">
    <div className="absolute -z-20 top-0 w-full h-full">
      <Image src="/images/hero.jpg" layout="fill" className="object-cover"/>
    </div>
    <div className="h-full flex flex-col justify-center items-center">
      <h1 className="text-white	text-5xl">Projektet e nxenesve te shkolles SHMTK</h1>
      <Link href="/projects">
      <button type="button"
            class="mt-6 inline-block px-6 py-2.5 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            data-mdb-ripple="true" data-mdb-ripple-color="light">
            Shiko Projektet
          </button>
      </Link>
    </div>
  </div>
  )
}
