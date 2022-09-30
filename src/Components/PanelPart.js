import './PanelPart.css';


function PanelPart (props) {
    return(
        <div className='panel-part'>
            <h2>{props.title}</h2>
            <p>{props.value}</p>
        </div>
    )
}

export default PanelPart;