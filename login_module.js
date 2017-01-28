function validForm() {
    return (validName() && validEmail());
}
function  validName() {
    var x=document.forms["myForm"]["fname"].value;
    if(x==""){
        alert("name must be filled");
        return false;
    }

    return true;
}

function  validEmail() {
    var x=document.forms["myForm"]["email"].value;
    if(x==""){
        alert("email must be filled");
        return false;
    }

    return true;
}
