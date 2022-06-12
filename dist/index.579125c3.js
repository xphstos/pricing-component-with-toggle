const SECTION = document.querySelector(".section--our-pricing");
const TOGGLE = document.querySelector(".billing__toggle");
SECTION.dataset.billing = TOGGLE.checked ? "monthly" : "annually";
TOGGLE.addEventListener("change", ({ target: { checked  }  })=>{
    SECTION.dataset.billing = checked ? "monthly" : "annually";
});

//# sourceMappingURL=index.579125c3.js.map
