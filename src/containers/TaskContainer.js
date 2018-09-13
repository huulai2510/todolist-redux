import React, { Component } from 'react'
import Tasks from '../components/Tasks'
import Task from '../components/Task'
import {actDeleteTask} from '../actions/index'
import {connect} from 'react-redux'

class TaskContainer extends Component {
    render() {
        return (
            <div>
                <Tasks>
                    {this.showTask(this.props.tasks)}
                </Tasks>
            </div>
        )
    }

    showTask = tasks => {
        let result = null
        if( tasks.length > 0){
            result = tasks.map((task, index) => {
                return (
                    <Task name={task.name} status={task.status} key={index} index={index} onDelete={this.props.onDelete} />
                )
            })
        }
        return result
    }

}

const mapStateToProps = state => {
    return {
        tasks : state.taskReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDelete : id => {
            dispatch(actDeleteTask(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer)