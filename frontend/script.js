var val =document.getElementById("signup");
var inputs=val.getElementsByTagName("input");
//var selects=val.getElementsByTagName("select");
for(var i=0;i<inputs.length;i++){
  //console.log(inputs[i]);
  inputs[i].addEventListener('blur',function(){
    if (this.value === '') {
      this.classList.add('filled');
    } else {
      this.classList.remove('filled');
    }
  });

}


function fieldFill(){
  //debugger
  //var val =document.getElementById("signup");
  //var input = val.getElementsByTagName("input");
  var allFilled=true;
  for(var i=0;i<inputs.length;i++){
    if (inputs[i].value === ""){
      allFilled = false;
      break;
    }
  }
  // var kname=document.getElementById("name").value;
  // var kemail=document.getElementById("email").value;
  // var pass=document.getElementById("password").value;
  // var kcon=document.getElementById("country").value;
  // var kstate=document.getElementById("state").value;
  // var storage={
  //   Name:kname,
  //   Email:kemail,
  //   Password:pass,
  //   Country:kcon,
  //   State:kstate
  // }
  //var users=JSON.stringify(storage);
  if(allFilled){
    var kname = document.getElementById("name").value;
    var kemail = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var kcon = document.getElementById("country").value;
    var kstate = document.getElementById("state").value;
    const createdAt = new Date().toLocaleString();
    
   // const updatedAt = new Date().toLocaleString();
  

    // var user = {
    //   Name: kname,
    //   Email: kemail,
    //   Password: pass,
    //   Country: kcon,
    //   State: kstate,
    //   createdAt: createdAt,
    //   role:"users"
    //   //updatedAt: updatedAt
    // };

    // var users = JSON.parse(localStorage.getItem("users")) || [];
    // users.push(user);
    // localStorage.setItem("users", JSON.stringify(users));

    //alert("Signup successful");
    
    // localStorage.setItem("user",JSON.stringify(storage));
  } else {
    alert("Some fields are empty.");
  }
}


//login
function check() {
 //debugger
  //var loginForm = document.getElementById("login");
  var emailid = document.getElementById("mailid").value;
  var password = document.getElementById("userpassword").value;

  var users = JSON.parse(localStorage.getItem("users"))||[];
  for(var i=0;i<users.length;i++){
    var record=users[i];
   // console.log("dhfkjsjg");
    if(record.Email===emailid && record.Password===password){
     if(emailid=="vikram@gmail.com"){
       record.role="admin"
     }
     var logger=sessionStorage.setItem("logusers", JSON.stringify(record));
      matched=true;
      alert("LOGIN SUCCESS");
      window.location.href = "home.html";
      break;
      
    }

  // var foundUser = users.find(function (user) {
  //   return user.Email === emailid && user.Password === password;
  // });

  // if (foundUser) {
    // var existingSessionData = JSON.parse(sessionStorage.getItem("usersSession")) || [];
    // existingSessionData.push(foundUser);
        
    // sessionStorage.setItem("usersSession", JSON.stringify(existingSessionData));
  //   alert("Login successful. Redirecting to the Home Page...");
  //   if (foundUser.Role === "admin") {
  //     window.location.href = "user.html";
  //   } else {
  //     window.location.href = "home.html";
  //   }
  // } 
  // else {
  //   alert("Please provide valid credentials");
  // }
  
}}


// function forgotpassword() {
//   var email = document.getElementById("mailf").value;
//   var newPassword = document.getElementById("newPassword").value;
//   var users = JSON.parse(localStorage.getItem("users")) || [];
//   var foundUser = users.filter(user => user.Email === email);
//   if (foundUser[0]) {
//     //foundUser.Password = newPassword;
//     foundUser[0].Password=newPassword;
//     localStorage.setItem("users", JSON.stringify(users));
//     alert("Password has been updated successfully.");
//   } 
//   else {
//     alert("No user found with the provided email address.");
//   }
  
// }


function deleteUser() {
  var email=document.getElementById("mailf").value;
  var users=JSON.parse(localStorage.getItem("users"));
  var foundUser=users.filter(user => user.Email !== email);
  if (foundUser[0]) {
    localStorage.setItem("users", JSON.stringify(foundUser));
    alert("User has been deleted successfully.");
  } 
  else {
    alert("No user found with the provided email address.");
  }
}

function deleteAll(){
  localStorage.removeItem("users");
  alert("cleared");
}




//state,country,code
var stateSl=document.getElementById("state");
function states(){
    var countrySelect = document.getElementById('country');
    var sc = countrySelect.value;
    stateSl.innerHTML = '<option value="">Select State</option>';
  if (sc == 'USA') {
    UsStates();
  } 
  else if(sc == 'IND'){
    IndStates();
  }
  else if(sc == 'UK'){
    UkStates();
  }
}
function UsStates() {
  var usStates = ['Alaska', 'Arizona','Delaware', 'Florida', 'Georgia'];
  for (var i = 0; i<usStates.length; i++) {
    var option = document.createElement('option');
    option.value = usStates[i];
    option.textContent = usStates[i];
    stateSl.append(option);
  }
}
function IndStates() {
  var indStates = ['Assam', 'Jammu','Jharkhand', 'Kerala', 'Tamilnadu'];
  for (var i = 0; i<indStates.length; i++) {
    var option = document.createElement('option');
    option.value = indStates[i];
    option.textContent = indStates[i];
    stateSl.append(option);
  }
}
function UkStates() {
  var ukStates = ['Ireland', 'England','Wales', 'Scotland'];
  for (var i = 0; i<ukStates.length; i++) {
    var option = document.createElement('option');
    option.value = ukStates[i];
    option.textContent = ukStates[i];
    stateSl.append(option);
  }
}

