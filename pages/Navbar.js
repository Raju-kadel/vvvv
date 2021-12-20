import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import styles from "../styles/Navbar.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";

import { signIn, signOut, useSession } from "next-auth/react";

import { useSelector } from "react-redux";
import { Selectitems } from "../src/slices/Basketslice";
const Navbar = () => {
  const items = useSelector(Selectitems);

  const router = useRouter();
  const session = useSession();

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <div onClick={() => router.push("/")} className={styles.containerlogo}>
          <Image
            src={"https://links.papareact.com/f90"}
            height={36}
            width={150}
            objectFit={"contain"}
            alt={"image"}
          />
        </div>
        <div className={styles.containerinput}>
          <input type={"text"} />
          <SearchIcon className={styles.searchicon} />
        </div>
        <div className={styles.navbarinfo}>
          <div
            onClick={() => (session?.data?.user ? signOut() : signIn())}
            className={styles.navbarname}
          >
            <p>
              {session?.data?.user?.name
                ? (`Hello ${session.data.user.name}`)
                : ("Sign in")}
            </p>
            <p>Account and Lists</p>
          </div>
          <div className={styles.returns}>
            <p>Returns</p>
            <p>& Orders</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className={styles.basket}
          >
            <ShoppingCartOutlinedIcon className={styles.cart} />
            <span className={styles.count}>{items.length}</span>
            <p>Basket</p>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>
          <MenuIcon className={styles.menuicon} />
        </p>
        <p>All</p>
        <p>Prime Video</p>
        <p>Amazon's Business</p>
        <p>Today's Deals</p>
        <p>Electronics</p>
        <p>Food & Grocery</p>
        <p>Buy Again</p>
        <p>Shopper Toolkit</p>
        <p>Health & Insurance</p>
      </div>
    </header>
  );
};

export default Navbar;
