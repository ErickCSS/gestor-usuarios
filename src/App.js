import useForm from './hooks/useForm'
import Input from  './components/Input'

function App() {
  const [form, handleChange] = useForm({name: ''})
  return (
    <form>
      <Input value={form.name} onChange={handleChange}></Input>
    </form>
  )
}

export default App;
