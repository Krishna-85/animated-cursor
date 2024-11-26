var main = document.querySelector("#main")
var crsr = document.querySelector(".cursor")
var h1 = document.querySelector("h1")
const img = document.createElement('img');

  // Replace with your image path
// img.style.display = 'none';

// main.appendChild(img);

main.addEventListener("mousemove", function(dets){
     crsr.style.left = dets.x+ "px"
     crsr.style.top = dets.y+ "px"
    
})
h1.addEventListener("mouseover",function(){
    h1.innerHTML = "STUPID HAI"
    crsr.style.width  = '20vw' 
    crsr.style.height  = '20vw' 
    crsr.style.backgroundImage = `url(https://photosnow.org/wp-content/uploads/2024/04/shizuka-photo_9.jpg)`
    crsr.style.backgroundPosition = 'center'
    crsr.style.ObjectFit = 'cover'
     
})
 
h1.addEventListener("mouseout",function(){
    
    h1.innerHTML = "MOHINI"
    crsr.style.width  = '1vw' 
    crsr.style.height  = '1vw' 
    crsr.style.backgroundColor = 'white'
    
     
     
})


