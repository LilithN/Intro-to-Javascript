/*
 Messing around with the scratchpad and the console on the webpage
 */



/*
Here's a test to try

Generate a number between 0 and 15.
If the result is divisible by 3 alert "fizz".
If the result is divisible by 5 alert "buzz".
If the result is divisible by both 3 and 5 alert "fizzbuzz".
If the result is 0, it should not return fizz, buzz, or fizzbuzz.
Otherwise print the number to the console.



  Now I did it one way... which doooooes work..
  However if seems to be the really long way */


  /*
  Hit run to see result.
  comment out either section so they don't try to interact with one another.
  */

  var randomNumber = Math.round( Math.random() * 15);
  if(randomNumber%3 === 0 && randomNumber != 0 && randomNumber != 15){
    alert("fizz");
  }
  else if(randomNumber%5 === 0 && randomNumber != 0 && randomNumber != 15){
    alert("buzz");
  }
  else if(randomNumber%3 ===0 && randomNumber%5 === 0 && randomNumber != 0){
    alert("fizzbuzz");
  }
  else{
    console.log(randomNumber);
  }

/*
After some more research, here is the preferred and simpilar version.
*/

var randomNumber = Math.round( Math.random() * 5);
if(randomNumber%3 === 0 && randomNumber != 0){
  if(randomNumber%5 === 0){
    alert("fizzbuzz");
  }
  else{
    alert("fizz");
  }
}
else if(randomNumber%5 === 0 && randomNumber != 0){
  alert("buzz");
}
else{
  console.log(randomNumber);
}



// Another version of fizzbuzz using a for loop

for (var i = 0; i <= 100; i++){
  if(i%3 === 0){
    if(i%5 === 0){
      console.log("Fizzbuzz");
    }
    else{
      console.log("fizz");
    }
  }
  else if(i%5 === 0){
    console.log("Buzz");
  }
  else{
    console.log(i);
  }
}
