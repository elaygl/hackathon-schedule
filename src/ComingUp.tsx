import moment from 'moment';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Text, BigText, Row} from './components';
import {Schedule, HackathonEvent} from './schedule';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  padding: 72px 0;
`;

const getNextEvent = (): HackathonEvent => {
  const inEvent = Schedule.find(
    x =>
      x.startTime < new Date() &&
      moment(x.startTime)
        .add(x.durationInHours, 'hours')
        .toDate() > new Date()
  );

  if (inEvent) return inEvent;

  const event = Schedule.find(x => x.startTime > new Date());
  return event || Schedule[Schedule.length - 1];
};

const ComingUp: React.FC = () => {
  const [nextEvent, setNextEvent] = useState(getNextEvent());
  useEffect(() => {
    setInterval(() => {
      setNextEvent(getNextEvent());
    }, 1000 * 60);
  }, []);

  return (
    <Container>
      <Text color="#ff00df">COMING UP</Text>
      <Row>
        <BigText color="#ff00df">{nextEvent.name}</BigText>/
        <Text color="#ff00df">/{moment(nextEvent.startTime).format('HH:mm')}</Text>
      </Row>
    </Container>
  );
};

export default ComingUp;
