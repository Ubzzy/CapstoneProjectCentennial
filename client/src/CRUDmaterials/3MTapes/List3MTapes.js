import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function List3MTapes() {
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const [listError, setListError] = useState(false);
  const apiUrl = "http://localhost:3000/materials";
  const fetchData = async () => {
    axios
      .get(apiUrl)
      .then((result) => {
        setData(result.data);
        setShowLoading(false);
        console.log(result.data);
      })
      .catch((error) => {
        console.log("error in fetchData:", error);
        setListError(true);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const edit3MTapes = (id) => {
    navigate("/edit3MTapes/" + id);
  };
  const delete3MTapes = (item) => {
    setShowLoading(true);
    const mId = item._id;
    const tapes = {
      materialType: item.materialType,
      supplier: item.supplier,
      material: item.material,
      modelNumber: item.modelNumber,
      price: item.price,
    };
    console.log("3MTapes to delete:", tapes);
    const apiUrlDelete = "http://localhost:3000/materials/" + mId;
    axios
      .delete(apiUrlDelete, tapes)
      .then((results) => {
        setShowLoading(false);
        console.log("deleted 3MTapes:", results.data);
        fetchData();
      })
      .catch((error) => setShowLoading(false));
  };
  const tapes = data.filter((cc) => cc.materialType === "3M Tapes");
  return (
    
      <Jumbotron style={{background: 'white'}}>
        <h2 style={{marginLeft:'2.5em'}}><b>List of 3M Tapes:</b></h2>


        <div className="col-11 mt-3" style={{display: 'inline-block', marginLeft:'4em', background: 'lightgrey', paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1.5em', paddingBottom: '1.5em', borderRadius:'25px'}}>
        
        {showLoading && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
        
       
        <ListGroup>
          <Table className='table' hover>
          <thead className='table-dark' style={{background: '#111868'}}>
              <tr>
                <th>Material Type</th>
                <th>Supplier</th>
                <th>Material Name</th>
                <th>Model Number</th>
                <th>Price</th>
                <th>Edit Action</th>
                <th>Delete Action</th>
              </tr>
            </thead>
            <tbody>
              {tapes.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.materialType} </td>
                  <td>{item.supplier} </td>
                  <td>{item.material} </td>
                  <td>{item.modelNumber} </td>
                  <td>{item.price} </td>
                  <td>
                    <Button
                      type="button"
                      variant="primary"
                      onClick={() => {
                        edit3MTapes(item._id);
                      }}
                    >
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button
                      type="button"
                      variant="warning"
                      onClick={() => {
                        delete3MTapes(item);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          
        </ListGroup>
        <div className="buttonStyle">
          <Link to="/create3MTapes">
            <Button type="button" variant="secondary">
              Create New 3M Tape
            </Button>
          </Link>
        </div>
        </div>
        
      </Jumbotron>
    
  );
}
