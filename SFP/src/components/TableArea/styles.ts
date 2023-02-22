import styled from 'tailwind-styled-components';

export const TableHeadColumn = styled.th<{width?: number}>`//Prop opcional
  width: ${props => props.width? `${props.width}px` : 'auto'};//Verifica se tem prop
  padding: 10px 0;
  text-align: left;
`;