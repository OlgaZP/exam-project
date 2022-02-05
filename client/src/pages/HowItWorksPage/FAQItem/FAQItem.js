import React, { useState } from 'react';

import styles from './FAQItem.module.sass';

function FAQItem (props) {
  const {
    faq: { question, answer },
  } = props;
  const [isActive, setIsActive] = useState(false);

  const displaySwitcher = () => setIsActive(!isActive);

  return (
    <div className={styles.faqItem}>
      <div className={styles.faqTitle} onClick={displaySwitcher}>
        <h4>{question}</h4>
        {isActive ? (
          <i className='fas fa-arrow-down'> </i>
        ) : (
          <i className='fas fa-arrow-right'> </i>
        )}
      </div>

      {isActive && <p> {answer}</p>}
    </div>
  );
}

export default FAQItem;
