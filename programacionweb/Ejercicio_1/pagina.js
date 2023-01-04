function descargaArchivo(){
    // Obtener la instancia del objeto XMLHttpRequest
    if(window.XMLHttpRequest)
    {
      peticion_http = new XMLHttpRequest(); // una instancia en un navegador actual
    }
    else if(window.ActiveXObject)
    {
      peticion_http = new ActiveXObject("Microsoft.XMLHTTP"); // instancia en un navegador de m***dar
    }
    //Recogemos los elementos que queremos almacenar
    var nombre =document.getElementById("nombre").value;
    var voto = document.getElementById("voto");
    var index = voto.selectedIndex;
    voto = voto.options[voto.selectedIndex].innerHTML;
    if(nombre !="" && index !=0)
    {
        muestraContenido();
    }
    else
    {
        alert("Introduzca datos");
        return;
    }
    
    // Preparar la funcion de respuesta
    peticion_http.onreadystatechange = muestraContenido; //IMPORTANTE NO PONER () DE LA FUNCION!!
    
    // Realizar peticion HTTP
    peticion_http.open('GET','pagina1.php?nombre='+ nombre + '&puntaje=' + voto, true);
    peticion_http.send(null);
    
    //Muestra el contenido si los codigos son los adecuados (OK)
    function muestraContenido()
    {
        if(peticion_http.readyState == 4) 
        {
            if(peticion_http.status == 200)
            {
                document.body.innerHTML += peticion_http.responseText; //Muestra Contenido
            }
        }
    }
}