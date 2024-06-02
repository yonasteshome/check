var color=document.getElementById("button").innerHTML;
color=color.toString()
// change the background color of the page
function change(){
    document.getElementById("button").addEventListener("click",function(){
        if(color=="dark"){
            document.getElementById("nav-color").style.backgroundColor="white";
            document.getElementById("nav-color").style.color="black"
            color="white"
            document.body.style.background="white";
            document.getElementById("container-fluid").style.color="black"
            document.getElementById("p").style.color="black"
            document.getElementById("n").style.color="black"
            document.getElementById("a").style.color="black"
            document.getElementById("s").style.color="black"
            document.getElementById("skill-h1").style.color="black"
            

        }
        else if(color=="white"){
            document.getElementById("nav-color").style.backgroundColor="black";
            document.getElementById("nav-color").style.color="white"
            color="black"
            document.body.style.background="black";
            document.getElementById("container-fluid").style.color="white"
            document.getElementById("p").style.color="white"
            document.getElementById("n").style.color="white"
            document.getElementById("a").style.color="white"
            document.getElementById("s").style.color="white"
            document.getElementById("skill-h1").style.color="white"

        }
    })
    }
change();
var content=document.getElementById("para").textContent;
var temp=document.getElementById("para");
temp.textContent="";
function result(isWriting,i,text){
    if(isWriting){
        if(content.length>i){
            temp.textContent+=text.charAt(i);
        setTimeout(() => result(true,i+1,content),100)
        }
        else{
            setTimeout(() => result(false,content.length-1,content),100)
        }
    }
    else{
        if(i>=0){
        temp.textContent=text.substring(0,i);
        setTimeout(() => result(false,i-1,text),100)
    }
        else{
            setTimeout(() => result(true,0,content),100)
        }
}

}
result(true,0,content);
const rangeFills = document.querySelectorAll('.range-fill');
rangeFills.forEach(function(rangeFill, index) {
  const percentages = [95, 50, 70, 80];
  rangeFill.addEventListener('animationend', function() {
    const fillPercentage = (rangeFill.clientWidth / rangeFill.parentNode.clientWidth) * 100;
  });
});
