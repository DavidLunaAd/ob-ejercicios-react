import { Task } from "../models/task.class";
import PropTypes from 'prop-types';
//import '../styles/task.scss';
import { LEVELS } from "../models/levels.enum";


const TaskComponent = ({task, complete}) => {

    const completed = () =>(<i onClick={() => complete(task)}className="bi-toggle-on task-action" style={{color: 'green' , fontWeight: 'bold'}}></i>);
    const pending = () => (<i onClick={() => complete(task)} className="bi-toggle-off task-action" style={{color: 'grey'}}></i>);

    function taskLevelBadge(){
        switch (task.level){
            case LEVELS.NORMAL:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            Normal
                        </span>
                    </h6>
                )
                case LEVELS.URGENT:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            Urgent
                        </span>
                    </h6>
                )
                case LEVELS.BLOCKING:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            Blocking
                        </span>
                    </h6>
                )
                default:
                    break;
        }
    }

    const taskCompleted = {
        color: 'grey',
        textDecoration: 'line-through'
    }

    const taskPending = {
        fontWeight: 'bold',
        color: 'tomato'
    }

    return (
        <tr className='fw-normal'>
            <td >
                <span>{task.name}</span>
            </td>
            <td className='ms-2'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
               {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                {task.completed ? 'Complete' : ' Pending'}
            </td>
        </tr>
    );
};

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
};

export default TaskComponent;
