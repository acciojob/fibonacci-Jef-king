let a[50]={0,1,1};
	function fibonacci(n) {
		if(n>3){
			for(int i=3;i<n;i++){
				int j=i-2,k=i-1;
				a[i]=a[j]+a[k];
			}
			return a[n];
	}
	console.log(n1);
}
fibonacci(prompt());
module.exports = fibonacci;
