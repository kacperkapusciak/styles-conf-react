import React from "react";
import PropTypes from "prop-types";
import styles from "components/Speakers/Speaker/SpeakerCard/SpeakerCard.module.css";

const uri =
  "https://firebasestorage.googleapis.com/v0/b/styles-conf-react.appspot.com/o/Speakers%2";

const SpeakerCard = ({ name, surname, image, twitter, websites }) => (
  <aside className={styles.speaker_card}>
    <div>
        <img src={uri + image} alt={`${name} ${surname}`} />

      <ul>
        {twitter ? (
          <li key="twitter">
            <a href={`https://twitter.com/${twitter}`}>{`@${twitter}`}</a>
          </li>
        ) : null}
        {websites
          ? websites.map(website => (
              <li key={website}>
                <a href={website}>{website}</a>
              </li>
            ))
          : null}
      </ul>
    </div>
  </aside>
);

SpeakerCard.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  twitter: PropTypes.string,
  websites: PropTypes.array
};

export default SpeakerCard;
