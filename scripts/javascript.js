var volca = ['apple', 'orange', 'grape', 'pear', 'grapefruit', 'pineapple', 'watermelon', 'dragon fruit', 'durian', 'cherry']
let answer = ''
let selected_letter = '';
let chance = 6;
var wrongGuess = 0

const alphabet = document.getElementById('alphabet')
const miss = document.getElementById('miss')
const test = document.getElementById('ccc')
//test.innerHTML = "abcd"
miss.innerHTML = wrongGuess ;
// wrongGuess++;
// miss.innerHTML = wrongGuess;


//alphabet.innerHTML += `<button>abcd</button>`


function setAnswer(){
    var random = Math.floor(Math.random()* volca.length)
    answer = volca[random]
}

function insertAlphabet(){
    var al = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

    al.forEach((letter)=>{

        var new_btn=`  <button class = "btn btn-outline-danger" id="btn_${letter}" onClick="guess('${letter}')">  ${letter}  </button>  `
        alphabet.innerHTML += new_btn
        

    })
}

function guess(string){
    test.innerHTML = string
}

function checkGameOver(){
    if(wrongGuess == change){
        

    }
}


//start button is clicked
// startAnimation.addEventListener("click", function(){
//     console.log("Start");
//     clearInterval(intervalPopUp);
//     $("#pop-up").css('display', 'none');
//     showCase = setInterval(spinImage, 100);
    

// });

// //stop button is clicked
// stopAnimation.addEventListener("click", function(){
//     console.log("Stop");
//     $("#pop-up").css('display', 'block');
//     clearInterval(showCase);
//     popUp();
// });

// /*
// run this with each frame of animation
// */
// function spinImage(){
//     if(currentImageNumber <maxImageNumber){
//         currentImageNumber+=1;
//     }
//     else{
//         currentImageNumber=1;
//     }
//     mainPictureInHTML.src = `images/bike-${currentImageNumber}.jpg`;
    

//}
setAnswer();
insertAlphabet();
