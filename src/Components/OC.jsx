import "./components.css"

const OC = (props) => (
    <div className="main-oc">
        <button className="oc-button" onClick={(event) => props.go(event)}>Premi per generare un altro personaggio</button>
        <div className="main-container">
            <h2>Colore occhi: <u>{props.oc.occhi}</u></h2>
            <h2>Colore capelli: <u>{props.oc.capelli}</u></h2>
            <h2>Altezza: <u>{props.oc.altezza} cm</u></h2>
            <h2>Età: <u>{props.oc.eta} anni</u></h2>
            <h2>Taglio di capelli: <u>{props.oc.taglio}</u></h2>
            <h2>Lunghezza capelli: <u>{props.oc.lunghezza} cm</u></h2>
            <h2>Accessori: <u>{props.oc.accessori}</u></h2>
            <h2>Colore pelle: <u>{props.oc.pelle}</u></h2>
            <h2>Particolarità: <u>{props.oc.quirk}</u></h2>
            <h2>Personalità: <u>{props.oc.personalita}</u></h2>
            <h2>Sesso: <u>{props.oc.sesso}</u></h2>
            <h2>Stile: <u>{props.oc.stile}</u></h2>
            <h2>Tipo: <u>{props.oc.tipo}</u></h2>
        </div>
        <h1 className="footer">Ecco qui il tuo personaggio casuale!</h1>
    </div>
)
export default OC