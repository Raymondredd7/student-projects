import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-white py-4 ">
      <div className="px-8 text-black font-bold">
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
