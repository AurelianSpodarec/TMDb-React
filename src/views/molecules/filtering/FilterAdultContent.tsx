import { useState } from "react";

function FilterAdultContent() {
    const [adultContent, setAdultContent] = useState(false);

    const handleCheckboxChange = (event:any) => {
        alert("Ha! You nasty, I'm not gonna let you do that here - this is a family friendly site!")
    };

    return (
        <div className="text-white">
        <label>
            <input
                type="checkbox"
                checked={adultContent}
                onChange={handleCheckboxChange}
            />
            Porn
        </label>
        </div>
    );
}

export default FilterAdultContent;