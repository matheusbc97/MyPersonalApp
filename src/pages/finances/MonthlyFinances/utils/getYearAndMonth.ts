function getYearAndMonth(monthsToAdd: number) {
  var previousMonthDate = new Date();
  previousMonthDate.setMonth(previousMonthDate.getMonth() + monthsToAdd);

  return `${previousMonthDate.getFullYear()}-${
    previousMonthDate.getMonth() + 1
  }`;
}

export default getYearAndMonth;
