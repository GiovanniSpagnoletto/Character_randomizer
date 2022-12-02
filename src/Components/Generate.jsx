import "./components.css"

const Main = (props) => (
    <div className="main">
        <h1>Premi per generare un personaggio casuale</h1>
        <button className="main-button" onClick={(event) => props.go(event)}>Crea!</button>
    </div>
)
export default Main