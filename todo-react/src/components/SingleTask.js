import { FaTimes} from 'react-icons/fa'

const SingleTask = ({task, onDelete}) => {
    return (
        <div className='singleTask'> 
        <p>{task.text}</p>
        <p><FaTimes style={{ color:'green', cursor:'pointer', width:'30px'}} 
            onClick={() => onDelete(task.id)} />
        </p>
        
        </div>
        
    )
        
    
}

export default SingleTask
