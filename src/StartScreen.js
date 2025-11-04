import './App.css';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './StartScreen.css';
import bgVideo from "./splash_space.mp4";

function StartScreen() {
  const appRef = useRef(null);
  const navigete = useNavigate();

  const handleStart = () => {
    navigete("/survey");
  }

  return (
    <div className='screen'>
      <video autoPlay loop muted playsInline className='background-video'>
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className='overlay'></div>

      <div className='startContent'>
        <h2>[우주 탐사대 성향 테스트]</h2>
        <h3>내 역할과 간식은 무엇일까?</h3>
        <h4 className='description'>
          지구 너머 미지의 세계를 탐험할 준비가 되셨나요?<br />
          당신은 우주탐사대에서 어떤 포지션이 어울릴까요?<br /><br />
          테스트하러 Go~ Go~
        </h4>
        <button onClick={handleStart}
          className='startButton'>
          우주탐사대 포지션 파악하러 가기
        </button>
      </div>
    </div>
  );
}

export default StartScreen;