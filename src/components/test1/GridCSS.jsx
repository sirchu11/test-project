import Logo from '../common/Logo';
import './gridcss.css';

export default function GridCSS() {
    return (
    <div className="grid-main">
        <div className="grid-header">
            <Logo/>
        </div>
        <div className="grid-sidebar"></div>
        <div className="grid-content">
            <div className="grid-content-box"></div>
        </div>
        <div className="grid-footer"></div>
    </div>
    )
}