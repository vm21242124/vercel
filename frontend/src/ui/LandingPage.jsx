import React from 'react'
import Header from './common/Header'
import Footer from './common/Footer'


const LandingPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <section className="bg-gray-800 text-white py-20 min-h-[80vh]">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-5xl font-bold mb-6">Deploy. Scale. Innovate.</h1>
                <p className="text-xl mb-12">Instantly deploy your code and scale to millions of users seamlessly.</p>
                <button className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg">Get Started</button>
            </div>
        </section>
      <Footer />
    </div>
  )
}

export default LandingPage