/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

const forecast = document.querySelector('.current-forecast h1');
const probability = document.querySelector('.current-forecast p');
const button = document.querySelector('.forecast-btn');



function saveNewForecast(forecast, probability) {
    const forecastItem = document.querySelector('#forecast-item');
    const cardWithForecast = forecastItem.content.cloneNode(true);

    cardWithForecast.querySelector('.forecast-item h3').textContent = forecast;
    cardWithForecast.querySelector('.forecast-item p').textContent = probability;

    const forecastContainer = document.querySelector('.forecasts');
    forecastContainer.append(cardWithForecast);
}



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

button.addEventListener("click", function() {
    const number = getRandomInt(0, 5);

    forecast.textContent = getRandomInt(0, 5);
    switch (number) {
        case 0:
            forecast.textContent = 'У тебя все получится!';
            break;
        case 1:
            forecast.textContent = 'Тебя ждут хорошие новости.';
            break;
        case 2:
            forecast.textContent = 'Сегодня замечательный день, чтобы сходить в кино.';
            break;
        case 3:
            forecast.textContent = 'Отличный день, чтобы купить новую сумочку.';
            break;
        case 4:
            forecast.textContent = 'Скоро все изменится.';
            break;
        case 5:
            forecast.textContent = 'Самое время что-то изменить.';
            break;

    }
    probability.textContent = `Вероятность: ${getRandomInt(0, 100)}%`;

    saveNewForecast(forecast.textContent, probability.textContent);
})