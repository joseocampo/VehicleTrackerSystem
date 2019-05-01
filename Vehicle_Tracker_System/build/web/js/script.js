var row_update_user = [];
var row_update_vehicle = [];

function show_areas() {
    var areas_select = document.getElementById("areas_select");
    if (areas_select) {
        areas_select.innerHTML = ""; //limpiamos el select para agregar los modelos de la otra marca.
        for (var i = 0; i < objects_areas.areas.length; i++) {
            var option = document.createElement("OPTION");
            if (i === 0) {
                //OPCION POR DEFECTO
                areas_select.appendChild(option);
            } else {
                option.setAttribute("value", objects_areas.areas[i].name);
                option.innerText = objects_areas.areas[i].name;
                areas_select.appendChild(option);
            }
        }
    }
}
function get_one_area(search_area) {
    for (var i = 0; i < objects_areas.areas.length; i++) {
        if (objects_areas.areas[i].name === search_area) {
            return i;
        }
    }
    return 0;
}

function show_brands() {
    var brans_select = document.getElementById("brans_select");
    if (brans_select) {
        brans_select.innerHTML = ""; //limpiamos el select para agregar los modelos de la otra marca.
        for (var i = 0; i < objects_brands.vehicles.length; i++) {
            var option = document.createElement("OPTION");
            if (i === 0) {
                //OPCION POR DEFECTO
                brans_select.appendChild(option);
            } else {
                option.setAttribute("value", objects_brands.vehicles[i].brand);
                option.innerText = objects_brands.vehicles[i].brand;
                brans_select.appendChild(option);
            }

        }

    }
}
function get_one_brand(search_brand) {
    for (var i = 0; i < objects_brands.vehicles.length; i++) {
        if (objects_brands.vehicles[i].brand === search_brand) {
            return i;
        }
    }
    return 0;
}
function show_years() {
    var f = new Date();

    var year_select = document.getElementById("year_select");
    if (year_select) {
        year_select.innerHTML = ""; //limpiamos el select para agregar los años.
        for (var i = 1979; i <= f.getFullYear(); i++) {
            var option = document.createElement("OPTION");
            if (i === 1979) {
                year_select.appendChild(option);  //OPCION POR DEFECTO
            } else {
                option.setAttribute("value", i);
                option.innerText = i;
                year_select.appendChild(option);
            }

        }

    }
}
function show_models() {
    var brans_select = document.getElementById("brans_select");

    var models_select = document.getElementById("models_select");
    var index_models = brans_select.selectedIndex;
    if (models_select) {
        models_select.innerHTML = ""; //limpiamos el select para agregar los modelos de la otra marca.
        for (var i = 0; i < objects_brands.vehicles[index_models].models.length; i++) {
            var option = document.createElement("OPTION");
            if (i === 0) {

                option.setAttribute("value", objects_brands.vehicles[index_models].models[i].name);
                option.setAttribute("selected", "selected");
                option.innerText = objects_brands.vehicles[index_models].models[i].name;
                models_select.appendChild(option);
            }

            option.setAttribute("value", objects_brands.vehicles[index_models].models[i].name);
            option.innerText = objects_brands.vehicles[index_models].models[i].name;
            models_select.appendChild(option);
        }

    }

}
function sign_out() {

    var AJAX_req = new XMLHttpRequest();
    url = "/Vehicle_Tracker_System/Login_Servlet?action=sign_out";
    AJAX_req.open("POST", url, true);
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AJAX_req.onreadystatechange = function () {
        if (AJAX_req.readyState === 4 && AJAX_req.status === 200) {
            document.location = "/Vehicle_Tracker_System/index.html";
        }
    };
    AJAX_req.send();
}
function reset_form() {
    var id = document.getElementById("id");
    var name = document.getElementById("name");
    var surname = document.getElementById("surname");
    var second_surname = document.getElementById("second_surname");
    var area = document.getElementById("area");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");
    var address = document.getElementById("address");
    id.value = "";
    name.value = "";
    surname.value = "";
    second_surname.value = "";
    area.value = "";
    phone.value = "";
    email.value = "";
    address.value = "";
}
function send_user_data() {
    console.log("send_user_data llamada!");
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var second_surname = document.getElementById("second_surname").value;

    var areas_select = document.getElementById("areas_select");
    var area = areas_select.options[areas_select.selectedIndex].value;


    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var AJAX_req = new XMLHttpRequest();
    url = "/Vehicle_Tracker_System/Add_New_User_Servlet?id=" + id + "&name="
            + name + "&surname=" + surname + "&second_surname=" + second_surname +
            "&area=" + area + "&phone=" + phone + "&email=" + email + "&address=" + address;
    AJAX_req.open("POST", url, true);
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AJAX_req.onreadystatechange = function () {
        if (AJAX_req.readyState === 4 && AJAX_req.status === 200) {
            add_new_user(AJAX_req.responseText);
        }
    };
    AJAX_req.send();
}
function add_new_user(textoJSON) {
    var objeto = JSON.parse(textoJSON);
    if (objeto.datos[0].verifica === 0) {

        var messageDeleteUserAlert = document.getElementById("messageInsertUser");
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
            div_alert.appendChild(document.createTextNode("Ha habido un error al agregar el usuario"));
            messageDeleteUserAlert.appendChild(div_alert);
        }

    } else {
//        alert("Usuario agregado exitosamente!");
        var messageDeleteUserAlert = document.getElementById("show_alert_add_user");
        if (messageDeleteUserAlert) {
            var div_alert = document.createElement("DIV");
            div_alert.setAttribute("class", "alert alert alert-success");
            var btn_alert = document.createElement("BUTTON");
            btn_alert.setAttribute("class", "close");
            btn_alert.setAttribute("data-dismiss", "alert");
            var span = document.createElement("SPAN");
            span.innerHTML = "&times;";
            btn_alert.appendChild(span);
            div_alert.appendChild(btn_alert);
            div_alert.appendChild(document.createTextNode("Usuario agregado exitosamente!"));
            messageDeleteUserAlert.appendChild(div_alert);
            reset_form();
        }
    }

}
function send_vehicle_data() {
    console.log("send_vehicle_data llamada!");
    var licensePlate = document.getElementById("licensePlate").value;


    var brans_select = document.getElementById("brans_select");
    var brand = brans_select.options[brans_select.selectedIndex].value;

    var model = document.getElementById("model").value;

    var year_select = document.getElementById("year_select");
    var year = year_select.options[year_select.selectedIndex].value;

    var AJAX_req = new XMLHttpRequest();
    url = "/Vehicle_Tracker_System/Add_New_Vehicle_Servlet?licensePlate=" + licensePlate + "&model="
            + model + "&brand=" + brand + "&year=" + year;
    AJAX_req.open("POST", url, true);
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AJAX_req.onreadystatechange = function () {
        if (AJAX_req.readyState === 4 && AJAX_req.status === 200) {
            add_new_vehicle(AJAX_req.responseText);
        }
    };
    AJAX_req.send();
}

