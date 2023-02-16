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
      <button class="mt-6 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Shiko projektet
  </span>
</button>
      </Link>
    </div>
  </div>
  )
}
