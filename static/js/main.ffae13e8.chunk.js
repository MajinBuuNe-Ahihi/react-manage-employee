(this["webpackJsonpuser-manage"]=this["webpackJsonpuser-manage"]||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){},17:function(t,e,a){"use strict";a.r(e);var n=a(1),s=a.n(n),c=a(8),r=a.n(c),i=(a(14),a(2)),l=a(3),o=a(5),u=a(4),d=(a(15),a(0)),h=function(t){Object(o.a)(a,t);var e=Object(u.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var t=this;return this.props.value1?Object(d.jsx)("div",{className:"col-3",children:Object(d.jsx)("div",{className:"btn btn-block btn-outline-danger",onClick:function(){return t.props.trangthai()},children:"\u0110\xf3ng l\u1ea1i"})}):Object(d.jsx)("div",{className:"col-3",children:Object(d.jsx)("div",{className:"btn btn-block btn-outline-info",onClick:function(){return t.props.trangthai()},children:"Th\xeam Nh\xe2n Vi\xean"})})}}]),a}(n.Component),j=a(6),b=function(t){Object(o.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).setValue=function(t){n.setState(Object(j.a)({},t.target.name,t.target.value))},n.ShowBtn=function(){return n.props.value1?Object(d.jsx)("div",{className:"col-4",children:Object(d.jsx)("form",{children:Object(d.jsx)("div",{className:"card text-left",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h4",{className:"card-title text-center ",children:"Th\xeam nh\xe2n vi\xean"}),Object(d.jsxs)("div",{className:"form-group btn-group col-12",children:[Object(d.jsx)("label",{className:"col-4",children:"T\xean"}),Object(d.jsx)("input",{type:"text",className:"form-control col-8",name:"name",onChange:function(t){return n.setValue(t)}})]}),Object(d.jsxs)("div",{className:"form-group btn-group col-12",children:[Object(d.jsx)("label",{className:"col-4 ",children:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"}),Object(d.jsx)("input",{type:"text",className:"form-control col-8",name:"tell",onChange:function(t){return n.setValue(t)}})]}),Object(d.jsx)("div",{className:"form-group col-12",children:Object(d.jsxs)("select",{className:"custom-select",name:"author",onChange:function(t){return n.setValue(t)},children:[Object(d.jsx)("option",{value:1,children:"Admin"}),Object(d.jsx)("option",{value:0,children:"Member"})]})}),Object(d.jsx)("div",{className:"btn-group col-12",children:Object(d.jsx)("input",{type:"reset",className:"btn btn-info",onClick:function(t,e,a){return n.props.create(n.state.name,n.state.tell,n.state.author)},value:"Th\xeam"})})]})})})}):Object(d.jsx)("div",{})},n.state={name:"",tell:"",author:0},n}return Object(l.a)(a,[{key:"render",value:function(){return this.ShowBtn()}}]),a}(n.Component),p=function(t){Object(o.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).stopE=function(t){t.preventDefault()},n.checkAuthority=function(){return n.props.authority?"admin":"member"},n.RepairValue=function(t){n.setState(Object(j.a)({},t.target.name,t.target.value))},n.state={defName:n.props.name,defTel:n.props.tel,author2:1},n}return Object(l.a)(a,[{key:"render",value:function(){var t=this;return this.props.statusRe?Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:this.props.index}),Object(d.jsx)("td",{children:Object(d.jsx)("div",{className:"form-group col-12",children:Object(d.jsx)("input",{type:"text",defaultValue:this.state.defName,onChange:function(e){return t.RepairValue(e)},className:"form-control",name:"defName","aria-describedby":"helpId",placeholder:!0})})}),Object(d.jsx)("td",{children:Object(d.jsx)("div",{className:"form-group col-12",children:Object(d.jsx)("input",{type:"text",defaultValue:this.state.defTel,onChange:function(e){return t.RepairValue(e)},className:"form-control",name:"defTel","aria-describedby":"helpId",placeholder:!0})})}),Object(d.jsx)("td",{children:Object(d.jsx)("div",{className:"form-group col-12",children:Object(d.jsxs)("select",{className:"custom-select",name:"author2",onChange:function(e){return t.RepairValue(e)},children:[Object(d.jsx)("option",{value:1,children:"Admin"}),Object(d.jsx)("option",{value:0,children:"Member"})]})})}),Object(d.jsx)("td",{children:Object(d.jsxs)("div",{className:"btn-group",children:[Object(d.jsx)("div",{className:"btn btn-success fas fa-edit",onClick:function(e,a,n,s,c){return t.props.setStatus(-1,t.props.id,t.state.defName,t.state.defTel,t.state.author2)},children:"S\u1eeda"}),Object(d.jsx)("div",{className:"btn btn-secondary fas fa-trash-alt",onClick:function(e){return t.stopE(e)},style:{opacity:"0.5"},children:"X\xf3a"})]})})]}):Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:this.props.index}),Object(d.jsx)("td",{children:this.props.name}),Object(d.jsx)("td",{children:this.props.tel}),Object(d.jsx)("td",{children:this.checkAuthority()}),Object(d.jsx)("td",{children:Object(d.jsxs)("div",{className:"btn-group",children:[Object(d.jsx)("div",{className:"btn btn-warning fas fa-edit",onClick:function(e,a,n,s,c){return t.props.setStatus(t.props.index-1,t.props.id,t.state.defName,t.state.defTel,t.state.author2)},children:"S\u1eeda"}),Object(d.jsx)("div",{className:"btn btn-danger fas fa-trash-alt",onClick:function(e){return t.props.deleteEmp(t.props.id)},children:"X\xf3a"})]})})]})}}]),a}(n.Component),m=function(t){Object(o.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).setIndex=function(t,e,a,s,c){n.setState({indexRepair:t}),-1===t&&(console.log(c),n.props.changeEmp(a,s,c,e))},n.checkData=function(){return n.props.data.length?void 0:Object(d.jsx)("tr",{children:Object(d.jsx)("td",{colSpan:5,children:Object(d.jsx)("p",{className:"fas fa-sad-cry",children:"Sorry can't find data!"})})})},n.state={indexRepair:-2},n}return Object(l.a)(a,[{key:"render",value:function(){var t=this;return Object(d.jsx)("div",{style:{flex:"1"},children:Object(d.jsxs)("table",{className:"table table-striped   table-hover ",children:[Object(d.jsx)("thead",{className:"thead-inverse",children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Stt"}),Object(d.jsx)("th",{children:"T\xean"}),Object(d.jsx)("th",{children:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"}),Object(d.jsx)("th",{children:"Quy\u1ec1n"}),Object(d.jsx)("th",{children:"Action"})]})}),Object(d.jsxs)("tbody",{children:[this.props.data.map((function(e,a){return a===t.state.indexRepair?Object(d.jsx)(p,{index:a+1,name:e.name,tel:e.tel,authority:e.authority,statusRe:!0,setStatus:function(e,a,n,s,c){return t.setIndex(e,a,n,s,c)},id:e.id,children:" "}):Object(d.jsx)(p,{index:a+1,name:e.name,tel:e.tel,authority:e.authority,statusRe:!1,setStatus:function(e,a,n,s,c){return t.setIndex(e,a,n,s,c)},id:e.id,deleteEmp:function(e){return t.props.deleteEmp(e)},children:" "})})),this.checkData()]})]})})}}]),a}(n.Component),O=function(t){Object(o.a)(a,t);var e=Object(u.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"jumbotron jumbotron-fluid text-center",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("h3",{className:"display-6",children:"QUAN L\xdd NGUOI DUNG BANG JS VOI JSON"})})})}}]),a}(n.Component),f=function(t){Object(o.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).isChange=function(t){n.setState({datainput:t.target.value})},n.back=function(){return n.props.statusButton?Object(d.jsxs)("div",{className:" row col-6",children:[Object(d.jsx)("button",{type:"submit",className:"btn btn-primary col-6",onClick:function(){return n.props.resultdata(n.state.datainput)},children:"Submit"}),Object(d.jsx)("button",{type:"submit",className:"btn btn-outline-danger col-6",onClick:function(){return n.props.goback()},children:"Go Home"})]}):Object(d.jsx)("button",{type:"submit",className:"btn btn-primary col-3",onClick:function(){return n.props.resultdata(n.state.datainput)},children:"Submit"})},n.state={datainput:""},n}return Object(l.a)(a,[{key:"render",value:function(){var t=this;return Object(d.jsx)("div",{className:"form-group col-6 ",children:Object(d.jsxs)("div",{className:"btn-group col-12",children:[Object(d.jsx)("input",{type:"text",className:"form-control col-6",onChange:function(e){return t.isChange(e)},"aria-describedby":"helpId",placeholder:"nh\u1eadp n\u1ed9i dung c\u1ea7n t\xecm ki\u1ebfm"}),this.back()]})})}}]),a}(n.Component),x=function(t){Object(o.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).state={valueSort:-1},n}return Object(l.a)(a,[{key:"render",value:function(){var t=this;return Object(d.jsx)("div",{className:"form-group col-3",children:Object(d.jsxs)("select",{className:"custom-select",name:"valueSort",onChange:function(e){return t.props.sortElement(e.target.value)},children:[Object(d.jsx)("option",{value:-1,children:"S\u1eafp x\u1ebfp"}),Object(d.jsx)("option",{value:0,children:"a-z"}),Object(d.jsx)("option",{value:1,children:"z-a"})]})})}}]),a}(n.Component),v=a(9),g=a(19),N=function(t){Object(o.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).switchStatusBtn=function(){n.setState({status:!n.state.status})},n.resultdataSearch=function(t){n.setState({dataSearch:t}),n.setState({statusSearch:!0})},n.goHomedataSearch=function(){n.setState({statusSearch:!1})},n.createNewEmp=function(t,e,a){var s={};s.id=Object(g.a)(),s.name=t,s.tel=e,s.authority=a;var c=n.state.datas;c.push(s),n.setState({datas:c}),localStorage.setItem("userData",JSON.stringify(n.state.datas))},n.changeEmp=function(t,e,a,s){n.state.datas.forEach((function(n){n.id===s&&(n.name=t,n.tel=e,n.authority=a)})),localStorage.setItem("userData",JSON.stringify(n.state.datas))},n.deleteEmp=function(t){var e=n.state.datas.filter((function(e){return e.id!==t}));n.setState({datas:e}),localStorage.setItem("userData",JSON.stringify(e))},n.sortElement=function(t){var e=n.state.datas;"1"===t?e.sort((function(t,e){var a=t.name.split(" "),n=e.name.split(" ");return a[a.length-1]>n[n.length-1]?-1:a[a.length-1]<n[n.length-1]?1:0})):"0"===t&&e.sort((function(t,e){var a=t.name.split(" "),n=e.name.split(" ");return a[a.length-1]<n[n.length-1]?-1:a[a.length-1]>n[n.length-1]?1:0})),console.log(t),n.setState({datas:e})},n.showResultSearch=function(){return n.state.statusSearch?Object(d.jsx)(m,{data:n.state.datas.filter((function(t){var e=t.name.split(" ");return e[e.length-1].toLowerCase().search(n.state.dataSearch.toLowerCase())+1}))}):Object(d.jsx)(m,{data:n.state.datas,changeEmp:function(t,e,a,s){return n.changeEmp(t,e,a,s)},deleteEmp:function(t){return n.deleteEmp(t)}})},n.state={status:!1,dataSearch:"",datas:[],statusSearch:!1,statusRepairRow:!0},n}return Object(l.a)(a,[{key:"componentWillMount",value:function(){null===localStorage.getItem("userData")?(localStorage.setItem("userData",JSON.stringify(v)),this.setState({datas:JSON.parse(localStorage.getItem("userData"))})):this.setState({datas:JSON.parse(localStorage.getItem("userData"))})}},{key:"render",value:function(){var t=this;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(O,{}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)(f,{resultdata:function(e){return t.resultdataSearch(e)},goback:function(){return t.goHomedataSearch()},statusButton:this.state.statusSearch}),Object(d.jsx)(x,{sortElement:function(e){return t.sortElement(e)}}),Object(d.jsx)(h,{trangthai:function(){return t.switchStatusBtn()},value1:this.state.status}),Object(d.jsx)("div",{className:"col-12 display-2",children:Object(d.jsx)("hr",{})})]}),Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-12",style:{display:"flex"},children:[this.showResultSearch(),Object(d.jsx)(b,{value1:this.state.status,create:function(e,a,n){return t.createNewEmp(e,a,n)}})]})})]})]})}}]),a}(n.Component),S=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,c=e.getLCP,r=e.getTTFB;a(t),n(t),s(t),c(t),r(t)}))};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root")),S()},9:function(t){t.exports=JSON.parse('[{"id":1,"name":"Ho\xe0ng v\u0103n M\u1ea1nh","tel":"0335872719","authority":1},{"id":2,"name":"Ho\xe0ng v\u0103n Qu\xe2n","tel":"0335872719","authority":0},{"id":3,"name":"Ho\xe0ng v\u0103n T\u1ea5n","tel":"0335872719","authority":0},{"id":4,"name":"Ho\xe0ng Th\u01b0\u1ee3ng","tel":"0335872719","authority":0}]')}},[[17,1,2]]]);
//# sourceMappingURL=main.ffae13e8.chunk.js.map