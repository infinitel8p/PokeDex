import React, { useState, useRef, useEffect } from "react";

interface AccordionSectionProps {
    title: string;
    isOpen: boolean;
    onToggle: () => void;
    children: React.ReactNode;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({ title, isOpen, onToggle, children }) => {
    const [height, setHeight] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            setHeight(contentRef.current?.scrollHeight || 0);
        } else {
            setHeight(0);
        }
    }, [isOpen]);

    return (
        <div className="overflow-hidden border-b border-[#0a0a0a98]">
            <button
                className="text-lg font-bold w-full text-left py-2 transition-all duration-300"
                onClick={onToggle}
            >
                <div className="flex justify-between items-center">
                    <span>{title}</span>
                    <span
                        className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                            }`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
                    </span>
                </div>
            </button>
            <div
                ref={contentRef}
                style={{ height: `${height}px` }}
                className="transition-all duration-300 ease-in-out"
            >
                <div className="p-1">{children}</div>
            </div>
        </div>
    );
};

const Accordion: React.FC<{ sections: { title: string, content: React.ReactNode }[] }> = ({ sections }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-[calc(100%-5rem)] mx-auto">
            {sections.map((section, index) => (
                <AccordionSection
                    key={index}
                    title={section.title}
                    isOpen={openIndex === index}
                    onToggle={() => handleToggle(index)}
                >
                    {section.content}
                </AccordionSection>
            ))}
        </div>
    );
};

export default Accordion;
