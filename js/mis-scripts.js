// Service Worker
if ('serviceWorker' in navigator) {
	console.log('Si está disponible el serviceWorker en tu navegador');
	navigator.serviceWorker.register('./js/serviceworker.js')
						   .then(res => console.log('El serviceWorker se ha cargado correctamente', res))
						   .catch(err => console.log('El serviceWorker no se ha podido registrar', err))

  }else{
    console.log('PROBLEMAS para usar serviceWorker en tu navegador');
  }

//Swipper.js
$(function(){
    
  var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

})

// Anime.js
const  leer_mas = document.querySelector("#leer_mas");

animacion= anime.timeline({
  targets : '#leer_mas',    
  loop:true,
});

animacion.add({
  //rotate:"360deg",
  scale:[1.2,1],
  duration:1500,
  translateX: 30,
  direction: 'alternate',
})


//Leaflet
//aqui la variable tiene un nombre diferente pero el id es el mismo
var   map = L.map('mapid').setView([19.428044616746142, -99.18287568534622], 13);

//aqui la vista inicial es de todo el mundo
// var map = L.map('mapid').fitWorld();

//Este es el provedor del mapa
L.tileLayer('https://{s}.tile.opentopomaorg/{z}/{x}/{y}.png', {
	maxZoom: 25,
	attribution: 'Map data: OpenStreetMap'
}).addTo(map);

L.marker([19.428044616746142, -99.18287568534622]).addTo(map)
    .bindPopup('!Aquí estamos, <br> ven a visitarnos!')
    .openPopup();
    

