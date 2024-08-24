import React, { useState } from "react";

interface CollapsibleSectionProps {
    title: string;
    children: React.ReactNode;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-2">
            <button
                className="text-lg font-bold w-64 mt-5"
                onClick={() => setIsOpen(!isOpen)}
            >
                {title} {isOpen ? "▲" : "▼"}
            </button>
            {isOpen && <div className="ml-4 mt-2">{children}</div>}
        </div>
    );
};

export default CollapsibleSection;
