import React, { useState } from 'react';
import './DeleteEmail.css'; // Import CSS file for styling

function DeleteEmail() {
    // Define your list of options
    const options = [
        "Option 1",
        "Option 2",
        "Option 3",
        // Add more options as needed
    ];

    // State for search query and filtered options
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredOptions, setFilteredOptions] = useState(options);

    // Handler for search input change
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);
        // Filter options based on search query
        const filtered = options.filter(option =>
            option.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredOptions(filtered.slice(0, 10)); // Limit options to 10
    };

    // Handler for option click
    const handleOptionClick = (option: string) => {
        setTimeout(() => {
            const confirmDelete = window.confirm(`Really delete "${option}"?`);
            if (confirmDelete) {
                // Delete logic here
                console.log(`"${option}" deleted.`);
            } else {
                console.log(`"${option}" not deleted.`);
            }
        }, 5000);
    };

    return (
        <div className="delete-email-container">
            <h1>Delete emails</h1>
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
            />
            <div className="options-container">
                <ul className="options-list">
                    {filteredOptions.map((option, index) => (
                        <li key={index} onClick={() => handleOptionClick(option)}>{option}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default DeleteEmail;
