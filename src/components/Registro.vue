<template>
  <div class="register">
    <h1 class="title">Sign Up</h1>
    <form action class="form" @submit.prevent="register">
      <label class="form-label" for="#nombre">Nombre:</label>
      <input
        v-model="objUser.nombre"
        class="form-input"
        type="text"
        id="nombre"
        placeholder="Nombre"
      >
      <label class="form-label" for="#email">Email:</label>
      <input
        v-model="objUser.email"
        class="form-input"
        type="email"
        id="email"
        required
        placeholder="Email"
      >
      <label class="form-label" for="#pass">pass:</label>
      <input
        v-model="objUser.pass"
        class="form-input"
        type="password"
        id="pass"
        placeholder="pass"
      >
      <label class="form-label" for="#pass-repeat">Repite la contraeña:</label>
      <input
        v-model="objUser.passRepeat"
        class="form-input"
        type="password"
        id="pass-repeat"
        placeholder="pass"
      >
      <label class="form-label" for="#edad">Edad:</label>
      <input
        v-model="objUser.edad"
        class="form-input"
        type="number"
        id="edad"
        placeholder="Edad"
      >
      <input class="form-submit" type="submit" value="Sign Up">
      <p ref="resultado"></p>
    </form>

    <button v-on:click="getUsers">Obtener todos los usuarios</button>
    <button v-on:click="getUser">Obtener un usuario</button>
    <button v-on:click="editUser">Editar un usuario</button>
    <button v-on:click="deleteUser">Borrar un usuario</button>
  </div>
</template>

<script>

import userService from '@/services/users.js'

export default {

  data: () => ({
    // Objeto que recoge los datos del registro
    objUser: {
      nombre: '',
      email: '',
      pass: '',
      passRepeat: '',
      edad: null,
    },
    error: false
  }),
  methods: {

    // Funciona
    getUsers() {
      userService.getUsers().then(respuesta => console.log(respuesta))
    },
    // Funciona
    getUser() {
      alert('Método getUser()')
      userService.getUser(91).then(respuesta => console.log(respuesta))
    },
    // Funciona
    register() {
        alert('Ejecutando método register() del componente')

        userService.register(this.objUser).then(response => {
          alert('LLEGA LA RESPUESTA')
          // alert(response)
          this.$refs.resultado.innerHTML = 'Registro completado con éxito.'
          console.log(response);
        })
    },
    // Funciona
    editUser() {
      alert('Ejecutando método editUser() del componente')
      
      const id = 11;
      const objUserEdit = {
        nombre: 'Laura',
        email: 'laura@gmail.com',
        pass: 'oso1235',
        edad: 42
      }

      userService.editUser(id, objUserEdit)
        .then(respuesta => console.log(respuesta))
    },
    // Funciona
    deleteUser() {
      alert('Método deleteUser()')

      const id = 31
      userService.deleteUser(id)
        .then(respuesta => console.log(respuesta))
    }
  }
};
</script>

<style lang="scss" scoped>
.register {
  padding: 2rem;
}
.title {
  text-align: center;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(19, 35, 47, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
  &:first-of-type {
    margin-top: 0rem;
  }
}
.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
  &:focus {
    outline: 0;
    border-color: #1ab188;
  }
}
.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #0b9185;
  }
}
.error {
  margin: 1rem 0 0;
  color: #ff4a96;
}
</style>