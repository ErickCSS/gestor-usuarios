import Input from  './Input'
import Button from './Button'
import useForm from '../hooks/useForm'

const UserForm = ({submit}) => {

   const [form, handleChange, reset] = useForm({name: '', lastname: '', email: ''})
   const handleSubmit = (e) => {
      e.preventDefault()
      submit(form)
      reset()
   }

   return(
      <form onSubmit={handleSubmit}>
         <Input label='Nombre' name="name" value={form.name} onChange={handleChange}></Input>
         <Input label='Apellido' name="lastname" value={form.lastname} onChange={handleChange}></Input>
         <Input label='Correo' name="email" value={form.email} onChange={handleChange}></Input>
         <Button>Enviar</Button>
      {/* Para que mi componente funcione correctamente siempre debo pasarle la propiedad de " name='' ", y asignarle su valor, ya que es a este a quien le indexaremos el contenido de "value" */}
      </form>
   )
}

// Estamos haciendo este componente, como una de Refactorizar, ya que si nuestro proyecto va creciendo, nuestra App tendria que gatillar muchas veces Render() y eso hace que nuestra App no sea optima.

export default UserForm