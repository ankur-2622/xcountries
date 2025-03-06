import React, { useState, useEffect } from 'react';
import "./country.css"

function Xcountries() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://xcountries-backend.azurewebsites.net/all') 
            .then(response => response.json()) 
            .then(data => setCountries(data)) 
            .catch(error => console.error('Error fetching data:', error)); 
    }, []);

    return (
        <div className="country">
            {countries.map(country => (
                <div key={country.name} className="country-card">
                    <img src={country.flag} alt={country.name} width="100" />
                    <h2>{country.name}</h2>
                </div>
            ))}
        </div>
    );
}

export default Xcountries;
