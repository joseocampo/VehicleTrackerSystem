<%-- 
    Document   : inicio
    Created on : 10/09/2018, 05:03:39 PM
    Author     : Jose Ocampo
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="DB_Conection.Conection"%>
<%@include  file='header.jsp' %>
<!DOCTYPE html>
<html>
    <head>
        <title>login</title>
        <script src="js/script.js" type="text/javascript"></script>
    </head>
    <body>

        <header class="banner" role="banner">

            <div style=" background-color: #209DFF; padding:  15px; width: 100%;">
                <h1 style="margin-left: 10%; font-family: sans-serif;"><i class="fa fa-car" style="font-size:36px"></i>&nbsp;&nbsp;VTS</h1>
                <h2 style="margin-left: 10%; font-family: sans-serif;">Vehicle Tracker System</h2>
            </div>


        </header>
        <div class="row" style="margin: 40px 20px 20px 20px;">
            <div class="col-md-2" style="margin-top: 5%;">
                <img src="images/logo.png" alt="" height="250px" width="250px" />
            </div>


            <div class="col-md-3" style="margin-left: 19%;">
                <form action="javascript: login();" id="formLogin" method="POST" style="align-content: center;  margin-top: 10%;">
                    <div class="form-group">
                        <label>Ingreso al sistema</label>
                        <label style="color: red;" id="error_login_label"></label>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Cédula</label>
                        <input type="id" class="form-control" name="id_login" id="id_login" onclick="trying_login();" aria-describedby="idHelp" placeholder="Enter Id">

                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Contraseña</label>
                        <input type="password" class="form-control" name="pass_login" id="pass_login" onclick="trying_login();"placeholder="Password">
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Recuérdame</label>

                    </div>
                    <br />
                    <button type="submit" class="btn btn-success ">Iniciar sesión</button>

                </form>
            </div>

        </div>
        <footer>
            <hr />
            <p class="footer_administrator" style="text-align: center ">Copyright © 2018 - Vehicle Tracker System</p>
        </footer>
    </body>
</html>
