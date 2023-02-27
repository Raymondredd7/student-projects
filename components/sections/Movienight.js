import Image from 'next/image'

const Movienight = () => {
  return (
    <div className="mx-8 bg-blue-50">
      <div className="container py-12">
        <h1 className="text-5xl font-bold mb-2">Movie Night</h1>
        <p className="mb-4 max-w-5xl">
          On Thursday 22 March, the students had a Movie Night in the English Club. The film started
          at 7pm. They were watching the film “The Pianist” and after the film there was a
          discussion.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image src="/images/massum/m1.jpg" width={600} height={600} alt="Image 1" />
          <Image src="/images/massum/m2.jpg" width={600} height={600} alt="Image 2" />
        </div>
      </div>
    </div>
  )
}

export default Movienight
