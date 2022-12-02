$(document).ready(function(){
  $(".hide").click(function(){
    $("#para").hide();
  });
  $(".show").click(function(){
    $("#para").show();
});
});

$(document).ready(function(){
  $(".fadeout").click(function(){
    $("iframe").fadeOut();
  });

  $(document).ready(function(){
    $(".fadein").click(function(){
      $("iframe").fadeIn();
    });
  });
});

$(document).ready(function(){
  $("button").click(function(){
    $("table").animate({
      left: '250px',
      opacity: '0.5',
      height: '150px',
      width: '200px',
    });
  });
});

$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown("slow");
  });
});

$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown(5000);
  });
  $("#stop").click(function(){
    $("#panel").stop();
  });
});

$(document).ready(function(){
  $(".hidebtn").click(function(){
    $("#flip").hide("slow", function(){
      alert("The contacts had been hidden!");
    });
  });
});

$(document).ready(function(){
  $(".showbtn").click(function(){
    $("#flip").show("slow", function(){
      alert("The contacts has been shown!");
    });
  });
});

$(document).ready(function(){
  $(".showbtn").click(function(){
    $("#panel").css("color", "red")
      .slideUp(2000)
      .slideDown(2000);
  });
}); 

$(document).ready(function(){
  $("#getbtn1").click(function(){
    alert("Nu:15000");
  });
  $("#getbtn2").click(function(){
    alert("Nu:10000");
  });
});

$(document).ready(function(){
  $("#setbtn1").click(function(){
    $("#test1").text(function(i, origText){
      return "fender" + "-26000"; 
     });
   
     $("#setbtn1").click(function(){
      $("#test1").text(function(i, origText){
        return "Epiphone" + "-22000"; 
      });
      $("#setbtn1").click(function(){
        $("#test1").text(function(i, origText){
          return "Gretscht" + "-18000"; 
     });
  });
 });
});
});

  $("#setbtn2").click(function(){
    $("#test2").html(function(i, origText){
      return "Martin SC-13E" + "15000";
  });
  $("#setbtn2").click(function(){
    $("#test2").html(function(i, origText){
      return "Gibson G_45 Standard" + "20000";
  });
});
});

$(document).ready(function(){
  $("#addbtn1").click(function(){
    $("img").before("<b>Before</b>");
  });
  $("#addbtn2").click(function(){
    $("img").after(" n" + "hjb");
  });
});

$(document).ready(function(){
  $("#removebtn").click(function(){
    $("#addbtn2").remove();
  });
  $(document).ready(function(){
    $("#removebtn").click(function(){
      $("#addbtn1").remove();
    });
});
});

// $(document).ready(function(){
  // $("#addclassbtn").click(function(){
    // $("#test1").css();
  // });
//  });

$(document).ready(function(){
  $("#setbtn1").click(function(){
    $("#test1 , #test2").css({"background-color": "gray", "width": "200px", "disply": "inline-block"});
  });
});
 
$(document).ready(function(){
  $("input[type=submit]").click(function(){
    alert("submited");
  });
});

$(document).ready(function(){
  $("input[type=submit]").click(function(){
    alert("submited");
  });
});

