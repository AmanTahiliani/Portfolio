import React from 'react';
import PropTypes from 'prop-types';
import '../css/socialmedia.css';

const socialIcons = {
  instagram: {
    flat: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/instagram.svg',
    color: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',
    link: 'https://instagram.com/amantahiliani'
  },
  linkedin: {
    flat: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/linkedin.svg',
    color: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
    link: 'https://www.linkedin.com/in/amantahiliani/'
  },
  github: {
    flat: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/github.svg',
    color: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
    link: 'https://github.com/AmanTahiliani'
  },
  goodreads: {
    flat: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/goodreads.svg',
    color: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Goodreads_%27g%27_logo.svg',
    link: 'https://www.goodreads.com/amantahiliani'
  }
};

function SocialMedia({ useColorIcons = false, whiteIcons = false }) {
  const iconType = useColorIcons ? 'color' : 'flat';
  const iconClass = whiteIcons ? 'social-icon white' : 'social-icon';

  return (
    <div className="social-media">
      {/* <h2>Contact Me!</h2> */}
      <ul>
        {Object.entries(socialIcons).map(([platform, obj]) => (
          <li key={platform}>
            <a href={obj['link']} target="_blank" rel="noopener noreferrer">
              <img src={obj[iconType]} alt={platform} className={iconClass} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
SocialMedia.propTypes = {
  useColorIcons: PropTypes.bool,
  whiteIcons: PropTypes.bool
};

export default SocialMedia;