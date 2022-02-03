import react from "react";
import Dropdown from "./Dropdown";

const ConverterMain = () => {
    return (
        <>
            <div className="left-side-section">
                <Dropdown />
            </div>
            <div className="right-side-section">
                <Dropdown data={"elephant"} />
            </div>
        </>
    );
};
export default ConverterMain;
