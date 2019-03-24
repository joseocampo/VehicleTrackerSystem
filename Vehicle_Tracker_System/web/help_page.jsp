<%-- 
    Document   : help_page
    Created on : 21/09/2018, 10:30:42 AM
    Author     : Jose Ocampo
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="header.jsp" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>help</title>
    </head>
    <body>
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand"onclick="location = 'administrator_home.jsp'" href="#"><i class="fa fa-home" style="font-size:36px; color: #0396E3;"></i>&nbsp; Inicio</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

            </nav>
        </header>
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-lg-12 col-sm-12 col-xm-4">
                    <div class="col-md-12" style="margin: 10px; color: black;"> 
                        <h3 style="color: #999999;">Aquí mostramos una guía sobre cómo funciona cada módulo del sistema.</h3>
                        <hr/>
                    </div>
                    <div class="card-deck"  >
                        <div class="col-md-6 col-sm-12" >
                            <div class="card help_cards col-md-12 col-sm-12 col-lg-12" style="margin:  30px;" >
                                <i class="fa fa-users" style="color: #0396E3; font-size: 25px;" aria-hidden="true"></i>
                                <div class="card-body">
                                    <h5 class="card-title">Usuarios</h5>
                                    <p class="card-text" style="text-align: justify;">El administrador puede ingresar un nuevo funcionario a la base de  datos, para ello deberá seleccionar la opción
                                        <strong>Crear Usuario</strong> y proceder a ingresar todos los datos del nuevo usuario y presionar el boton agregar para
                                        agregarlo en la base de datos.
                                    </p>
                                    <hr />
                                    <p>
                                        Para modificar un usuario de dar click en la opcion <strong>Actualizar datos de un Usuario</strong>
                                    </p>
                                    <hr />
                                    <p>
                                        Si desea eliminar (desactivar un usuario en el sistema), debe seleccionar la opción
                                        <strong>Desactivar Usuario</strong>, para que no pueda ingresar al sistema.
                                    </p>
                                </div>
                                <div class="card-footer">
                                    <small  style="color: #0396E3; "><i class="fa fa-arrow-left" onclick="location = 'administrator_home.jsp'" style="color: green; font-size: 18px;" aria-hidden="true"></i>&nbsp;Intentar una opción</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12">
                            <div class="card help_cards col-md-12 col-sm-12 col-lg-12"style="margin:  30px;" >
                                <i class="fa fa-car" style="color: #0396E3;  font-size: 25px;" aria-hidden="true"></i>
                                <div class="card-body">
                                    <h5 class="card-title">Vehículos</h5>
                                    <p class="card-text" style="text-align: justify;">El administrador puede ingresar un nuevo vehículo a la base de  datos, para ello deberá seleccionar la opción
                                        <strong>Ingresar Vehículo</strong> y proceder a ingresar todos los datos del nuevo vehículo y presionar el boton agregar para
                                        agregarlo en la base de datos.     
                                    </p>
                                    <hr />
                                    <p>
                                        Para modificar un vehículo debe dar click en la opcion <strong>Actualizar datos Vehículo</strong>
                                    </p
                                    <hr />
                                    <p>
                                        Si desea eliminar un vehículo de la base de datos debe seleccionar la opción
                                        <strong>Eliminar Vehículo </strong> .
                                    </p>

                                </div>
                                <div class="card-footer">
                                    <small  style="color: #0396E3;"><i class="fa fa-arrow-left" onclick="location = 'administrator_home.jsp'"  style="color: green; font-size: 18px;" aria-hidden="true"></i>&nbsp;Intentar una opción</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12">
                            <div class="card help_cards col-md-12 col-sm-12 col-lg-12" style="margin:  30px;">
                                <i class="fa fa-binoculars" style="color: #0396E3;  font-size: 25px;" aria-hidden="true"></i>
                                <div class="card-body">
                                    <h5 class="card-title">Consultas</h5>
                                    <p class="card-text" style="text-align: justify;">El administrador puede 
                                        seleccionar la opción <strong>Consultar  Usuarios</strong>
                                        para ver sus datos y además ver cuál vehículo tiene asignado.
                                    </p>
                                    <hr />
                                    <p>
                                        Si desea ver todos los vehículos disponibles de la Municipalidad puede dar click 
                                        en la opción <strong>Vehículos Disponibles</strong>, se desplegará una tabla con 
                                        los datos de cada vehículo.
                                    <hr />
                                    </p>
                                    <p>
                                        Si desea ver todos las rutas de un  vehículo debe dar click en la opción
                                        <strong>Rutas de un Vehículo</strong>, se desplegará una tabla con 
                                        los datos de cada vehículo y las respectivas rutas que ha tenido.
                                    </p>
                                </div>
                                <div class="card-footer">
                                    <small  style="color: #0396E3;"><i class="fa fa-arrow-left" onclick="location = 'administrator_home.jsp'"  style="color: green;  font-size: 18px;" aria-hidden="true"></i>&nbsp;Intentar una opción</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12">
                            <div class="card help_cards col-md-12 col-sm-12 col-lg-12" style="margin:  30px;">
                                <i class="fa fa-exchange" style="color: #0396E3; font-size: 25px;" aria-hidden="true"></i>
                                <div class="card-body">
                                    <h5 class="card-title">Roles y Usuarios</h5>
                                    <p class="card-text" style="text-align: justify;">
                                        El administrador puede cambiar el rol a los demás usuarios del sitema, para ello
                                        debe seleccionar la opción 
                                        <strong>Cambiar Roles </strong> y proceder a ingresar la cedula del usuario
                                        al que desea cambiarle el rol.
                                        <span><em style="color: red;">Los roles que un usuario puede tener son:<br></em></span>
                                            <strong style="color: #0056b3;">Rol de administrador.
                                                <br >Rol de usuario del sistema.</strong>
                                    </p>
                                </div>
                                <div class="card-footer">
                                    <small  style="color: #0396E3;"><i class="fa fa-arrow-left"  onclick="location = 'administrator_home.jsp'" style="color: green; font-size: 18px;" aria-hidden="true"></i>&nbsp;Intentar una opción</small>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
        <footer>
            <hr />
            <p class="footer_administrator" style="text-align: center ">Copyright © 2018 - Vehicle Tracker System</p>
        </footer>

    </body>
</html>
