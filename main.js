let m=document.querySelectorAll(".moles");
//console.log(m);
let scoreBox=document.querySelector(".score")
//console.log(scoreBox);
let timeBox=document.querySelector(".timer");
//console.log(timeBox);
let counter=timeBox.textContent;
//console.log(counter);
let molecBox=document.querySelector(".molenum")
//console.log(molecBox);
var hbox=document.querySelector(".highsc");
console.log(hbox)
let mArr= Array.prototype.slice.call(m);
//console.log(mArr);
let randomNum;
let hitpos;
var sco=0;
let mcount=0;
function game(){
	//debugger;
	mArr.forEach(curr=>{
		//console.log(curr);
		curr.classList.remove("moles-active");
	});

	randomNum=Math.floor(Math.random()*mArr.length);
	//console.log(mArr[randomNum]);
	mArr[randomNum].classList.add("moles-active");
	hitpos = mArr[randomNum].id;
	//console.log(hit);
	mcount++;
	molecBox.textContent=mcount;
}	

function score() {
	mArr.forEach(curr=>{
		//console.log(curr);
		curr.addEventListener("click",function(){
			//console.log(curr);
			if(hitpos==curr.id)
				{
					//console.log(hit);

					sco++; 
					//console.log(sco);
					scoreBox.textContent=sco;
				}
		} )
	})
}

score();
let interval;
function timer(){

	if (counter>0) 
	{
		counter--;
		timeBox.textContent=counter;
	}
	else
	{
		clearInterval(interval);
		mArr[randomNum].classList.remove("moles-active")
		highsc();
	}
}

function update(){
	var c=getcookie(document.cookie);
	var z=0;
	if(c==undefined)
	{
		hbox.textContent=z;
		game();
		timer();
	}
	else
	{
	hbox.textContent=getcookie(document.cookie);
	game();
	timer();
	}
}
//interval=setInterval(timer,1000);
document.querySelector(".start").addEventListener("click", function(){
	
	if (!interval) {

		interval=setInterval(update,720);

	}
}) 

document.querySelector(".reset").addEventListener("click",function(){

	location.reload();
	//saveCookie();
	
})
//var myCookies={};
function saveCookie(){
	//console.log("score is"+sco);
	//myCookies["_points"]=sco;
	//console.log(myCookies["_points"]);
	document.cookie="";
	var expiresAttrib = new Date(Date.now() + 60 * 1000).toString();
    cookieString = "highest" + "=" + sco+ " ; " + expiresAttrib + "; " + "SameSite=Lax";
    document.cookie = cookieString;
    //console.log(document.cookie);
	//document.getElementById('points').innerHtml=document.cookie;
}

function getcookie(str){
	var ca=str.split("=");
	return ca[1];
}
function highsc()
{
	var c=getcookie(document.cookie);
	if(c==undefined)
	{
		saveCookie();
		hbox.textContent=getcookie(document.cookie);
	}
	else if(c<sco){
		saveCookie();
		hbox.textContent=getcookie(document.cookie);
	}
	else if(c>sco)
	{
		hbox.textContent=getcookie(document.cookie);
	}
}
