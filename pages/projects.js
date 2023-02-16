
import Layout from '@/layout/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function projects() {
  return (
    <Layout title="Projects">
  <div className='h-full flex flex-col justify-center items-center pt-6'>
    <h1 className='text-5xl'>Projektet</h1>
  </div>
  <div className='mt-12 grid grid-cols-3'>
  <div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">MASSUM</h5>
      <p class="text-gray-700 text-base mb-4">
      Our school tradıtıonally takes part ın the Educational Rendezvous wıtch ıs organızed by  he Youth Association of Technical High Schools in Macedonia MASSUM.
      </p>
      <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Lexo me shume</button>
    </div>
  </div>
</div>
<div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">NANSEN</h5>
      <p class="text-gray-700 text-base mb-4">
      In the school year 2017/2018 professors from our school are taking part in Nansen model for integrated education (NMIE).
      </p>
      <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Lexo me shume</button>
    </div>
  </div>
</div>
<div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">ENGLISH CLUB</h5>
      <p class="text-gray-700 text-base mb-4">
      Every Monday after school classes our students have activities in the English club.
      </p>
      <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Lexo me shume</button>
    </div>
  </div>
</div>
  </div>

  
    </Layout>
  )
}