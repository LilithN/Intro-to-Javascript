$(document).ready(function() {
  $("#clickMe1").click(function(callingSign) {
    var sign = prompt("Type your anwser here!").toLowerCase();
    switch (sign) {

      case "aries":
        $("#text").text("Calculating Your Future for Aries...");
        $("#clickMe1").hide();
        $("#clickMe2").show()
        $("#clickMe2").click(function() {
          $("#text").text("This is a great day for you to get up on stage and make your presence known to the crowd, Aries. Let people know that you're the leader of the pack. There is a great need for you to take the helm now, and you shouldn't back away from this responsibility. The warrior instinct inside you is probably strong, so don't hesitate for a second. Be brave and courageous in all situations.");
          $("#clickMe2").hide();
        });
        break;

      case "taurus":
        $("#text").text("Calculating Your Future for Taurus...");
        $("#clickMe1").hide();
        $("#clickMe2").show()
        $("#clickMe2").click(function() {
          $("#text").text("This is a good day to add spark to your life, Taurus. If things have seemed boring and stagnating lately, you may need to infuse a bit of excitement into the situation. Add flair and dynamism to the mix. Take matters into your own hands and actively pursue your goals. You have a strong inner sense of where you need to go. Trust your instincts and move in that direction. Don't hesitate.");
          $("#clickMe2").hide();
        });
        break;

      case "gemini":
        $("#text").text("Calculating Your Future for Gemini...");
        $("#clickMe1").hide();
        $("#clickMe2").show()
        $("#clickMe2").click(function() {
          $("#text").text("You'll notice that your emotions are coming to a monthly climax today, Gemini. Don't be alarmed, but do be cautious about lashing out at people for no reason. You may feel on edge. Unintended slights from others could push you over that edge in a fury of emotion. Harsh words spoken today can damage other people's feelings for a long time, so remain silent.");
          $("#clickMe2").hide();
        });
        break;

      case "libra":
        $("#text").text("Calculating Your Future for Libra...");
        $("#clickMe1").hide();
        $("#clickMe2").show()
        $("#clickMe2").click(function() {
          $("#text").text("You should find that the general mood of the day is favorable to your personality style, Libra. Take this opportunity to present more of your thoughts and ideas to the world. Let your voice be heard. Use it with strength and vigor. You have partners and friends who are eager to hear what's on your mind. Engage in verbal sparring. You'll find that you can learn a great deal about yourself and others.");
          $("#clickMe2").hide();
        });
        break;

      case "scorpio":
        $("#text").text("Calculating Your Future for Scorpio...");
        $("#clickMe1").hide();
        $("#clickMe2").show()
        $("#clickMe2").click(function() {
          $("#text").text("The fog has lifted and you're ready to take off, Scorpio. The dreaminess you may have experienced lately has been nice, but now it's time to get moving again. Use all that you have learned from that recent internal processing and put it to use in the practical world. Try not to get caught up in the crossfire of conversations that don't really pertain to you. Feel free to start something new.");
          $("#clickMe2").hide();
        });
        break;

      case "sagittarius":
        $("#text").text("Calculating Your Future for Sagittarius...");
        $("#clickMe1").hide();
        $("#clickMe2").show()
        $("#clickMe2").click(function() {
          $("#text").text("This is a terrific day for you, Sagittarius, and you'll find that there is a great deal of power at your disposal. This is a day of new beginnings. You have the opportunity now to start over and create a solid emotional base from which to work. Rid yourself of negative feelings and self-doubt. Use this day as an opportunity to strike out on new ground and achieve whatever you set your heart on.");
          $("#clickMe2").hide();
        });
        break;

      case "cancer":
        $("#text").text("Calculating Your Future for Cancer...");
        $("#clickMe1").hide();
        $("#clickMe2").show()
        $("#clickMe2").click(function() {
          $("#text").text("Extremes is the name of the game now, especially for you, Cancer. Today the emphasis is on action. You're the one to call to get the job done. You won't wait another second to simply go for it. Your emotions are flowing, and you have an endless well of internal strength and resources. Use this power to your advantage. Connect with others who share similar viewpoints, and watch the incredible results unfold.");
          $("#clickMe2").hide();
        });
        break;


      case "leo":
        $("#text").text("Calculating Your Future for Leo...");
        $("#clickMe1").hide();
        $("#clickMe2").show()
        $("#clickMe2").click(function() {
          $("#text").text("Be adventurous and strike out into new territory, Leo. Be a pioneer. Work to make some new discoveries in the world. Today isn't a day to worry about consequences. It's a day to get things started. There is a great deal of fiery energy in the cosmos helping you in your quest for the new and fresh. Take the lead and try not to get thrown off course by leeches and party poopers.");
          $("#clickMe2").hide();
        });
        break;


      case "virgo":
        $("#text").text("Calculating Your Future for Virgo...");
        $("#clickMe1").hide();
        $("#clickMe2").show()
        $("#clickMe2").click(function() {
          $("#text").text("Certain situations may be difficult to deal with today as they take an emotional spin, Virgo. You're getting anxious. Things are getting started without the careful planning and consideration you feel is necessary. Try not to worry so much. Your own doubt is likely to hinder any project. Have faith that things will work out. Be bold. Take an active role in helping to get the ball rolling instead of holding it back.");
          $("#clickMe2").hide();
        });
        break;


      case "capricorn":
        $("#text").text("Calculating Your Future for Capricorn...");
        $("#clickMe1").hide();
        $("#clickMe2").show()
        $("#clickMe2").click(function() {
          $("#text").text("The fire is raging today, so be careful, Capricorn. Try not to be too impulsive in your actions. Your natural tendency may be to lash out against others without really thinking about the consequences. If you find yourself getting hot under the collar, you might need to take a step back from the situation and settle down. Pursue your goals, but make sure that you don't do so at the expense of others.");
          $("#clickMe2").hide();
        });
        break;


      case "aquarius":
        $("#text").text("Calculating Your Future for Aquarius...");
        $("#clickMe1").hide();
        $("#clickMe2").show()
        $("#clickMe2").click(function() {
          $("#text").text("Go for the gold, Aquarius. Today marks the beginning of the rest of your life. Treat it with respect. You may be on a crusade and your combative instincts could be working overtime. There's a lot of fuel in your engine, so don't worry about running out. The only thing you really need to be concerned about is possibly stepping on other people's toes. Make sure you consider how your actions affect others.");
          $("#clickMe2").hide();
        });
        break;


      case "pisces":
        $("#text").text("Calculating Your Future for Pisces...");
        $("#clickMe1").hide();
        $("#clickMe2").show()
        $("#clickMe2").click(function() {
          $("#text").text("You may feel as if someone is poking you today, Pisces, urging you to get up and get moving. Don't be surprised if someone seems to be picking on you for no reason. Other people's lack of sympathy and sensitivity could be acute on a day like this. Try not to take it personally. Your hard outer shell may be put to the test in terms of its ability to protect your soft vulnerability.");
          $("#clickMe2").hide();
        });
        break;

      default:
        $("#text").text("Please enter a valid astrological sign.");
        break;
    }

  }); //closing the clickMe1 function

}); //closing the ready event


