type ToggleValue<T> = {
    name: string,
    type: T
}

type ToggleValuesType = Array<ToggleValue>

type CallbackChangeToggle = (mode: ToggleValue) => void;

export {
    ToggleValue,
    ToggleValuesType,
    CallbackChangeToggle
}