// io - navigation button 
const navigationButton = document.getElementById("navigation-button");
const mainTitle = document.getElementById("main-title");
const iconsBar = document.getElementById("icons-bar");

const navButtonObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const intersecting = entry.isIntersecting;
      intersecting ? navigationButton.classList.remove("navigation-button-large") : navigationButton.classList.add("navigation-button-large");
      intersecting ? iconsBar.style.display ="inline" : iconsBar.style.display = "none";
    })
});

navButtonObserver.observe(mainTitle);

// io - show text with fade-in effect
elementsObserver = new IntersectionObserver(entries => {
    for(let i = 0; i<=entries.length;i++){
        setTimeout(()=>{
            const {isIntersecting,target} = entries[i];
            target.style.opacity = isIntersecting && "1";
        },`${i+"99"}`)
    }
});

for(let element of document.getElementsByClassName("slow-entry"))elementsObserver.observe(element);