import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import styles from './EventsForm.module.sass';
import DatePickerField from './DatePickerField';

function EventsForm (props) {
  const initialEventValues = {
    title: 'Event title ' + String(Math.trunc(Math.random() * 100)),
    date: new Date().toDateString(),
    notificationDay: 0,
    notificationHour: 0,
    notificationMibute: 0,
    // notificationSecond: 0,
  };

  const submitHandler = (values, formikBag) => {
    // console.log('into submit handler :>> ');
    // console.log('values :>> ', values);
    //получем массив events данных о событиях из localStorage, если есть
    let newEventList = [];
    if (localStorage['events']) {
      // получим из LocalStorage значение ключа «mykey» и преобразуем его с помощью метода JSON.parse() в объект
      const oldEventList = JSON.parse(localStorage['events']);
      newEventList = [...oldEventList];
      // console.log(`oldEventList`, oldEventList);
    }
    //добавляем в массив новое событие
    newEventList.push({ inputDate: new Date('2022-01-01'), ...values });
    //пробует добавить обновленные данные в localStorage,
    // но если в хранилище закончилось место (QUOTA_EXCEEDED_ERR), то выведем в консоль сообщение об этом:

    try {
      localStorage['events'] = JSON.stringify(newEventList);
    } catch (e) {
      if (e.name === 'QUOTA_EXCEEDED_ERR') {
        console.log('Не достаточно места в localStorage');
      }
    }
    formikBag.resetForm();
  };

  return (
    <>
      <Formik initialValues={initialEventValues} onSubmit={submitHandler}>
        {formikProps => {
          return (
            <Form className={styles.eventFormContainer}>
              <div className={styles.eventFormRow}>
                <label htmlFor='title'>Event title</label>
                <Field name='title' />
                <label htmlFor='date'>Event date</label>
                <DatePickerField name='date' />
              </div>
              <div className={styles.eventFormRow}>
                <label>Remind me in </label>
                <label htmlFor='notificationDay'>day</label>
                <Field style={{ width: '2em' }} name='notificationDay' />
                <label htmlFor='notificationHour'>hour</label>
                <Field style={{ width: '2em' }} name='notificationHour' />
                <label htmlFor='notificationMinute'>minute</label>
                <Field style={{ width: '2em' }} name='notificationMinute' />
                {/* <label htmlFor='notificationSecond'>second</label>
                <Field style={{ width: '2em' }} name='notificationSecond' /> */}
                <button className={styles.addEventBtn} type='submit'>
                  Add To List
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default EventsForm;
