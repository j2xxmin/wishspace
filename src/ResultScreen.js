import './App.css';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import bgVideo from "./splash_space.mp4";
import pilotImg from "./assets/img_pilot.jpg";
import specialistImg from "./assets/img_specialist.jpg";
import engineerImg from "./assets/img_engineer.jpg"
import doctorImg from "./assets/img_doctor.jpg"
import './ResultScreen.css'
import replayIcon from './assets/replayIcon.png'
import saveIcon from './assets/saveIcon.png'

function ResultScreen() {
    const location = useLocation();
    const { max } = location.state || {};
    const [resultImage, setResultImage] = useState("");
    const navigate = useNavigate();

    useEffect (() => {
        if (max == 0) {
            setResultImage(pilotImg);
        } else if (max == 1) {
            setResultImage(specialistImg);
        } else if (max == 2) {
            setResultImage(engineerImg);
        } else if (max == 3) {
            setResultImage(doctorImg);
        } else {
            navigate("/");
        }
    }, [max, navigate]);

    const saveImage = async () => {
        const link = document.createElement('a');

        link.href = resultImage;
        link.download = "my_space_job_result.jpg";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        if (navigator.share) {
            try {
                const response = await fetch(resultImage);
                const blob = await response.blob();

                const file = new File(
                    [blob], 
                    'my_space_job_result.jpg',
                    { type: blob.type }
                    );

                const shareData = {
                    files: [file]
                };

                await navigator.share(shareData);
            } catch (e) {
                console.log(e);
            }
        } else {
            if (!navigator.canShare) {
            alert('이 브라우저에서는 공유 기능이 지원되지 않습니다.');
            return;
        }
    }
    }

    const replay = () => {
        navigate("/");
    }

    return (
        <div className='screen'>
            <img src={saveIcon} alt="저장 및 공유하기" onClick={saveImage} className='saveIcon' />
            <img src={replayIcon} alt="다시하기" onClick={replay} className='replayIcon' />

            {resultImage ? (
                <img src={resultImage} className="imgScreen" alt="결과 이미지"></img>
                ) : (<></>)}
        </div>
    );
}

export default ResultScreen;