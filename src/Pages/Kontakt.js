import { useRef, useState } from "react";

function Kontakt() {

    const [aadress, määraAadress] = useState('Tallinn');
    const [telefon, määraTelefon] = useState('5512345');
    const [email, määraEmail] = useState('bla@baa.com');
    const [inglise, ingliseKeelne] = useState('ei');

    const ingliseKeelseks = () => {
        määraAadress('London')
        määraTelefon('111111')
        määraEmail('london@london.com')
        ingliseKeelne('jah')
    }


    return ( 
        <div>
            <div>{aadress}</div>
            <div>{telefon}</div>
            <div>{email}</div> 
            { inglise === 'jah' && <div>Leht on inglisekeelne</div>}
            <button onClick={() => ingliseKeelseks()}>Muuda inglise keelseks</button>
        </div>
     );
}

export default Kontakt;