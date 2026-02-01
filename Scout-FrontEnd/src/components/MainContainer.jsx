import { useState } from "react";

const classifications = [
  { name: "Accounting" },
  { name: "Administration & Office Support" },
  { name: "Advertising, Art & Media" },
  { name: "Banking & Financial Services" },
  { name: "Call Centre & Customer Service" },
  { name: "Engineering" },
  { name: "Healthcare & Medical" },
];

function ClassificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  const toggleItem = (name) => {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((i) => i !== name) : [...prev, name]
    );
  };

  const label =
    selected.length === 0
      ? "Any classification"
      : selected.length === 1
      ? selected[0]
      : `${selected.length} classifications`;

  return (
    <div className="classification-wrapper">
      <div className="classification-btn" onClick={() => setIsOpen(!isOpen)}>
        <span>{label}</span>
        <span className={`arrow ${isOpen ? "open" : ""}`}>&#8593;</span>
      </div>

      {isOpen && (
        <div className="classification-dropdown">
          {classifications.map((item) => (
            <label key={item.name} className="dropdown-item">
              <input
                type="checkbox"
                checked={selected.includes(item.name)}
                onChange={() => toggleItem(item.name)}
              />
              <span className="item-name">{item.name}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

function MainContainer() {
  return (
      <div className="main-container">
        <div className="hero-search">

          <div className="what-group">
            <h2>What</h2>

              <div className="boxes">
              <input placeholder="Keywords"></input>
              <ClassificationDropdown />
              </div>
              
            </div>

          <div className="where-group">
            <h2>Where</h2>
              <div className="boxes">
                <input placeholder="Enter the city or region"></input> 
              <button className="search-btn">Scout  🔍 </button>
              </div>
                
          </div>

          </div>
      </div>
  );
}

export default MainContainer;