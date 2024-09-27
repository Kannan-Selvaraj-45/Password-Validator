import Styled from 'styled-components'

export const BgContainer = Styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    background-color:#24263c;
`

export const InnerContainer = Styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:30px;
    height:60%;
    width:50%;
    border-style:solid;
    border-width:0px;
    background-color:#475569;
    border-radius:10px;
    box-shadow:#434451;
`
export const Heading = Styled.h1`
    font-family:"Roboto";
    font-size:48px;
    font-weight:bold;
    color: #f8fafc;
    margin-bottom:0;
    padding-bottom:5px;
`
export const Text = Styled.p`
    font-family:"Roboto";
    font-size:16px;
    color: #ffffff;

`
export const Input = Styled.input`
    font-family:"Roboto";
    width:60%;
    font-size:20px;
    color: #edeeff;
    margin-top:40px;
    height:40px;
    border-radius:5px;
    padding-left:10px;
    font-family:"Roboto";
    font-size:24px;
    font-weight:bold;
    color:#383a4e;
    outline:none;
`
export const ErrorText = Styled.p`
    font-family:"Roboto";
    font-size:18px;
    color:  #ef4444;
    font-weight:400;
    padding-top:5px;
`
