<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include  file='header.jsp' %>
<!DOCTYPE html>
<html>
    <head>


        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/css/bootstrap.min.css" />
        <%--
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
        --%>
        <script src="js/jquery.js" type="text/javascript"></script>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.5.0/css/bootstrap-datepicker.min.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.12.0/moment.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.5.0/js/bootstrap-datepicker.min.js"></script>


    </head>
    <body>



        <div class="form-group">
            <div class='input-group date' id='datetimepicker1'>
                <input type='text' class="form-control" />
                <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span>
                </span>
            </div>
        </div>

    </body>

    <script>
        $(document).ready(function () {
            $('#datetimepicker1').datepicker();
        });
    </script>
</html>
