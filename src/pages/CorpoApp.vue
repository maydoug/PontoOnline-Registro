<template>
    <main>
        <div class="textTop"><h5>Registre o seu ponto <strong>abaixo:</strong></h5>
            <v-form>
                <input type="text" placeholder="Nome" v-model="name" >
                <button class="waves-effect waves-light btn-small">Registrar<i class="material-icons left">save</i></button>
            </v-form>
            <table>

<thead>

  <tr>
    <th>NOME</th>
    <th>EMAIL</th>
    <th>DATA</th>
    <th>HORA</th>
  </tr>

</thead>

<tbody>

  <tr v-for="produto of produtos" :key="produto.id">

    <td>{{ produto.nome }}</td>
    <td>{{ produto.quantidade }}</td>
    <td>{{ produto.valor }}</td>
    <td>
      <button @click="editar(produto)" class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
      <button @click="remover(produto)" class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
    </td>

  </tr>

</tbody>

</table>

        </div>

    </main>
</template>

<script>
export default {
    name: 'CorpoApp'
}
</script>

<style scoped>
main {
    background-color: var(--color-background-home);
    justify-content: center;
}
.textTop{
    color: var(--color-text-light);
    font-size: 16px;
}
</style>