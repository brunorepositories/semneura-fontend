<template>
    <div class="card" >
        <div class="card-head">
            <div class="row">

                <div class="col-6">
                    <h5 class="card-title">Editar cliente</h5>
                </div>

            </div>

            <hr>

        </div>

        <div class="card-body">
            <!-- <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> -->
            <!-- <p class="card-text">Some quick asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssssssssssssexample text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a> -->
            <div>
                <div class="row">
                    <div class="form-group col-2">
                        <label>Código</label>
                        <input class="form-control" disabled>
                        <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                    </div>

                    <div class="form-group col-5">
                        <label>Nome *</label>
                        <input class="form-control" placeholder="Ex: Bruno Henrique de Souza">
                        <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                    </div>

                    <div class="form-group col-5">
                        <label>Apelido</label>
                        <input class="form-control">
                        <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                    </div>
                </div>
                <div class="row">

                    <div class="form-group col-3">
                        <label>Instagram</label>
                        <input class="form-control">
                        <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                    </div>

                    <div class="form-group col-3">
                        <label>CPF</label>
                        <input class="form-control">
                        <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                    </div>

                    <div class="form-group col-3">
                        <label>RG</label>
                        <input class="form-control">
                        <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                    </div>

                    <div class="form-group col-3">
                        <label>Data de nascimento</label>
                        <input type="email" class="form-control">
                        <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                    </div>
                </div>

                <div class="row m-t-30">
                    <div class="form-group col-3">
                        <label>WhatssApp</label>
                        <input class="form-control">
                        <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                    </div>

                    <div class="form-group col-3">
                        <label>Telefone</label>
                        <input class="form-control">
                        <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                    </div>

                    <div class="form-group col-6">
                        <label>E-mail</label>
                        <input type="email" class="form-control">
                        <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                    </div>
                </div>

                <div class="row m-t-30">
                    <div class="form-group col-5">
                        <label>Logradouro</label>
                        <input class="form-control">
                        <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                    </div>

                    <div class="form-group col-3">
                        <label>Número</label>
                        <input class="form-control">
                        <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                    </div>

                    <div class="form-group col-4">
                        <label>Bairro</label>
                        <input class="form-control">
                        <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-3">
                        <label>Complemento</label>
                        <input class="form-control">
                        <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                    </div>

                    <div class="form-group col-2">
                        <label>CEP</label>
                        <input class="form-control">
                        <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                    </div>

                    <div class="form-group col-2">
                        <label>Cód. Cidade</label>
                        <input class="form-control">
                        <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                    </div>

                    <div class="form-group col-5">
                        <label>Cidade</label>
                        <input class="form-control">
                        <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                    </div>
                </div>

                <div class="row m-t-30">
                     <div class="form-group col-12">
                        <label>Observações</label>
                        <textarea type="textarea" class="form-control"> </textarea>
                        <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                    </div>
                </div>

                <div class="row m-t-30">
                    <div class="form-group col-6">
                        <label>Condições de pagamento</label>
                        <!-- <textarea type="textarea" class="form-control"> </textarea> -->
                    </div>
                    <div class="form-group col-6 flex-row-reverse">
                        <button type="button" class="btn btn-sm btn-outline btn-outline-info action">adicionar</button>
                        <!-- <textarea type="textarea" class="form-control"> </textarea> -->
                        <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                    </div>
                    <div class="p-l-20">

                    <small >Nenhuma condição de pagamento foi adicionada.</small>
                    </div>
                </div>

                    <hr>
            </div>

            <div class="buttons-container">

                <button type="button" class="btn btn-outline-danger  m-l-20">cancelar</button>
                <button type="button" class="btn btn-success">salvar</button>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CadastrarCliente'
}
</script>

<style scope>

.switch {
    width: 38px;
    border-radius: 11px;
    left: 2px;
    top: 2px;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background: var(--ab, var(--border));
    transform: translateX(var(--x, 0));
}
.switch.checked {
        --ab: var(--active-inner);
        --x: 17px;
      }

/* .switch:disabled {
    &:not(:checked) {
        &:after {
        opacity: .6;
        }
    } */

</style>