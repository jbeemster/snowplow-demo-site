import Image from "next/image";
import styles from "./index.module.scss";
import { useCartStore } from "@/store";
import { Product as ProductType } from "@/types/product";
import { Recommendations } from "../recommendations";
import { config } from "@/config";

interface ProductProps {
  product: ProductType;
}

export function Product({ product }: ProductProps) {
  const addProductToCart = useCartStore((state) => state.addProductToCart);
  const totalAmount = useCartStore((state) => state.totalAmount);

  function handleAddToCart() {
    addProductToCart(product);
  }

  return (
    <>
      <div className={styles.productContainer}>
        <div className={styles.productImageContainer}>
          <Image
            className={styles.productImage}
            alt="shoe"
            src={product.imgSrc}
            width={535}
            height={669}
          ></Image>
        </div>
        <div className={styles.productDescriptionContainer}>
          <div className={styles.productDescription}>
            <h1>{product.name}</h1>
            <h2>{product.category}</h2>
            <div className={styles.price}>${product.price}</div>
          </div>

          <div className={styles.actions}>
            <button className={styles.cartButton} onClick={handleAddToCart}>
              Add to cart
            </button>
          </div>
          <div className={styles.productText}>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </span>
            <ul>
              <li>Showing: {product.variant}</li>
              <li>Style: Hip tops</li>
            </ul>
          </div>
        </div>
      </div>
      <Recommendations />
    </>
  );
}
