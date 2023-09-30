// React Packages
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Redux->
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../Redux/Actions/ProductActions";

// MUI Imports
import { InputBase, List, ListItem, Box, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

//SearchBar styling
const SearchContainer = styled(Box)`
  border-radius: 2px;
  width: 38%;
  background-color: #fff;
  display: flex;
`;

const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding: 5px;
  display: flex;
  color: #252525;
`;

const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #ffffff;
  margin-top: 40px;
`;

const InputSearchBase = styled(InputBase)`
  font-size: unset;
  width: 85vw;
  padding-left: 10px;
`;

export default function SearchBar() {
  const [open, setOpen] = useState(true);
  const [text, setText] = useState();

  //To search products->
  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch(getProducts);
  useEffect(() => {
    dispatch(getProducts);
  }, [dispatch]);

  const searchText = (text) => {
    setText(text);
    setOpen(false);
  };

  return (
    <SearchContainer>
      <InputSearchBase
        placeholder="Search for products"
        inputProps={{ "aria-label": "search" }}
        onChange={(e) => searchText(e.target.value)}
      />
      <SearchIconWrapper>
        <SearchIcon id="search-icon" />
      </SearchIconWrapper>
      {text && (
        <ListWrapper hidden={open}>
          {products
            .filter((product) =>
              product.title.longTitle.toLowerCase().includes(text.toLowerCase())
            )
            .map((product) => (
              <ListItem>
                <Link
                  to={`/product/${product.id}`}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    border: "2px dotted #D24848",
                    padding: "5px",
                  }}
                  onClick={() => setOpen(true)}
                >
                  {product.title.longTitle}
                </Link>
              </ListItem>
            ))}
        </ListWrapper>
      )}
    </SearchContainer>
  );
}
