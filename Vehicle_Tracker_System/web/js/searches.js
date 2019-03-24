function search_user() {
    console.log("busqueda de usuarios llamada!");
    var usuario = document.getElementById("delete_ced").value;


    var AJAX_req = new XMLHttpRequest();
    url = "/Vehicle_Tracker_System/Searching_servlet?usuario=" + usuario;
    AJAX_req.open("POST", url, true);
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AJAX_req.onreadystatechange = function () {
        if (AJAX_req.readyState === 4 && AJAX_req.status === 200) {
            show_user_delete(AJAX_req.responseText);
        }
    };
    AJAX_req.send();

}
// SI DAMOS CLICK EN EL BOTON BUSCAR EVHICULO, NOS DEVUELVE LOS DATOS DE DICO VEHICULO
// POR ESO OCUPAMOS ESTA FUCNION LA CUAL MUESTRA UNA TABLA CON UNA TUPLA QUE CONTIENE LOS DATOS DE DICHO VEHICULO.

function show_user_delete(textoJSON) {

    console.log("Se ha llamado la busqueda de puestos correctamente");

    var datos = JSON.parse(textoJSON);

    var table_body = document.getElementById("body_search_delete");
    var table_head = document.getElementById("head_search_delete");
    var message = document.getElementById("messageDeleteUserAlert");

    if (table_head && table_body) {
        table_body.innerHTML = "";
        table_head.innerHTML = "";
        message.innerHTML = "";

        if (datos.usersJ.length !== 0) {
            message.innerText = "Resultados de la busqueda: ";
            var row = table_head.insertRow(-1);

            var cell = row.insertCell(-1);
            cell.innerText = "Cédula";
            cell = row.insertCell(-1);
            cell.innerText = "Nombre";
            cell = row.insertCell(-1);
            cell.innerText = "Apellidos";
            cell = row.insertCell(-1);
            cell.innerText = "Área";
            cell = row.insertCell(-1);
            cell.innerText = "Teléfono";
            cell = row.insertCell(-1);
            cell.innerText = "Email";
            cell = row.insertCell(-1);
            cell.innerText = "Dirección";

            table_body.innerHTML = "";

            for (var i = 0; i < datos.usersJ.length; i++) {
                var new_row = table_body.insertRow(-1);
                new_row.setAttribute("scope", "row");

                // Celda para mostrar cedula
                var cell_id = new_row.insertCell(-1);
                cell_id.innerText = datos.usersJ[i].id;

                // Celda para nombre
                var cell_name = new_row.insertCell(-1);
                cell_name.innerText = datos.usersJ[i].nombre;

                var cell_last_name = new_row.insertCell(-1);
                cell_last_name.innerText = datos.usersJ[i].surname + " " + datos.usersJ[i].second_surname;

                var cell_area = new_row.insertCell(-1);
                cell_area.innerText = datos.usersJ[i].area;

                var cell_cellphone = new_row.insertCell(-1);
                cell_cellphone.innerText = datos.usersJ[i].telefono;

                var cell_email = new_row.insertCell(-1);
                cell_email.innerText = datos.usersJ[i].email;

                var cell_address = new_row.insertCell(-1);
                cell_address.innerText = datos.usersJ[i].direccion;

                var cell_button = new_row.insertCell(-1);
                var icon_btn = document.createElement("i");


                var btn2 = document.createElement("BUTTON");
                btn2.setAttribute("class", "btn btn-ligth");
                btn2.setAttribute("type", "submit");
                btn2.setAttribute("id", "delete_button");
                btn2.setAttribute("name", datos.usersJ[i].id);
                btn2.addEventListener("click", delete_User, true);
                icon_btn.setAttribute("class", "fa fa-trash");
                icon_btn.setAttribute("id", datos.usersJ[i].id);
                icon_btn.style = "font-size:24px; color:red;";
                btn2.appendChild(icon_btn);

                cell_button.appendChild(btn2);

            }

        } else {
//            message.innerText = "No existe un usuario con esta cédula";
            var messageDeleteUserAlert = document.getElementById("messageDeleteUserAlert");
            if (messageDeleteUserAlert) {
                var div_alert = document.createElement("DIV");
                div_alert.setAttribute("class", "alert alert alert-danger");
                var btn_alert = document.createElement("BUTTON");
                btn_alert.setAttribute("class", "close");
                btn_alert.setAttribute("data-dismiss", "alert");
                var span = document.createElement("SPAN");
                span.innerHTML = "&times;";
                btn_alert.appendChild(span);

                div_alert.appendChild(btn_alert);
                div_alert.appendChild(document.createTextNode("No existe un usuario con esta cédula"));
                messageDeleteUserAlert.appendChild(div_alert);
            }

        }
    }
}

