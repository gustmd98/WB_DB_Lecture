import React from 'react';
import './Button1.css';
import buttonImage from './button1Image.png';

function Button1(){
    return(
       <button className="custom-button1">
            <img src={buttonImage} alt="버튼1이미지" />
            <span>일정 생성</span>
            <description>여행 일정을 만들고 공유할 수 있습니다.</description>
        </button>
    );
}

export default Button1;

