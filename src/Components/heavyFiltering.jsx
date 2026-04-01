import { useState, useMemo } from 'react';


const MOCK_ITEMS = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  severity: i % 3 === 0 ? 'High' : i % 3 === 1 ? 'Medium' : 'Low',
  label: `System Log #${i + 1}`
}));

const HeavyFiltering = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const filteredItems = useMemo(() => {
    console.log("Filtering 1,000 items..."); 
    return MOCK_ITEMS.filter(item => 
      item.label.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const themeStyles = {
    backgroundColor: darkMode ? '#1a1a1a' : '#ffffff',
    color: darkMode ? '#ffffff' : '#000000',
    padding: '20px',
    minHeight: '100vh'
  };

  return (
    <div style={themeStyles}>
      <h1>Performance Lab</h1>
      
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Dark Mode: {darkMode ? 'ON' : 'OFF'}
      </button>

      <div style={{ marginTop: '20px' }}>
        <input
          type="text"
          placeholder="Search items..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ padding: '8px', width: '300px' }}
        />
      </div>

      <p>Showing {filteredItems.length} items</p>
      
      <div style={{ maxHeight: '300px', overflowY: 'auto', border: '1px solid #ccc' }}>
        {filteredItems.map(item => (
          <div key={item.id} style={{ padding: '5px', borderBottom: '1px solid #444' }}>
            <strong>{item.severity}</strong>: {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceDemo;