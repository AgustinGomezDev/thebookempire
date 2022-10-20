function reservar(){
    let cancha = prompt("Que cancha quieres reservar " + nombre + "? \n1 -> Cancha 1 \n2 -> Cancha 2 \n3 -> Cancha 3 \n4 -> Cancha 4 \n5 -> Cancha 5");

    if(cancha<1 || cancha>5){
        alert("No tenemos esa cancha, elige otra");
        reservar();
    }

    cancha=parseInt(cancha);

    switch(cancha){
        case 1:
            canchaElegida(1);
        break;
        case 2:
            canchaElegida(2);
        break;
        case 3:
            canchaElegida(3);
        break;
        case 4:
            canchaElegida(4);
        break;
        case 5:
            canchaElegida(5);
        break;
    }
}

function canchaElegida(num){
    alert("Perfecto! reservaremos la cancha " + num +" para ti");

    const horario1 = Math.floor(Math.random() * (22 - 15 + 1)) + 15;
    const horario2 = Math.floor(Math.random() * (22 - 15 + 1)) + 15;
    const horario3 = Math.floor(Math.random() * (22 - 15 + 1)) + 15;

    const horario = prompt("Nuestros horarios disponibles para tu cancha son los siguientes: \n1 -> " + horario1 + ":00 \n2 -> " + horario2 + ":00 \n3 -> " + horario3 + ":00 \nEn que horario te gustaría jugar?");
    let horarioElegido = 0;

    switch(horario){
        case '1': horarioElegido = horario1; break;
        case '2': horarioElegido = horario2; break;
        case '3': horarioElegido = horario3; break;
    }
    factura(num, horarioElegido);
}

function factura(num, horario){
    let precio = 2000;
    if(horario > 18){
        precio += 500;
    }else{
        precio -= 500;
    }
    let compra = prompt(nombre + ", tu reserva para la cancha " + num + " con horario " + horario + ":00 tiene un precio de $" + precio + "\nDeseas finalizar tu reserva? \n1 -> Si \n2 -> No \n3 -> Repetir Proceso");

    if(compra<1 || compra>3){
        alert(compra + " no era una opción...")
        factura(num, horario)
    }

    compra = parseInt(compra);

    switch(compra){
        case 1: 
            alert("Su reserva se realizó con éxito, aquí te esperamos!")
        break;
        case 2:
            alert("La próxima será...")
        break;
        case 3:
            reservar();
        break;
    }
}

let nombre;
do{
    nombre = prompt("Ingresa tu nombre para empezar");
}while(nombre=='')

alert("Hola " + nombre + "! bienvenido a Doble5, para reservar una cancha presiona ACEPTAR");

reservar();