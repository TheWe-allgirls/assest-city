import React, { useState, useEffect } from 'react';
import './QueryBoard.css';

const QueryBoard = () => {
    const [issuesData, setIssuesData] = useState([]);
    const [filteredIssues, setFilteredIssues] = useState([]);

    useEffect(() => {
        // Mock fetch for demonstration
        // Replace this with actual fetch call if needed
        const fetchIssues = async () => {
            const data = [
                { id: 1, name: 'Street Light Not Working', upvotes: 10, genuine_count: 2 },
                { id: 2, name: 'Pothole on Main Street', upvotes: 5, genuine_count: 1 },
                { id: 3, name: 'Garbage Collection Delay', upvotes: 7, genuine_count: 3 },
                { id: 4, name: 'Broken Sidewalk', upvotes: 8, genuine_count: 0 },
                { id: 5, name: 'Water Supply Issue', upvotes: 3, genuine_count: 4 },
                { id: 6, name: 'Street dogs', upvotes: 10, genuine_count: 2 },
                { id: 7, name: 'Pothole on bridges', upvotes: 5, genuine_count: 1 },
            ];
            setIssuesData(data);
            setFilteredIssues(data);
        };

        fetchIssues();
    }, []);

    const handleUpvote = (issueId) => {
        setIssuesData((prevIssues) => {
            const updatedIssues = prevIssues.map(issue =>
                issue.id === issueId ? { ...issue, upvotes: issue.upvotes + 1 } : issue
            );
            return updatedIssues;
        });
    };

    const handleMarkGenuine = (issueId) => {
        setIssuesData((prevIssues) => {
            const updatedIssues = prevIssues.map(issue =>
                issue.id === issueId ? { ...issue, genuine_count: issue.genuine_count + 1 } : issue
            );
            return updatedIssues;
        });
    };

    const handleSearch = (event) => {
        const searchValue = event.target.value.toLowerCase();
        const filtered = issuesData.filter(issue =>
            issue.name.toLowerCase().includes(searchValue)
        );
        setFilteredIssues(filtered);
    };

    return (
        <>
            
            <main>
                <section className="issue-list">
                    <h2>Citizen Issues</h2>
                    <input
                        type="text"
                        id="search"
                        placeholder="Search issues..."
                        onChange={handleSearch}
                    />
                    <ul id="issues">
                        {filteredIssues.map(issue => (
                            <li key={issue.id}>
                                {issue.name} - <strong>{issue.upvotes}</strong> Upvotes | <strong>{issue.genuine_count}</strong> Genuine Count
                                <button onClick={() => handleUpvote(issue.id)}>Upvote</button>
                                <button className="genuine-button" onClick={() => handleMarkGenuine(issue.id)}>Mark as Genuine</button>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>

        </>
    );
};

export default QueryBoard;
