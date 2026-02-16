import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex items-center gap-4">
            <button
                className="btn"
                onClick={() => setCount(count + 1)}
            >
                Click me
            </button>
            <span className="text-lg">Count: {count}</span>
        </div>
    );
}
