import './input.css'

const Input = ({label, ...props}) => {
   // Para llamar las propiedas a un función de componentes, siempre debo utilizar un objeto literal ( -- {props} --), osea llamar las llaves
   return(
      <div className='field'>
         <label>{label}</label>
         <input {...props} />
         {/* Para poder pasar las propiedades de un componente principal en la page App.Js a su etiqueta, lo que debemos hacer es llamar en fomar de spread operator las propiedades, haciendo una copia de ellas "{...props}" */}
         {/* Estas yo primero tengo que llamarlas y setearlas como parametros de mi función que me crea el componente y luego pasarsela a mi etiqueta que lo lleva. */}
      </div>
   )
}

export default Input