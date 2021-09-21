<template>


<main>
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
                            <img class="mb-2" src="\img\util\carrinho-compra.png" alt="" width="24" height="24">{{cartLength}}<img/>
                                                 
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    </nav>

           

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
                        <button class="btn btn-primary mt-2 d-block"  type="button" v-on:click="removeCartItem(produto)"> Remover </button>
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
        alertMessage: "",
        alertStatus: false,
        cartLength: 0
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
        atualizaQuantidadeCarrinho(){
            this.cartLength = this.$cart.length
        },
        addCartItem: function (produto) {
            this.$cart.push(produto);
            this.atualizaQuantidadeCarrinho()

            // 2 Linhas de baixo só pra teste visualização do carrinho no console
            this.showAlert(produto.nome+" foi adicionado ao carrinho");
            this.showAlert(this.$cart);
        },        
        removeCartItem : function (produto) {
            if( this.$cart.find( produtoDoCarrinho => produtoDoCarrinho.id === produto.id )) {
                this.$cart.splice(this.$cart.indexOf(produto), 1);
                this.atualizaQuantidadeCarrinho()
            }            

            // 1 Linha de baixo só pra teste visualização do carrinho no console
            this.showAlert(this.$cart);
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
            if (hash){ this.getProduct(hash.replace("#", "")); }
        },
    },
    mounted() {        
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
