function check()
{
	event.preventDefault();

    	const num = document.getElementById("num");
    	const msg = document.getElementById("msg");

    	if(num.value==="")
	{
		alert("Please enter a number");
		msg.innerHTML="";
		num.focus();
		return;	
	}
	if(num.value < 0)
	{
		alert("please enter positive number");
		msg.innerHTML="";
		num.focus();
		return;
	}
	
    	const numStr = num.value;
    	const reversedStr = numStr.split('').reverse().join('');

    	if (numStr === reversedStr) {
        	msg.innerHTML = `${numStr} is a palindrome `;
    	} else {
        	msg.innerHTML = `${numStr} is not a palindrome `;
    	}
	
}