import router  from "./routes";


window.addEventListener('load', router);
window.addEventListener('hashchange',router)

window.onscroll = function(){scrollFunction()};

function scrollFunction() {
    if ( document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('arrow-scroll').style.display = 'block';
        } else {
            document.getElementById('arrow-scroll').style.display = 'none';
        }

        document.getElementById('arrow-scroll').onclick = function () {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
}
