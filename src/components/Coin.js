import React from 'react';
import styles from "./Coin.module.css";

const Coin = (props) => {

    const { name, image, symbol, price, marketCap, priceChange}=props;

    return (
        <div>
            <div className={styles.container}>
                <img className={styles.image} src={image} alt={name} />
                <span className={styles.name} >{name}</span>
                <span className={styles.symbol} >{symbol.toUpperCase()}</span>
                <span className={styles.currentPrice} >$ {price.toLocaleString()}</span>
                <span className={priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange} >{priceChange.toFixed(2)}</span>
                <span className={styles.marketCap} >$ {marketCap.toLocaleString()}</span>
            </div>
            
        </div>
    );
};

export default Coin;