import React from "react";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            itemName: ""
        };
    }

    handleChanges = e => {
        this.setState({ itemName: e.target.value })
    };

    handleAddItem = e => {
        e.preventDefault();
        this.props.addItem(this.state.itemName);
    };

    render() {
        return (
            <form onSubmit={this.handleAddItem}>

                <input
                className="text-box"
                type="text"
                name="item"
                value={this.state.itemName}
                onChange={this.handleChanges}              
                />

                <button> ADD </button>
            </form>
        );
    }
}

export default TodoForm;