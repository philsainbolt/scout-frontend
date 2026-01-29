function MainContainer() {
  return (
      <div className="main-container">
        <div className="hero-search">

          <div className="what-group">
            <h2>What</h2>

              <div className="boxes">
              <input placeholder="Keywords"></input>
              <input placeholder="Classification"></input>
              </div>
              
            </div>

          <div className="where-group">
            <h2>Where</h2>
              <div className="boxes">
                <input placeholder="Enter the city or region"></input> 
              <button className="search-btn">Scout</button>
              </div>
                
          </div>

          </div>
      </div>
  );
}

export default MainContainer;
