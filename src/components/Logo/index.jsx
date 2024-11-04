import './logo.css';

export default function Logo({ children }) {
    return (
        <div className="logo">
            <div>
                <div>Lavanderia</div> <span>Laundry</span>
            </div>
            { children }
        </div>
    );
}
