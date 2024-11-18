import React, { useState } from 'react';
import axios from 'axios';

function Upload() {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false); // State to track loading status

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('file', file);

        setLoading(true); // Set loading to true when upload starts

        try {
            const response = await axios.post('http://localhost:5000/upload', formData);
            alert(response.data.message || response.data.error);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false); // Set loading to false when upload completes
        }
    };

    return (
        <div className="upload-section">
            <h2>Upload PDF Document</h2>
            <input type="file" accept=".pdf" onChange={handleFileChange} />
            <button onClick={handleUpload} disabled={loading}>Upload</button>
            {loading && <p>Loading...</p>} {/* Show loading message */}
            {loading && <div className="spinner"></div>} {/* Show loading spinner */}
        </div>
    );
}

export default Upload;