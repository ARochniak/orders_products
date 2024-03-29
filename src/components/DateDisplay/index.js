import React, { useState, useEffect } from 'react';

const DateDisplay = () => {
  const getDateArray = () => {
    return new Date()
      .toLocaleString('en', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        weekday: 'long'
      })
      .split(' ');
  };
  const [date, setDate] = useState(getDateArray());

  useEffect(() => {
    function getMSToTomorrow() {
      let now = new Date();
      let tomorrow = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1
      );
      return tomorrow - now;
    }
    setTimeout(() => {
      setDate(getDateArray());
    }, getMSToTomorrow());
  });
  const wd = date[0].slice(0, -1);
  const md = date[2].slice(0, -1);
  const m = date[1];
  const y = date[3];

  return (
    <div>
      <div>{wd}</div>
      <div>{`${md} ${m}, ${y}`}</div>
    </div>
  );
};

export default DateDisplay;
