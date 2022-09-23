import './styles.css'
import { Trash } from 'phosphor-react'

interface Props {
    id: string;
}

export function TaskCard(props: Props ) {
    return (
        <div className='taskCard'>
            <div className='checkboxWrapper'>
                <input
                    type="checkbox"
                    name=""
                    id={props.id}
                    className='checkboxTask'
                />
                <label htmlFor={props.id} className='label'></label>
            </div>

            <p className='textTask'>
                Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer
            
            </p>

            <Trash
                size={16}
                weight={'bold'}
                className='trashIcon'
            />
        </div>
    )
}