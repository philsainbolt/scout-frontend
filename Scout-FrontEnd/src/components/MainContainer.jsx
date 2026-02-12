import { useState, useEffect, useRef } from "react";

const classifications = [
  { name: "Accounting" },
  { name: "Administration & Office Support" },
  { name: "Advertising, Art & Media" },
  { name: "Banking & Financial Services" },
  { name: "Call Centre & Customer Service" },
  { name: "Engineering" },
  { name: "Healthcare & Medical" },
];

function ClassificationDropdown({ selected, setSelected }) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
    <div className="classification-wrapper" ref={wrapperRef}>
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

function MainContainer({ onSearch }) {
  const [keyword, setKeyword] = useState("");
  const [selectedClassifications, setSelectedClassifications] = useState([]);
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    onSearch({
      jobTitle: keyword,
      classification: selectedClassifications.join(","),
      location: location,
    });
  };

  return (
      <div className="main-container">
        {/* <div className="hero-search"> */}

          <div className="what-group">
            <h2>What</h2>

              <div className="boxes">
              <input placeholder="Keywords" value={keyword} onChange={(e) => setKeyword(e.target.value)}></input>
              <ClassificationDropdown selected={selectedClassifications} setSelected={setSelectedClassifications} />
              </div>
              
            </div>

          <div className="where-group">
            <h2>Where</h2>
              <div className="boxes">
                <input placeholder="Enter the city or region" value={location} onChange={(e) => setLocation(e.target.value)}></input>
              <button className="search-btn" onClick={handleSearch}>Scout  🔍 </button>
              </div>
                
          </div>

          {/* </div> */}
      </div>
  );
}

export default MainContainer;