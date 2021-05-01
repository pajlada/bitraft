(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{37:function(n,e,t){"use strict";t.r(e);var r,i,a,c=t(4),s=t(0),o=t.n(s),d=t(21),b=t.n(d),h=t(5),l=t(6),u=t(1),g=h.b.div(r||(r=Object(c.a)(["\n    display: inline-block;\n    background: var(--bg-bright);\n    border: 1px solid var(--bg-brighter);\n    padding: 0.5rem;\n    margin: 1rem;\n    margin-right: 0;\n    margin-bottom: 0;\n"])));function p(n){var e=n.activeChannels,t=n.joinedChannels;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(g,{children:["Joined Channels: ",Object(u.jsx)("strong",{children:t})]}),Object(u.jsxs)(g,{children:["Active Channels: ",Object(u.jsx)("strong",{children:e})]})]})}function j(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{src:"https://static-cdn.jtvnw.net/user-default-pictures-uv/cdd517fe-def4-11e9-948e-784f43822e80-profile_image-70x70.png"},e=n.src;return Object(u.jsx)("img",{src:e,width:"30",height:"30",alt:"profile"})}var m=h.b.div(i||(i=Object(c.a)(["\n    display: flex;\n"])));function x(n){var e=n.records;return Object(u.jsx)(m,{children:e.map((function(n){return Object(u.jsx)(v,{record:n},n.title)}))})}var f=h.b.div(a||(a=Object(c.a)(["\n    background: var(--bg-bright);\n    border: 1px solid var(--bg-brighter);\n    margin: 1rem;\n    margin-right: 0;\n    padding: 1rem;\n\n    h2 {\n        color: var(--text);\n        margin: 0;\n        margin-bottom: 1rem;\n        padding: 0;\n    }\n\n    ol {\n        color: white;\n        font-size: 1.5rem;\n        font-weight: bold;\n        width: 500px;\n        padding: 0;\n        margin: 0;\n        margin-right: 15px;\n        background: var(--lightBackground);\n        border: 1px solid var(--lightBorder);\n        border-radius: 3px;\n\n        li {\n            display: flex;\n            align-items: center;\n            margin-bottom: 0.25rem;\n\n            img {\n                margin-right: 10px;\n            }\n\n            .value {\n                text-align: right;\n                flex: 1 1 auto;\n            }\n        }\n    }\n"])));function v(n){var e=n.record;return Object(u.jsxs)(f,{children:[Object(u.jsx)("h2",{children:e.title}),Object(u.jsx)("ol",{children:e.scores.map((function(n){return Object(u.jsxs)("li",{children:[Object(u.jsx)(j,{src:n.user.profilePicture}),Object(u.jsx)("span",{children:n.user.displayName}),Object(u.jsx)("span",{className:"value",children:n.score})]},n.user.id)}))})]})}var O,k,w,C,y=t(14),S=t(2),T=t(25),N=function n(e,t){Object(T.a)(this,n),function n(){var r=new WebSocket("".concat(e.replace("https://","wss://").replace("http://","ws://"),"/api/ws"));r.onmessage=function(n){t(JSON.parse(n.data))},r.onclose=function(e){console.log("Socket is closed. Reconnect will be attempted in 1 second.",e.reason),setTimeout(n,1e3)},r.onerror=function(n){console.error("Socket encountered error: ",n,"Closing socket"),r.close()}}()},B=t(15),U={state:{apiBaseUrl:"https://spamchamp-api.gempir.com",twitchClientId:"il5oqz0li81219qvw2hs7umntr493e",baseUrl:"https://spamchamp.gempir.com",accessToken:window.localStorage.getItem("accessToken")},setState:function(n){},setAccessToken:function(n){}},P=Object(s.createContext)(U),J=P.Provider,E=function(n){var e=n.children,t=Object(s.useState)(Object(B.a)({},U.state)),r=Object(l.a)(t,2),i=r[0],a=r[1];return Object(u.jsx)(J,{value:{state:i,setState:a,setAccessToken:function(n){return a(Object(B.a)(Object(B.a)({},i),{},{accessToken:n}))}},children:e})},R=h.b.a(O||(O=Object(c.a)(["\n    position: absolute;\n    display: block;\n    color: white;\n    top: 1rem;\n    right: 1rem;\n    padding: 1rem 2rem;\n    text-decoration: none;\n    font-weight: bold;\n    border-radius: 3px;\n    background: var(--twitch);\n\n    &:hover {\n        background: var(--twitch-dark);\n    }\n"])));function I(){var n=Object(s.useContext)(P),e=n.state,t=n.setAccessToken;if(Object(s.useEffect)((function(){var n=window.location.hash;if(window.location.hash="",n){var e=/#access_token=(\w*)&/gi.exec(n);if(!e||"undefined"===typeof e[1])return;e[1]&&(window.localStorage.setItem("accessToken",e[1]),t(e[1]))}}),[e.apiBaseUrl,t]),Object(s.useEffect)((function(){e.accessToken&&fetch(e.apiBaseUrl+"/api/oauth",{method:"post",body:JSON.stringify({accessToken:e.accessToken})})}),[e.accessToken,e.apiBaseUrl]),e.accessToken)return Object(u.jsx)(L,{});var r=new URL("https://id.twitch.tv/oauth2/authorize");return r.searchParams.set("client_id",e.twitchClientId),r.searchParams.set("redirect_uri",e.baseUrl),r.searchParams.set("response_type","token"),r.searchParams.set("scope","channel:read:redemptions,channel:read:redemptions"),Object(u.jsx)(R,{href:r.toString(),children:"Login"})}var _=h.b.div(k||(k=Object(c.a)(["\n    position: absolute;\n    top: 1rem;\n    right: 1rem;\n    display: flex;\n\n    a {\n        text-decoration: none;\n    }\n"]))),z=h.b.a(w||(w=Object(c.a)(["\n    display: block;\n    color: white;\n    width: 150px;\n    padding: 1rem 2rem;\n    text-decoration: none;\n    font-weight: bold;\n    border-radius: 3px;\n    background: var(--twitch);\n    cursor: pointer;\n\n    &:hover {\n        background: var(--twitch-dark);\n    }\n"]))),A=h.b.div(C||(C=Object(c.a)(["\n    display: block;\n    color: white;\n    margin-right: 1rem;\n    padding: 1rem 2rem;\n    text-decoration: none;\n    font-weight: bold;\n    border-radius: 3px;\n    background: var(--theme2-dark);\n    cursor: pointer;\n\n    &.dashboard {\n        background: var(--theme);\n\n        &:hover {\n        background: var(--theme-bright);\n    }\n    }\n\n    &:hover {\n        background: var(--theme2);\n    }\n"])));function L(){var n=Object(s.useContext)(P).state,e=Object(s.useState)("Logged In"),t=Object(l.a)(e,2),r=t[0],i=t[1],a=new URL("https://id.twitch.tv/oauth2/authorize");return a.searchParams.set("client_id",n.twitchClientId),a.searchParams.set("redirect_uri",n.baseUrl),a.searchParams.set("response_type","token"),a.searchParams.set("scope","channel:read:redemptions"),Object(u.jsxs)(_,{children:[Object(u.jsx)(y.b,{to:"/",children:Object(u.jsx)(A,{children:"Home"})}),Object(u.jsx)(y.b,{to:"/dashboard",children:Object(u.jsx)(A,{className:"dashboard",children:"Dashboard"})}),Object(u.jsx)(z,{href:a.toString(),onMouseEnter:function(){return i("force login")},onMouseLeave:function(){return i("Logged In")},children:r})]})}var F,M=t(39);var X,q=h.b.div(F||(F=Object(c.a)(["\n    position: absolute;\n    top: 1rem;\n    left: 1rem;\n    display: block;\n    color: white;\n    padding: 1rem 2rem;\n    text-decoration: none;\n    font-weight: bold;\n    border-radius: 3px;\n    background: var(--danger-dark);\n    cursor: pointer;\n\n    &:hover {\n        background: var(--danger);\n    }\n"])));function D(n){var e=n.setUserConfig;return Object(u.jsx)(q,{onClick:function(){return e(null)},children:"Reset"})}function H(){var n=Object(s.useState)(["userConfig"]),e=Object(l.a)(n,2),t=e[0],r=e[1],i=function(n){var e=Object(s.useContext)(P).state,t=e.accessToken,r=e.apiBaseUrl,i=Object(s.useState)(void 0),a=Object(l.a)(i,2),c=a[0],o=a[1],d=Object(s.useState)(0),b=Object(l.a)(d,2),h=b[0],u=b[1],g=function(){t&&fetch(r+"/api/userConfig",{headers:{accessToken:t}}).then((function(n){return n.json()})).then((function(n){return o(n)}))};return Object(s.useEffect)(g,[t,r]),Object(M.a)((function(){h&&c&&t?fetch(r+"/api/userConfig",{headers:{accessToken:t},method:"POST",body:JSON.stringify(c)}).then(n):h&&null===c&&t&&fetch(r+"/api/userConfig",{headers:{accessToken:t},method:"DELETE"}).then(g)}),500,[h]),[c,function(n){o(n),u(h+1)}]}((function(){var n=t.slice();n.push("saved"),r(n),setTimeout((function(){r(["userConfig"])}),500)})),a=Object(l.a)(i,2),c=a[0],o=a[1];return Object(u.jsxs)(K,{children:[c&&Object(u.jsx)(D,{setUserConfig:o}),c&&Object(u.jsx)("div",{className:t.join(" "),children:Object(u.jsxs)("div",{className:"redemption",children:[Object(u.jsx)("img",{src:"/images/bttv.png",alt:"bttv"}),Object(u.jsxs)("label",{className:"switch",children:[Object(u.jsx)("input",{type:"checkbox",checked:c.Redemptions.Bttv.Active,onChange:function(n){var e=JSON.parse(JSON.stringify(c));e.Redemptions.Bttv.Active=n.target.checked,o(e)}}),Object(u.jsx)("span",{className:"slider round"})]}),Object(u.jsxs)("div",{className:"redemption-title",children:[Object(u.jsx)("span",{children:"Channel Points Reward Name"}),Object(u.jsx)("input",{type:"text",value:c.Redemptions.Bttv.Title,spellCheck:!1,onChange:function(n){var e=JSON.parse(JSON.stringify(c));e.Redemptions.Bttv.Title=n.target.value,o(e)}})]}),Object(u.jsxs)("span",{className:"hint",children:["make sure ",Object(u.jsx)("strong",{children:"gempbot"})," is bttv editor"]})]})})]})}var W,G,K=h.b.div(X||(X=Object(c.a)(['\n    margin-top: 5rem;\n    margin-left: 1rem;\n    margin-right: 1rem;\n\n    .userConfig {\n        padding-bottom: 2rem;\n        background: var(--bg);\n        transition: background-color ease-in-out 0.2s;\n\n        &.saved {\n            background: var(--theme);\n        }\n    }\n\n    .redemption {\n        display: flex;\n        align-items: center;\n        background: var(--bg-bright);\n        border: 1px solid var(--bg-brighter);\n        padding: 0.5rem;\n\n        img {\n            max-height: 3rem;\n            margin-left: 1rem;\n            margin-right: 2rem;\n        }\n\n        .redemption-title {\n            position: relative;\n\n            span {\n                position: absolute;\n                top: -13px;\n                left: 18px;\n                font-size: 11px;\n            }\n\n            input {\n                margin: 0;\n                padding: 0;\n                margin-left: 1rem;\n                font-size: 1rem;\n                background: var(--bg);\n                border: 1px solid var(--bg-bright);\n                padding: 5px;\n                color: white;\n\n                &:focus {\n                    outline: none;\n                    border: 1px solid var(--theme2);\n                }\n            }\n        }\n        \n        .hint {\n            margin-left: 1rem;\n\n            strong {\n                color: var(--theme-bright);\n            }\n        }\n    }\n\n    /* The switch - the box around the slider */\n    .switch {\n        position: relative;\n        display: inline-block;\n        width: 60px;\n        height: 34px;\n\n        input {\n            opacity: 0;\n            width: 0;\n            height: 0;\n        }\n    }\n    /* The slider */\n    .slider {\n        position: absolute;\n        cursor: pointer;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: #ccc;\n        -webkit-transition: .4s;\n        transition: .4s;\n\n        &:before {\n            position: absolute;\n            content: "";\n            height: 26px;\n            width: 26px;\n            left: 4px;\n            bottom: 4px;\n            background-color: white;\n            -webkit-transition: .4s;\n            transition: .4s;\n        }\n    }\n\n    input:checked + .slider {\n        background-color: var(--theme-bright);\n    }\n\n    input:focus + .slider {\n     box-shadow: 0 0 1px var(--theme-bright);\n    }\n\n    input:checked + .slider:before {\n        -webkit-transform: translateX(26px);\n        -ms-transform: translateX(26px);\n        transform: translateX(26px);\n    }\n\n    .slider.round {\n        border-radius: 34px;\n\n        &:before {\n            border-radius: 50%;\n        }\n    }\n']))),Q=h.b.main(W||(W=Object(c.a)(["\n    \n"])));function V(){var n=Object(s.useContext)(P).state,e=Object(s.useState)(0),t=Object(l.a)(e,2),r=t[0],i=t[1],a=Object(s.useState)(0),c=Object(l.a)(a,2),o=c[0],d=c[1],b=Object(s.useState)([]),h=Object(l.a)(b,2),g=h[0],j=h[1];return Object(s.useEffect)((function(){new N(n.apiBaseUrl,(function(n){i(n.joinedChannels),d(n.activeChannels),j(n.records)}))}),[n.apiBaseUrl]),Object(u.jsx)(Q,{children:Object(u.jsxs)(y.a,{children:[Object(u.jsx)(I,{}),Object(u.jsxs)(S.c,{children:[Object(u.jsx)(S.a,{path:"/dashboard",children:Object(u.jsx)(H,{})}),Object(u.jsxs)(S.a,{path:"/",children:[Object(u.jsx)(p,{activeChannels:o,joinedChannels:r}),Object(u.jsx)(x,{records:g})]})]})]})})}var Y=Object(h.a)(G||(G=Object(c.a)(["\n    body {\n        --bg: #0e0e10;\n        --bg-bright: #18181b;\n        --bg-brighter: #3d4146;\n        --bg-dark: #121416;\n        --theme: #009148;\n        --theme-bright: #00a552;\n        --theme2: #2980b9;\n        --theme2-bright: #3498db;\n        --theme2-dark: #24618a;\n        --text: #F5F5F5;\n        --text-dark: #616161;\n        --twitch: #6441a5;\n        --twitch-dark: #4c317e;\n        --danger: #e74c3c;\n        --danger-dark: #c0392b;\n\n        background: var(--bg);\n        margin: 0;\n        padding: 0;\n        color: var(--text);\n        margin: 0;\n        font-family: Helvetica, Arial, sans-serif;\n        height: 100%;\n        width: 100%;\n\n        * {\n            box-sizing: border-box;\n        }\n    }\n"])));b.a.render(Object(u.jsx)(s.StrictMode,{children:Object(u.jsx)(E,{children:Object(u.jsxs)(o.a.Fragment,{children:[Object(u.jsx)(Y,{}),Object(u.jsx)(V,{})]})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.3b9cb881.chunk.js.map