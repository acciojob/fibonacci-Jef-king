	function fibonacci(n) {
		let a=[0,0,1];
		if(n>=3){
			for(let i=3;i<n;i++){
				let j=i-2,k=i-1;
				a[i]=a[j]+a[k];
			}
	}
				return(a[n]);
}
fibonacci(prompt());
module.exports = fibonacci;
