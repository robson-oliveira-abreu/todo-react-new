import { PlusCircle } from 'phosphor-react'

import './styles.css'

export function CreateButton() {
    return (
        <button className="createBtn">
            <p className='text'>
                Criar
            </p>

            <PlusCircle
                size={16}
                weight={'bold'}
            />
        </button>
    )
}