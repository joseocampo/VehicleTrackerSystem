<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="DB_Conection.Conection"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="js/bootstrap.js" type="text/javascript"></script>
        <link href="css/styles.css" rel="stylesheet" type="text/css"/>
        <script src="js/script.js" type="text/javascript"></script>
        <link href="css/bootstrap.css" rel="stylesheet" type="text/css"/>
        <script src="js/bootstrap.js" type="text/javascript"></script>
        <script src="js/jquery.js" type="text/javascript"></script>
        <title>JSP Page</title>
    </head>
    <body>
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="administrator_home.jsp">Inicio</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </nav>
        </header>



        <div class="container">
            <div class="row">
                <div class=" col-md-5" style="margin: 15px;">

                    <form action="New_User_Service" method="GET" style="background-color: white; padding: 15px; margin: 12px;">
                        <div class="form-group">
                            <label>Cedula</label>
                            <input type="text" id="id" name="id" required class="form-control" placeholder="Ingrese cedula">
                        </div>
                        <div class="form-group">
                            <label>Nombre Completo</label>
                            <input type="text" id="name" name="name" required class="form-control" placeholder="Nombre">
                        </div>
                        <div class="form-group">
                            <label>Area de  Trabajo</label>
                            <input type="text" id="area" name="area" required class="form-control" placeholder="Area de trabajo">
                        </div>
                        <div class="form-group">
                            <label>Telefono</label>
                            <input type="text" id="phone" name="phone" required class="form-control" placeholder="Telefono">
                        </div>
                        <div class="form-group ">
                            <label>Email</label>
                            <input type="email" id="email" name="email"  required class="form-control" placeholder="Email">
                        </div>

                        <div class="form-group">
                            <label>Dirección</label>
                            <input type="text" id="address" name="address" required class="form-control" placeholder="Direccion">
                        </div>

                        <button type="submit" class="btn btn-success" >Agregar</button>
                    </form>

                </div>

            </div>

        </div>
        

    </body>
</html>
