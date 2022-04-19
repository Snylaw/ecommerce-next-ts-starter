import { FC, ReactNode } from 'react'
import s from './Button.module.css'

interface Props {
    children: ReactNode | ReactNode[]
}

const Button: FC<Props> = ({children}) => {

    return (
        <button type='button' className={s.root}>
            {children}
        </button>
    )
}

export default Button