import "@material/web/button/filled-tonal-button.js";

function NavigationRail() {
  return (
    <nav>
      <md-filled-tonal-button
        style={{
          backgroundColor: "#6e5586", // Your purple color or M3 token
          borderRadius: "12px",
          padding: 10,
          width: 50,
          height: 50,
        }}
      >
        <span className="material-symbols-outlined">home</span>
      </md-filled-tonal-button>
    </nav>
  );
}
export default NavigationRail;
