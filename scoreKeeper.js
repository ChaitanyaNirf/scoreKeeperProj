let p1 = document.querySelector('button#p1')
let p2 = document.querySelector('button#p2')
let reset = document.querySelector('button#reset')
let score = document.querySelector('div.score')
let maxPoint = document.querySelector('input.maxPointSelect')
let pointsP1 = 0;
let pointsP2 = 0;

p1.addEventListener("click" , function(e){
    // console.log("Hey clicked ")
    if( pointsP1 < (maxPoint.value - 1) && pointsP2 <= (maxPoint.value - 1) )
    {
    pointsP1 = pointsP1 + 1;
    console.log(`P1: ${pointsP1}`);
    score.innerText= `Score: ${pointsP1} - ${pointsP2}`;
    }
    else 
    {
        pointsP1 = pointsP1 + 1;
        // console.log(`P1: ${pointsP1}`);
        score.innerText= `${pointsP1} - ${pointsP2} Player 1 wins!!`;
        // console.log("Player 1 wins");
        p1.disabled = true ;
        p2.disabled = true;
    }

})
p2.addEventListener("click" , function(e){
    // console.log("Hey clicked ")
    if( pointsP1 <= (maxPoint.value - 1) && pointsP2 < (maxPoint.value - 1) )
    {
    pointsP2 = pointsP2 + 1;
    // console.log(`P2: ${pointsP2}`);
    score.innerText= `Score: ${pointsP1} - ${pointsP2}`;
    }
    else 
    {
        pointsP2 = pointsP2 + 1;
        // console.log(`P2: ${pointsP2}`);
        score.innerText=`${pointsP1} - ${pointsP2} Player 2 wins!!`;
        // console.log("Player 2 wins");
        p1.disabled = true ;
        p2.disabled = true;
    }
})

reset.addEventListener("click" , function(e){
    pointsP1 = pointsP2 = 0;
    score.innerText= `${pointsP1} - ${pointsP2}`;
    p1.disabled = false ;
    p2.disabled = false;
})