import { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import Image from 'next/image';
import styles from "../styles/Product.module.css"
import {useDispatch} from 'react-redux'
import {addToBasket} from '../src/slices/Basketslice'

const max_rating=5;
const min_rating=1;
const Product=({id,title,description,image,category,price})=> {
    const[rating]=useState(
       Math.floor( Math.random()*(max_rating-min_rating+1))+min_rating
    )
    const dispatch = useDispatch();
    const addtocart=()=>{
        const product={id,title,description,image,category,rating,price};
        dispatch(addToBasket(product))

    }


    return (
        <div className={styles.container}>
            <p className={styles.category}>{category}</p>
           <div className={styles.image}>  <Image alt="image" src={image} width={250} height={240} objectFit='contain'  /></div>
            <h4 className={styles.title}>{title}</h4>
            <div className={styles.rating} >
            {Array(rating)
            .fill()
            .map((_,i)=>(
                <StarIcon key={i} className={styles.star} />
            ))
            
            }
            </div>
            <p className={styles.description}>{description}</p>
            <h4 className={styles.price}>$ {price}</h4>
            <div className={styles.button} ><button onClick={addtocart}>Add to Basket</button></div>
        </div>
    )
}

export default Product
