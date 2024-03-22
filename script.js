function fibonacci(n) {
		let a=0,b=1,c=0;
		if(n==0||n==1){
			return a;
	}else if(n==2){
				return b;
}else {
  for(let i=3;i<=n;i++){
    c=a+b;
    a=b;
    b=c;
  }
  return c;
}
}
module.exports = fibonacci;
