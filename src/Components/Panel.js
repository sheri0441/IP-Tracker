import PanelPart from './PanelPart';

import './Panel.css';


function Panel (props) {
    return(
        <div className='panel'>
            <PanelPart title={'IP Address'} value={props.ip} />
            <PanelPart title={'Location'} value={props.location} />
            <PanelPart title={'Timezone'} value={`UTC ${props.time}`} />
            <PanelPart title={'ISP'} value={props.isp} />
        </div>
    )
}

export default Panel;