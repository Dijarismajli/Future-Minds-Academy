function Student(props) {

    return (

        <>
            <div className="Human">
                <h1>Name:{props.name}</h1>

                <h1>Age:{props.age}</h1>
                <p>Description:{props.desc}</p>
            </div>

        </>
    )
}

export default Student