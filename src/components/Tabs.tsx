import { useState } from "react";

interface TabsProps {
    tabsContent: JSX.Element[];
}

const Tabs: React.FC<TabsProps> = ({ tabsContent }) => {
    const [activeTab, setActiveTab] = useState(0);

    const tabTitles = ["Weaknesses", "More Information"];

    return (
        <div>
            <div className="border-b mt-5 mx-10 border-red-900">
                <ul className="-mb-px flex items-center gap-4 text-sm font-medium">
                    {tabTitles.map((title, index) => (
                        <li key={index}>
                            <a
                                onClick={() => setActiveTab(index)}
                                className={`inline-flex cursor-pointer items-center gap-2 px-1 py-3 ${activeTab === index
                                    ? "relative text-primary-700 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-primary-700 border-b border-b-red-500"
                                    : "text-gray-500"
                                    } hover:text-primary-700`}
                            >
                                {title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="py-3">
                {tabsContent.map((content, index) => (
                    <div
                        key={index}
                        className={`transition-opacity duration-600 ${activeTab === index ? "!block" : "hidden"
                            }`}
                    >
                        {content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tabs;
