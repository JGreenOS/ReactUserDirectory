(this["webpackJsonpuser-directory"]=this["webpackJsonpuser-directory"]||[]).push([[0],{4:function(e,t,s){},42:function(e,t,s){"use strict";s.r(t);var a=s(2),l=s.n(a),r=s(13),c=s.n(r),n=(s(4),s(14)),i=s(15),o=s(18),u=s(17),h=s(0);var j=function(e){return Object(h.jsx)("div",{children:Object(h.jsxs)("table",{className:"table table-bordered table-lg",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{className:"col-2",children:Object(h.jsx)("button",{onClick:e.filter,children:"Users (Filter by Age)"})}),Object(h.jsx)("th",{className:"col-2",children:Object(h.jsx)("button",{onClick:e.sortUsers,children:"Name (Sort by Location)"})}),Object(h.jsx)("th",{className:"col-2",children:"Name"}),Object(h.jsx)("th",{className:"col-2",children:"Location"}),Object(h.jsx)("th",{className:"col-2",children:"Cell Phone"}),Object(h.jsx)("th",{className:"col-2",children:"Age"}),Object(h.jsx)("th",{className:"col-2",children:"Email Address"})]})}),Object(h.jsx)("tbody",{children:e.users.map((function(e){var t=e.login,s=e.name,a=e.picture,l=e.email,r=e.location,c=e.dob,n=e.cell;return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{className:"col-3",children:Object(h.jsx)("img",{src:a.thumbnail,alt:"employee picture"})}),Object(h.jsxs)("td",{className:"col-3",children:[" ",s.first," ",s.last]}),Object(h.jsx)("td",{className:"col-3",children:r.state}),Object(h.jsx)("td",{className:"col-3",children:n}),Object(h.jsx)("td",{className:"col-3",children:c.age}),Object(h.jsx)("td",{className:"col-3",children:l})]},t.uuid)}))})]})})},d=s(16),b=s.n(d),f=function(){return b.a.get("https://randomuser.me/api/?results=25&nat=us")},m=function(e){Object(o.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(n.a)(this,s);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={result:[],filter:"",filterResultLocation:[],showResult:[],alpha:!1},e.getUsers=function(){f().then((function(t){e.setState({result:t.data.results}),e.setState({filterResultLocation:t.data.results}),e.setState({showResult:t.data.results})})).catch((function(e){return console.log(e)}))},e.compare=function(e,t){var s=e.location.state(),a=t.location.state(),l=0;return s>a?l=1:s<a&&(l=-1),l},e.sortUsers=function(){e.setState({showResult:e.state.showResult.sort(e.compare)}),e.setState({alpha:!0})},e.filterMale=function(){var t=e.state.filterResultMale.filter((function(e){return"male"===e.gender}));e.setState({showResult:t})},e.filterFemale=function(){var t=e.state.filterResultFemale.filter((function(e){return"female"===e.gender}));e.setState({showResult:t})},e.filter=function(){var t=e.state.filter;""===t?(e.filterMale(),e.setState({filter:"male"})):"male"===t?(e.filterFemale(),e.setState({filter:"female"})):(e.setState({showResult:e.state.result}),e.setState({filter:""}))},e}return Object(i.a)(s,[{key:"componentDidMount",value:function(){this.getUsers()}},{key:"render",value:function(){return Object(h.jsx)("div",{className:"header",children:Object(h.jsx)(j,{users:this.state.showResult,sortUsers:this.sortAlpha,filterMale:this.filterMale,filter:this.filter})})}}]),s}(a.Component);var O=function(){return Object(h.jsx)("div",{className:"navbar navbar-light bg-light fixed-top",children:Object(h.jsx)("nav",{class:"navbar navbar-light bg-light",children:Object(h.jsx)("span",{class:"navbar-brand mb-0 h1",children:"User Directory"})})})};var x=function(){return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(O,{}),Object(h.jsx)(m,{})]})};c.a.render(Object(h.jsx)(l.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.3a3ac3f9.chunk.js.map