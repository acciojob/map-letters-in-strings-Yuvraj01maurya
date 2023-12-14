//your JS code here. If required.
function mapLetters(str){
	const ans = {}
	for (let i = 0; i < str. length; i++) {
	    if (ans [str[i]]) {
			ans[str[i]].push[i]
		}
		else{
			ans[str[i]] = [i]
		}
	}
	return ans;
}
const text = prompt("Enter text:");
alert(toCase(text));
