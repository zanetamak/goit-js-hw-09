const e=document.querySelector("body"),t=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");d.disabled=!0;const a=()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`};let l=null;t.addEventListener("click",(()=>{t.disabled=!0,d.disabled=!1,l=setInterval((()=>{a()}),1e3)}));d.addEventListener("click",(()=>{clearInterval(l),t.disabled=!1,d.disabled=!0}));
//# sourceMappingURL=02-timer.6d6d6fc9.js.map
