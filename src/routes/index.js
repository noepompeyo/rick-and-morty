import Header from "../js/Templates/Header"
import Home from "../js/Pages/Home"
import Character from "../js/Pages/Character"
import Error404 from "../js/Pages/Error404"
import getHash from "../utils/getHash"
import resolveRoutes from "../utils/resolveRoutes"

const routes = {
    "/": Home,
    "/:id": Character,
    "/Contact": "contact"

}

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);

let render = routes[route] ? routes[route] : Error404;
content.innerHTML = await render();
};

export default router