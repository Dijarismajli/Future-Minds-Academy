import Nav from '../components/nav'
import Footer from '../components/footer'

function About() {
    return (

        <>
            <Home
                title="About our company"
                desc="You are here"
            />
            <Nav />
            <main>
                <h2>About</h2>
                <p>This is the home page. Welcome to our simple website built with HTML and CSS only.</p>
            </main>

            <Footer />


        </>
    );

}

export default About