function add_new_vehicle(textoJSON) {
    var objeto = JSON.parse(textoJSON);
    var message = document.getElementById("messageInsertVehicle");
    if (message) {

        var div_alert = document.createElement("DIV");
        var btn_alert = document.createElement("BUTTON");
        btn_alert.setAttribute("class", "close");
        btn_alert.setAttribute("data-dismiss", "alert");
        var span = document.createElement("SPAN");
        span.innerHTML = "&times;";
        btn_alert.appendChild(span);
        div_alert.appendChild(btn_alert);
        if (objeto.datos[0].verifica === 0) {
            div_alert.setAttribute("class", "alert alert alert-danger");
            div_alert.appendChild(document.createTextNode("Ha habido un error al agregar el vehículo"));
        } else {
            div_alert.setAttribute("class", "alert alert alert-success");
            div_alert.appendChild(document.createTextNode("Vehículo agregado exitosamente"));
            //reset_form();
        }

        message.appendChild(div_alert);
    }
}

function show_vehicle_result_delete(textoJSON) {

    var table_header = document.getElementById("head_vehicle_search_delete");
    var table_body = document.getElementById("body_vehicle_search_delete");
    var message = document.getElementById("vehicle_message");
    if (table_header !== null && table_body !== null && message !== null) {
        var div_alert = document.createElement("DIV");
        var btn_alert = document.createElement("BUTTON");
        btn_alert.setAttribute("class", "close");
        btn_alert.setAttribute("data-dismiss", "alert");
        var span = document.createElement("SPAN");
        span.innerHTML = "&times;";
        btn_alert.appendChild(span);
        div_alert.appendChild(btn_alert);
        message.appendChild(div_alert);
        if (textoJSON === "true") {
            table_header.innerHTML = "";
            table_body.innerHTML = "";
            div_alert.appendChild(document.createTextNode("Eliminación exitosa"));
            div_alert.setAttribute("class", "alert alert alert-success");
            var message2 = document.getElementById("message2");
            message2.innerText = "";
        } else {
            div_alert.appendChild(document.createTextNode("Ha habido un error al eliminar"));
            div_alert.setAttribute("class", "alert alert alert-danger");
        }
    }
}

function show_result_delete(textoJSON) {

    var table_header = document.getElementById("head_search_delete");
    var table_body = document.getElementById("body_search_delete");
    var message = document.getElementById("messageDeleteUserAlert");
    if (table_header !== null && table_body !== null && message !== null) {
        if (textoJSON === "true") {


            table_header.innerHTML = "";
            table_body.innerHTML = "";
            var div_alert = document.createElement("DIV");
            div_alert.setAttribute("class", "alert alert alert-success");
            var btn_alert = document.createElement("BUTTON");
            btn_alert.setAttribute("class", "close");
            btn_alert.setAttribute("data-dismiss", "alert");
            var span = document.createElement("SPAN");
            span.innerHTML = "&times;";
            btn_alert.appendChild(span);
            div_alert.appendChild(btn_alert);
            div_alert.appendChild(document.createTextNode("Usuario eliminado exitosamente!"));
            message.appendChild(div_alert);
        } else {

            var div_alert = document.createElement("DIV");
            div_alert.setAttribute("class", "alert alert alert-danger");
            var btn_alert = document.createElement("BUTTON");
            btn_alert.setAttribute("class", "close");
            btn_alert.setAttribute("data-dismiss", "alert");
            var span = document.createElement("SPAN");
            span.innerHTML = "&times;";
            btn_alert.appendChild(span);
            div_alert.appendChild(btn_alert);
            div_alert.appendChild(document.createTextNode("Ha habido un problema al eliminar"));
            message.appendChild(div_alert);
        }
    }
}

function delete_User() {
    console.log("Eliminación de un usuario llamada");
    var eliminar = confirm("¿Está seguro que desea eliminar este usuario?");
    if (eliminar) {
        var user = document.getElementById("delete_button").name;
        var AJAX_req = new XMLHttpRequest();
        url = "/Vehicle_Tracker_System/Delete_User_Servlet?delete_ced=" + user;
        AJAX_req.open("POST", url, true);
        AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        AJAX_req.onreadystatechange = function () {
            if (AJAX_req.readyState === 4 && AJAX_req.status === 200) {
                show_result_delete(AJAX_req.responseText);
            }
        };
        AJAX_req.send();
    } else {

    }

}
function delete_Vehicle() {
    console.log("Eliminación de un vehiculo llamada");
    var eliminar = confirm("¿Está seguro que desea eliminar este vehiculo?");
    if (eliminar) {
        var vehicle = document.getElementById("delete_button").name;
        var AJAX_req = new XMLHttpRequest();
        url = "/Vehicle_Tracker_System/Delete_Vehicle_Servlet?delete_vehicle=" + vehicle;
        AJAX_req.open("POST", url, true);
        AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        AJAX_req.onreadystatechange = function () {
            if (AJAX_req.readyState === 4 && AJAX_req.status === 200) {
                show_vehicle_result_delete(AJAX_req.responseText);
            }
        };
        AJAX_req.send();
    } else {

    }

}
function search_user_and_show() {

    console.log("funcion search_user_and_show llamada!");
    var usuario = document.getElementById("consult_user").value;
    var AJAX_req = new XMLHttpRequest();
    url = "/Vehicle_Tracker_System/Consult_Users?usuario=" + usuario;
    AJAX_req.open("POST", url, true);
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AJAX_req.onreadystatechange = function () {
        if (AJAX_req.readyState === 4 && AJAX_req.status === 200) {
            show_all_users(AJAX_req.responseText);
        }

    };
    AJAX_req.send();
}


