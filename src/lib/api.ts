import axios from "axios";

const instance = axios.create({
  baseURL: "https://tkmchess.com.tm/app/api/v1",
});

// Интерсептор запроса для скрытия параметров
instance.interceptors.request.use((config) => {
  // Убираем параметры запроса или другие данные
  if (config.params) {
    // Пример: Удаляем sensitive данные из запроса
    delete config.params.secretKey;
  }

  // Можно также добавлять скрытые заголовки, которые не будут видны в DevTools
  config.headers["X-Hide-Request"] = true; // Пример скрытого заголовка

  return config;
});

// Ваша обычная логика для запросов
export default instance;
