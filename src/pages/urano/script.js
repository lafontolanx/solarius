let urano = document.querySelector("#urano");

// URANO
urano.addEventListener("mouseover", function( event ) {

    urano.setAttribute('src', '../../../assets/urano-real.png')
} );

urano.addEventListener("mouseout", function(event) {

    urano.setAttribute('src', '../../../assets/urano.png');
} );