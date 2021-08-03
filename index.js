const socials = document.querySelector(".open-share");
const socials1 = document.querySelector(".triangle-down");
const shareBtn = document.querySelector("#share");

const removeShareBtn = document.getElementById("remove-share");

shareBtn.addEventListener("click", () => {
    if (socials1.style.display === "block") {
        socials1.style.display = "none";
    } else {
        socials1.style.display = "block";
    }
})



shareBtn.addEventListener("click", () => {
    socials.classList.toggle("clicked")
})


removeShareBtn.addEventListener("click", () => {
    socials.classList.toggle("clicked")
})