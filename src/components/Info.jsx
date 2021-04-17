import React from "react"
import EmailIcon from "../icons/email.svg"
import GithubIcon from "../icons/github.svg"
import LinkedinIcon from "../icons/linkedin.svg"

const Header = () => {
  return (
    <header className="text-center">
      <h1 className="text-3xl py-4">
        Hello there, I am <b>Khalil</b>
      </h1>
      <h2 className="text-xl py-4">
        Software Engineer
        <span className="px-1 text-blue-400 dark:text-green-400">|</span>
        Fullstack Developer{" "}
        <span className="px-1 text-blue-400 dark:text-green-400">|</span>
        Python Enthusiast
      </h2>
      <article className="text-sm">
        I am that dude who was born a keyboard on his hand
      </article>
      <article className="py-4">
        <article className="flex justify-center items-center">
          <a
            className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            href="https://github.com/ablil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="mx-4 hover:opacity-80" />
          </a>
          <a
            className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            href="https://www.linkedin.com/in/khalil-abdelhamid/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon className="mx-4 hover:opacity-80" />
          </a>
          <a
            className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            href="mailto:31.abdelhamid@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon className="mx-4 hover:opacity-80" />
          </a>
        </article>
      </article>
    </header>
  )
}

export default Header
