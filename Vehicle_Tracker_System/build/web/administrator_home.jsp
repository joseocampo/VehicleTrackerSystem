
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="header.jsp" %>
<!DOCTYPE html>
<html >
    <% if (session.getAttribute("user") != null) { %>  
    <head>

        <%-- SE INCLUYE EL HEAD --%>
        <title>administrator_home</title>

        <%-- SE INCLUE EL HEAD --%>
        <title>Vehicle Tracker System</title>


    </head>
    <body onload="loadUsersForUpdate(); loadVehiclesForUpdate();" id="body_admin">
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="width: 100%;">
                <a class="navbar-brand" href="#"><i class="fa fa-car" style="font-size:26px; color: #0396E3;"></i>&nbsp; VTS</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href= "help_page.jsp">
                                Ayuda  &nbsp; <i id="help_icon" onclick="location = 'help_page.jsp'"  class="fa fa-info-circle" style="color: #0396E3; font-size: 18pt;" aria-hidden="true"></i>
                            </a>
                        </li>
                    </ul>
                    <ul class="nav justify-content-end">
                        <li class="nav-item">
                            <a class="nav-link" href="javascript: sign_out();" style="color: white;"> <i class="fa fa-sign-out" aria-hidden="true"></i>Salir</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

        <%--  EL CUERPO DEL DOC HTML--%>
        <div class="row" style="width: 100%;">

            <div class="col-md-3 col-xs-3 col-sm-4" style="height: 100%;">

                <%-- 
                SI AGREGO "nav-pills" A LA CLASE DEL DIV SIGUIENTE, ME PARCA EL ITEM ACTIVO DEL NAV EN AZUL.
                --%>
                <div class=" own_div_cutomize nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <%-- MOSTRAMOS EN USUARIO E INDICAMOS QUE EL MISMO ESTA EN LINEA.--%>
                    <a class="nav_title_fonts nav-link disabled" id="v-pills-main_item-tab" data-toggle="pill" href="#v-pills-main_item" role="tab" aria-controls="v-pills-main_item" aria-selected="true">
                        <table style="padding: 8px; text-align: center; color: white;">
                            <tr>
                                <td>
                                    <i class="fa fa-user-circle"  style="font-size: 38px; color: #0396E3" aria-hidden="true"></i>
                                </td>
                                <td >
                                    <label style="font-size: 12pt;" id="user_in_session">
                                        <% String user = (String) request.getSession(true).getAttribute("user");%>
                                        <% out.print(user);%> 
                                        <%--  &nbsp;&nbsp;&nbsp;Mauricio González--%>
                                    </label>
                                    <br />
                                    <label style="font-size: 10pt;"> &nbsp;&nbsp;<i class="fa fa-circle" style=" font-size: 10px; color: #00ff66;" aria-hidden="true"></i>&nbsp;Online</label>
                                </td>
                            </tr>
                        </table>
                    </a>
                    <%-- ESTAS DOS LINEAS SIGUIENTES SON PARA DEJAR UN ESPECIO EN LA COLUMNA DE ITEMS.. --%>
                    <%--  <a class="nav_item_own nav-link disabled" id="" data-toggle="pill" href="#" role="tab" aria-controls="" aria-selected="true">&nbsp;NAVEGACIÓN</a> 
                      <a class="nav_separator nav-link disabled" id="" data-toggle="pill" href="#" role="tab" aria-controls="" aria-selected="true"></a>
                    --%>
                    <%-- FUNCIONARIOS--%>
                    <a class="nav_title_fonts nav-link " style="color: white;" id=""  data-toggle="pill"  role="tab" aria-controls="" aria-selected="true"><i class="fa fa-users" style="color: white; font-size: 25px;" aria-hidden="true"></i>&nbsp;&nbsp;Funcionarios</a>
                    <a class="nav_item_own nav-link " id="v-pills-new_user-tab" onclick="clear_screen_add_user(); show_areas();" data-toggle="pill" href="#v-pills-new_user" role="tab" aria-controls="v-pills-new_user" aria-selected="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-user-plus color_iconos_item" aria-hidden="true"></i>&nbsp;&nbsp;Agregar Usuario</a>
                    <a class="nav_item_own nav-link" id="v-pills-update_user-tab" onclick="clear_sreen_users_update(); loadUsersForUpdate();" data-toggle="pill" href="#v-pills-update_user" role="tab" aria-controls="v-pills-update_user" aria-selected="false">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-retweet color_iconos_item" aria-hidden="true"></i>&nbsp;&nbsp;Actualizar datos de un Usuario</a>
                    <a class="nav_item_own nav-link" id="v-pills-delete_user-tab" onclick="clear_screen_user_delete();" data-toggle="pill" href="#v-pills-delete_user" role="tab" aria-controls="v-pills-delete_user" aria-selected="false">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-times color_iconos_item" aria-hidden="true"></i>&nbsp;&nbsp;Desactivar Usuario</a>

                    <%-- VEHICULOS--%>
                    <a class="nav_title_fonts nav-link disabled " style="color: white;"  data-toggle="pill" href="#" role="tab" aria-controls="" aria-selected="true"><i class="fa fa-car" style="color: white; font-size: 25px;" aria-hidden="true"></i>&nbsp;&nbsp;Vehículos</a>
                    <a style="" class=" nav_item_own nav-link " onclick="show_brands(); show_years();" id="v-pills-new_car-tab" data-toggle="pill" href="#v-pills-new_car" role="tab" aria-controls="v-pills-new_car" aria-selected="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-plus color_iconos_item" aria-hidden="true"></i>&nbsp;&nbsp;Ingresar Vehículo</a>
                    <a class="nav_item_own nav-link" onclick="clear_sreen_vehicle_update(); loadVehiclesForUpdate();"  id="v-pills-update_car-tab" data-toggle="pill" href="#v-pills-update_car" role="tab" aria-controls="v-pills-update_car" aria-selected="false">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-retweet color_iconos_item" aria-hidden="true"></i>&nbsp;&nbsp;Actualizar datos Vehículo</a>
                    <a class="nav_item_own nav-link" id="v-pills-delete_car-tab" onclick="clear_screen_vehicle_delete();" data-toggle="pill" href="#v-pills-delete_car" role="tab" aria-controls="v-pills-delete_car" aria-selected="false">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-trash-o color_iconos_item" aria-hidden="true"></i>&nbsp;&nbsp;Eliminar Vehículo</a>

                    <%-- CONSULTAS--%>
                    <a class="nav_title_fonts nav-link  disabled" style="color: white;"  data-toggle="pill" href="#" role="tab" aria-controls="" aria-selected="true"><i class="fa fa-binoculars" style="color: white; font-size: 25px;" aria-hidden="true"></i>&nbsp;&nbsp;Consultas</a>
                    <a style="" class=" nav_item_own nav-link " id="v-pills-show_users-tab" onclick="clear_screen_consult_users();" data-toggle="pill" href="#v-pills-show_users" role="tab" aria-controls="v-pills-show_users" aria-selected="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-user color_iconos_item" aria-hidden="true"></i>&nbsp;&nbsp;Consultar Usuarios</a>
                    <a class="nav_item_own nav-link" id="v-pills-show_cars-tab" data-toggle="pill" href="#v-pills-show_cars" role="tab" aria-controls="v-pills-show_cars" aria-selected="false">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-map-marker color_iconos_item" aria-hidden="true"></i>&nbsp;&nbsp;Ver Ubicación Actual</a>
                    <a class="nav_item_own nav-link" onclick="clear_screen_maps();" id="v-pills-car_routes-tab" data-toggle="pill" href="#v-pills-car_routes" role="tab" aria-controls="v-pills-car_routes" aria-selected="false">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-map color_iconos_item" aria-hidden="true"></i>&nbsp;&nbsp;Rutas de un Vehículo</a>
                    <a class="nav_item_own nav-link" onclick="clear_screen_active();" id="v-pills-show_cars_active-tab" data-toggle="pill" href="#v-pills-show_cars_active" role="tab" aria-controls="v-pills-show_cars_active" aria-selected="false">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-check color_iconos_item" aria-hidden="true"></i>&nbsp;&nbsp;Vehículos Activos</a>
                    <%-- ROLES--%>
                    <a class="nav_title_fonts nav-link  disabled" style="color: white;"  data-toggle="pill" href="#" role="tab" aria-controls="" aria-selected="true"><i class="fa fa-cog " style="color: white; font-size: 25px; " aria-hidden="true"></i>&nbsp;&nbsp;Roles y Usuarios</a>
                    <a class="nav_item_own nav-link" id="v-pills-changing_roles-tab" onclick="clear_screen_roles_users();"  data-toggle="pill" href="#v-pills-changing_roles" role="tab" aria-controls="v-pills-changing_roles" aria-selected="false">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa  fa-pencil-square-o  color_iconos_item" style="font-size: 12px;" aria-hidden="true"></i>&nbsp;&nbsp;Cambiar Roles</a>
                </div>

            </div>
            <%--  FIN DEL DIV QUE CONTIENE LOS ITEM DEL LAS TABS-PILLS--%>

            <div class="col-md-9   col-xs-8 col-sm-8">
                <div class="tab-content" id="v-pills-tabContent">

                    <%-- TENEMOS UN ITEM PARA MOSTRAR CONFIGURACIONES--%>
                    <div class="tab-pane fade show active " id="v-pills-config" role="tabpanel" aria-labelledby="v-pills-config-tab">
                        <h1 style="color: gray;">Bienvenido</h1> 
                        <i class="fa fa-quote-left fa-3x fa-pull-left fa-border" aria-hidden="true"></i>
                        <h2 style="color: gray;">Si desea realizar alguna acción en el sistema proceda a seleccionar una de las opciones  
                            que se encuentran a la izquierda de este apartado.
                        </h2>
                        <div class="col-md-12">
                            <img  style="font-size: 64px; margin-left: 35%; margin-top: 12%;" src="images/home_logo.png" alt=""/>

                        </div>

                    </div>

                    <div class="tab-pane fade show  " id="v-pills-new_user" role="tabpanel" aria-labelledby="v-pills-new_user-tab">
                        <%-- TENEMOS UN FORMULARIOS PARA INGRESAR DATOS DE UN NUEVO USUARIO--%>
                        <div class="col-md-12" style="margin: 10px; color: black;">
                            <h6 style="color:#0396E3;">home/agregar usuario</h6>
                            <h3 style="color:#999999;">Ingresando datos de un nuevo funcionario</h3>
                            <hr/>
                        </div>

                        <div class="col-md-6">
                            <form action="javascript: send_user_data();" method="POST" style="background-color: white; padding: 0px; margin: 10px; font-size: 10pt;">
                                <div class="form-group">
                                    <label>Cédula</label>
                                    <input type="text" id="id" name="id" required="required" maxlength="25" class="form-control"  placeholder="102220333">
                                </div>
                                <div class="form-group">
                                    <label>Nombre Completo</label>
                                    <input type="text" id="name" name="name" required="required" maxlength="20" class="form-control" placeholder="Ejemplo: Juan">
                                </div>
                                <div class="form-group">
                                    <label>Primer Apellido</label>
                                    <input type="text" id="surname" name="surname" required="required" maxlength="20" class="form-control" placeholder="Ejemplo: Pérez">
                                </div>
                                <div class="form-group">
                                    <label>Segundo Apellido</label>
                                    <input type="text" id="second_surname" name="second_surname" maxlength="15" required="required"  class="form-control" placeholder="Ejemplo: Mora">
                                </div>
                                <div class="form-group">
                                    <label>Área de  Trabajo</label>
                                    <select class="custom-select" id="areas_select" name="areas_select" size="1" required="required">
                                        <%--  AQUÍ SE AGREGAN LAS ASREAS DESDE JAVASCRIPT--%>
                                    </select>
                                </div>
                                <div class="form-group">
                                </div>
                                <label>Teléfono</label>
                                <input type="text" id="phone" name="phone" required="required" maxlength="10" class="form-control" placeholder="1122334455">
                                <div class="form-group ">
                                    <label>Email</label>
                                    <input type="email" id="email" name="email" maxlength="45" required="required"  class="form-control" placeholder="Ejemplo: juan@gmail.com">
                                </div>

                                <div class="form-group">
                                    <label>Dirección</label>
                                    <input type="text" id="address" maxlength="45" name="address" required="required"  class="form-control" placeholder="Ejemplo: San Martín, Heredia">
                                </div>

                                <button type="submit" class="btn btn-success" >Agregar</button>
                            </form>
                            <div class="col-md-12" id="messageInsertUser"></div>
                        </div>
                        <div class="col-md-6" id="show_alert_add_user">
                            <%-- ESTE DIV ES PARA MOSTAR LA ALERTA DE CONFIRMACIÓN DE AGREGAR USUARIO.--%>
                        </div>
                    </div>

                    <%-- TENEMOS UN UN FORMULARIO PARA ACTUALIZAR LOS DATOS DE UN USUARIO--%>
                    <div class="tab-pane fade show  " id="v-pills-update_user" role="tabpanel" aria-labelledby="v-pills-update_user-tab">
                        <div class="col-md-12" style="margin: 10px; color: black;"> 
                            <h6 style="color:#0396E3;">home/actualizar usuario</h6>
                            <h3 style="color:#999999;">Actualizando los datos de un usuario</h3>
                            <hr/>
                        </div>
                        <div class="col-md-12 col-sm-8" style="margin: 10px; padding: 10px;">
                            <table class="display table table-hover table-sm compact" id="user_udpate_table" style="text-align: center;"width="100%">

                            </table>

                        </div>
                        <div class="col-md-6" id="show_alert_update_user">
                            <%-- ESTE DIV ES PARA MOSTAR LA ALERTA DE QUE FALTAN CAMPOS POR LLENAR.--%>
                        </div>
                        <div  class="col-md-5" style="margin: 10px; padding: 10px;" id="edit_div">


                        </div>
                        <div class="col-md-12" id="messageUpdateUser"></div>
                    </div>

                    <%-- TENEMOS UN FORMULARIOS PARA INGRESAR LA CEDULA DEL USUARIO QUE VAMOS A ELIMININAR--%>
                    <div class="tab-pane fade" id="v-pills-delete_user" role="tabpanel" aria-labelledby="v-pills-delete_user-tab">
                        <div class="col-md-12" style="margin: 10px; color: black;"> 
                            <h6 style="color:#0396E3;">home/desactivar usuario</h6>
                            <h3 style="color:#999999;">Desactivar un usuario del sistema</h3>
                            <hr/>

                        </div>
                        <div class="col-md-12" style="margin: 15px;">

                            <form action="javascript: search_user();">
                                <div class="form-row">
                                    <div class="col">
                                        <button class="btn btn-outline-light" type="button" style="color: black;">Desactivar un usuario</button>
                                    </div>
                                    <div class="col">

                                        <input type="text" class="form-control" onclick="show_error_delete_user();" placeholder="Cédula" id="delete_ced" name="delete_ced">
                                    </div>
                                    <div class="col">
                                        <button class="btn btn-success" type="submit">Buscar</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div class="col-md-12" style="margin: 10px; padding: 10px;">
                            <div class="col-md-8" id="messageDeleteUserAlert"></div>
                            <table class="table table-striped table-sm"  id="search_delete">

                                <thead id="head_search_delete">
                                </thead>

                                <tbody id="body_search_delete">
                                    <%-- SE AGREGA EL FORM--%>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <%-- TENEMOS UN UN FORMULARIO PARA AGREGAR UN NUEVO VEHICULO--%>
                    <div class="tab-pane fade show  " id="v-pills-new_car" role="tabpanel" aria-labelledby="v-pills-new_car-tab">
                        <div class="col-md-12" style="margin: 10px; color: black;"> 
                            <h6 style="color:#0396E3;">home/agregar usuario</h6>
                            <h3 style="color:#999999;">Agregar un nuevo vehículo al sistema</h3>
                            <hr/>
                        </div>
                        <div class="col-md-6">
                            <form action="javascript: send_vehicle_data();" method="POST" style="background-color: white; padding: 0px; margin: 10px; font-size: 10pt;">
                                <div class="form-group">
                                    <label>Placa </label>
                                    <input type="text" id="licensePlate" name="licensePlate" required="required" maxlength="25" class="form-control"  placeholder="KRW123">
                                </div>

                                <div class="form-group">
                                    <label>Marca</label>
                                    <select name="brans_select" required="required" id="brans_select" class="custom-select"  size="1">
                                        <%-- AQUI SE AGREGAN LAS OPCIONES DE LAS MARCAS DE LOS CARROS --%>

                                    </select>

                                    <%-- <input type="text" id="brand" name="brand" required="required" maxlength="20" class="form-control" placeholder="Ejemplo: Kia">
                                    --%>
                                </div>
                                <div class="form-group">
                                    <label>Modelo</label>
                                    <input type="text" id="model" name="model" required="required" maxlength="20" class="form-control" placeholder="Ejemplo: Rio">
                                </div>
                                <div class="form-group">
                                    <label>Año de adquisición</label>

                                    <select name="year_select" required="required" id="year_select" class="custom-select" >
                                        <%-- AQUI SE AGREGAN LAS OPCIONES DE LOS AÑOS.--%>

                                    </select>
                                </div>

                                <button type="submit" class="btn btn-success" >Agregar</button>
                            </form>
                            <div class="col-md-12" id="messageInsertVehicle"></div>
                        </div>
                    </div>

                    <%-- TENEMOS UN UN FORMULARIO PARA ACTUALIZAR LOS DATOS DE UN VEHICULO--%>
                    <div class="tab-pane fade show  " id="v-pills-update_car" role="tabpanel" aria-labelledby="v-pills-update_user-tab">
                        <div class="col-md-12" style="margin: 10px; color: black;"> 
                            <h6 style="color:#0396E3;">home/actualizar usuarios</h6>
                            <h3 style="color:#999999;">Actualizando los datos de un usuario</h3>
                            <hr/>
                        </div>
                        <div class="col-md-12" style="margin: 10px; padding: 10px;">
                            <table class="display table table-hover table-sm compact" id="vehicle_udpate_table" style="text-align: center;" width="100%" >

                            </table>
                        </div>
                        <div class="col-md-12" id="messageUpdateVehicle"></div>
                        <div  class="col-md-5" style="margin: 10px; padding: 10px;" id="vehicle_edit_div">

                        </div>
                    </div>

                    <%-- TENEMOS UN UN FORMULARIO PARA BUSCAR Y ELIMINAR UN VEHICULO--%>
                    <div class="tab-pane fade" id="v-pills-delete_car" role="tabpanel" aria-labelledby="v-pills-delete_car-tab">
                        <div class="col-md-12" style="margin: 10px; color: black;"> 
                            <div class="col-md-12" style="margin: 10px; color: black;"> 
                                <h6 style="color:#0396E3;">home/eliminar vehículo</h6>
                                <h3 style="color:#999999;">Eliminando un vehículo del sistema</h3>
                                <hr/>
                            </div>
                            <div class="col-md-12" style="margin: 15px;">
                                <form action="javascript: search_vehicle();">
                                    <div class="form-row">
                                        <div class="col">
                                            <button class="btn btn-outline-light" type="button" style="color: black;">Eliminar un vehículo</button>
                                        </div>
                                        <div class="col">

                                            <input type="text" class="form-control" placeholder="Número de placa"
                                                   onclick="clear_messaje_vehicle();" id="delete_vehicle" name="delete_vehicle">
                                        </div>
                                        <div class="col">
                                            <button class="btn btn-success" type="submit">Buscar</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <%-- Tabla para mostrar los resultados de búsqueda --%>
                            <div class="col-md-12" style="margin: 10px; padding: 10px;">
                                <div class="col-md-12" id="vehicle_message"></div>
                                <h4 id="message2"></h4>
                                <table class="table table-striped" id="vehicle_search_delete">

                                    <thead id="head_vehicle_search_delete">
                                    </thead>

                                    <tbody id="body_vehicle_search_delete">
                                        <%-- SE AGREGA EL FORM--%>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>



                    <%-- TENEMOS UNA TABLA PARA MOSTRAR LOS USUARIOS Y BUSCAR UNO--%>
                    <div class="tab-pane fade" id="v-pills-show_users" role="tabpanel" aria-labelledby="v-pills-show_users-tab">
                        <div class="col-md-12" style="margin: 10px; color: black;">
                            <h6 style="color:#0396E3;">home/consultar usuario-vehículo</h6>
                            <h3 style="color:#999999;">Consultar un usuario y su vehículo asignado</h3>
                            <hr/>
                        </div>
                        <div class="col-md-8" style="margin: 10px; padding: 10px; text-align: center;">
                            <form action="javascript: search_user_and_show();" method="POST">
                                <div class="form-row">
                                    <div class="col">
                                        <button class="btn btn-outline-light" type="button" style="color: black;">Buscar</button>
                                    </div>
                                    <div class="col">
                                        <input type="text" class="form-control"onclick="show_error_showing_user();" id="consult_user" name="consult_user" placeholder="Cédula">
                                    </div>
                                    <div class="col">
                                        <button class="btn btn-success" type="submit">Buscar</button>
                                    </div>
                                </div>
                            </form>

                        </div>
                        <div class="col-md-12" style="margin: 10px; padding: 10px;">
                            <h4 style="color: red;" id="messageShowUsers"></h4>
                            <table class="table table-striped">
                                <thead id="t_head_show_users">
                                    <%--SE AGREGAN DESDE JAVASCRIPT --%>
                                </thead>
                                <tbody id="t_body_show_users">
                                    <%-- ACA SE AGRAGAN LAS FILAS DESDE JAVASCRIPT--%>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <%-- TENEMOS UN DIV PARA MOSTRAR LA UBICACIÓN ACTUAL DE UN VEHICULO--%>
                    <div class="tab-pane fade" id="v-pills-show_cars" role="tabpanel" aria-labelledby="v-pills-show_cars-tab">
                        <div class="col-md-12" style="margin: 10px; color: black;">
                            <h6 style="color:#0396E3;">home/vehículos disponibles</h6>
                            <h3 style="color:#999999;">Ver los vehículos disponibles y sus detalles</h3>
                            <hr/>
                        </div>
                        <div class="col-md-12" style="margin: 15px;">
                            <form >
                                <div class="form-row">
                                    <div class="col">

                                        <input id="" type='' class="form-control" name="" />

                                    </div>
                                    <div class="col">

                                        <input type="text" class="form-control" onclick="" placeholder="Ingrese placa" id="pk_plate_current" name="pk_plate">
                                    </div>
                                    <div class="col">
                                        <button class="btn btn-success"onclick="current_Location();"   id="btVerRutas1" type="button">Ver ubicación actual</button>

                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="row col-md-12 " id="current_location_map" style=" margin: 12px; height: 500px; overflow: auto; "> 
                        </div>
                    </div>

                    <%-- TENEMOS UNA TABLA PARA MOSTRAR LAS RUTAS DE UN VEHICULOL--%>
                    <div class="tab-pane fade" id="v-pills-car_routes" role="tabpanel" aria-labelledby="v-pills-car_routes-tab">
                        <div class="col-md-12" style="margin: 10px; color: black;"> 
                            <h6 style="color:#0396E3;">home/rutas de un vehículo</h6>
                        </div>
                        <div class="col-md-12" style="margin: 15px;">
                            <form >
                                <div class="form-row">
                                    <div class="col">

                                        <input id="pk_date" type='date' class="form-control" name="pk_date" />

                                    </div>
                                    <div class="col">

                                        <input type="text" class="form-control" onclick="clearAlertRoutes();" placeholder="Ingrese placa" id="pk_plate" name="pk_plate">
                                    </div>
                                    <div class="col">
                                        <button class="btn btn-success"  id="btVerRutas1" type="button">Ver rutas</button>

                                    </div>
                                </div>
                            </form>


                        </div>
                        <div class="alert alert-warning  " id="errorMessageRoutes" hidden="true">
                            <strong id="MessageToShow"></strong>
                        </div>
                        <div class="row col-md-12 " id="div_all_routes" style=" margin: 12px; height: 500px; overflow: auto; "> 
                        </div>


                    </div>
                    <%--  EN ESTE DIV SE MUSETRA EL MAPA--%>
                    
                    <%-- TENEMOS UNA TABLA PARA MOSTRAR VEHICULOS Activos--%>
                    <div class="tab-pane fade" id="v-pills-show_cars_active" role="tabpanel" aria-labelledby="v-pills-show_cars_active-tab">
                        <div class="col-md-12" style="margin: 10px; color: black;">
                            <h6 style="color:#0396E3;">home/vehículos activos</h6>
                            <h3 style="color:#999999;">Ver los vehículos activos y sus detalles</h3>
                            <hr/>
                        </div>

                        <div class="col-md-12" style="margin: 15px;">
                            <form onclick="clearAlertActive();">
                                <div class="form-row">
                                    <div class="col">
                                        <input id="inputIdentify" type='text' placeholder="Id usuario o Placa" class="form-control" name="inputIdentify"/>
                                    </div>
                                    <div class="col">
                                        <select  class="custom-select" placeholder="Seleccione uno" size="1" required="required" id="plate_id_select" name="plate_id_select" >
                                            <option name="plate_act" >Placa</option>
                                            <option name="idUser_act">Usuario</option>
                                        </select>
                                    </div>
                                    <div class="col">
                                        <button type="button" class="btn btn-success" id="btVerAct">Enviar</button>
                                    </div>
                                </div>
                            </form>
                            <div class="alert alert-warning  " id="errorMessageActive" hidden="true">
                                <strong id="MessageToShow1"></strong>
                            </div>
                            <div class="row col-md-12 " id="div_active_route" style=" margin: 12px; height: 500px; overflow: auto; "> 
                            </div>
                            <div class="row col-md-12 " id="map1" style=" margin: 12px; height: 500px; overflow: auto; "> 
                            </div>
                        </div>
                    </div>
                    
                    <%-- TENEMOS UNA TABLA PARA BUCAR UN USUARIO Y CAMBIARLE EL ROL EN LA BASE DE DATOS. --%>
                    <div class="tab-pane fade" id="v-pills-changing_roles" role="tabpanel" aria-labelledby="v-pills-changing_roles-tab">

                        <div class="col-md-12" style="margin: 10px; color: black;">
                            <h6 style="color:#0396E3;">home/perimos de un usuario</h6>
                            <h3 style="color:#999999;">Cambiar los perimos de un usuario en el sistema</h3>
                            <hr/>
                        </div>
                        <div class="col-md-8" style="margin: 10px; padding: 10px;">
                            <form action="javascript: search_user_to_change_rol();">
                                <div class="form-row">
                                    <div class="col">
                                        <button class="btn btn-outline-light" type="button" style="color: black;">Buscar</button>
                                    </div>
                                    <div class="col">

                                        <input type="text" id="ced_rol" onclick="show_error_showing_user_roles();"name="ced_rol" class="form-control"  placeholder="Cédula">
                                    </div>
                                    <div class="col">
                                        <button class="btn btn-success" type="submit">Buscar</button>
                                    </div>
                                </div>
                            </form>

                        </div>
                        <div class="col-md-12" style="margin: 10px; padding: 10px;">
                            <h4 style="color: red;" id="messageShowUsersRoles"></h4>
                            <table class=" text-center  table table-striped  "  >
                                <thead id="t_head_roles">
                                    <%-- SE HACE DESDE JAVASCRIPT --%>
                                </thead>
                                <tbody id="t_body_roles">
                                    <%-- SE HACE DESDE JAVASCRIPT --%>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <hr />
            <p class="footer_administrator" style="text-align: center;">Copyright © 2018 - Vehicle Tracker System</p>
        </footer>

        <%-- ESTA LINEA CARGA EL API DE GOOGLE--%>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCeRi5ODuX2isXTxwhUoK9grlqiJJ2FGc8&callback=initializeAPIComponents"async defer></script>

    </body>


    <% } else { %>
    <META HTTP-EQUIV="REFRESH" CONTENT="3;URL=home_page.jsp"> 
    <body style="text-align: center;">
        <h2>Ud será redirigido a la página de inicio de sesión.</h2>
    </body>
    <% }%>

    <script>
                                            //ESTAS FUNCIONES SON PARA AGREGARLE EVENTOS A LOS ICONOS (PENCIL) QUE APARECEN EN LA TABLA PARA EDITAR 
                                            //UN USUARIO EN ESPECIFICO
                                            $(document).on('click', '.icon_edit_users', function (e) {
                                                edit_user_form(e);//AL DAR CLICK DESPLIEGA UN FORMUARIO PARA EDITAR LOS DATOS DE UN USUARIO EN ESPECIFICO.

                                            });
                                            $(document).on('mouseover', '.icon_edit_users', function (e) {
                                                edit_user_pencil_on_mouse_over(e);//AL PASAR EL CURSOR ENCIMA, EL PENCIL CAMBIA DE COLOR Y EL CURSOR DE FORMA.

                                            });
                                            $(document).on('mouseout', '.icon_edit_users', function (e) {
                                                edit_user_pencil_on_mouse_out(e); //AL QUITAR EL CURSOR DE ENCIMA, EL PENCIL QUEDA CON EL ESTILO ORIGINAL.

                                            });
                                            $(document).on('click', '.icon_edit_users', function (e) {
                                                scroll_up(e); //BAJA EL SCROLL PARA QUE SE MUESTRE EL FORMULARIO QUE PERMITE EDITAR LOS DATOS DE UN USUARIO.

                                            });



                                            //ESTAS FUNCIONES SON PARA AGREGARLE EVENTOS A LOS ICONOS (PENCIL) QUE APARECEN EN LA TABLA PARA EDITAR 
                                            //UN VEHICULO EN ESPECIFICO
                                            $(document).on('click', '.icon_edit_vehicles', function (e) {
                                                edit_vehicle_form(e);//AL DAR CLICK DESPLIEGA UN FORMUARIO PARA EDITAR LOS DATOS DE UN VEHICULO EN ESPECIFICO.

                                            });
                                            $(document).on('mouseover', '.icon_edit_vehicles', function (e) {
                                                edit_user_pencil_on_mouse_over(e);//AL PASAR EL CURSOR ENCIMA, EL PENCIL CAMBIA DE COLOR Y EL CURSOR DE FORMA.

                                            });
                                            $(document).on('mouseout', '.icon_edit_vehicles', function (e) {
                                                edit_user_pencil_on_mouse_out(e); //AL QUITAR EL CURSOR DE ENCIMA, EL PENCIL QUEDA CON EL ESTILO ORIGINAL.

                                            });
                                            $(document).on('click', '.icon_edit_vehicles', function (e) {
                                                scroll_up(e); //BAJA EL SCROLL PARA QUE SE MUESTRE EL FORMULARIO QUE PERMITE EDITAR LOS DATOS DE UN VEHICULO.

                                            });

    </script>
    <script>
        $(document).ready(function () {
            $('#datetimepicker1').datepicker();
        });
    </script>

</html>
