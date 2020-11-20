import React from 'react';
import PropTypes from 'prop-types';

const Skill = ({ link, logo, alt, label }) => (
  <div>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={logo} alt={alt} />
      <p>{label}</p>
    </a>
  </div>
);

Skill.propTypes = {
  link: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Skill;
