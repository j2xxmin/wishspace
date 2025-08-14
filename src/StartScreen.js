import './App.css';
import { useRef } from 'react';

function StartScreen() {
  const appRef = useRef(null);

  const handleFullScreen = () => {
    if (appRef.current) {
      if (appRef.current.requestFullscreen) {
        appRef.current.requestFullscreen();
      } else if (appRef.current.webKitRequestFullscreen) {
        appRef.current.webkitRequestFullscreen();
      } else if (appRef.current.msRequestFullscreen) {
        appRef.current.msRequestFullscreen();
      }
    }
  };

  return (
    <div>
      <h2>설문을 시작해보세요</h2>
      <link onClick={handleFullScreen}>시작하기</link>
    </div>
  );
}

export default StartScreen;