import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Task extends Component {
    render() {

        let {index, name, status} = this.props

        return (
            <tr>
                <td>{index + 1}</td>
                <td>{name}</td>
                <td><span className={status ? 'badge badge-success': 'badge badge-danger' } >{status ? 'hiện' : 'ẩn'}</span></td>
                <td>
                    <Link to={`/edit/${index}`} className='btn btn-warning mr-2 text-white'><i className="far fa-edit"></i> Sửa</Link>
                    <span className='btn btn-danger' onClick={() => this.props.onDelete(index)}><i className="far fa-trash-alt"></i> Xóa</span>
                </td>
            </tr>
        )
    }
}

export default Task