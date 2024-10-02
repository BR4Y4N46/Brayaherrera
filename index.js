



function reproducirVideo() {
    const videoContainer = document.getElementById('videoContainer');
    const button = document.getElementsByClassName('boton-video-inicio');
    const buttonRedSocial = document.getElementsByClassName('botones_social');

    if (buttonRedSocial.length > 0) {
        buttonRedSocial[0].style.display = 'none';
    }

    if (button.length > 0) {
        button[0].style.display = 'none'; // Oculta el primer botón
    }
    videoContainer.style.display = 'block'; // Muestra el contenedor del video
}



function mostrarPDF() {
    // Ocultar todos los elementos de la clase 'containerhome1'
    const elementos = document.getElementsByClassName('containerhome1');
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].style.display = 'none';
    }
    
    // Mostrar el contenedor del PDF
    document.getElementById('pdf-container').style.display = 'block';
    console.log(elementos)
}



//gihub
document.getElementById('socialButton1').addEventListener('click', function() {
    window.open('https://github.com/BR4Y4N46', '_blank');
});


//likeding
document.getElementById('socialButton2').addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/brayan-estiven-amortegui-herrera-a5585b191/', '_blank');
});