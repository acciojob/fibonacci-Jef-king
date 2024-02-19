let n1=0,n2=1,n3=0;
function fibonacci(n) {
	for(let i=0;i<n;i++){
		n1=n2;
		n3=n1+n2;
		n2=n3;
	}
	console.log(n1);
}
fibonacci(prompt());
module.exports = fibonacci;
