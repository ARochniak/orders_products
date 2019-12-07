const months = ['Янв', 'Февр', 'Мар', 'Апр', 'Май', 'Июн',
  'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];

const getDate = (dateStr, type) => {
  const date = new Date(dateStr);

  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  let monthLong = month < 10 ? '0' + month  : month;

  switch(type) {
    case 'numeric': {
      return `${day}/${monthLong}`;
    }
    case 'longNumeric': {
      return `${day}/${monthLong}/${year}`;
    }
    default: return `${day}/${months[date.getMonth()]}/${year}`;
  }
}

export default getDate;