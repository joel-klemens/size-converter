import React, { useState } from "react";
import ConverterMain from "./components/ConverterMain";
import "./styles/App.scss";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-Title">How big is stuff?</h1>
            </header>
            <div className="main-section">
                <ConverterMain />
            </div>
        </div>
    );
}

export default App;
