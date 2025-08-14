import './App.css';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import bgVideo from "./splash_space.mp4";
import pilotImg from "./assets/img_pilot.jpg";
import specialistImg from "./assets/img_specialist.jpg";
import engineerImg from "./assets/img_engineer.jpg"
import doctorImg from "./assets/img_doctor.jpg"
import './ResultScreen.css'

function ResultScreen() {
    const location = useLocation();
    const navigate = useNavigate();
    const { max } = location.state || {};
    const [resultImage, setResultImage] = useState("");

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
    }, [max]);

    return (
        <div className='screen'>
            {resultImage ? (
                <img src={resultImage} className="imgScreen" alt="결과 이미지"></img>
                ) : (<></>)}
        </div>
    );
}

export default ResultScreen;