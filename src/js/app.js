define(['secondModule'], function(secondModule) {
	var jsOutput = document.getElementById('js-output');
	jsOutput.innerHTML += 'Entry module works!';
    
	//Calling second module
    secondModule.run(jsOutput); 
});
