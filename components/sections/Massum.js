import Image from 'next/image'

const Massum = () => {
  const categories = [
    {
      title: 'Best public speech',
      participants: 'Markovic Predrag and Jusra Dervishi',
      teachers: 'Ilina Minoska and Gentiana Bekteshi',
    },
    {
      title: 'Best band and solo performer',
      participants: 'Muhamed Ramadani and Jovana Jovanoska',
      teachers: 'Sofijanka Serafimoska',
    },
    {
      title: 'Best photography',
      participants: 'Serxhan Ejupi',
      teachers: 'Berkant Hasanicaj',
    },
    {
      title: 'Best movie',
      participants: 'Mirjana Petreska, Hristina Ilkoska',
      teachers: 'Berkant Hasanicaj',
    },
    {
      title: 'Best web page',
      participants: 'Grujoski Bogoljub, Damjanovski Ivo, Trifunoski Aleksandar, Trpeski Jordan',
      teachers: 'Bozinovska Polina',
    },
    {
      title: 'Best',
      participants:
        'Jasin Sefuli, Fisnik Limani, Krenar Sejdini, Anell Alili, Esra Hoca, Belma Samkarova, Samir Hasani, Fatbije Dalipi, Fjolla Bexheti, Arbnora Xhaferi, Viktor Vukas Jovanoski, Ljubomir Andreeski',
      teachers:
        'Abdullhadi Sallmani, Taurika Neziri, Vadetin Dervishi, Mevlude A. Ramadani, Zorica Momiroska',
    },
    {
      title: 'Best poster',
      participants: 'Albin Sulejmani',
      teachers: 'Berkant Hasanicaj',
    },
  ]

  return (
    <div className="bg-blue-50 mx-8">
      <div className="container py-12">
        <div className="w-full h-[600px] relative my-8">
          <Image src="/images/massum/m1.jpg" layout="fill" alt="Image 4" className="object-cover" />
        </div>
        <div className="px-12">
          <div className="max-w-5xl space-y-4">
            <p className="text-5xl font-bold mb-2 uppercase">
              The Youth Association of Technical High Schools in Macedonia MASSUM
            </p>
            <p className="mb-4 text-lg tracking-wide">
              Our school traditionally takes part in the Educational Rendezvous which is organized
              by the Youth Association of Technical High Schools in Macedonia MASSUM.
            </p>
          </div>
          {categories.map((category, index) => (
            <div className="max-w-5xl space-y-2 my-8" key={index}>
              <h2 className="text-2xl font-semibold">{category.title}</h2>
              <div>
                <p className="font-thin">Participants: {category.participants}</p>
                <p>Teachers: {category.teachers}</p>
              </div>
            </div>
          ))}
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

export default Massum
