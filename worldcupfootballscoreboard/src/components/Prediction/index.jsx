import  { useState, useEffect } from "react";


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
    return (
        <>
            <form>
                <select id="sectionDropdown" value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
                    {selectedOption.map((localState, index) => (
                        <option key={localState.id}>{localState.value}</option>
                    ))}
                </select>

            </form>
        </>
    )
}
export default Prediction;