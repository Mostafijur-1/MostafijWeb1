// ****************************Navbar Scrolling*******************************
var icon = document.querySelector(".icon");
var content = document.querySelector(".navbar-menu") ;
icon.addEventListener("click",function(){
if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
    
});
// ****************************Navbar Scrolling*******************************



// ****************************Google Maps*******************************
function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(23.858334, 90.266670), zoom: 10
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}
// ****************************Google Maps*******************************

// ****************************Alert for message*******************************
function message(){
    var email = document.getElementById('email');
    var msg = document.getElementById('msg');
    const success = document.getElementById('success');
    const fail = document.getElementById('fail');
    const invalidEmail = document.getElementById('invalidEmail');


    if (email.value === '' || msg.value === ''){
      fail.style.display = 'block';
    }
    else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) {
      invalidEmail.style.display = 'block';
    } 

    else{
      setTimeout(()=>{
        email.value = '';
        msg.value = '';
      },2000);

      // success.style.display = 'block';
      window.alert('Backend is not added yet to receive your message. It will add soon. If you want to send any message, Please send via this form link: https://formsubmit.co/el/hapahu');
    }
    
    setTimeout(()=>{
      fail.style.display = 'none';
      success.style.display = 'none';
      invalidEmail.style.display = 'none';
    },3500);
         
}


// ...........................Portfolio......................//

function updateValues() {
  // Get the decimal value from the input element
  const decimalValue = parseInt(document.getElementById("decimal-input").value);

  // Convert the decimal value to binary, octal, and hexadecimal
  const binaryValue = decimalValue.toString(2);
  const octalValue = decimalValue.toString(8);
  const hexadecimalValue = decimalValue.toString(16).toUpperCase();

  // Update the corresponding output elements with the converted values
  document.getElementById("binary-output").textContent = binaryValue;
  document.getElementById("octal-output").textContent = octalValue;
  document.getElementById("hexadecimal-output").textContent = hexadecimalValue;
}
