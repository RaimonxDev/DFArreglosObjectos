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

const containerAlquiler = document.getElementById('alquiler');
let rowAlquiler = containerAlquiler.querySelector('.row');


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

document.addEventListener('DOMContentLoaded', () => {
  showCard(4);
})

showCard = (cantidad) => {
  alquiler.forEach((propiedad, index) => {
    if (index > cantidad - 1) { return }
    rowAlquiler.innerHTML += cardTemplateWithCol(propiedad);
  })
}
