import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {ECommerce} from "./E-commerce.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ECommerce/>
    </StrictMode>,
)
