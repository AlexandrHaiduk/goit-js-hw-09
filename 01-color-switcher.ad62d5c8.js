!function(){var t=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),o=null;function e(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}t.addEventListener("click",(function(){t.disabled=!0,document.body.style.backgroundColor=e(),o=setInterval((function(){document.body.style.backgroundColor=e()}),1e3)})),n.addEventListener("click",(function(){t.disabled=!1,clearInterval(o)}))}();
//# sourceMappingURL=01-color-switcher.ad62d5c8.js.map
