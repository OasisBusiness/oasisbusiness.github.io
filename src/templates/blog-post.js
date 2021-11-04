import React, { useEffect, useState } from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import ProfileImage from "../components/profileImage"
import TocBox from "../components/TocBox"
import { css } from "@emotion/react"
import Footer from "../components/footer"
import Header from "../components/Header"
import { getUserInfo } from "../data/user"
import styled from "@emotion/styled"

const Tag = styled.div`
  line-height: 28px;
  font-size: 12px;
  border-radius: 22px;
  padding: 0 0.8rem;
  border: 1px solid var(--reverseText);
  color: var(--reverseText);
  font-weight: 500;
  user-select: none;
  margin: 0.2rem;
`

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  const [isTop, setIsTop] = useState(true)

  useEffect(() => {
    const el = document.querySelector("#post-header")

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setIsTop(true)
          else setIsTop(false)
        })
      },
      { rootMargin: "0% 0% -90%" }
    )

    io.observe(el)
  }, [])

  const user = getUserInfo(post.frontmatter.writeAuthor)

  return (
    <>
      <SEO
        title={"오아시스 비즈니스 기술 블로그 - " + post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <TocBox html={post.tableOfContents} />
      <Header
        title={isTop ? "오아시스 비즈니스 기술 블로그" : post.frontmatter.title}
      />
      <main
        css={css`
          width: 100%;
          display: flex;
          justify-content: center;
          background-color: var(--bg);
          color: var(--textNormal);
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
            flex-direction: column;
            width: 100%;
            max-width: 768px;
            margin-right: 240px;
            @media screen and (max-width: 1024px) {
              margin: 0 auto;
              padding: 0 20px 0 40px;
            }
          `}
        >
          <article style={{ width: "100%" }}>
            <div
              id="post-header"
              style={{
                borderBottom: "1px solid #eee",
              }}
            >
              <h1 className="mb-0">{post.frontmatter.title}</h1>
              <p
                style={{
                  ...scale(-1 / 5),
                  display: `block`,
                  marginBottom: "0.8rem",
                }}
              >
                <div className="flex items-center text-md mt-1">
                  <span style={{ textAlign: `center` }}>
                    {post.frontmatter.date}{" "}
                  </span>{" "}
                </div>
                <a
                  style={{ boxShadow: "none" }}
                  className="text-md flex items-center mt-2"
                  href={user.homepageUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ProfileImage size={40} src={user.avatar} />{" "}
                  <span className="ml-2 text-gray-500">by</span>
                  <span className="ml-1 font-semi-bold">{user.nickname}</span>
                </a>
              </p>
            </div>

            <div
              className="flex items-center flex-wrap"
              style={{ margin: `${rhythm(1)} 0` }}
            >
              {post.frontmatter.categories?.slice(0, 10).map(item => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>

            <section
              css={css`
                .anchor-header.before {
                  box-shadow: none;
                }
              `}
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </article>

          <nav className="w-full mt-20">
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    <span className="text-gray-600 text-sm mr-3">← 이전</span>
                    <span>{previous.frontmatter.title}</span>
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title}
                    <span className="text-gray-600 text-sm ml-3">다음 →</span>
                  </Link>
                )}
              </li>
            </ul>
          </nav>
          <Footer />
        </div>
      </main>
    </>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      tableOfContents
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
        description
        writeAuthor
        categories
      }
    }
  }
`
