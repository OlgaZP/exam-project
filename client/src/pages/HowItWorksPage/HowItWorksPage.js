import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import CONSTANTS from '../../constants';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './HowItWorksPage.module.sass';
import WaysToUse from './WaysToUse/WaysToUse';
import FAQItem from './FAQItem/FAQItem';
import categories from './FAQCategories.json';

function HowItWorksPage () {
  const mapFAQ = (category, i) => (
    <div id={category.shortCategoryTitle} key={i}>
      <h3 className={styles.categoryTitle}>{category.categoryTitle}</h3>
      <div>
        {category.faqs.map(faq => (
          <FAQItem faq={faq} />
        ))}
      </div>
    </div>
  );
  return (
    <>
      <Header />
      <nav className={styles.navContainer}>
        <ul>
          <li>
            <a href='#'>Names For Sale</a>
          </li>
          <li>
            <a href='#'>Naming Contests</a>
          </li>
          <li>
            <a href='#'>Logos</a>
          </li>
          <li>
            <a href='#'>Taglines</a>
          </li>
          <li>
            <a href='#'>Other Services</a>
          </li>
          <li>
            <a href='#'>Agency Experience</a>
          </li>
          <li>
            <a href='#'>Resources</a>
          </li>
        </ul>
      </nav>
      <div className={styles.contentContainer}>
        <section className={styles.howWorkSection}>
          <div className={styles.howWorkInfo}>
            <span className={styles.miniSpan}>World's #1 Naming Platform</span>
            <h1>How Does Squadhelp Work?</h1>
            <p>
              Squadhelp helps you come up with a great name for your business by
              combining the power of crowdsourcing with sophisticated technology
              and Agency-level validation services.
            </p>
            <a href='https://vimeo.com/368584367'>
              <i className='fas fa-play'> </i>
              Play video
            </a>
          </div>
          <div className={styles.imageContainer}>
            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}/easy-start.svg`}></img>
          </div>
        </section>
        <section className={styles.servicesSection}>
          <span className={styles.miniSpan}>Our Services Section</span>
          <h2 className={styles.sectionHeader}>3 Ways To Use Squadhelp</h2>
          <p>
            Squadhelp offers 3 ways to get you a perfect name for your business.
          </p>
          <WaysToUse />
        </section>
        <hr className={styles.line}></hr>
        <section className={styles.namingStepsSection}>
          <img
            src={`${CONSTANTS.STATIC_IMAGES_PATH}/naming-steps-icon.svg`}
            style={{ width: '4em', height: '4em', marginTop: '4em' }}
          ></img>
          <h3 className={styles.sectionHeader}>How Do Naming Contests Work?</h3>
          <div className={styles.namingStepsContainer}>
            <img
              style={{ width: '30em', height: '30em' }}
              src={`${CONSTANTS.STATIC_IMAGES_PATH}/naming-steps-image.svg`}
            ></img>
            <ul className={styles.namingStepsList}>
              <li>
                Fill out your Naming Brief and begin receiving name ideas in
                minutes
              </li>
              <li>
                Rate the submissions and provide feedback to creatives.
                Creatives submit even more names based on your feedback.
              </li>
              <li>
                Our team helps you test your favorite names with your target
                audience. We also assist with Trademark screening.
              </li>
              <li>Pick a Winner. The winner gets paid for their submission.</li>
            </ul>
          </div>
        </section>
        <section className={styles.FAQSection}>
          <ul className={styles.FAQCategories}>
            {categories.map((category, i) => (
              <li key={i}>
                <a href={`#${category.shortCategoryTitle}`}>
                  {category.categoryTitle}{' '}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.FAQContent}> {categories.map(mapFAQ)} </div>
        </section>
        <section className={styles.getStartedSection}>
          <h3>Ready to get started?</h3>
          <p>
            Fill out your contest brief and begin receiving custom name
            suggestions within minutes.
          </p>
          <Link to='/startContest'>
            <span>Start A Contest</span>
          </Link>
          <img
            className={styles.getStartedTopSVG}
            src={`${CONSTANTS.STATIC_IMAGES_PATH}/get-started-top.svg`}
          ></img>
          <img
            className={styles.getStartedBottomSVG}
            src={`${CONSTANTS.STATIC_IMAGES_PATH}/get-started-bottom.svg`}
          ></img>
        </section>
        <section>Stats section</section>
        <section>Pricing section</section>
      </div>
      <Footer />
    </>
  );
}

export default HowItWorksPage;
