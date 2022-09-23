import { PlusCircle } from 'phosphor-react'

import './styles.css'

interface Props {
    newTask: () => void;
}

export function CreateButton({ newTask }: Props) {
    return (
        <button className="createBtn" onClick={newTask}>
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