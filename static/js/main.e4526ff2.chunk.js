(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,n){},136:function(e,t,n){},140:function(e,t,n){},144:function(e,t,n){},151:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(73),c=n.n(o),i=(n(96),n(14)),s=(n(98),n(46)),l=n.n(s),u="https://accounts.spotify.com/authorize",m=["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"],f=function(){return window.location.hash.substring(1).split("&").reduce(function(e,t){var n=t.split("=");return e[n[0]]=decodeURIComponent(n[1]),e},{})},d="".concat(u,"?client_id=").concat("c4cbffae207c414eb633445b69de2543","&redirect_uri=").concat("https://brendanpotter00.github.io/Spotify_Uncovered_v2/","&scope=").concat(m.join("%20"),"&response_type=token&show_dialog=true"),p="".concat(u,"?client_id=").concat("c4cbffae207c414eb633445b69de2543","&redirect_uri=").concat("http://localhost:3000/","&scope=").concat(m.join("%20"),"&response_type=token&show_dialog=true"),v=(n(100),n(175));var g=function(){return r.a.createElement("div",{className:"login"},r.a.createElement("img",{src:"https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png",alt:"Spotify Logo"}),r.a.createElement(v.a,{variant:"contained",href:d,color:"primary"},"login with spotify"),r.a.createElement("button",{className:"spotify-button"},r.a.createElement("a",{href:p},"Login for testing")))},h=n(19),b=n(6);n(61),n(72),n(71),n(136);n(180),n(184),n(183),n(178),n(181),n(182),n(179);var y=n(28);n(140),n(142);function E(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){i=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(i)throw o}}}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var j=function(e){function t(e){return Math.round(e.reduce(function(e,t){return e+t},0)/e.length)}var n,a=[],o=[],c=[],i=E(e.props);try{for(i.s();!(n=i.n()).done;){var s=n.value;a.push(s.energy),o.push(s.valence),c.push(s.loudness)}}catch(f){i.e(f)}finally{i.f()}var l=t(a),u=t(o),m=t(c);return r.a.createElement("div",{className:"bars"},r.a.createElement("div",{className:"firstbar"},r.a.createElement(y.a,{className:"circleBar",value:l,text:"".concat(l),background:!0,backgroundPadding:6,styles:Object(y.b)({rotation:1,strokeLinecap:"round",textSize:"1.8rem",pathTransitionDuration:.5,backgroundColor:"#FDA766",textColor:"#fff",pathColor:"#fff",trailColor:"transparent"})}),r.a.createElement("h3",null," Energy ")),r.a.createElement("div",{className:"secondbar"},r.a.createElement(y.a,{className:"circleBar",value:u,text:"".concat(u),background:!0,backgroundPadding:6,styles:Object(y.b)({rotation:1,strokeLinecap:"round",textSize:"1.8rem",pathTransitionDuration:.5,backgroundColor:"#FD9346",textColor:"#fff",pathColor:"#fff",trailColor:"transparent"})}),r.a.createElement("h3",null," Happiness ")),r.a.createElement("div",{className:"thirdbar"},r.a.createElement(y.a,{className:"circleBar",value:m,text:"".concat(m),background:!0,backgroundPadding:6,styles:Object(y.b)({rotation:1,strokeLinecap:"round",textSize:"1.8rem",pathTransitionDuration:.5,backgroundColor:"#FD7F2C",textColor:"#fff",pathColor:"#fff",trailColor:"transparent"})}),r.a.createElement("h3",null," Loudness ")))};n(144);var O=n(9),k=n(169),S=n(185),C=n(186),A=n(187),x=n(176),N=n(49),I=n.n(N);function L(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return M(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){i=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(i)throw o}}}}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var T=Object(O.a)("div")(function(e){var t=e.theme;return Object(b.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(k.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(k.a)(t.palette.common.white,.25)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"})}),_=Object(O.a)("div")(function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}}),R=Object(O.a)(x.a)(function(e){var t=e.theme;return{color:"inherit","& .MuiInputBase-input":Object(b.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}});var F=function(e){var t=e.props,n=Object(a.useState)(""),o=Object(i.a)(n,2),c=o[0],s=o[1],l=Object(a.useState)([]),u=Object(i.a)(l,2),m=u[0],f=u[1],d=Object(a.useState)([]),p=Object(i.a)(d,2),v=(p[0],p[1],t.spotify);Object(a.useEffect)(function(){f([]),v.searchTracks(c,{limit:3,offset:1}).then(function(e){e.tracks.items.map(function(e){v.getAudioFeaturesForTrack(e.id).then(function(t){var n={id:e.id,name:e.name,artists:e.artists[0].name,energy:t.energy,loudness:t.loudness,valence:t.valence,img:e.album.images[0].url},a=m.map(function(e){return e.id}),r=(m.map(function(e){return e.name}),m.filter(function(e,t){var n=e.id;return!a.includes(n,t+1)}));f(function(e){return[].concat(Object(h.a)(e),[n])}),r.length>=8&&(r.slice(-3),console.log("call-------------------------------")),console.log(m)})})})},[c]);var g,b=[],y=L(m);try{for(y.s();!(g=y.n()).done;){var E=g.value,w=r.a.createElement("div",{class:"top20Row"},r.a.createElement("div",{class:"top20Img"},r.a.createElement("img",{src:E.img,alt:"Song Cover for"+E.name})),r.a.createElement("div",{class:"songInfo"},r.a.createElement("div",{class:"songName"},E.name),r.a.createElement("div",{class:"songArtist"},E.artists)),r.a.createElement("div",{class:"songMetrics"},r.a.createElement("div",{class:"metric"},r.a.createElement("div",{class:"stringName"},"Energy: "),r.a.createElement("div",{class:"stat"},E.energy)),r.a.createElement("div",{class:"metric"},r.a.createElement("div",{class:"stringName"},"Loudness: "),r.a.createElement("div",{class:"stat"},E.loudness)),r.a.createElement("div",{class:"metric"},r.a.createElement("div",{class:"stringName"},"Happiness: "),r.a.createElement("div",{class:"stat"},E.valence))));b.push(w)}}catch(j){y.e(j)}finally{y.f()}return r.a.createElement("div",null,r.a.createElement(S.a,{position:"static"},r.a.createElement(C.a,null,r.a.createElement(A.a,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,display:{xs:"none",sm:"block"}}},"spotify uncovered"),r.a.createElement(T,null,r.a.createElement(_,null,r.a.createElement(I.a,null)),r.a.createElement(R,{placeholder:"Search\u2026",inputProps:{"aria-label":"search"},onChange:function(e){s(e.target.value)},value:c})))),r.a.createElement("div",{className:"searchResultsContainer"},r.a.createElement("div",{class:"topResults"},b)))},B=n(188);function D(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return U(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return U(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){i=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(i)throw o}}}}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}Object(O.a)("div")(function(e){var t=e.theme;return Object(b.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(k.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(k.a)(t.palette.common.white,.25)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"})}),Object(O.a)("div")(function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}}),Object(O.a)(x.a)(function(e){var t=e.theme;return{color:"inherit","& .MuiInputBase-input":Object(b.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}});var z=function(e){var t=e.props,n=t.spotify,o=Object(a.useState)([]),c=Object(i.a)(o,2),s=c[0],l=c[1];function u(e){return Math.round(100*e)}function m(e){var t=Math.round(function(e){return Math.pow(10,-1*e/10-12)}(e)*Math.pow(10,12)*10);return t>=100&&(t=100),t}Object(a.useEffect)(function(){n.getMyTopTracks().then(function(e){e.items.map(function(e){n.getAudioFeaturesForTrack(e.id).then(function(t){var n={id:e.id,name:e.name,artists:e.artists[0].name,energy:t.energy,loudness:t.loudness,acousticness:t.acousticness,valence:t.valence,dancibility:t.dancibility,instrumentalness:t.instrumentalness,img:e.album.images[0].url};l(function(e){return[].concat(Object(h.a)(e),[n])})})})},function(e){console.log("Error:",e)})},[]);var f,d=[],p=[],v=0,g=0,b=0,y=D(s);try{for(y.s();!(f=y.n()).done;){var E=f.value;v=u(E.energy),g=u(E.valence),b=m(E.loudness);var w=r.a.createElement("div",{class:"top20Row"},r.a.createElement("div",{class:"top20Img"},r.a.createElement("img",{src:E.img,alt:"Song Cover for"+E.name})),r.a.createElement("div",{class:"songInfo"},r.a.createElement("div",{class:"songName"},E.name),r.a.createElement("div",{class:"songArtist"},E.artists)),r.a.createElement("div",{class:"songMetrics"},r.a.createElement("div",{class:"metric"},r.a.createElement("div",{class:"stringName"},"Energy: "),r.a.createElement("div",{class:"stat"},v)),r.a.createElement("div",{class:"metric"},r.a.createElement("div",{class:"stringName"},"Loudness: "),r.a.createElement("div",{class:"stat"},b)),r.a.createElement("div",{class:"metric"},r.a.createElement("div",{class:"stringName"},"Happiness: "),r.a.createElement("div",{class:"stat"},g))));p.push(w);var O={name:E.name,artists:E.artists,energy:v,loudness:b,valence:g,img:E.img};d.push(O)}}catch(k){y.e(k)}finally{y.f()}return r.a.createElement("div",{className:"dashboard_container"},r.a.createElement(B.a,{sx:{flexGrow:1}},r.a.createElement(F,{props:t})),r.a.createElement(j,{props:d}),r.a.createElement("div",{class:"top20Table"},p))},P=n(150),G=n(16),H=Object(P.a)({palette:{primary:{light:"#DF7C52",main:"#d85c27",dark:"#97401B",contrastText:"#fff"},secondary:{light:"#587CA5",main:"#2f5c8f",dark:"#204064",contrastText:"#fff"}}}),$=new l.a;var J=function(){var e=a.useState(null),t=Object(i.a)(e,2),n=t[0],r=t[1],o=a.useState(null),c=Object(i.a)(o,2),s=(c[0],c[1]);a.useEffect(function(){var e=f();window.location.hash="";var t=e.access_token;t&&(r(t),$.setAccessToken(t),$.getMe().then(function(e){s(e)}))},[]);var l={spotify:$,token:n};return a.createElement(G.c,{theme:H},a.createElement("div",{className:"App"},n?a.createElement(z,{props:l}):a.createElement(g,null)))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root"))},71:function(e,t,n){},89:function(e,t,n){e.exports=n(151)},96:function(e,t,n){},98:function(e,t,n){}},[[89,2,1]]]);
//# sourceMappingURL=main.e4526ff2.chunk.js.map