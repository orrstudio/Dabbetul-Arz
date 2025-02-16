const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  // Добавляем правило для обработки файлов m3u8,
  // например, с помощью raw-loader, который загружает содержимое как текст.
  // Не забудьте установить raw-loader: npm install --save-dev raw-loader
  config.module.rules.push({
    test: /\.m3u8$/,
    use: 'raw-loader',
  });
  config.output.publicPath = '/Dabbetul-Arz/_expo/';
  return config;
}; 