function guardarAlumno() {
  // Recupera los datos del formulario
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var edad = document.getElementById("edad").value;
  var genero = document.getElementById("genero").value;
  var direccion = document.getElementById("direccion").value;
  var telefono = document.getElementById("telefono").value;
  var email = document.getElementById("email").value;
  var curso = document.getElementById("curso").value;

  //
  var alumno = {
    "nombre": nombre,
    "apellido": apellido,
    "edad": edad,
    "genero": genero,
    "direccion": direccion,
    "telefono": telefono,
    "email": email,
    "curso": curso
  };

  // Convierte el objeto JSON a una cadena
  var alumnoStr = JSON.stringify(alumno);

  // Almacena la cadena en localStorage
  localStorage.setItem("alumno-" + Date.now(), alumnoStr);

  // Borra los datos del formulario
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("edad").value = "";
  document.getElementById("genero").value = "masculino";
  document.getElementById("direccion").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("email").value = "";
  document.getElementById("curso").value = "";
}
