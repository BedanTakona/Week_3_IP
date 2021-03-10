$(document).ready(function(){

  $("#design").click(function(){
    $("#show_design").toggle();
    $(".hide_des").toggle();
  })

  $("#development").click(function(){
    $("#show_dev").toggle();
    $(".hide_dev").toggle();
  })

  $("#product").click(function(){
    $("show_product").toggle();
    $(".hide_product").toggle();
  })


  });
