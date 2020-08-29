import { useState, useEffect, lazy } from 'react'

const usePrefetch = (module) => {
    const [component, setComponent] = useState(null)

    //* Lazy load the module
    useEffect(() => {
        module()
        const lazyComponent = lazy(module)
        setComponent(lazyComponent)
    }, [module])

    return component
}

export default usePrefetch

//* Example
const importModal = () => import('./Modal')

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const Modal = usePrefetch(importModal)

    return (
        <>
            <div>Some Contet</div>
            <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
            {isModalOpen && <Modal />}
        </>
    )
}
