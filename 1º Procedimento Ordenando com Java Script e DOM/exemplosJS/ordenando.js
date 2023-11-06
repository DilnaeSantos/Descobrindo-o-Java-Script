const valores = JSON.parse(localStorage.getItem("valores")) || [];

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

// Função para salvar os valores no localStorage
const saveToLocalStorage = () => {
  localStorage.setItem("valores", JSON.stringify(valores));
};

// Função para atualizar a lista de valores na página
const updateValoresList = () => {
  const valoresList = document.getElementById("valores");
  // Limpar a lista antes de atualizar
  valoresList.innerHTML = "";

  for (const valor of valores) {
    const listItem = document.createElement("li");
    listItem.textContent = valor;
    valoresList.appendChild(listItem);
  }
};

// Defina a função add
function add() {
  const valorInput = document.getElementById("valor");
  const valor = parseFloat(valorInput.value);
  if (!isNaN(valor)) {
    valores.push(valor); // Adicione o valor ao array de valores.
    saveToLocalStorage();
    updateValoresList();
    valorInput.value = ""; // Limpe o campo de entrada.
  }
}

// Função para ordenar os valores com base no algoritmo selecionado
function ordenar() {
  const algoritmoSelecionado = document.getElementById('algoritmo').value;

  switch (algoritmoSelecionado) {
    case 'bubble':
      bubbleSort(valores);
      break;
    case 'selection':
      selectionSort(valores);
      break;
    case 'quick':
      quickSort(valores, 0, valores.length - 1);
      break;
    default:
      break;
  }

  updateValoresList();
}

// Função para misturar os valores
function misturar() {
  shuffle(valores);
  updateValoresList();
}

// Função para limpar a lista de valores
function limparLista() {
  valores.length = 0; // Isso remove todos os elementos do array.
  saveToLocalStorage(); // Salva a lista vazia no localStorage.
  updateValoresList(); // Atualiza a lista na página para refletir a remoção dos valores.
}

// No evento 'DOMContentLoaded', adicione um ouvinte de evento para o botão "Limpar Lista":
document.addEventListener('DOMContentLoaded', () => {
  // ... Outras partes do seu código ...

  // Adicione um ouvinte de evento para o botão "Limpar Lista":
  document.getElementById('limpar').addEventListener('click', limparLista);
});

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('adicionar').addEventListener('click', add);
  document.getElementById('ordenar').addEventListener('click', ordenar);
  document.getElementById('misturar').addEventListener('click', misturar);

  // Atualize a lista de valores ao carregar a página
  updateValoresList();
});
