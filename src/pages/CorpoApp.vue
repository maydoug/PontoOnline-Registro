<template>
    <main>
        <div class="textTop"><h5>Registre o seu ponto <strong>abaixo:</strong></h5>
            <form @submit.prevent="salvar">
                <input type="text" placeholder="Nome" v-model="usuario.name">
                <button class="waves-effect waves-light btn-small">Registrar<i class="material-icons left">save</i></button>
            </form>
            <table>

<thead>

  <tr>
    <th>NOME</th>
    <th>DATA/HORA</th>
  </tr>

</thead>

<tbody>

  <tr v-for="usuario of usuarios" :key="usuario.id">

    <td>{{ usuario.name }}</td>
    <td>{{ usuario.createdAt }}</td>
    <!-- <td>
      <button @click="editar(usuario)" class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
      <button @click="remover(usuario)" class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
    </td> -->

  </tr>

</tbody>

</table>

        </div>

    </main>
</template>

<script>
import User from '../services/users';

export default {
    name: 'CorpoApp',

    data(){
        return {
            usuario: {
                name: '',
                id: '',
                createdAt: ''
            },
            usuarios: []
        }
    },
    
    
    mounted(){
        this.listar()
    },

    methods:{
        listar(){
            User.listar().then(resposta =>{
            console.log(resposta.data)
            this.usuarios = resposta.data
        })

        },

        salvar(){

            if(!this.usuario.id){
                User.salvar(this.usuario).then(resposta =>{
                this.usuario = {}
                alert('Salvo com sucesso', resposta)
                this.listar()
            })
            }else{
                User.atualizar(this.usuario).then(resposta =>{
                this.usuario = {}
                alert('Atualizado com sucesso', resposta)
                this.listar()
            })

            }

        
        },

        editar(usuario){
            this.usuario = usuario
        }
    }
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