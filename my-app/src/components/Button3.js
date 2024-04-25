import React from 'react';
import './Button3.css';
import buttonImage from './button3Image.png';

function Button3(){
    return(
       <button className="custom-button3">
            <img src={buttonImage} alt="버튼3이미지" />
            <span>후기 검색</span>
            <description>여행에 참고할 후기를 검색할 수 있습니다.</description>
        </button>
    );
}

export default Button3;