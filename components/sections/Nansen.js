import Image from 'next/image'

const Nansen = () => {
  return (
    <div className="bg-blue-50 mx-8">
      <div className="container py-12">
        <div className="w-full h-[600px] relative my-8">
          <Image
            src="/images/massum/image33.jpg"
            layout="fill"
            alt="Image 4"
            className="object-cover"
          />
        </div>
        <div className="px-12">
          <div className="max-w-5xl space-y-4 mb-24">
            <p className="text-5xl font-bold mb-2 uppercase">
              The Youth Association of Technical High Schools in Macedonia Nansen
            </p>
            <p className="mb-4 text-lg tracking-wide">
              In the school year 2017/2018 professors from our school are taking part in Nansen
              model for integrated education (NMIE). Nansen model for integrated education is a new
              educational model in Republic of Macedonia why alowes succesfull integration od
              students, parents and professors from diferent etnical comunitis try modern
              educational proces. NMIE is a model of education why encourages and integritates
              multiethnical values, bilingualism and in the same time promotes and supports
              cooperation between students, professors and parents for building one cohesive and
              multiethnik commynity.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image src="/images/massum/m1.jpg" width={300} height={300} alt="Image 1" />
            <Image src="/images/massum/m2.jpg" width={300} height={300} alt="Image 2" />
            <Image src="/images/massum/m3.jpg" width={300} height={300} alt="Image 3" />
            <Image src="/images/massum/m4.jpg" width={300} height={300} alt="Image 4" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nansen