function show_all_users(textoJSON) {
    console.log("Se ha llamado la funcion show_all_users");
    var datos = JSON.parse(textoJSON);
    var t_head = document.getElementById("t_head_show_users");
    var t_body = document.getElementById("t_body_show_users");
    var message = document.getElementById("messageShowUsers");
    if (t_head && t_body) {
        t_head.innerHTML = "";
        t_body.innerHTML = "";
        message.innerHTML = "";
        if (datos.usersJ.length !== 0) {
            message.innerText = "Resultados de la busqueda: ";
            var row = t_head.insertRow(-1);
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
            cell = row.insertCell(-1);
            cell.innerText = "ID del Vehículo";
            t_body.innerHTML = "";
            for (var i = 0; i < datos.usersJ.length; i++) {
                var new_row = t_body.insertRow(-1);
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
                var cell_vehicle = new_row.insertCell(-1);
                cell_vehicle.style = "color: blue;";
                if (datos.usersJ[i].vehicle) {
                    cell_vehicle.innerText = datos.usersJ[i].vehicle;
                } else {
                    cell_vehicle.innerText = "N/A";
                }

            }

        } else {

            message.innerText = "No hay resultados";
        }
    }
}

function show_error_showing_user() {
    var message = document.getElementById("messageShowUsers");
    var consult_user = document.getElementById("consult_user");
    if (message && consult_user) {
        message.innerText = "";
        consult_user.value = "";
    }
}

function search_user_to_change_rol() {

    console.log("funcion search_user_and_show llamada!");
    var usuario = document.getElementById("ced_rol").value;
    var AJAX_req = new XMLHttpRequest();
    url = "/Vehicle_Tracker_System/Show_Users_Roles?usuario=" + usuario;
    AJAX_req.open("POST", url, true);
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AJAX_req.onreadystatechange = function () {
        if (AJAX_req.readyState === 4 && AJAX_req.status === 200) {
            changing_roles(AJAX_req.responseText);
        }

    };
    AJAX_req.send();
}
function changing_roles(textoJSON) {
    var datos = JSON.parse(textoJSON);
    var t_head_roles = document.getElementById("t_head_roles");
    var t_body = document.getElementById("t_body_roles");
    var message = document.getElementById("messageShowUsersRoles");
    if (t_head_roles && t_body) {
//limpiamos la tabla en cda consulta
        t_head_roles.innerHTML = "";
        t_body.innerHTML = "";
        message.innerHTML = "";
        if (datos.usersJ.length > 0) {
            var row_head = t_head_roles.insertRow(-1);
            var id_cell = row_head.insertCell(-1);
            id_cell.setAttribute("scope", "col");
            id_cell.appendChild(document.createTextNode("Cédula"));
            var name_cell = row_head.insertCell(-1);
            name_cell.setAttribute("scope", "col");
            name_cell.appendChild(document.createTextNode("Nombre"));
            var surnames_cell = row_head.insertCell(-1);
            surnames_cell.setAttribute("scope", "col");
            surnames_cell.appendChild(document.createTextNode("Apellidos"));
            var area_cell = row_head.insertCell(-1);
            area_cell.setAttribute("scope", "col");
            area_cell.appendChild(document.createTextNode("Área de trabajo"));
            var rol_cell = row_head.insertCell(-1);
            rol_cell.setAttribute("scope", "col");
            rol_cell.appendChild(document.createTextNode("Role"));
            var change_rol_cell = row_head.insertCell(-1);
            change_rol_cell.setAttribute("scope", "col");
            change_rol_cell.appendChild(document.createTextNode("Cambiar Rol"));
            for (var i = 0; i < datos.usersJ.length; i++) {
                var new_row = t_body.insertRow(-1);
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
                var cell_role = new_row.insertCell(-1);
                cell_role.setAttribute("id", "role_for_change");
                if (datos.usersJ[i].admin) {
                    cell_role.innerText = "Administrador";
                } else {
                    cell_role.innerText = "Usuario";
                }

                var cell_button = new_row.insertCell(-1);
                var icon = document.createElement("i");
                icon.setAttribute("class", "fa fa-exchange");
                icon.setAttribute("id", datos.usersJ[i].id);
                icon.style = "font-size:24px; color:red;";
                //le damos funcionalidad al botón de cambiar rol
                icon.addEventListener("click", change_role_call_servlet, true);
                cell_button.appendChild(icon);
            }
        } else {
            message.innerText = "No hay resultados";
        }



    }
}

function show_error_showing_user_roles() {
    var message = document.getElementById("messageShowUsersRoles");
    var ced_rol = document.getElementById("ced_rol");
    if (message && ced_rol) {
        message.innerText = "";
        ced_rol.value = "";
    }
}

function change_role_call_servlet(event) {
    console.log("change_role_call_servlet (); ha sido llamada!");
    var objeto = event.target;
    var usuario = objeto.id;
    var father_cell = objeto.parentNode;
    var father_row = father_cell.parentNode;
    var role_type = father_row.childNodes[4].innerText;
    var AJAX_req = new XMLHttpRequest();
    url = "/Vehicle_Tracker_System/Changing_Roles_Servlet?usuario=" + usuario + "&role_type=" + role_type;
    AJAX_req.open("POST", url, true);
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AJAX_req.onreadystatechange = function () {
        if (AJAX_req.readyState === 4 && AJAX_req.status === 200) {
            change_role(AJAX_req.responseText);
        }
    };
    AJAX_req.send();
}
function change_role(textoJSON) {
    var datos = JSON.parse(textoJSON);
    var cell_role = document.getElementById("role_for_change");
    if (datos.datos[0].type === 1) {

        cell_role.innerText = "Usuario";
    } else if (datos.datos[0].type === 2) {
        cell_role.innerText = "Administrador";
    } else {

    }
}


