import React from 'react';
import './Button4.css';
import buttonImage from './button4Image.png';

function Button4(){
    return(
       <button className="custom-button4">
            <img src={buttonImage} alt="버튼4이미지" />
            <span>후기 작성</span>
            <description>여행에 대한 후기를 작성할 수 있습니다.</description>
        </button>
    );
}

export default Button4;