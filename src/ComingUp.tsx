import moment from 'moment';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Text, BigText} from './components';
import {Schedule, HackathonEvent} from './schedule';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 210px;
  width: 600px;
  padding: 72px 0;
  margin: auto;
`;

interface EventState {
  event: HackathonEvent;
  isHappeningNow: boolean;
}

const getNextEvent = (): EventState => {
  const inEvent = Schedule.find(
    x =>
      x.startTime < new Date() &&
      moment(x.startTime)
        .add(x.durationInHours, 'hours')
        .toDate() > new Date()
  );

  if (inEvent) return {event: inEvent, isHappeningNow: true};

  const event = Schedule.find(x => x.startTime > new Date());
  return {event: event || Schedule[Schedule.length - 1], isHappeningNow: false};
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
      <Text color="#EA3498">{nextEvent.isHappeningNow ? 'RIGHT NOW' : 'COMING UP'}</Text>
      <BigText color="#EA3498">{nextEvent.event.name}</BigText>
      <Text color="#EA3498">{moment(nextEvent.event.startTime).format('HH:mm')}</Text>
    </Container>
  );
};

export default ComingUp;
