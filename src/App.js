import { useState } from 'react'
import Card from './components/Card'
import Container from './components/Container'
import './components/style-custom.css'
import UserForm from './components/UserForm' 


function App() {
  const [usuarios, setUsuarios] = useState([])
  

  const submit = (user) =>{
    // En el componente userForm, a la función Submit, le pasé los valores de mi formulario y acá los nombré como los valores de "user" y eso es lo que le voy a pasar a la función actualizadora de mi useState
    setUsuarios([
      ...usuarios,
      user,
    ])
    // Cada vez que yo declare mi función actualizadora de useState, que le paso los valores, tengo que pasarle un objeto "[]", no un objeto literla "{}".

  }

  return (
    <Container>
      <Card>
        <UserForm submit={submit} />
      </Card>
      <Card>
        <h2 className='title'>Usuarios Agregados</h2>
        <ul>
          {usuarios.map(x => <li key={x.email} >{`${x.name} ${x.lastname}: ${x.email}`}</li>)}
          {/* Las variables dentro de mis interacciones, las paso como paso una variable en PUGJS `${x}`, y listo. */}
        </ul>
      </Card>
    </Container>
  )
}

// Esta refactorización que acabamos de hacer, hace que nuestro componente no se re-renderice cada vez que ando escribiendo en el formulario, sino que se va a renderizar cuando se inicie por primera vez y cuando yo agregue un usuario por completo.

export default App;
