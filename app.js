const arrows=document.querySelectorAll(".arrow");

const movielists=document.querySelectorAll(".movie-list")

arrows.forEach((arrow,i)=>{
    const itemLength=movielists[i].querySelectorAll("img").length;
    let clickCounter=0;
    arrow.addEventListener("click",()=>{
        const ratio=Math.floor(window.innerWidth/270);
        clickCounter++;
        if(itemLength-(4+clickCounter)+(4-ratio)>=0){
            movielists[i].style.transform=`translateX(${
                movielists[i].computedStyleMap().get("transform")[0].x.value-300}px)`;
        }
        else{
            movielists[i].style.transform="translateX(0)";
            clickCounter=0;
        }
        
    });
});

//toggle(switch to theme)

const slider=document.querySelector(".toggle-slider");
const items=document.querySelectorAll(".container,.movie-tilte,.navbar_container,.sidebar,.left-menu-icon,.toggle");

slider.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })
    slider.classList.toggle("active")
})