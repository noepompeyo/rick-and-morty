import "../../style/style.css"

const Header = () => {
    const view = `
    <div class="Header-main">
    <div class="Header-logo">
    <h1>
    <a href="/"> <img src="/image/rickd.png" class="logo-lg"/></a>
    <a href="/"> <img src="/image/rick.svg" class="logo-sm"/></a>
    </h1>
    </div> 

    <div class="Header-Nav">
    <h1>
    <a href="#/about"> About</a>
    </h1>
    </div>    
    
    </div>
    
    `;
    return view;
};

export default Header