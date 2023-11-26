export const metadata = {
  title: 'OCOP\'S RISE',
  description: 'GIẢI PHÁP TOÀN DIỆN - NÂNG TẦM PHÁT TRIỂN OCOP',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import Reasons from '@/components/reasons'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <Reasons />
      <Testimonials />
      <Newsletter />
    </>
  )
}
