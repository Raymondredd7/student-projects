import { Splide, SplideSlide } from '@splidejs/react-splide'
import Image from 'next/image'
import '@splidejs/react-splide/css'
import { projects } from 'content/projects'
import Link from 'next/link'

export default function Projects() {
  return (
    <div className="container py-32">
      <div>
        <Splide
          options={{
            rewind: true,
            gap: '1rem',
            pagination: false,
            autoplay: true,
            speed: '2000',
          }}
          aria-label="My Favorite Images"
        >
          {projects.map((items, index) => (
            <SplideSlide key={index}>
              <Cards
                src1={items.src1}
                src2={items.src2}
                src3={items.src3}
                title={items.title}
                desc={items.desc}
                button={items.button}
                href={items.href}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  )
}

const Cards = ({ src1, src2, src3, title, desc, href, button }) => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-rows-5 lg:grid-rows-4 gap-4">
        <div className="lg:row-span-4 order-first lg:order-none relative">
          <Image src={src1} layout="fill" alt="Image" className="w-full object-cover" />
        </div>

        <div class="lg:row-span-2 h-80 relative overflow-hidden">
          <Image src={src2} layout="fill" alt="Image" className="w-full object-cover" />
        </div>

        <div class="lg:row-span-2 h-80 relative  overflow-hidden">
          <Image src={src3} layout="fill" alt="Image" className="w-full object-cover" />
        </div>
      </div>
      <div className="flex items-center justify-between mt-12">
        <p className="font-bold text-4xl uppercase">{title}</p>
        <p className="max-w-lg text-gray-900">{desc}</p>
        <Link href={href}>
          <div className="bg-red-600 px-16 py-4 tracking-widest text-white rounded-md uppercase font-bold cursor-pointer">
            {button}
          </div>
        </Link>
      </div>
    </div>
  )
}
