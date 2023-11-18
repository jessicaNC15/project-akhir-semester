document.addEventListener("DOMContentLoaded", () => {

    let cart = 0;

    const increaseBtn = document.getElementById("increase");
    const decreaseBtn = document.getElementById("decrease");
    const h3Text = document.querySelector("h3")

    function setText(){
        h3Text.innerHTML = cart;
}

    document.querySelector("body").querySelector(".catalog", "button").addEventListener("click", () => {
        cart++;
        setText();
    })

    increaseBtn.onclick = function () {
        cart++;
        setText()
    }

    decreaseBtn.onclick = function () {
        cart--;
        setText();
    }
})