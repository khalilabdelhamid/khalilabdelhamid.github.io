import React from "react"
import Navbar from "../components/commons/Navbar"
import Footer from "../components/commons/Footer"
import Backpack from "../components/Backpack"

const BackpackPage = () => {
  return (
    <section className="bg-blue-40 text-gray-900">
      <Navbar />
      <Backpack />
      <section className="text-center text-sm">
        <h2 className="my-2">
          In case you are wondering, my favorites IDEs are Intellij IDE and
          Vscode with <b>vim</b> plugin.
        </h2>
        <h2 className="my-2">
          You may want to check my
          <a
            className="px-2"
            href="https://github.com/ablil/dotfiles"
            target="_blank"
            rel="noopener noreferrer"
          >
            dotfiles
          </a>
          configuration for faster environement setup.
        </h2>
      </section>
      <Footer />
    </section>
  )
}

export default BackpackPage
