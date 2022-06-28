let marte = document.querySelector("#marte");

// MARTE
marte.addEventListener("mouseover", function( event ) {

    marte.setAttribute('src', '../../../assets/marte-real.png')
} );

marte.addEventListener("mouseout", function(event) {

    marte.setAttribute('src', '../../../assets/marte.png');
} );