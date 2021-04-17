import * as React from "react"
import Navbar from "../components/commons/Navbar"
import Footer from "../components/commons/Footer"
import Header from "../components/Info"
import Sideprojects from "../components/Sideprojects"
import Stack from "../components/Stack"

const IndexPage = () => {
  return (
    <section className="bg-blue-40 text-gray-900">
      <Navbar />
      <Header />
      <Stack />
      <Sideprojects />
      <Footer />
    </section>
  )
}

export default IndexPage
