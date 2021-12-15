import { useState, useEffect } from 'react';
import Logo from '../common/Logo';
import { CHECKBOX_OPTIONS } from './checkboxDate';
import './checkbox.css';

export default function Checkbox() {
    const [checkedShift, setCheckedShift] = useState({
        bigNum: null,
        smallNum: null
    });
    const checkHandle = (e) => {
        let clickShift = e.nativeEvent.shiftKey;
        let currentNum = Number(e.target.name.substr(9));
        if(clickShift) {
            setCheckedShift((state) => ({
                bigNum: currentNum >= state.bigNum || currentNum >= state.smallNum ?currentNum : state.bigNum,
                smallNum: state.smallNum ? currentNum >= state.smallNum  ? state.smallNum:currentNum : state.bigNum}
            ));
        }
    };
    const switchCheckbox = (bigNum, smallNum) => {
        for(let i = 1; i <= 10; i++) {
            let checkbox = document.querySelector(`input[name=checkbox-${i}]`);
            if(i> bigNum || i < smallNum) {
                if(checkbox) checkbox.checked = false;
            }else{
                if(checkbox) checkbox.checked = true;
            }
        }
    };
    // Shift checkbox
    useEffect(() => {
        if(checkedShift.smallNum){
            switchCheckbox(checkedShift.bigNum, checkedShift.smallNum, checkedShift.isbetween);
        }
    }, [checkedShift]);

    return (
    <div className="checkbox-main">
        <div className="checkbox-header">
            <Logo/>
        </div>
        <div className="checkbox-content">
            <div className="checkbox-content-title">
                <input className="content-input" type="checkbox" name="checkbox-0" onChange = {checkHandle} disabled="disabled"/>
                <p className="content-text">狀態</p>
            </div>
            {CHECKBOX_OPTIONS.map((item) => (
                <div className="checkbox-content-box" key={item.key}>
                    {item.visible && <input className="content-input" type="checkbox" name={item.name} onChange = {checkHandle}/>}
                <p className="content-text">{item.label}</p>
                </div>
            ))}
        </div>
    </div>
    )
}