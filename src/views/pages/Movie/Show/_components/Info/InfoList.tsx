import InfoItem from "./InfoItem";

function InfoList() {
    return (
        <div className=" bottom-0 left-0 right-0">
        <div className="grid grid-cols-5 gap-4">
            <InfoItem type="play" />
            <InfoItem title="Rating" value="PG" />
            <InfoItem title="Release" value="April 7, 2023" />
            <InfoItem title="Budget" value="$130M" />
            <InfoItem title="Length" value="126min" />
        </div>
        </div>
    )
}

export default InfoList;