function show_error_delete_user() {
    var message = document.getElementById("messageDeleteUserAlert");
    var input_delete = document.getElementById("delete_ced");
    var messageDeleteUserAlert = document.getElementById("messageDeleteUserAlert");

    if (message && input_delete && messageDeleteUserAlert) {
        message.innerText = "";
        input_delete.value = "";
        messageDeleteUserAlert.innerHTML = "";
    }
}

// Método para buscar la placa del vehículo a eliminar
function search_vehicle() {
    var plaque = document.getElementById("delete_vehicle").value;


    var AJAX_req = new XMLHttpRequest();
    url = "/Vehicle_Tracker_System/Searching_Servlet_Vehicles?plaque=" + plaque;
    AJAX_req.open("POST", url, true);
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AJAX_req.onreadystatechange = function () {
        if (AJAX_req.readyState === 4 && AJAX_req.status === 200) {
            show_vehicle_delete(AJAX_req.responseText);
        }
    };
    AJAX_req.send();


}

//FUNCION PARA MOSTRAR EL VEHICULO A ELIMINAR
function show_vehicle_delete(textoJSON) {

    var datos = JSON.parse(textoJSON);

    var table_body = document.getElementById("body_vehicle_search_delete");
    var table_head = document.getElementById("head_vehicle_search_delete");
    var message = document.getElementById("vehicle_message");
    var message2 = document.getElementById("message2");
    
    if (table_head && table_body) {
        table_body.innerHTML = "";
        table_head.innerHTML = "";
        message.innerHTML = "";

        if (datos.vehiculos.length !== 0) {
            message2.innerText = "Resultados de la busqueda: ";
            var row = table_head.insertRow(-1);

            var cell = row.insertCell(-1);
            cell.innerText = "Placa";
            cell = row.insertCell(-1);
            cell.innerText = "Modelo";
            cell = row.insertCell(-1);
            cell.innerText = "Marca";
            cell = row.insertCell(-1);
            cell.innerText = "Año";
            cell = row.insertCell(-1);

            table_body.innerHTML = "";

            for (var i = 0; i < datos.vehiculos.length; i++) {
                var new_row = table_body.insertRow(-1);
                new_row.setAttribute("scope", "row");

                var cell_plaque = new_row.insertCell(-1);
                cell_plaque.innerText = datos.vehiculos[i].plaque;

                var cell_model = new_row.insertCell(-1);
                cell_model.innerText = datos.vehiculos[i].model;

                var cell_brand = new_row.insertCell(-1);
                cell_brand.innerText = datos.vehiculos[i].brand;

                var cell_year = new_row.insertCell(-1);
                cell_year.innerText = datos.vehiculos[i].year;


                var cell_button = new_row.insertCell(-1);
                var icon_btn = document.createElement("i");


                var btn2 = document.createElement("BUTTON");
                btn2.setAttribute("class", "btn btn-ligth");
                btn2.setAttribute("type", "submit");
                btn2.setAttribute("id", "delete_button");
                btn2.setAttribute("name", datos.vehiculos[i].plaque);
                btn2.addEventListener("click", delete_Vehicle, true);
                icon_btn.setAttribute("class", "fa fa-trash");
                icon_btn.setAttribute("id", datos.vehiculos[i].plaque);
                icon_btn.style = "font-size:24px; color:red;";
                btn2.appendChild(icon_btn);

                cell_button.appendChild(btn2);

            }

        } else {
            var div_alert = document.createElement("DIV");
            var btn_alert = document.createElement("BUTTON");
            btn_alert.setAttribute("class", "close");
            btn_alert.setAttribute("data-dismiss", "alert");
            var span = document.createElement("SPAN");
            span.innerHTML = "&times;";
            btn_alert.appendChild(span);
            div_alert.appendChild(btn_alert);
            div_alert.appendChild(document.createTextNode("No se han encontrado resultados"));
            div_alert.setAttribute("class", "alert alert alert-danger");
            message.appendChild(div_alert);
        }
    }
}
function clear_messaje_vehicle() {
    //ESTA FUNCION AL DAR CLCIK SOBRE EL INPUT QUITA EL MENSAJE DE NO HAY RESULTADOS.
    var message = document.getElementById("vehicle_message");
    message.innerText = "";
}
function deleteVehicle() {
    var eliminar = confirm("¿Está seguro que desea eliminar este vehículo?");
    if (eliminar) {

    } else {

    }
}