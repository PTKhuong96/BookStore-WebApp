import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="header">
                <Link to="/">Storefront Team</Link>
                <div className="header-right">
                    <Link to="/home">Home</Link>
                    <Link to="feedback">Feedback</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;