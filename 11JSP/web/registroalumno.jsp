

<%@page import="java.sql.*"%>
<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
        
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="CSS/style.css">
        <style>
            
        </style>
    </head>
    <body style="background-image: url(Fotos/gatito.jpg);">
    <%
        //aqui tya puedo incorporar java
        Connection con= null;
        Statement set=null;
        ResultSet rs= null;
        
        String username, url, password, driver;
        
        url = "jdbc:mysql://localhost/alumnos";
        //username= "root";
        username= "CAMILA";
        password= "CAMILA";
        //password= "n0m3l0";
        
        driver="com.mysql.jdbc.Driver";
        
        try{
        //conectamos
            Class.forName(driver);
            con= DriverManager.getConnection(url, username, password);
        
            try{
                String nom, appat, apmat, tel;
                int bol;
                
                        
                 nom= request.getParameter("nombre"); 
                 System.out.println(nom);
                 appat= request.getParameter("appat");
                 System.out.println(appat);
                 apmat= request.getParameter("apmat");
                 System.out.println(apmat);
                 tel= request.getParameter("tel");
                 System.out.println(tel);
                 bol= Integer.parseInt(request.getParameter("bol"));
                 System.out.println(bol);
                
                 set= con.createStatement();
                 
                 String q= "insert into alumnobatiz "
                    + "values("+bol+", '"+nom+"', '"+appat+"', '"+apmat+"', '"+tel+"')";
                 
                 int registro= set.executeUpdate(q);
                 
                 if (registro==1){
                    response.sendRedirect("consultaralumno.jsp");}
                
                 %>
                 
                 <% 
                     
                
                 
                }catch(SQLException es){
                System.out.println("Error al registrar la tabla");
                System.out.println(es.getMessage());
                %>
                <div class="xd">
                <h1>No se pudo registra en la tabla</h1>
                <br>
                <a href="index.html">Registrar otro alumno</a>
                </div>
                <%
            }
        }catch(Exception e){
            System.out.println("Error al conectar la BD");
            System.out.println(e.getMessage());
            %>
            <h1>No conecto con la BD T_T</h1>
            <%
             
       }
        
    %>
    
    </body>
</html>
