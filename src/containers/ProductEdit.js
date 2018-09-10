import React, { Component } from 'react'
import {connect} from 'react-redux'
import {actAddTask, actUpdateTask} from '../actions/index'

class ProductEdit extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: '',
            status: false
        }
    }

    componentDidMount(){
        let {id} = this.props.match.params
        console.log(id)
        let {tasks} = this.props
        if(id){
            this.setState({
                name: tasks[id].name,
                status: tasks[id].status
            })
        }
    }

    render() {
        return (
            <div className="container col-5">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Tên:</label>
                        <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Trạng Thái:</label>
                        <select className="form-control" name='status' value={this.state.status}  onChange={this.onChange} >
                            <option value='true'>Kích hoạt</option>
                            <option value='false'>Ẩn</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-warning text-white mr-2">Lưu Lại</button>
                    <button type="button" className="btn btn-danger" onClick={()=> this.props.history.goBack()}>Hủy bỏ</button>
                </form>
            </div>
        )
    }

    onSubmit = (e) => {
        e.preventDefault()
        let {id} = this.props.match.params
        let {name, status} = this.state
        let task = {
            id : id,
            name : name,
            status : status
        }
        if(id){
            this.props.actUpdateTask(task)
        }else if(name !== ''){
            this.props.actAddTask(task)
        }
        this.props.history.goBack()
    }

    onChange = (e) => {
        let target = e.target
        let name = target.name
        let value = target.value
        if(value === 'true'){
             value = true
        }else if(value === 'false'){
             value = false
        }
        this.setState({
            [name] : value
        })
    }   
}
const findIndex = (state, id) => {
    let index = -1
    for (let i = 0; i < state.length; i++) {
        if(i === id){
            index = i  
            break
        }      
    }
    return index
}

const mapStateToProps = state => {
    return {
        tasks: state.productReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        actAddTask: id => {
            dispatch(actAddTask(id))
        },
        actUpdateTask: task => {
            dispatch(actUpdateTask(task))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductEdit)