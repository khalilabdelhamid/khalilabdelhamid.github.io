import React, { useEffect, useState } from "react"
import Moonicon from "../../icons/moon.svg"
import Sunicon from "../../icons/sun.svg"

const ThemeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    if (localStorage.theme !== "dark" && localStorage.theme !== "light") {
      localStorage.setItem("theme", "dark")
    }
    if (localStorage.theme === "dark") {
      setIsDarkMode(true)
      document.querySelector("html").className = "dark"
    }

    if (localStorage.theme === "light") {
      setIsDarkMode(false)
      document.querySelector("html").className = ""
    }
  }, [])

  const toggleTheme = () => {
    if (localStorage.theme === "dark") {
      document.querySelector("html").className = ""
      localStorage.setItem("theme", "light")
      setIsDarkMode(false)
    } else {
      document.querySelector("html").className = "dark"
      localStorage.setItem("theme", "dark")
      setIsDarkMode(true)
    }
  }
  return isDarkMode ? (
    <Sunicon className="cursor-pointer" onClick={toggleTheme} />
  ) : (
    <Moonicon className="cursor-pointer" onClick={toggleTheme} />
  )
}

export default ThemeSwitch
