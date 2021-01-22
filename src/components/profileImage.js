/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
//import Layout from "../components/layout"

const ProfileImage = () => {

//  const data = useStaticQuery(graphql`
//    query MyQuery {
//      site {
//        id
//      }
//      siteBuildMetadata {
//        id
//      }
//      sitePage(component: {}) {
//        id
//      }
//      allImageSharp {
//        edges {
//          node {
//            id
//          }
//        }
//      }
//      allFile(filter: {extension: {regex: "/(png)/"}, relativeDirectory: {eq: "avatars"}}) {
//        edges {
//          node {
//            base
//            childrenImageSharp {
//              fluid {
//                aspectRatio
//                base64
//                sizes
//                src
//                srcSet
//              }
//            }
//          }
//        }
//      }
//    }
//  `)

    const data = useStaticQuery(graphql`
        query ProfileImageQuery {
          avatar: file(absolutePath: { regex: "/semin.png/" }) {
            childImageSharp {
              fixed(width: 40, height: 40) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          site {
                siteMetadata {
                  title
                }
              }
            markdownRemark {
                  id
                  excerpt(pruneLength: 160)
                  html
                  frontmatter {
                    title
                    date(formatString: "MMMM DD, YYYY")
                    description
                    writeAuthor
                  }
                }
        }
      `)

  const { author } = data.markdownRemark.frontmatter.writeAuthor

  return (
    <div style={{
                   paddingRight: 10,
                   paddingLeft: 10,
                 }}>
        <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt="author name"
                style={{
                  minWidth: 30,
                  borderRadius: `100%`,
                  padding: 10,
                }}
                imgStyle={{
                  borderRadius: `50%`,
                }}
              />
              </div>
//            {data.allFile.edges.map(({node}) =>
//            (
//                <Image fluid={node.childImageSharp.fluid} alt={node.base.split(".")[0]}/>
//            ))}

  )
}

export default ProfileImage
