// Hook
// Let initially the toggle be in false state 
const useToggle = (initialState = false) => {
    // Initialize the state
    const [state, setState] = useState(initialState);
    
    // memorize toggler function - needed when we pass down the comopnent,
    const toggle = useCallback(() => setState(state => !state), []);
    
    // state - state of toggle, toggle - handler function fired onToggle event
    return [state, toggle]
}
