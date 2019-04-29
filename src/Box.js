import React, { Component } from "react";

export default class Box extends Component {

    onClick = () => {
        if (this.props.onClick) this.props.onClick(this.props.rowIndex, this.props.colIndex);
    }

    render() {
        return (
            <div style={{ height: "100px", width: "100px", border: "1px solid black", verticalAlign: "middle" }} onClick={this.onClick}>
                {this.props.value === 1 &&
                    "X"
                }

                {this.props.value === 2 &&
                    "O"
                }
            </div>
        );
    }
}
