const element = (
  // Write your code here.
  <div className="bg-container">
    <h1 className="heading">Congratulations</h1>
    <div className="profile-card">
      <img
        className="card-image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        alt="profile-photo"
      />
      <div className="profile-text">
        <h1 className="profile-name">Kiran V</h1>
        <p className="profile-para">
          Vishnu Institute of computer education and Technology, Bimavaram
        </p>
      </div>
      <img
        className="card-image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        alt="smartwatch-photo"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
