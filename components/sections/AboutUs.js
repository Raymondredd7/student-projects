import Image from 'next/image'

const AboutUs = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 pr-4">
            <Image src="/images/hero.jpg" alt="About Us" width={600} height={400} />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
            <p className="text-gray-800 leading-relaxed mb-8">
              The first classes were formed in the school year 1960/61 for the program electrical
              and mechanical engineering under the name &quot;Industrial school with practical
              work&quot;, in Gostivar founded by Public Council of the community of Gostivar in 1960
              with a decision number 5233 since 12.09.1960. On 04.09.1961, the first teaching
              council was held. On 20.11.1961, the first meeting of the teaching board was held. The
              school started working on 18.11.1963 on the Liberty Day of Gostivar. The last decision
              for verification of programs was brought on 09.06.2006 under the number 11-2938/2.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
