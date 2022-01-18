import { useState } from 'react'

const useForm = (inicial) => {
   const [form, setForm] = useState(inicial)
   // para que hacer dinamico mi useState, simple a mi función le paso un parametro, y luego ese parametro se lo coloco a useState, así cuando use mi custom hooks en App.js, que le pase los parametros iniciales, directamente llegarán a useState, en este archivo
   const handleChange = (x) => {
      setForm({
         ...form,
         // Esto es una copia de mi variable de formulario, para hacer que no se me desaparezcan los otros valores iniciales de useState cuando comience a capturar los value
         [x.target.name]: x.target.value
      })
   }
   const reset = () => {
      setForm(inicial)
   }

   return [form, handleChange, reset]
   // Los valores que siempre tengo que exportar cuando hago un custom hooks, siempre será como primer valor, la variable que asignamos en useState y la función que me captura el value de mis inputs, que dentro lleva la función que me actualiza mi variable de useState, que en este caso es "form"
}

export default useForm