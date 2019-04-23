/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function initdMap() {
//    //get api uses
//    var directionsService = new google.maps.DirectionsService;
//    var directionsDisplay = new google.maps.DirectionsRenderer;
//    //waypoints to add
//   var intermedios = [{location: {lat: 9.9948033, lng: -84.0982678}, stopover: true},
//    {location: {lat: 9.9930368, lng: -84.1096207}, stopover: true},
//    {location: {lat: 9.9962729, lng: -84.1118117}, stopover: true},
////    {location: {lat: 10.0002357, lng: -84.1062367}, stopover: true},
//    {location: {lat:10.0009845, lng: -84.1154571}, stopover: true},
//    {location: {lat: 10.0018053, lng: -84.1173553}, stopover: true},
//    {location: {lat: 9.9992132, lng: -84.1170881}, stopover: true},
//    {location: {lat: 9.9951037, lng: -84.1171391}, stopover: true},
//    {location: {lat: 9.9935142, lng: -84.1208358}, stopover: true},
//    {location: {lat: 9.9937611, lng: -84.1313862}, stopover: true},
//    {location: {lat:10.0043801, lng: -84.1521387}, stopover: true}
//
//];
//
//    //api map
//    var map = new google.maps.Map(document.getElementById('map'), {
//        zoom: 6,
//        center: {lat: intermedios[0].location.lat, lng: intermedios[0].location.lng}
//    });
//    //add map
//    directionsDisplay.setMap(map);
//
//    // set the new
//    //new Array(waypts[0].location.lat,waypts[0].location.lng)
//    directionsService.route({
//        origin: {lat: intermedios[0].location.lat, lng: intermedios[0].location.lng}, //db waypoint start
//        destination: {lat: intermedios[intermedios.length-1].location.lat, lng: intermedios[intermedios.length-1].location.lng}, //db waypoint end
//        waypoints: intermedios,
//        optimizeWaypoints: true,
//        travelMode: 'DRIVING'
//    }, function (response, status) {
//        if (status === google.maps.DirectionsStatus.OK) {
//            directionsDisplay.setDirections(response);
//        } else {
//            window.alert('Ha fallat la comunicació amb el mapa a causa de: ' + status);
//        }
//    });
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function initializeAPIComponents() {//CUANDO SE CARGA EL API, SE LLAMA ESTA FUNCION 
    //LA CUAL AGREGA UN EVENTO AL BOTON VER_RUTAS
    document.getElementById('btVerAct').addEventListener('click', showUbication);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function showUbication() {
    obtainRoute();//ETSA FUNCION CREA LAS CARTAS
//    initAllMaps();//ESTA FUNCION DIBUJA UN MAPA CON CADA RUTA EN CADA CARTA.
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function initAllMaps() {
//    //recorremos el contenedor de cartas para colocarle un mapa a cada una.
//    for (var card_number = 0; card_number < middle_points.length; card_number++) {
////        alert("dentro del for de initAllMaps");
//        initSingleMap1(card_number);//el parametro card_number, indica el numero de carta a la cual se le va a dibujar un mapa.
//    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function initSingleMap1(card_number) {//ESTA FUNCION DIBUJA UN MAPA EN UNA SOLA CARTA
//    var directionsDisplay = new google.maps.DirectionsRenderer;
//    var map = new google.maps.Map(document.getElementById("map" + (card_number + 1)), {
//        zoom: 18,
//        center: {lat: 10.000889, lng: -84.117115}
//    });
//    directionsDisplay.setMap(map);//Esta linea permite que el mapa que recibe por parametro se pinte en el 
//    //DirectionsRenderer.
//
////este funcion la llamamos para dibujar una ruta con los waypoints en el mapa.
//    drawSigleRouteOnMap(directionsDisplay, card_number);

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function drawSigleRouteOnMap(directionsrRenderService, card_number) {
//    var waypts = [];
//    var directionsService = new google.maps.DirectionsService;
//    for (var i = 0; i < middle_points[card_number].length; i++) {
//        waypts.push({
//            location: middle_points[card_number][i],
//            stopover: true     //el atributo stopover indica que una direccion es una direccion 
//                    //de parada verdadera, si esta en false es porque esa direccion es 
//                    //solo una referencia para que la ruta pase por ahi.
//        });
//    }
//    directionsService.route({
//        origin: middle_points[card_number][0],
//        destination: middle_points[card_number][i - 1],
//        waypoints: waypts,
//        optimizeWaypoints: true,
//        travelMode: 'DRIVING'
//    }, function (directionResult, status) {
//        if (status === 'OK') {
//            directionsrRenderService.setDirections(directionResult);//Ya el mapa esta pintado pero
//            //gracias a que DirectionsRenderer trabaja con MVC permite que se pinten los cambios que le hagamos
//
//            var route = directionResult.routes[0];
//            //ACA SE PUEDE MOSTRAR ALGÚN MENSAJE INDICANDO QUE EL MAPA SE CARGÓ BIEN.
//
//        } else {
//            window.alert('Directions request failed due to ' + status);
//        }
//    });
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function  obtainRoute() {
    var inputIdentify = document.getElementById("inputIdentify").value;
    var plate_id_select = document.getElementById("plate_id_select").value;
    url = "/Vehicle_Tracker_System/Consult_Vehicles?inputIdentify=" + inputIdentify + "&plate_id_select=" + plate_id_select ;

    var AJAX_req = new XMLHttpRequest();
    AJAX_req.open("GET", url, true);
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AJAX_req.onreadystatechange = function () {
        if (AJAX_req.readyState === 4 && AJAX_req.status === 200) {
            //drawRoute(AJAX_req.responseText);
            console.log("Sirve");
        }
    };
    AJAX_req.send();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function drawRoute(routesJSON) {
//
//    var routesJson = JSON.parse(routesJSON);
//    if (routesJson.routes.length > 0) {
//
//        var div_active_route = document.getElementById("div_active_route");
//        if (div_active_route) {
//            div_active_route.innerHTML = "";
//            for (var i = 0; i < routesJson.routes.length; i++) {
//                //AGREGAMOS LAS CALLES A UN ARRAY PARA LUEGO DE CREADAS LAS CARTAS SE DICUJA LA RUTAS CON ESTAS CALLES
//                //CADA ARRAY DE ACLLES PERTENECE A CADA RUTA, EN EL ORDEN EN EL QUE FUERON AGREGADAS AL ARRAY.
//                // if(routesJson.routes[i].streets !=="Unnamed Road, Provincia de Alajuela, Grecia, Costa Rica"){
//                middle_points.push(routesJson.routes[i].streets);
//                //}
//                // middle_points.push(routesJson.routes[i].streets);
//
//                var div_route_card = document.createElement("div");
//                //si queremos ver mas cartas o menos cartas en cada fila del div, debemos cambiar (col-md-6 col-sm-6 col-lg-6)
//                //de cada div que contine una carta.
//                div_route_card.setAttribute("class", "col-md-6 col-sm-6 col-lg-6"); //md y jg cambiarlos a 5
//                div_route_card.setAttribute("id", "divcarat1");
//
//                var route_card = document.createElement("div");
//                route_card.setAttribute("class", "card");
//                route_card.style = "margin:10px; ";
//
//                var card_header = document.createElement("div");
//                card_header.setAttribute("class", "card-header");
//                card_header.setAttribute("id", "carta_header");
//
//                var card_body = document.createElement("div");
//                card_body.setAttribute("class", "card-block");
//                card_body.setAttribute("id", "map" + (i + 1));//coloca el numero de la carta.
//                card_body.style = "height: 250px;"; //IMPORTANTE EN ESTA LINEA LE DAMOS LA ALTURA AL CUERPO DE LA CARTA.
//
//                var header_text_node = document.createElement("h4");
//                header_text_node.setAttribute("class", "card-title");
//                header_text_node.setAttribute("id", "titulo_carta");
//
////            var header_text = document.createTextNode("Ruta:  Municipalidad San Pablo Heredia - Ferretería Brenes.");
//                var header_text = document.createTextNode(middle_points[0][0]);
//                header_text_node.appendChild(header_text);
//
//                card_header.appendChild(header_text_node);
//
//                route_card.appendChild(card_header);
//                route_card.appendChild(card_body);
//                div_route_card.appendChild(route_card);
//
//                var footer_text_element = document.createElement("P");
//                footer_text_element.style = "font-family: serif; font-size:12pt; text-align: center;";
//                footer_text_element.setAttribute("class", "card-text");
//
//                var footer_text = document.createTextNode(routesJson.routes[i].date + "  " + routesJson.routes[i].endDate +
//                        "  HORA INICIO: " + routesJson.routes[i].beginHour + "  HORA FINAL:  " + routesJson.routes[i].endHour);
//
//                footer_text_element.appendChild(footer_text);
//
//                var card_footer = document.createElement("div");
//                card_footer.setAttribute("class", "card-footer");
//                card_footer.setAttribute("id", "carta_pie");
//
//                card_footer.appendChild(footer_text_element);
//
//                route_card.appendChild(card_footer);
//
//                div_active_route.appendChild(div_route_card);
//            }
//            //**********************
//            //MUY IMPORTANTE
//            //********************************
//            initAllMaps();//ESTA FUNCION DIBUJA UN MAPA CON CADA RUTA EN CADA CARTA.
//        }
//    } else {
//        document.getElementById("MessageToShow").innerHTML = "El vehículo placa " + document.getElementById("pk_plate").value + " no poseé rutas en la fecha " + document.getElementById("pk_date").value;
//        document.getElementById("errorMessageRoutes").hidden = false;
//        console.log("Sin rutas");
//    }

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FUNCION PARA LIMPIAR LA PANTALLA DE LA BUSQUEDA DE UN VEHICULO PARA ELIMINAR
function clear_screen_active() {
    var div_active_route = document.getElementById("div_active_route");
    var inputIdentify = document.getElementById("inputIdentify");
    if (div_active_route && inputIdentify) {
        clearAlertActive();
        div_active_route.innerHTML = "";
        inputIdentify.value = "";
    }

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function clearAlertActive() {
    document.getElementById("MessageToShow1").innerHTML = "";
    document.getElementById("errorMessageActive").hidden = true;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



