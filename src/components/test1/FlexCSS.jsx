import Logo from '../common/Logo';
import './flexcss.css';

export default function FlexCSS() {
    return (
    <div className="flex-main">
        <div className="flex-header">
            <Logo/>
        </div>
        <div className="flex-container">
            <div className="flex-sidebar"></div>
            <div className="flex-content">
                <div className="flex-content-box"></div>
            </div>
        </div>
        <div className="flex-footer"></div>
    </div>
    )
}