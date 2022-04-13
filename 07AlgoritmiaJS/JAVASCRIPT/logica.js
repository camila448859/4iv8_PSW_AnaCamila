//problema 1

function problema1(){

    var p1_input=document.querySelector('#p1-input').value;

    var p1_array=p1_input.split(" ").reverse();

    var p1_respuesta=""

    p1_array.forEach(function(palabra,i){

        if(i !=0 || i !=p1_array.length)p1_respuesta +=' ';
        p1_respuesta+=palabra;
    });

    document.querySelector('#p1-output').textContent=p1_respuesta;
}
//problema 2

function problema2(){
    //obtener los valores de los campos de texto
    var p2_x1 = document.querySelector('#p2-x1').value;
    var p2_x2 = document.querySelector('#p2-x2').value;
    var p2_x3 = document.querySelector('#p2-x3').value;
    var p2_x4 = document.querySelector('#p2-x4').value;
    var p2_x5 = document.querySelector('#p2-x5').value;

    var p2_y1 = document.querySelector('#p2-y1').value;
    var p2_y2 = document.querySelector('#p2-y2').value;
    var p2_y3 = document.querySelector('#p2-y3').value;
    var p2_y4 = document.querySelector('#p2-y4').value;
    var p2_y5 = document.querySelector('#p2-y5').value;

    /*
    para encontrar el mínimo producto escalar entre 2 vectores,
    tenemos que realizar las operaciones correspondientes que son 
    con el máximo valor de un vector por el mínimo valor del otro vector. 
    */

    //construcción de vectores
    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];

    //ordenar vectores
    v1 = v1.sort(function(a,b){
        return b-a;
    });

    v2 = v2.sort(function(a,b){
        return b-a;
    });

    //invertir el vector 2
    v2 = v2.reverse();

    //producto
    var p2_producto = 0;

    for(var i = 0; i < v1.length; i++){
        p2_producto += v1[i]*v2[i];
    }

    //imprimir resultado
    document.querySelector('#p2-output').textContent = 
    'Producto escalar mínimo: '+ p2_producto;
}
// problema 3

function problema3(){
    //definir un alfabeto
    var alfabeto = ['A', 'B', 'C','D','E',
        'F','G','H','I','J','K','L','M',
        'N','Ñ', 'O', 'P','Q','R','S','T',
        'U','V','W','X','Y','Z']

    //vamos a obtener la entrada de los datos
    var p3_input = document.querySelector('#p3-input').value;

    var p3_palabras = p3_input.split(',');

    //tengo que eliminar los espacios

    p3_palabras = p3_palabras.map(function (palabra){
        //crear una expresion que me recupere la palabra
        return palabra.replace(/\s/g, '').toUpperCase();
    });

    //tengo que calcular cuantos caraacteres unicos hay
    var p3_res = '';
    
    p3_palabras.forEach(function (palabra, i){
        //separar las palabras actuales del array que 
        //contiene cada letra de dicha palabra
        var letras_unicas = [];
        var palabra_array = palabra.split('');

        //iteraccion
        alfabeto.forEach(function (letra, j){
            //itero la palabra
            palabra_array.forEach(function (letras_palabras, k){

                //comprobara que la letra este dentro del alfabeto
                if(letras_palabras == letra){
                    //si la letra no la hemos contado, la agregamos
                    // a un array para contar las letras unicas

                    if(letras_unicas.indexOf(letra)<0){
                        letras_unicas.push(letra);
                    }
                }
            });
        });
        p3_res += 'Palabra: ' + palabra + ' = ' + letras_unicas.length + '\n';
    });
    document.querySelector('#p3-output').textContent = p3_res;

}