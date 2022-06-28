let terra = document.querySelector("#terra");

// TERRA
terra.addEventListener("mouseover", function( event ) {

    terra.setAttribute('src', '../../../assets/terra-real.png')
} );

terra.addEventListener("mouseout", function(event) {

    terra.setAttribute('src', '../../../assets/terra.png');
} );