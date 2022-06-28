let saturno = document.querySelector("#saturno");

// SATURNO
saturno.addEventListener("mouseover", function( event ) {

    saturno.setAttribute('src', '../../../assets/saturno-real.png')
} );

saturno.addEventListener("mouseout", function(event) {

    saturno.setAttribute('src', '../../../assets/saturno.png');
} );