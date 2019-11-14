import React from "react"

import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaYoutube as Youtube,
  FaInstagram as Insta,
  FaEnvelope as Mail,
  FaLinkedin as Linkedin,
  FaFileAlt as Filetext,
  FaCss3 as Css,
  FaHtml5 as Html,
} from "react-icons/fa"
import {
  IoLogoJavascript as Javascript,
  IoLogoCss3 as Css3,
  IoLogoNodejs as Nodejs,
  IoLogoPython as Python,
} from "react-icons/io"

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
        A Detail-Oriented, Full-Stack Developer and Software Enthusiast Living
        in Birmingham, AL.
        <br />
        Please contact me through social media or email for questions or
        download my resume below.
        {/* <br />
        <Html />
        <Css3 />
        <Javascript />
        <Python />
        <Nodejs /> */}
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
        <a
          title="Download My Resume"
          className="mr-5 icon"
          target="_blank"
          href={`../ZDurdenResume.pdf`}
          download
        >
          <Filetext />
        </a>
      </div>
    </div>
  )
}
