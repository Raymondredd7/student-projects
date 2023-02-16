
import Layout from '@/layout/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function projects() {
  return (
    <Layout title="Projects">
  <div className='h-full flex flex-col justify-center items-center pt-6'>
    <h1 className='text-5xl'>Projektet</h1>
  </div>
  <div className='grid grid-cols-3'>
    <div>
      <h1>Massum</h1>
      <p>Our school tradıtıonally takes part ın the Educational Rendezvous wıtch ıs organızed by...</p>
      <Link href="/projects">
      <button class="mt-6 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Lexo me shume
  </span>
</button>
      </Link>
    <Image src="/images/massum.jpg"width={500} height={500}/>
    </div>
    <div>
      <h1>Massum</h1>
      <p>Our school tradıtıonally takes part ın the Educational Rendezvous wıtch ıs organızed by...</p>
      <Link href="/projects">
      <button class="mt-6 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Lexo me shume
  </span>
</button>
      </Link>
    <Image src="/images/massum.jpg" width={500} height={500}/>
    </div>
    <div>
      <h1>Massum</h1>
      <p>Our school tradıtıonally takes part ın the Educational Rendezvous wıtch ıs organızed by...</p>
      <Link href="/projects">
      <button class="mt-6 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Lexo me shume
  </span>
</button>
      </Link>
    <Image src="/images/massum.jpg" width={500} height={500}/>
    </div>
  </div>
    </Layout>
  )
}