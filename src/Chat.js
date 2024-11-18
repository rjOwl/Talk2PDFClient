import React, { useState } from 'react';
import axios from 'axios';

function Chat() {
    const [question, setQuestion] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const handleAsk = async () => {
        try {
            const response = await axios.post('http://localhost:5000/ask', { question });
            setChatHistory([...chatHistory, { user: question, bot: response.data.response }]);
            setQuestion('');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="chat-section">
            <h2>Chat with the Bot</h2>
            <div id="chatWindow" style={{ height: '200px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
                {chatHistory.map((chat, index) => (
                    <div key={index}>
                        <div>User: {chat.user}</div>
                        <div>Bot: {chat.bot}</div>
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask a question..."
            />
            <button onClick={handleAsk}>Ask</button>
        </div>
    );
}

export default Chat;