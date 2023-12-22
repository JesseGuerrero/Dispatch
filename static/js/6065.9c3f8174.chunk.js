"use strict";(self.webpackChunkfrontend_email_service=self.webpackChunkfrontend_email_service||[]).push([[6065],{6065:(n,t,o)=>{o.r(t),o.d(t,{default:()=>p});var i=o(2791),a=o(6934),e=o(1889),r=o(4554),s=o(890),d=o(1614),c=o(4518),l=o(1336),g=o(6907),h=o(4775),u=o(9709),m=o(184);const x=(0,a.ZP)(e.ZP)((n=>{let{theme:t}=n;return"\n    background: ".concat(t.colors.gradients.black1,";\n")})),f=(0,a.ZP)(r.Z)((()=>"\n    height: 100%;\n    display: flex;\n    flex: 1;\n    overflow: auto;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n")),v=(0,a.ZP)(s.Z)((n=>{let{theme:t}=n;return"\n      color: ".concat(t.colors.alpha.white[100],";\n")})),Z=(0,a.ZP)(s.Z)((n=>{let{theme:t}=n;return"\n      color: ".concat(t.colors.alpha.white[70],";\n")}));const p=function(){const[n,t]=(0,i.useState)(!1);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(g.ql,{children:(0,m.jsx)("title",{children:"Status - 500"})}),(0,m.jsx)(f,{children:(0,m.jsxs)(e.ZP,{container:!0,sx:{height:"100%"},alignItems:"stretch",spacing:0,children:[(0,m.jsx)(e.ZP,{xs:12,md:6,alignItems:"center",display:"flex",justifyContent:"center",item:!0,children:(0,m.jsx)(d.Z,{maxWidth:"sm",children:(0,m.jsxs)(r.Z,{textAlign:"center",children:[(0,m.jsx)("img",{alt:"500",height:260,src:"/static/images/status/500.svg"}),(0,m.jsx)(s.Z,{variant:"h2",sx:{my:2},children:"There was an error, please try again later"}),(0,m.jsx)(s.Z,{variant:"h4",color:"text.secondary",fontWeight:"normal",sx:{mb:4},children:"The server encountered an internal error and was not able to complete your request"}),(0,m.jsx)(u.Z,{onClick:function(){t(!0)},loading:n,variant:"outlined",color:"primary",startIcon:(0,m.jsx)(h.Z,{}),children:"Refresh view"}),(0,m.jsx)(c.Z,{href:"/overview",variant:"contained",sx:{ml:1},children:"Go back"})]})})}),(0,m.jsx)(l.Z,{mdDown:!0,children:(0,m.jsx)(x,{xs:12,md:6,alignItems:"center",display:"flex",justifyContent:"center",item:!0,children:(0,m.jsx)(d.Z,{maxWidth:"sm",children:(0,m.jsxs)(r.Z,{textAlign:"center",children:[(0,m.jsx)(v,{variant:"h1",sx:{my:2},children:"Tokyo Free Black React Typescript Admin Dashboard"}),(0,m.jsx)(Z,{variant:"h4",fontWeight:"normal",sx:{mb:4},children:"High performance React template built with lots of powerful Material-UI components across multiple product niches for fast & perfect apps development processes."}),(0,m.jsx)(c.Z,{href:"/overview",size:"large",variant:"contained",children:"Overview"})]})})})})]})})]})}},4775:(n,t,o)=>{var i=o(4836);t.Z=void 0;var a=i(o(5649)),e=o(184),r=(0,a.default)((0,e.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}),"RefreshTwoTone");t.Z=r},9709:(n,t,o)=>{o.d(t,{Z:()=>I});var i=o(3366),a=o(7462),e=o(2791),r=o(4036),s=o(7384),d=o(4419),c=o(6934),l=o(1402),g=o(4518),h=o(3239),u=o(1217);function m(n){return(0,u.Z)("MuiLoadingButton",n)}const x=(0,o(5878).Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]);var f=o(184);const v=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],Z=(0,c.ZP)(g.Z,{shouldForwardProp:n=>(n=>"ownerState"!==n&&"theme"!==n&&"sx"!==n&&"as"!==n&&"classes"!==n)(n)||"classes"===n,name:"MuiLoadingButton",slot:"Root",overridesResolver:(n,t)=>[t.root,t.startIconLoadingStart&&{["& .".concat(x.startIconLoadingStart)]:t.startIconLoadingStart},t.endIconLoadingEnd&&{["& .".concat(x.endIconLoadingEnd)]:t.endIconLoadingEnd}]})((n=>{let{ownerState:t,theme:o}=n;return(0,a.Z)({["& .".concat(x.startIconLoadingStart,", & .").concat(x.endIconLoadingEnd)]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0}},"center"===t.loadingPosition&&{transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),["&.".concat(x.loading)]:{color:"transparent"}},"start"===t.loadingPosition&&t.fullWidth&&{["& .".concat(x.startIconLoadingStart,", & .").concat(x.endIconLoadingEnd)]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginRight:-8}},"end"===t.loadingPosition&&t.fullWidth&&{["& .".concat(x.startIconLoadingStart,", & .").concat(x.endIconLoadingEnd)]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginLeft:-8}})})),p=(0,c.ZP)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(n,t)=>{const{ownerState:o}=n;return[t.loadingIndicator,t["loadingIndicator".concat((0,r.Z)(o.loadingPosition))]]}})((n=>{let{theme:t,ownerState:o}=n;return(0,a.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===o.loadingPosition&&("outlined"===o.variant||"contained"===o.variant)&&{left:"small"===o.size?10:14},"start"===o.loadingPosition&&"text"===o.variant&&{left:6},"center"===o.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:t.palette.action.disabled},"end"===o.loadingPosition&&("outlined"===o.variant||"contained"===o.variant)&&{right:"small"===o.size?10:14},"end"===o.loadingPosition&&"text"===o.variant&&{right:6},"start"===o.loadingPosition&&o.fullWidth&&{position:"relative",left:-10},"end"===o.loadingPosition&&o.fullWidth&&{position:"relative",right:-10})})),I=e.forwardRef((function(n,t){const o=(0,l.Z)({props:n,name:"MuiLoadingButton"}),{children:c,disabled:g=!1,id:u,loading:x=!1,loadingIndicator:I,loadingPosition:j="center",variant:P="text"}=o,w=(0,i.Z)(o,v),L=(0,s.Z)(u),b=null!=I?I:(0,f.jsx)(h.Z,{"aria-labelledby":L,color:"inherit",size:16}),y=(0,a.Z)({},o,{disabled:g,loading:x,loadingIndicator:b,loadingPosition:j,variant:P}),S=(n=>{const{loading:t,loadingPosition:o,classes:i}=n,e={root:["root",t&&"loading"],startIcon:[t&&"startIconLoading".concat((0,r.Z)(o))],endIcon:[t&&"endIconLoading".concat((0,r.Z)(o))],loadingIndicator:["loadingIndicator",t&&"loadingIndicator".concat((0,r.Z)(o))]},s=(0,d.Z)(e,m,i);return(0,a.Z)({},i,s)})(y);return(0,f.jsx)(Z,(0,a.Z)({disabled:g||x,id:L,ref:t},w,{variant:P,classes:S,ownerState:y,children:"end"===y.loadingPosition?(0,f.jsxs)(e.Fragment,{children:[c,x&&(0,f.jsx)(p,{className:S.loadingIndicator,ownerState:y,children:b})]}):(0,f.jsxs)(e.Fragment,{children:[x&&(0,f.jsx)(p,{className:S.loadingIndicator,ownerState:y,children:b}),c]})}))}))}}]);
//# sourceMappingURL=6065.9c3f8174.chunk.js.map