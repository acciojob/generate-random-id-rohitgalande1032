function makeid(l) {
  // write your code here
	let char_code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let result = "";

	for(let i=0; i<l; i++) {
		let char =  char_code.charAt(Math.floor(
			Math.random()*char_code.length)
		)
		result+=char;
	}
	return result;
}   
 

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
