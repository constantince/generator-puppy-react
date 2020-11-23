import React from 'react';
import bucket from '../assets/images/greeting.jpg';
import styled from 'styled-components';

type CallbackTpes<T> = {
    (say: T) : T
}

type Props = {
    Params1: string,
    Params2: number,
    Params3: CallbackTpes<boolean>
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: green;
`;

const FirstCom: React.FC<Props> = ({Params1, Params2, Params3}) => {

    const show = Params3(true);

    return <div>
        <Title> I am a styled component using css in js/ts.</Title>
        <img src={bucket} />
       {show ? <p> this is params1: {Params1} and this is param2: {Params2} now!!! </p> : null } 
    </div>
}

export default FirstCom;