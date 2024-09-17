const slides = document.querySelectorAll(".imgsize");


let count = 0;
slides.forEach((imgsize, index) => {

    imgsize.style.left = `${index * 100}%`
});


const moveLeft = () => {
    if (count !== 0) {
        count--;
    } else {
        count = slides.length - 1; // Loop back to the last slide
    }
    slideImage();
};

const moveRight = () => {
    if (count < slides.length - 1) {
        count++;
    } else {
        count = 0; // Loop back to the first slide
    }
    slideImage();
};




const slideImage = () => {
    slides.forEach((imgsize) => {

        imgsize.style.transform = `translateX(-${count * 100}%)`
    }
    )
}


// const moveLeft =() =>{
   

//     if (count !=0) {
//         count--;
//         slideImage();
//         }
// };

// const moveRight =() =>{

//    if (count < slides.length - 1) {
//     count++;
//     slideImage();
//     }
// };
