<template>
<main>
    <div class="container">
    <hr class="mt-3">
        <div class="row">
            <div class="col-md-4 produto" v-for="produto in produtos" :key="produto.index">
                <div class="card mb-4 shadow-sm">
                    <div class="card text-center bg-light">
                        <a href="#" class="position-absolute end-0 p-2 text-danger">
                            <i class="bi-suit-heart" style="font-size: 24px; line-height: 24px;"></i>
                        </a>

                        <img :src="produto.img" alt="" @click="getProduct(produto.id)" class="card-img-top">

                        <div class="card-header">
                            {{produto.valor}}
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{{produto.nome}}</h5>
                            <p class="card-text truncar-3l">
                                {{produto.descricao}}
                            </p>
                        </div>
                        
                        <button class="btn btn-primary mt-2 d-block"  type="button" v-on:click="addCartItem(produto)"> Comprar </button>
                        <div class="card-footer">                           
                            
                            <small class="text-success">Produto em estoque</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</main>
</template>

<script>
export default {
  name: 'Produto',
    data: () => ({
        produtos: [],
        produto: {},
        cart: [],
        alertMessage: "",
        alertStatus: false
    }),    
        filters: {
            numeroPreco(valor){
                if(Number.isInteger(valor)){
                    return valor.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
                }

                return valor;

            }
        },
        computed:{
            totalCart(){
                let total = 0;
                if(this.cart.length){
                    this.cart.forEach(produto => {
                        total += produto.preco;
                    })
                }
                return total;
            }
        },

    methods: {
        getProducts() {
            this.produtos = [];
            fetch("./api/produtos.json")
                .then(response => response.json())
                .then(response => {
                    this.produtos = JSON.parse(JSON.stringify(response));
                });
        },
        async getProduct(id) {
            const response = await fetch('./api/' + id + '/dados.json');
            const data = await response.json();
            this.produto = await JSON.parse(JSON.stringify(data));
        },

        addCartItem: function (produto) {
            this.cart.push(produto);
            this.showAlert(produto.nome+" foi adicionado ao carrinho");
        },
        removeCartItem(index) {
            this.cart.splice(index, 1)

        },
        checkLocalStorage() {
            if (window.localStorage.cart) {
                this.cart = JSON.parse(window.localStorage.cart);
            }
        },
        showAlert(message) {
            console.log(message);
            this.alertMessage = message;
            this.alertStatus = true;

            setTimeout(() => {
                this.alertStatus = false;
            }, 1500)
        },
        router() {
            const hash = document.location.hash;
            if (hash)
                this.getProduct(hash.replace("#", ""));
        },
    },
     watch:{
            cart(){
                window.localStorage.cart = JSON.stringify(this.cart);
            },
            produto(){
                document.title = this.produto.nome || 'Nome produto';
                const hash = this.produto.id || '';

                history.pushState(null, null, `#${hash}`)
            }
        },
    mounted() {
        this.checkLocalStorage();
        this.getProducts();
        this.router();
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
    color: #ffffff;
}
</style>
