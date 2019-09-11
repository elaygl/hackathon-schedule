import moment from 'moment';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {BigText, Text} from './components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 210px;
  width: 600px;
  padding: 72px 0;
  margin: auto;
`;

const PresentationTime = moment({day: 12, month: 8, year: 2019, hour: 10, minute: 0, second: 0});
const calculateTimeLeft = () => moment.duration(PresentationTime.diff(moment()));
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
