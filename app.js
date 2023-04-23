(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();


const lightButton = document.querySelector('.control[data-id="light"]');
if (lightButton.hasAttribute("id")) {
  // face ceva daca exista un ID
} else {
  // face altceva daca nu exista un ID
}

lightButton.addEventListener("click", function() {
  nameSpan.style.color = "blue"; // sau altă culoare dorită pentru light mode
});

