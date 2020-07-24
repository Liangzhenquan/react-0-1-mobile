import React from 'react';
import styled from 'styled-components';
function Icon({ name }) {
  return (
    <Svg className="icon" aria-hidden="true">
      <use xlinkHref={`#icon-${name}`} />
    </Svg>
  );
}
const Svg = styled.svg`
  width: 16px;
  height: 16px;
`;
export default Icon;
