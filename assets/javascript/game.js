const resetButton = document.querySelector("#reset-button");
const numresets = document.querySelector("#num-resets");
const toneshootButton = document.querySelector("#teamone-shoot-button");
const toneshotsElement = document.querySelector("#teamone-numshots");
const tonegoals = document.querySelector("#teamone-numgoals");
const ttwoshotsElement = document.querySelector("#teamtwo-numshots");
const ttwogoals = document.querySelector("#teamtwo-numgoals");
const ttwoshootButton = document.querySelector("#teamtwo-shoot-button");

toneshootButton.addEventListener("click",function() {
    console.log("+button clicked");
    let newShotValue = Number(toneshotsElement.innerHTML) + 1;
    toneshotsElement.innerHTML = newShotValue;
    let randNum = Math.random();

    if(randNum > 0.4){
        let newGoalValue = Number(tonegoals.innerHTML) + 1;
        tonegoals.innerHTML = newGoalValue;
    } 
    
    

    
})


ttwoshootButton.addEventListener("click",function() {
    console.log("+button clicked");
    let newShotValue2 = Number(ttwoshotsElement.innerHTML) + 1;
    ttwoshotsElement.innerHTML = newShotValue2;
    let randNum = Math.random();

    if(randNum > 0.3){
        let newGoalValue2 = Number(ttwogoals.innerHTML) + 1;
        ttwogoals.innerHTML = newGoalValue2;
    }
    
})

resetButton.addEventListener("click",function() {
    console.log("Reset");
    toneshotsElement.innerHTML = 0;
    tonegoals.innerHTML = 0;
    ttwoshotsElement.innerHTML = 0;
    ttwogoals.innerHTML = 0;

    let totalResets = Number(numresets.innerHTML) + 1;
    numresets.innerHTML = totalResets;


})

