//Challenge 1
function challenge1(width, height) {
    let rectangleString = '';
        for(let row=0;row<height;row++){
            for (let col=0;col<width;col++){
                rectangleString+='*';
            }
            rectangleString+="\n";
        }
    return rectangleString;
}
console.log(challenge1(0,0));
