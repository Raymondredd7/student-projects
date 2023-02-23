import Image from 'next/image'

const Movienight = () => {
  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-2xl font-bold mb-2">Movie Night</h1>
      <p className="mb-4">
        On Thursday 22 March, the students had a Movie Night in the English Club. The film started
        at 7pm. They were watching the film “The Pianist” and after the film there was a discussion.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <Image src="/images/massum/m1.jpg" width={600} height={600} alt="Image 1" />
        <Image src="/images/massum/m2.jpg" width={600} height={600} alt="Image 2" />
      </div>
    </div>
  )
}

export default Movienight
