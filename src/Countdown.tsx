import moment from 'moment';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {BigText, Text} from './components';
import {Schedule} from './schedule';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 210px;
  width: 600px;
  padding: 72px 0;
  margin: auto;
`;

const LastEvent = moment(Schedule[Schedule.length - 1].startTime);
const calculateTimeLeft = () => moment.duration(LastEvent.diff(moment()));
const padWithZero = (num: number): string => num.toString().padStart(2, '0');

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  }, []);

  return (
    <Container>
      <Text color="#00ed3f">TIME LEFT</Text>
      <BigText color="#00ed3f">
        {padWithZero(timeLeft.days() * 24 + timeLeft.hours())}:{padWithZero(timeLeft.minutes())}:
        {padWithZero(timeLeft.seconds())}
      </BigText>
    </Container>
  );
};

export default Countdown;
