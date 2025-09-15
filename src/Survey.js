import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import bgVideo from "./splash_space.mp4"
import "./Survey.css"
import { useNavigate } from 'react-router-dom';
import rocket from './assets/rocket.png';
import rocketWhite from './assets/rocketWhite.png'
import rocketPurple from './assets/rocketPurple.png'
import ProgressBar from './ProgressBar';
import backBtn from './assets/return-button.png';

function Survey() {
  const [level, setLevel] = useState(0);
  const [quest, setQuest] = useState("질문이 여기 들어갑니다.");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [selectedAnsw, setSelectedAnsw] = useState(0);
  const [count, setCount] = useState([]);
  const [isEnd, setIsEnd] = useState(false);
  const [max, setMax] = useState(1);
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const rocket1 = useRef(null);
  const rocket2 = useRef(null);
  const rocket3 = useRef(null);
  const rocket4 = useRef(null);
  const [BtnNo1, setBtnNo1] = useState({});
  const [BtnNo2, setBtnNo2] = useState({});
  const [BtnNo3, setBtnNo3] = useState({});
  const [BtnNo4, setBtnNo4] = useState({});
  const [selectBtn1, setSelectBtn1] = useState({});
  const [selectBtn2, setSelectBtn2] = useState({});
  const [selectBtn3, setSelectBtn3] = useState({});
  const [selectBtn4, setSelectBtn4] = useState({});

  useLayoutEffect(() => {
    const updatePosition = () => {
      if (rocket1.current) {
        const rect = rocket1.current.getBoundingClientRect();
        const rect2 = rocket2.current.getBoundingClientRect();
        const rect3 = rocket3.current.getBoundingClientRect();
        const rect4 = rocket4.current.getBoundingClientRect();
        
        setBtnNo1({
          position: 'absolute',
          top: `${rect.top-23}px`,
          left: `${rect.left+22}px`,
        });

        setBtnNo2({
          position: 'absolute',
          top: `${rect2.top-23}px`,
          left: `${rect2.left+22}px`,
        });

        setBtnNo3({
          position: 'absolute',
          top: `${rect3.top-23}px`,
          left: `${rect3.left+22}px`,
        });

        setBtnNo4({
          position: 'absolute',
          top: `${rect4.top-23}px`,
          left: `${rect4.left+22}px`,
        });

        setSelectBtn1({
          position: 'absolute',
          top: `${rect.top+6}px`,
          left: '50%',
          transform: 'translateX(-50%)',
        });

        setSelectBtn2({
          position: 'absolute',
          top: `${rect2.top+6}px`,
          left: '50%',
          transform: 'translateX(-50%)',
        });

        setSelectBtn3({
          position: 'absolute',
          top: `${rect3.top+6}px`,
          left: '50%',
          transform: 'translateX(-50%)',
        });

        setSelectBtn4({
          position: 'absolute',
          top: `${rect4.top+6}px`,
          left: '50%',
          transform: 'translateX(-50%)',
        });
      }
    };

    updatePosition();
    
    // 윈도우 리사이즈 이벤트에 리스너 추가
    window.addEventListener('resize', updatePosition);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거 (메모리 누수 방지)
    return () => window.removeEventListener('resize', updatePosition);
  }, []);

  useEffect(() => {
    switch (level) {
      case 0:
        setQuest("Q1. 낯선 행성에 첫 착륙! 기지에서 내린 당신은 가장 먼저 할 일은?");
        setAnswer1("지형을 파악하고 앞장선다");
        setAnswer2("수치를 측정하고 기록한다");
        setAnswer3("팀원 상태부터 점검한다");
        setAnswer4("생명체가 있을지 살핀다");
        break;
      case 1:
        setQuest("Q2. 우주선 내부에 문제가 생겼을 때, 당신의 반응은?");
        setAnswer1("바로 복구 계획을 세운다");
        setAnswer2("침착히 원인을 분석한다");
        setAnswer3("모두를 진정시키고 대비한다");
        setAnswer4("원인 가능성을 넓게 본다");
        break;
      case 2:
        setQuest("Q3. 우주 탐사 일정을 마친 후, 당신은 기지에서 무엇을 할까?");
        setAnswer1("다음 임무를 준비한다");
        setAnswer2("탐사했던 데이터들을 정리한다");
        setAnswer3("지친 동료들을 챙긴다");
        setAnswer4("우주를 바라본다");
        break;
      case 3:
        setQuest("Q4. 우주 탐사의 가장 중요한 가치는 무엇이라고 생각하나요?");
        setAnswer1("미션 임무 완수");
        setAnswer2("깊이 있는 관찰");
        setAnswer3("대원들과의 팀워크");
        setAnswer4("복잡한 상황에서의 연결 능력");
        break;
      case 4:
        setQuest("Q5. 우주 탐사 중 예상치 못한 생명체와 마주쳤다면?");
        setAnswer1("방어 태세를 갖춘다");
        setAnswer2("위협이 있는지 냉정히 판단한다");
        setAnswer3("팀원 안전을 확인한다");
        setAnswer4("평화적인 방법으로 소통을 시도한다");
        break;
      case 5:
        setQuest("Q6. 낯선 우주 환경에서 혼자 남겨졌을 때, 나는...");
        setAnswer1("주변을 살펴 빠져나갈 길을 찾는다");
        setAnswer2("천천히 상황을 분석한다");
        setAnswer3("구조를 기다리며 침착히 대기한다");
        setAnswer4("외부와 연결할 방법을 찾아본다");
        break;
      default:
        setQuest("Q1. 낯선 행성에 첫 착륙! 기지에서 내린 당신은 가장 먼저 할 일은?");
        setAnswer1("지형을 파악하고 앞장선다");
        setAnswer2("수치를 측정하고 기록한다");
        setAnswer3("팀원 상태부터 점검한다");
        setAnswer4("생명체가 있을지 살핀다");
    }
  }, [level]);

  useEffect(() => {
    console.log('업데이트된 count:', count);
  }, [count]);

  const nextLevel = (selectedAnsw) => {
    if (!selectedAnsw) return;

    setCount((prev) => {
      const updatedCount = [...prev];
      updatedCount[level] = selectedAnsw;
      return updatedCount;
    });

    setLevel((prevLevel) => {
      const next = prevLevel + 1;
      if (next >= 6) {
        setIsEnd(true);
      }
      return next;
    });

    setSelectedAnsw(0);
  }

  const getResult = () => {
    const counts = [0, 0, 0, 0];

    for (const answer of count) {
      if (answer == 1) {
        counts[0]++;
      } else if (answer == 2) {
        counts[1]++;
      } else if (answer == 3) {
        counts[2]++;
      } else {
        counts[3]++;
      }
    }

    let maxIndex = 0;
    for (let i = 1; i < counts.length; i++) {
      if (counts[i] > counts[maxIndex]) {
        maxIndex = i;
      }
    }
    setMax(maxIndex);

    navigate("/result", { state: { max: maxIndex } });
  }

  const goToBack = () => {
    setLevel((prevLevel) => prevLevel - 1);
  };

  return (
    <div className='screen'>
      <video autoPlay loop muted playsInline className='background-video'>
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className='overlay'></div>

      <div className='content'>
        {isEnd ? (
          <div className='ending-container'>
            <h4>테스트 종료!</h4>
            <h4>결과를 보러 가시겠습니까?</h4>
            <button onClick={getResult}
              className='endBtn'>결과 확인하기</button>
          </div>) : (
          <div className='survey-container'>
            <img onClick={goToBack}
              src={backBtn} alt='뒤로가기'
              className='backBtn'></img>

            <div className='progress-container'>
              <ProgressBar level={level} />
              <p className='progresslevel'>{level + 1}/6</p>
            </div>

            <p className='question'>{quest}</p>

            <div className='answers-box'>
              <div className='answer-container1' onClick={() => setSelectedAnsw(1)}>
              <img src={selectedAnsw === 1 ? rocketPurple : rocketWhite} ref={rocket1} alt="로켓 버튼" className={`rocket1 ${selectedAnsw === 1 ? 'selected' : ''}`} />
              <h4 className={`BtnNo1 ${selectedAnsw === 1 ? 'selected' : ''}`} style={BtnNo1}>1</h4>
              <p className={`selectBtn1 ${selectedAnsw === 1 ? 'selected' : ''}`} style={selectBtn1}>{answer1}</p>
            </div>

            <div className='answer-container2' onClick={() => setSelectedAnsw(2)}>
              <img src={selectedAnsw === 2 ? rocketPurple : rocketWhite} ref={rocket2} alt="로켓 버튼" className={`rocket2 ${selectedAnsw === 2 ? 'selected' : ''}`} />
              <h4 className={`BtnNo2 ${selectedAnsw === 2 ? 'selected' : ''}`} style={BtnNo2}>2</h4>
              <p className={`selectBtn2 ${selectedAnsw === 2 ? 'selected' : ''}`} style={selectBtn2}>{answer2}</p>
            </div>

            <div className='answer-container3' onClick={() => setSelectedAnsw(3)}>
              <img src={selectedAnsw === 3 ? rocketPurple : rocketWhite} ref={rocket3} alt="로켓 버튼" className={`rocket3 ${selectedAnsw === 3 ? 'selected' : ''}`} />
              <h4 className={`BtnNo3 ${selectedAnsw === 3 ? 'selected' : ''}`} style={BtnNo3}>3</h4>
              <p className={`selectBtn3 ${selectedAnsw === 3 ? 'selected' : ''}`} style={selectBtn3}>{answer3}</p>
            </div>

            <div className='answer-container4' onClick={() => setSelectedAnsw(4)}>
              <img src={selectedAnsw === 4 ? rocketPurple : rocketWhite} ref={rocket4} alt="로켓 버튼" className={`rocket4 ${selectedAnsw === 4 ? 'selected' : ''}`} />
              <h4 className={`BtnNo4 ${selectedAnsw === 4 ? 'selected' : ''}`} style={BtnNo4}>4</h4>
              <p className={`selectBtn4 ${selectedAnsw === 4 ? 'selected' : ''}`} style={selectBtn4}>{answer4}</p>
            </div>

            </div>

            <button
              onClick={() => nextLevel(selectedAnsw)}
              className='nextBtn'>다음 질문</button>
          </div>)}
      </div>
    </div>
  );
}

export default Survey;