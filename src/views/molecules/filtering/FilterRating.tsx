import { ratingOptions } from "@/config/filters/ratingOptions";

function FilterRating({value, onChange}:any) {

    function renderDropdown() {
        return (
            <select id="rating-dropdown" value={value} onChange={onChange}>
            {ratingOptions && ratingOptions.map((rating:any) => (
                <option key={rating} value={rating}>{rating}</option>
            ))}
        </select>
        )
    }

    return (
        <div>
            <label className="text-white" htmlFor="rating-dropdown">Select rating:</label>
            {renderDropdown()}
        </div>
    );
}

export default FilterRating;