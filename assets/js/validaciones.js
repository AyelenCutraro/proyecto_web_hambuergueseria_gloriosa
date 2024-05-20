document.getElementById("formulario").addEventListener("submit", function(event) {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    var fecha = document.getElementById("fecha").value;
    var cantPers = document.getElementById("cantPers").value;









 



document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencias a los elementos del formulario
    var nombreInput = document.getElementById("nombre");
    var apellidoInput = document.getElementById("apellido");
    var telefonoInput = document.getElementById("telefono");
    var emailInput = document.getElementById("email");
    var fechaInput = document.getElementById("fecha");
    var cantPersSelect = document.getElementById("cantPers");

    // Validaciones para el nombre
    if (nombre?.trim === "") {
        alert("Por favor, introduce tu nombre");
        event.preventDefault();
    }

    nombreInput.addEventListener("blur", function() {
        validarNombre();
    });

    function validarNombre() {
        if (!/^[a-zA-Z\s]+$/.test(nombreInput.value)) {
            nombreInput.setCustomValidity("Solo se permiten letras y espacios en el nombre.");
        } else {
            nombreInput.setCustomValidity("");
        }
    }

    // Validaciones para el apellido
    if (!apellido?.trim()) {
        alert("Por favor, introduce tu apellido");
        event.preventDefault();
    }

    apellidoInput.addEventListener("blur", function() {
        validarApellido();
    });

    function validarApellido() {
        if (!/^[a-zA-Z\s]+$/.test(apellidoInput.value)) {
            apellidoInput.setCustomValidity("Solo se permiten letras y espacios en el apellido.");
        } else {
            apellidoInput.setCustomValidity("");
        }
    }

    // Validar teléfono para que no contenga letras
    if (!telefono?.trim === "") {
        alert("Por favor, introduce tu teléfono");
        event.preventDefault();
    }

    telefonoInput.addEventListener("keyup", function() {
        if (!/^\d+$/.test(telefonoInput.value)) {
            telefonoInput.setCustomValidity("Solo se permiten números en el teléfono.");
        } else {
            telefonoInput.setCustomValidity("");
        }
    });

    // Validaciones para el correo 
    if (email?.trim === "" && !email.includes('@')) {
        alert("Por favor, introduce un email valido");
        event.preventDefault();
    }
    
    emailInput.addEventListener("blur", function() {
        validarEmail();
    });
    
    function validarEmail() {
        var email = emailInput.value;
        var pattern = /^[^\s@]+@[^\s@]+\.(com|us|ar|museum|uk|de|jp|fr|cn|br|es|au|org|net|edu|gov|mil)$/i; // Expresión regular para validar el formato y TLD del correo electrónico
        if (!pattern.test(email)) {
            emailInput.setCustomValidity("Por favor, ingresa una dirección de correo electrónico válida");
        } else {
            emailInput.setCustomValidity("");
        }
    }
    
    // Validaciones para la fecha
    if (fecha?.trim === "") {
        alert("Por favor, selecciona una fecha");
        event.preventDefault();
    }

    fechaInput.addEventListener("blur", function() {
        var fechaSeleccionada = new Date(fechaInput.value);
        var fechaActual = new Date();
        fechaActual.setHours(0, 0, 0, 0); // Establecer horas, minutos, segundos y milisegundos a cero para comparación
        if (fechaSeleccionada < fechaActual) {
            fechaInput.setCustomValidity("La fecha no puede ser anterior a la fecha actual.");
        } else {
            // Validar que la fecha no sea mayor a 2 meses posterior a la fecha actual
            var fechaMaxima = new Date();
            fechaMaxima.setMonth(fechaMaxima.getMonth() + 2);
            if (fechaSeleccionada > fechaMaxima) {
                fechaInput.setCustomValidity("La reserva solo puede realizarse con un máximo de dos meses de anticipación.");
            } else {
                fechaInput.setCustomValidity("");
            }
        }
    });

    // Validar que se seleccione al menos una persona en el select
    if (cantPers?.trim === "") {
        alert("Por favor, selecciona la cantidad de personas");
        event.preventDefault();
    }
);
    cantPersSelect.addEventListener("blur", function() {
        if (cantPersSelect.value === "0") {
            cantPersSelect.setCustomValidity("Debe seleccionar al menos una persona.");
        } else {
            cantPersSelect.setCustomValidity("");
        }
    })}

