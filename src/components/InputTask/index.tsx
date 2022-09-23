import './styles.css'

interface Props {
    newTaskText: (text: string) => void;
    textTaskInput: string;
}

export function InputTask({ newTaskText, textTaskInput }: Props) {
    return (
        <input
            className='textInput'
            type="text"
            placeholder='Adicione uma nova tarefa'
            onChange={(e) => newTaskText(e.target.value)}
            value={textTaskInput}
        />
    )
}