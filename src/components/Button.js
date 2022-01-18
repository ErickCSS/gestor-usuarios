import './button.css'

const Button = ({children}) => {

   return(
      <button className='buttonForm'>
         {children}
      </button>
   )
}

export default Button