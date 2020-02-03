
const boxes = document.querySelectorAll('.box');
// console.log(boxes);

const observer = new IntersectionObserver(function(entries,observer){
    for(const entry of entries){
        // console.log(entry);
        if(entry.isIntersecting){
            console.log(entry);
            
            entry.target.className+=" salmon"
            // observer.unobserve(entry);
        }
    }
})

for (const box of boxes) {
    observer.observe(box);
}