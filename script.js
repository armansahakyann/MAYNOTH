function addUp(num) {
    let prod = 0;
	for(let i  = 1; i  <= num; i++) {
      
     prod = prod + i
    }
    return prod
}
console.log(addUp(600))