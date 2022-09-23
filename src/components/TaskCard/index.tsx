import './styles.css'
import { Trash } from 'phosphor-react'

interface Props {
    task: string;
    deleteTask: (task: string) => void;
    changeTaskIsCompleted: (task: string) => void;
    isCompleted: boolean;
}

export function TaskCard(props: Props) {
    return (
        <div className='taskCard'>
            <div className='checkboxWrapper'>
                <input
                    type="checkbox"
                    id={props.task}
                    className='checkboxTask'
                    onClick={() => props.changeTaskIsCompleted(props.task)}
                />
                <label htmlFor={props.task} className='label'></label>
            </div>

            {
                props.isCompleted ?
                    <s className='textTask' >
                        {props.task}
                    </s> :
                    <p className='textTask' >
                        {props.task}
                    </p>
            }



            <Trash
                size={16}
                weight={'bold'}
                className='trashIcon'
                onClick={() => props.deleteTask(props.task)}
            />
        </div>
    )
}