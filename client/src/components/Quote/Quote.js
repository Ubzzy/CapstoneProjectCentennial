import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { withRouter } from 'react-router-dom';
import '../../quote.css'
import axios from 'axios';


function Quote(props) {
    /* Service List*/

    const [quote, setQuote] = useState('');

    const [materials, setMaterials] = useState([]);

    // const [quoteItems, setQuoteItems] = useState({
    //     materials: [], dryAndWet: [], mechanical: [], standard: '', additional: '', assembly: '', exchangeRate: '', freight: ''
    //     , numberOfLayers: '', customer: '', partNumber: '', revision: '', panelSize: '', dateCreated: ''
    // });

    const [laminateList, setLaminateMaterial] = useState([
        { supplier: "", material: "", weight: "", used: "" },

    ]);

    const [coverCoatList, setCoverCoat] = useState([
        { supplier: "", material: "", thinkness: "", used: "" },

    ]);

    const [stiffenerList, setStiffener] = useState([
        { supplier: "", material: "", thinkness: "", used: "" },

    ]);

    const [tapeList, set3MTape] = useState([
        { supplier: "", material: "", thinkness: "", used: "" },

    ]);

    const [dryFilmList, setDryFilm] = useState([
        { supplier: "", material: "", thinkness: "", used: "" },

    ]);

    const [mechanicalProcessList, setMechanicalProcess] = useState([
        { supplier: "", material: "", thinkness: "", used: "" },

    ]);

    const [standardProcessList, setStandardProcess] = useState([
        { supplier: "", material: "", thinkness: "", used: "" },

    ]);

    const [finishesList, setFinishes] = useState([
        { supplier: "", material: "", thinkness: "", used: "" },

    ]);

    /* Add Button*/

    const addLaminate = (e) => {
        //console.log(e.target.selectedValue)
        //setQuoteItems({...quoteItems, [e.target.name]: e.target.value})
        setLaminateMaterial([...laminateList, { supplier: e.target.value, material: "", weight: "", used: "" }]);
        //console.log("QuoteItems:", quoteItems);

    };

    const addCoverCoat = () => {
        setCoverCoat([...coverCoatList, { supplier: "", material: "", thinkness: "", used: "" }]);

    };

    const addStiffener = () => {
        setStiffener([...stiffenerList, { supplier: "", material: "", thinkness: "", used: "" }]);

    };

    const add3MTape = () => {
        set3MTape([...tapeList, { supplier: "", material: "", thinkness: "", used: "" }]);

    };

    const addDryFilm = () => {
        setDryFilm([...dryFilmList, { supplier: "", used: "" }]);

    };

    const addMechanicalProcess = () => {
        setMechanicalProcess([...mechanicalProcessList, { supplier: "", used: "" }]);

    };

    const addStandardProcess = () => {
        setStandardProcess([...standardProcessList, { supplier: "", used: "" }]);

    };

    const addFinishes = () => {
        setFinishes([...finishesList, { supplier: "", used: "" }]);

    };

    /* Remove Button*/

    const removeLaminate = (index) => {
        const list = [...laminateList]
        list.splice(index, 1);
        setLaminateMaterial(list)
    };

    const removeCoverCoat = (index) => {
        const list = [...coverCoatList]
        list.splice(index, 1);
        setCoverCoat(list)
    };

    const removeStiffener = (index) => {
        const list = [...stiffenerList]
        list.splice(index, 1);
        setStiffener(list)
    };

    const remove3MTape = (index) => {
        const list = [...tapeList]
        list.splice(index, 1);
        set3MTape(list)
    };

    const removeDryFilm = (index) => {
        const list = [...dryFilmList]
        list.splice(index, 1);
        setDryFilm(list)
    };

    const removeMechanicalProcess = (index) => {
        const list = [...mechanicalProcessList]
        list.splice(index, 1);
        setMechanicalProcess(list)
    };

    const removeStandardProcess = (index) => {
        const list = [...standardProcessList]
        list.splice(index, 1);
        setStandardProcess(list)
    };

    const removeFinishes = (index) => {
        const list = [...finishesList]
        list.splice(index, 1);
        setFinishes(list)
    };


    /* Output*/

    const handleLaminateChange = (e, index) => {
        const { name, value } = e.target
        const list = [...laminateList];
        list[index][name] = value;
        setLaminateMaterial(list)

    };

    const handleCoverCoatChange = (e, index) => {
        const { name, value } = e.target
        const list = [...coverCoatList];
        list[index][name] = value;
        setCoverCoat(list)

    };

    const handleStiffenerChange = (e, index) => {
        const { name, value } = e.target
        const list = [...stiffenerList];
        list[index][name] = value;
        setStiffener(list)

    };

    const handle3MTapeChange = (e, index) => {
        const { name, value } = e.target
        const list = [...tapeList];
        list[index][name] = value;
        set3MTape(list)

    };

    const handleDryFilmChange = (e, index) => {
        const { name, value } = e.target
        const list = [...dryFilmList];
        list[index][name] = value;
        setDryFilm(list)

    };

    const handleMechanicalChange = (e, index) => {
        const { name, value } = e.target
        const list = [...mechanicalProcessList];
        list[index][name] = value;
        setMechanicalProcess(list)

    };

    const handleStandardChange = (e, index) => {
        const { name, value } = e.target
        const list = [...standardProcessList];
        list[index][name] = value;
        setStandardProcess(list)

    };

    const handleFinishesChange = (e, index) => {
        const { name, value } = e.target
        const list = [...finishesList];
        list[index][name] = value;
        setFinishes(list)

    };
    const [laminateOptions, setLaminateOptions] = useState([]);
    const [coverCoatOptions, setCoverCoatOptions] = useState([]);
    const [stiffenerOptions, setStiffenerOptions] = useState([]);
    const [tapeOptions, setTapeOptions] = useState([]);
    const [dryFilmOptions, setDryFilmOptions] = useState([]);
    const [mechanicalOptions, setMechanicalOptions] = useState([]);
    const [standardOptions, setStandardOptions] = useState([]);
    const [finishesOptions, setFinishesOptions] = useState([]);

    const fetchLaminateData = () => {
        axios
            .get("http://localhost:5000/specificMaterial/Laminate Material")
            .then((response) => {
                const { data } = response;
                if (response.status === 200) {
                    //check the api call is success by stats code 200,201 ...etc
                    setLaminateOptions(data)
                    //console.log(data)
                } else {
                    //error handle section 
                }
            })
            .catch((error) => console.log(error));
    };

    const fetchCoverCoatData = () => {
        axios
            .get("http://localhost:5000/specificMaterial/Cover Coat")
            .then((response) => {
                const { data } = response;
                if (response.status === 200) {
                    //check the api call is success by stats code 200,201 ...etc
                    setCoverCoatOptions(data)
                    //console.log("fetchCoverCoatData:",data)
                } else {
                    //error handle section 
                }
            })
            .catch((error) => console.log(error));
    };

    const fetchStiffenerData = () => {
        axios
            .get("http://localhost:5000/specificMaterial/Stiffener")
            .then((response) => {
                const { data } = response;
                if (response.status === 200) {
                    //check the api call is success by stats code 200,201 ...etc
                    setStiffenerOptions(data)
                    //console.log("fetchStiffenerData:", data)
                } else {
                    //error handle section 
                }
            })
            .catch((error) => console.log(error));
    };


    const fetchTapeData = () => {
        axios
            .get("http://localhost:5000/specificMaterial/3M Tapes")
            .then((response) => {
                const { data } = response;
                if (response.status === 200) {
                    //check the api call is success by stats code 200,201 ...etc
                    setTapeOptions(data)
                    //console.log("fetchTapeData:",data)
                } else {
                    //error handle section 
                }
            })
            .catch((error) => console.log(error));
    };

    const fetchDryFilmData = () => {
        axios
            .get("http://localhost:5000/DryAndWets")
            .then((response) => {
                const { data } = response;
                if (response.status === 200) {
                    //check the api call is success by stats code 200,201 ...etc
                    setDryFilmOptions(data)
                    //console.log("fetchDryFilmData:",data)
                } else {
                    //error handle section 
                }
            })
            .catch((error) => console.log(error));
    };

    const fetchMechanicalData = () => {
        axios
            .get("http://localhost:5000/mechanicals")
            .then((response) => {
                const { data } = response;
                if (response.status === 200) {
                    //check the api call is success by stats code 200,201 ...etc
                    setMechanicalOptions(data)
                    //console.log("fetchMechanicalData:",data)
                } else {
                    //error handle section 
                }
            })
            .catch((error) => console.log(error));
    };

    const fetchStandardData = () => {
        axios
            .get("http://localhost:5000/standard")
            .then((response) => {
                const { data } = response;
                if (response.status === 200) {
                    //check the api call is success by stats code 200,201 ...etc
                    setStandardOptions(data)
                    //console.log("fetchStandardData:",data)
                } else {
                    //error handle section 
                }
            })
            .catch((error) => console.log(error));
    };

    const fetchFinishesData = () => {
        axios
            .get("http://localhost:5000/finishes")
            .then((response) => {
                const { data } = response;
                if (response.status === 200) {
                    //check the api call is success by stats code 200,201 ...etc
                    setFinishesOptions(data)
                    //console.log("fetchFinishesData:",data)
                } else {
                    //error handle section 
                }
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetchLaminateData();
        fetchCoverCoatData();
        fetchStiffenerData();
        fetchTapeData();
        fetchDryFilmData();
        fetchMechanicalData();
        fetchStandardData();
        fetchFinishesData();
    }, []);

    // Save form input to quote hook
    const onChange = (e) => {
        e.persist();
        console.log("Inside onChange: " + e.target.value)
        setQuote({ ...quote, [e.target.name]: e.target.value });
    }


    const postUrl = "http://localhost:5000/addQuote/";
    const saveQuote = (e) => {
        e.preventDefault();

        // Set quote creation date to now
        const currDate = new Date();

        console.log("quote inside saveQuote: " + quote)
        const data = {
            customer: quote.customer,
            panelSize: quote.panelSize,
            exchangeRate: parseInt(quote.exchangeRate),
            freight: parseInt(quote.freight),
            numberOfLayers: parseInt(quote.numberOfLayers),
            partNumber: parseInt(quote.partNumber),
            revision: parseInt(quote.revision),
            dateCreated: currDate,
            // materials: quote.materials,
            // dryAndWet: quote.dryAndWet,
            // standard: quote.standard,
            // additional: quote.additional,
            // assembly: quote.assembly
        };

        console.log(data)
        axios.post(postUrl, data)
            .then((result) => {
                // props.history.push('/show/' + result.data._id)
                console.log(result.data)
            })
    };

    return (
        <Jumbotron style={{ background: 'white' }}>

            <h2 style={{ marginLeft: '2.5em' }}><b>Create Quote</b></h2>
            <Form style={{ display: 'flex' }} onSubmit={saveQuote}>
                <div className="col-12 mt-3" style={{ display: 'inline-block' }}>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Form.Group as={Row} className="mb-3">
                            <Col sm={4}>
                                <Form.Label> <b>Customer</b></Form.Label>
                                <Form.Control type="text" name="customer" id="customer" value={quote.customer} onChange={onChange}>
                                </Form.Control>
                            </Col>
                            <Col sm={4}>
                                <Form.Label><b>Panel Size  &emsp;  &emsp;  &emsp;</b></Form.Label>
                                <Form.Control as="select" name="panelSize" id="panelSize" value={quote.panelSize} onChange={onChange}>
                                    <option value="12x18"> 12x18</option>
                                    <option value="18x24"> 18x24</option>
                                </Form.Control>
                            </Col>
                            <Col sm={4}>
                                <Form.Label><b>Exchange Rate</b></Form.Label>
                                <Form.Control type="text" name="exchangeRate" id="exchangeRate" value={quote.exchangeRate} onChange={onChange}>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Form.Group as={Row} className="mb-3">
                            <Col sm={4}>
                                <Form.Label><b>Part Number</b></Form.Label>
                                <Form.Control type="text" name="partNumber" id="partNumber" value={quote.partNumber} onChange={onChange}>
                                </Form.Control>
                            </Col>
                            <Col sm={4}>
                                <Form.Label><b>Number of Layers</b></Form.Label>
                                <Form.Control as="select" name="numberOfLayers" id="numberOfLayers" value={quote.numberOfLayers} onChange={onChange}>
                                    <option value="1"> 1</option>
                                    <option value="2"> 2</option>
                                    <option value="3"> 3</option>
                                    <option value="4"> 4</option>
                                    <option value="5"> 5</option>
                                    <option value="6"> 6</option>
                                    <option value="7"> 7</option>
                                    <option value="8"> 8</option>
                                    <option value="9"> 9</option>
                                    <option value="10"> 10</option>
                                    <option value="11"> 11</option>
                                    <option value="12"> 12</option>
                                    <option value="14"> 13</option>
                                    <option value="14"> 14</option>
                                    <option value="15"> 15</option>
                                    <option value="16"> 16</option>
                                    <option value="17"> 17</option>
                                    <option value="18"> 18</option>
                                    <option value="19"> 19</option>
                                    <option value="20"> 20</option>
                                </Form.Control>
                                {/* <Form.Control as="select" name="panelSize" id="panelSize" value={quote.panelSize} onChange={onChange}>
                                    <option value="12x18"> 12x18</option>
                                    <option value="18x24"> 18x24</option>
                                </Form.Control> */}
                            </Col>
                            <Col sm={4}>
                                <Form.Label><b>Freight</b></Form.Label>
                                <Form.Control type="text" name="freight" id="freight" value={quote.freight} onChange={onChange}>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Form.Group as={Row} className="mb-3">
                            <Col sm={4}>
                                <Form.Label><b>Revision</b></Form.Label>
                                <Form.Control type="text" name="revision" id="revision" value={quote.revision} onChange={onChange}>
                                </Form.Control>
                            </Col>
                            <Col sm={4}>
                                <Form.Label><b>Technology  &emsp;  &emsp;  &nbsp;</b></Form.Label>
                                <Form.Control as="select" name="technology" id="technology" value={quote.technology} onChange={onChange}>
                                    <option value="Flex"> Flex</option>
                                    <option value="Rigid-Flex"> Rigid-Flex</option>
                                </Form.Control>
                            </Col>
                            <Col sm={4}>
                                <Form.Label><b>Assembly</b></Form.Label>
                                <Form.Control type="text" name="assembly" id="assembly" value={quote.assembly} onChange={onChange}>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                    </div>

                    &nbsp;
                    &nbsp;

                    <h3 style={{ marginLeft: '2.5em' }}><b>Manufacturing</b></h3>
                    <div className="col-11 mt-6" style={{ display: 'inline-block', marginLeft: '4em', background: 'lightgrey', paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1.5em', paddingBottom: '1.5em', borderRadius: '25px' }} >
                        <h4>Laminate Material</h4>
                        {laminateList.map((singleService, index) => (
                            <Row key={index}>
                                <Form.Group as={Col} className="mb-3">
                                    <Form.Label>Supplier</Form.Label>
                                    <Form.Control name='laminateSupplier' as="select">
                                        {laminateOptions.map((d) => (
                                            <option key={d.id} value={d.id}>{d.supplier}</option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Material</Form.Label>
                                    <Form.Control name='material' as="select">
                                        {laminateOptions.map((d) => (
                                            <option key={d.id} value={d.id}>{d.material}</option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>CU Weight</Form.Label>
                                    <Form.Control name='weight' as="select">
                                        {laminateOptions.map((d) => (
                                            <option key={d.id} value={d.id}>{d.cuWeight}</option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>Used</Form.Label>
                                    <Form.Control name='used' type="number" placeholder='0'
                                        value={singleService.service}
                                        onChange={(e) => handleLaminateChange(e, index)}>
                                    </Form.Control>
                                </Form.Group>
                                <div className=" mt-4">
                                    {laminateList.length - 1 === index &&
                                        <Button style={{ width: "90px", height: "38px" }} onClick={addLaminate} variant="secondary" type="Input" name='test' >
                                            Add
                                        </Button>}
                                </div>
                                &nbsp;&nbsp;
                                <div className="mt-4">
                                    {laminateList.length > 1 &&
                                        <Button onClick={() => removeLaminate(index)} variant="secondary" type="Delete">
                                            Remove
                                        </Button>}
                                </div>
                            </Row>))}
                    </div>
                    <div className="col-11 mt-3" style={{ display: 'inline-block', marginLeft: '4em', background: 'lightgrey', paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1.5em', paddingBottom: '1.5em', borderRadius: '25px' }} >
                        <h4>Cover Coat</h4>
                        {coverCoatList.map((singleServices, index) => (
                            <Row key={index}>
                                <Form.Group as={Col} className="mb-3">
                                    <Form.Label>Supplier</Form.Label>
                                    <Form.Control name='supplier' as="select">
                                        {coverCoatOptions.map((d) => (
                                            <option key={d.id} value={d.id}>{d.supplier}</option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Material</Form.Label>
                                    <Form.Control name='material' as="select">
                                        {coverCoatOptions.map((d) => (
                                            <option key={d.id} value={d.id}>{d.material}</option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Thickness</Form.Label>
                                    <Form.Control name='thickness' as="select">
                                        {coverCoatOptions.map((d) => (
                                            <option key={d.id} value={d.id}>{d.thickness}</option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Used</Form.Label>
                                    <Form.Control name='used' type="number" placeholder='0'
                                        value={singleServices.service}
                                        onChange={(e) => handleCoverCoatChange(e, index)}>
                                    </Form.Control>
                                </Form.Group>
                                <div className=" mt-4">
                                    {coverCoatList.length - 1 === index &&
                                        <Button style={{ width: "90px", height: "38px" }} onClick={addCoverCoat} variant="secondary" type="Input">
                                            Add
                                        </Button>}
                                </div>
                                &nbsp;&nbsp;
                                <div className="mt-4">
                                    {coverCoatList.length > 1 &&
                                        <Button onClick={() => removeCoverCoat(index)} variant="secondary" type="Delete">
                                            Remove
                                        </Button>}
                                </div>
                            </Row>))}
                    </div>

                    <div className="col-11 mt-3" style={{ display: 'inline-block', marginLeft: '4em', background: 'lightgrey', paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1.5em', paddingBottom: '1.5em', borderRadius: '25px' }} >
                        <h4>Stiffener</h4>
                        {stiffenerList.map((singleServicestiff, index) => (
                            <Row key={index}>
                                <Form.Group as={Col} className="mb-3">
                                    <Form.Label>Supplier</Form.Label>
                                    <Form.Control name='supplier' as="select">
                                        {stiffenerOptions.map((d) => (
                                            <option key={d.id} value={d.id}>{d.supplier}</option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Material</Form.Label>
                                    <Form.Control name='material' as="select">
                                        {stiffenerOptions.map((d) => (
                                            <option key={d.id} value={d.id}>{d.material}</option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Thickness</Form.Label>
                                    <Form.Control name='thickness' as="select">
                                        {stiffenerOptions.map((d) => (
                                            <option key={d.id} value={d.id}>{d.thickness}</option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Used</Form.Label>
                                    <Form.Control name='used' type="number" placeholder='0'
                                        value={singleServicestiff.service}
                                        onChange={(e) => handleStiffenerChange(e, index)}>
                                    </Form.Control>
                                </Form.Group>
                                <div className=" mt-4">
                                    {stiffenerList.length - 1 === index &&
                                        <Button style={{ width: "90px", height: "38px" }} onClick={addStiffener} variant="secondary" type="Input">
                                            Add
                                        </Button>}
                                </div>
                                &nbsp;&nbsp;

                                <div className="mt-4">
                                    {stiffenerList.length > 1 &&
                                        <Button onClick={() => removeStiffener(index)} variant="secondary" type="Delete">
                                            Remove
                                        </Button>}
                                </div>
                            </Row>))}
                    </div>

                    <div className="col-11 mt-3" style={{ display: 'inline-block', marginLeft: '4em', background: 'lightgrey', paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1.5em', paddingBottom: '1.5em', borderRadius: '25px' }} >
                        <h4>3M Tape</h4>
                        {tapeList.map((singleServicestape, index) => (
                            <Row key={index}>
                                <Form.Group as={Col} className="mb-3">
                                    <Form.Label>Supplier</Form.Label>
                                    <Form.Control name='supplier' as="select">
                                        {tapeOptions.map((d) => (
                                            <option key={d.id} value={d.id}>{d.supplier}</option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Material</Form.Label>
                                    <Form.Control name='material' as="select">
                                        {tapeOptions.map((d) => (
                                            <option key={d.id} value={d.id}>{d.material}</option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Model # </Form.Label>
                                    <Form.Control name='thickness' as="select">
                                        {tapeOptions.map((d) => (
                                            <option key={d.id} value={d.id}>{d.modelNumber}</option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Used</Form.Label>
                                    <Form.Control name='used' type="number" placeholder='0'
                                        value={singleServicestape.service}
                                        onChange={(e) => handle3MTapeChange(e, index)}>
                                    </Form.Control>
                                </Form.Group>
                                <div className=" mt-4">
                                    {tapeList.length - 1 === index &&
                                        <Button style={{ width: "90px", height: "38px" }} onClick={add3MTape} variant="secondary" type="Input">
                                            Add
                                        </Button>}
                                </div>
                                &nbsp;&nbsp;

                                <div className="mt-4">
                                    {tapeList.length > 1 &&
                                        <Button onClick={() => remove3MTape(index)} variant="secondary" type="Delete">
                                            Remove
                                        </Button>}
                                </div>
                                &nbsp;&nbsp;
                            </Row>))}
                    </div>

                    <div className="col-11 mt-6" style={{ display: 'inline-block', marginLeft: '4em', background: 'white', paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1.5em', paddingBottom: '1.5em', borderRadius: '25px' }} ></div>

                    <h3 style={{ marginLeft: '2.5em' }}><b>Processes</b></h3>

                    <div className="col-11 mt-6" style={{ display: 'inline-block', marginLeft: '4em', background: 'lightgrey', paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1.5em', paddingBottom: '1.5em', borderRadius: '25px' }} >
                        <h4>Dry Film & Wet Processes</h4>
                        {dryFilmList.map((singleServicestape, index) => (
                            <Row key={index}>
                                <Form.Group as={Col} className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control name='name' as="select">
                                        {dryFilmOptions.map((d) => (
                                            <option key={d.id} value={d.id}>{d.name}</option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Used</Form.Label>
                                    <Form.Control name='used' type="number" placeholder='0'>
                                    </Form.Control>
                                </Form.Group>
                                <div className=" mt-4">
                                    {dryFilmList.length - 1 === index &&
                                        <Button style={{ width: "90px", height: "38px" }} onClick={addDryFilm} variant="secondary" type="Input">
                                            Add
                                        </Button>}
                                </div>
                                &nbsp;&nbsp;

                                <div className="mt-4">
                                    {dryFilmList.length > 1 &&
                                        <Button onClick={() => removeDryFilm(index)} variant="secondary" type="Delete">
                                            Remove
                                        </Button>}
                                </div>
                                &nbsp;&nbsp;
                            </Row>))}
                    </div>

                    <div className="col-11 mt-3" style={{ display: 'inline-block', marginLeft: '4em', background: 'lightgrey', paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1.5em', paddingBottom: '1.5em', borderRadius: '25px' }} >
                        <h4>Mechanical Processes</h4>
                        {mechanicalProcessList.map((singleServicestape, index) => (
                            <Row key={index}>
                                <Form.Group as={Col} className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control name='name' as="select">
                                        {mechanicalOptions.map((d) => (
                                            <option key={d.id} value={d.id}>{d.name}</option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Used</Form.Label>
                                    <Form.Control name='used' type="number" placeholder='0'>
                                    </Form.Control>
                                </Form.Group>
                                <div className=" mt-4">
                                    {mechanicalProcessList.length - 1 === index &&
                                        <Button style={{ width: "90px", height: "38px" }} onClick={addMechanicalProcess} variant="secondary" type="Input">
                                            Add
                                        </Button>}
                                </div>
                                &nbsp;&nbsp;

                                <div className="mt-4">
                                    {mechanicalProcessList.length > 1 &&
                                        <Button onClick={() => removeMechanicalProcess(index)} variant="secondary" type="Delete">
                                            Remove
                                        </Button>}
                                </div>
                                &nbsp;&nbsp;
                            </Row>))}
                    </div>

                    <div className="col-11 mt-3" style={{ display: 'inline-block', marginLeft: '4em', background: 'lightgrey', paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1.5em', paddingBottom: '1.5em', borderRadius: '25px' }} >
                        <h4>Standard Processes</h4>
                        {standardProcessList.map((singleServicestape, index) => (
                            <Row key={index}>
                                <Form.Group as={Col} className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control name='name' as="select">
                                        {standardOptions.map((d) => (
                                            <option key={d.id} value={d.id}>{d.name}</option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Used</Form.Label>
                                    <Form.Control name='used' type="number" placeholder='0'>
                                    </Form.Control>
                                </Form.Group>
                                <div className=" mt-4">
                                    {standardProcessList.length - 1 === index &&
                                        <Button style={{ width: "90px", height: "38px" }} onClick={addStandardProcess} variant="secondary" type="Input">
                                            Add
                                        </Button>}
                                </div>
                                &nbsp;&nbsp;

                                <div className="mt-4">
                                    {standardProcessList.length > 1 &&
                                        <Button onClick={() => removeStandardProcess(index)} variant="secondary" type="Delete">
                                            Remove
                                        </Button>}
                                </div>
                                &nbsp;&nbsp;
                            </Row>))}
                    </div>

                    <div className="col-11 mt-3" style={{ display: 'inline-block', marginLeft: '4em', background: 'lightgrey', paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1.5em', paddingBottom: '1.5em', borderRadius: '25px' }} >
                        <h4>Finishes</h4>
                        {finishesList.map((singleServicestape, index) => (
                            <Row key={index}>
                                <Form.Group as={Col} className="mb-3">
                                    <Form.Label>Supplier</Form.Label>
                                    <Form.Control name='Supplier' as="select">
                                        {finishesOptions.map((d) => (
                                            <option key={d.id} value={d.id}>{d.name}</option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Used</Form.Label>
                                    <Form.Control name='used' type="number" placeholder='0'
                                        value={singleServicestape.service}
                                        onChange={(e) => handleFinishesChange(e, index)}>
                                    </Form.Control>
                                </Form.Group>
                                <div className=" mt-4">
                                    {finishesList.length - 1 === index &&
                                        <Button style={{ width: "90px", height: "38px" }} onClick={addFinishes} variant="secondary" type="Input">
                                            Add
                                        </Button>}
                                </div>
                                &nbsp;&nbsp;

                                <div className="mt-4">
                                    {finishesList.length > 1 &&
                                        <Button onClick={() => removeFinishes(index)} variant="secondary" type="Delete">
                                            Remove
                                        </Button>}
                                </div>
                                &nbsp;&nbsp;
                            </Row>))}
                    </div>

                    <div className="col-12 mt-3" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button style={{ width: "100px", height: "50px" }} variant="secondary" type="Submit">

                            Submit

                        </Button>
                    </div>
                </div>


                {
                    //The space below can be used to add a dynamic cost breakdown to the quote form. Change the above div to col-8 instead of col-12
                }
                {
                    //<div id='formContainer' className="col-4 mt-5 mb-3" style={{display: 'inline-block', backgroundColor:'white'}}>
                    //    <Form.Label>Cost for Manufacturing</Form.Label>
                    //    <hr style={{color: "black", height: 5}}/>
                    //    <Form.Group as={Row}>
                    //        <Col sm={10}>
                    //            <Form.Label>Quantity</Form.Label>
                    //        </Col>
                    //        <Col sm={2}>
                    //            <Form.Label>2</Form.Label>
                    //        </Col>
                    //    </Form.Group>
                    //</div>
                }
            </Form>
        </Jumbotron>
    );
}


export default Quote;