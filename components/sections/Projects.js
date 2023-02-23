import { Splide, SplideSlide } from '@splidejs/react-splide'
import Image from 'next/image'
import '@splidejs/react-splide/css'
import projects from 'content/projects'

export default function Projects() {
  return (
    <div className="container py-16">
      <div>
        <Splide
          options={{
            rewind: true,
            gap: '1rem',
          }}
          aria-label="My Favorite Images"
        >
          <div>
            <SplideSlide>
              <>
                {projects.projects['src1'].map((item) => (
                  <Cards src={item} />
                ))}
                {projects.projects['src2'].map((item) => (
                  <Cards src={item} />
                ))}
                {projects.projects['src3'].map((item) => (
                  <Cards src={item} />
                ))}
              </>
            </SplideSlide>
          </div>
        </Splide>
      </div>
    </div>
  )
}

const Cards = ({ src }) => {
  return (
    <div className="grid lg:grid-cols-2 grid-rows-5 lg:grid-rows-4 overflow-hidden gap-4">
      <div class="lg:row-span-4 order-first lg:order-none relative">
        <Image src={src} layout="fill" className="object-cover" />
      </div>

      <div class="lg:row-span-2 h-80 relative overflow-hidden">
        <Image src={src} layout="fill" className="object-cover" />
      </div>

      <div class="lg:row-span-2 h-80 relative  overflow-hidden">
        <Image src={src} layout="fill" className="object-cover" />
      </div>
    </div>
  )
}
