import React from 'react';
import ReactDom from 'react-dom';

interface Props {
  greeting: string;
}

const App: React.FC<Props> = ({ greeting }) => (
    <h4 className="container">
        <a href="./app.html">go about page</a>
        {greeting}

    </h4>
);

ReactDom.render(
    <App greeting="Hello About" />,
    document.getElementById('root'),
);
