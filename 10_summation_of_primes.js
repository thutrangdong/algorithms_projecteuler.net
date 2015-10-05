var solution = function(){
	var primes = fill_primes(2000000);
	var sum = 0;

	for (var i = 0; i < primes.length; i++){
		console.log(primes[i]);
		sum += primes[i]
	}

	return sum;



	function fill_primes(limit){
	var primes = [];
	for(var i = 2; i < limit; i++){
	if(is_prime(i)){
			primes.push(i)
				console.log(i);
		}
	}

	return primes;

		function is_prime(value) {
	    for(var i = 2; i < value; i++) {
	        if(value % i === 0) {
	            return false;
	        }
	    }
	    return true;
		}
	}
}



var start = new Date().getTime();
var answer = solution();
var end = new Date().getTime();
console.log('Answer: ' + answer);
console.log('Runtime: ' + (end-start) + " ms");