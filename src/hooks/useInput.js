import { useState } from "react";

export function useInput(initialVal, validateFn) {
    const [value, setValue] = useState(initialVal)
    const [isEdited, setIsEdited] = useState(false)

    const isValidVal = validateFn(value)

    function onChangeInput(event) {
        setValue(event.target.value)
    }

    function onBlur() {
        setIsEdited(true)
    }

    return {
        value,
        onChangeInput,
        onBlur,
        hasError: isEdited && !isValidVal
    }
}
