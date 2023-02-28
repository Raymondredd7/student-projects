import TwoColumnLayout from '@/components/sections/AboutUs'
import SchoolLeadership from '@/components/sections/SchoolLeadership'
import Layout from '@/layout/Layout'

export default function about() {
  return (
    <Layout title="About">
      <TwoColumnLayout />
      <SchoolLeadership />
    </Layout>
  )
}
