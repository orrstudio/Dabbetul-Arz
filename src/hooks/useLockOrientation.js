import { useEffect } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';

/**
 * Хук для блокировки ориентации экрана.
 * По умолчанию блокирует вертикальную ориентацию.
 *
 * @param {string} orientation - ориентация (значение из ScreenOrientation.OrientationLock).
 */
export default function useLockOrientation(orientation = ScreenOrientation.OrientationLock.PORTRAIT) {
  useEffect(() => {
    async function lockOrientation() {
      try {
        await ScreenOrientation.lockAsync(orientation);
        console.log(`Ориентация заблокирована на: ${orientation}`);
      } catch (error) {
        console.log("Ошибка блокировки ориентации:", error);
      }
    }
    lockOrientation();
  }, [orientation]);
} 