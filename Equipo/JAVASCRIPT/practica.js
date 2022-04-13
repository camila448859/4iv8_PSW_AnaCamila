function validarc(e){
    var datos = (document.all)?e.KeyCode : e.which

    if(datos==8) return true;
    var rango=/[0-9\d .]/

    var probar = String.fromCharCode(datos);
    return rango.test(probar);

}


function xd(){
    var a=document.problema1.num1.value;
    var b=document.problema1.num2.value;

    var num1 = parseInt(a);
    var num2 = parseInt(b);

    var resul= if (num1==num2){
            return num1*num2;
        }else if(num1>num2){
            return num1-num2;
        }else if(num1<num2){
            return num1+num2;
        }
    
    document.probema1.res.value= "= " + resul;

}
