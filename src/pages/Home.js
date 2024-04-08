import Header from "../components/Header.js/Header";

const Home = (props)=>{
    return <div>
        <Header  onOpen={props.onOpen}/>
    </div>
}

export default Home;