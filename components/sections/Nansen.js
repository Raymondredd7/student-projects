import Image from 'next/image'

const Nansen = () => {
  return (
    <div className="flex items-center grid-cols-2">
      <div className="flex flex-col mt-8">
        <div>
          <Image src="/images/massum/m1.jpg" width={200} height={200} />
          <Image src="/images/massum/m1.jpg" width={200} height={200} />
        </div>
        <div>
          <Image src="/images/massum/m1.jpg" width={200} height={200} />
          <Image src="/images/massum/m1.jpg" width={200} height={200} />
        </div>
      </div>
      <div className="flex-1">
        <p className="text-xl font-bold">
          The Youth Association of Technical High Schools in Macedonia MASSUM
        </p>
        <p>
          In the school year 2017/2018 professors from our school are taking part in Nansen model
          for integrated education (NMIE). Nansen model for integrated education is a new
          educational model in Republic of Macedonia why alowes succesfull integration od students,
          parents and professors from diferent etnical comunitis try modern educational proces. NMIE
          is a model of education why encourages and integritates multiethnical values, bilingualism
          and in the same time promotes and supports cooperation between students, professors and
          parents for building one cohesive and multiethnik commynity.
        </p>
      </div>
    </div>
  )
}

export default Nansen
