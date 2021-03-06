import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Dropdown.scss";

const Dropdown = ({ data, title }) => {
    const [isOpen, setOpen] = useState(false);
    const [items, setItem] = useState(data);
    const [selectedItem, setSelectedItem] = useState(null);

    const toggleDropdown = () => setOpen(!isOpen);

    function handleItemClick(id) {
        setSelectedItem(id);
    }

    return (
        <div className="dropdown">
            <div className="dropdown-header" onClick={toggleDropdown}>
                {selectedItem
                    ? items.find((item) => item.id == selectedItem).label
                    : title}
                <FontAwesomeIcon
                    className={`fa fa-chevron-right icon ${isOpen && "open"}`}
                    icon="fas-chevron-right"
                />
            </div>
            <div className={`dropdown-body ${isOpen && "open"}`}>
                {items.map((item, index) => (
                    <div
                        className="dropdown-item"
                        onClick={(e) => handleItemClick(e.target.id)}
                        id={item.id}
                        key={index}
                    >
                        <span
                            className={`dropdown-item-dot ${
                                item.id == selectedItem && "selected"
                            }`}
                        >
                            •{" "}
                        </span>
                        {item.label}
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Dropdown;
