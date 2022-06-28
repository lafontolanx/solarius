let netuno = document.querySelector("#netuno");

// NETUNO
netuno.addEventListener("mouseover", function( event ) {

    netuno.setAttribute('src', '../../../assets/netuno-real.png')
} );

netuno.addEventListener("mouseout", function(event) {

    netuno.setAttribute('src', '../../../assets/netuno.png');
} );