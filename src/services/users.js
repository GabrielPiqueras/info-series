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
userService.register = function(objUser) {

  alert('Llega al método register')

  return axios.post(ENDPOINT_PATH + "/add", objUser);
}

// Editar un usuario
userService.editUser = function(id, objUserEdit) {
  alert('Llega al método editUser()')

  return axios.put(ENDPOINT_PATH + `/editar/${id}`, objUserEdit);
}

// Eliminar un usuario
userService.deleteUser = function(id) {
  return axios.delete(ENDPOINT_PATH + `/borrar/${id}`);
}

export default userService