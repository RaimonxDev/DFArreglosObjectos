import { alquiler } from './alquiler.js';
import { ventas } from './ventas.js';

const containerVenta = document.getElementById('venta');
const containerAlquiler = document.getElementById('alquiler');

const cardTemplate = (data) => {
  return `
  <div class="col-md-4 mb-4">
    <div class="card">
      <img
        src="${data.src}"
        class="card-img-top"
        alt="${data.nombre}"
      />
      <div class="card-body">
        <h5 class="card-title">
          ${data.nombre}
        </h5>
        <p class="card-text">
          ${data.descripcion}
        </p>
        <p>
          <i class="fas fa-map-marker-alt"></i> ${data.ubicacion}
        </p>
        <p>
          bathroom: 1,<i class="fas fa-bed"></i> ${data.habitaciones} |
          <i class="fas fa-bath"></i> ${data.bathroom}
        </p>
        <p>
        <i class="fas fa-dollar-sign"></i>${data.costo.toLocaleString('es-CL')}
        </p>
        <p class=${data.smoke ? 'text-success' : 'text-danger'}>
          <i class="${data.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i>
          ${data.smoke ? 'Permitido fumar' : 'No se permite fumar'}
        </p>
        <p class="${data.pets ? 'text-success' : 'text-danger'}">
          <i class="${data.pets ? 'fas fa-paw' : 'fas fa-ban'}"></i>
          ${data.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
        </p>
      </div>
    </div>
  </div>
  `;
}

let rowVenta;
let rowAlquiler;

if (containerVenta) { rowVenta = containerVenta.querySelector('.row'); }
if (containerAlquiler) { rowAlquiler = containerAlquiler.querySelector('.row'); }


document.addEventListener('DOMContentLoaded', () => {
  if (containerAlquiler) {
    containerVenta
      ? showCard({ data: alquiler, container: rowAlquiler, limit: 3 })
      : showCard({ data: alquiler, container: rowAlquiler });
  }
  if (containerVenta) {
    containerAlquiler
      ? showCard({ data: ventas, container: rowVenta, limit: 3 })
      : showCard({ data: ventas, container: rowVenta });
  }
})


const showCard = ({ data, container, limit }) => {
  if (!limit) { limit = 0 }
  data.forEach((propiedad, index) => {
    if (limit > 0 && index > limit - 1) { return }
    container.innerHTML += cardTemplate(propiedad);
  })
}

