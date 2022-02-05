import React from 'react';
import { Link } from 'react-router-dom';
import CONSTANTS from '../../../constants';
import styles from './WaysToUse.module.sass';
import articles from './articles.json';

function WaysToUse () {
  const mapArticles = (article, i) => (
    <article className={styles.article} key={i}>
      <img src={`${CONSTANTS.STATIC_IMAGES_PATH}/${article.iconImage}`}></img>
      <h3>{article.header}</h3>
      <p>{article.body} </p>
      <Link to={article.link}> {article.linkText}</Link>
    </article>
  );
  return (
    <div className={styles.articlesContainer}>{articles.map(mapArticles)}</div>
  );
}

export default WaysToUse;
