import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Import the CSS file for styling
const App = () => {
    const [apps, setApps] = useState([]);

    useEffect(() => {
        // Fetch the list of applications from the server
        axios.get('http://localhost:3001/apps')
            .then(response => setApps(response.data))
            .catch(error => console.error('Error fetching applications:', error));
    }, []);

    const launchApplication = (application) => {
        // Open the application in a new tab
        window.open(application.path, '_blank');
    };

    return (
        <div className="app-container">
            <h1 id="heading">Launcher UI</h1>
            <div className="app-icons-container">
                {apps.map(app => (
                    <div className="icons" key={app.id} onClick={() => launchApplication(app)}>
                        <img src={app.icon} alt={app.name} />
                        <p>{app.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
