function nota(nota1, nota2, nota3, coso) {
  let ArraydelCoso = [nota1, nota2, nota3];
  let notaFinal = calcular(ArraydelCoso);
  coso(notaFinal);
}

function calcular(notaFinal) {
  let suma = 0;
  notaFinal.forEach((notas) => (suma += notas));
  suma = suma / notaFinal.length;
  return suma;
}

function mostar(notaFinal) {
  let nombre = document.getElementById("Nombre").value;
  let id = document.getElementById("Identificacion").value;
  console.log("Nombre:", nombre);
  console.log("Identificacion", id);
  console.log("notaFinal:",notaFinal);
  
}

function calcularNota(coso) {
  let nota1 = parseFloat(document.getElementById("nota1").value);
  let nota2 = parseFloat(document.getElementById("nota2").value);
  let nota3 = parseFloat(document.getElementById("nota3").value);

  nota(nota1, nota2, nota3, coso);
}

function cosollamado(notaFinal) {
  console.log("EN PROCESO")
  setTimeout(() => {
    mostar(notaFinal);
  }, 3000);
}