function login() {
    console.log("login(); ha sido llamada!");
    var id_login = document.getElementById("id_login").value;
    var pass_login = document.getElementById("pass_login").value;
    var AJAX_req = new XMLHttpRequest();
    url = "/Vehicle_Tracker_System/Login_Servlet?id_login=" + id_login + "&pass_login=" + pass_login;
    AJAX_req.open("POST", url, true);
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AJAX_req.onreadystatechange = function () {
        if (AJAX_req.readyState === 4 && AJAX_req.status === 200) {
            verifica_Login(AJAX_req.responseText);
        }
    };
    AJAX_req.send();
}
function verifica_Login(textoJSON) {
    if (textoJSON === "admin") {
        window.location = "administrator_home.jsp";
    } else {
        var datos = JSON.parse(textoJSON);
        if (datos.datos[0].error === 1) {
            var formLogin = document.getElementById("formLogin");
            var error_login_label = document.getElementById("error_login_label");
            error_login_label.innerText = "Usuario o contraseña incorreto";
            formLogin.style = "border: solid red 1px; padding:10px;";
        }
    }
}
function trying_login() {
    var formLogin = document.getElementById("formLogin");
    var error_login_label = document.getElementById("error_login_label");
    var id_login = document.getElementById("id_login");
    if (formLogin && error_login_label) {
        if (error_login_label.innerText === "") {

        } else {
            error_login_label.innerHTML = "";
            formLogin.style = "border: none;";
            id_login.value = "";
        }
    }
}
//ESTA FUNCION SE LLAMA CADA VEZ QUE SE DA CLICK EN 
//LA OPCION DE MENÚ --Actualizar los datos de un usuario-- , LO QUE HACE
//ESTA FUNCION ES RESETEAR LA TABLA.
function clear_sreen_users_update() {
    var edit_div = document.getElementById("edit_div");
    var show_alert_update_user = document.getElementById("show_alert_update_user");
    if (edit_div) {
        edit_div.innerHTML = "";
        show_alert_update_user.innerHTML = "";
    }
    var table = $('#user_udpate_table').DataTable();
    table.destroy();
}
function loadUsersForUpdate() {
    console.log("la funcion loadUsersForUpdate ha sido llamada");
//    alert("la funcion loadUsersForUpdate ha sido llamada");

    var AJAX_req = new XMLHttpRequest();
    url = "/Vehicle_Tracker_System/Load_All_Users?";
    AJAX_req.open("POST", url, true);
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AJAX_req.onreadystatechange = function () {
        if (AJAX_req.readyState === 4 && AJAX_req.status === 200) {
            createTableUsersUpdate(AJAX_req.responseText);
        }
    };
    AJAX_req.send();
}
//ESTA FUNCION CREA LA DATATABLE EN LA CUAL SE MUESTARN TODOS LOS USUARIOS QUE ESTAN EN LA BASE DE DATOS
// ESTA FUNCION AHREGA LOS USARIOS MEDIANTE JQUERY , SE LEEN LOS DATOS DE UN ARRAY EN FIRMATO JSON.
function createTableUsersUpdate(textoJSON) {
    var users = JSON.parse(textoJSON);
    $(document).ready(function () {
        $('#user_udpate_table').DataTable({
            language: {
                "sProcessing": "Procesando...",
                "sLengthMenu": "Mostrar _MENU_ registros",
                "sZeroRecords": "No se encontraron resultados",
                "sEmptyTable": "Ningún dato disponible en esta tabla",
                "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
                "sInfoPostFix": "",
                "sSearch": "Buscar:",
                "sUrl": "",
                "sInfoThousands": ",",
                "sLoadingRecords": "Cargando...",
                "oPaginate": {
                    "sFirst": "Primero",
                    "sLast": "Último",
                    "sNext": "Siguiente",
                    "sPrevious": "Anterior"
                },
                "oAria": {
                    "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                    "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                }
            },
            data: users.usersJ,
            columns: [
                {title: "Id"},
                {title: "Nombre"},
                {title: "Área"},
                {title: "Teléfono"},
                {title: "Dirección"},
                {title: "Correo"},
                {title: "Editar"}
            ]
        });
    });
}


//LE AGREGAMOS UN MOUSE EVENT AL ICONO DE EDITAR USSUARIO, EN KLA TABLA
function edit_user_pencil_on_mouse_over(event) {
//    event.target.style = "aria-hidden:true; color: FF950D; font-size:16pt;";
    event.target.style = "aria-hidden:false; font-size:16pt;cursor: pointer;";
}
//LE AGREGAMOS UN MOUSE EVENT AL ICONO DE EDITAR USSUARIO, EN KLA TABLA
function edit_user_pencil_on_mouse_out(event) {
    event.target.style = "aria-hidden:false; color: #0396E3; font-size:16pt;";
}

