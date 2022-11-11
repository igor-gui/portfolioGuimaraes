import { useContext } from "react"


export default function ColorContextProvider({children}) {
     const ColorContext = useContext()
    
    const colors = {
        backGround: '#0E0E13',
        font: 'wheat',
        button: '#540C0C'
    }
    

    return (
        <ColorContext.Provider value={colors}>
            {children}
        </ColorContext.Provider>
    )
}
