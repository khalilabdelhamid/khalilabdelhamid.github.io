import React from "react"
import Headphone from "../../icons/headphone.svg"
import Cup from "../../icons/cup.svg"

const Footer = () => {
  return (
    <footer className="text-center py-8">
      made by
      <a className="px-2" href="https://github.com/ablil/" target="_blank" rel="noreferrer">
        @ablil
      </a>
      with <Headphone /> and <Cup />
    </footer>
  )
}

export default Footer
