//HTML
<button onclick="activateLasers()">
    Activate Lasers
</button>

//React events are named using camelCase.
//React
<button onClick={activateLasers}>
    Activate Lasers
</button>

//HTML
<a href="#" onclick="console.log('The link was clicked.'); return false">
    Click me
</a>

//you cannot return false to prevent default behavior in React.
//React
function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }
  
    return (
        <a href="#" onClick={handleClick}>
            Click me
        </a>
    );
}