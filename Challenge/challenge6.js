function challenge6(array){
    if(array.length===0){
        console.log("There is not vote yet");
        return;
    }
    let countA=0,countB=0,countC=0;
    for(let i=0;i<array.length;i++){
        if(array[i]==="A"){
            countA++;
        }
        if(array[i]==="B"){
            countB++;
        }
        if(array[i]==="C"){
            countC++;
        }
    }
    if((countA>countB)&&(countA>countC)){
        console.log("A is the winner");
    }else if((countB>countA)&&(countB>countC)){
        console.log("B is the winner");
    }else if((countC>countA)&&(countC>countB)){
        console.log("C is the winner");
    }else if(countA===countB){
        if(countA===countC){
            console.log("A, B and C are all the winners");
        }else{
            console.log("A and B are both winner");
        }       
    }else if (countA===countC){
        console.log("A and C are both winner");
    }else if (countB===countC){
        console.log("B and C are both winner");
    }
    return;
}
challenge6(["A","B","A","C","A"]);  
challenge6(["A","B","B","C","A"]);  
challenge6(["B","C","B","C","A"]);  
challenge6(["A","B","C"]);          
challenge6([]);                    