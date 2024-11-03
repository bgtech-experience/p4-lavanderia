import './logo.css';

export default function Logo({ children }) {
    return (
        <div className="logo">
            <div>
                <div>BGTech</div> <span>Experience</span>
            </div>
            { children }
        </div>
    );
}
