import React, { useState } from 'react';
import './TrackReport.css';  // Assuming you have styles in this file

function TrackReport() {
    const [reportId, setReportId] = useState('');
    const [statusResult, setStatusResult] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(`/track_status/${reportId}`)
            .then(response => response.json())
            .then(data => {
                setStatusResult(`Status: ${data.status}`);
            })
            .catch(error => {
                console.error('Error:', error);
                setStatusResult('Error retrieving status.');
            });
    };

    return (
        <div>

            <div className="container">
                <h2>Track Your Issue</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="reportId">Report ID:</label>
                    <input 
                        type="text" 
                        id="reportId" 
                        name="reportId" 
                        value={reportId}
                        onChange={(e) => setReportId(e.target.value)}
                        required 
                    />

                    <button type="submit">Check Status</button>
                </form>

                <div id="statusResult">
                    {statusResult}
                </div>
            </div>

        </div>
    );
}

export default TrackReport;
