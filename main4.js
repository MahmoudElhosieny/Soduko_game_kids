let userName = document.querySelector('.userName');
let timer = document.querySelector('.timer');
let picturePlace = document.querySelectorAll('.game');
let gameCover = document.querySelector('.startButton');
let pictureArry = Array.from(picturePlace);
let inputValue = document.querySelectorAll('input');
let inputArry = Array.from(inputValue);
let inputCount = 0;
let startButton = document.querySelector('.startButton span');
function randomInputrow1() { return Math.floor((Math.random() * 4) + 0) };
function randomInputrow2() { return Math.ceil((Math.random() * 5) + 2) };
function randomInputrow3() { return Math.ceil((Math.random() * 6) + 6) };
function randomInputrow4() { return Math.ceil((Math.random() * 8) + 7) };
let winMassage = document.querySelector('.WellDone');
let againMassage = document.querySelector('.Gameover');
let welldonButton = document.querySelector('.WellDone span');
let againButton = document.querySelector('.Gameover span');

//*********************************************** */
function sudokuGame() {
    for (let i = 0; i < inputArry.length; i++) {
        inputArry[i].setAttribute('id', inputCount++);
        inputArry[i].addEventListener('keypress', function (event) {
            //console.log(event);
            if (event.key == '0' || event.key > '4') {
                event.preventDefault();
            }else if (inputArry[i].value.length >= 1) {
                event.preventDefault();
            }; // check about value       
        });//Keypress event
        inputArry[i].addEventListener('keyup', function () {
            if (inputArry[i].value == '1') {
                 picturePlace[inputArry[i].id].style.backgroundImage = `url(image4/${inputArry[i].value}.png)`;
            } else if(inputArry[i].value == '2'){
                picturePlace[inputArry[i].id].style.backgroundImage = `url(image4/${inputArry[i].value}.png)`;
            }else if(inputArry[i].value == '3'){
                picturePlace[inputArry[i].id].style.backgroundImage = `url(image4/${inputArry[i].value}.png)`;
            } else {
                picturePlace[inputArry[i].id].style.backgroundImage = `url(image4/${inputArry[i].value}.png)`;
            };
            //*********************************************** */
           let valueArray = [];
           for (let j = 0; j < 8; j++){
               valueArray.push([]);
           }
           console.log(valueArray);
           valueArray[0].push(+inputArry[0].value, +inputArry[1].value, +inputArry[2].value, +inputArry[3].value);
           valueArray[1].push(+inputArry[4].value, +inputArry[5].value, +inputArry[6].value, +inputArry[7].value);
           valueArray[2].push(+inputArry[8].value, +inputArry[9].value, +inputArry[10].value, +inputArry[11].value);
           valueArray[3].push(+inputArry[12].value, +inputArry[13].value, +inputArry[14].value, +inputArry[15].value);
           valueArray[4].push(+inputArry[0].value, +inputArry[4].value, +inputArry[8].value, +inputArry[12].value);
           valueArray[5].push(+inputArry[1].value, +inputArry[5].value, +inputArry[9].value, +inputArry[13].value);
           valueArray[6].push(+inputArry[2].value, +inputArry[6].value, +inputArry[10].value, +inputArry[14].value);
           valueArray[7].push(+inputArry[3].value, +inputArry[7].value, +inputArry[11].value, +inputArry[15].value);
           console.log(valueArray);
           let checkArry = [];
           for (let value = 0; value < valueArray.length; value++){
               checkArry.push(valueArray[value].reduce((a, b) => a + b));
           };// for loop for check arry
           console.log(checkArry);
           if (checkArry.every((element) => element == 10)) {
               console.log('Done');
               winMassage.classList.remove('d-none');
               if (yourLevel == 'level1') {
                   clearTimeout(level1Timerid);
                   clearInterval(timerIds);
                   clearInterval(timerIdm);
               } else {
                   clearTimeout(level2Timerid);
                   clearInterval(timerIds);
               };//level check
           };// win massage
                });// keyup event
    };//for loop
};//game function

sudokuGame();
//*********************************************** */
startButton.addEventListener('click', function () {
    let yourName = prompt(' What is your Name ? ');
    if (yourName == null) {
        alert('Are you sure you want to Exit game ?!!');
        return;
    } else if (yourName == '') {
        alert('Please, enter yuor userName ');
        nameCheck();
    } else {
        userName.innerHTML = `welcome: ${yourName}`;
    };
    yourLevel = prompt('Select your level (level1 & level2)');
    if (yourLevel == null) {
        alert('Are you sure you want to Exit game ?!!');
         return;  
     }else if (yourLevel == 'level1') {
        gameStart();
        timerWatchlevel1()
       level1Timerid = setTimeout(stopTimerl1, 120000);
    } else if (yourLevel == 'level2') {
        gameStart();
        timerWatchlevel2();
        level2Timerid= setTimeout(stopTimerl2, 60000);    
    } else {
        alert('Please, Select Your level well (level1 & level2)');
        levelCheck();
    };//levelcheck          
});//startButton

