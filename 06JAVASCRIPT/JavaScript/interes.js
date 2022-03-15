function validarn (e){
    teclado = (document.all)?e.keyCode : e.which;

    if (teclado == 8) return true;
    var patron = /[0_9\d .]/;

    var probar = String.fromCharCode(teclado);
    return probar.test(probar);
}