/* Original javascript consider



var sign = prompt("What is your astrological sign?").toLowerCase();
alert("Sensing your future.")


switch (sign){

  case "aries":
    alert("This is a great day for you to get up on stage and make your presence known to the crowd, Aries. Let people know that you're the leader of the pack. There is a great need for you to take the helm now, and you shouldn't back away from this responsibility. The warrior instinct inside you is probably strong, so don't hesitate for a second. Be brave and courageous in all situations.");
    break;

  case "taurus":
    alert("This is a good day to add spark to your life, Taurus. If things have seemed boring and stagnating lately, you may need to infuse a bit of excitement into the situation. Add flair and dynamism to the mix. Take matters into your own hands and actively pursue your goals. You have a strong inner sense of where you need to go. Trust your instincts and move in that direction. Don't hesitate.");
    break;

  case "gemini":
    alert("You'll notice that your emotions are coming to a monthly climax today, Gemini. Don't be alarmed, but do be cautious about lashing out at people for no reason. You may feel on edge. Unintended slights from others could push you over that edge in a fury of emotion. Harsh words spoken today can damage other people's feelings for a long time, so remain silent.");
    break;

  case "libra":
    alert("You should find that the general mood of the day is favorable to your personality style, Libra. Take this opportunity to present more of your thoughts and ideas to the world. Let your voice be heard. Use it with strength and vigor. You have partners and friends who are eager to hear what's on your mind. Engage in verbal sparring. You'll find that you can learn a great deal about yourself and others.");
    break;

  case "scorpio":
    alert("The fog has lifted and you're ready to take off, Scorpio. The dreaminess you may have experienced lately has been nice, but now it's time to get moving again. Use all that you have learned from that recent internal processing and put it to use in the practical world. Try not to get caught up in the crossfire of conversations that don't really pertain to you. Feel free to start something new.");
    break;

  case "sagittarius":
    alert("This is a terrific day for you, Sagittarius, and you'll find that there is a great deal of power at your disposal. This is a day of new beginnings. You have the opportunity now to start over and create a solid emotional base from which to work. Rid yourself of negative feelings and self-doubt. Use this day as an opportunity to strike out on new ground and achieve whatever you set your heart on.");
    break;

  case "cancer":
    alert("Extremes is the name of the game now, especially for you, Cancer. Today the emphasis is on action. You're the one to call to get the job done. You won't wait another second to simply go for it. Your emotions are flowing, and you have an endless well of internal strength and resources. Use this power to your advantage. Connect with others who share similar viewpoints, and watch the incredible results unfold.");
    break;

  case "leo":
    alert("Be adventurous and strike out into new territory, Leo. Be a pioneer. Work to make some new discoveries in the world. Today isn't a day to worry about consequences. It's a day to get things started. There is a great deal of fiery energy in the cosmos helping you in your quest for the new and fresh. Take the lead and try not to get thrown off course by leeches and party poopers.");
    break;

  case "virgo":
    alert("Certain situations may be difficult to deal with today as they take an emotional spin, Virgo. You're getting anxious. Things are getting started without the careful planning and consideration you feel is necessary. Try not to worry so much. Your own doubt is likely to hinder any project. Have faith that things will work out. Be bold. Take an active role in helping to get the ball rolling instead of holding it back.");
    break;

  case "capricorn":
    alert("The fire is raging today, so be careful, Capricorn. Try not to be too impulsive in your actions. Your natural tendency may be to lash out against others without really thinking about the consequences. If you find yourself getting hot under the collar, you might need to take a step back from the situation and settle down. Pursue your goals, but make sure that you don't do so at the expense of others.");
    break;

  case "aquarius":
    alert("Go for the gold, Aquarius. Today marks the beginning of the rest of your life. Treat it with respect. You may be on a crusade and your combative instincts could be working overtime. There's a lot of fuel in your engine, so don't worry about running out. The only thing you really need to be concerned about is possibly stepping on other people's toes. Make sure you consider how your actions affect others.");
    break;

  case "pisces":
    alert("You may feel as if someone is poking you today, Pisces, urging you to get up and get moving. Don't be surprised if someone seems to be picking on you for no reason. Other people's lack of sympathy and sensitivity could be acute on a day like this. Try not to take it personally. Your hard outer shell may be put to the test in terms of its ability to protect your soft vulnerability.");
    break;

  default:
    alert("Please enter a valid astrological sign.");
    break;
}

*/
