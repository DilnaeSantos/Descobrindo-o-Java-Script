// Função para trocar os valores de duas posições de um vetor
const swap = (arr, pos1, pos2) => {
    [arr[pos1], arr[pos2]] = [arr[pos2], arr[pos1]];
  };
  
  // Função para embaralhar os elementos de um vetor
  const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      swap(arr, i, j);
    }
  };
  
  // Função para ordenar um vetor de inteiros com o algoritmo Bubble Sort
  const bubbleSort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
        }
      }
    }
  };
  
  // Função para ordenar um vetor de inteiros com o algoritmo Selection Sort
  const selectionSort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        swap(arr, i, minIndex);
      }
    }
  };
  
  // Função para ordenar um vetor de inteiros com o algoritmo Quick Sort, recursivo
  const quickSort = (arr, low, high) => {
    if (low < high) {
      const pivotIndex = partition(arr, low, high);
      quickSort(arr, low, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, high);
    }
  };
  
  // Função de apoio ao quickSort, para particionar o vetor
  const partition = (arr, low, high) => {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        swap(arr, i, j);
      }
    }
    swap(arr, i + 1, high);
    return i + 1;
  };
  
  // Seu código existente
  // ...
  
  // Adicione o evento 'DOMContentLoaded' para garantir que o código seja executado após o carregamento da página.
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('adicionar').addEventListener('click', add);
    document.getElementById('ordenar').addEventListener('click', ordenar);
    document.getElementById('misturar').addEventListener('click', misturar);
    var selectAlgoritmo = document.getElementById('algoritmo');
    selectAlgoritmo.addEventListener('change', function () {
      var selectedOption = selectAlgoritmo.options[selectAlgoritmo.selectedIndex].text;
      alert('Você selecionou: ' + selectedOption);
    });
  });
  