import React from "react"
import { css } from "@emotion/react"
import logo from "../assets/ob-icon.png"
import { Link } from "gatsby"

function Header({ title }) {
  return (
    <>
      <header
        css={css`
          background-color: var(--bg);
          color: var(--textNormal);
          width: 100%;
          height: 48px;
          border-bottom: 1px solid #eee;
          display: flex;
          justify-content: center;
          position: fixed;
          transition: all 0.2s ease-out;
          z-index: 1000;
          top: 0px;
        `}
      >
        <Link
          to="/"
          css={css`
            box-shadow: none;
            width: 100%;
            max-width: calc(1024px + 40px);
            padding: 0 20px;
            height: 48px;
            display: flex;
            align-items: center;
            cursor: pointer;
            font-weight: 500;
          `}
        >
          <img src={logo} alt="" style={{ width: "20px", margin: 0 }} />
          <span className="ml-3">{title}</span>
        </Link>
      </header>
      <div
        css={css`
          height: 48px;
        `}
      />
    </>
  )
}

export default Header
