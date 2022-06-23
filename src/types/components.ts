type ToggleValue<T> = {
    name: string,
    type: T
}

type ToggleValuesType<T> = Array<ToggleValue<T>>

type CallbackChangeToggle<T> = (mode: any) => void;


export {
    ToggleValue,
    ToggleValuesType,
    CallbackChangeToggle,
}