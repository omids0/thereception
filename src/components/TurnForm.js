import React from 'react'

class TurnForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fileNum: props.turn ? props.turn.fileNum : '',
            fullName: props.turn ? props.turn.fullName : '',
            phoneNum: props.turn ? props.turn.phoneNum : '',
            visitingTime: props.turn ? props.turn.visitingTime : '',
            Dr: props.turn ? props.turn.Dr : '',
            description: props.turn ? props.turn.description : '',
        }
    }

    onFileNumChange = (e) => {
        const fileNum = e.target.value
        this.setState(() => ({fileNum}))
    }

    onFullNameChange = (e) => {
        const fullName = e.target.value
        this.setState(() => ({fullName}))
    }

    onPhoneNumChange = (e) => {
        const phoneNum = e.target.value
        this.setState(() => ({phoneNum}))
    }
    
    onVisitingTimeChange = (e) => {
        const visitingTime = e.target.value
        this.setState(() => ({visitingTime}))
    }

    onDrChange = (e) => {
        const Dr = e.target.value
        this.setState(() => ({Dr}))
    }

    onDescChange = (e) => {
        const description = e.target.value
        this.setState(() => ({description}))
    }

    onFormSub = (e) => {
        e.preventDefault()
        this.props.onSubmit({
        fileNum: this.state.fileNum,
        fullName: this.state.fullName,
        phoneNum: this.state.phoneNum,
        visitingTime: this.state.visitingTime,
        Dr: this.state.dr,
        description: this.state.description,
        })
    }

    render() {
        return (
                <form className='form' onSubmit={this.onFormSub}>
                    <input type='text' className='text-input' placeholder='File Number' autoFocus value={this.state.fileNum} onChange={this.onFileNumChange} />
                    <input type='text' className='text-input' placeholder='Full Name' value={this.state.fullName} onChange={this.onFullNameChange} />
                    <input type='text' className='text-input' placeholder='Phone Number' value={this.state.phoneNum} onChange={this.onPhoneNumChange} />
                    <input type='date' value={this.state.visitingTime} onChange={this.onVisitingTimeChange} />
                    <input type='text' className='text-input' placeholder='dr' value={this.state.Dr} onChange={this.onDrChange} />
                    <textarea className='textarea' placeholder='Description' value={this.state.description} onChange={this.onDescChange}></textarea>
                    <div>
                        <button className='button'>Save</button>
                    </div>
                </form>
        )
    }
}

export default TurnForm