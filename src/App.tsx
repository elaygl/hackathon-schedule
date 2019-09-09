import React from 'react';
import styled from 'styled-components';
import ComingUp from './ComingUp';
import {Row} from './components';
import Countdown from './Countdown';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: #10092c;
`;

const TitleImage = styled.img`
  margin: 64px;
  object-fit: contain;
  height: 72px;
`;
const HackathonLogo = styled.img`
  margin: 64px;
  object-fit: contain;
  height: 72px;
`;

const Separator = styled.div`
  flex-shrink: 0;
  height: 100%;
  width: 2px;
  background: repeating-linear-gradient(to bottom, white 0, white 3px, transparent 3px, transparent 7px);
`;

const App: React.FC = () => {
  return (
    <Container>
      <TitleImage src={require('./resources/title.png')} />
      <Row style={{flex: 1}}>
        <ComingUp />
        <Separator />
        <Countdown />
      </Row>
      <HackathonLogo src={require('./resources/hackathon-logo.png')} />
    </Container>
  );
};

export default App;
