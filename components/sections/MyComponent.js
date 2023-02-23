import { Component } from 'react'
import Image from 'next/image'
import Link from 'next/link'

class Card extends Component {
  render() {
    const { title, text, imageSrc, link } = this.props
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 flex flex-col">
        <Image className="w-full" src={imageSrc} width={400} height={300} alt="Card image" />
        <div className="px-6 py-4 flex-1">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base flex-1">{text}</p>
        </div>
        <div className="px-6 py-4">
          <Link href={link}>
            <a className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded">
              Lexo me shume
            </a>
          </Link>
        </div>
      </div>
    )
  }
}

const MyComponent = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Projektet e nxenesve te shkolles SHMTK
      </h1>
      <div className="flex flex-wrap justify-center">
        <Card
          title="MASSUM"
          text="Our school tradıtıonally takes part ın the Educational Rendezvous wıtch ıs organızed by..."
          imageSrc="/images/projects/massum.jpg"
          link="/projects/massum"
        />
        <Card
          title="NANSEN"
          text="In the school year 2017/2018 professors from our school are taking part in Nansen model for integrated education..."
          imageSrc="/images/projects/nansen.jpg"
          link="/projects/nansen"
        />
        <Card
          title="ENGLISH CLUB"
          text="Every Monday after school classes our students have activities in the English club. The students are of mixed nationalities..."
          imageSrc="/images/projects/enclub.jpg"
          link="/projects/englishclub"
        />
      </div>
      <div className="flex flex-wrap justify-center">
        <Card
          title="MOVIE NIGHT"
          text="Every Monday after school classes our students have activities in the English club. The students are..."
          imageSrc="/images/projects/massum.jpg"
          link="/projects/movienight"
        />
        <Card
          title="SPRING DAY"
          text="On the Spring Day 21 March, the students were cleaning the school yard and were planting trees and flowers..."
          imageSrc="/images/projects/nansen.jpg"
          link="/projects/springday"
        />
        <Card
          title="SPECIAL GIFTS FOR CHILDREN"
          text="The students from the Architecture program are making small houses and jewelry boxes for the children with special needs..."
          imageSrc="/images/projects/enclub.jpg"
          link="/projects/specialgifts"
        />
      </div>
    </div>
  )
}

export default MyComponent
