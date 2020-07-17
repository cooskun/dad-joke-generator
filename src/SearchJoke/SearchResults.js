import React from "react";
import styles from "./SearchResults.module.scss";

const SearchResults = ({ results }) => {
  return (
    <div className={styles.results}>
      <div className={styles.container}>
        {results &&
          results.map((item) => (
            <p key={item.id} className={styles.resultItem}>
              {item.joke}
            </p>
          ))}
      </div>
    </div>
  );
};

export default SearchResults;