//FORMULARIO QUE SE DESPLAGA AL DAR CLICK EN EL ICONO DE ACTUALIZAR LOS DATOS DE UN USUARIO.
function edit_user_form(event) {
    var object = event.target;
    var cell = object.parentNode;
    var row = cell.parentNode;
    for (var i = 0; i < row.parentNode.childNodes.length; i++) {
        if (row.parentNode.childNodes[i] === row) {
            row.style = "background-color:#cccccc;";
        } else {
            row.parentNode.childNodes[i].style = "background-color:white;";
        }
    }

    var id = row.childNodes[0].innerText;
    var name = row.childNodes[1].innerText;
    var area = row.childNodes[2].innerText;
    var phone = row.childNodes[3].innerText;
    var address = row.childNodes[4].innerText;
    var email = row.childNodes[5].innerText;
    // AGREGAMOS LAS CELDAS QUE ESTAMOS EDI
    row_update_user[0] = row.childNodes[2];
    row_update_user[1] = row.childNodes[3];
    row_update_user[2] = row.childNodes[4];
    row_update_user[3] = row.childNodes[5];
    var edit_div = document.getElementById("edit_div");
    edit_div.innerHTML = "";
    var form = document.createElement("FORM");
    form.setAttribute("id", "updateting_user_form");
    if (form) {
        form.innerHTML = "";
        form.style = "border: 1px solid #cccccc; background-color: white; padding: 5px; margin: 10px; font-size: 10pt;";
        var title_div = document.createElement("DIV");
        title_div.setAttribute("class", "form-group");
        var title_label = document.createElement("LABEL");
        var input_hidden = document.createElement("INPUT");
        input_hidden.setAttribute("value", id);
        input_hidden.setAttribute("type", "hidden");
        input_hidden.setAttribute("id", "id_edit");
        input_hidden.setAttribute("name", "id_edit");
        title_div.style = "background-color: #cccccc; text-align: center;";
        title_label.style = "text-align: center; font-size: 14pt;";
        title_label.appendChild(document.createTextNode("Editando datos de " + name));
        title_div.appendChild(title_label);
        title_div.appendChild(input_hidden);
        form.appendChild(title_div);

        var area_div = document.createElement("DIV");
        area_div.setAttribute("class", "form-group");
        var area_label = document.createElement("LABEL");
        area_label.setAttribute("for", area);
        area_label.appendChild(document.createTextNode("Área de Trabajo"));

        var areas_select_update = document.createElement("SELECT");
        areas_select_update.setAttribute("class", "custom-select");
        areas_select_update.setAttribute("id", "areas_select_update");

        var current_area_index = get_one_area(area);

        for (var i = 1; i < objects_areas.areas.length; i++) {
            var option = document.createElement("OPTION");
            if (i === current_area_index) {
                //AREA QUE EL USUARIO TIENE ASIGNADA ACTUALMENTE.
                option.setAttribute("value", objects_areas.areas[i].name);
                option.setAttribute("selected", "selected");
                option.innerText = objects_areas.areas[i].name;
                areas_select_update.appendChild(option);
            } else {
                option.setAttribute("value", objects_areas.areas[i].name);
                option.innerText = objects_areas.areas[i].name;
                areas_select_update.appendChild(option);
            }

        }


        area_div.appendChild(area_label);
        area_div.appendChild(areas_select_update);
        form.appendChild(area_div);

        var phone_div = document.createElement("DIV");
        phone_div.setAttribute("class", "form-group");
        var phone_label = document.createElement("LABEL");
        phone_label.setAttribute("for", phone);
        phone_label.appendChild(document.createTextNode("Teléfono"));
        var phone_input = document.createElement("INPUT");
        phone_input.setAttribute("class", "form-control");
        phone_input.setAttribute("size", "8");
        phone_input.setAttribute("required", "required");
        phone_input.setAttribute("type", "number");
        phone_input.setAttribute("id", "phone_edit");
        phone_input.setAttribute("name", "phone_edit");
        phone_input.setAttribute("value", phone);
        phone_div.appendChild(phone_label);
        phone_div.appendChild(phone_input);
        form.appendChild(phone_div);
        var address_div = document.createElement("DIV");
        address_div.setAttribute("class", "form-group");
        var address_label = document.createElement("LABEL");
        address_label.setAttribute("for", address);
        address_label.appendChild(document.createTextNode("Dirección"));
        var address_input = document.createElement("INPUT");
        address_input.setAttribute("class", "form-control");
        address_input.setAttribute("size", "8");
        address_input.setAttribute("required", "required");
        address_input.setAttribute("type", "text");
        address_input.setAttribute("id", "address_edit");
        address_input.setAttribute("name", "address_edit");
        address_input.setAttribute("value", address);
        address_div.appendChild(address_label);
        address_div.appendChild(address_input);
        form.appendChild(address_div);
        var email_div = document.createElement("DIV");
        email_div.setAttribute("class", "form-group");
        var email_label = document.createElement("LABEL");
        email_label.setAttribute("for", email);
        email_label.appendChild(document.createTextNode("Correo"));
        var email_input = document.createElement("INPUT");
        email_input.setAttribute("class", "form-control");
        email_input.setAttribute("size", "8");
        email_input.setAttribute("required", "required");
        email_input.setAttribute("type", "email");
        email_input.setAttribute("id", "email_edit");
        email_input.setAttribute("name", "email_edit");
        email_input.setAttribute("value", email);
        email_div.appendChild(email_label);
        email_div.appendChild(email_input);
        form.appendChild(email_div);
        var btn_save = document.createElement("BUTTON");
        btn_save.setAttribute("class", "btn btn-success");
        btn_save.setAttribute("type", "button");
        btn_save.innerText = "Guardar";
        btn_save.addEventListener("click", update_User_BD, true);
        form.appendChild(btn_save);
        form.appendChild(document.createTextNode(" "));
        var btn_cancel = document.createElement("BUTTON");
        btn_cancel.setAttribute("class", "btn btn-secondary");
        btn_cancel.setAttribute("type", "button");
        btn_cancel.setAttribute("id", "scroll_up");
        btn_cancel.innerText = "Cancelar";
        btn_cancel.addEventListener("click", cancel_editing_user, true);
        form.appendChild(btn_cancel);
        edit_div.appendChild(form);
    }

}

