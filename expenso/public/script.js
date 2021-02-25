var Sumex=0;
var Sumsave=0;

// for adding all the expenses
function Addex()
{
    var entex=document.getElementById("ex").value;
    Sumex=Sumex + Number(entex);
    console.log(Sumex);
}

// for adding all the savings
function Addsave()
{
    var entsave=document.getElementById("save").value;
    Sumsave=Sumsave + Number(entsave);
    console.log(Sumsave);
}

// for deleting all value
function dlt()
{
    Sumex=0;
    Sumsave=0;
}

// list all
function listall()
{
    window.alert("ALL EXPENSE :  " + Sumex + "\nALL SAVINGS : " + Sumsave );
}

function balance()
{
var bal=Sumsave-Sumex;
if(bal < 0)
{
document.getElementById("balan").innerHTML=0;
}
else
{
document.getElementById("balan").innerHTML=bal;
}
}