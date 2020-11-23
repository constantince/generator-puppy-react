import React from 'react';
import ReactDom from 'react-dom';
import Comp from './components/firstComp';
import './index.scss';

interface Props {
  greeting: string;
}

const App: React.FC<Props> = ({ greeting }) => (
    <h4 className="container">
        {greeting}
        <Comp Params1="constantince" Params2={22} Params3={(say) => true} />
    </h4>
);

ReactDom.render(
    <App greeting="Hello World" />,
    document.getElementById('root'),
);