//SI POR SE DESEA CANCELAR LA EDICION DE LOS DATOS DE UN USUARIO
//ENTONCES EL BOTON CANCELAR QUE ESTÁ EN EL FORMULARIO PARA EDITAR DICHOS DATOS, HACE QUE DESAPAREZCA
//DICHO FORMULARIO DE LA VISTA.
function cancel_editing_user() {
    var edit_div = document.getElementById("edit_div");
    var table = document.getElementById("user_udpate_table");
    var body = table.childNodes[2];
    var tam = body.childNodes.length;
//    //CAMBIAMOS EL COLOR DE LAS FILAS DE LATBLA A BLANCO, CUANDO YA NO SE ESTÁN EDITANDO
    for (var i = 0; i < tam; i++) {
        body.childNodes[i].style = "background-color: white;";
    }

    if (edit_div) {
        edit_div.innerHTML = "";
    }
}
function update_User_BD() {
    var id = document.getElementById("id_edit").value;

    var areas_select_update = document.getElementById("areas_select_update");
    var area = areas_select_update.options[areas_select_update.selectedIndex].value;


    var phone = document.getElementById("phone_edit").value;
    var address = document.getElementById("address_edit").value;
    var email = document.getElementById("email_edit").value;
    if (id === "" || area === "" || phone === "" || address === "" || email === "") {
// alert("Faltan datos por completar!");
//AGREGAMOS UN ALERT PERO CON BOOSTRAP
        var messageDeleteUserAlert = document.getElementById("show_alert_update_user");
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
            div_alert.appendChild(document.createTextNode("Faltan datos por completar!"));
            messageDeleteUserAlert.appendChild(div_alert);
        }
    } else {
//    alert("datos recibidos del form_edit:  " + " " + id + "  " + "  " + area + " " + address + " " + phone + " " + email);

        var AJAX_req = new XMLHttpRequest();
        url = "/Vehicle_Tracker_System/Changing_User_Servlet?id=" + id + "&area=" + area + "&phone=" + phone + "&address=" + address + "&email=" + email;
        AJAX_req.open("POST", url, true);
        AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        AJAX_req.onreadystatechange = function () {
            if (AJAX_req.readyState === 4 && AJAX_req.status === 200) {
                show_confirm_message_updating_user(AJAX_req.responseText, area, phone, address, email);
            }
        };
        AJAX_req.send();
    }


}
function show_confirm_message_updating_user(textoJSON, area, phone, address, email) {
    var result = JSON.parse(textoJSON);
    var messageUpdateUserAlert = document.getElementById("messageUpdateUser");
    if (messageUpdateUserAlert) {
        if (result === 1) {
            var div_alert = document.createElement("DIV");
            div_alert.setAttribute("class", "alert alert alert-success");
            var btn_alert = document.createElement("BUTTON");
            btn_alert.setAttribute("class", "close");
            btn_alert.setAttribute("data-dismiss", "alert");
            var span = document.createElement("SPAN");
            span.innerHTML = "&times;";
            btn_alert.appendChild(span);
            div_alert.appendChild(btn_alert);
            div_alert.appendChild(document.createTextNode("Se han actualizado los datos del usuario correctamente"));
            messageUpdateUserAlert.appendChild(div_alert);
            //ACTUALIZAMOS LOS DATOS DEL USUARIO EN LA VISTA
            row_update_user[0].innerText = area;
            row_update_user[1].innerText = phone;
            row_update_user[2].innerText = address;
            row_update_user[3].innerText = email;
            cancel_editing_user();
        } else {
            var div_alert = document.createElement("DIV");
            div_alert.setAttribute("class", "alert alert alert-danger");
            var btn_alert = document.createElement("BUTTON");
            btn_alert.setAttribute("class", "close");
            btn_alert.setAttribute("data-dismiss", "alert");
            var span = document.createElement("SPAN");
            span.innerHTML = "&times;";
            btn_alert.appendChild(span);
            div_alert.appendChild(btn_alert);
            div_alert.appendChild(document.createTextNode("Ha habido un error al actualizar los datos del usuario"));
            messageUpdateUserAlert.appendChild(div_alert);
        }
    }
}


function loadVehiclesForUpdate() {
    console.log("la funcion loadVehiclesForUpdate ha sido llamada");
    var AJAX_req = new XMLHttpRequest();
    url = "/Vehicle_Tracker_System/Load_Vehicles?";
    AJAX_req.open("POST", url, true);
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AJAX_req.onreadystatechange = function () {
        if (AJAX_req.readyState === 4 && AJAX_req.status === 200) {
            createTableVehiclesUpdate(AJAX_req.responseText);
        }
    };
    AJAX_req.send();
}

//ESTA FUNCION CREA LA DATATABLE EN LA CUAL SE MUESTARN TODOS LOS USUARIOS QUE ESTAN EN LA BASE DE DATOS
// ESTA FUNCION AHREGA LOS USARIOS MEDIANTE JQUERY , SE LEEN LOS DATOS DE UN ARRAY EN FIRMATO JSON.
function createTableVehiclesUpdate(textoJSON) {
    var vehicle = JSON.parse(textoJSON);
    $(document).ready(function () {
        $('#vehicle_udpate_table').DataTable({
            language: {
                "sProcessing": "Procesando...",
                "sLengthMenu": "Mostrar _MENU_ registros",
                "sZeroRecords": "No se encontraron resultados",
                "sEmptyTable": "Ningún dato disponible en esta tabla",
                "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
                "sInfoPostFix": "",
                "sSearch": "Buscar:",
                "sUrl": "",
                "sInfoThousands": ",",
                "sLoadingRecords": "Cargando...",
                "oPaginate": {
                    "sFirst": "Primero",
                    "sLast": "Último",
                    "sNext": "Siguiente",
                    "sPrevious": "Anterior"
                },
                "oAria": {
                    "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                    "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                }
            },
            data: vehicle.vehiclesJ,
            columns: [
                {title: "Placa"},
                {title: "Modelo"},
                {title: "Marca"},
                {title: "Año"},
                {title: "Editar"}
            ]
        });
    });
}

