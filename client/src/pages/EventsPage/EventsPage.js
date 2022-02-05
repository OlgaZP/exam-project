import React, { useEffect } from 'react';
import EventsForm from '../../components/EventsForm/EventsForm';
import EventsList from '../../components/EventsList/EventsList';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

// данные о собитиях хранятся в массиве events в localstorage
// надо ли этот массив через пропсы передавать в форму и список? да, видимо...
// где считываем и как обрабатывать руками или автоматически?

function EventsPage () {
  //   useEffect(() => {
  //     const events = localStorage.getItem('events');
  //   }, [events]);

  return (
    <>
      <Header />
      <div>
        <EventsForm />
        <EventsList />
      </div>
      <Footer />
    </>
  );
}

export default EventsPage;
