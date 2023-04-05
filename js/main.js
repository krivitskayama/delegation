document.querySelector(".list__container").addEventListener("click",(event)=>{
    document.querySelector(".list__container").classList.add("list__container_min");
    if(event.target.tagName!="UL")event.target.classList.toggle("hide");
    if (event.target.tagName=="UL") {
        const hhid=document.querySelectorAll(".list__item");
        for (const t of hhid){t.classList.remove("hide");}
    };
  
 });



 const collect=document.querySelector(".div_cont");
 
 collect.addEventListener("mouseover",(event)=>{
        if (event.target.tagName=="BUTTON")
            event.target.classList.toggle("st")})

const dyn_batton=document.createElement("button");
dyn_batton.innerHTML="динамическая кнопочка";
dyn_batton.classList.add("item_cont");
document.querySelector(".div_cont").append(dyn_batton);
