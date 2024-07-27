import React, { useEffect } from 'react';
import './Rewards.css';

const Rewards = () => {
    useEffect(() => {
        // Add logic to fetch and display reward data dynamically if needed
        console.log('Rewards page loaded');
    }, []);

    return (
        <>
            <header>
                <img src="/images/logo.png" alt="AssetHub Logo" className="logo" />
                <nav>
                    <ul>
                        <li><a href="/dashboard">Dashboard</a></li>
                        <li><a href="/issues">Issues</a></li>
                        <li><a href="/assets">Assets</a></li>
                        <li><a href="/rewards">Rewards</a></li>
                        <li><a href="/news">News</a></li>
                        <li><a href="/schemes">Schemes</a></li>
                        <li><a href="/profile">Profile</a></li>
                    </ul>
                </nav>
            </header>

            <aside>
                <ul>
                    <li><a href="/report">Report Issue</a></li>
                    <li><a href="/tracking">Status Tracking</a></li>
                    <li><a href="/feedback">Feedback</a></li>
                </ul>
            </aside>

            <main>
                <section id="rewards">
                    <h1>Rewards</h1>
                    <div className="rewards-section">
                        <h2>For Citizens</h2>
                        <div className="rewards-citizens">
                            <div className="reward">
                                <h3>Top Reporter</h3>
                                <p>Recognizes the citizen who reported the most issues this month.</p>
                            </div>
                            <div className="reward">
                                <h3>Community Helper</h3>
                                <p>Awarded to citizens who have contributed to resolving issues.</p>
                            </div>
                            <div className="reward">
                                <h3>Green Champion</h3>
                                <p>Given to citizens promoting sustainability and eco-friendly practices.</p>
                            </div>
                        </div>

                        <h2>For Municipal Staff</h2>
                        <div className="rewards-staff">
                            <div className="reward">
                                <h3>Employee of the Month</h3>
                                <p>Recognizes the staff member with outstanding performance.</p>
                            </div>
                            <div className="reward">
                                <h3>Innovation Award</h3>
                                <p>Awarded to staff members who introduce innovative solutions.</p>
                            </div>
                            <div className="reward">
                                <h3>Team Player</h3>
                                <p>Given to staff members who exhibit excellent teamwork.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <p>&copy; 2024 AssetHub. All rights reserved.</p>
            </footer>
        </>
    );
};

export default Rewards;
