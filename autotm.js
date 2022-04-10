var imagenes = [];
imagenes["1"] = "d1.png";
imagenes["2"] = "d2.png";
imagenes["5"] = "d5.png";
imagenes["10"] = "d10.png";
imagenes["20"] = "d20.png";
imagenes["50"] = "d50.png";
imagenes["100"] = "d100.png";

class Billete {
    constructor (v, c) {
        this.valor = v;
        this.cantidad = c;
        this.imagen = new Image();
        this.imagen.src = imagenes[this.valor];
    }
}

var caja = [];
caja.push( new Billete (100, 10));
caja.push( new Billete (50, 6));
caja.push( new Billete (20, 10));
caja.push( new Billete (10, 20));
caja.push( new Billete (5, 30));
caja.push( new Billete (2, 20));
caja.push( new Billete (1, 10));

count();

var dinero = 0;
var div = 0;
var papeles = 0;
var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

function entregarDinero() {
    var dibujar = [];
    var teller = document.getElementById("dinero");
    dinero = parseInt(teller.value);// Esta es la manera de cambiar un valor tipo caractér a un numero entero
    if (total >= dinero)
	{
    for(var bi of caja) 
    {
        if (dinero > 0) 
        {
            div = Math.floor(dinero / bi.valor);
            if (div > bi.cantidad) 
            {
                papeles = bi.cantidad;
            }
            else 
            {
                papeles = div;
            }
            bi.cantidad = bi.cantidad - papeles;
            for(var i = 0; i < papeles; i++) 
            {
                dibujar.push ( new Billete(bi.valor, 1) );
            }
            dinero = dinero - (bi.valor * papeles);
        }   
    }
    if (dinero == 0) 
    {
			resultado.innerHTML += "Se ha retirado: <br>";
			for(var e of dibujar) 
            {
				resultado.innerHTML += "<img src=" + e.imagen.src + ">";
            }
			resultado.innerHTML += "<hr>";
		count(); 
    }
		else
        {
			resultado.innerHTML += "No hay billetes para esa suma, intenta otro valor <hr>";
        }
    }
    else 
    {
        resultado.innerHTML += "<strong>ATENCIÓN!! <br>No hay más dinero en esta maquina, gracias por su comprensión <hr></strong>";
    }
}

function count()   
{
	total = 0;
	for (var tot of caja)
	{
		total += tot.valor * tot.cantidad;
	}
	console.log(total);
}