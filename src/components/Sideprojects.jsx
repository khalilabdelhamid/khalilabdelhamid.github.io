import React from "react"
import Firebaseicon from "../icons/firebase.svg"
import Project from "./commons/Computer"
import Pythonicon from '../icons/python.svg';
import Androidicon from '../icons/android.svg';

const Sideprojects = () => {
  return (
    <section>
      <header className="text-center my-6">
        <h1 className="html-code">Stuff I have built on free time</h1>
      </header>
      <section className="flex justify-center items-center flex-wrap">
        <Project description="keep track of your dev ideas">
          <a
            href="https://ideas-tab.web.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            ideas-tab
          </a>
          <article>
            <Firebaseicon />
          </article>
        </Project>
        <Project description="cli tool for meistertask">
          <a
            href="https://github.com/ablil/meistertask-cli"
            target="_blank"
            rel="noopener noreferrer"
          >
            meistertask-cli
          </a>
          <article>
            <Pythonicon />
          </article>
        </Project>
        <Project description="monitor class attendance with QrCode">
          <a
            href="https://github.com/ablil/attendance-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            attendance-app
          </a>
          <article>
            <Androidicon />
          </article>
        </Project>
      </section>
      <footer className="text-center text-sm">
        check more on
        <a
          className="px-2"
          href="https://github.com/ablil"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
      </footer>
    </section>
  )
}

export default Sideprojects
