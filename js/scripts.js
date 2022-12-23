const estudiantes = [
    {
        nombre: 'Juan',
        nota: 9,
    },
    {
        nombre: 'Nico',
        nota: 7,
    },
    {
        nombre: 'Azul',
        nota: 8,
    },
    {
        nombre: 'Lucila',
        nota: 5,
    },
    {
        nombre: 'Fausto',
        nota: 6,
    },    {
        nombre: 'Diego',
        nota: 10,
    },
];

let estudiantesAprobados = estudiantes.filter(estudiante => estudiante.nota >= 7);

let estudiantesDesaprobados = estudiantes.filter(estudiante => estudiante.nota <= 6);


let menu = prompt("Desea usted ver el registro de los alumnos? Por favor seleccione si o no")

while (menu != "si" && menu != "no"){
    alert = prompt("Por favor ingrese un valor correcto :)");
    menu = prompt("Desea usted ver el registro de los alumnos? Por favor seleccione si o no");
}

if (menu == "si"){
    let estudiantesCompleto = estudiantes.map (
        (estudiante) => estudiante.nombre + " " + estudiante.nota
    );
    alert (estudiantesCompleto.join("-"))
} else if (menu == "no") {
    alert("Lamentamos no haberte podido ayudar :(")
}

let registro = prompt("Aprobados o desaprobados?")
while (registro != "aprobado" && registro != "desaprobado"){
    alert = prompt("Por favor ingrese un valor correcto :)");
    registro = prompt("Aprobados o desaprobados?")
}
if (registro == "aprobados"){
    estudiantesAprobados = estudiantesAprobados.map (
        (estudianteAprobado) => estudianteAprobado.nombre + " " + estudianteAprobado.nota
    );
    alert (estudiantesAprobados.join("-"))
} else if (registro == "desaprobados") {
    estudiantesDesaprobados = estudiantesDesaprobados.map (
        (estudianteDesaprobado) => estudianteDesaprobado.nombre + " " + estudianteDesaprobado.nota
    );
    alert (estudiantesDesaprobados.join("-"))
}
/// Agregar estudiantes -> próximo que se agregué con DOM
let agregarEstudiante = estudiantes.push ({
    nombre: "Ernesto",
    nota: 6,
});

console.log (estudiantes)