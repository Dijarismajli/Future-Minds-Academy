import Header from '../components/header'
import Nav from '../components/nav'
import Footer from '../components/footer'


function Home() {

    return (
        <>

            <Header

                title="About our company"
                desc="You are here"
            />

            <Nav />
            <main>
                <h2>Home</h2>
                <p>This is the home page. Welcome to our simple website built with HTML and CSS only.</p>
            </main>

            <Footer />
        </>
    )
}

export default Home