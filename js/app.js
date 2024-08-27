var trabajadores = [];

function agregarTrabajador() {
    var proyecto = document.getElementById('proyecto').value;
    var nombreTrabajador = document.getElementById('nombre-trabajador').value;
    var rutTrabajador = document.getElementById('rut-trabajador').value;
    var cargoTrabajador = document.getElementById('cargo-trabajador').value;

    if (nombreTrabajador === "" || rutTrabajador === "" || cargoTrabajador === "") {
        alert('Por favor, complete todos los campos.');
        return;
    }

    trabajadores.push({
        proyecto: proyecto,
        nombre: nombreTrabajador,
        rut: rutTrabajador,
        cargo: cargoTrabajador
    });

    mostrarTrabajadores(trabajadores);
}

function mostrarTrabajadores(trabajadoresFiltrados) {
    var tabla = document.getElementById('tabla-trabajadores').getElementsByTagName('tbody')[0];
    tabla.innerHTML = ""; 
    trabajadoresFiltrados.forEach(function(trabajador) {
        var nuevaFila = tabla.insertRow();
        var celdaProyecto = nuevaFila.insertCell(0);
        var celdaNombre = nuevaFila.insertCell(1);
        var celdaRut = nuevaFila.insertCell(2);
        var celdaCargo = nuevaFila.insertCell(3);
        
        celdaProyecto.textContent = trabajador.proyecto;
        celdaNombre.textContent = trabajador.nombre;
        celdaRut.textContent = trabajador.rut;
        celdaCargo.textContent = trabajador.cargo;
    });
}

function filtrarTabla() {
    var filtroProyecto = document.getElementById('filtro-proyecto').value;

    var trabajadoresFiltrados = trabajadores.filter(function(trabajador) {
        return filtroProyecto === "Todos" || trabajador.proyecto === filtroProyecto;
    });

    mostrarTrabajadores(trabajadoresFiltrados);
}

function buscarTrabajador() {
    var input = document.getElementById('busqueda-trabajador').value.toLowerCase();
    var trabajadoresFiltrados = trabajadores.filter(function(trabajador) {
        return trabajador.nombre.toLowerCase().includes(input);
    });

    mostrarTrabajadores(trabajadoresFiltrados);
}