//*********************************************** */
welldonButton.addEventListener('click', function () {
    winMassage.classList.add('d-none');
    levelCheck();
    for (let i = 0; i < inputArry.length; i++) {
        inputArry[i].value = '';
        picturePlace[inputArry[i].id].style.backgroundImage = ``;
    };
    randomSetting();
   
});//welldon button
//*********************************************** */
againButton.addEventListener('click', function () {
    againMassage.classList.add('d-none');
    levelCheck();
    for (let i = 0; i < inputArry.length; i++) {
        inputArry[i].value = '';
        picturePlace[inputArry[i].id].style.backgroundImage = ``;
    };
    randomSetting();
    
});// again button
//*********************************************** */
function levelCheck() {
    yourLevel = prompt('Select your level (level1 & level2)');
   if (yourLevel == null) {
       alert('Are you sure you want to Exit game ?!!');
        return;  
    }else if (yourLevel == 'level1') {
       gameStart();
       timerWatchlevel1()
       level1Timerid=setTimeout(stopTimerl1, 120000);   
   } else if (yourLevel == 'level2') {
       gameStart();
       timerWatchlevel2();
       level2Timerid=setTimeout(stopTimerl2, 60000); 
   } else {
       alert('Please, Select Your level well (level1 & level2)');
       levelCheck();
   };//levelcheck
      
};//levelCheck
//*********************************************** */
function gameStart() {
    gameCover.remove();
    randomSetting();
};//game start

//*********************************************** */
function nameCheck() {
    let yourName = prompt(' What is your Name ? ');
    if (yourName == null) {
        alert('Are you sure you want to Exit game ?!!');
        return;
    } else if (yourName == '') {
        alert('Please, enter yuor userName ');
        nameCheck();
    } else {
        userName.innerHTML = `welcome: ${yourName}`;
    };
};// name check
//*********************************************** */
function randomSetting() {
    let value = 2;
    let value2 = 4;
    let value3 = 1;
    let value4 = 3;
    let index = randomInputrow1();
    let index2 = randomInputrow2();
    let index3 = randomInputrow3();
    let index4 = randomInputrow4();
    pictureSet(index, value);
    pictureSet(index2, value2);
    pictureSet(index3, value3);
    pictureSet(index4, value4);
};// random setting function
//*********************************************** */
function pictureSet(index, value) {
    inputArry[index].value = `${value}`;
    if (inputArry[index].value == '1') {
        picturePlace[inputArry[index].id].style.backgroundImage = `url(image4/${inputArry[index].value}.png)`;
    } else if(inputArry[index].value == '2'){
        picturePlace[inputArry[index].id].style.backgroundImage = `url(image4/${inputArry[index].value}.png)`;
    }else if(inputArry[index].value == '3'){
        picturePlace[inputArry[index].id].style.backgroundImage = `url(image4/${inputArry[index].value}.png)`;
    } else {
        picturePlace[inputArry[index].id].style.backgroundImage = `url(image4/${inputArry[index].value}.png)`;
    };
};// picture set
//*********************************************** */
function secondDecrement() {
    let second = 60;
    let timerPlace = document.querySelector('.second');
     timerIds = setInterval(function () {
        second -= 1;
        if (second < 10) {
             timerPlace.innerText = `0${second}`;
        } if (second >= 10) {
                        timerPlace.innerText = second;
         } if (second == 1) {
            timerPlace.innerText = `00`;
             clearInterval(timerIds);
             secondDecrement();
         }    
    }, 1000); 
     //return timerId;
};// second timer
//*********************************************** */
function timerWatchlevel1() {
    secondDecrement();
    minutDecrement();
};//timer of level1
//*********************************************** */
function timerWatchlevel2() {
    secondDecrement(); 
};//timer of level1
//*********************************************** */
function minutDecrement() {
    let minut = 1;
    let timerPlace = document.querySelector('.mument');
    timerPlace.innerText = `0${minut}`;
     timerIdm = setInterval(function () {
        minut -= 1;
        if (minut == 0) {
            timerPlace.innerText = '00';
        } else if (minut = -1) {
            minut = 0;
            timerPlace.innerText = `0${minut}`;
            clearInterval(timerIdm);
        }  
    }, 60000); 
    //return timerId;
};// moment timer 
//*********************************************** */
//*********************************************** */
function stopTimerl1() {
    clearInterval(timerIds);
    clearInterval(timerIdm);
    againMassage.classList.remove('d-none');
};//stop timer1
//*********************************************** */
function stopTimerl2() {
    clearInterval(timerIds);
    againMassage.classList.remove('d-none');
};//stop timer2
//stopTimer()
//*********************************************** */