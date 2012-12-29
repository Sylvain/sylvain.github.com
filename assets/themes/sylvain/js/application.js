$(document).ready(function(){

  
  $(".posts .post-content").each(function(){
    $(this).html(jQuery.trim($(this).html()).substring(0, 200)
    .split(" ").slice(0, -1).join(" ") + "...");
  });
  

});