function edit_vehicle_form(event) {
    var object = event.target;
    var cell = object.parentNode;
    var row = cell.parentNode;
    var plaque = row.childNodes[0].innerText;
    var model = row.childNodes[1].innerText;
    var brand = row.childNodes[2].innerText;
    var year = parseInt(row.childNodes[3].innerText);


    // AGREGAMOS LAS CELDAS QUE ESTAMOS EDITANDO
    row_update_vehicle[0] = row.childNodes[1];
    row_update_vehicle[1] = row.childNodes[2];
    row_update_vehicle[2] = row.childNodes[3];
    var edit_div = document.getElementById("vehicle_edit_div");
    edit_div.innerHTML = "";
    var form = document.createElement("FORM");
    form.setAttribute("id", "edit_vehicle_form");
    form.setAttribute("action", "javascript: update_Vehicle_BD();");

    //AGREGAMOS EL FORMULARIO CREADO A UN DIV,
    edit_div.appendChild(form);
    if (form) {
        form.innerHTML = "";
        form.style = "border: 1px solid #cccccc; background-color: white; padding: 5px; margin: 10px; font-size: 10pt;";
        var title_div = document.createElement("DIV");
        title_div.setAttribute("class", "form-group");
        var title_label = document.createElement("LABEL");
        var input_hidden = document.createElement("INPUT");
        input_hidden.setAttribute("value", plaque);
        input_hidden.setAttribute("type", "hidden");
        input_hidden.setAttribute("id", "plaque_edit");
        input_hidden.setAttribute("name", "plaque_edit");
        title_div.style = "background-color: #cccccc; text-align: center;";
        title_label.style = "text-align: center; font-size: 14pt;";
        title_label.appendChild(document.createTextNode("Editando datos de " + brand + " " + model));
        title_div.appendChild(title_label);
        title_div.appendChild(input_hidden);
        form.appendChild(title_div);
        var model_div = document.createElement("DIV");
        model_div.setAttribute("class", "form-group");
        var model_label = document.createElement("LABEL");
        model_label.setAttribute("for", model);
        model_label.appendChild(document.createTextNode("Modelo"));
        var model_input = document.createElement("INPUT");
        model_input.setAttribute("class", "form-control");
        model_input.setAttribute("size", 8);
        model_input.setAttribute("type", "text");
        model_input.setAttribute("id", "model_edit");
        model_input.setAttribute("name", "model_edit");
        model_input.setAttribute("value", model);
        model_div.appendChild(model_label);
        model_div.appendChild(model_input);
        form.appendChild(model_div);
        var brand_div = document.createElement("DIV");
        brand_div.setAttribute("class", "form-group");
        var brand_label = document.createElement("LABEL");
        brand_label.setAttribute("for", brand);
        brand_label.appendChild(document.createTextNode("Marca"));

        var brans_select_update = document.createElement("SELECT");
        brans_select_update.setAttribute("class", "custom-select");
        brans_select_update.setAttribute("id", "brans_select_update");

        var current_brand_index = get_one_brand(brand);

        for (var i = 1; i < objects_brands.vehicles.length; i++) {
            var option = document.createElement("OPTION");
            if (i === current_brand_index) {
                option.setAttribute("value", objects_brands.vehicles[i].brand);
                option.setAttribute("selected", "selected");
                option.innerText = objects_brands.vehicles[i].brand;
                brans_select_update.appendChild(option);
            } else {
                option.setAttribute("value", objects_brands.vehicles[i].brand);
                option.innerText = objects_brands.vehicles[i].brand;
                brans_select_update.appendChild(option);
            }

        }

        brand_div.appendChild(brand_label);
        brand_div.appendChild(brans_select_update);
        form.appendChild(brand_div);


        var year_div = document.createElement("DIV");
        year_div.setAttribute("class", "form-group");
        var year_label = document.createElement("LABEL");
        year_label.setAttribute("for", year);
        year_label.appendChild(document.createTextNode("Año de adquisición"));

        var year_select_update = document.createElement("SELECT");
        year_select_update.setAttribute("class", "custom-select");
        year_select_update.setAttribute("id", "year_select_update");

        var date = new Date();//OBTINE LA FECHA ACTUAL.
        for (var i = 1980; i <= date.getFullYear(); i++) {
            var option = document.createElement("OPTION");
            if (i === year) {
                option.setAttribute("value", i);
                option.setAttribute("selected", "selected");
                option.innerText = i;
                year_select_update.appendChild(option);
            } else {
                option.setAttribute("value", i);
                option.innerText = i;
                year_select_update.appendChild(option);
            }

        }

        year_div.appendChild(year_label);
        year_div.appendChild(year_select_update);
        form.appendChild(year_div);


        var button_form = document.createElement("BUTTON");
        button_form.setAttribute("class", "btn btn-success");
        button_form.setAttribute("type", "submit");
        button_form.innerText = "Guardar";
        form.appendChild(button_form);
        form.appendChild(document.createTextNode(" "));
        var button_cancel = document.createElement("BUTTON");
        button_cancel.setAttribute("class", "btn btn-secondary");
        button_cancel.setAttribute("type", "reset");
        button_cancel.addEventListener("click", cancel_edit_vehicle, true);
        button_cancel.innerText = "Cancelar";
        form.appendChild(button_cancel);
    }

}

//EN CASO DE QUE EL ADMINISTRADOR DECIDA NO ACTULIZAR EL VEHICULO Y
// YA ESTÉ DESPLEGADO EL FORMULARIO PARA ACTUALIZAR LOS DATOS, ESTA FUNCIÓN PERIMITE CANCELAR LA ACTUALIZACIÓN.
function cancel_edit_vehicle() {
    var vehicle_edit_div = document.getElementById("vehicle_edit_div");
    if (vehicle_edit_div) {
        vehicle_edit_div.innerHTML = "";
    }
}

function update_Vehicle_BD() {
    var plaque = document.getElementById("plaque_edit").value;

    var brans_select_update = document.getElementById("brans_select_update");
    var brand = brans_select_update.options[brans_select_update.selectedIndex].value;

    var model = document.getElementById("model_edit").value;


    var year_select_update = document.getElementById("year_select_update");
    var year = year_select_update.options[year_select_update.selectedIndex].value;

//    alert("datos recibidos del form_edit:  " + " " + brand + "  " + "  " + model + " " + year + " " + plaque);
    if (plaque !== "" && brand !== "" && model !== "" && year !== "") {
        var AJAX_req = new XMLHttpRequest();
        url = "/Vehicle_Tracker_System/Changing_Vehicle_Servlet?brand=" + brand + "&model=" + model + "&year=" + year + "&plaque=" + plaque;
        AJAX_req.open("POST", url, true);
        AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        AJAX_req.onreadystatechange = function () {
            if (AJAX_req.readyState === 4 && AJAX_req.status === 200) {
                show_confirm_message_updating_vehicle(AJAX_req.responseText, model, brand, year);
            }
        };
        AJAX_req.send();
    } else {
        alert("Faltan campos por completar");
    }

}

function show_confirm_message_updating_vehicle(textoJSON, model, brand, year) {
    var result = JSON.parse(textoJSON);
    var message = document.getElementById("messageUpdateVehicle");
    if (message) {

        var div_alert = document.createElement("DIV");
        var btn_alert = document.createElement("BUTTON");
        btn_alert.setAttribute("class", "close");
        btn_alert.setAttribute("data-dismiss", "alert");
        var span = document.createElement("SPAN");
        span.innerHTML = "&times;";
        btn_alert.appendChild(span);
        div_alert.appendChild(btn_alert);
        message.appendChild(div_alert);
        if (result === 1) {
            div_alert.appendChild(document.createTextNode("Se han actualizado los datos correctamente"));
            div_alert.setAttribute("class", "alert alert alert-success");
            //ACTUALIZAMOS LOS DATOS DEL USUARIO EN LA VISTA
            row_update_vehicle[0].innerText = model;
            row_update_vehicle[1].innerText = brand;
            row_update_vehicle[2].innerText = year;
            cancel_edit_vehicle();
        } else {
            div_alert.appendChild(document.createTextNode("Ha habido un problema al actualizar los datos"));
            div_alert.setAttribute("class", "alert alert alert-danger");
        }
    }
}


