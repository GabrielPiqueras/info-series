import axios from "axios";

const ENDPOINT_PATH = "https://gbp-api-mysql.herokuapp.com";

const userService = {}

// Obtener usuarios
userService.getUsers = function() {
  alert('Llega al método getUsers()')

  return axios.get(ENDPOINT_PATH + "/usuarios");
}

// Obtener un usuario
userService.getUser = function(id) {
  return axios.get(ENDPOINT_PATH + `/usuarios/${id}`);
}

// Registro de usuarios
userService.register = function(id, nombre, email, pass, edad) {

  alert('Llega al método register')

  const objUsuario = {
    nombre, email, pass, edad
  }

  return axios.post(ENDPOINT_PATH + "/add", objUsuario);
}

// Editar un usuario
userService.editUser = function(nombre, email, pass, edad) {
  alert('Llega al método editUser()')

  const editUsuario = {
    nombre, email, pass, edad
  }
  return axios.put(ENDPOINT_PATH + "/editar/91", editUsuario);
}

// Eliminar un usuario
userService.deleteUser = function(id) {
  return axios.delete(ENDPOINT_PATH + `/borrar/${id}`);
}

export default userService