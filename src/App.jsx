import { QRCodeSVG } from "qrcode.react";

import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <p>Scan my QR code </p>
          <QRCodeSVG
            value="https://aleeyudev-portfolio.netlify.app/"
            size={300}
            level="Q"
          />
        </header>
      </div>
    </>
  );
}

export default App;
