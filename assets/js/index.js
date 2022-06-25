window.addEventListener("scroll", () => {
    const header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})

const office = document.querySelector(".office");

function typeWriter(element){
    const textArray = element.innerHTML.split("");
    element.innerHTML = "";
    textArray.forEach((letra, i) => {
        setTimeout(() => element.innerHTML += letra, 100 * i)
    });

    
}

setInterval(() => typeWriter(office), 4000);