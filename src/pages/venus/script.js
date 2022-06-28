let venus = document.querySelector("#venus");

// VENUS
venus.addEventListener("mouseover", function( event ) {

    venus.setAttribute('src', '../../../assets/venus-real.png')
} );

venus.addEventListener("mouseout", function(event) {

    venus.setAttribute('src', '../../../assets/venus.png');
} );