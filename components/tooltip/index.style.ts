import styled from "styled-components";

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer; 
  
  &:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
`;

export const TooltipText = styled.span`
    visibility: hidden;
    width: 120px;
    background-color: ${({theme}: any) => theme.tooltip};
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 96%;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 1s;

  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: ${({theme}: any) => `${theme.tooltip} transparent transparent transparent`}
  }
`;
