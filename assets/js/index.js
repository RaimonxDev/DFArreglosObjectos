const alquiler = [
  {
    nombre: 'Apartamento amueblado',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Apartamento completamente amueblado para alquilar.',
    ubicacion: 'Barrio Residencial, Ciudad Tranquila',
    bathroom: 4,
    habitaciones: 6,
    costo: 1200,
    smoke: false,
    pets: true
  },
  {
    nombre: 'Casa de campo para alquilar',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Encantadora casa de campo en alquiler para escapadas.',
    ubicacion: 'Montañas Verdes, Zona Rural',
    bathroom: 1,
    habitaciones: 3,
    costo: 800,
    smoke: true,
    pets: true
  },
  {
    nombre: 'Piso con vista panorámica',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Piso con vista panorámica de la ciudad.',
    ubicacion: 'Centro Urbano, Ciudad Activa',
    bathroom: 2,
    habitaciones: 2,
    costo: 1500,
    smoke: false,
    pets: false
  },
  {
    nombre: 'Apartamento cerca de la playa',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Apartamento a pocos pasos de la playa.',
    ubicacion: 'Playa Dorada, Ciudad Costera',
    bathroom: 1,
    habitaciones: 2,
    costo: 2000,
    smoke: true,
    pets: false
  }
];

const ventas = [
  {
    nombre: 'Casa en el bosque',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Hermosa casa en un entorno natural.',
    ubicacion: 'Bosque de los Pájaros, Ciudad Tranquila',
    bathroom: 1,
    habitaciones: 3,
    costo: 250000,
    smoke: false,
    pets: true
  },
  {
    nombre: 'Apartamento céntrico',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Apartamento moderno en el corazón de la ciudad.',
    ubicacion: 'Centro Urbano, Ciudad Activa',
    bathroom: 3,
    habitaciones: 2,
    costo: 180000,
    smoke: true,
    pets: false
  },
  {
    nombre: 'Mansión frente al mar',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Impresionante mansión con vista al océano.',
    ubicacion: 'Playa Serena, Ciudad Costera',
    bathroom: 2,
    habitaciones: 5,
    costo: 800000,
    smoke: false,
    pets: true
  },
  {
    nombre: 'Casa rural con jardín',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Acogedora casa rural con un hermoso jardín.',
    ubicacion: 'Pueblo Tranquilo, Zona Rural',
    bathroom: 1,
    habitaciones: 4,
    costo: 150000,
    smoke: true,
    pets: true
  }
];

const containerVenta = document.getElementById('venta');
const containerAlquiler = document.getElementById('alquiler');

const cardTemplate = (propiedad) => {
  return ` 
  <div class="card">
    <img
      src="${propiedad.src}"
      class="card-img-top"
      alt="${propiedad.nombre}"
    />
    <div class="card-body">
      <h5 class="card-title">
        ${propiedad.nombre}
      </h5>
      <p class="card-text">
        ${propiedad.descripcion}
      </p>
      <p>
        <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
      </p>
      <p>
        bathroom: 1,<i class="fas fa-bed"></i> ${propiedad.habitaciones} |
        <i class="fas fa-bath"></i> ${propiedad.bathroom}
      </p>
      <p>
      <i class="fas fa-dollar-sign"></i>${propiedad.costo}
      </p>
      <p class=${propiedad.smoke ? 'text-success' : 'text-danger'}>
        <i class="fas ${propiedad.smoke ? 'fa-smoking' : 'fa-smoking-ban'}"></i>
        ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}
      </p>
      <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
        <i class="fas ${propiedad.pets ? 'fa-paw' : 'fa-ban'}"></i>
        ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
      </p>
    </div>
  </div>
  `;
}
const cardTemplateWithCol = (propiedad) => {
  return `
  <div class="col-md-4 mb-4">
    <div class="card">
      <img
        src="${propiedad.src}"
        class="card-img-top"
        alt="${propiedad.nombre}"
      />
      <div class="card-body">
        <h5 class="card-title">
          ${propiedad.nombre}
        </h5>
        <p class="card-text">
          ${propiedad.descripcion}
        </p>
        <p>
          <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
        </p>
        <p>
          bathroom: 1,<i class="fas fa-bed"></i> ${propiedad.habitaciones} |
          <i class="fas fa-bath"></i> ${propiedad.bathroom}
        </p>
        <p>
        <i class="fas fa-dollar-sign"></i>${propiedad.costo}
        </p>
        <p class=${propiedad.smoke ? 'text-success' : 'text-danger'}>
          <i class="${propiedad.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i>
          ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}
        </p>
        <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
          <i class="${propiedad.pets ? 'fas fa-paw' : 'fas fa-ban'}"></i>
          ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
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
  if (containerVenta) {
    ventas.forEach((propiedad, index) => {
      if (index > 2) { return }
      const containerCard = document.createElement('div');
      containerCard.classList.add('col-md-4', 'mb-4');

      const cartHtml = cardTemplate(propiedad);
      containerCard.innerHTML += cartHtml;
      rowVenta.appendChild(containerCard);
    })
  }
  if (containerAlquiler) {
    containerVenta ? showCard(3) : showCard(4);
  }
})


showCard = (cantidad) => {
  alquiler.forEach((propiedad, index) => {
    if (index > cantidad - 1) { return }
    rowAlquiler.innerHTML += cardTemplateWithCol(propiedad);
  })
}
