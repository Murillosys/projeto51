<template>
<div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary border-bottom shadow-sm mb3">
        <router-link to="/" class="navbar-brand"><b><i>VENDAS.COM</i></b></router-link>
        <div class="navbar-nav flex-grow-1">
            <li class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link>
            </li>
        </div>
        <div class="align-self-end">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/carrinho" class="nav-link">Carrinho({{this.productsInBag.length}})</router-link>
                </li>
                <img class="mb-2" src="./assets/carrinho-compra.png" alt="" width="15" height="15"><img />
            </ul>
        </div>
    </nav>
    <div class="container mt-3">
        <router-view />
    </div>
</div>

</template>

<script>

  import { mapState } from 'vuex'
  export default {

    created() {
      this.$store.dispatch('loadProducts');
      this.$store.dispatch('loadBag');
    },
    computed: mapState([
      'productsInBag' 
    ]),

  }
</script>


<style lang="scss">

</style>
