import { useState, useEffect } from 'react';
import bgVideo from "./splash_space.mp4"
import "./Survey.css"
import { useNavigate } from 'react-router-dom';

function Survey() {
  const [level, setLevel] = useState(0);
  const [quest, setQuest] = useState("질문이 여기 들어갑니다.");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [count, setCount] = useState([0, 0, 0, 0]);
  const [isEnd, setIsEnd] = useState(false);
  const [max, setMax] = useState(1);
  const navigate = useNavigate();

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
      case 6:
        setIsEnd(true);
      default:
        setQuest("Q1. 낯선 행성에 첫 착륙! 기지에서 내린 당신은 가장 먼저 할 일은?");
        setAnswer1("지형을 파악하고 앞장선다");
        setAnswer2("수치를 측정하고 기록한다");
        setAnswer3("팀원 상태부터 점검한다");
        setAnswer4("생명체가 있을지 살핀다");
    }
  }, [level]);

  const handleCount = (index) => {
    setCount(prev => {
      const newCount = [...prev];
      newCount[index] += 1;
      return newCount;
    });
    console.log(count);
  }

  const getResult = () => {
    let maxIndex = 0;
    for (let i = 0; i < count.length; i++) {
      if (count[i] > count[maxIndex]) {
        maxIndex = i;
      }
      setMax(maxIndex);
    }
    navigate("/result", { state: { max: maxIndex } });
  }

  return (
    <div>
      <div className='content'>
        {isEnd ? (
          <div className='ending-container'>
            <h4>테스트 종료!</h4>
            <h4>결과를 보러 가시겠습니까?</h4>
            <button onClick={getResult}>결과 확인하기</button>
          </div>) : (
          <div className='survey-container'>
            <div className='Question'>
              {quest}
            </div>
            <div className='answer'>
              <button onClick={() => handleCount(0)}>{answer1}</button>
              <button onClick={() => handleCount(1)}>{answer2}</button>
              <button onClick={() => handleCount(2)}>{answer3}</button>
              <button onClick={() => handleCount(3)}>{answer4}</button>
            </div>
            <button onClick={() => setLevel(prev => prev + 1)}>다음 질문</button>
          </div>)}
      </div>
    </div>
  );
}

export default Survey;