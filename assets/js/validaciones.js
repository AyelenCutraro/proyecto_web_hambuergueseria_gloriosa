document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencias a los elementos del formulario
    var nombreInput = document.getElementById("nombre");
    var apellidoInput = document.getElementById("apellido");
    var telefonoInput = document.getElementById("telefono");
    var emailInput = document.getElementById("email");
    var fechaInput = document.getElementById("fecha");
    var cantPersSelect = document.getElementById("cantPers");

    nombreInput.addEventListener("keypress", function(event) {
        // Verificar si la tecla presionada es Enter
        if (event.key === "Enter") {
            validarNombre();
        }
    });
    
    nombreInput.addEventListener("focusout", function() {
        validarNombre();
    });
    
    function validarNombre() {
        if (!/^[a-zA-Z\s]+$/.test(nombreInput.value)) {
            nombreInput.setCustomValidity("Solo se permiten letras y espacios en el nombre.");
        } else {
            nombreInput.setCustomValidity("");
        }
    }
    
nombreInput.addEventListener("focusout", function() {
    validarNombre();
});


    apellidoInput.addEventListener("keypress", function(event) {
        // Verificar si la tecla presionada es Enter
        if (event.key === "Enter") {
            validarApellido();
        }
        function validarApellido() {
            if (!/^[a-zA-Z\s]+$/.test(apellidoInput.value)) {
                apellidoInput.setCustomValidity("Solo se permiten letras y espacios en el nombre.");
            } else {
                apellidoInput.setCustomValidity("");
            }
        }
        
    apellidoInput.addEventListener("focusout", function() {
        validarApellido();
    });
    });

    // Validar teléfono para que no contenga letras
    telefonoInput.addEventListener("blur", function() {
        if (!/^\d+$/.test(telefonoInput.value)) {
            telefonoInput.setCustomValidity("Solo se permiten números en el teléfono.");
        } else {
            telefonoInput.setCustomValidity("");
        }
    });

    // Validar correo electrónico para que contenga al menos un punto
    emailInput.addEventListener("keypress", function(event) {
        // Verificar si la tecla presionada es Enter (código de tecla 13)
        if (event.key === "Enter") {
            validarEmail();
        }
    });
    
    emailInput.addEventListener("blur", function() {
        validarEmail();
    });
    
    function validarEmail() {
        if (!/\./.test(emailInput.value)) {
            emailInput.setCustomValidity("El correo electrónico debe contener al menos un punto.");
        } else {
            emailInput.setCustomValidity("");
        }
    }
    
    // Validar fecha para que no sea anterior a la fecha actual
    fechaInput.addEventListener("blur", function() {
        var fechaSeleccionada = new Date(fechaInput.value);
        var fechaActual = new Date();
        fechaActual.setHours(0, 0, 0, 0); // Establecer horas, minutos, segundos y milisegundos a cero para comparación
        if (fechaSeleccionada < fechaActual) {
            fechaInput.setCustomValidity("La fecha no puede ser anterior a la fecha actual.");
        } else {
            fechaInput.setCustomValidity("");
        }

        // Validar que la fecha no sea mayor a 2 meses posterior a la fecha actual
        var fechaMaxima = new Date();
        fechaMaxima.setMonth(fechaMaxima.getMonth() + 2);
        if (fechaSeleccionada > fechaMaxima) {
            fechaInput.setCustomValidity("La fecha no puede ser mayor a 2 meses posterior a la fecha actual.");
        } else {
            fechaInput.setCustomValidity("");
        }
    });

    // Validar que se seleccione al menos una persona en el select
    cantPersSelect.addEventListener("blur", function() {
        if (cantPersSelect.value === "0") {
            cantPersSelect.setCustomValidity("Debe seleccionar al menos una persona.");
        } else {
            cantPersSelect.setCustomValidity("");
        }
    });
});

