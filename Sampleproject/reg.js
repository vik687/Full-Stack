function myfun()
{
    var user=document.getElementById("txtUsername").value;
    var email=document.getElementById("txtEmailid").value;
    var mobile=document.getElementById("txtMobile").value;
    var join=document.getElementById("txtjoin").value;
    var pass=document.getElementById("txtPassout").value;
    var roll=document.getElementById("txtRollno").value;
    var e=/^[a-zA-Z0-9._-]{6,12}[@][a-z]{3,15}[.][a-z]{2,6}$/;
    var r=/^[2][2][1][7][1][0][3][0-9]{2}[0-9]{3}$/;
    var m=/^[6-9][0-9]{9}$/;
    var j=/^[2][0][1][7]$/;
    var p=/^[2][0][2][1]$/;
    if(e.test(email)&&m.test(mobile)&&j.test(join)&&p.test(pass)&&r.test(roll))
    {
        window.alert("Registration Successful");
    }
    else{
        window.alert("Registration Unsuccessful");
    }
}