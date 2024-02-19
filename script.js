let n1=0,n2=1,n3;
function fibonacci(n) {
	for(let i=0;i<n;i++){
		console.log(n1);
		n1=n2;
		n3=n1+n2;
		n2=n3;
	}
}
fibonacci(prompt(n))
module.exports = fibonacci;
