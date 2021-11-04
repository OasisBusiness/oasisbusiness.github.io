import React, { useEffect, useRef } from "react"
import { css } from "@emotion/react"

const HEADER_HEIGHT = 48

function TocBox({ html }) {
  const activeElRef = useRef()

  useEffect(() => {
    const aLinks = document.querySelectorAll(`#toc-container a`)

    Array.from(aLinks).forEach(
      a =>
        (a.onclick = e => {
          e.preventDefault()
          const id = e.target.href.split("#")[1]
          const target = document.getElementById(`${decodeURI(id)}`)
          target && window.scrollTo(0, target.offsetTop - HEADER_HEIGHT - 20)
        })
    )

    const observer = new IntersectionObserver(
      entries => {
        const entry = entries.filter(entry => entry.isIntersecting)[0]
        if (entry) {
          const id = entry.target.parentElement.id

          const tocEl = document.querySelector(
            `#toc-container a[href*="${encodeURI(id)}"]`
          )

          if (tocEl) {
            const prevEl = activeElRef.current
            if (prevEl) prevEl.classList.remove("toc-active")
            tocEl.classList.add("toc-active")
            activeElRef.current = tocEl
          }
        }
      },
      { rootMargin: "-68px 0% -90%" }
    )
    const anchorHeaders = document.querySelectorAll(".anchor-header")
    anchorHeaders.forEach(el => observer.observe(el))
  }, [])

  return (
    <>
      <div
        id="toc-container"
        css={css`
          @media screen and (max-width: 1100px) {
            display: none;
          }
          z-index: 100;
          position: fixed;
          top: 240px;
          left: calc(48% + 768px / 2);
          width: 240px;
          max-width: 240px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(3px);
          padding: 10px;
          overflow: hidden;
          border-radius: 12px;
          ul,
          li,
          p {
            list-style: none;
            margin-bottom: 0;
            margin-top: 0;
          }
          a {
            display: inline-block;
            box-shadow: none;
            font-size: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            max-width: 100%;
            transition: all 0.2s ease-in-out;
          }
          a.toc-active {
            color: #005cff;
            font-weight: 500;
            transform: translateX(-2px) scale(1.05);
          }
        `}
      >
        <div
          css={css`
            /* h1 */
            & > ul > li > p > a {
              font-weight: 500;
              font-size: 13px;
            }
            /* h2 */
            & > ul > li > ul > li > p > a,
            & > ul > li > ul > li > a {
              font-size: 12px;
              font-weight: 500;
              cursor: pointer;
            }
            /* h3 */
            & > ul > li > ul > li > ul > li a {
              font-size: 12px;
              max-width: calc(100%);
            }
            /* h4 */
            & > ul > li > ul > li > ul > li > ul > li {
              background-color: green;
              display: none;
            }
          `}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </>
  )
}

export default TocBox
