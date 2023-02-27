import { Splide, SplideSlide } from '@splidejs/react-splide'
import Image from 'next/image'
import '@splidejs/react-splide/css'
import { projects } from 'content/projects'

export default function Projects() {
  return (
    <div className="container py-16">
      <div>
        <Splide
          options={{
            rewind: true,
            gap: '1rem',
            pagination: false,
          }}
          aria-label="My Favorite Images"
        >
          {projects.map((items, index) => (
            <SplideSlide key={index}>
              <Cards src1={items.src1} src2={items.src2} src3={items.src3} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  )
}

const Cards = ({ src1, src2, src3 }) => {
  return (
    <div className="grid lg:grid-cols-2 grid-rows-5 lg:grid-rows-4 gap-4">
      <div class="lg:row-span-4 order-first lg:order-none relative">
        <Image src={src1} layout="fill" className="w-full object-cover" />
      </div>

      <div class="lg:row-span-2 h-80 relative overflow-hidden">
        <Image src={src2} layout="fill" className="w-full object-cover" />
      </div>

      <div class="lg:row-span-2 h-80 relative  overflow-hidden">
        <Image src={src3} layout="fill" className="w-full object-cover" />
      </div>
    </div>
  )
}
