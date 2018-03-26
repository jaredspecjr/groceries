$(document).ready(function(){
  $("#groceries").submit(function(event){
    event.preventDefault();
    var items = ["itemOne", "itemTwo"];
    var orders = [];
    items.forEach(function(item){
      var userInput = $("input#" + item).val().toUpperCase();
      orders.push(userInput);

    });
    orders.sort();
    orders.map(function(order){
      return $(".output").append("<li>" + order + "</li>");

    });
    $("#groceries").hide();
  });
});
