import React from 'react';
import { Link } from "react-router-dom";

function LoginPage() {
    const [ID, setID] = React.useState("");
    const onChangeID = (event) => {
        setID(event.target.value);
    }
    return (
        <div>
            <form>
                <input
                    value={ID}
                    type="Text"
                    onChange={onChangeID}
                    placeholder="Write ID"
                />
                <input
                    type="Password"
                    placeholder="Write Password"
                />
            </form >
            <h3><Link to={`/MainPage/${ID}`}>Login</Link></h3>
        </div>

    );
}

export default LoginPage;