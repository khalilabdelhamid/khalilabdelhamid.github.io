import React from "react"

const Backpack = () => {
  const javaBackpack = [
    "java (8/11)",
    "groovy",
    "spring boot / data / cloud",
    "hibernate",
    "log4j",
    "junit / mockito",
    "maven / ant",
  ]

  const javascriptBackpack = [
    "javascript (ES6)",
    "typescript",
    "nodejs",
    "react",
    "angular",
    "gulp / webpack",
    "yarn",
  ]

  return (
    <section className="flex justify-center">
      <article className="p-8">
        <h2 className="html-code uppercase font-semibold text-red-400 dark:text-red-400 py-8">
          java backpack
        </h2>
        <article>
          <ul>
            {javaBackpack.map(item => (
              <li className="capitalizel">{item}</li>
            ))}
          </ul>
        </article>
      </article>
      <article className="p-8">
        <h2 className="html-code uppercase font-semibold text-yellow-400 dark:text-yellow-400 py-8">
          javascript backpack
        </h2>
        <article>
          <ul>
            {javascriptBackpack.map(item => (
              <li className="capitalize">{item}</li>
            ))}
          </ul>
        </article>
      </article>
    </section>
  )
}

export default Backpack
