<template>
<div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary border-bottom shadow-sm mb3">
        <router-link to="/" class="navbar-brand"><i>VENDAS</i></router-link>
        <div class="navbar-nav flex-grow-1">
            <li class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/pedido" class="nav-link">Pedidos</router-link>
            </li>
        </div>
        <div class="align-self-end">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/carrinho" class="nav-link">Carrinho</router-link>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link text-white">
                      <img class="mb-2" src="\img\util\carrinho-compra.png" alt="" width="24" height="24">{{cartLength}}<img />
                    </a>
                </li>
            </ul>
        </div>
    </nav>

    <div class="container mt-3">
        <router-view />
    </div>
</div>
</template>


<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
