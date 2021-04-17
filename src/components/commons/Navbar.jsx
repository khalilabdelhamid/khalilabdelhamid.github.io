import { Link } from "gatsby"
import React from "react"
import ThemeSwitch from "./ThemeSwitch"

const Navbar = () => {
  return (
    <nav className="w-full py-2 flex justify-center items-center sm:text-xs md:text-base">
      <Link to="/" className="hashtag px-4">
        portfolio
      </Link>
      <Link to="/backpack" className="hashtag px-4">
        backpack
      </Link>
      <a href="/" className="hashtag px-4">
        view resume
      </a>
      <ThemeSwitch className="mr-0" />
    </nav>
  )
}

export default Navbar
