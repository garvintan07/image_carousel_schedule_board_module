import React from 'react';
import styled, {keyframes} from 'styled-components';


const Right = styled.svg`
  margin-top:200px;
  margin-left:900px;
  z-index:1;
  position: absolute;
  display: block;
  cursor: pointer;
  transition: opacity .2s ease-out 0s;
`
const RightArrow = (props) => (
  <div>
      <Right onClick={props.nextImage}><path fill='white' d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z"/></Right>
      
  </div>
);

export default RightArrow;
