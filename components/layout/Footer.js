import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black py-4">
      <div className="container mx-auto text-center text-white">
        <p>© 2023 SHMTK™. All Rights Reserved. Made by <Link href="https://edonxh.com"><a className="underline">EdonXH</a></Link></p>
      </div>
    </footer>
  );
};

export default Footer;