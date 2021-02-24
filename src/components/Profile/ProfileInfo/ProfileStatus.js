import React, { Component } from 'react'

export default class ProfileStatus extends Component {

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({ editMode: true })
    }
    deactivateEditeMode = () => {
        this.setState({ editMode: false })
        this.props.updateStatus(this.state.status)
    }
    onStatuseChange = (e) => {
        this.setState({ status: e.currentTarget.value })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode} >{this.props.status || 'NoStatus'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatuseChange} autoFocus={true} onBlur={this.deactivateEditeMode} value={this.state.status}></input>
                    </div>
                }
            </div>
        )
    }
}
