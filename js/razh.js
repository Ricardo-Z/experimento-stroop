
$(document).ready(function () {
    $("#responsive-modal").modal('show');
    $(".wizard-finish").hide();
    $(".wizard-back").hide();

    $("#resultados_finales").hide();
});

$("#contenedor").hide();

var edad;
var sexo;

$("#seguir").on("click", function () {
    edad = $("#id_edad").val()
    sexo = $("#id_Sexo").val()


    if (sexo !== "A" && edad !== "") {
        $("#responsive-modal").modal('hide');
    }else{
        swal({ title: "Importante!", text: "Ingresar Información Previa", type: "warning", timer: 3000, showConfirmButton: false });
    }


});


var numeroClick = 1;

var total = 0
var correctas = 0
var incorrectas = 0
var otros = 0
var resumen = []; 
var resumen2 = []; 

$("#iniciarTest").on("click", function () {
             
    $("#contenedor").show();
    $("#iniciarTest").hide();

    generarColor()



    if (numeroClick == 1) {

        setTimeout(function () {
            swal({ title: "CAMBIO DE NIVEL!", text: "Se cambiará al siguiente nivel", type: "info", timer: 30000, showConfirmButton: true });
            $("#respuesta").val("")
            banderaNivel = 2;


            $("#nivel").text("Nivel 2")
            $("#parrafo").text("En esta tarea, consiste en dar lectura al nombre del color impreso en negro, por ejemplo, ROJO debe responder pulsando “R”.")

            $("#iniciarTest").show();
            $("#contenedor").hide();
            numeroClick = 2;

        }, 30000);
    } else if (numeroClick == 2) {
        setTimeout(function () {
            swal({ title: "Prueba terminada!", text: "La Prueba Finalizó", type: "info", timer: 5000, showConfirmButton: true });
            $("#respuesta").val("")
            banderaNivel = 1;

            $("#iniciarTest").hide();
            $("#contenedor").hide();

            $("#inicio").hide();

            $("#resultados_finales").show();

            $("#edad_total").text(edad);
            $("#sexo_total").text(sexo);

            $("#correctas_total").text(correctas);
            $("#incorrectas_total").text(incorrectas);

            $('#resumen1_total').append(resumen.join(''));
            $('#resumen2_total').append(resumen2.join(''));

        }, 30000); //60000
    } else if (numeroClick == 3) {
        location.reload();
    }

});

var banderaNivel = 1;


var generarColor = function () {
    setTimeout(function () {
        $("#respuesta").val("")
    }, 1200);

    var randonColor = Math.random() * 120;

    if (banderaNivel == 1) {
        if (randonColor < 25) {
            color = "#822EC1" //PURPURA
        } else if (randonColor < 50) {
            color = "#904F0D" //MARRÓN
        } else if (randonColor < 75) {
            color = "#E52216" //ROJO
        } else if (randonColor < 100) {
            color = "#19B217" //VERDE
        } else {
            color = "#1A28AC" //AZUL
        }
    } else {
        color = "#000000"
    }


    randonColor = Math.random() * 100;

    if (randonColor < 25) {
        nombre = "PURPURA" //PURPURA
    } else if (randonColor < 50) {
        nombre = "MARRÓN" //MARRÓN
    } else if (randonColor < 75) {
        nombre = "ROJO" //ROJO
    } else if (randonColor < 100) {
        nombre = "VERDE" //VERDE
    } else {
        nombre = "AZUL" //AZUL
    }

    $("#etiquetaColor").css({ "color": color });
    $("#etiquetaColor").text(nombre);
};



