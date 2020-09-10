<template>
    <div class="card" >
        <div class="card-head">
            <div class="row">

                <div class="col-6">
                    <h5 class="card-title">Cadastrar cliente</h5>
                </div>

                <div class="col-6">
                    <div class="card-action"> teste </div>
                </div>

            </div>

            <hr>

        </div>

        <div class="card-body">
            <!-- <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> -->
            <!-- <p class="card-text">Some quick asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssssssssssssexample text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a> -->

            <form>

                <div class="row">

                    <div class="form-group col-3">
                        <label>Nome</label>
                        <input type="email" class="form-control" placeholder="Ex: Bruno Henrique">
                        <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                    </div>

                    <div class="form-group col-3">
                        <label>Sexo</label>
                        <input class="form-control" placeholder="Enter email">
                        <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                    </div>

                    <div class="form-group col-3">
                        <label>Instagram</label>
                        <input class="form-control" placeholder="Enter email">
                        <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                    </div>

                    <div class="form-group col-3">
                        <label>Email address</label>
                        <input type="email" class="form-control" placeholder="Enter email">
                        <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                    </div>

                </div>

            </form>

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