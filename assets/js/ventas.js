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
let rowVenta = containerVenta.querySelector('.row')

document.addEventListener('DOMContentLoaded', () => {
  showCard(4)
})

showCard = (cantidad) => {
  ventas.forEach((propiedad, index) => {
    if (index > cantidad - 1) { return }
    rowAlquiler.innerHTML += cardTemplateWithCol(propiedad);
  })
}
