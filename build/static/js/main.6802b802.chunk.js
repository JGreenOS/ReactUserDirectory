(this["webpackJsonpuser-directory"]=this["webpackJsonpuser-directory"]||[]).push([[0],{43:function(e,t,s){"use strict";s.r(t);var r=s(2),a=s.n(r),c=s(14),l=s.n(c),n=(s(5),s(4)),i=s(15),o=s(16),u=s(19),j=s(18),d=s(0);var h=function(e){return Object(d.jsx)("div",{children:Object(d.jsxs)("table",{className:"table table-bordered table-lg",children:[Object(d.jsxs)("thead",{children:[" ",Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"col-2",children:Object(d.jsx)("button",{onClick:e.filter,children:" Users (Filter by Age)"})}),Object(d.jsx)("td",{className:"col-2",children:Object(d.jsx)("button",{onClick:e.sortUsers,children:"Name (Sort by Last Name)"})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{className:"col-2",children:"User Thumbnail"}),Object(d.jsx)("th",{className:"col-2",children:"Name"}),Object(d.jsx)("th",{className:"col-2",children:"Location"}),Object(d.jsx)("th",{className:"col-2",children:"Cell Phone"}),Object(d.jsx)("th",{className:"col-2",children:"Age"}),Object(d.jsx)("th",{className:"col-2",children:"Email Address"})]})]}),Object(d.jsx)("tbody",{children:e.users.map((function(e){var t=e.login,s=e.name,r=e.picture,a=e.email,c=e.location,l=e.dob,n=e.cell;return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"col-3",children:Object(d.jsx)("img",{src:r.thumbnail,alt:"employee picture"})}),Object(d.jsxs)("td",{className:"col-3",children:[" ",s.first," ",s.last]}),Object(d.jsx)("td",{className:"col-3",children:c.state}),Object(d.jsx)("td",{className:"col-3",children:n}),Object(d.jsx)("td",{className:"col-3",children:l.age}),Object(d.jsx)("td",{className:"col-3",children:a})]},t.uuid)}))})]})})},b=s(17),f=s.n(b),O=function(){return f.a.get("https://randomuser.me/api/?results=25&nat=us")},m=function(e){Object(u.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(i.a)(this,s);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={result:[],filter:"",filterOver:[],filterUnder:[],showResult:[],alpha:!0},e.getUsers=function(){O().then((function(t){e.setState({result:t.data.results}),e.setState({filterUnder:t.data.results}),e.setState({filterOver:t.data.results}),e.setState({showResult:t.data.results})})).catch((function(e){return console.log(e)}))},e.comparison=function(e,t){var s=e.name.last.toLowerCase(),r=t.name.last.toLowerCase(),a=0;return s>r?(Object(n.a)("comparison"),a=1):s<r&&(Object(n.a)("comparison"),a=-1),a},e.sortUsers=function(){e.setState({showResult:e.state.showResult.sort(e.comparison)}),e.setState({alpha:!1})},e.comparisonR=function(e,t){var s=e.name.last.toLowerCase(),r=t.name.last.toLowerCase(),a=0;return s<r?a=1:s>r&&(a=-1),-1*a},e.sortUsersRev=function(){e.setState({showResult:e.state.showResult.sort(e.comparisonR)}),e.setState({alpha:!0})},e.sortUsers=function(){"true"===e.state.alpha?e.sortUsers():e.sortUsersRev()},e.filterOver=function(){var t=e.state.filterOver.filter((function(e){return e.dob.age>33}));e.setState({showResult:t})},e.filterUnder=function(){var t=e.state.filterUnder.filter((function(e){return e.dob.age<33}));e.setState({showResult:t})},e.filter=function(){var t=e.state.filter;""===t?(e.filterOver(),e.setState({filter:"filterOver"})):"filterOver"===t?(e.filterUnder(),e.setState({filter:"filterUnder"})):(e.setState({showResult:e.state.result}),e.setState({filter:""}))},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.getUsers()}},{key:"render",value:function(){return Object(d.jsx)("div",{className:"header",children:Object(d.jsx)(h,{users:this.state.showResult,sortUsers:this.sortUsers,filterOver:this.filterOver,filter:this.filter})})}}]),s}(r.Component);var v=function(){return Object(d.jsx)("div",{className:"navbar navbar-light bg-light fixed-top",children:Object(d.jsx)("nav",{className:"navbar navbar-light bg-light",children:Object(d.jsx)("span",{className:"navbar-brand mb-0 h1",children:"User Directory"})})})};var x=function(){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(v,{}),Object(d.jsx)(m,{})]})};l.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))},5:function(e,t,s){}},[[43,1,2]]]);
//# sourceMappingURL=main.6802b802.chunk.js.map