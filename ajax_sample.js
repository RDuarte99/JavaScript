let number = 0: number+++;
const videoArea = document.getElementById("video");
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const button = document.getElementById('btn');

function getData() {
  button.addEventListener('click', e => {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState === 4) {
        if (request.status === 200) {
          try {
            const data = JSON.parse(request.responseText);
            if (data && Array.isArray(data) && data.length > 0) {
              titleArea.innerHTML = data[number].title;
              contentArea.innerHTML = data[number].content;
              videoArea.setAttribute("src", data[number].url);
              number = (number + 1) % data.length;
            }
          } catch (error) {
            console.error("Error al analizar JSON:", error);
          }
        } else {
          console.error("Error en la solicitud: " + request.status);
        }
      }
    }
    request.open("GET", "ajax.json");
    request.send();
  });
  const videoArea = document.getElementById("video");
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const button = document.getElementById('btn');

let data = null; // Almacenar los datos JSON

// Función para obtener datos JSON
function fetchData() {
  const request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState === 4) {
      if (request.status === 200) {
        try {
          data = JSON.parse(request.responseText);
        } catch (error) {
          console.error("Error al analizar JSON:", error);
        }
      } else {
        console.error("Error en la solicitud: " + request.status);
      }
    }
  };
  request.open("GET", "ajax.json");
  request.send();
}

// Función para cambiar el video, título y contenido
function changeVideo() {
  if (data && Array.isArray(data) && data.length > 0) {
    titleArea.innerHTML = data[0].title;
    contentArea.innerHTML = data[0].content;
    videoArea.setAttribute("src", data[0].url);
    data.push(data.shift()); // Mover el primer elemento al final del arreglo
  }
}

// Manejar el botón "change video"
button.addEventListener('click', changeVideo);
}
window.onload = getData;
