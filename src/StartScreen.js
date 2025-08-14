import './App.css';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function StartScreen() {
  const appRef = useRef(null);
  const navigete = useNavigate();

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

    handleStart();
  };

  const handleStart = () => {
    navigete("/survey");
  }

  return (
    <div>
      <h2>설문을 시작해보세요</h2>
      <button onClick={handleFullScreen}>
      전체 화면 시작
      </button>
    </div>
  );
}

export default StartScreen;