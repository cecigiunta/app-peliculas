import React from "react";
import { Spinner } from "react-bootstrap";


function LoadingSpinner () {
    return (
        <Spinner animation="border" role="status" variant="danger">
            <span className="sr-only">Loading...</span>
        </Spinner>
    );

}

export default LoadingSpinner;
