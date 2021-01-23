import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/ui/Header";
import QueenGrid from "./components/queens/QueenGrid";
import "./styles.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios("https://www.nokeynoshade.party/api/queens");
      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  return (
    <div className="container">
      <Header />
      <QueenGrid isLoading={isLoading} items={items} />
    </div>
  );
};
export default App;
