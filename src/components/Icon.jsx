import React from 'react';
import styled from 'styled-components';
function Icon({ name, fill }) {
  return (
    <Svg className="icon" aria-hidden="true" fill={fill}>
      <use xlinkHref={`#${name}`} />
    </Svg>
  );
}
const Svg = styled.svg`
  width: 16px;
  height: 16px;
`;
export default Icon;