const countryCodes = {
  USA: "+1",
  IND: "+91",
  UK: "+44"
};

function updateCountryCode() {
  const countryDropdown = document.getElementById("country");
  const countryCodeDropdown = document.getElementById("countryCode");
  const country = countryDropdown.value;
  countryCodeDropdown.innerHTML = "";
  if (country) {
    const countryCode = countryCodes[country];
    if (countryCode) {
      const option = document.createElement("option");
      option.value = countryCode;
      option.textContent = countryCode;
      countryCodeDropdown.append(option);
    }
  }
}




  // <div class="row mb-3">
  //               <label for="mobile-number" class="form-label">Mobile Number:</label>
  //               <div class="input-group">
  //                   <span class="input-group-text">+</span>
  //                   <input type="text" class="form-control" id="mobile-number" name="mobile-number" required pattern="[0-9]+" maxlength="12" required>
  //               </div>
  //           </div>





  // function matchPassword() {  
  //   var pw1 = document.getElementById("password");  
  //   var pw2 = document.getElementById("confirmPassword");  
  //   if(pw1 != pw2)  
  //   {   
  //     alert("Passwords did not match");  
  //   } else {  
  //     alert("Password created successfully");  
  //   }  
  // }  


  //password and confirm password in signup
  window.addEventListener('DOMContentLoaded', (event) => {
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirmPassword');
    const message = document.getElementById('message');

    confirmPasswordField.addEventListener('input', (event) => {
      const password = passwordField.value;
      const confirmPassword = confirmPasswordField.value;
      if (password === confirmPassword && isPasswordValid(password)) {
        message.textContent = 'Passwords match and are valid.';
        message.style.color = 'green';
      } else {
        message.textContent = 'Passwords do not match or do not meet the requirements.';
        message.style.color = 'red';
      }
    });
    function isPasswordValid(password) {
      // const password = passwordField.value;
      // const confirmPassword = confirmPasswordField.value;
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return passwordRegex.test(password);
    }
  });



    // name,email 
    window.addEventListener('DOMContentLoaded', function() {
      var nameInput = document.getElementById("name");
      var nameError = document.getElementById("nameError");
      var emailInput = document.getElementById("email");
      var emailError = document.getElementById("emailError");
  
      nameInput.addEventListener('input', function() {
          if (nameInput.value.length <= 2) {
              nameError.style.display = "inline";
          } else {
              nameError.style.display = "none";
          }
      });

      emailInput.addEventListener('input', function() {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailError.style.display = "inline";
        } else {
            emailError.style.display = "none";
        }
    });
      
      document.getElementById("signup").addEventListener('submit', function() {
          if (nameInput.value.length <= 2) {
              nameError.style.display = "inline";
          }

          var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(emailInput.value)) {
              emailError.style.display = "inline";
          }
      });
  });
  
  

  
  
//   var users=JSON.parse(localStorage.getItem("users"));
//   var tableBody=document.getElementById("userTable");
//   users.forEach(function(user) {
//       var row=tableBody.insertRow();
//      // row.insertCell()= user.Name; 
//       row.insertCell().textContent=user.Name;
//       row.insertCell().textContent=user.Email;
//       row.insertCell().textContent=user.Password;
//       row.insertCell().textContent=user.Country;
//       row.insertCell().textContent=user.State;
//       row.insertCell().textContent=user.createdAt;
//       var editCell=row.insertCell();
//       var editButton=document.createElement("button");
//       editButton.textContent="Edit";
//       editButton.addEventListener("click",function() {
//           openEditModal(user);
//       });
//       editCell.appendChild(editButton);
//       row.insertCell().textContent=user.updatedAt;

//  });
// editButton.addEventListener("click", function() {
//            openEditModal(user);
//        });
// var editModal=document.getElementById("editModal");
// var editForm=document.getElementById("editForm");
// var cancelEditButton=document.getElementById("cancelEdit");
// var currentUser=[];

// function openEditModal(user) {
// //var currentUser=[];
// currentUser=user; 
// document.getElementById("editName").value=user.Name;
// document.getElementById("editEmail").value=user.Email;
// document.getElementById("editPassword").value=user.Password;
// document.getElementById("editCountry").value=user.Country;
// document.getElementById("editState").value=user.State;
// editModal.style.display = "block";
// }

// function closeEditModal() {
// editModal.style.display="none";
// }
// cancelEditButton.addEventListener("click",function(){
// closeEditModal();
// });

// editForm.addEventListener("submit",function() {
// var editedUser={
//  Name: document.getElementById("editName").value,
//  Email: document.getElementById("editEmail").value,
//  Password: document.getElementById("editPassword").value,
//  Country: document.getElementById("editCountry").value,
//  State: document.getElementById("editState").value,
//  //createdAt: document.getElementById("currentUser").value,
//  createdAt: currentUser.createdAt,
//  updatedAt: new Date().toLocaleString()
// };
//  var index=users.indexOf(currentUser); 
//  users[index]=editedUser;
//  localStorage.setItem("users", JSON.stringify(users));
//  var row = tableBody.rows[index];
//  row.cells[0].textContent=editedUser.Name;
//  row.cells[1].textContent=editedUser.Email;
//  row.cells[2].textContent=editedUser.Password;
//  row.cells[3].textContent=editedUser.Country;
//  row.cells[4].textContent=editedUser.State;
//  //row.cells[5].textContent=editedUser.createdAt;
//  row.cells[7].textContent=editedUser.UpdatedAt;
//  //closeEditModal();
// });






