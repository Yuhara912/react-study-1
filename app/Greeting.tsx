interface GreetingProps {
    name: string;
    message?: string; // messageはオプションのプロパティ
}

function Greeting({name, message = "Hello"}: GreetingProps) {
    return (
        <div>
            <h1>{message}, {name}!</h1>
            <p>Glad to see you</p>
        </div>
    ); 
}

export default Greeting;