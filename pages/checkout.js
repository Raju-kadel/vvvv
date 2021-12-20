import Image from "next/image";
import Navbar from "./Navbar";
import styles from "../styles/checkout.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { selectItems, totalPrice } from "../src/slices/Basketslice";
import { useSelector } from "react-redux";
import Checkoutproduct from "./Checkoutproduct";
function Checkout() {
  const items = useSelector(selectItems);
  const price = useSelector(totalPrice);
  console.log(`checkout ko ho ${items}`);
  console.log(items?.title);
  return (
    <div>
      <Navbar />
      <main className={styles.containerr}>
        <div className={styles.leftpart}>
          <Image
            src="https://links.papareact.com/ikj"
            height={220}
            width={841}
            alt="image"
          />
          <div className={styles.shopping}>
            <h1>
              <span>
                <ShoppingCartOutlinedIcon className={styles.cart} />
              </span>
              Your Shopping Basket
            </h1>
            <hr className={styles.line} />
          </div>
          <div className="styles.basketitems">
            {items.length != 0 ? (
              items.map(
                ({
                  id,
                  title,
                  description,
                  rating,
                  price,
                  image,
                  category,
                }) => (
                  <Checkoutproduct
                    key={id}
                    title={title}
                    description={description}
                    price={price}
                    category={category}
                    image={image}
                    rating={rating}
                    id={id}
                  />
                )
              )
            ) : (
              <h2 className={styles.no}>No items in Basket</h2>
            )}
          </div>
        </div>

        <div className={styles.rightpart}>
          <div className={styles.total}>
            <p> Subtotal Basket</p>
            <p>$ {price.toFixed(2)}</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Checkout;
