import Image from 'next/image'

export default function Projects() {
  return (
    <div className="container py-16">
      <div>
        <Cards />
      </div>
    </div>
  )
}

const Cards = ({ src }) => {
  return (
    <div className="grid lg:grid-cols-2 grid-rows-5 lg:grid-rows-4 lg:max-h-[600px]">
      <div class="lg:row-span-4 order-first lg:order-none relative">
        <Image src="/images/hero.jpg" layout="fill" className="w-full object-cover" />
      </div>

      <div class="lg:row-span-2 h-96 relative overflow-hidden">
        <Image src="/images/hero.jpg" layout="fill" className="w-full object-cover" />
      </div>

      <div class="lg:row-span-2 h-96 relative  overflow-hidden">
        <Image src="/images/hero.jpg" layout="fill" className="w-full object-cover" />
      </div>
    </div>
  )
}
