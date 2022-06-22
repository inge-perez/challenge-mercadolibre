import Home from "./pages/home/Home";
import SitemItems from "./pages/listResultsItems/SiteResultsItems"
// import EditarGenero from "./generos/EditarGenero"

// import CrearActores from './actores/CrearActores';
// import EditarActores from './actores/EditarActores';
// import IndiceActores from './actores/IndiceActores';


// import RedireccionarALanding from './utils/RedireccionarALanding'

const rutas = [
    // {path: '/generos/crear', componente: CrearGenero},
    { path: '/items?search=:q', componente: SitemItems },
    // {path: '/generos', componente: IndiceGeneros, exact: true},

    // {path: '/actores/crear', componente: CrearActores},
    // {path: '/actores/editar/:id(\\d+)', componente: EditarActores},
    // {path: '/actores', componente: IndiceActores, exact: true},

    { path: '/', componente: Home, exact: true },
    { path: '*', componente: Home }
];

export default rutas;