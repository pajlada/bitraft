(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{37:function(n,e,t){"use strict";t.r(e);var r,i,a,c=t(4),o=t(0),s=t.n(o),d=t(21),b=t.n(d),l=t(5),h=t(6),g=t(1),u=l.b.div(r||(r=Object(c.a)(["\n    display: inline-block;\n    background: var(--bg-bright);\n    border: 1px solid var(--bg-brighter);\n    padding: 0.5rem;\n    margin: 1rem;\n    margin-right: 0;\n    margin-bottom: 0;\n"])));function j(n){var e=n.activeChannels,t=n.joinedChannels;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(u,{children:["Joined Channels: ",Object(g.jsx)("strong",{children:t})]}),Object(g.jsxs)(u,{children:["Active Channels: ",Object(g.jsx)("strong",{children:e})]})]})}function p(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{src:"https://static-cdn.jtvnw.net/user-default-pictures-uv/cdd517fe-def4-11e9-948e-784f43822e80-profile_image-70x70.png"},e=n.src;return Object(g.jsx)("img",{src:e,width:"30",height:"30",alt:"profile"})}var m=l.b.div(i||(i=Object(c.a)(["\n    display: flex;\n"])));function x(n){var e=n.records;return Object(g.jsx)(m,{children:e.map((function(n){return Object(g.jsx)(O,{record:n},n.title)}))})}var f=l.b.div(a||(a=Object(c.a)(["\n    background: var(--bg-bright);\n    border: 1px solid var(--bg-brighter);\n    margin: 1rem;\n    margin-right: 0;\n    padding: 1rem;\n\n    h2 {\n        color: var(--text);\n        margin: 0;\n        margin-bottom: 1rem;\n        padding: 0;\n    }\n\n    ol {\n        color: white;\n        font-size: 1.5rem;\n        font-weight: bold;\n        width: 500px;\n        padding: 0;\n        margin: 0;\n        margin-right: 15px;\n        background: var(--lightBackground);\n        border: 1px solid var(--lightBorder);\n        border-radius: 3px;\n\n        li {\n            display: flex;\n            align-items: center;\n            margin-bottom: 0.25rem;\n\n            img {\n                margin-right: 10px;\n            }\n\n            .value {\n                text-align: right;\n                flex: 1 1 auto;\n            }\n        }\n    }\n"])));function O(n){var e=n.record;return Object(g.jsxs)(f,{children:[Object(g.jsx)("h2",{children:e.title}),Object(g.jsx)("ol",{children:e.scores.map((function(n){return Object(g.jsxs)("li",{children:[Object(g.jsx)(p,{src:n.user.profilePicture}),Object(g.jsx)("span",{children:n.user.displayName}),Object(g.jsx)("span",{className:"value",children:n.score})]},n.user.id)}))})]})}var v,k,w,C,S=t(14),y=t(2),T=t(25),N=function n(e,t){Object(T.a)(this,n),function n(){var r=new WebSocket("".concat(e.replace("https://","wss://").replace("http://","ws://"),"/api/ws"));r.onmessage=function(n){t(JSON.parse(n.data))},r.onclose=function(e){console.log("Socket is closed. Reconnect will be attempted in 1 second.",e.reason),setTimeout(n,1e3)},r.onerror=function(n){console.error("Socket encountered error: ",n,"Closing socket"),r.close()}}()},B=t(15),U={state:{apiBaseUrl:"https://spamchamp-api.gempir.com",twitchClientId:"il5oqz0li81219qvw2hs7umntr493e",baseUrl:"https://spamchamp.gempir.com",accessToken:window.localStorage.getItem("accessToken")},setState:function(n){},setAccessToken:function(n){}},J=Object(o.createContext)(U),E=J.Provider,I=function(n){var e=n.children,t=Object(o.useState)(Object(B.a)({},U.state)),r=Object(h.a)(t,2),i=r[0],a=r[1];return Object(g.jsx)(E,{value:{state:i,setState:a,setAccessToken:function(n){return a(Object(B.a)(Object(B.a)({},i),{},{accessToken:n}))}},children:e})},P=l.b.a(v||(v=Object(c.a)(["\n    position: absolute;\n    display: block;\n    color: white;\n    top: 1rem;\n    right: 1rem;\n    padding: 1rem 2rem;\n    text-decoration: none;\n    font-weight: bold;\n    border-radius: 3px;\n    background: var(--twitch);\n\n    &:hover {\n        background: var(--twitch-dark);\n    }\n"])));function R(){var n=Object(o.useContext)(J),e=n.state,t=n.setAccessToken;return Object(o.useEffect)((function(){var n=window.location.hash;if(window.location.hash="",n){var e=/#access_token=(\w*)&/gi.exec(n);if(!e||"undefined"===typeof e[1])return;e[1]&&(window.localStorage.setItem("accessToken",e[1]),t(e[1]))}}),[e.apiBaseUrl,t]),Object(o.useEffect)((function(){e.accessToken&&fetch(e.apiBaseUrl+"/api/oauth",{method:"post",body:JSON.stringify({accessToken:e.accessToken})})}),[e.accessToken,e.apiBaseUrl]),e.accessToken?Object(g.jsx)(F,{}):Object(g.jsx)(P,{href:_(e.twitchClientId,e.baseUrl).toString(),children:"Login"})}var A=l.b.div(k||(k=Object(c.a)(["\n    position: absolute;\n    top: 1rem;\n    right: 1rem;\n    display: flex;\n\n    a {\n        text-decoration: none;\n    }\n"]))),z=l.b.a(w||(w=Object(c.a)(["\n    display: block;\n    color: white;\n    width: 150px;\n    padding: 1rem 2rem;\n    text-decoration: none;\n    font-weight: bold;\n    border-radius: 3px;\n    background: var(--twitch);\n    cursor: pointer;\n\n    &:hover {\n        background: var(--twitch-dark);\n    }\n"]))),L=l.b.div(C||(C=Object(c.a)(["\n    display: block;\n    color: white;\n    margin-right: 1rem;\n    padding: 1rem 2rem;\n    text-decoration: none;\n    font-weight: bold;\n    border-radius: 3px;\n    background: var(--theme2-dark);\n    cursor: pointer;\n\n    &.dashboard {\n        background: var(--theme);\n\n        &:hover {\n        background: var(--theme-bright);\n    }\n    }\n\n    &:hover {\n        background: var(--theme2);\n    }\n"])));function F(){var n=Object(o.useContext)(J).state,e=Object(o.useState)("Logged In"),t=Object(h.a)(e,2),r=t[0],i=t[1];return Object(g.jsxs)(A,{children:[Object(g.jsx)(S.b,{to:"/",children:Object(g.jsx)(L,{children:"Home"})}),Object(g.jsx)(S.b,{to:"/dashboard",children:Object(g.jsx)(L,{className:"dashboard",children:"Dashboard"})}),Object(g.jsx)(z,{href:_(n.twitchClientId,n.baseUrl).toString(),onMouseEnter:function(){return i("force login")},onMouseLeave:function(){return i("Logged In")},children:r})]})}function _(n,e){var t=new URL("https://id.twitch.tv/oauth2/authorize");return t.searchParams.set("client_id",n),t.searchParams.set("redirect_uri",e),t.searchParams.set("response_type","token"),t.searchParams.set("scope","channel:read:redemptions channel:manage:redemptions"),t}var M,X=t(39);var q,D=l.b.div(M||(M=Object(c.a)(["\n    position: absolute;\n    top: 1rem;\n    left: 1rem;\n    display: block;\n    color: white;\n    padding: 1rem 2rem;\n    text-decoration: none;\n    font-weight: bold;\n    border-radius: 3px;\n    background: var(--danger-dark);\n    cursor: pointer;\n\n    &:hover {\n        background: var(--danger);\n    }\n"])));function H(n){var e=n.setUserConfig;return Object(g.jsx)(D,{onClick:function(){return e(null)},children:"Reset"})}function W(){var n=Object(o.useState)(["userConfig"]),e=Object(h.a)(n,2),t=e[0],r=e[1],i=function(n){var e=Object(o.useContext)(J).state,t=e.accessToken,r=e.apiBaseUrl,i=Object(o.useState)(void 0),a=Object(h.a)(i,2),c=a[0],s=a[1],d=Object(o.useState)(0),b=Object(h.a)(d,2),l=b[0],g=b[1],u=function(){t&&fetch(r+"/api/userConfig",{headers:{accessToken:t}}).then((function(n){return n.json()})).then((function(n){return s(n)}))};return Object(o.useEffect)(u,[t,r]),Object(X.a)((function(){l&&c&&t?fetch(r+"/api/userConfig",{headers:{accessToken:t},method:"POST",body:JSON.stringify(c)}).then(n):l&&null===c&&t&&fetch(r+"/api/userConfig",{headers:{accessToken:t},method:"DELETE"}).then(u)}),500,[l]),[c,function(n){s(n),g(l+1)}]}((function(){var n=t.slice();n.push("saved"),r(n),setTimeout((function(){r(["userConfig"])}),500)})),a=Object(h.a)(i,2),c=a[0],s=a[1];return Object(g.jsxs)(Q,{children:[c&&Object(g.jsx)(H,{setUserConfig:s}),c&&Object(g.jsx)("div",{className:t.join(" "),children:Object(g.jsxs)("div",{className:"redemption",children:[Object(g.jsx)("img",{src:"/images/bttv.png",alt:"bttv"}),Object(g.jsxs)("label",{className:"switch",children:[Object(g.jsx)("input",{type:"checkbox",checked:c.Redemptions.Bttv.Active,onChange:function(n){var e=JSON.parse(JSON.stringify(c));e.Redemptions.Bttv.Active=n.target.checked,s(e)}}),Object(g.jsx)("span",{className:"slider round"})]}),Object(g.jsxs)("div",{className:"redemption-title",children:[Object(g.jsx)("span",{children:"Channel Points Reward Name"}),Object(g.jsx)("input",{type:"text",value:c.Redemptions.Bttv.Title,spellCheck:!1,onChange:function(n){var e=JSON.parse(JSON.stringify(c));e.Redemptions.Bttv.Title=n.target.value,s(e)}})]}),Object(g.jsxs)("span",{className:"hint",children:["make sure ",Object(g.jsx)("strong",{children:"gempbot"})," is bttv editor"]})]})})]})}var G,K,Q=l.b.div(q||(q=Object(c.a)(['\n    margin-top: 5rem;\n    margin-left: 1rem;\n    margin-right: 1rem;\n\n    .userConfig {\n        padding-bottom: 2rem;\n        background: var(--bg);\n        transition: background-color ease-in-out 0.2s;\n\n        &.saved {\n            background: var(--theme);\n        }\n    }\n\n    .redemption {\n        display: flex;\n        align-items: center;\n        background: var(--bg-bright);\n        border: 1px solid var(--bg-brighter);\n        padding: 0.5rem;\n\n        img {\n            max-height: 3rem;\n            margin-left: 1rem;\n            margin-right: 2rem;\n        }\n\n        .redemption-title {\n            position: relative;\n\n            span {\n                position: absolute;\n                top: -13px;\n                left: 18px;\n                font-size: 11px;\n            }\n\n            input {\n                margin: 0;\n                padding: 0;\n                margin-left: 1rem;\n                font-size: 1rem;\n                background: var(--bg);\n                border: 1px solid var(--bg-bright);\n                padding: 5px;\n                color: white;\n\n                &:focus {\n                    outline: none;\n                    border: 1px solid var(--theme2);\n                }\n            }\n        }\n        \n        .hint {\n            margin-left: 1rem;\n\n            strong {\n                color: var(--theme-bright);\n            }\n        }\n    }\n\n    /* The switch - the box around the slider */\n    .switch {\n        position: relative;\n        display: inline-block;\n        width: 60px;\n        height: 34px;\n\n        input {\n            opacity: 0;\n            width: 0;\n            height: 0;\n        }\n    }\n    /* The slider */\n    .slider {\n        position: absolute;\n        cursor: pointer;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: #ccc;\n        -webkit-transition: .4s;\n        transition: .4s;\n\n        &:before {\n            position: absolute;\n            content: "";\n            height: 26px;\n            width: 26px;\n            left: 4px;\n            bottom: 4px;\n            background-color: white;\n            -webkit-transition: .4s;\n            transition: .4s;\n        }\n    }\n\n    input:checked + .slider {\n        background-color: var(--theme-bright);\n    }\n\n    input:focus + .slider {\n     box-shadow: 0 0 1px var(--theme-bright);\n    }\n\n    input:checked + .slider:before {\n        -webkit-transform: translateX(26px);\n        -ms-transform: translateX(26px);\n        transform: translateX(26px);\n    }\n\n    .slider.round {\n        border-radius: 34px;\n\n        &:before {\n            border-radius: 50%;\n        }\n    }\n']))),V=l.b.main(G||(G=Object(c.a)(["\n    \n"])));function Y(){var n=Object(o.useContext)(J).state,e=Object(o.useState)(0),t=Object(h.a)(e,2),r=t[0],i=t[1],a=Object(o.useState)(0),c=Object(h.a)(a,2),s=c[0],d=c[1],b=Object(o.useState)([]),l=Object(h.a)(b,2),u=l[0],p=l[1];return Object(o.useEffect)((function(){new N(n.apiBaseUrl,(function(n){i(n.joinedChannels),d(n.activeChannels),p(n.records)}))}),[n.apiBaseUrl]),Object(g.jsx)(V,{children:Object(g.jsxs)(S.a,{children:[Object(g.jsx)(R,{}),Object(g.jsxs)(y.c,{children:[Object(g.jsx)(y.a,{path:"/dashboard",children:Object(g.jsx)(W,{})}),Object(g.jsxs)(y.a,{path:"/",children:[Object(g.jsx)(j,{activeChannels:s,joinedChannels:r}),Object(g.jsx)(x,{records:u})]})]})]})})}var Z=Object(l.a)(K||(K=Object(c.a)(["\n    body {\n        --bg: #0e0e10;\n        --bg-bright: #18181b;\n        --bg-brighter: #3d4146;\n        --bg-dark: #121416;\n        --theme: #009148;\n        --theme-bright: #00a552;\n        --theme2: #2980b9;\n        --theme2-bright: #3498db;\n        --theme2-dark: #24618a;\n        --text: #F5F5F5;\n        --text-dark: #616161;\n        --twitch: #6441a5;\n        --twitch-dark: #4c317e;\n        --danger: #e74c3c;\n        --danger-dark: #c0392b;\n\n        background: var(--bg);\n        margin: 0;\n        padding: 0;\n        color: var(--text);\n        margin: 0;\n        font-family: Helvetica, Arial, sans-serif;\n        height: 100%;\n        width: 100%;\n\n        * {\n            box-sizing: border-box;\n        }\n    }\n"])));b.a.render(Object(g.jsx)(o.StrictMode,{children:Object(g.jsx)(I,{children:Object(g.jsxs)(s.a.Fragment,{children:[Object(g.jsx)(Z,{}),Object(g.jsx)(Y,{})]})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.2b675d1a.chunk.js.map