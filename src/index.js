import React from 'react';
import ReactDOM from 'react-dom';

function parseParams() {
    const search = location.search;
    if(search && search.length > 0) {
        return search.substring(1)
            .split("&")
            .reduce((p, c) => {
            const kvp = c.split("=");
            return {...p, [kvp[0]]: kvp[1] }
        }, {});
    }
    return {};
}
const Frame = (props) => {
    const { 
        hostname,
        clientId,
        height,
        width 
    } = props;
    const srcUrl = `${hostname}/cltrate/widget/?clientId=${clientId}`;
    return (
        <iframe src={srcUrl} width={width} height={height} />
    )
}

const appStyles = {
    fontFamily: "Helvetica",
    fontWeight: "100",
    fontSize: "32px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    margin: "2rem auto"
}

const App = () => {
    const defaultParams = {
        hostname: "https://www.uship.com",
        clientId: "1",
        height: "800",
        width: "500"
    }
    const params = parseParams();
    const frameProps =  {...defaultParams, ...params };
    console.log(frameProps)
    return (
        <div style={appStyles}>
            <p>Partner Site</p>
            <Frame {...frameProps} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));