<template>
    <div class="container">
            <h1><b>PRODUTOS: </b>Informe seus dados, do produto por favor</h1>
            <hr>
            <form class="mt-3">
                <div class="row">
                    <div class="col-sm-12 col-md-6">
                        <fieldset class="row gx-3">
                            <legend>Nome Produto</legend>
                            <div class="form-floating mb-3 col-md-6 col-xl-4">
                                <input class="form-control" type="text" id="txtcodigo" placeholder=" " autofocus />
                                <label for="txtCodigo">Codigo</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input class="form-control" type="text" id="txtNomeProduto" placeholder=" " />
                                <label for="txtNomeProduto">Nome produto</label>
                            </div>


                        </fieldset>
                        <fieldset>
                            <legend>Preço</legend>
                            <div class="form-floating mb-3 col-md-8">
                                <input class="form-control" type="text" id="txtPreco" placeholder=" " />
                                <label for="txtPreco">Preço</label>
                            </div>
                            <div class="form-floating">
                                <div>
                                <label for="txtImgProduto">Imagem Produto</label>
                                <input type="file" class="form-control" id="inputGroupFile02">
                               
                            </div>
                            </div>
                        </fieldset>
                        <div>
                            <div class="mb-3 text-left">
                                <hr />
                                <a class="btn btn-lg  btn-outline-danger" href="/cad_produtos.html">Excluir</a>
                                <input type="button" value="Cadastrar Produto" class="btn btn-lg btn btn-primary"
                                    onclick="window.location.href='/confirmarcadastro.html'" />
                            </div>
                        </div>
                    </div>

                </div>
        </div>
</template>