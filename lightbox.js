// Åpner lightbox - Funksjon som finner et element via Id og setter display til block
function openLightbox() {
  document.getElementById("galleryLightbox").style.display = "block";
}

// Lukker lightbox - Funksjon som finner element via Id og setter display til None
function closeLightbox() {
  document.getElementById("galleryLightbox").style.display = "none";
}

let slideIndex = 1; // Variabel som kan endres for å endre hvilket bilde som vises
showSlides(slideIndex);

// Funksjon som kaller på showSlides med enten 1 eller -1 for å gå til neste/forrige
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Funksjon som brukes til thumbnails raden på lightbox for å gå direkte til et bilde.
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i; // i for index, deklareres her iom 2 for loops blir brukt i funksjonen

  // slides og dots kan være const iom de ikke byttes på.
  // finner elementene lightbox_slides (selve store bildene) og demo (små thumbnails bilde-rad) fra dokumentet
  const slides = document.getElementsByClassName("lightbox_slides");
  const dots = document.getElementsByClassName("demo");

  // for next - Om nummeret går over antall bilder så går funksjonen tilbake til det første bildet
  if (n > slides.length) {
    slideIndex = 1;
  }

  // for previous - Om bruker er på første bildet og prøver å gå tilbake, sett current slide til siste bildet
  if (n < 1) {
    slideIndex = slides.length;
  }

  // for loop som går over alle slides og setter display til none - Bildet som er aktivt blir satt til block senere
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // for loop som setter hvert bilde i thumbnail raden til inaktiv - Bildet som er aktivt får sin thumbnail satt til aktiv til slutt
  for (i = 0; i < dots.length; i++) {
    dots[i].className.replace(" active", "");
  }
  // indekser i JS (og mange andre språk) starter på 0, så må ta - 1 for å få riktig indeks.
  // Kunne så klart ha startet med indeks på 0 tidligere i koden, men er lettere å forstå for folk som ikke kan kode at f.eks bilde 1 tilkaller currentSlide(1) istedenfor 0
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
