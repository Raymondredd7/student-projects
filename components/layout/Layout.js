import dynamic from 'next/dynamic'
import Head from 'next/head'
import Footer from '/components/layout/Footer'

const Navigation = dynamic(() => import('@/components/layout/Navigation'), { ssr: false })

export default function Layout({ children, title = null }) {
  const dev = process.env.NODE_ENV === 'development'

  return (
    <>
      <Head>
        <title>{title ? `${title} - Projektet e Studenteve` : 'Projektet e Studenteve'}</title>

        {/* Favicons */}
        <link rel="icon" href="/favicons/favicons.ico" sizes="32x32" />
      </Head>
      <div className={`font-sans antialiased flex flex-col ${dev ? 'debug-screens' : ''}`}>
        {/* Navigation here */}
        <Navigation />

        {children}

        <Footer />
      </div>
    </>
  )
}
