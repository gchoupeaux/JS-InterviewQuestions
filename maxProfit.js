
// input [7, 1, 5, 3, 6, 4] => return 5 (6 - 1)
// 2 foor loop O(n^2)
// buy and sell only one time
var maxProfit = function(prices) {
  let max = 0;
  for (let i=0; i<prices.length-1; i++){
    for (let y=i+1; y<prices.length; y++){
      if (max<prices[y] - prices[i]){
				max = prices[y] - prices[i];
			}
		}
	}
	return max;
};

// input [7, 1, 5, 3, 6, 4] => return 5 (6 - 1)
// 1 foor loop O(n)
// buy and sell only one time
var maxProfit = function(prices) {
  let min = prices[0];
	let max = 0;
    for(let i=0; i<prices.length; i++){
      if(prices[i]-min>max){
        max=prices[i]-min;
      } if(prices[i]< min){
        min = prices[i];
      }
    }
	return max;
};

// input [7, 1, 5, 3, 6, 4] => return 7 (5-1=4  6-3=3)
// 1 foor loop O(n)
// buy and sell multiple time
var maxProfit = function(prices) {
	let max = 0;
	for (let i=1; i<prices.length; i++){
		if (prices[i] > prices[i-1]){
  		max += prices[i] - prices[i -1];
		}
	}
	return max;
};


maxProfit([7, 1, 5, 3, 6, 4]);
