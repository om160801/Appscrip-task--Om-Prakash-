"use client"
import React, { useState } from "react";
import styles from "../app/styles/Body.module.css";

const productImages = [
  "/bag.svg",
  "/doll.svg",
  "/keyChain.svg",
  "/bagBack.svg",
  "/cap.svg",
  "/purse.svg",
  "/doll.svg",
  "/bagFold.svg",
  "/bagOpen.svg",
  "/roundedPurse.svg",
  "/miniBag.svg",
  "/yellowBag.svg",
  "/keyChain.svg",
  "/doll.svg",
  "/cap.svg",
  "/bagOpen.svg",
  "/bagBack.svg",
  "/yellowBag.svg",
];

const Body = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("RECOMMENDED");
  const [isFilterVisible, setFilterVisible] = useState(true);
  const [favorites, setFavorites] = useState(Array(productImages.length).fill(false).map((fav, index) => index === 2));

  const handleDropdownClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const handleHideFilterClick = () => {
    setFilterVisible(!isFilterVisible);
  };

  const toggleFavorite = (index) => {
    setFavorites((prevFavorites) => prevFavorites.map((fav, i) => (i === index ? !fav : fav)));
  };

  return (
    <div className={styles.bodyContainer}>
      <div className={styles.centerText}>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div className={styles.filterSortWrapper}>
        <div className={styles.filterSortContainer}>
          <div className={styles.leftOptions}>
            <span>3425 ITEMS</span>
            <button className={styles.hideFilterBtn} onClick={handleHideFilterClick}>
              <img src="/arrow-left.svg" alt="Left Arrow" className={styles.leftArrowImg} />
              <span>{isFilterVisible ? "HIDE FILTER" : "SHOW FILTER"}</span>
            </button>
          </div>

          <div className={styles.rightOptions}>
            <div className={styles.dropdownWrapper}>
              <div onClick={handleDropdownClick} className={styles.dropdownToggle}>
                {selectedOption}
                <img src="/arrow-down.svg" alt="Dropdown Arrow" className={styles.downArrowImg} />
              </div>

              {isDropdownOpen && (
                <div className={styles.dropdownMenu}>
                  <div onClick={() => handleOptionSelect("RECOMMENDED")}>RECOMMENDED</div>
                  <div onClick={() => handleOptionSelect("NEWEST FIRST")}>NEWEST FIRST</div>
                  <div onClick={() => handleOptionSelect("POPULAR")}>POPULAR</div>
                  <div onClick={() => handleOptionSelect("PRICE: HIGH TO LOW")}>PRICE : HIGH TO LOW</div>
                  <div onClick={() => handleOptionSelect("PRICE: LOW TO HIGH")}>PRICE : LOW TO HIGH</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mainContent}>
        {isFilterVisible && (
          <div className={styles.filterSection}>
            <h3>Filters</h3>
            <div>
              <input type="checkbox" id="customizable" name="customizable" />
              <label htmlFor="customizable">Customizable</label>
            </div>

            <div className={styles.dummyFilters}>
              <div className={styles.filterOption}>
                <h4>Ideal For</h4>
                <img src="/arrow-down.svg" alt="Down Arrow" className={styles.filterArrowImg} />
                <div className={styles.filterSubOption}>ALL</div>
              </div>
              {/* Add other filter options here */}
            </div>
          </div>
        )}

        <div className={`${styles.productSection} ${!isFilterVisible ? styles.fullWidthProductSection : ""}`}>
          <div className={`${styles.productGrid} ${!isFilterVisible ? styles.fourColumnGrid : styles.threeColumnGrid}`}>
            {productImages.map((image, index) => (
              <div key={index} className={styles.productCard}>
                <img src={image} alt={`Product ${index + 1}`} className={styles.productImage} style={{ width: "300px", height: "399px" }} />
                <div className={styles.productInfo}>
                  <p className={styles.productName}>PRODUCT NAME</p>
                  <p className={styles.productPricing}>
                    Sign in or Create an account to see pricing
                    <img
                      src={favorites[index] ? "/heartFull.svg" : "/heart.svg"}
                      alt="Heart Icon"
                      className={styles.heartIcon}
                      onClick={() => toggleFavorite(index)}
                    />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
