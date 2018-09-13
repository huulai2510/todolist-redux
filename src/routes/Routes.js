import React from 'react'
import TaskContainer from '../containers/TaskContainer'
import TaskEdit from '../containers/TaskEdit'

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <TaskContainer />
    },
    {
        path: '/edit/:id',
        exact: false,
        main: ({match, history}) => <TaskEdit match={match} history={history} />
    },
    {
        path: '/edit',
        exact: false,
        main: ({match, history}) => <TaskEdit match={match} history={history} />
    }
]

export default routes