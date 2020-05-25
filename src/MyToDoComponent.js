import React from 'react';

class MyToDoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pendingTaskList: [],
            completedTaskList: [],
            task: ''
        }
        this.handleTaskTyping = this.handleTaskTyping.bind(this);
        this.addItemToTask = this.addItemToTask.bind(this);
        this.markDone = this.markDone.bind(this);
    }

    handleTaskTyping(event) {
        this.setState({ task: event.target.value });
    }

    addItemToTask() {
        let taskValue = this.state.task;
        let currentTaskList = this.state.pendingTaskList;
        currentTaskList.push(taskValue);
        this.setState({
            task: '',
            pendingTaskList: currentTaskList
        });
    }

    markDone(task) {
        let pendingTaskListCopy = this.state.pendingTaskList;
        let completedTaskListCopy = this.state.completedTaskList;
        for (let i = 0; i < pendingTaskListCopy.length; i++) {
            if (pendingTaskListCopy[i] === task) {
                pendingTaskListCopy.splice(i, 1);
                break;
            }
        }
        completedTaskListCopy.push(task);
        this.setState({
            pendingTaskList: pendingTaskListCopy,
            completedTaskList: completedTaskListCopy
        });
    }

    render() {
        return (
            /* Creating a div element which will center align all its child elements */
            <div style={{
                display: 'table',
                margin: '0 auto'
            }}>
                <h1>My ToDo App</h1>
                <input type="text" placeholder="Enter a task" value={this.state.task} onChange={this.handleTaskTyping} />
                <button onClick={this.addItemToTask}>Add</button>
                {this.state.pendingTaskList.length > 0 ? <h3>Pending Tasks:</h3> : null}
                <ul>
                    <table>
                        <tbody>
                            {
                                this.state.pendingTaskList.map((task) =>
                                    <tr>
                                        <td><li><input type="checkbox" checked={false} onClick={() => this.markDone(task)} /></li></td>
                                        <td style={{ padding: '5px' }}>{task}</td>
                                        {/* A button can also be used instead of a checkbox */}
                                        {/* <td><button onClick={() => this.markDone(task)}>Done</button></td> */}
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </ul>
                {this.state.completedTaskList.length > 0 ? <h3>Completed Tasks:</h3> : null}
                <ul>
                    <table>
                        <tbody>
                            {
                                this.state.completedTaskList.map((task) =>
                                    <tr>
                                        <td style={{
                                            padding: '5px', textDecorationLine: 'line-through',
                                            textDecorationStyle: 'solid'
                                        }}>
                                            <li>{task}</li>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </ul>
            </div>
        )
    }
}

export default MyToDoComponent;