function showAlert() {
    alert("congratulation..")    
}

function ShowConfirmAlert() {
    var choice = confirm("Are u sure to want add to record")
    if (choice) {
console.log("record added") 
    }
    else{console.log("record not added")}
}

function ShowPrompt() {
  var name = prompt("Enter your Name") 
  console.log(name) 
  alert(name)
}