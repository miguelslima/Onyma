import React from "react";
import db from "../../database/firestore";

// import { Container } from './styles';

const List: React.FC = () => {
  async function getCliniList() {
    try {
      const data = await db.collection("clinicas").get();
      return data.docs.map((doc) => doc.data());
    } catch (error) {
      return false;
    }
  }

  return (
    <div>
      <h1>List</h1>
    </div>
  );
};

export default List;
