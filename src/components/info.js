import React from "react"

import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaYoutube as Youtube,
  FaInstagram as Insta,
  FaEnvelope as Mail,
  FaLinkedin as Linkedin,
  FaFileTextO as Filetext,
} from "react-icons/fa"

export default function info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3" style={{ color: "#09BC8A" }}>
        <span style={{ color: "white" }}>Hello, I'm</span> <br />
        Zach.
      </div>
      <div className="h1 code mt-4 mb-3">async {"{"}</div>
      <div className="text-muted mx-5 my-4 h3 text-justify info">
        A Detail-Oriented, Full-Stack Developer and Software Enthusiast From
        Birmingham, AL.
        <br />
        Please contact me through social media or email for questions and resume
        requests.
      </div>
      <div className="h1 code mt-2 mb-3">{"}"}</div>
      <div className="h1 mt-5">
        <a
          className="mr-5 icon"
          target="_blank"
          href="https://linkedin.com/in/zddurden"
        >
          <Linkedin />
        </a>
        <a
          className="mr-5 icon"
          target="_blank"
          href="https://github.com/ZDDurden"
        >
          <Github />
        </a>
        <a
          className="mr-5 icon"
          target="_blank"
          href="mailto://zddurden@crimson.ua.edu"
        >
          <Mail />
        </a>
      </div>
    </div>
  )
}
