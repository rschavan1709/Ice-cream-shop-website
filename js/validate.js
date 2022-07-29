let fullnameNode=document.getElementById("fullname");
let addressNode=document.getElementById("address");
let contactnoNode=document.getElementById("contactno");
let emailidNode=document.getElementById("emailid");
let yourrequireNode=document.getElementById("yourreq");
let error1Node=document.getElementById("err1");
let error2Node=document.getElementById("err2");
let error3Node=document.getElementById("err3");
let error4Node=document.getElementById("err4");
let error5Node=document.getElementById("err5");
let arr=[error1Node,error2Node,error3Node,error4Node,error5Node];
for(let node of arr){
  node.style.color="red";
}
function validate1(){
    let fullname=fullnameNode.value;
    let regex=new RegExp("^[A-Za-z]*$");
    error1Node.innerHTML="";
    if(fullname===''){
        error1Node.innerHTML="<small>Full name is required</small>";
        fullnameNode.style.border="2px solid red";
        return false;
    }
    else if(regex.test(fullname)==false){
        error1Node.innerHTML="<small>Full name must have only letters</small>";
        fullnameNode.style.border="2px solid red";
        return false;
    }
    else{
        fullnameNode.style.border="2px solid green";
        return true;
    }
}

function validate2(){
    let address=addressNode.value;
    error2Node.innerHTML="";
    if(address===''){
        error2Node.innerHTML="<small>Address is required</small>";
        addressNode.style.border="2px solid red";
        return false;
    }
    else if(address.length>60){
        error2Node.innerHTML="<small> Address must be less than 60 Characters </small>";
        addressNode.style.border="2px solid red";
        return false;
    }
    else{
        addressNode.style.border="2px solid green";
        return true;
    }
}

function validate3(){
    let contactno=contactnoNode.value;
    error3Node.innerHTML="";
    let regex=new RegExp("^[0-9]{10}$");
    console.log(contactno);
    console.log(regex.test("contactno"));
    if(contactno===''){
        error3Node.innerHTML="<small>Contact number is required</small>";
        contactnoNode.style.border="2px solid red";
        return false;
    }
    else if(regex.test(contactno)===false){
        error3Node.innerHTML="<small>Contact number must be 10 digits number</small>";
        contactnoNode.style.border="2px solid red";
        return false;
    }
    else{
        contactnoNode.style.border="2px solid green";
        return true;
    }
}

function validate4(){
    let emailid=emailidNode.value;
    error4Node.innerHTML="";
    if(emailid===''){
        error4Node.innerHTML="<small>Email Id is required</small>";
        emailidNode.style.border="2px solid red";
        return false;
    }
    else if(!emailid.includes('@') || emailid.endsWith('@')){
        error4Node.innerHTML="<small>Please enter valid email id</small>";
        emailidNode.style.border="2px solid red";
        return false;
    }
    else{
        emailidNode.style.border="2px solid green";
        return true;
    }
}

function validate5(){
    let yourreq=yourrequireNode.value;
    error5Node.innerHTML="";
    if(yourreq===''){
        error5Node.innerHTML="<small>This field is required</small>";
        yourrequireNode.style.border="2px solid red";
        return false;
    }
    else if(yourreq.length>60){
        error5Node.innerHTML="<small> Requirements must be less than 60 Characters </small>";
        yourrequireNode.style.border="2px solid red";
        return false;
    }
    else{
        yourrequireNode.style.border="2px solid green";
        return true;
    }
}

function validateForm(){
    let val1=validate1();
    let val2=validate2();
    let val3=validate3();
    let val4=validate4();
    let val5=validate5();
    return (val1 && val2 && val3 && val4 && val5); 
}