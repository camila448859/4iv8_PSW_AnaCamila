function validarc(e){
    var datos = (document.all)?e.KeyCode : e.which

    if(datos==8) return true;
    var rango=/[0-9\d .]/

    var probar = String.fromCharCode(datos);
    return rango.test(probar);

}
function interes(){
    var valor = document.ejercicio1.cantidad.value;

    var resultado = parseFloat(valor);
    var interes = resultado*0.020;
    var total = resultado + interes;


    document.ejercicio1.sueldoT.value = "$" + total
}

function borrardatos(){
    document.ejercicio1.sueldoT.value = "";
    document.ejercicio1.cantidad.value = "";
}




function calculaEdad(diaNacimiento, mesNacimiento, anioNacimiento)
{
  var diaNacimiento=document.getElementById("dia").value;
  var mesNacimiento=document.getElementById("mes").value;
  var anioNacimiento =document.getElementById("anio").value;
  var salida=document.getElementById("salida");
  
        this.diaNacimiento=diaNacimiento;
        this.mesNacimiento=mesNacimiento;
        this.anioNacimiento=anioNacimiento;
    
        this.edad=function edad()
        {
           var calcula=0;
           var objeto=new Date();
           var dia=objeto.getDate();
           var mes= objeto.getMonth()+1;
           var hoy=objeto.getFullYear();

                if(mes<this.mesNacimiento||(mes==this.mesNacimiento&&dia<this.dia))
                {
                  return calcula=parseInt(hoy-this.anioNacimiento)-1; 
                }
                else
                {
                   return calcula=parseInt(hoy-this.anioNacimiento);  
                }
          };
    salida.innerHTML= "La edad actual de es:  "+this.edad()+".";
}