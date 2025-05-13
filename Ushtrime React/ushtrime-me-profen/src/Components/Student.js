import React, { useState } from 'react';


function Student() {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");


    const handleChange = (e) => setName(e.target.value)
    const handleChangeE = (e) => setEmail(e.target.value)


    return (

        <>
            <h1>User form</h1>

            <form>
                <div>
                    <input type="text" value={name} onChange={handleChange} />
                    <p>You typed: {name}</p>
                </div>

                <p>Email:</p>
                <div>
                    <input type="text" value={email} onChange={handleChangeE} />
                    <p>You typed: {email}</p>
                </div>
            </form>
        </>
    )
}

export default Student