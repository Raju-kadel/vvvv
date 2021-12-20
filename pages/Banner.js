import Carousel from "react-material-ui-carousel";
import styles from '../styles/Banner.module.css'
import Image from 'next/image';
function Banner() {
  return (
    <div className={styles.container}>
      
      <Carousel
        autoplay={true}
        interval={5000}
        animation="slide"
        indicators={false}
        className={styles.carousel}
      >
        <Image loading='lazy' src="https:links.papareact.com/gi1" className={styles.img} height={444} width={1350} ></Image>
        <Image loading='lazy' src="https:links.papareact.com/6ff" className={styles.img} height={444} width={1350} ></Image>
        <Image loading='lazy' src="https:links.papareact.com/7ma" className={styles.img} height={444} width={1350} ></Image>
      </Carousel>
      <div className={styles.containerdiv}></div>
    </div>
  );
}

export default Banner;
