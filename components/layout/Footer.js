import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-white py-4 shadow-[0_25px_50px_10px_rgba(0,0,0,0.3)]">
      <div className="container mx-auto text-center text-black">
        <p>
          © 2023 SHMTK™. All Rights Reserved. Made by{' '}
          <Link href="https://edonxh.com">
            <a className="underline">EdonXH</a>
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
