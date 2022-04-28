/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Alumno
 */
public class consulta extends HttpServlet {

    /*
    Para poder establecer una conexión con base de datos
    es necesario contar con 3 tipos de objetos muy específicos 
    los cuales son:
    1.Connection es el encargado de estbalecer la coneción con la base de datos
    
    2. Statement sirve para pode definir y manipular los diferentes objetos de las querrys como por ejemplo
                                                            create, delete, insert, update,drop etc
    3. ResultSet el cual sirve para poder realizar las consultas a la base de datos 
     */
    
    private Connection con;
    private Statement set;
    private ResultSet rs;
    
    
    //Lo segundo se debe de tener el constructor
    
    public void init(ServletConfig scg) throws ServletException{
        //Se deben de establecer los elementos para la conexion con BD
        
        String url="jdbc:mysql:8080//localhost/alumno";
        //controlador:motor de BB//IP/nombreBD
        
     String username="root";
     String password="n0m3l0";
     
     try{
         //Intentar conectar con la bse de datos
         Class.forName("com.mysql.jdbc.Driver");
         url="jdbc:mysql://localhost/alumno";
         con=DriverManager.getConnection(url,username,password);
         set=con.createStatement();
         System.out.println("Si conecto a la base de datos :V");
     }catch(Exception e){
         
         System.out.println("no conecto. solo jugo contigo papu");
         System.out.println(e.getMessage());
         System.out.println(e.getStackTrace());
     }
        
        
       
        
    }
    
    
    
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
       
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Tabla de docentes registrados</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Lista de alumnos de batiz</h1>"
                    + "<br>"
                    + "<table border='2'>"
                    + "<tr>"
                        + "<th>Numero de empleado</th>"
                        + "<th>Nombre del docente</th>"
                        + "<th>sexo</th>"
                        + "<th>fecha de nacimiento</th>"
                        + "<th>usuario</th> "
                        + "<th>contraseña</th>"
                        + "<th>rol</th>"
                    + "</tr>");
           try{
               int bol;
               String nom,apellidopaterno,apellidomaterno,tel;
               
               //que tipo de querry voy a realizar
               String q="select * from alumnobatiz";
               
               set=con.createStatement();
               rs=set.executeQuery(q);
               while(rs.next()){
                   bol=rs.getInt("boleta");
                   nom=rs.getString("nombre");
                   apellidopaterno=rs.getString("appat");
                   apellidomaterno=rs.getString("apmat");
                   tel=rs.getString("telefono");
                   
                   out.print("<tr>"
                             + "<td>"+bol+"</td>"
                             + "<td>"+nom+" "+apellidopaterno+" "+apellidomaterno+"</td>"
                             + "<td>"+tel+"<td>"
                           + "</tr>");
               }
               rs.close();
               set.close();
               
                     
           }catch(Exception e){
               System.out.println("Error al conectar la tabla ");
       
               System.out.println(e.getMessage());
               System.out.println(e.getStackTrace());
           }
                    
            out.println( "</table>"
                    + "<br>"
                    + "<a href= ");
             out.println("<a href='index.html'>Regresa</a>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>
    public void destroy(){
        try{
            con.close();
        }catch(Exception e){
            super.destroy();
        }
    }
}
