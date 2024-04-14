"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = (0, react_1.useState)(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }
        catch (error) {
            console.log(error);
            return initialValue;
        }
    });
    const setValue = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
        catch (error) {
            console.log(error);
        }
    };
    return [storedValue, setValue];
};
const useDarkMode = () => {
    const [enabled, setEnabled] = useLocalStorage('dark-theme');
    const isEnabled = typeof enabledState === 'undefined' && enabled;
    (0, react_1.useEffect)(() => {
        const className = 'dark';
        const bodyClass = window.document.body.classList;
        isEnabled ? bodyClass.add(className) : bodyClass.remove(className);
    }, [enabled, isEnabled]);
    return [enabled, setEnabled];
};
exports.default = useDarkMode;
