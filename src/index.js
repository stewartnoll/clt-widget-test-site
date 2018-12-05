import React from 'react';
import ReactDOM from 'react-dom';

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
    const params = new URL(document.location).searchParams;
    const hostname = params.has("hostname") ? params.get("hostname") : "https://www.uship.com";
    const clientId = params.has("clientId") ? params.get("clientId") : "1";
    const height = params.has("height") ? params.get("height") : "800";
    const width = params.has("width") ? params.get("width") : "500";
    console.log(hostname, clientId, width, height)
    return (
        <div style={appStyles}>
            <p>Partner Site</p>
            <Frame 
                hostname={hostname} 
                clientId={clientId} 
                height={height} 
                width={width}
            />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));