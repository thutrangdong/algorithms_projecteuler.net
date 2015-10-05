var solution = function(){
	for(var a = 1; a < 1000; a++){
		for(var b = a+1; b < (1000-a); b++){
			var c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
			if(a + b + c == 1000){
				console.log('found');
				console.log(a + " " + b + " " + c);
				return a*b*c;
			}

		}
	}
}

var start = new Date().getTime();
var answer = solution();
var end = new Date().getTime();
console.log('Answer: ' + answer);
console.log('Runtime: ' + (end-start) + " ms");