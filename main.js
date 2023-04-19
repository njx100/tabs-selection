const btnEl = document.querySelectorAll(".btn");
const tabsEl = document.querySelector(".tabs");
const contentEl = document.querySelectorAll(".content");


tabsEl.addEventListener("click", (event) => {
    const id = event.target.dataset.id;

    if (id) {
        btnEl.forEach((btn) => {
            btn.classList.remove("active");
        })
        event.target.classList.add("active");
        contentEl.forEach((content) => {
            content.classList.remove("live");
        })
        const selectedContent = document.getElementById(id);
        selectedContent.classList.add("live");
    }


    
})
