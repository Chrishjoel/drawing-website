function check()
{
name = document.getElementById("name").value;
alpha = /^[A-Za-z]+$/

if(name=="")
{
    alert("please fill the name");
    return false;
}
if(!alpha.test(name))
{
    alert("only alphabets in name box");
    return false;
}

{
    addrress = document.getElementById("address").value;
    alpha = /^[A-Za-z0-9]+$/

}
if(addrress=="")
{
    alert("please fill the address");
    return false;
}

contact = document.getElementById("contact").value;
alpha = /^[0-9]+$/

if(contact=="")
{
    alert("please fill the contact no");
    return false;
}
if(!alpha.test(contact))
{
    alert("only numbers in contact box");
    return false;
}


}
