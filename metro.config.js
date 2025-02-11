const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
  const config = await getDefaultConfig(__dirname);
  // Добавляем расширение "m3u8" в список активов.
  config.resolver.assetExts = [...config.resolver.assetExts, 'm3u8'];
  return config;
})(); 