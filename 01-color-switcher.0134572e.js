const e=document.querySelector("body"),t=document.querySelector("button[data-start]"),d=document.querySelector("nutton[data-stop]");d.disabled=!0;const a=()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`};let l=null;t.addEventListener("click",(()=>{t.disabled=!0,d.disabled=!1,a(),l=setInterval((()=>{a()}),2e3)}));d.addEventListener("click",(()=>{clearInterval(l),t.disabled=!1,d.disabled=!0}));
//# sourceMappingURL=01-color-switcher.0134572e.js.map
