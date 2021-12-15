import Logo from '../common/Logo';
import './crud.css';

export default function CRUD() {
    return (
    <div className="crud-main">
        <div className="crud-header">
            <Logo/>
        </div>
        <div className="crud-content">
            <div className="crud-content-container">
                <p>CRUD</p>
                <p>規格 (fetch 為例) </p>
            </div>
            <div className="crud-content-container">
                <p>Get (查詢) :</p>
                <p>
                    fetch(url, {`{method:'GET'}`})
                </p>
            </div>
            <div className="crud-content-container">
                <p>Post (新增) :</p>
                <p>
                    fetch(url, {`{method:'POST', body: {依照需求填入參數}}`})
                </p>
            </div>
            <div className="crud-content-container">
                <p>Push (修改) :</p>
                <p>
                    fetch(url, {`{method:'PUT', body: {依照需求填入參數}}`})
                </p>
            </div>
            <div className="crud-content-container">
                <p>Delete (刪除) :</p>
                <p>
                    fetch(url, {`{method:'DELETE', body: {依照需求填入參數}}`})
                </p>
            </div>
        </div>
    </div>
    )
}