import PanelPart from './PanelPart';
import './Panel.css';


function Panel ({address}) {
    return(
        <div className='panel'>
            <PanelPart title={'IP Address'} value={address.ip} />
            <PanelPart title={'Location'} value={`${address.location.region},
            ${address.location.city}`} />
            <PanelPart title={'Timezone'} value={`UTC ${address.location.timezone}`} />
            <PanelPart title={'ISP'} value={address.isp} />
        </div>
    )
}

export default Panel;