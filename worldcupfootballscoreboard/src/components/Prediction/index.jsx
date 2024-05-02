import  { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Prediction =() => {
    const initialValue = [
        { id: 0, value: " --- Select a Team ---" }];



    const availableTeams = [
        { id: 1, value: "Mexico" },
        { id: 2, value: "Canada" },
        { id: 3, value: "Spain" },
        { id: 4, value: "Brazil" },
        { id: 5, value: "Germany" },
        { id: 6, value: "France" },
        { id: 7, value: "Uruguay" },
        { id: 8, value: "Italy" },
        { id: 9, value: "Argentina" },
        { id: 10, value: "Australia" }
    ];
    useEffect(() => {
        // Should not ever set state during rendering, so do this in useEffect instead.
        setSelectedOption(availableTeams);
    }, []);

    const [selectedOption, setSelectedOption] = useState(initialValue);
    const [predictionExecution, setPredictionExecution] = useState(false);

    const handleSubmit = events => {

    }
    return (
        <>
            <Row style={{ marginTop: '20px' }}>
                <Col xs={3}>
                    <span>Mexico</span>
                </Col>
                <Col xs={3}>
                    <span>Canada</span>
                </Col>
                <Col xs={2}>

                </Col>
                <Col xs={2}>

                </Col>
            </Row>

            <Row style={{ marginTop: '20px' }}>
                <Col xs={3}>
                    <span>Spain</span>
                </Col>
                <Col xs={3}>
                    <span>Brazil</span>
                </Col>
                <Col xs={2}>

                </Col>
                <Col xs={2}>

                </Col>
            </Row>

            <Row style={{ marginTop: '20px' }}>
                <Col xs={3}>
                    <span>Germany</span>
                </Col>
                <Col xs={3}>
                    <span>France</span>
                </Col>
                <Col xs={2}>

                </Col>
                <Col xs={2}>

                </Col>
            </Row>

            <Row style={{ marginTop: '20px' }}>
                <Col xs={3}>
                    <span>Uruguay</span>
                </Col>
                <Col xs={3}>
                    <span>Italy</span>
                </Col>
                <Col xs={2}>

                </Col>
                <Col xs={2}>

                </Col>
            </Row>

            <Row style={{ marginTop: '20px' }}>
                <Col xs={3}>
                    <span>Argentina</span>
                </Col>
                <Col xs={3}>
                    <span>Australia</span>
                </Col>
                <Col xs={2}>

                </Col>
                <Col xs={2}>

                </Col>
            </Row>

        </>
    )
}
export default Prediction;