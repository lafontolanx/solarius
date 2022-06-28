let jupiter = document.querySelector("#jupiter");

// JUPITER
jupiter.addEventListener("mouseover", function( event ) {

    jupiter.setAttribute('src', '../../../assets/jupiter-real.png')
} );

jupiter.addEventListener("mouseout", function(event) {

    jupiter.setAttribute('src', '../../../assets/jupiter.png');
} );