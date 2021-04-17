import React from "react"

const Project = ({ description, children }) => {
  return (
    <section className="m-4 flex flex-col text-center">
      <article className="shadow-2xl w-60 h-24 bg-gray-800 text-sm flex-center text-green-200 rounded border-b-8 border-gray-400 p-1">
        {description}
      </article>
      <div className="bg-gray-400 w-2/4 mx-auto h-5"></div>
      <div className="bg-gray-400 w-4/6 mx-auto h-2 rounded"></div>

      <article className="my-2">{children}</article>
    </section>
  )
}

export default Project
