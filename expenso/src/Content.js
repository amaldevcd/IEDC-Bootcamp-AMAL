import React from 'react';

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


function Content()
{
    return(
            <div>
                <div class="activity" id="start">
                    <form>
                        <legend style={{fontSize: "38px" , color:"#8ac926"}}>ADD EXPENSES AND EARNINGS HERE</legend><br/>
                    Add expenses : <input type="number" placeholder="Enter the amount" id="ex" />  <input type="button" value="Add" onClick={Addex} /><br/><br/>
                        Add earnings : <input type="number" placeholder="Enter the amount " id="save" /> <input type="button" value="Add" onClick={Addsave} /><br/><br/>
                        <input type="reset" value="Delete all" onClick={dlt} />&nbsp;
                    <input type="button" value="List  all" onClick={listall} />
                        <br/><br/>Balance : <h6 id="balan" style={{color: "#8ac926"}}></h6>
                        <input type="button" value="Total balance" onClick={balance} />
                    </form>
                </div>
            </div>
    );
    
}

export default Content;

