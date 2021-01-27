---
title: "Oasisbusiness Tech-Blog w/ Gatsby"
date: "2021-01-27T07:26:03.284Z"
writeAuthor: semin
description: "project with SpringBoot"
categories: [paragraph, feature photo]
comments: true
image:
feature: https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?crop=entropy&dpr=2&fit=crop&fm=jpg&h=475&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1250
credit: Greg Rakozy
creditlink: https://unsplash.com/photos/oMpAz-DN-9I
---
안녕하세요!  
오늘은 오아시스 블로그를 개설하면서 용한 gatsby에 대해 알아보도록 하겠습니다.

##What is Gatsby?

페이지 생성에는 여러가지 방식이있다. 

1. SSR 방식
    - 페이지 접근 시 DB에서 정보를 받아와 HTML 생성
2. CSR 방식
    - API로 페이지 정보를 받아와 HTML 생성
3. 원하는 시점에 빌드하여 페이지 생성
    - _배포시점에 모든 페이지 정보들이 생성되어 별도의 앱서버가 필요 없음_ 

이 중 Gatsby는 3번 방식을 이용하여 페이지를 생성합니다.
    

**GraphQL를 통해 빌드 시점에 정적 페이지를 생성하는 Gatsby JS**

>Gatsby is a React-based open source framework with performance, scalability and security built-in.

즉, Gatsby는 리액트 기반의 오픈 소스 프레임워크로,  
graphQL을 통해 가져온 정보들을 HTML, CSS, React로 만들어진 컴포넌트 UI와 연결하여 사이트로 생성합니다.


##How to use?

###Gatsby 설치하고 실행하기

1. Gatsby CLI 이용하기  
Gatsby CLI는 Webpack, Reachjs, React-route 등을 포함하고 있으므로 간단히 이용할 수 있도록 도와줍니다.  
```npm install --global gatsby-cli```
   

2. Gatsby로 새 프로젝트 생성하기  
   ```gatsby new 프로젝트명```
   
   
3. 해당 프로젝트로 이동하기  
   ```cd 프로젝트 폴더명```
   
   
4. Gatsby 개발모드로 시작하기  
   ```gatsby develop```
   

###구조 파악하기

설치 및 개발 준비가 끝났다면 전체적인 구조를 살펴보겠습니다.

**설정 파일**
- gatsby-config.js  
Gatsby의 기본 구성 파일로 사이트 제목, 설명, 플러그인 등 사이트 메타 데이터를 지정합니다.
  

- gatsby-browser.js  
Gatsby 브라우저 API를 사용할 경우 사용합니다.
  
  
- gatsby-node.js  
Gatsby 노드 API를 사용할 경우 해당하는 사용법을 정의합니다.
  
  
- gatsby-ssr.js  
Gatsby 서버 사이드 렌더링 API를 사용하는 경우 해당하는 사용법을 정의합니다.
  

**프로젝트 구조**

/public: gatsby build의 Output이 위치한다.

/plugins: npm에 포함되지 않은 라이브러리나 플러그인을 넣는다.

/src/pages: 파일 이름 및 폴더 이름을 경로로하여 따라간다.

/src/components: 컴포넌트들을 모아둔 폴더

/src/images: 이미지들을 모아둔 폴더

/static: 저장된 파일을 Webpack에서 처리하지 않고 공용 폴더에 복사되는 폴더가 존재한다.

#


구조를 모두 파악했다면, 이제 블로그를 만들 수 있습니다!

---
#Let's make Blog with Gatsby

##Write Post - Markdown

Gatsby 블로그에서는 post를 markdown을 이용해 작성합니다.
markdown은 사용되는 폭이 넓기때문에 재사용하기가 편리합니다.

Markdown 파일을 읽어 정적 HTML로 만들기 위해서는,
+ 'gatsby-source-filesystem'로 마크다운 파일 읽어들이기
+ 'gatsby-transform-remark'로 마크다운 파일 해석하기
+ 해석한 데이터를 GraphQL로 가져오기
+ 가져온 정보를 미리 설정해둔 템플릿에 배치하기
+ Gatsby의 createPageAPI를 이용해 정적페이지 만들기

의 절차를 거칩니다.

###세팅하기

해당 절차 중 `'gatsby-source-filesystem'`와 `'gatsby-transform-remark'`는 gatsby 플러그인으로써 gatsby-config.js에 세팅해야합니다.

```
/gatsby-config.js

plugins: [
 {
 resolve: `gatsby-source-filesystem`,
 options: {
 name: `markdown-pages`,
 path: `${__dirname}/src/마크다운 파일의 폴더`,
   },
 },
 `gatsby-transformer-remark`,
]
```


###템플릿을 이용하여 마크다운을 HTML로 변경하기

GraphQL을 이용해 가져온 마크다운 데이터 정보를 템플릿을 통해 HTML파일로 재정의하도록 도와줍니다.

```
/gatsby-config.js
import React from "react"
import { graphql } from "gatsby"

export default function Template({data}) {
  const { markdownRemark: { frontmatter, html } } = data;
  return (
    <div>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "YYYY년 MM월 DD일 ")
        path
        title
      }
    }
  }
`
```

###템플릿을 정적 HTML로 만들기

Node.js API를 이용하여 정적페이지를 만들기때문에 gatsby-node.js에 세팅이 필요합니다.

```
const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`템플릿 파일`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {},
      })
    })
  })
}
```

GraphQL의 allMarkdownRemark가 모든 마크다운을 읽어오면 edges 각각의 node( markdown ) 정보가 들어에가고 이를 createPage에서 템플릿과 합성하여 실제 정적 파일을 생성합니다.

>result.data.allMarkdownRemark.edges.forEach(({ node })


###frontmatter로 전해지는 정보

그렇다면 frontmatter로 전해지는 정보는 어떻게 전달되는걸까?  
바로 각 Markdown post 상단에 GraphQL이 인식할 수 있는 형식으로 정보를 작성하면됩니다.

```
---
path: "url"
date: "생성 일자"
title: "타이틀 정보"
---
```

정보는 ---로 감싸도록하고 path정보를 꼭 작성해야합니다.

---

_이제 모든 블로그 작성 준비가 끝났습니다._

이렇게 알아본 방법으로 여러분도 gatsby를 이용해 자신만의 독창적인 블로그를 만들 수 있습니다!

#
