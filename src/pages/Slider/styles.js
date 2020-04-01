import styled from 'styled-components'

export const SliderContainer = styled.div`
  height:600px;
  background:rgb(239, 241, 249);
  width:100%;
  position:relative;
  display:flex;
  justify-content:center;
`
export const TitleAlert = styled.div`
  position:relative;
  width:100%;
  display:flex;
  height:auto;
`
export const Title = styled.div`
  height:45px;
  color:#01A5B2;
  background:#072B48;
  left:-10px;
  width: 58%;
  top:25px;
  padding:10px 20px;
  font-weight:bold;
  position:absolute;
  display:flex;
  align-items:center;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.3);
  user-select:none;
`
export const Arrow = styled.div`
  width: 0; 
  height: 0; 
  position:absolute;
  top:25px;
  left:calc(58% - 10px);
  border-left: 30px solid #072B48;
  border-top: 22.5px solid transparent;
  border-bottom: 22.5px solid transparent;
`
export const CircleClose = styled.div` 
  height:30px;
  width:30px;
  background:white;
  border-radius:50%;
  position:absolute;
  top:-12px;
  right:-12px;
`
export const Container = styled.div` 
  height:auto;
  width:90%;
  background:white;
  position:absolute;
  top:110px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  padding:20px 25px;
  border-radius:20px;
  user-select:none;
`
export const Image = styled.div` 
  position:absolute;
  top:10px;
  right:15px;
  z-index:5;
  user-select:none;
`
export const Person = styled.div` 
  position:absolute;
  top:74%;
  left:14px;
  z-index:5;
  user-select:none;
`
export const CircleLeft = styled.div`
  position:absolute;
  top:calc(50% - 30px);
  height:60px;
  width:60px;
  border-radius:50%;
  background:#072B48;
  z-index:6;
  left:-50px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
  display:flex;
  align-items:center;
  justify-content:center;
`
export const CircleRight = styled.div`
  position:absolute;
  top:calc(50% - 30px);
  height:60px;
  width:60px;
  border-radius:50%;
  background:#072B48;
  z-index:6;
  right:-50px;
  display:flex;
  align-items:center;
  justify-content:center;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
`