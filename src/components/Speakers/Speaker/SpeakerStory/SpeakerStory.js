import React from "react";
import PropTypes from "prop-types";

const SpeakerStory = ({ academicTitle, name, surname, title, content, about }) => (
  <div>
    <h2>
      {academicTitle ? `${academicTitle} `: null}
      {`${name} ${surname}`}
    </h2>
    <h5>{title}</h5>

    {content.map((paragraph, i) => (
      <p key={`content-${name}-${i}`}>{paragraph}</p>
    ))}

    <h5>{`About ${name}`}</h5>

    {about.map((paragraph, i) => (
      <p key={`about-${name}-${i}`}>{paragraph}</p>
    ))}
  </div>
);

SpeakerStory.propTypes = {
  academicTitle: PropTypes.string,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
  about: PropTypes.array.isRequired
}

export default SpeakerStory;
