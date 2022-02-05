import React, { useState, useEffect } from 'react';
import moment from 'moment';
// import classNames from 'classnames/bind';
import styles from './EventListItem.module.sass';

const calculateTimeLeft = endDate => {
  const difference = +new Date(endDate) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      d: Math.floor(difference / (1000 * 60 * 60 * 24)),
      h: Math.floor((difference / (1000 * 60 * 60)) % 24),
      m: Math.floor((difference / 1000 / 60) % 60),
      //   s: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const calcuatePersent = (endDate, startDate) => {
  const persent = Math.floor(
    ((+new Date() - +new Date(startDate)) * 100) /
      (+new Date(endDate) - +new Date(startDate))
  );
  //   console.log(`persent for date `, persent, endDate);
  return persent > 100 || persent < 0 ? 100 : String(persent);
};

function EventListItem (props) {
  const {
    event: {
      title,
      date,
      inputDate,
      notificationDay,
      notificationHour,
      notificationMinute,
    },
  } = props;

  //   console.log(`EventListItem component for `, title, date);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(date));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(date));
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{' '}
      </span>
    );
  });

  //calcilate notificationStatus true or false
  const notificationStatus =
    moment(date)
      .subtract(notificationDay, 'days')
      .subtract(notificationHour, 'hours')
      .subtract(notificationMinute, 'minutes') > new Date()
      ? true
      : false;
  //   console.log(`notificationStatus for`, notificationStatus, title);

  //   const cs = classNames.bind(styles);

  //   const progressClassNames = cs({
  //     // beforeNotificationDate: true,
  //     // afterNotificationDate: notificationStatus,
  //     [`${notificationStatus}notificationDate`]: true,
  //   });

  return (
    <li key={title} className={styles.eventItem}>
      <div
        // className={progressClassNames}
        style={{
          backgroundColor: notificationStatus ? 'lightseagreen' : 'deeppink',
          width: calcuatePersent(date, inputDate) + '%',
          //    parseInt(title.match(/\d+/)) + '%',
          //   calculateTimeLeft(date) + '%' ,
          overflow: 'visible',
        }}
      >
        {title}{' '}
      </div>
      <div
        style={{
          width: 100 - calcuatePersent(date, inputDate) + '%',
          textAlign: 'right',
          overflow: 'visible',
          zIndex: '100',
          marginLeft: 'auto',
          whiteSpace: 'nowrap',
          position: 'relative',
          right:
            calcuatePersent(date, inputDate) > 80
              ? timerComponents.length + 'em'
              : '0',
        }}
      >
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
    </li>
  );
}

export default EventListItem;
