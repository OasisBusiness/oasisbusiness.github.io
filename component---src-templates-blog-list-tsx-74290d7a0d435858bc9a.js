(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{K392:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),r=a("Wbzz"),c=a("Bl7J"),i=a("vrFN"),o=a("p3AD"),m=a("c4uf");t.default=function(e){var t=e.data,a=e.location,l=e.pageContext,s=t.site.siteMetadata.title,u=t.allMarkdownRemark.edges,d=l.currentPage,p=1===d,E=d===l.numPages,f=d-1==1?"/":"/"+(d-1),g="/"+(d+1);return n.a.createElement(c.a,{location:a,title:s},n.a.createElement(i.a,{title:"Tech Blog"}),u.map((function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return n.a.createElement("article",{key:t.fields.slug},n.a.createElement("header",null,n.a.createElement("h3",{style:{marginBottom:Object(o.a)(1/4)}},n.a.createElement(r.Link,{style:{boxShadow:"none"},to:t.fields.slug},a)),n.a.createElement("div",{style:{display:"flex",alignItems:"center"}},n.a.createElement("small",null,t.frontmatter.date," || "),n.a.createElement(m.a,null)," ",n.a.createElement("small",null,t.frontmatter.writeAuthor))),n.a.createElement("section",null,n.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}})))})),n.a.createElement("nav",null,n.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},n.a.createElement("li",null,!p&&n.a.createElement(r.Link,{to:f,rel:"prev"},"← Previous Page")),n.a.createElement("li",null,!E&&n.a.createElement(r.Link,{to:g,rel:"next"},"Next Page →")))))}}}]);
//# sourceMappingURL=component---src-templates-blog-list-tsx-74290d7a0d435858bc9a.js.map