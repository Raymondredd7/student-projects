import Image from 'next/image'

const Specialgifts = () => {
  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-2xl font-bold mb-2">Movie Night</h1>
      <p className="mb-4">
        The students from the Architecture program are making small houses and jewelry boxes for the
        children with special needs.They want to make them happy with these gifts.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <Image src="/images/massum/m1.jpg" width={600} height={600} alt="Image 1" />
        <Image src="/images/massum/m2.jpg" width={600} height={600} alt="Image 2" />
      </div>
    </div>
  )
}

export default Specialgifts
