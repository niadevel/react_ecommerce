import { SpinnerDotted } from "spinners-react";

function Loader() {
    return (
        <SpinnerDotted 
        size={50}
        thickness={100}
        speed={100} 
        color="rgba(223, 156, 56, 1)"
        />
    )
}

export default Loader;