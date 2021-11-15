---
title: "마크다운 사용법과 글 작성시 꿀팁 모음"
description: "개발자, 비개발자 모두 사용 가능한 마크다운 기반 블로그 글 작성 팁 A-Z! "
date: "2021-11-15"
writeAuthor: "이상엽"
categories: ["markdown"]
---

# 마크다운 사용법

`# 마크다운 사용법`  
제목

## Heading2

`## Heading2`  
부제목

### 볼드

`**bold**`  
**bold**

### 이탤릭

`_이탤릭_`  
_이탤릭_

### 취소선

`~~취소선~~`  
~~취소선~~

### 밑줄

html 태그 사용

`<u>밑줄친 문장</u>`  
<u>밑줄친 문장</u>

### 인용

`> 인용문은 이렇게 나옵니다.`

> 인용문은 이렇게 나옵니다.

### 리스트

`- 리스트`

- 리스트

---

`1. 순서`

1. 하이
2. 안녕

### 구분선

`---`

---

### 링크

- 기본 사용법
  `[구글](http://google.com)`  
  [구글](http://google.com)

- 새창으로 열기

## 이미지

주소나 상대 경로를 입력합니다.
`![이미지](code.png)`

![이미지](code.png)

### 태깅

백틱(`)으로 감싸서 사용

\`텍스트\`  
`텍스트`

### 코드블럭

백틱(`) **세번!** 으로 감싸서 사용

````
```
// 주석
console.log("hello world")
console.log("hello world again")
```
````

```javascript
// 주석
console.log("hello world")
console.log("hello world again")
```

### 개행

문장 뒤 공백문자 두번

# 글 작성시 유용한 팁 모음

### 추천 마크다운 에디터

`https://typora.io/` [다운로드 링크](https://typora.io/)

- 실시간 변환 및 에디터 도구 제공

### 1. 개발관련 로고

- `![react](https://cdn.svgporn.com/logos/여기.svg)`

- "여기" 부분에 원하는 로고명칭 검색

![react](https://cdn.svgporn.com/logos/react.svg)

#### 사이즈 조절

- zoom부분 퍼센트 지정

- `<img src="https://cdn.svgporn.com/logos/python.svg" alt="react" style="zoom:20%;" />`

  <img src="https://cdn.svgporn.com/logos/python.svg" alt="react" style="zoom:20%;" />

### 2. 코드 하이라이팅 이미 생성 (캡쳐)

- `https://carbon.now.sh` [링크](https://carbon.now.sh/)
- vscode extension 추천 `CodeSnap`

### 3. 이미지 리사이징 및 컴프레싱

웹 기반으로 사용가능

- `https://squoosh.app/` [링크](https://squoosh.app/)

### 4. 이모지

- 맥 이모지 단축키  
  `Ctrl+ ⌘ + space`
- 확대 방법  
  `<span style="zoom:300%;" alt="">🧑🏼‍💻</span>`  
  <span style="zoom:300%;" alt="">🧑🏼‍💻</span>

## 오아시스 블로그 우측 ToC 기능

### h1 ~ h3까지만 표시 됩니다

#### heading4

`#### heading4`  
h4 부터는 적용이 안된다!

##### heading5

`##### heading5`

---

이 글 원본 마크다운 파일
[여기](https://raw.githubusercontent.com/OasisBusiness/oasisbusiness.github.io/main/content/blog/%EB%A7%88%ED%81%AC%EB%8B%A4%EC%9A%B4%EC%9E%91%EC%84%B1%EB%B2%95/index.md)
서 확인 하실 수 있습니다!
