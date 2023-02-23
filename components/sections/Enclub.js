import Image from 'next/image'

const Enclub = () => {
  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-2xl font-bold mb-2">English Club</h1>
      <p className="mb-4">
        Every Monday after school classes our students have activities in the English club. The
        students are of mixed nationalities, Macedonian, Abanian and Turkish and all the activities
        are in English.
      </p>
      <p className="mb-4">
        The activities and the discussions in this club are on the following themes: Food, Family,
        Environment, Discrimination, Self-Esteem, Culture. At the same time they have fun by playing
        interesting games, through which they improve their English.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <Image src="/images/massum/m1.jpg" width={600} height={600} alt="Image 1" />
        <Image src="/images/massum/m2.jpg" width={600} height={600} alt="Image 2" />
      </div>
    </div>
  )
}

export default Enclub
