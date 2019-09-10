import styled from 'styled-components';

export const Text = styled.span`
  color: ${({color}) => color};
  font-weight: 300;
  font-family: 'IBM Plex Mono', monospace;
  text-transform: uppercase;
  font-size: 3.5vw;
`;

export const BigText = styled(Text)`
  color: ${({color}) => color};
  font-weight: 700;
  font-size: 5vw;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
