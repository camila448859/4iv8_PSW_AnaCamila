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
 * @author ommyr
 */
public class registroalumno extends HttpServlet {
    
    
    
    private Connection con;
    private Statement set;
    private ResultSet rs;

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
    
     */
    
    
     public void init(ServletConfig scg) throws ServletException
     {
        //Se debe de establecer los elementos para la conexión con BD
        String url = "jdbc:mysql:8080//localhost/registrodocente";
                    //controlador:motorBD:puerto//IP//nombreBD4
                    
        String username = "root";
        String password = "n0m3l0";
       
        
        try{
            //Intentar conectar a la BD
            Class.forName("com.mysql.jdbc.Driver");
            url = "jdbc:mysql://localhost/registrodocente";
            
            con = DriverManager.getConnection(url, username, password);
            set = con.createStatement();
            
            System.out.println("Si conecto a la BD :3 *w* ");
            
        }catch(Exception e){
            System.out.println("No conecto, solo juguito contigo uwu");
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
        processRequest(request, response);
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
      response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Registro de Alumno</title>");            
            out.println("</head>");
            out.println("<body>");
            
           try{
               String nom,apellidop,apellidom,sex, usuario,fecha;
               int num_emple,contra, rol;
               
               //Vamos a obtener los parametros para insertarlos en la BD
              num_emple=Integer.parseInt(request.getParameter("numero_empleado"));
              nom=request.getParameter("nombre");
              apellidop=request.getParameter("appat");
              apellidom=request.getParameter("apmat");
              sex=request.getParameter("sexo");
              fecha=request.getParameter("fecha_nacimiento");
              usuario=request.getParameter("user");
              contra=Integer.parseInt(request.getParameter("pass"));
              rol=Integer.parseInt(request.getParameter("id_rol"));
              
               System.out.println(num_emple);
               System.out.println(nom);
               System.out.println(apellidop);
               System.out.println(apellidom);
               System.out.println(sex);
               System.out.println(fecha);
               System.out.println(usuario);
               System.out.println(contra);
               System.out.println(rol);
               
             String q = "insert into mpersona values("+num_emple+",'"+nom+"','"+apellidop+"','"+apellidom+"','"+sex+"','"+fecha+"','"+usuario+"',"+contra+")";
             
             set.executeUpdate(q);
             out.println("<h1>Docente registrado con éxito</h1>");
               System.out.println("Datos registrados");
              
              
          
           }catch(Exception e){
               System.out.println("No se pudo registrar el docente");
               System.out.println(e.getMessage());
               System.out.println(e.getStackTrace());
               out.println("<h1>No se registro hay un error</h1>");
               
           }
           out.println("<a href='Consulta'>Consulta los datos de registro</a>");
           out.println("<a hhref='index.html'>Regresa al index</a>");
            out.println("</body>");
            out.println("</html>");
        }
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
