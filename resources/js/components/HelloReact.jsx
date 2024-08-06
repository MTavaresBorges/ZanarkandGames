import react from 'react';
import reactDom from 'react-dom/client';

export default function HelloReact() {
    return (
        <div>
            <h1>Hello React</h1>
        </div>
    );
}

const container = document.getElementById('hello-react');
const root = reactDom.createRoot(container);
root.render(<HelloReact />);