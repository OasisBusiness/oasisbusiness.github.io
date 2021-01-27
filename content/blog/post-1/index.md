---
title: "Oasisbusiness Technology Blog w/ Gatsby"
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

오늘은 오아시스 블로그를 개설하면서 사용한 gatsby에 대해 알아보도록 하겠습니다.

##What is Gatsby?

페이지 생성에는 여러가지 방식이있다.
1. SSR 방식
    - 페이지 접근 시 DB에서 정보를 받아와 HTML 생성
2. CSR 방식
    - API로 페이지 정보를 받아와 HTML 생성
3. 원하는 시점에 빌드하여 페이지 생성
    - **배포시점에 모든 페이지 정보들이 생성되어 별도의 앱서버가 필요 없음**
    
이 중 Gatsby는 3번 방식을 이용하여 페이지를 생성합니다.
    

**GraphQL를 통해 빌드 시점에 정적 페이지를 생성하는 Gatsby JS**

>Gatsby is a React-based open source framework with performance, scalability and security built-in.

즉, Gatsby는 리액트 기반의 오픈 소스 프레임워크로,

graphQL을 통해 가져온 정보들을 HTML, CSS, React로 만들어진 컴포넌트 UI와 연결하여 사이트로 생성합니다.


##How to use?

###Gatsby 설치하고 실행하기

