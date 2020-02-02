import React from 'react';
import styled from 'styled-components';

const Left = styled.svg`
 float: left;
 margin-left: 250px;
 margin-top:200px;
 z-index: 1;
 position: absolute;
 display:block;
 cursor: pointer;
`

const LeftArrow = (props) => (
  <div>
      <Left onClick={props.prevImage}><path fill='white' d="M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z"/></Left>
      
      
  </div>
);

export default LeftArrow;
