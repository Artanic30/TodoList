(window.webpackJsonpfontend=window.webpackJsonpfontend||[]).push([[0],{129:function(e,t,a){},181:function(e,t,a){e.exports=a(280)},186:function(e,t,a){},280:function(e,t,a){"use strict";a.r(t);var n,r,i,l,c,o,s,u,d,m=a(0),p=a.n(m),h=a(8),v=a.n(h),f=(a(186),a(22)),E=a(24),b=a(26),y=a(25),g=a(27),O=a(177),j=a(51),w=(a(74),a(129),a(283)),C=a(168),k=a(171),S=a(288),P=a(287),D=a(286),N=a(10),_=a.n(N),A=a(46),F=a(47),x=(a(188),a(15)),z=new(n=function e(){Object(f.a)(this,e),Object(A.a)(this,"newEvent",r,this),Object(A.a)(this,"current",i,this),Object(A.a)(this,"editEvent",l,this),Object(A.a)(this,"baseApi",c,this),Object(A.a)(this,"update_date",o,this),Object(A.a)(this,"update_event",s,this),Object(A.a)(this,"remove_event",u,this),Object(A.a)(this,"update_current",d,this)},r=Object(F.a)(n.prototype,"newEvent",[x.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{expire_date:""}}}),i=Object(F.a)(n.prototype,"current",[x.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"Ongoing"}}),l=Object(F.a)(n.prototype,"editEvent",[x.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),c=Object(F.a)(n.prototype,"baseApi",[x.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"http://127.0.0.1:8000/api"}}),o=Object(F.a)(n.prototype,"update_date",[x.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.newEvent.expire_date=t}}}),s=Object(F.a)(n.prototype,"update_event",[x.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.editEvent=t}}}),u=Object(F.a)(n.prototype,"remove_event",[x.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.editEvent=null}}}),d=Object(F.a)(n.prototype,"update_current",[x.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.current=t,console.log("store updated",t)}}}),n),R=D.a.RangePicker,I=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(b.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={mode:["date","date"],value:[]},a.handlePanelChange=function(e,t){a.setState({value:e,mode:["date"===t[0]?"month":t[0],"date"===t[1]?"month":t[1]]})},a.handleChange=function(e){a.setState({value:e}),e[1]&&z.update_date(e[1].format())},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=new Date;this.setState({value:[_()(e,"YYYY-MM-DD"),null]})}},{key:"render",value:function(){var e=this.state,t=e.value,a=e.mode;return p.a.createElement(R,{placeholder:["Start date","End date"],format:"YYYY-MM-DD",value:t,mode:a,onChange:this.handleChange,onPanelChange:this.handlePanelChange})}}]),t}(p.a.Component),M=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(b.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={event:{title:"",detail:"",priority:"",expire_date:""}},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){z.editEvent&&this.setState({event:z.editEvent})}},{key:"render",value:function(){return p.a.createElement(p.a.Fragment,null,p.a.createElement(P.a,null,p.a.createElement(P.a.Group,null,p.a.createElement(P.a.Label,{column:""},"Title"),p.a.createElement(P.a.Control,{defaultValue:this.state.event.title,type:"txt",placeholder:"Enter title",ref:this.props.refs[0]})),p.a.createElement(P.a.Group,null,p.a.createElement(P.a.Label,{column:""},"Detail"),p.a.createElement(P.a.Control,{defaultValue:this.state.event.detail,as:"textarea",rows:"2",ref:this.props.refs[1],placeholder:"Enter detail"})),p.a.createElement(P.a.Group,{md:"2"},p.a.createElement(P.a.Label,{column:""},"Priority"),p.a.createElement(P.a.Control,{defaultValue:this.state.event.priority,as:"select",ref:this.props.refs[2]},p.a.createElement("option",null,"P1"),p.a.createElement("option",null,"P2"),p.a.createElement("option",null,"P3"),p.a.createElement("option",null,"P4")),p.a.createElement(P.a.Text,{className:"text-muted"},"P4 means the most urgent issue.")),p.a.createElement(P.a.Group,null,p.a.createElement(I,null))))}}]),t}(p.a.Component),Y=a(169),H=a.n(Y),T=a(170),B=a.n(T),q={get provider(){return H.a.create({withCredentials:!0,headers:{"X-CSRFToken":B.a.load("csrftoken")}})},getInstance:function(){return this.provider},request:function(){var e;return(e=this.provider).request.apply(e,arguments)},post:function(){var e;return(e=this.provider).post.apply(e,arguments)},get:function(){var e;return(e=this.provider).get.apply(e,arguments)},patch:function(){var e;return(e=this.provider).patch.apply(e,arguments)},delete:function(){var e;return(e=this.provider).delete.apply(e,arguments)},put:function(){var e;return(e=this.provider).put.apply(e,arguments)}},K=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(b.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={show:!1},a.FormRefs=["title","detail","priority"].map((function(e){return p.a.createRef()})),a.submitForms=function(){a.handleClose();var e={title:a.FormRefs[0].current.value,detail:a.FormRefs[1].current.value,priority:Number(a.FormRefs[2].current.value.slice(1,2)),expire_time:z.newEvent.expire_date.slice(0,-6),is_done:!1};q.post("".concat(z.baseApi,"/"),e).then((function(e){alert("New Event Created!!"),window.location.reload()}))},a.handleClose=function(){a.setState({show:!1})},a.handleShow=function(){a.setState({show:!0})},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return p.a.createElement(p.a.Fragment,null,p.a.createElement(w.a,{className:"header"},p.a.createElement(C.a,{md:{span:4,offset:1},className:"align-center"},p.a.createElement("h2",{className:"title"},"TodoList")),p.a.createElement(C.a,{md:{span:2,offset:5},className:"align-center"},p.a.createElement(k.a,{className:"button",variant:"light",onClick:this.handleShow},"+")),p.a.createElement(S.a,{show:this.state.show,onHide:this.handleClose,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},p.a.createElement(S.a.Header,{closeButton:!0},p.a.createElement(S.a.Title,null,"Add new event")),p.a.createElement(S.a.Body,null,p.a.createElement(M,{refs:this.FormRefs})),p.a.createElement(S.a.Footer,null,p.a.createElement(k.a,{variant:"secondary",onClick:this.handleClose},"Close"),p.a.createElement(k.a,{variant:"primary",onClick:this.submitForms},"Submit")))))}}]),t}(p.a.Component),G=a(290),L=a(29),V=function(e){function t(){return Object(f.a)(this,t),Object(b.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return p.a.createElement(p.a.Fragment,null,p.a.createElement(w.a,null,p.a.createElement(C.a,{md:{span:11,offset:1}},p.a.createElement(G.a,{defaultActiveKey:"Ongoing",variant:"flush"},p.a.createElement(G.a.Item,{action:!0,eventKey:"Ongoing",className:"eliminate-focus",onClick:function(){z.update_current("Ongoing")}},p.a.createElement(w.a,null,p.a.createElement(C.a,{md:{span:4}},p.a.createElement(L.a,{type:"calendar"})),p.a.createElement(C.a,{md:{span:8}},"Ongoing"))),p.a.createElement(G.a.Item,{action:!0,eventKey:"History",className:"eliminate-focus",onClick:function(){z.update_current("History")}},p.a.createElement(w.a,null,p.a.createElement(C.a,{md:{span:4}},p.a.createElement(L.a,{type:"carry-out"})),p.a.createElement(C.a,{md:{span:8}},"History")))))))}}]),t}(p.a.Component),J=a(294),X=a(173),Q=a(284),U=a(289),W=a(291),Z=a(293),$=a(285);function ee(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function te(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ee(a,!0).forEach((function(t){Object(X.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ee(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ae,ne,re=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(b.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={event:{}},a.getBadges=function(){var e=a.state.event.priority;if(e){e>4?e=4:e<=0&&(e=1);var t=[{},{var:"success",name:"P1"},{var:"primary",name:"P2"},{var:"warning",name:"P3"},{var:"danger",name:"P4"}];return p.a.createElement(Q.a,{variant:t[e].var},p.a.createElement("span",{className:"sub-title"},t[e].name))}return null},a.TriggerEditDetail=function(){z.update_event(a.state.event),a.props.EditDetail(a.state.event.id)},a.DeleteEvent=function(){q.delete("".concat(z.baseApi,"/").concat(a.state.event.id,"/")).then((function(e){alert("Event Deleted!"),a.setState({event:null})}))},a.EditPriority=function(e){if(1===e){var t={priority:a.state.event.priority+1};q.patch("".concat(z.baseApi,"/").concat(a.state.event.id,"/"),t).then((function(e){a.setState({event:te({},a.state.event,{priority:a.state.event.priority+1})})}))}else{var n={priority:a.state.event.priority-1};q.patch("".concat(z.baseApi,"/").concat(a.state.event.id,"/"),n).then((function(e){a.setState({event:te({},a.state.event,{priority:a.state.event.priority-1})})}))}},a.EditDone=function(){"History"===z.current?alert("It's already done!"):q.patch("".concat(z.baseApi,"/").concat(a.state.event.id,"/"),{is_done:!0}).then((function(e){alert("Mark resolved!"),a.setState({event:null})}))},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.setState({event:this.props.event})}},{key:"render",value:function(){return this.state.event?p.a.createElement(w.a,{className:"padding-left padding-top"},p.a.createElement(C.a,null,p.a.createElement(U.a,{onClose:this.DeleteEvent,className:"eliminate-focus event-width"},p.a.createElement(U.a.Header,null,this.getBadges(),p.a.createElement("strong",{className:"mr-auto padding-left"},this.state.event.title),p.a.createElement("small",null,_()(this.state.event.expire_time).format("YYYY/MM/DD"))),p.a.createElement(U.a.Body,{className:"bottom-zero"},p.a.createElement(w.a,null,p.a.createElement(C.a,{className:"detail-height"},this.state.event.detail)),p.a.createElement(w.a,null,p.a.createElement(C.a,{className:"padding-zero"},p.a.createElement(W.a,null,p.a.createElement(Z.a,null,p.a.createElement(Z.a.Header,{className:"padding-zero"},p.a.createElement(W.a.Toggle,{as:k.a,variant:"link",eventKey:"0"},p.a.createElement("span",null,"Edit!"))),p.a.createElement(W.a.Collapse,{eventKey:"0"},p.a.createElement(Z.a.Body,{className:"card-padding"},p.a.createElement(w.a,null,p.a.createElement(C.a,null,p.a.createElement($.a,null,p.a.createElement(k.a,{variant:"dark",size:"sm",onClick:this.TriggerEditDetail},"Edit content"),p.a.createElement(k.a,{variant:"dark",size:"sm",onClick:this.EditPriority.bind(this,1)},"Add priority"),p.a.createElement(k.a,{variant:"dark",size:"sm",onClick:this.EditPriority.bind(this,0)},"Reduce priority"),p.a.createElement(k.a,{variant:"dark",size:"sm",onClick:this.EditDone},"Mark resolved!")))))))))))))):p.a.createElement(w.a,{className:"padding-left padding-top"})}}]),t}(p.a.Component),ie=a(292),le=function(e){function t(){return Object(f.a)(this,t),Object(b.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return p.a.createElement(ie.a,null,p.a.createElement(ie.a.Toggle,{variant:"success",id:"dropdown-basic"},"Sorted by"),p.a.createElement(ie.a.Menu,null,p.a.createElement(ie.a.Item,{onClick:function(){z.update_current("Sorted by Priority")}},"Priority"),p.a.createElement(ie.a.Item,{onClick:function(){z.update_current("Sorted by Expire Date")}},"Expire Date")))}}]),t}(p.a.Component),ce=a(98),oe=Object(ce.a)(ae=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(b.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={current:"",show:!1,editId:"",active:1,prePage:"",nextPage:"",count:0,events:[]},a.FormRefs=["title","detail","priority"].map((function(e){return p.a.createRef()})),a.InitData=function(){"History"===z.current?(console.log(5),q.get("".concat(z.baseApi,"/history/")).then((function(e){a.setState({current:z.current,events:e.data})}))):"Sorted by Priority"===z.current?(console.log(6),q.get("".concat(z.baseApi,"/priority/")).then((function(e){a.setState({current:z.current,events:e.data})}))):"Sorted by Expire Date"===z.current?(console.log(7),q.get("".concat(z.baseApi,"/expire/")).then((function(e){a.setState({current:z.current,events:e.data})}))):(console.log(8),a.RequestEvents("".concat(z.baseApi,"/")))},a.RequestEvents=function(e){q.get(e).then((function(e){a.setState({current:z.current,events:e.data.results,prePage:e.data.previous,nextPage:e.data.next,count:e.data.count})}))},a.EditDetail=function(e){a.setState({editId:e}),a.handleShow()},a.submitForms=function(){a.handleClose();var e={title:a.FormRefs[0].current.value,detail:a.FormRefs[1].current.value,priority:Number(a.FormRefs[2].current.value.slice(1,2)),expire_time:z.newEvent.expire_date.slice(0,-6),is_done:!1};q.put("".concat(z.baseApi,"/").concat(a.state.editId,"/"),e).then((function(e){alert("put new data!"),window.location.reload()}))},a.handleClose=function(){a.setState({show:!1})},a.handleShow=function(){a.setState({show:!0})},a.handlePag=function(e){a.setState({active:e});var t="";t=1!==e?a.state.nextPage.slice(0,-1)+e:"".concat(z.baseApi,"/"),a.RequestEvents(t)},a.handleSorted=function(e){z.update_current(e)},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.setState({current:z.current}),this.InitData()}},{key:"render",value:function(){var e=this,t=this.state.events.map((function(t,a){return p.a.createElement(re,{event:t,key:t.id,EditDetail:e.EditDetail})})),a=[],n=0;n=this.state.count%5===0?this.state.count/5:this.state.count/5+1;for(var r=1;r<=n;r++)a.push(p.a.createElement(J.a.Item,{key:r,active:r===this.state.active,onClick:this.handlePag.bind(this,r)},r));this.state.current!==z.current&&(this.InitData(),this.setState({current:z.current}));var i=z.current;return p.a.createElement(p.a.Fragment,null,p.a.createElement(w.a,{className:"padding-left padding-top"},p.a.createElement(C.a,null,p.a.createElement("h2",null,i))),p.a.createElement(w.a,{className:"padding-left padding-top"},p.a.createElement(C.a,{md:{span:4}},p.a.createElement("h5",null,"Events")),p.a.createElement(C.a,{md:{span:4,offset:4}},p.a.createElement(le,{handleSort:this.handleSorted}))),t,"Ongoing"===i?p.a.createElement(w.a,{className:"padding-top"},p.a.createElement(C.a,{className:"align-center"},p.a.createElement(J.a,{size:"sm"},a))):p.a.createElement(w.a,{className:"padding-top"}),p.a.createElement(S.a,{show:this.state.show,onHide:this.handleClose,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},p.a.createElement(S.a.Header,{closeButton:!0},p.a.createElement(S.a.Title,null,"Edit event")),p.a.createElement(S.a.Body,null,p.a.createElement(M,{refs:this.FormRefs})),p.a.createElement(S.a.Footer,null,p.a.createElement(k.a,{variant:"secondary",onClick:this.handleClose},"Close"),p.a.createElement(k.a,{variant:"primary",onClick:this.submitForms},"Submit"))))}}]),t}(p.a.Component))||ae,se=Object(ce.a)(ne=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(b.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){z.current;return p.a.createElement(p.a.Fragment,null,p.a.createElement(w.a,null,p.a.createElement(C.a,null,p.a.createElement(K,null))),p.a.createElement(w.a,null,p.a.createElement(C.a,{md:{span:3},className:"nav-color padding-top"},p.a.createElement(V,null)),p.a.createElement(C.a,{md:{span:6},className:"padding-top"},p.a.createElement(oe,null)),p.a.createElement(C.a,{md:{span:3},className:"nav-color padding-top"})))}}]),t}(p.a.Component))||ne,ue=function(e){function t(){return Object(f.a)(this,t),Object(b.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return p.a.createElement(O.a,null,p.a.createElement(j.c,null,p.a.createElement(j.a,{path:"/",component:se})))}}]),t}(p.a.Component);a(278),a(279);v.a.render(p.a.createElement(ue,null),document.getElementById("root"))},74:function(e,t,a){}},[[181,1,2]]]);
//# sourceMappingURL=main.7336a930.chunk.js.map