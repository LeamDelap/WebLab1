function challenge4(text){
    if(text.length===0){
        return 0;
    }
    let count=1;
    for (let i=0;i<text.length;i++){
        if(text[i]===" "){
            count++;
        }
    }
    return count;
}

console.log(challenge4("LIAM VORN"));