$("#respuesta").keypress(function (event) {

    var keycode = event.key;
    total = total + 1;

    if (banderaNivel == 1) {
        if (keycode.toLowerCase() == 'p') {
            if (color == "#822EC1") {
                correctas++;
                swal({ title: "Correcto!", text: "Letra Correcta", type: "success", timer: 2000, showConfirmButton: false });
            } else {

                if(color == "#822EC1"){
                    colorEnviar = "PURPURA"
                }else if(color == "#904F0D"){
                    colorEnviar = "MARRÓN"
                } else if(color == "#E52216"){
                    colorEnviar = "ROJO"
                } else if(color == "#19B217"){
                    colorEnviar = "VERDE"
                } else if(color == "#1A28AC"){
                    colorEnviar = "AZUL"
                }

                var contenido = "<p>" + "Letra ingresada: P - Color: " + colorEnviar + "</p>";
                resumen.push(contenido);

                incorrectas++;
                swal({ title: "Incorrecto!", text: "Letra Incorrecta", type: "warning", timer: 2000, showConfirmButton: false });
            }
        } else if (keycode.toLowerCase() == 'm') {
            if (color == "#904F0D") {
                correctas++;
                swal({ title: "Correcto!", text: "Letra Correcta", type: "success", timer: 2000, showConfirmButton: false });
            } else {

                if(color == "#822EC1"){
                    colorEnviar = "PURPURA"
                }else if(color == "#904F0D"){
                    colorEnviar = "MARRÓN"
                } else if(color == "#E52216"){
                    colorEnviar = "ROJO"
                } else if(color == "#19B217"){
                    colorEnviar = "VERDE"
                } else if(color == "#1A28AC"){
                    colorEnviar = "AZUL"
                }

                var contenido = "<p>" + "Letra ingresada: M - Color: " + colorEnviar + "</p>";
                resumen.push(contenido);

                incorrectas++;
                swal({ title: "Incorrecto!", text: "Letra Incorrecta", type: "warning", timer: 2000, showConfirmButton: false });
            }
        } else if (keycode.toLowerCase() == 'r') {
            if (color == "#E52216") {
                correctas++;
                swal({ title: "Correcto!", text: "Letra Correcta", type: "success", timer: 2000, showConfirmButton: false });
            } else {

                if(color == "#822EC1"){
                    colorEnviar = "PURPURA"
                }else if(color == "#904F0D"){
                    colorEnviar = "MARRÓN"
                } else if(color == "#E52216"){
                    colorEnviar = "ROJO"
                } else if(color == "#19B217"){
                    colorEnviar = "VERDE"
                } else if(color == "#1A28AC"){
                    colorEnviar = "AZUL"
                }

                var contenido = "<p>" + "Letra ingresada: R - Color: " + colorEnviar + "</p>";
                resumen.push(contenido);

                incorrectas++;
                swal({ title: "Incorrecto!", text: "Letra Incorrecta", type: "warning", timer: 2000, showConfirmButton: false });
            }
        } else if (keycode.toLowerCase() == 'v') {
            if (color == "#19B217") {
                correctas++;
                swal({ title: "Correcto!", text: "Letra Correcta", type: "success", timer: 2000, showConfirmButton: false });
            } else {

                if(color == "#822EC1"){
                    colorEnviar = "PURPURA"
                }else if(color == "#904F0D"){
                    colorEnviar = "MARRÓN"
                } else if(color == "#E52216"){
                    colorEnviar = "ROJO"
                } else if(color == "#19B217"){
                    colorEnviar = "VERDE"
                } else if(color == "#1A28AC"){
                    colorEnviar = "AZUL"
                }

                var contenido = "<p>" + "Letra ingresada: V - Color: " + colorEnviar + "</p>";
                resumen.push(contenido);

                incorrectas++;
                swal({ title: "Incorrecto!", text: "Letra Incorrecta", type: "warning", timer: 2000, showConfirmButton: false });
            }
        } else if (keycode.toLowerCase() == 'a') {
            if (color == "#1A28AC") {
                correctas++;
                swal({ title: "Correcto!", text: "Letra Correcta", type: "success", timer: 2000, showConfirmButton: false });
            } else {

                if(color == "#822EC1"){
                    colorEnviar = "PURPURA"
                }else if(color == "#904F0D"){
                    colorEnviar = "MARRÓN"
                } else if(color == "#E52216"){
                    colorEnviar = "ROJO"
                } else if(color == "#19B217"){
                    colorEnviar = "VERDE"
                } else if(color == "#1A28AC"){
                    colorEnviar = "AZUL"
                }

                var contenido = "<p>" + "Letra ingresada: A - Color: " + colorEnviar + "</p>";
                resumen.push(contenido);

                incorrectas++;
                swal({ title: "Incorrecto!", text: "Letra Incorrecta", type: "warning", timer: 2000, showConfirmButton: false });
            }
        } else {

            if(color == "#822EC1"){
                colorEnviar = "PURPURA"
            }else if(color == "#904F0D"){
                colorEnviar = "MARRÓN"
            } else if(color == "#E52216"){
                colorEnviar = "ROJO"
            } else if(color == "#19B217"){
                colorEnviar = "VERDE"
            } else if(color == "#1A28AC"){
                colorEnviar = "AZUL"
            }

            var contenido = "<p>" + "Letra ingresada: " + keycode.toLowerCase() + " - Color: " + colorEnviar + "</p>";
            resumen.push(contenido);

            incorrectas++;
            swal({ title: "Incorrecto!", text: "Letra Incorrecta", type: "warning", timer: 2000, showConfirmButton: false });
        }
    } else {
        if (keycode.toLowerCase() == 'p') {
            if (nombre == "PURPURA") {
                correctas++;
                swal({ title: "Correcto!", text: "Letra Correcta", type: "success", timer: 2000, showConfirmButton: false });
            } else {

                var contenido = "<p>" + "Letra ingresada: " + keycode.toUpperCase() + " - Color: " + nombre + "</p>";
                resumen2.push(contenido);

                incorrectas++;
                swal({ title: "Incorrecto!", text: "Letra Incorrecta", type: "warning", timer: 2000, showConfirmButton: false });
            }
        } else if (keycode.toLowerCase() == 'm') {
            if (nombre == "MARRÓN") {
                correctas++;
                swal({ title: "Correcto!", text: "Letra Correcta", type: "success", timer: 2000, showConfirmButton: false });
            } else {

                var contenido = "<p>" + "Letra ingresada: " + keycode.toUpperCase() + " - Color: " + nombre + "</p>";
                resumen2.push(contenido);

                incorrectas++;
                swal({ title: "Incorrecto!", text: "Letra Incorrecta", type: "warning", timer: 2000, showConfirmButton: false });
            }
        } else if (keycode.toLowerCase() == 'r') {
            if (nombre == "ROJO") {
                correctas++;
                swal({ title: "Correcto!", text: "Letra Correcta", type: "success", timer: 2000, showConfirmButton: false });
            } else {

                var contenido = "<p>" + "Letra ingresada: " + keycode.toUpperCase() + " - Color: " + nombre + "</p>";
                resumen2.push(contenido);

                incorrectas++;
                swal({ title: "Incorrecto!", text: "Letra Incorrecta", type: "warning", timer: 2000, showConfirmButton: false });
            }
        } else if (keycode.toLowerCase() == 'v') {
            if (nombre == "VERDE") {
                correctas++;
                swal({ title: "Correcto!", text: "Letra Correcta", type: "success", timer: 2000, showConfirmButton: false });
            } else {

                var contenido = "<p>" + "Letra ingresada: " + keycode.toUpperCase() + " - Color: " + nombre + "</p>";
                resumen2.push(contenido);

                incorrectas++;
                swal({ title: "Incorrecto!", text: "Letra Incorrecta", type: "warning", timer: 2000, showConfirmButton: false });
            }
        } else if (keycode.toLowerCase() == 'a') {
            if (nombre == "AZUL") {
                correctas++;
                swal({ title: "Correcto!", text: "Letra Correcta", type: "success", timer: 2000, showConfirmButton: false });
            } else {

                var contenido = "<p>" + "Letra ingresada: " + keycode.toUpperCase() + " - Color: " + nombre + "</p>";
                resumen2.push(contenido);

                incorrectas++;
                swal({ title: "Incorrecto!", text: "Letra Incorrecta", type: "warning", timer: 2000, showConfirmButton: false });
            }
        } else {

            var contenido = "<p>" + "Letra ingresada: " + keycode.toUpperCase() + " - Color: " + nombre + "</p>";
            resumen2.push(contenido);

            incorrectas++;
            swal({ title: "Incorrecto!", text: "Letra Incorrecta", type: "warning", timer: 2000, showConfirmButton: false });
        }
    }

    generarColor();



});








