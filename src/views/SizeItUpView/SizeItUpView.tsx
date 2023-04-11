import React from 'react';
import './SizeItUpView.scss';
import {Settings} from "../../settings/Settings";

export const SizeItUpView: React.FC = () => {
    return(<div className="SizeItUpView">
        <p className="extraBold">糟糕... 这窗口对我来说太小了！</p>
        <img
            draggable={false}
            alt={"small_window"}
            src={"ico/small_window.png"}
        />
        <p className="extraBold">请... 至少调整到 {Settings.EDITOR_MIN_WIDTH} x {Settings.EDITOR_MIN_HEIGHT} 像素</p>
    </div>)
};