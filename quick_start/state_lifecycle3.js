//convert functional component to class
class Clock extends React.Component {
    //class components should always call the base constructor with props.
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    
    //run after the component output has been rendered to the DOM.
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    //if the Clock component is ever removed from the DOM,
    //React calls the componentWillUnmount()
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        //React may batch multiple setState() calls
        //into a single update for performance.
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);

