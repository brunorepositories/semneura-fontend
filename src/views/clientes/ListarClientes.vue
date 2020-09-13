<template>
    <div class="card" >
        <div class="card-head">
            <div class="row">

                <div class="col-6">
                    <h5 class="card-title">Listar clientes</h5>
                </div>

                <div class="col-6 flex-row-reverse">
                        <button type="button" class="btn btn-sm btn-info">cadastrar cliente</button>
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
                <table class="table table-sm table-striped">
                    <thead class="table-warning color-secondary">
                        <tr>
                            <th>Código</th>
                            <th>Cliente</th>
                            <th>Instagrem</th>
                            <th>WhatsApp</th>
                            <th class="flex-col-center">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Bruno Henrique de soua</td>
                            <td>@bruno</td>
                            <td>(45) 9 982007-63</td>
                            <td class="flex-col-center">
                                <button type="button" class="btn-clean">
                                    <i class="fas fa-pen color-secondary"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Bruno Henrique de soua</td>
                            <td>@bruno</td>
                            <td>(45) 9 982007-63</td>
                            <td class="flex-col-center">
                                <button type="button" class="btn-clean">
                                    <i class="fas fa-pen color-secondary"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Bruno Henrique de soua</td>
                            <td>@bruno</td>
                            <td>(45) 9 982007-63</td>
                            <td class="flex-col-center">
                                <button type="button" class="btn-clean">
                                    <i class="fas fa-pen color-secondary"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Bruno Henrique de soua</td>
                            <td>@bruno</td>
                            <td>(45) 9 982007-63</td>
                            <td class="flex-col-center">
                                <button type="button" class="btn-clean">
                                    <i class="fas fa-pen color-secondary"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
<hr>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ListarClientes'

}
</script>

<style>

</style>