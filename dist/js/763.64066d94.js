"use strict";(self["webpackChunkjianghanmusic"]=self["webpackChunkjianghanmusic"]||[]).push([[763],{6834:function(e,t,n){n.d(t,{Z:function(){return c}});var l=n(4870),a=n(3396),o=n(678),s=n(7408);function c(e,t,n){const c=(0,o.yj)(),i=(0,o.tv)(),r=(0,l.iH)([]),u=(0,l.iH)(!0),d=(0,a.computed)((()=>{let n=null;const l=e.detailObj;if(l.id)n=l;else{const e=s.Z.getLocal(t);e&&e.id===c.params.id/1&&(n=e)}return n})),p=(0,a.computed)((()=>d.value?d.value.picUrl:"")),v=(0,a.computed)((()=>d.value?d.value.name:""));return(0,a.onMounted)((async()=>{const e=d.value;if(!e)return void i.push({path:c.matched[0].path});const t=await n(e);r.value=t.hotSongs,u.value=!1})),{picUrl:p,listTitle:v,songs:r,loading:u}}},269:function(e,t,n){n.d(t,{b:function(){return a},t:function(){return o}});var l=n(991);function a(e){let t=[],n=[];for(let l=0;l<e.length;l++)n.push(new Promise(((n,a)=>{s(e[l],t,n)})));return Promise.all(n).then((()=>(t.sort(((e,t)=>e.tag.charCodeAt()-t.tag.charCodeAt())),t.unshift(t.pop()),t)))}function o(e){return(0,l.U)("/artists",{id:e.id})}function s(e,t,n){"热"===e?(0,l.U)("/top/artists",{limit:30}).then((l=>{t.push({tag:e,nameArr:l.artists}),n()})).catch((e=>{throw e})):(0,l.U)("/artist/list",{initial:e,type:-1,area:7}).then((l=>{t.push({tag:e,nameArr:l.artists}),n()})).catch((e=>{throw e}))}},2280:function(e,t,n){n.d(t,{Z:function(){return E}});var l=n(3396),a=n(7139),o=n(4870),s=n(9242),c=n(678),i=n(65),r=n(15),u=n(4317);const d=e=>((0,l.pushScopeId)("data-v-2e60dafa"),e=e(),(0,l.popScopeId)(),e),p={class:"music-list"},v=d((()=>(0,l.createElementVNode)("i",{class:"icon-back"},null,-1))),m=[v],g={class:"title"},f={class:"play-btn"},h=d((()=>(0,l.createElementVNode)("i",{class:"icon-play"},null,-1))),k={class:"song-list-wrapper"};var y={__name:"MusicList",props:{songs:{type:Array,default:[]},listTitle:String,picUrl:String,loading:Boolean},setup(e){const t=e,n=(0,c.tv)(),d=(0,i.oR)(),v=(0,l.computed)((()=>d.state.playlist)),y=(0,o.iH)(0),U=(0,o.iH)(null),S=(0,o.iH)(0),E=(0,o.iH)(0),_=(0,l.computed)((()=>{let e="40%",n=0,l=1;return E.value>S.value&&(e="40px",n=1),E.value<0&&(l=-E.value/y.value+1),{backgroundImage:`url(${t.picUrl})`,height:e,zIndex:n,transform:`scale(${l})`}})),b=(0,l.computed)((()=>({top:`${y.value}px`,bottom:v.value.length?"60px":0}))),N=(0,l.computed)((()=>{let e="block";return E.value>S.value&&(e="none"),{display:e}})),V=(0,l.computed)((()=>{let e=0;return E.value>0&&(e=Math.min(E.value/25,10)),{backdropFilter:`blur(${e}px)`}}));function w(e){E.value=-e.y}function B(){n.go(-1)}function Z(){d.dispatch("addAllPlay",t.songs)}return(0,l.onMounted)((()=>{y.value=U.value.clientHeight,S.value=y.value-40})),(t,n)=>{const c=(0,l.resolveDirective)("loading");return(0,l.openBlock)(),(0,l.createElementBlock)("div",p,[(0,l.createElementVNode)("div",{class:"back",onClick:B},m),(0,l.createElementVNode)("h1",g,(0,a.zw)(e.listTitle),1),(0,l.createElementVNode)("div",{class:"bg-image",style:(0,a.j5)((0,o.SU)(_)),ref_key:"imageRef",ref:U},[(0,l.createElementVNode)("div",{class:"play-btn-wrapper",style:(0,a.j5)((0,o.SU)(N))},[(0,l.withDirectives)((0,l.createElementVNode)("div",f,[h,(0,l.createElementVNode)("span",{class:"text",onClick:Z},"顺序播放全部")],512),[[s.F8,e.songs.length>0]])],4),(0,l.createElementVNode)("div",{class:"filter",style:(0,a.j5)((0,o.SU)(V))},null,4)],4),(0,l.createVNode)((0,o.SU)(u.Z),{class:"list",probeType:3,style:(0,a.j5)((0,o.SU)(b)),onScroll:w},{default:(0,l.withCtx)((()=>[(0,l.withDirectives)(((0,l.openBlock)(),(0,l.createElementBlock)("div",k,[(0,l.createVNode)((0,o.SU)(r.Z),{songs:e.songs},null,8,["songs"])])),[[c,e.loading]])])),_:1},8,["style"])])}}},U=n(89);const S=(0,U.Z)(y,[["__scopeId","data-v-2e60dafa"]]);var E=S},15:function(e,t,n){n.d(t,{Z:function(){return m}});var l=n(3396),a=n(7139),o=n(65);const s={class:"song-list"},c=["onClick"],i={class:"content"},r={class:"name"},u={class:"desc"};var d={__name:"SongList",props:{songs:{type:Array,default:[]}},setup(e){const t=(0,o.oR)();function n(e){return e.ar.map((e=>e.name)).join("-")}function d(e){t.dispatch("addOnePlay",[e])}return(t,o)=>((0,l.openBlock)(),(0,l.createElementBlock)("ul",s,[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(e.songs,(e=>((0,l.openBlock)(),(0,l.createElementBlock)("li",{class:"item",key:e.id,onClick:t=>d(e)},[(0,l.createElementVNode)("div",i,[(0,l.createElementVNode)("h2",r,(0,a.zw)(e.name),1),(0,l.createElementVNode)("p",u,(0,a.zw)(n(e)),1)])],8,c)))),128))]))}},p=n(89);const v=(0,p.Z)(d,[["__scopeId","data-v-b381fe12"]]);var m=v},763:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var l=n(3396),a=n(4870),o=n(2280),s=n(269),c=n(6834);const i={class:"singer-detail"};var r={__name:"SingerDetail",props:["detailObj"],setup(e){const t=e,{picUrl:n,listTitle:r,songs:u,loading:d}=(0,c.Z)(t,"__singerDetail__",s.t);return(e,t)=>((0,l.openBlock)(),(0,l.createElementBlock)("div",i,[(0,l.createVNode)((0,a.SU)(o.Z),{picUrl:(0,a.SU)(n),listTitle:(0,a.SU)(r),songs:(0,a.SU)(u),loading:(0,a.SU)(d)},null,8,["picUrl","listTitle","songs","loading"])]))}},u=n(89);const d=(0,u.Z)(r,[["__scopeId","data-v-20cd60ee"]]);var p=d}}]);