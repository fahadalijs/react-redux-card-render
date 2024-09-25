import { useEffect , useState } from 'react' 
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem } from './config/redux/reducer/cartSlice';
import Navbar from './component/Navbar';
import './App.css';



const App = () => {

  const [products, setProducts] = useState(null)

  // Selector
  const cartItems = useSelector(state => state.cart.cartItems);
  console.log(cartItems);

  // Dispatch
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => {
        console.log(res.products)
        setProducts(res.products)
      })
      .catch(err => console.log(err))
  }, [])

  const addToCart = (item) => {
    console.log(item);
    dispatch(addCartItem({
      item
    }))
  }

  return (
    <>
      <Navbar />
      <div className="container">
        {products ? products.map((item) => (
          <div className="product-card" key={item.id}>
            <img width="200" src={item.images[0]} alt="product img" />
            <h1>{item.title.slice(0, 10) + "..."}</h1>
            <h2>${item.price}</h2> 

            <button onClick={() => addToCart(item)}>Add to cart</button> 
            <hr />
          </div>
        )) : <h2>Item not found</h2>}
      </div>
    </>
  )
}

export default App;
