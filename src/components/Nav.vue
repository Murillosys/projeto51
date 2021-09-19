<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary border-bottom shadow-sm mb3">
        <div class="container">
            <a class="navbar-brand"><strong>VENDAS.COM</strong></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse"
             data-target=".navbar-collapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse">
            <ul class="navbar-nav flex-grow-1">
                <li class="nav-item">
                    <a href="" class="nav-link text-white">Inicio</a>
                </li>
                <li class="nav-item">
                    <a href="" class="nav-link text-white">Produtos</a>
                </li>
            </ul>
            <div class="align-self-end">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="#" class="nav-link text-white">Cadastra-se</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link text-white">Entrar</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link text-white">
                            <img class="mb-2" src="\img\util\carrinho-compra.png" alt="" width="24" height="24">
                            <div>{{cartLength}}</div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    </nav>
</template>

<script>
export default {
    data: () => ({
        cartLength: ""
    }),    
     methods: {
        getCartLength() {
            this.cartLength = "55";
            //this.cartLength = this.$cart.length + 3;          
        },
        mounted() {
        this.getCartLength();
        } 
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
