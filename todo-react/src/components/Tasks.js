import SingleTask from './SingleTask'

const Tasks = ({tasks, onDelete}) => {
    return (
        <div className='tasks'>
            {tasks.map(task => {
                return(
                    <SingleTask key={task.id} task={task} 
                    onDelete={onDelete}/>
                )
            })}
        </div>
    )
}

export default Tasks
