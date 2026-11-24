function challenge2(arr) {
    let size=arr.length;
    for (let i=0;i<size/2;i++){
        let temp=arr[i];
        arr[i]=arr[size-1-i];
        arr[size-1-i]=temp;
    }
    return arr;
}
console.log(challenge2([1,2,3,4,5]));
