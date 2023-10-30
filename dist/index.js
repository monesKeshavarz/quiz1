"use strict";
const randomBtn = document.querySelector("#randomBtn");
const inputElement = document.querySelector("#inputElement");
const addListBtn = document.querySelector("#addListBtn");
const deletListBtn = document.querySelector("#deletListBtn");
const list = [];
randomBtn?.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 89999) + 10000;
    inputElement.value = randomNumber.toString();
});
addListBtn?.addEventListener("click", () => {
    const number = +(inputElement.value);
    for (let i = 2; i <= number; i++) {
        let count = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0)
                count += 1;
        }
        if (count === 2) {
            list.push(i);
        }
    }
    console.log(list);
});
deletListBtn?.addEventListener("click", () => {
    list.length = 0;
    inputElement.value = "";
    console.log(list);
});
//# sourceMappingURL=index.js.map