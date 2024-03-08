const ourItemDiv=document.getElementsByClassName('item');
var openIcon=document.getElementsByClassName('iconOpen');
const closeIcon =document.getElementsByClassName('closeIcon');

// console.log(ourItemDiv);

for(let i=0; i<ourItemDiv.length; i++){
    // closeIcon[].style.display="none";
    var openIcon=document.getElementsByClassName('iconOpen');
    ourItemDiv[i].addEventListener('click',()=>{
        const result=ourItemDiv[i].classList.toggle("active");
        

    })
}