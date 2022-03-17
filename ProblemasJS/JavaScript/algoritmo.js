//ejercicio 1
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

//ejercicio 2
function sueldo(e){
    var datos = (document.all)?e.KeyCode : e.which

    if(datos==8) return true;
    var rango=/[0-9\d .]/

    var probar = String.fromCharCode(datos);
    return rango.test(probar);

}
function comision(){

    var valor=document.ejercicio2.sueldo_base.value;

    var resultado=parseInt(valor);
    var ventas=resultado*0.30;
    var sueldot=resultado+ventas;
    
    document.ejercicio2.Total.value="Tu sueldo total es: " + sueldot;
}

//ejercicio 3
function total(e){
    var datos = (document.all)?e.keycode : e.which
    if (datos==8) return true;  
    var caracteres=/[0-9\d .]/

    var probar = String.fromCharCode(datos);
    return caracteres.test(probar);
}
function calcular(){
    var val=document.ejercicio3.totalCompra.value;

    var resultado= parseInt(val);
    var descuento= resultado*0.15;
    var total= resultado-descuento;

    document.ejercicio3.CDescuento.value="$" + total

}
function borrardatos(){
    document.ejercicio3.totalCompra.value="";
    document.ejercicio3.CDescuento.value="";  

}

//ejercicio 4
function calificacion_final(e){
    var datos = (document.all)?e.keycode : e.which
    if (datos==8) return true;  
    var caracteres=/[0-9\d .]/

    var probar = String.fromCharCode(datos);
    return caracteres.test(probar);
}
function promediop(){
    var par1=document.ejercicio4.parcial.value;
    var par2=document.ejercicio4.parcial2.value;
    var par3=document.ejercicio4.parcial3.value;

    var num1=parseFloat(par1);
    var num2=parseFloat(par2);
    var num3=parseFloat(par3);

    var suma= num1+num2+num3;
    var resultado= suma/3;

    document.ejercicio4.calificacionF.value="El promedio de tus parciales es de:" + resultado;
}
function borrardatos(){
document.ejercicio4.parcial1.value=""
document.ejercicio4.parcial2.value=""
document.ejercicio4.parcial3.value=""
document.ejercicio4.calificacionF.value=""
}
function calcular_datos(){
    var par1=document.ejercicio4.parcial1.value;
    var par2=document.ejercicio4.parcial2.value;
    var par3=document.ejercicio4.parcial3.value;

    var num1=parseFloat(par1);
    var num2=parseFloat(par2);
    var num3=parseFloat(par3);

    var suma= num1+num2+num3;
    var resul= suma/3;

    var cTrabajo=document.ejercicio4.cTrabajo.value;
    var cExamen=document.ejercicio4.cExamen.value;

    var num1=parseFloat(cTrabajo);
    var num2=parseFloat(cExamen);

    var porcentaje_promedio=resul*0.55;
    var porcentaje_trabajo=cTrabajo*0.15;
    var porcentaje_examen=cExamen*0.30;

    var promedioF=porcentaje_promedio+porcentaje_trabajo+porcentaje_examen;

    document.ejercicio4.calificacionT.value=promedioF

}

//ejercicio 6
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