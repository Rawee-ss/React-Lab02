function App() {
  
    const st = {backgroundColor: "#23272F",color: "white", padding: "20px", fontFamily: "sans-serif"}
    return (
        <div style = {st}>
            <h1>Quick Start</h1>
            <h3>Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.</h3>
            <div style = {{border: "1px solid #343A46 " , backgroundColor: "#343A46" ,padding: "20px", borderRadius: "10px", fontFamily: "sans-serif" }}>
                <h3><strong>You will learn</strong></h3>
                <li style={{marginBottom:"9px"}}>How to create and nest components</li>
                <li style={{marginBottom:"9px"}}>How to add markup and styles</li>
                <li style={{marginBottom:"9px"}}>How to display data</li>
                <li style={{marginBottom:"9px"}}>How to render conditions and lists</li>
                <li style={{marginBottom:"9px"}}>How to respond to events and update the screen</li>
                <li style={{marginBottom:"9px"}}>How to share data between components</li>
            </div>
        </div>
    )
}






ReactDOM.createRoot(document.querySelector("#root")).render(<App />)