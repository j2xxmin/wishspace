import { useState } from 'react';

function Survey() {
  const [quest, setQuest] = useState("질문이 여기 들어갑니다.");
  const [choice, setChoice] = useState("");

  return (
    <div>
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
  );
}

export default Survey;