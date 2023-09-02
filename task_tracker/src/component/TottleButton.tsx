import React from "react";

type ToggleButtonProps = {
    isOn: boolean;
    onClick: () => void
};

const ToggleButton: React.FC<ToggleButtonProps> = ({ isOn, onClick }) => {
    return (
        <button
            className={`relative w-8 h-4 rounded-full ${isOn ? "bg-purple-500" : "bg-[#E5E7EB]"
                } transition-transform`}
            onClick={onClick}
        >
            <span
                className={`absolute left-0 top-0.5 w-3 h-3 rounded-full ${isOn ? "bg-white" : "bg-white"
                    } transition-transform ${isOn ? "transform translate-x-4" : "transform translate-x-1"
                    }`}
            />
        </button>
    );
};

export default ToggleButton;