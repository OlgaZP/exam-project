import React from 'react';
import moment from 'moment';
import styles from './EventsList.module.sass';
import EventListItem from './EventListItem';

function EventsList () {
  const events = localStorage['events']
    ? JSON.parse(localStorage['events'])
    : [];

  const compareDate = function (a, b) {
    if (a.date > b.date) {
      return 1;
    }
    if (a.date < b.date) {
      return -1;
    }
    return 0;
  };

  const numExpiredNotification = events.reduce((accumulator, currentValue) => {
    const {
      date,
      notificationDay,
      notificationHour,
      notificationMinute,
    } = currentValue;
    return moment(date)
      .subtract(notificationDay, 'days')
      .subtract(notificationHour, 'hours')
      .subtract(notificationMinute, 'minutes') > new Date()
      ? accumulator
      : accumulator + 1;
  }, 0);
  // const eventsSorted = events.sort(compareDate);
  // const scale = {
  //   start: eventsSorted[0]?.date,
  //   end: eventsSorted[eventsSorted.length - 1]?.date,
  // };

  //   console.log(`eventsSorted`, eventsSorted);
  //   console.log(`scale`, scale);
  const mapEvent = event => {
    return <EventListItem event={event} />;
  };

  return (
    <>
      <div>
        <p style={{ textAlign: 'center' }}>
          Live upcomming notifications{' '}
          <span className={styles.numAlert}>{numExpiredNotification}</span>
        </p>
        <ul className={styles.eventListContainer}>
          {events.sort(compareDate).map(mapEvent)}
        </ul>
      </div>
    </>
  );
}

export default EventsList;
