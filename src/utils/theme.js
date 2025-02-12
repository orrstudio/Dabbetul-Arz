// utils/theme.js

export const darkTheme = {
    background: "#111112",
    text: "#fff",
    channelBackground: "#333",
    activeChannelBackground: "#555",
    channelText: "#ffd700",
    activeChannelText: "#fff",
    // Добавьте и другие переменные темы по необходимости
  };
  
  export const lightTheme = {
    background: "#fff",
    text: "#000",
    channelBackground: "#ddd",
    activeChannelBackground: "#eee",
    channelText: "#000",
    activeChannelText: "#000",
    // Добавьте и другие переменные темы по необходимости
  };
  
  // Функция для выбора темы по названию
  export const getThemeByName = (themeName = "dark") =>
    themeName === "dark" ? darkTheme : lightTheme;