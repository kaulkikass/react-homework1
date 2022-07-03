import { Link } from "react-router-dom";

function Menuu() {
    return ( 
        <div>
            <Link to='/'>
            <button>Avaleht</button>
            </Link>
            <Link to='/kontakt'>
            <button>Kontakt</button>
            </Link>
            <Link to='/meist'>
            <button>Meist</button>
            </Link>

        </div>
     );
}

export default Menuu;