import './Preloader.css';
import * as ReactDOM from 'react-dom';

function Preloader (props) {
    return(

        ReactDOM.createPortal(
            <div className={`preloader ${props.loadState}`}>
    </div>,document.getElementById('upper-layer'))
        )
}

export default Preloader;
