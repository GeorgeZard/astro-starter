import { useState } from 'react';

interface TestComponentProps {
  initialCount?: number;
  title?: string;
}

/**
 * A simple React component to verify the Astro-React integration is working.
 * This demonstrates state management and event handling in a React component.
 */
export default function TestComponent({ 
  initialCount = 0, 
  title = 'React Test Component' 
}: TestComponentProps) {
  const [count, setCount] = useState(initialCount);

  return (
    <div className="p-4 bg-blue-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="mb-2">
        This is a React component rendered in Astro using client-side hydration.
      </p>
      <div className="flex items-center gap-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          onClick={() => setCount(count + 1)}
        >
          Count: {count}
        </button>
        <button
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition-colors"
          onClick={() => setCount(initialCount)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}