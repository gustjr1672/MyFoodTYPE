import { useEffect } from "react";
import { useNavigate  } from "react-router-dom";
import styled from "styled-components"

function Loding({answers,resultList}){
    const navigate = useNavigate();
    useEffect(()=>{
      const timer = setTimeout(() => {
        navigate('/result',{state:{answers,resultList}}); 
      }, 3000);

      return () => clearTimeout(timer);
    },[])
    return(
        <>
        <TotalCSS>
            <div className="loader">
                <div className="panWrapper">
                    <div className="pan">
                        <div className="food"></div>
                        <div className="panBase"></div>
                        <div className="panHandle"></div>
                    </div>
                    <div className="panShadow"></div>
                </div>
            </div>
            <h3>결과를 확인 중 입니다.</h3>
        </TotalCSS>
        </>
    )
}

export default Loding;

const TotalCSS = styled.div`
display:flex;
flex-direction:column;
.loader {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .panWrapper {
    width: 200px;
    height: fit-content;
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    flex-direction: column;
    gap: 20px;
  }
  
  .pan {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: fit-content;
    animation: cooking 1.7s infinite;
  }
  @keyframes cooking {
    0% {
      transform: rotate(0deg);
      transform-origin: top right;
    }
    10% {
      transform: rotate(-4deg);
      transform-origin: top right;
    }
    50% {
      transform: rotate(20deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  
  .food {
    position: absolute;
    width: 40%;
    height: 6px;
    background: linear-gradient(to bottom, rgb(82, 33, 33), rgb(200, 106, 106));
    left: 10px;
    border-radius: 50%;
    animation: flip 1.7s infinite;
    z-index: 2;
  }
  @keyframes flip {
    0% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-100px) rotate(180deg);
    }
    100% {
      transform: translateY(0px) rotate(360deg);
    }
  }
  .panBase {
    z-index: 3;
    width: 50%;
    height: 22px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    background: linear-gradient(to top, rgb(3, 156, 156), rgb(10, 191, 191));
  }
  .panHandle {
    width: 40%;
    background: linear-gradient(to bottom, rgb(18, 18, 18), rgb(74, 74, 74));
    height: 10px;
    border-radius: 10px;
  }
  .panShadow {
    width: 70px;
    height: 8px;
    background-color: rgba(0, 0, 0, 0.21);
    margin-left: 15px;
    border-radius: 10px;
    animation: shadow 1.7s infinite;
    filter: blur(5px);
  }
  @keyframes shadow {
    0% {
      transform: scaleX(0.7);
    }
    50% {
      transform: scaleX(1);
    }
    100% {
      transform: scaleX(0.7);
    }
  }
  

`