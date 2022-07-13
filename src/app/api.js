const axios = require('axios')

export const getMenu = axios
  .get('/menu')
  .then(function (response) {
    console.log('res', response)
    return response
  })
  .catch(function (error) {
    console.log(error)
  })
// .then(function () {
//   // always executed
// })
