import { useEffect } from 'react' 
import { useSelector } from 'react-redux'

const App = () => {

//   // selector
const selector = useSelector(state => state.cart.cartItems);
console.log(selector);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => {
        (res.products)
      })
      .catch(err => console.log(err))
  }, [])



  return (
    <>
    App
    </>
  )
}

export default App
