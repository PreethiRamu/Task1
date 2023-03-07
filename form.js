
function sConsole(event) {
  event.preventDefault();
  var data = document.getElementById("Firstname");
  console.log('Firstname:', data.value);
  var data = document.getElementById("Lastname");
  console.log('Lastname:', data.value)
  var data = document.getElementById("Email");
  console.log('Email:', data.value)
  var data = document.getElementById("Phonenumber");
  console.log('Phonenumber:', data.value)
  var data = document.getElementById("City");
  console.log('City:', data.value)
}


// converting input values into js object



function ipvalue(event) {
  var testobject= [];
  var fname = document.getElementById("Firstname");
  var lnmae = document.getElementById("Lastname");
  var email = document.getElementById("Email");
  var phno= document.getElementById("Phonenumber");
  var city = document.getElementById("City");
  
  testobject.push({
	fname: fname.value,
  lname : lnmae.value,
  email : email.value,
  phno : phno.value,
  city : city.value
	})

  console.log(testobject);

  // convert object into json string
  var testJSON = JSON.stringify(testobject);
console.log(testJSON);



var obj = {
	fname: fname.value,
  lname : lnmae.value,
  email : email.value,
  phno : phno.value,
  city : city.value
	
};


var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));

var a = document.createElement('a');
a.href = 'data:' + data;
a.download = 'data.json';
a.innerHTML = 'download JSON';

var container = document.getElementById('container');
container.appendChild(a);

}















