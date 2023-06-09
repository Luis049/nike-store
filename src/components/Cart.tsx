import CartCount from "./cart/CartCount"
import CartEmpty from "./cart/CartEmpty"

type Props = {}

const Cart = (props: Props) => {
  return (
    <>
    <div className={`fixed top-0 right-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z[250]`}>
        <div className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}>
            <CartCount />
            <CartEmpty />
            <CartEmpty />
        </div>
    </div>
    </>
  )
}

export default Cart