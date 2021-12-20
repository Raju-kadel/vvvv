import styles from "../styles/Productfeed.module.css";
import Product from "./Product";

const Productfeed=({ products })=> {
  
  return (
    <div className={styles.container}>
      {products.map(({ id, title, description, image, price, category }) => (
        <Product
          key={id}
          title={title}
          description={description}
          image={image}
          price={price}
          category={category}
          id={id}
          
        />
      ))}
    </div>
  );
}

export default Productfeed;
