(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{152:function(t,e,n){"use strict";n.r(e);var a=n(9),r=(n(0),n(163)),i=n(161);e.default=function(){return Object(a.b)(r.a,null,Object(a.b)(i.a,{title:"404: Not found"}),Object(a.b)("h1",null,"Oooops!"),Object(a.b)("p",null,"You just hit a route that doesn't exist... the sadness."))}},156:function(t,e,n){"use strict";n.d(e,"b",function(){return d});var a=n(9),r=n(0),i=n.n(r),o=n(4),s=n.n(o),c=n(36),l=n.n(c);n.d(e,"a",function(){return l.a});n(157);var u=i.a.createContext({}),d=function(t){return Object(a.b)(u.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):Object(a.b)("div",null,"Loading (StaticQuery)")})};d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},157:function(t,e,n){var a;t.exports=(a=n(160))&&a.default||a},159:function(t){t.exports={data:{site:{siteMetadata:{title:"Marius Toc"}}}}},160:function(t,e,n){"use strict";n.r(e);n(58);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(59),c=n(2),l=function(t){var e=t.location,n=c.default.getResourcesForPathnameSync(e.pathname);return n?r.a.createElement(s.a,Object.assign({location:e,pageResources:n},n.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=l},161:function(t,e,n){"use strict";var a=n(9),r=n(162),i=(n(0),n(4)),o=n.n(i),s=n(164),c=n.n(s);function l(t){var e=t.description,n=t.lang,i=t.meta,o=t.keywords,s=t.title,l=r.data.site,u=e||l.siteMetadata.description;return Object(a.b)(c.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})}l.defaultProps={lang:"en",meta:[],keywords:[]},l.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},e.a=l},162:function(t){t.exports={data:{site:{siteMetadata:{title:"Marius Toc",description:"London based software developer building the next generation of MVP's",author:"@mariustoc"}}}}},163:function(t,e,n){"use strict";var a=n(158),r=n(9),i=n(159),o=n(0),s=n.n(o),c=n(4),l=n.n(c),u=n(156),d=Object(a.a)("div",{target:"e2i1wbd0"})({name:"k1grrt",styles:"max-width:860px;padding:1rem 1.0875rem;font-size:1.2rem;"}),p=(Object(a.a)("a",{target:"e2i1wbd2"})({name:"1wj6arw",styles:'color:black;margin-left:15px;text-decoration:none;display:inline-block;position:relative;::after{content:"";position:absolute;width:100%;transform:scaleX(0);height:2px;bottom:0;left:0;background-color:rgba(0,0,0,0.8);transform-origin:bottom right;transition:transform 0.4s cubic-bezier(0.86,0,0.07,1);}:hover::after{transform:scaleX(1);transform-origin:bottom left;}'}),Object(a.a)("header",{target:"e2i1wbd4"})({name:"1pyi7sa",styles:"background:transparent;display:flex;align-content:center;justify-content:center;"})),b=function(t){t.siteTitle;return Object(r.b)(p,null,Object(r.b)(d,null))};b.propTypes={siteTitle:l.a.string},b.defaultProps={siteTitle:""};var f=b,m=(n(150),Object(a.a)("div",{target:"e1ehxxwc0"})({name:"1813l62",styles:"margin:0 auto;max-width:860px;padding:0 1.0875rem 1rem;padding-top:0;"})),g=(Object(a.a)("a",{target:"e1ehxxwc1"})({name:"o5uqvq",styles:"margin-left:5px;"}),Object(a.a)("footer",{target:"e1ehxxwc2"})({name:"1l4w6pd",styles:"display:flex;justify-content:center;"})),y=function(t){var e=t.children;return Object(r.b)(u.b,{query:"755544856",render:function(t){return Object(r.b)(s.a.Fragment,null,Object(r.b)(f,{siteTitle:t.site.siteMetadata.title}),Object(r.b)(m,null,Object(r.b)("main",null,e),Object(r.b)(g,null,"© ",(new Date).getFullYear()," Marius Toc, London.")))},data:i})};y.propTypes={children:l.a.node.isRequired};e.a=y}}]);
//# sourceMappingURL=component---src-pages-404-js-1c3724c6ac2419d7425f.js.map