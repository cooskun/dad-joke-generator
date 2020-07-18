import React from "react";
import styles from "./SearchResults.module.scss";

const Wrapper = ({ children }) => {
  return (
    <div className={styles.results}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

const SearchResults = ({ results }) => {
  if (!results.length) {
    return (
      <Wrapper>
        <p className={styles.resultItem}>
          No found any joke belongs your search term!
        </p>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {results.map((result) => (
        <p key={result.id} className={styles.resultItem}>
          {result.joke}
        </p>
      ))}
    </Wrapper>
  );
};

export default SearchResults;
