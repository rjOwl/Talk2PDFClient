import React from 'react';
import Upload from './Upload';
import Chat from './Chat';

function App() {
    return (
        <div className="App">
            <h1>Chatbot Application</h1>
            <Upload />
            <div className="chat-section">
                <Chat />
            </div>
        </div>
    );
}

export default App;