import React from "react"

const Terminal = ({ command, children }) => {
  return (
    <section className="terminal shadow m-4 mx-auto bg-gray-900 dark:bg-gray-800 rounded-lg text-sm">
      <article className="w-full h-5 bg-gray-100 flex justify-start items-center rounded-t relative">
        <div className="rounded-full bg-red-400 h-3 w-3 mx-1"></div>
        <div className="rounded-full bg-yellow-400 h-3 w-3 mx-1"></div>
        <div className="rounded-full bg-green-400 h-3 w-3 mx-1"></div>
        <div className="text-xs dark:text-gray-900 mx-auto absolute inset-x-1/4">
          khalil@linuxbox:~
        </div>
      </article>

      <article className="w-full px-1 ">
        <div className="shell">{command}</div>
        <article className="text-white break-words">{children}</article>
      </article>
    </section>
  )
}

export default Terminal
