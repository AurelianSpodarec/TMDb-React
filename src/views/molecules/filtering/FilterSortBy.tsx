import { optionSortBy } from "@/config/filters/sortBy";

function FilterSortBy({ value, onChange }:any) {

    function renderSelect() {
        return (
            <select id="sort_by_select" value={value} onChange={onChange}>
            {optionSortBy && optionSortBy.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
            </select>
        )
    }

    return (
        <div>
            <label className="text-white" htmlFor="sort_by_select">Sort by:</label>
           {renderSelect()}
        </div>
    );
}

export default FilterSortBy;