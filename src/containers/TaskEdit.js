import React, { Component } from 'react'
import {connect} from 'react-redux'
import {actAddTask, actUpdateTask} from '../actions/index'

class TaskEdit extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            status: false
        }
    }

    componentDidMount(){
        let {id} = this.props.match.params
        if(id){
            this.setState({
                name: this.props.tasks[id].name,
                status: this.props.tasks[id].status
            })
        }
    }

    render() {
        return (
            <div className='container col-6'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" name="name" className="form-control" onChange={this.onChange} value={this.state.name} />
                    </div>
                    <div className="form-group">
                        <label>Status:</label>
                        <select className="form-control" name="status" onChange={this.onChange} value={this.state.status} >
                            <option value='true' >Hiện</option>
                            <option value='false' >Ẩn</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary mr-2">Submit</button>
                    <button type="button" className="btn btn-danger" onClick={() => this.props.history.goBack()}>Cancel</button>
                </form>
            </div>
        )
    }

    onChange = (e) => {
        let target = e.target
        let name = target.name
        let value = target.value
        if (value === 'true') {
            value = true
        } else if (value === 'false') {
            value = false
        }
        this.setState({
            [name]: value
        })
    }

    onSubmit = (e) => {
        let {id} = this.props.match.params
        e.preventDefault()
        let task = {
            id: Number(id),
            name: this.state.name,
            status: this.state.status
        }
        if(id < this.props.tasks.length){
            this.props.onUpdateTask(task)
            this.props.history.goBack()
        }else if(this.state.name !== ''){
            this.props.onAddTask(task)
            this.props.history.goBack()
        }
    }
}

const mapStateToProps = state => {
    return {
        tasks : state.taskReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddTask : task => {
            dispatch(actAddTask(task))
        },
        onUpdateTask : task => {
            dispatch(actUpdateTask(task))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskEdit)