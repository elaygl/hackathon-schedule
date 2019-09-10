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
  position: relative;
`;

const Background = styled.div`
  background: url(${require('./resources/background-icons.png')});
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
`;

const TitleImage = styled.img`
  margin: 64px;
  object-fit: contain;
  height: 72px;
  z-index: 1;
`;
const HackathonLogo = styled.img`
  margin: 64px;
  object-fit: contain;
  height: 72px;
  z-index: 1;
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
      <Background />
      <TitleImage src={require('./resources/title.png')} />
      <Row style={{flex: 1, zIndex: 1, width: '100%'}}>
        <ComingUp />
        <Separator />
        <Countdown />
      </Row>
      <HackathonLogo src={require('./resources/hackathon-logo.png')} />
    </Container>
  );
};

export default App;
