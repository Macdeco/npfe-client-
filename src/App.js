import React,{useState , useEffect} from "react";
import { Container } from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from "./components/Auth/Auth";
import { BrowserRouter, Switch , Route } from "react-router-dom";


const App = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
     
    useEffect(() => {
        const token = user?.token;

        //jwt

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, []);


    console.log(user.result._id);


    return (
        <BrowserRouter>
        <Container maxWidth="lg">
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/auth" exact component={Auth} />
            </Switch>
        </Container>
    </BrowserRouter>
    );
  };


export default App;
