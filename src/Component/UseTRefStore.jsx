import { useRef } from "react";

const UseTRefStore = () => {
    const mails = useRef(null);

    const datasender = () => {
        const killer = mails.current.value;

        // localStorage-ல இருந்த values-ஐ எடுக்கிறோம், இல்லையெனில் empty array
        // const gits = JSON.parse(localStorage.getItem("user details")) || [];
        const gits = JSON.parse(localStorage.getItem("user details")) || [];
        // புதிய value சேர்க்கிறோம்
        gits.push(killer);

        // localStorage-ல update பண்ணுகிறோம்
        localStorage.setItem("user details", JSON.stringify(gits));
    };

    return (
        <>
            <div>
                <h1>Form login</h1>
                <input
                    ref={mails}
                    type="text"
                    placeholder="Name"
                    onChange={datasender}
                />
                {/* <input type="email" placeholder=" Email" onChange={datasender} /> */}
            </div>
        </>
    );
};

export default UseTRefStore;
