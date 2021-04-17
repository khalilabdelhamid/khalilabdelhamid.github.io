import React from "react"

import Terminal from "./commons/Terminal"

const Stack = () => {
  const stack = `
  {
    stack: {
      frameworks: ["React", "Angular", "Spring", "ExpressJs"],
      languages: ["Python", "Java", "javascript/typescript"],
      databases: ["postgresql", "mysql", "firebase", "mongodb"],
      others: ["Docker"],
    },
    favorites: ["Python", "Linux", "Git", "vim"],
    thingsIhate: "windows",
  }
  `

  return (
    <section>
      <header className="text-center my-6">
        <h1 className="html-code">My backpack of skills</h1>
      </header>
      <Terminal command="cat ~/Documents/stack.json | python3 -m json.tool">
        <pre>
          <code>{stack}</code>
        </pre>
      </Terminal>
    </section>
  )
}

export default Stack
