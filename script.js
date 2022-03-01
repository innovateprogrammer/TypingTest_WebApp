
/*---------------------------Typing test coderzdevs-------------*/
var words=[];
var input;
var l=0;
var l2=0;
var e=0;
var sec=0;
var time=0;
var userwords=[];
var sentence;
window.onload=function(){
    inputt=document.getElementById("inp");
    window.alert("Once done ...Just Press Enter to Submit !!!!");
    document.getElementById('retry').disabled=true;
    inputt.addEventListener("click",start);
    inputt.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        document.getElementById('inp').disabled=true;
        stop()
    }

    
});

  }

function start()
{
    document.getElementById('retry').disabled=false;
    words=sentence.split(" ");
    l=words.length;
    time=setInterval(count,1000);
}
function count()
{
    sec+=1
}
function reset()
{
    clearInterval(time);
    document.getElementById('retry').disabled=true;
    document.getElementById('inp').disabled=false;
    document.getElementById('inp').value='';
    document.getElementById('spd').innerHTML=`Here`;
    document.getElementById('acc').innerHTML=`Here`;
    e=0;
    sec=0;
    userwords=[];



    
}
function stop()
{
    var usersentence=document.getElementById("inp").value;
    userwords=usersentence.split(" ")
    l2=userwords.length;
    for(i=0;i<=l;i++)
    {
        if(words[i]!=userwords[i])
        {
            e+=1;
        }
    }
    acc=((l-e)/l)*100;
    ps=l2/sec;
    spd=ps*60;
    spd=spd.toFixed(2);
    acc=acc.toFixed(2);
    document.getElementById('spd').innerHTML=`The Speed is ${spd} W/m`;
    document.getElementById('acc').innerHTML=`The Accuracy is ${acc} %`;

}


$(document).ready(function() 
{
		$.getJSON('https://baconipsum.com/api/?callback=?', 
			{ 'type':'meat-and-filler', 'start-with-lorem':'1', 'paras':'1' }, 
			function(baconGoodness)
		{
			if (baconGoodness && baconGoodness.length > 0)
			{
				$("#sent").html('');
				for (var i = 0; i < baconGoodness.length; i++)
					sentence="<p>" + baconGoodness[i] +"</p>";
                document.getElementById('sent').innerHTML=sentence;
			}
		});
	
});







