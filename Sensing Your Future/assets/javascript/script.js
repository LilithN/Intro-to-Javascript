
  function callingSign() {
    var sign = $("#input").val().toLowerCase();
    console.log(sign);

    //switch case for star signs
    switch (sign){
      case "aries":
      $("#text").text("Calculating Your Future for Aries...");
      $("#submit").hide();
      $("#input").hide();
      $("#clickMe").show();
      $("#clickMe").click(function(){
        $("#text").text("This is a great day for you to get up on stage and make your presence known to the crowd, Aries. Let people know that you're the leader of the pack. There is a great need for you to take the helm now, and you shouldn't back away from this responsibility. The warrior instinct inside you is probably strong, so don't hesitate for a second. Be brave and courageous in all situations.");
        $("#clickMe").hide();
      });
      break;
    }
  }
    