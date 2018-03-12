$(document).ready(function(){
    $(".star").hover(function(){
   $(this).addClass('starred');
   $(this).prevAll('.star').addClass('starred');
    }, function(){
    $(this).removeClass('starred');
    $(this).prevAll('.star').removeClass('starred');
  });
  $('.star').click(function(e) {
          $(this).addClass('starred-chosen');
    $(this).prevAll('.star').addClass("starred-chosen");
      });
  });

$(document).ready(function(){
    $("#addComment").click(function(){
        $("form").html('<input type="text" placeholder="Name"> <textarea name="" id="" cols="30" rows="10"></textarea>');
    });
});