function converttoCoin (coin) {
var coins = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1];
var result = [];
    while(coin > 0) {
        for (var i = 0; i < coins.length; i++) {
            if (coin >= coins[i]) {
                result.push(coins[i]);
                coin -= coins[i];
                break;
            }
        }
    }
return result;
}
console.log(converttoCoin(543));
// output : [500, 20, 20, 1, 1, 1];
console.log(converttoCoin(7752));
// output : [5000, 2000, 500, 200, 50, 1, 1];
console.log(converttoCoin(37454));
// output : [10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1];

