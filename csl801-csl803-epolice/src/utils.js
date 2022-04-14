import { useState } from "react"

export const useInput = (init) => {
    const [state, setState] = useState(init);

    return {
        value: state,
        onChange: (e) => setState(e.target.value),
    };
}
