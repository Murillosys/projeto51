<template>
 <main>
    <div class="container"> 
        <hr class="mt-3">
            <div class="row g-3">
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" v-for="produto in produtos" :key="produto.index">
                    <div class="card text-center bg-light">
                        <a href="#" class="position-absolute end-0 p-2 text-danger">
                            <i class="bi-suit-heart" style="font-size: 24px; line-height: 24px;"></i>
                        </a>
                        <div class="card-header">
                            <img :src="produto.img" alt="" @click="getProduct(produto.id)" class="card-img-top">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{{produto.nome}}</h5>
                            <p> {{produto.descricao}} </p> 
                        </div>
                        <div class="card-body">
                            <b> R$:{{produto.preco}}</b>
                        </div>
                        <div class="card-footer">
                            <div class="container">
                                <button class="btn btn-primary mt-2  btn-lg"  type="button" v-on:click="addCartItem(produto)"> Comprar </button>
                            </div>
                            <div class="container">
                                <button class="btn btn-outline-danger mt-2  btn-sm"  type="button" v-on:click="removeCartItem(produto)"> Remover </button>
                            </div>
                            <br><small class="text-success">Produto em estoque</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr class="mt-5">
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
