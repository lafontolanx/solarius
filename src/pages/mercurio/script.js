let mercurio = document.querySelector("#mercurio");

// MERCURIO
mercurio.addEventListener("mouseover", function( event ) {

    mercurio.setAttribute('src', '../../../assets/mercurio-real.png')
} );

mercurio.addEventListener("mouseout", function(event) {

    mercurio.setAttribute('src', '../../../assets/mercurio.png');
} );