//ESTA FUNCION SE LLAMA CADA VEZ QUE SE DA CLICK EN 
//LA OPCION DE MENÚ --Actualizar los datos de un usuario-- , LO QUE HACE
//ESTA FUNCION ES RESETEAR LA TABLA.
function clear_sreen_vehicle_update() {
    var edit_div = document.getElementById("vehicle_edit_div");
    edit_div.innerHTML = "";
    var table = $('#vehicle_udpate_table').DataTable();
    table.destroy();
}

//FUNCION PARA LIMPIAR LA ALERTA QUE MUESTRA SI SE AGREGÓ O NO UN USAURIO.
function clear_screen_add_user() {
    var message_tag = document.getElementById("show_alert_add_user");
    if (message_tag) {
        message_tag.innerHTML = "";
    }
}
//FUNCION PARA LIMPIAR LA PANTALLA DE LA BUSQUEDA DE UN USAURIO PARA DESACTIVAR
function clear_screen_user_delete() {
    var message_tag = document.getElementById("messageDeleteUserAlert");
    var input = document.getElementById("delete_ced");
    var table_body = document.getElementById("body_search_delete");
    var table_head = document.getElementById("head_search_delete");
    var message = document.getElementById("messageDeleteUser");
    if (table_body && table_head && message) {
        table_body.innerHTML = "";
        table_head.innerHTML = "";
        message.innerText = "";
    }

    if (message_tag && input) {
        message_tag.innerHTML = "";
        input.value = "";
    }
}

//FUNCION PARA LIMPIAR LA PANTALLA DE LA BUSQUEDA DE UN VEHICULO PARA ELIMINAR
function clear_screen_vehicle_delete() {
    var message_tag = document.getElementById("vehicle_message");
    var input = document.getElementById("delete_vehicle");
    var table_body = document.getElementById("body_vehicle_search_delete");
    var table_head = document.getElementById("head_vehicle_search_delete");
    var message = document.getElementById("vehicle_message");
    if (table_body && table_head && message) {
        table_body.innerHTML = "";
        table_head.innerHTML = "";
        message.innerText = "";
    }

    if (message_tag && input) {
        message_tag.innerText = "";
        input.value = "";
    }
}
//FUNCION PARA LIMPIAR LA PANTALLA DE LA BUSQUEDA DE UN USUARIO
function clear_screen_consult_users() {
    var message_tag = document.getElementById("messageShowUsers");
    var input = document.getElementById("consult_user");
    var t_head = document.getElementById("t_head_show_users");
    var t_body = document.getElementById("t_body_show_users");
    var message = document.getElementById("messageShowUsers");
    if (t_head && t_body && message) {
        t_head.innerHTML = "";
        t_body.innerHTML = "";
        message.innerHTML = "";
    }

    if (message_tag && input) {
        message_tag.innerText = "";
        input.value = "";
    }
}

//FUNCION PARA LIMPIAR LA PANTALLA DE LA BUSQUEDA DE UN USUARIO PARA CAMBIARLE EL ROL.
function clear_screen_roles_users() {
    var message_tag = document.getElementById("messageShowUsersRoles");
    var input = document.getElementById("ced_rol");
    var t_head_roles = document.getElementById("t_head_roles");
    var t_body = document.getElementById("t_body_roles");
    var message = document.getElementById("messageShowUsersRoles");
    if (t_head_roles && t_body && message) {
        t_head_roles.innerHTML = "";
        t_body.innerHTML = "";
        message.innerText = "";
    }

    if (message_tag && input) {
        message_tag.innerText = "";
        input.value = "";
    }
}
function scroll_up(event) {
    var object = event.target;
    window.scrollTo(0, object.scrollTop + 1000);
}

function findVehicleFaults() {
    var pk_plate = document.getElementById("inputVehicleFault").value;

    if (pk_plate === "") {
        console.log("vacio");
        document.getElementById("MessageFailureError").innerHTML = "ingrese una placa ";
        document.getElementById("errorMessageFailure").hidden = false;
    } else {
        console.log("no vacio");
        
        if ($.fn.dataTable.isDataTable('#vehicle_faults_table')) {
            table = $('#vehicle_faults_table').DataTable();
            table.destroy();
        }
        var url = "/Vehicle_Tracker_System/ConsultVehicleFaults?pk_plate=" + pk_plate;

        var AJAX_req = new XMLHttpRequest();
        AJAX_req.open("GET", url, true);
        AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        AJAX_req.onreadystatechange = function () {
            if (AJAX_req.readyState === 4 && AJAX_req.status === 200) {
                var server_answer = AJAX_req.responseText;
                console.log("Busqueda de fallas terminada");
                createTableVehiclesFaults(server_answer);
            }
        };
        AJAX_req.send();
    }
}

function createTableVehiclesFaults(textoJSON) {
    var vehicle = JSON.parse(textoJSON);
    $(document).ready(function () {
        $('#vehicle_faults_table').DataTable({
            language: {
                "sProcessing": "Procesando...",
                "sLengthMenu": "Mostrar _MENU_ registros",
                "sZeroRecords": "No se encontraron resultados",
                "sEmptyTable": "Ningún dato disponible en esta tabla",
                "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
                "sInfoPostFix": "",
                "sSearch": "Buscar:",
                "sUrl": "",
                "sInfoThousands": ",",
                "sLoadingRecords": "Cargando...",
                "oPaginate": {
                    "sFirst": "Primero",
                    "sLast": "Último",
                    "sNext": "Siguiente",
                    "sPrevious": "Anterior"
                },
                "oAria": {
                    "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                    "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                }
            },
            data: vehicle.vehiclesJ,
            columns: [
                {title: "Fecha"},
                {title: "Detalle del daño"},
                {title: "Usuario"},
                {title: "Vehiculo"},
                {title: "Tipo de daño"},
                {title: "Detalles"}
            ]
        });
    });
}

function clear_screen_faults() {

    document.getElementById("inputVehicleFault").value = "";
   
}