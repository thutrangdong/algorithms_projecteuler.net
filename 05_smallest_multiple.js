/*
	get least common multiple of 1 - 20
*/

var primes =[];
var prime_factors = [];

var solution = function(){
	get_primes();
	get_prime_factors();
	return multiply_prime_factors_with_highest_exponent();
}

function get_primes(){
	for(var i = 2; i < 20; i++){
	if(is_prime(i)){
			primes.push(i)
		}
	}

	function is_prime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return true;
	}
}

function get_prime_factors(){
	for(var i = 2; i <= 20; i++) {
		prime_factors.push({});
		var counter = 0;
		var j = 0;
		var value = i;

		do {
			var current_prime = primes[j];
			if(value % current_prime == 0){
				prime_factors[i-2][current_prime] = (counter += 1);
				value = value / current_prime;
			} else {
				j++
				counter = 0;
			}
		} while (!(value == 1));
	}
}

function multiply_prime_factors_with_highest_exponent(){
	var result = 1;

	for (var i = 0; i < primes.length; i++){

		var prime_factor = 0;
		var exponent = 0;
		var prime = primes[i];

		for (var j = 0; j < prime_factors.length; j++){

			if ((j+2) < prime){
				j = prime-2;
			}

			if(!(prime_factors[j][prime] == 'undefined') && (prime_factors[j][prime]) > exponent){
				prime_factor = prime;
				exponent = prime_factors[j][prime];
			}
		}
		result *= Math.pow(prime_factor, exponent);
	}
	return result;
}


var start = new Date().getTime();
// var answer = solution();
var answer = leastCommonMultiple(1,20);
var end = new Date().getTime();
console.log('Answer: ' + answer);
console.log('Runtime: ' + (end-start) + " ms");


//source: http://stackoverflow.com/questions/31302054/how-to-find-the-least-common-multiple-of-a-range-of-numbers
function leastCommonMultiple(min, max) {
    function range(min, max) {
        var arr = [];
        for (var i = min; i <= max; i++) {
            arr.push(i);
        }
        return arr;
    }

    function gcd(a, b) {
        return !b ? a : gcd(b, a % b);
    }

    function lcm(a, b) {
        return (a * b) / gcd(a, b);   
    }

    var multiple = min;
    range(min, max).forEach(function(n) {
        multiple = lcm(multiple, n);
    });

    return multiple;
}