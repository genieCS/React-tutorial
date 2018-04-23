//valid React component, functional
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
    element,
    document.getElementById('root')
);

function App() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);