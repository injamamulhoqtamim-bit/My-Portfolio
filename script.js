

const text = "Injamamul Hoq";
let index = 0;

function typeEffect(){

if(index < text.length){
document.querySelector(".typing").innerHTML += text.charAt(index);
index++;
setTimeout(typeEffect,100);
}

}

typeEffect();

<script src="https://cdn.jsdelivr.net/npm/particles.js"></script>



particlesJS("particles-js", {

particles:{

number:{ value:80 },

size:{ value:3 },

move:{ speed:2 },

line_linked:{
enable:true
}

}

});

