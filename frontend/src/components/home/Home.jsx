import React from "react";
import "./Home.css";

const Home = () => {
    return (
        <div className="home d-flex justify-content-center align-items-center">
            <div className="container d-flex justify-content-center align-items-center flex-column">
                <h1 className="text-center">"Organize your<br/> Work and life ,finally</h1>
                <p>
                    Become focused,organized,and calm with <br/>
                    todo app.The world's #1 task manager app.
                </p>
                <button class ="home-btn p-2">Make Todo list
                </button>
            </div>
        </div>

    );
};

export default Home 