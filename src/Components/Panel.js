import PanelPart from "./PanelPart";
import "./Panel.css";

function Panel({ address }) {
  return (
    <div className="panel">
      <PanelPart title={"IP Address"} value={address?.ip} />
      <PanelPart
        title={"Location"}
        value={`${address?.region_name},
            ${address.city}`}
      />
      <PanelPart title={"Timezone"} value={`UTC ${address?.timezones?.[0]}`} />
      <PanelPart title={"ISP"} value={address?.connection?.isp} />
    </div>
  );
}

export default Panel;
