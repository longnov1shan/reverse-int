module.exports = function reverse (n) {
  
    let result = "";

    let nVal=Math.abs(n);
        for(let i = nVal.toString().length-1 ; i >= 0; i--) {
        result += nVal.toString()[i];
    }
    console.log(result);

    
    return  Number(result);
 
    
}
