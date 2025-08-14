import { useState, useEffect } from 'react';
import bgVideo from "./splash_space.mp4"
import "./Survey.css"

function Survey() {
  const [level, setLevel] = useState(0);
  const [quest, setQuest] = useState("질문이 여기 들어갑니다.");
  const [choice, setChoice] = useState("");

  useEffect(() => {
    switch (level) {
      case 0:
        setQuest("이건 첫번째 질문");
        break;
      case 1:
        setQuest("이건 두번째 질문");
        break;
    }
  }, [level]);

  return (
    <div>
      <div className='video-container'>
        <video autoPlay loop muted playsInline className='background-video'>
          <source src={bgVideo} type="video/mp4"/>
        </video>
      </div>

      <div className='content'>
        {!choice ? (
          <>
            <div className='Question'>
                {quest}
            </div>
            <div className='answer'>
              <button onClick={()=> setChoice("A")}>A</button>
              <button onClick={()=> setChoice("B")}>B</button>
            </div>
          </>
        ) : (
          <>
            <div>
              <h2>응답 결과</h2>
              <span />
              <b>{choice}</b>
            </div>
          </>
        )}
        </div>
    </div>
  );
}

export default Survey;