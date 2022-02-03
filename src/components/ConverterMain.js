import "../styles/ConverterMain.scss";
import Dropdown from "./Dropdown";

const ConverterMain = () => {
    const dropdownLabels = [
        { id: 0, label: "Elephant" },
        { id: 1, label: "Mouse" },
    ];
    return (
        <>
            <div className="left-side-section">
                <Dropdown data={dropdownLabels} title={"Select an item"} />
            </div>
            <div className="right-side-section">
                <Dropdown data={dropdownLabels} title={"Select an item"} />
            </div>
        </>
    );
};
export default ConverterMain;
