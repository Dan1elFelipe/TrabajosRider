function Notas() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
  
    const notas = [nota1, nota2, nota3];
    const sumaNotas = notas.reduce((total, nota) => total + nota, 0);
    const prom = sumaNotas / notas.length;
    const porcentaje = notas.map(nota => nota * 0.3);
  
    console.log("Notas ingresadas:", notas);
    console.log("Suma de las notas:", sumaNotas);
    console.log("Promedio de las notas:", prom);
    console.log("Total porcentaje nota:", porcentaje);
  }
  
  document.getElementById("calcular").addEventListener("click", Notas);
  