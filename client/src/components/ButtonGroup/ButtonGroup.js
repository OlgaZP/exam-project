import React, { useState } from 'react';
import styles from './ButtonGroup.module.sass';
import classNames from 'classnames/bind';

const buttonElements = [
  {
    agree: 'Yes',
    body: 'The Domain should exactly match the name',
  },
  {
    agree: 'Yes',
    body: 'But minor variations are allowed (Recommended)',
  },
  {
    agree: 'No',
    body: 'I am only looking for a name, not a Domain',
  },
];

function ButtonGroup () {
  const [active, setActive] = useState(buttonElements[0].body);

  const cs = classNames.bind(styles);

  const mapButtons = (button, i) => {
    const btnClass = cs({
      buttonNotActive: true,
      buttonActive: active === button.body,
    });
    return (
      <button
        className={btnClass}
        key={i}
        // active={active === button.body}
        onClick={() => setActive(button.body)}
      >
        <div> {button.agree}</div>
        <p> {button.body} </p>
      </button>
    );
  };

  return (
    <section className={styles.sectionContainer}>
      <h4> Do you want a matching domain (.com URL) with your name? </h4>
      <p>
        If you want a matching domain, our platform will only accept those name
        suggestions where the domain is available. (Recommended)
      </p>
      <div className={styles.buttonsContainer}>
        {buttonElements.map(mapButtons)}
      </div>
    </section>
  );
}

export default ButtonGroup;
