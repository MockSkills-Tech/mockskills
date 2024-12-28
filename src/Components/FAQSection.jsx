import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What services does MockSkills offer?",
            answer:
                "MockSkills provides services like web development, mobile app development, and UI/UX design with a focus on quality.",
        },
        {
            question: "How does MockSkills ensure high-quality freelancers?",
            answer:
                "MockSkills uses a rigorous vetting process, performance reviews, and feedback loops to ensure only top-tier freelancers.",
        },
        {
            question: "Will freelancers be committed to my NDA?",
            answer:
                "Yes, all freelancers on MockSkills are required to sign and adhere to NDAs before starting any project.",
        },
        {
            question: "Who owns the project work delivered by freelancers?",
            answer:
                "Ownership of all project deliverables is transferred to the client once the work is completed and payments are cleared.",
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="max-w-[80%] mx-auto p-10 sm:p-14 rounded-3xl shadow">
            {/* Header */}
            <h1 className="text-3xl lg:text-4xl font-extrabold text-center mb-14 leading-tight">
                <span style={{ color: '#FF6347' }} className="inline-block mr-2">Frequently</span>
                <span style={{ color: '#4682B4' }} className="inline-block mr-2">Asked</span>
                <span style={{ color: '#32CD32' }} className="inline-block">Questions</span>
            </h1>

            {/* FAQ List */}
            <div className="space-y-10">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`border border-gray-200 rounded-xl p-6 bg-white shadow-lg transition-transform duration-300 ${activeIndex === index ? "scale-105" : "scale-100"
                            }`}
                        role="region"
                        aria-labelledby={`faq-${index}`}
                        aria-expanded={activeIndex === index ? "true" : "false"}
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="flex justify-between items-center w-full text-left"
                            aria-controls={`answer-${index}`}
                            id={`faq-${index}`}
                            aria-expanded={activeIndex === index ? "true" : "false"}
                        >
                            {/* Question */}
                            <h2 className="text-sm md:text-md sm:text-lg  lg:text-xl font-bold text-gray-700">
                                {faq.question}
                            </h2>

                            {/* Plus/Minus Icon */}
                            <span className="text-xl text-blue-500">
                                {activeIndex === index ? <FaMinus /> : <FaPlus />}
                            </span>
                        </button>

                        {/* Answer */}
                        {activeIndex === index && (
                            <div
                                id={`answer-${index}`}
                                className="mt-4 text-sm lg:text-base text-gray-600 transition-opacity duration-500 ease-in-out leading-relaxed"
                                role="region"
                                aria-live="polite"
                            >
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;