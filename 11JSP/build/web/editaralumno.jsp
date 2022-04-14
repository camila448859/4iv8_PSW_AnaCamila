

<%@page import="java.sql.*"%>
<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="CSS/style.css">
    </head>
    <body style="background-image: url(Fotos/conejito.jpg);" aling="center">
        <div class="xd">
        <h1>EDITAR</h1>
        <br>
        <form method="post" name="editar" action="actualizaralumno.jsp"  >
            
        <%
        //Aquí ya puedo incorporar java
        Connection con = null;
        Statement set = null;
        ResultSet rs = null;
        
        String username, url, password, driver;
        
        url = "jdbc:mysql://localhost/alumnos";
        //username = "root";
        username= "CAMILA";
        password= "CAMILA";;
        //password= "n0m3l0";
        
        driver = "com.mysql.jdbc.Driver";
        
        try{
            //Conectarnos
            Class.forName(driver);
            con = DriverManager.getConnection(url, username, password);
            
            try{
                int id = Integer.parseInt(request.getParameter("id"));
                
                String q = "select * from alumnosbatiz where boleta ="+id;
                
                set = con.createStatement();
                
                rs = set.executeQuery(q);
                
                while(rs.next()){
                
                %>
                <label>Boleta</label>
                <br>
                <input type="text" readonly="true" name="boleta2" value="<%=rs.getString("boleta")%>">
                <br>
                
                <label>Nombre</label>
                <br>
                <input type="text" maxlength="30" name="nombre2" value="<%=rs.getString("nombre")%>"
                       onkeypress="return(event.charCode >=65 && event.charCode <=90 || event.charCode >=97 && event.charCode <=122 || event.charCode ==32 )">
                
                <br>
                
                <label>Apellido Paterno</label>
                <br>
                <input type="text" maxlength="15" name="appat2" value="<%=rs.getString("appat")%>"  
                       onkeypress="return(event.charCode >=65 && event.charCode <=90 || event.charCode >=97 && event.charCode <=122 || event.charCode ==32 )">
                
                <br>
                
                <label>Apellido Materno</label>
                <br>
                <input type="text" maxlength="15" name="apmat2" value="<%=rs.getString("apmat")%>" 
                       onkeypress="return(event.charCode >=65 && event.charCode <=90 || event.charCode >=97 && event.charCode <=122 || event.charCode ==32 )">
                
                <br>
                
                <label>Telefono</label>
                <br>
                <input type="text" maxlength="10" name="tel2" value="<%=rs.getString("telefono")%>"
                       onkeypress="return(event.charCode >=48 && event.charCode <=57)">
                <br>
                
                <br>
                <input type="submit" value="Actualizar Datos">
                <br>
                <input type="reset" value="Borrar datos">
                <br>
                <a href="borraralumno.jsp?id=<%=rs.getInt("boleta")%>" >Borrar Alumno</a>
                </div>
                <%
                }
            }catch(SQLException es){    
                
                System.out.println("Error al registrar en la tabla");
                System.out.println(es.getMessage());

                %>
                <h1>NO se puede consultar la tabla</h1>
                <%
            }
        }catch(Exception e){

            System.out.println("Error al conectar la BD");
            System.out.println(e.getMessage());

            %>
            <h1>No se conectó con la BD</h1>
            <%
        }
        %>
            </form>
            <br>
        <a href="index.html">Regresar a Principal</a>
        
    </body>
</html>