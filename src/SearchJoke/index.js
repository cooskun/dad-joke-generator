import React, { useState } from "react";
import Searchbar from "./Searchbar";
import SearchToggle from "./SearchToggle";
import SearchResults from "./SearchResults";

import anime from "animejs";
import styles from "./index.module.scss";
import { animationConfig } from "./utils";
import { useSearchedJokes } from "../service";

const SearchJoke = () => {
  const [term, setTerm] = useState("");
  const [finalTerm, setFinalTerm] = useState("");
  const [enabled, setEnabled] = useState(false);
  const { results, search } = useSearchedJokes(finalTerm);

  const enableSearchArea = () => setEnabled(true);

  const disableSearchArea = () => {
    const timeline = anime.timeline({
      ...animationConfig.timelineBase,
      complete: () => setEnabled(false),
    });

    timeline
      .add(animationConfig.formEffectBackward)
      .add(animationConfig.waveEffectBackward, "-=200");
  };

  const handleChange = (e) => setTerm(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFinalTerm(term);
    search();
  };

  return (
    <div>
      <SearchToggle
        enable={enabled}
        onClick={enabled ? disableSearchArea : enableSearchArea}
      />

      {enabled && (
        <div className={styles.wrapper}>
          <Searchbar onChange={handleChange} onSubmit={handleSubmit} />
          <SearchResults results={results} />
        </div>
      )}
    </div>
  );
};

export default SearchJoke;
