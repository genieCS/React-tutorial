// Wrong
this.setState({
    counter: this.state.counter + this.props.increment,
});

// Correct
this.setState((prevState, props) => ({
    counter: prevState.counter + props.increment
}));

constructor(props) {
    super(props);
    this.state = {
        posts: [],
        comments: []
    };
}

componentDidMount() {
    fetchPosts().then(response => {
        this.setState({
            posts: response.posts
        });  
    });

    fetchComments().then(response => {
        this.setState({
            comments: response.comments
        });
    });
}

//A component may choose to pass its state down 
//as props to its child components:
<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}
<FormattedDate date={this.state.date} />

//all components are truly isolated.
function App() {
    return (
        <div>
            <Clock />
            <Clock />
            <Clock />
        </div>
    );
}
  
ReactDOM.render(
    <App />,
    document.getElementById('root')
);