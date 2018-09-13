import React, { Component } from 'react';

class Tasks extends Component {
    render() {
        return (
            <div className="container text-center">
                <table className="table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.children}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Tasks;