function validate() {    
    var fname = document.reg_form.fname;    
    var lname = document.reg_form.lname;    
    var gender = document.reg_form.gender;    
    var email = document.reg_form.email;    
    var password = document.reg_form.password; 
    var confirmpassword = document.reg_form.confirmpassword;    
    var skills = document.reg_form.skills;    

    if (fname.value.length <= 0) {    
        alert("Name is required");    
        fname.focus();    
        return false;    
    }    
    if (lname.value.length <= 0) {    
        alert("Last Name is required");    
        lname.focus();    
        return false;    
    }    
    if (gender.value.length <= 0) {    
        alert("Gender is required");    
        gender.focus();    
        return false;    
    }    
    if (email.value.length <= 0) {    
        alert("Email Id is required");    
        email.focus();    
        return false;    
    }    
    if (password.value.length <3) {    
        alert("Password is required");   
        return false;    
    }
    if (password.value!=confirmpassword.value) {    
        alert("Password & Confirm Password must be same");    
        return false;
    }        
    if (skills.value == "select course") {    
        alert("Skills is required");    
        skills.focus();    
        return false;    
    }    
    return true;    
}    