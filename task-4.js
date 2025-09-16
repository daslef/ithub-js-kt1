/**
 * Задана переменная word со строковым значением.
 * Создайте переменную result с условием: если из
 * длины переменной word вычисляется квадратный корень
 * (без дробной части) - переменная result должна
 * содержать ответ 1, в противном случае - 0
 *
 * Пример:
 * let word = 'меню'
 * Результат: 1
 */

const word = prompt('Ваше слово')

if (word === null || word.length === 0) {
    // TODO выбросить ошибку с пояснением
}

word.length // длина слова
word.length ** 0.5 // квадратный корень
Math.pow(word.length, 0.5) // квадратный корень
Math.sqrt(word.length) // квадратный корень

const result = word.length === 2 ? 1 : 0 // TODO

console.log(result)
