
$(document).ready(function(){

  $("img.profilepicture").mouseenter(function() {
   	$(this).removeClass("profile").addClass("profile2");
    	})
    	.mouseleave(function() {
      $(this).removeClass("profile2").addClass("profile");
    	});

      $("#personaltext").mouseenter(function() {
        $(this).removeClass("text").addClass("text2");
          })
          .mouseleave(function() {
          $(this).removeClass("text2").addClass("text");
          });

});
