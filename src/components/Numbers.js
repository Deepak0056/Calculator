import React, { useState } from 'react';

const Numbers = () => {
    const [values, setValues] = useState(""); // State to store the current input value
    
    // Arrays to store different types of buttons
    const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3];
    const operations = ["*", "-", "+"];
    const items = ["1/2", "0", ".", "="];
    const topitems = ["%", "/", "C", "❌"];
    
   const calculateExpression = (expression) => {
        try {
            // Handle percentage calculation separately
            if (expression.includes("%")) {
                const parts = expression.split("%");
                const percentage = parseFloat(parts[0]);
                const value = parseFloat(parts[1]);
                const result = (percentage / 100) * value;
                return result.toString();
            } else {
                return eval(expression).toString();
            }
        } catch (error) {
            return 'Error';
        }
    };

    const updateValue = (newValue) => {
        if (newValue === "=") {
            const result = calculateExpression(values);
            setValues(result);
        } else if (newValue === "C") {
            setValues("");
        } else if (newValue === "❌") {
            setValues(values.slice(0, -1));
        } else {
            setValues(values + newValue);
        }
    };
    
    return (
        <div className="flex flex-col gap-4">
            <div>
                <input
                    className="outline-none h-[60px] p-2 px-6 rounded-lg w-[350px] text-2xl shadow-xl overflow-scroll"
                    type="text"
                    name=""
                    id=""
                    value={values}
                />
            </div>
            <div className="flex flex-col gap-4 p-8 bg-gray-50 rounded-xl shadow-xl">
                {/* Display top row buttons */}
                <div className="grid grid-flow-col grid-row-1 gap-4">
                    {topitems.map((item) => (
                        <div
                            className={`w-[60px] h-[50px] bg-gray-300 flex items-center justify-center font-semibold text-xl cursor-pointer `}
                            onClick={() => updateValue(item)}
                            style={item === "C" ? { fontSize: '1.8rem' } : null}
                            key={item}
                        >
                            {item}
                        </div>
                    ))}
                </div>
                <div className="flex gap-4">
                    {/* Display number buttons */}
                    <div className="grid grid-flow-row grid-cols-3 gap-4">
                        {numbers.map((number) => (
                            <div
                                className="w-[60px] h-[50px] bg-gray-300 flex items-center justify-center font-semibold text-xl cursor-pointer"
                                onClick={() => updateValue(number.toString())}
                                key={number}
                            >
                                {number}
                            </div>
                        ))}
                    </div>
                    
                    {/* Display operation buttons */}
                    <div className="grid grid-flow-row grid-cols-1 gap-4">
                        {operations.map((operation) => (
                            <div
                                className="w-[60px] h-[50px] bg-gray-300 flex items-center justify-center font-semibold text-3xl cursor-pointer"
                                onClick={() => updateValue(operation)}
                                key={operation}
                            >
                                {operation}
                            </div>
                        ))}
                    </div>
                </div>
                {/* Display bottom row buttons */}
                <div className="grid grid-flow-col grid-row-1 gap-4">
                    {items.map((item) => (
                        <div
                            className="w-[60px] h-[50px] bg-gray-300 flex items-center justify-center font-semibold text-xl cursor-pointer"
                            onClick={() => updateValue(item)}
                            key={item}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Numbers;
