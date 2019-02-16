import React from "react";
import SpeakerStory from "components/Speakers/Speaker/SpeakerStory/SpeakerStory";
import SpeakerCard from "components/Speakers/Speaker/SpeakerCard/SpeakerCard";

import styles from "components/Speakers/Speaker/Speaker.module.css";

const Speaker = props => (
  <div className={styles.speaker}>
    <div className={styles.grid}>
      <SpeakerStory {...props} />
      <SpeakerCard {...props} />
    </div>
  </div>
);

export default Speaker;
