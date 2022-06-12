const SECTION=document.querySelector(".section--our-pricing"),TOGGLE=document.querySelector(".billing__toggle");SECTION.dataset.billing=TOGGLE.checked?"monthly":"annually",TOGGLE.addEventListener("change",(({target:{checked:e}})=>{SECTION.dataset.billing=e?"monthly":"annually"}));
//# sourceMappingURL=index.66c0832a.js.map
