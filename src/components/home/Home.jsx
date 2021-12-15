import { useNavigate } from "react-router-dom";
import './home.css';

export default function Home() {
    const navigate = useNavigate();
    const clickHandler = (path) => {
        navigate(path);
    }
    return (
        <div className="home-main">
            <div className="home-container">
                <p>Test1</p>
                <button className="home-button" onClick = { () => {clickHandler("test1/css1")} }>css1</button>
                <button className="home-button" onClick = { () => {clickHandler("test1/css2")} }>css2</button>
            </div>
            <div className="home-container">
                <p>Test2</p>
                <button className="home-button" onClick = { () => {clickHandler("test2/checkbox")} }>Checkboxes</button>
            </div>
            <div className="home-container">
                <p>Test3</p>
                <button className="home-button" onClick = { () => {clickHandler("test3/crud")} }>CRUD</button>
            </div>
        </div>
    )
}