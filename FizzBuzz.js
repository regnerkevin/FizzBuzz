for(var n = 1; n <= 100; n++) {
	  var output = "";
	    if (n % 3 == 0)
		        output += "Fizz";
	      if (n % 5 == 0)
		          output += "Buzz";
	        console.log(output || n);
}

// Kevin Regner
// Chapter 2 FizzBuzz
// Date made, 1/26/14th (Was having problems but fixed it as of the 26th)
// What it does is that it takes all numbers from 1 to 100 and lists them. Replacing the numbers divideable by 3 by Fizz and numbers divideable by 5 by buzz.
