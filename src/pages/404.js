import React from "react"
import Navbar from "../components/commons/Navbar"
import Footer from "../components/commons/Footer"

const NotFoundPage = () => {
  return (
    <section>
      <Navbar />
      <section className="text-center uppercase text-6xl py-12">
        <article>ARE YOU LOST ?</article>
        <article>404</article>
      </section>
      <Footer />
    </section>
  )
}

export default NotFoundPage
