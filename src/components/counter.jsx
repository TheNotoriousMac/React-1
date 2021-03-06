import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        // tags: []
    };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = (product) => {
        console.log(product);
        this.setState({ count: this.state.count + 1 })
        //obj.method();
        //function();
    }

    // doHandleIncrement = () => {
    //     this.handleIncrement({ id: 1 })
    // }

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;
        return <ul> { this.state.tags.map(tag => <li key = {tag}>{tag}</li>) }</ul>;
    }

    
    // render() { 
    //     return (
    //         <div>
    //             { this.state.tags.length === 0 && "Please create a new tag!" }
    //             {this.renderTags()}
    //         </div>
    //     ); 
    // }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        return this.state.count === 0 ? 'Zero' : this.state.count;
    }

    render() { 
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={ () => this.handleIncrement({ id: 1 }) } className="btn btn-secondary btn-sm">Increment</button>
            </div>
        ); 
    }
}
 
export default Counter;