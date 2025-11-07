// preparations
let date1 = new Date(2020, 10, 12, 5, 30, 59);
let date2 = new Date(date1);
let date3 = new Date(2022, 4, 5, 14, 16, 30);
let date4 = new Date(2023, 4, 5, 1, 18, 35);

function consoleSeparator(){
    console.log("=".repeat(50));
}


/* ===========================================================================
1. startOfDay
Задача: startOfDay(d) — вернуть новую дату с тем же днём, но временем 00:00:00.
 */
function startOfDay(date) {
    let newDate = new Date(date);
    newDate.setUTCHours(0, 0, 0, 0);
    // newDate.setHours(0, 0, 0, 0);
    return newDate;
}

console.log("Initial date: " + date1);
console.log("Start of day: " + startOfDay(date1));


consoleSeparator();
/* ===========================================================================
2. startOfMonth
Задача: startOfMonth(d) — первая секунда месяца: день = 1, время = 00:00:00.000.
    Пример: startOfMonth(new Date(2025, 7, 26)) → 2025-08-01T00:00:00.000
 */
function startOfMonth(date) {
    return new Date(startOfDay(date).setUTCDate(1));
    // return new Date(startOfDay(date).setDate(1));
}

console.log("Initial date: " + date1);
console.log("Start of month: " + startOfMonth(date1));


consoleSeparator();
/* ===========================================================================
3. isSameDay
Задача: isSameDay(d1, d2) — true, если год/месяц/день совпадают (локальное время).
 */
function isSameDay(date1, date2) {
    return date1.getDate() === date2.getDate();
}

console.log("DateEquals (different dates): " + isSameDay(date1, date3));
console.log("DateEquals (same dates): " + isSameDay(date1, date2));


consoleSeparator();
/* ===========================================================================
4. isLeapYear
Задача: isLeapYear(year) — вернуть true, если год високосный.
    Пример: isLeapYear(2000) → true, isLeapYear(1900) → false, isLeapYear(2024) → true.
 */
function isLeapYear(date) {
    let year = date.getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log("Is leap year 2000: " + isLeapYear(new Date(2000, 1)));
console.log("Is leap year 1900: " + isLeapYear(new Date(1900, 1)));
console.log("Is leap year 1900: " + isLeapYear(new Date(2024, 1)));


consoleSeparator();
/* ===========================================================================
5. daysBetween
Задача: daysBetween(d1, d2) — целое количество дней между датами (локально), игнорируя время суток.
    Пример: между 2025-01-01 23:00 и 2025-01-02 01:00 → 1.
 */
function daysBetween(date1, date2) {
    return (Math.abs(startOfDay(date1) - startOfDay(date2))) / (1000 * 60 * 60 * 24);
    // 1000 -> ms to sec, 60 -> sec to min, 60 -> min to hours, 24 -> hours to days;
}

console.log("Days between dates: " + daysBetween(date1, date2));
console.log("Days between dates: " + daysBetween(date3, date4));
console.log("Days between dates: " + daysBetween(date1, date3)); // the reason for using setUTCHours in startOfDay()


consoleSeparator();
/* ===========================================================================
6. isWeekend
Задача: isWeekend(d) — вернуть true, если дата — суббота или воскресенье.
    Пример: isWeekend(new Date(2025, 0, 4)) → true (суббота)
 */
function isWeekend(date) {
    let d = new Date(date);
    return d.getDay() === 5 || d.getDay() === 6;
}
console.log("Is weekend (now): " + isWeekend(Date.now()));
console.log("Is weekend (2025-10-08): " + isWeekend(new Date(2025, 10, 8)));


consoleSeparator();
/* ===========================================================================
7. Дописать функцию, чтобы на консоль выводился массив
console.log([[1,2,3],[4,5,6],[7,8,9]]
    .reduce(function (accumulator, item) {}));
 */
console.log("array reduced:");
console.log([[1, 2, 3], [4, 5, 6], [7, 8, 9]].reduce(function (accumulator, item) {
    accumulator.unshift(...item);
    return accumulator;
}).sort((a, b) => a - b));

console.log([[1, 2, 3], [4, 5, 6], [7, 8, 9]].reduce(function (accumulator, item) {
    return accumulator.concat(...item);
}));