import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import { addToBasket, removeFromBasket } from "../src/slices/Basketslice";
import { useDispatch } from "react-redux";
import styles from "../styles/Checkoutproduct.module.css";
function Checkoutproduct({
  id,
  title,
  description,
  rating,
  price,
  image,
  category,
}) {
  const dispatch = useDispatch();
  const add = () => {
    const product = { id, title, description, rating, price, image, category };
    dispatch(addToBasket(product));
  };
  const remove=()=>{
      dispatch(removeFromBasket({id}))
  }
  return (
    <div className={styles.container}>
      <Image
        src={image}
        height={160}
        width={200}
        objectFit="contain"
        className={styles.image}
      />
      <div className={styles.iteminfo}>
        <p className={styles.title}>{title}</p>
        <div className={styles.stars}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className={styles.star} key={i} />
            ))}
        </div>

        <p className={styles.price}>$ {price}</p>
      </div>
      <div className={styles.buttons}>
        <div>
          {" "}
          <p className={styles.button} onClick={add}>
            Add To Basket
          </p>{" "}
        </div>
        <div>
          {" "}
          <p className={styles.button} onClick={remove}>
            Remove From Basket
          </p>{" "}
        </div>
      </div>
    </div>
  );
}

export default Checkoutproduct;
