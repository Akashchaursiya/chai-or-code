import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import PostList from "./components/PostList";
import PostlistProvider from "./store/Ppost-list-store";


function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostlistProvider>
      <div className="App-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab ={setSelectedTab}></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedTab === "Home" ? <PostList></PostList> : <CreatePost />}

          <Footer />
        </div>
      </div>
      </PostlistProvider>

  );
}

export default App;
