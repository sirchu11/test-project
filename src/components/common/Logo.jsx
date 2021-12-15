import { useNavigate } from 'react-router-dom';
import './logo.css';

export default function Logo() {
    const navigate = useNavigate();
    const toHome = () => {
        navigate('/');
    }
    return (
    <>
        <p className="logo-text" onClick = {toHome}>Home</p>
    </>
    )
}