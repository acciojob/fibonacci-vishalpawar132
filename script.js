function fibonacci(num) {
// your code here
	if(num === 0){
		return 0;
	}
	else if(num === 1){
		return 1 ;
	}else {
		const fb = [0, 1];
		for(let i = 2;  i <= num; i++){
			fib.push(fb[i-1] + fb[i-2]);
		}
		return fb[num;
	}
}

module.exports = fibonacci;
