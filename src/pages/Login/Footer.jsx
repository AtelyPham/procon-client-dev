import React from "react"
import { Icon, Level } from "react-bulma-components"
import { FaFacebook, FaGithubAlt, FaLinkedin } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"
import { links } from "../../config"

const CONFIG = {
  renderAs: "a",
  color: "dark",
}

const Footer = () => {
  return (
    <Level>
      <Level.Side align="left">
        <Level.Item
          style={{
            minWidth: "150px",
            justifyContent: "space-around",
          }}
        >
          <Icon {...CONFIG} href={links.github} target="_blank">
            <FaGithubAlt />
          </Icon>
          <Icon {...CONFIG} href={links.facebook} target="_blank">
            <FaFacebook />
          </Icon>
          <Icon {...CONFIG} href={links.linkedin} target="_blank">
            <FaLinkedin />
          </Icon>
          <Icon
            {...CONFIG}
            href={`mailto:${links.gmail}?Subject=Account%20for%20Procon%20`}
            target="_blank"
          >
            <IoMdMail />
          </Icon>
        </Level.Item>
      </Level.Side>
      <Level.Side align="right">
        <small
          className="level-item"
          style={{ color: "hsla(0, 0%, 0%, 0.33)" }}
        >
          &copy; Procon Hutech Website. All Rights Reserved.
        </small>
      </Level.Side>
    </Level>
  )
}

export default Footer
