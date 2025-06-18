/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min=prices[0];
    let profit=0;
   for(let i=1;i<prices.length;i++){
       if(prices[i]-min>profit){ // update profit when you find best value to sell
          profit=prices[i]-min
       }
       if(prices[i]<min){ // Keep track of min
          min=prices[i]
       }
   }
    return profit;
};

//Time Complexity	O(n)
//Space Complexity	O(1)