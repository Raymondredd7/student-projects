import Image from 'next/image'

const SchoolLeadership = () => {
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-4xl font-bold text-center mb-10">School Leadership</h2>
      <p className="text-center font-bold mb-4">Meet Our School Leadership</p>
      <div className="flex flex-wrap justify-center">
        <div className="max-w-sm  overflow-hidden shadow-lg m-4">
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-48 h-48">
              <Image
                src="/images/leadership/bs.jpg"
                alt="bs"
                layout="fill"
                className="object-contain"
              />
            </div>
            <div className="text-lg font-bold mt-4">Besir S</div>
            <div className="text-base mb-4">Director</div>
          </div>
        </div>
        <div className="max-w-sm  overflow-hidden shadow-lg m-4">
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-48 h-48">
              <Image
                src="/images/leadership/lt.jpg"
                alt="lt"
                layout="fill"
                className="object-contain"
              />
            </div>
            <div className="text-lg font-bold mt-4">Lindita T</div>
            <div className="text-base mb-4">Dp. Director</div>
          </div>
        </div>
        <div className="max-w-sm  overflow-hidden shadow-lg m-4">
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-48 h-48">
              <Image
                src="/images/leadership/ai.jpg"
                alt="ai"
                layout="fill"
                className="object-contain"
              />
            </div>
            <div className="text-lg font-bold mt-4">Ajsel I</div>
            <div className="text-base mb-4">Pedagogue</div>
          </div>
        </div>
        <div className="max-w-sm  overflow-hidden shadow-lg m-4">
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-48 h-48">
              <Image
                src="/images/leadership/em.jpg"
                alt="em"
                layout="fill"
                className="object-contain"
              />
            </div>
            <div className="text-lg font-bold mt-4">Ekrem M</div>
            <div className="text-base mb-4">Dp. Director of Practice</div>
          </div>
        </div>
        <div className="max-w-sm  overflow-hidden shadow-lg m-4">
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-48 h-48">
              <Image
                src="/images/leadership/ym.jpg"
                alt="ym"
                layout="fill"
                className="object-contain"
              />
            </div>
            <div className="text-lg font-bold mt-4">Yllzana M</div>
            <div className="text-base mb-4">Psychologist</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SchoolLeadership
