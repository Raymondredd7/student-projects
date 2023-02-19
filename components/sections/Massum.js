import Image from 'next/image';

const Massum = () => {
  const categories = [
    {
      title: 'Best public speech',
      participants: 'Markovic Predrag and Jusra Dervishi',
      teachers: 'Ilina Minoska and Gentiana Bekteshi'
    },
    {
      title: 'Best band and solo performer',
      participants: 'Muhamed Ramadani and Jovana Jovanoska',
      teachers: 'Sofijanka Serafimoska'
    },
    {
      title: 'Best photography',
      participants: 'Serxhan Ejupi',
      teachers: 'Berkant Hasanicaj'
    },
    {
      title: 'Best movie',
      participants: 'Mirjana Petreska, Hristina Ilkoska',
      teachers: 'Berkant Hasanicaj'
    },
    {
      title: 'Best web page',
      participants: 'Grujoski Bogoljub, Damjanovski Ivo, Trifunoski Aleksandar, Trpeski Jordan',
      teachers: 'Bozinovska Polina'
    },
    {
      title: 'Best',
      participants: 'Jasin Sefuli, Fisnik Limani, Krenar Sejdini, Anell Alili, Esra Hoca, Belma Samkarova, Samir Hasani, Fatbije Dalipi, Fjolla Bexheti, Arbnora Xhaferi, Viktor Vukas Jovanoski, Ljubomir Andreeski',
      teachers: 'Abdullhadi Sallmani, Taurika Neziri, Vadetin Dervishi, Mevlude A. Ramadani, Zorica Momiroska'
    },
    {
      title: 'Best poster',
      participants: 'Albin Sulejmani',
      teachers: 'Berkant Hasanicaj'
    }
  ];

  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-2xl font-bold mb-2">The Youth Association of Technical High Schools in Macedonia MASSUM</h1>
      <p className="mb-4">
        Our school traditionally takes part in the Educational Rendezvous which is organized by the Youth Association of Technical High Schools in Macedonia MASSUM.
      </p>
      <ul className="list-disc pl-4 mb-4">
        {categories.map((category, index) => (
          <li key={index}>
            <h2 className="text-lg font-bold">{category.title}</h2>
            <p>Participants: {category.participants}</p>
            <p>Teachers: {category.teachers}</p>
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-2 gap-4">
        <Image src="/images/massum/m1.jpg" width={300} height={200} alt="Image 1" />
        <Image src="/images/massum/m2.jpg" width={300} height={200} alt="Image 2" />
        <Image src="/images/massum/m3.jpg" width={300} height={200} alt="Image 3" />
        <Image src="/images/massum/m4.jpg" width={300} height={200} alt="Image 4" />
      </div>
    </div>
  );
};

export default Massum;
