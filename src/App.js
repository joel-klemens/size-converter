import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./styles/App.scss";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-Title">How big is stuff?</h1>
            </header>
            <div className="main-section">
                <div className="left-side-section">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Dropdown Button
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                                Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Something else
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="right-side-section"></div>
            </div>
        </div>
    );
}

export default App;
