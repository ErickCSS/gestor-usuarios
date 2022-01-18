import { useState } from 'react'
import useForm from './hooks/useForm'
import Input from  './components/Input'
import Card from './components/Card'
import Container from './components/Container'
import Button from './components/Button'
import './components/style-custom.css'

function App() {
  const [usuarios, setUsuarios] = useState([])
  const [form, handleChange, reset] = useForm({name: '', lastname: '', email: ''})

  const submit = (e) =>{
    e.preventDefault()
    setUsuarios([
      ...usuarios,
      form,
    ])
    // Cada vez que yo declare mi función actualizadora de useState, que le paso los valores, tengo que pasarle un objeto "[]", no un objeto literla "{}".

    reset()
  }

  return (
    <Container>
      <Card>
        <form onSubmit={submit}>
          <Input label='Nombre' name="name" value={form.name} onChange={handleChange}></Input>
          <Input label='Apellido' name="lastname" value={form.lastname} onChange={handleChange}></Input>
          <Input label='Correo' name="email" value={form.email} onChange={handleChange}></Input>
          <Button>Enviar</Button>
          {/* Para que mi componente funcione correctamente siempre debo pasarle la propiedad de " name='' ", y asignarle su valor, ya que es a este a quien le indexaremos el contenido de "value" */}
        </form>
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

export default App;
