import React, { useCallback, useEffect, useState } from "react";

import iconSearch from "../../assets/icon-search.svg";
import iconSort from "../../assets/icon-sort.svg";
import ListItem from "../../components/ListItem";
// import api from "@/services/api";
import {
  Container,
  SearchHeader,
  SearchHeaderContent,
  SearchWrap,
  FilterContainer,
  Button,
} from "./styles";

interface ClinicModel {
  id: string;
  name: string;
  address: string;
  cep: string;
  email: string;
  whatsapp: string;
  services: string;
}

const List: React.FC = () => {
  const [state, setState] = useState({
    listStatic: [] as ClinicModel[],
    list: [] as ClinicModel[],
    error: "",
  });
  const [search, setSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => setSearchTerm(search), 500);

    return () => clearTimeout(handler);
  }, [search]);

  const orderList = useCallback(() => {
    setState((old) => ({
      ...old,
      list: old.list.sort((clinic, clinic2) =>
        clinic.name.localeCompare(clinic2.name)
      ),
    }));
  }, []);

  return (
    <Container>
      <SearchHeader>
        <SearchHeaderContent>
          <SearchWrap>
            <img src={iconSearch} alt="Pesquisar" />
            <input
              type="text"
              placeholder="Pesquisar..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </SearchWrap>
          <FilterContainer>
            <Button onClick={orderList}>
              <img src={iconSort} alt="Ordenação" />
              <span>Ordenar</span>
            </Button>
          </FilterContainer>
        </SearchHeaderContent>
      </SearchHeader>
      <div className="container">
        <ul className="clinic-list">
          <ListItem />
          <ListItem />
          <ListItem />
        </ul>
      </div>
    </Container>
  );
};

export default List;
