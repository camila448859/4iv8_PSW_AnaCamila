function algoritmo(){
    let cap_final, cap_inicial;
    cap_inicial = parseFloat (document.formulario1.cap_inicial.value);
    cap_final= cap_inicial*1.02;
    document.formulario1.cap_final.value = cap_final;
}