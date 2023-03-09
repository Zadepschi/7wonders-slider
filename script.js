const back = document.querySelector("#back");
const next = document.querySelector("#next");


const photo = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"];

let i = 0;

next.addEventListener("click", () => {
    i++;
    if (i > photo.length - 1) {
        i = 0;
    }
    document.querySelector("#picture").src = photo[i];
})

back.addEventListener("click", () => {
    i--;
    if(i < 0){
        i = photo.length - 1;
    }
    document.querySelector("#picture").src = photo[i];
})