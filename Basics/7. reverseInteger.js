/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let xCopy=x;
    let rev=0;
    let n=Math.abs(x);
     while(n>0){
        let rem=n%10;
        rev=(rev*10)+rem;
        n=Math.floor(n/10);
     }
     let limit= Math.pow(2,31);
     if(rev<-limit||rev>(limit-1)) return 0;
    return (xCopy<0)?-rev:rev;
};