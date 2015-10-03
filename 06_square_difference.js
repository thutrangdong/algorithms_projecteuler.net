var solution = function(){
	
	var sum_square_single = function(){
		var sum = 0;
		for (var i = 1; i <= 100; i++) {
			console.log('i: ' + i);
			sum += Math.pow(i,2);
		}
		return sum;
	}

	var sum_square_whole = function(){
		var sum = 0;
		for (var i = 1; i <= 100; i++) {
			sum += i;
		}
		return Math.pow(sum, 2);
	}

	return sum_square_whole() - sum_square_single();
}

var start = new Date().getTime();
var answer = solution();
var end = new Date().getTime();
console.log('Answer: ' + answer);
console.log('Runtime: ' + (end-start) + " ms");