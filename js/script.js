/* ========================== typing animation ========================= */
/* var typed = new Typed(".typing",{
    strings:["", "Web Designer","Graphic Designer", "Youtuber"],
    typeSpeed:100,
    Backspeed:60,
    loop:true
}) */
/* ========================== aside ========================= */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavlist = navList.length;

    for(let i=0; i<totalNavlist; i++){
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function(){
            for(let j=0; j<totalNavlist; j++){
                navList[j].querySelector("a").classList.remove("active")
            }
            this.classList.add("active")
        })
    }   