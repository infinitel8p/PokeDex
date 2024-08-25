import React, { useState } from "react";

interface CollapsibleSectionProps {
    title: string;
    children: React.ReactNode;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="">
            <button
                className="text-lg font-bold mt-4 w-56 border-1 rounded-lg py-2 px-4 bg-[#0f0f0f98] hover:ring-1 hover:ring-red-500"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="flex justify-between">{title} <span>{isOpen ? "▲" : "▼"}</span></p>
            </button>
            {isOpen && <div className="">{children}</div>}
        </div>
    );
};

export default CollapsibleSection;
