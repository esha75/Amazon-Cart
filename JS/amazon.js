//window.alert("hii");

function cd() {
    //alert("hii");
    var quantity = document.getElementById("qty").value;
    //alert(quantity);
    var subtotal;
    subtotal=parseFloat(quantity*2799.00);
    //alert(subtotal);
    document.getElementById("q").innerHTML=quantity;
    document.getElementById("subtotal").innerHTML=subtotal;
    document.getElementById("q1").innerHTML=quantity;
    document.getElementById("subtotal1").innerHTML=subtotal;
	document.getElementById("q2").innerHTML=quantity;
    

  
}