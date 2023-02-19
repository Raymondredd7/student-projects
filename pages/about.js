import React from 'react'
import Layout from '@/layout/Layout'
import TwoColumnLayout from '@/components/sections/AboutUs'
import SchoolLeadership from '@/components/sections/SchoolLeadership'


export default function about() {
  return (
    <Layout title="About">
    <TwoColumnLayout />
    <SchoolLeadership />
</Layout>
  )
}
