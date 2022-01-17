import useForm from './hooks/useForm'
import Input from  './components/Input'
import Card from './components/Card'
import Container from './components/Container'

function App() {
  const [form, handleChange] = useForm({name: '', lastname: ''})
  return (
    <Container>
      <Card>
        <form>
          <Input label='Nombre' name="name" value={form.name} onChange={handleChange}></Input>
          <Input label='Apellido' name="lastname" value={form.lastname} onChange={handleChange}></Input>
          {/* Para que mi componente funcione correctamente siempre debo pasarle la propiedad de " name='' ", y asignarle su valor, ya que es a este a quien le indexaremos el contenido de "value" */}
        </form>
      </Card>
    </Container>
  )
}

export default App;
