const app = require('./app')          // Obtengo lo que exporte en app.js

const puerto = app.get('port')        // Uilizando una variable exportada de app.js

app.listen(puerto, () => {
    console.log(`Example edited of this app listening at http://localhost:${puerto}`)
})