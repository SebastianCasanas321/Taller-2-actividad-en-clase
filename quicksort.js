let pasos = 0; // Variable global para contar el número de comparaciones realizadas

// Función principal de QuickSort con pivote personalizado
function quickSort(arr, elegirPivote) {
  if (arr.length <= 1) return arr; // Caso base: si el arreglo tiene 0 o 1 elemento, ya está ordenado

  const pivotIndex = elegirPivote(arr); // Se obtiene el índice del pivote usando la función proporcionada
  const pivot = arr[pivotIndex]; // Se extrae el valor del pivote
  const left = []; // Arreglo para elementos menores al pivote
  const right = []; // Arreglo para elementos mayores o iguales al pivote

  for (let i = 0; i < arr.length; i++) { // Se recorre todo el arreglo
    if (i === pivotIndex) continue; // Se omite el pivote para no compararlo consigo mismo
    pasos++; // Se incrementa el contador de pasos (comparaciones)
    if (arr[i] < pivot) {
      left.push(arr[i]); // Si el elemento es menor al pivote, se agrega al arreglo izquierdo
    } else {
      right.push(arr[i]); // Si es mayor o igual, se agrega al arreglo derecho
    }
  }

  // Se aplica recursivamente QuickSort a los subarreglos y se combinan con el pivote
  return [
    ...quickSort(left, elegirPivote),
    pivot,
    ...quickSort(right, elegirPivote)
  ];
}

// Funciones para elegir el índice del pivote

function pivoteInicio(arr) {
  return 0; // Retorna el primer índice
}

function pivoteFinal(arr) {
  return arr.length - 1; // Retorna el último índice
}

function pivoteMedio(arr) {
  return Math.floor(arr.length / 2); // Retorna el índice del elemento del medio
}

function pivoteAleatorio(arr) {
  return Math.floor(Math.random() * arr.length); // Retorna un índice aleatorio dentro del arreglo
}

// Función para ejecutar QuickSort y mostrar resultados
function ejecutarYContar(arr, elegirPivote, descripcion) {
  pasos = 0; // Se reinicia el contador de pasos
  const resultado = quickSort([...arr], elegirPivote); // Se hace una copia del arreglo para no modificar el original
  console.log(`Resultado ${descripcion}:`, resultado); // Se muestra el arreglo ordenado
  console.log(`Número de iteraciones ${descripcion}:`, pasos); // Se muestra el número de comparaciones realizadas
  console.log("--------------------------------------------------"); // Separador visual entre pruebas
}

// Arreglos de prueba
const ordenado = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Arreglo ya ordenado
const invertido = [9, 8, 7, 6, 5, 4, 3, 2, 1]; // Arreglo en orden descendente
const aleatorio = [4, 9, 1, 7, 2, 5, 8, 3, 6]; // Arreglo con orden aleatorio

// Pruebas con diferentes estrategias de pivote y arreglos

// Arreglo ordenado
ejecutarYContar(ordenado, pivoteInicio, "inicio ordenado");
ejecutarYContar(ordenado, pivoteFinal, "final ordenado");
ejecutarYContar(ordenado, pivoteMedio, "medio ordenado");
ejecutarYContar(ordenado, pivoteAleatorio, "aleatorio ordenado");

// Arreglo invertido
ejecutarYContar(invertido, pivoteInicio, "inicio invertido");
ejecutarYContar(invertido, pivoteFinal, "final invertido");
ejecutarYContar(invertido, pivoteMedio, "medio invertido");
ejecutarYContar(invertido, pivoteAleatorio, "aleatorio invertido");

// Arreglo aleatorio
ejecutarYContar(aleatorio, pivoteInicio, "inicio aleatorio");
ejecutarYContar(aleatorio, pivoteFinal, "final aleatorio");
ejecutarYContar(aleatorio, pivoteMedio, "medio aleatorio");
ejecutarYContar(aleatorio, pivoteAleatorio, "aleatorio aleatorio");
