
const componenteHeader = document.querySelector('header');

function criaHeader() {

    componenteHeader.innerHTML = `
    <div class="box cabecalho">
        <div>
            <h1><a href="index.html">Your Tasks</a></h1>
        </div>
    
        <div class="hamburguer">
            <div class="line-1"></div>
            <div class="line-2"></div>
            <div class="line-3"></div>
        </div>
    </div>
    <nav class="menu">
        <ul>
            <li class="link-login-home">
                <a href="index.html" class="animation-menu">Home</a>| 
                <a href="login.html" class="animation-menu">Login</a>| 
                <a href="#" class="animation-menu">Help</a>
            </li>
            <li><a href="listaDeCompras.html" class="animation-menu">Lista de compras</a></li>
            <li><a href="listadeconvidados.html" class="animation-menu">Lista de convidados</a></li>
            <li><a href="listaDeEstudos.html" class="animation-menu">Lista de estudos</a></li>
        </ul>
    </nav>
    `
}

criaHeader();