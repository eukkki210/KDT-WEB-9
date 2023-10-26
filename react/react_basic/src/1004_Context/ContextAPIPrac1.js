import { useContext } from "react";
import UserSettingContext from "./store/user-setting-context";

export function ThemeSelector() {
    const value = useContext(UserSettingContext);

    return (
        <div>
            <h2>현재 선택된 테마: {value.theme}</h2>
            <select value={value.theme} onChange={e => value.setTheme(e.target.value)}>
                <option value={"light"}>라이트 모드</option>
                <option value={"dark"}>다크 모드</option>
            </select>
        </div>
    )
}

export function LanguageSelector() {
    const value = useContext(UserSettingContext);

    return (
        <div>
            <h2>현재 선택된 언어: {value.language}</h2>
            <select value={value.language} onChange={e => value.setLanguage(e.target.value)}>
                <option value={"Engish"}>영어</option>
                <option value={"Korean"}>한국어</option>
            </select>
        </div>
    )
}