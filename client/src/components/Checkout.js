import { Button } from '@cred/neopop-web/lib/components';
// import { colorGuide } from '@cred/neopop-web/lib/primitives';
// import { colorPalette } from '@cred/neopop-web/lib/primitives';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Checkout = (props) => {
    return (
        <Button
            variant="primary"
            kind="elevated"
            size="big"
            colorMode="light"

            colorConfig={{ backgroundColor: "#D4F34A", borderColor: "#000000", edgeColors: { right: "#FC97D9", bottom: "#FC97D9" } }}

            icon={props.icon}
        >
            <div style={{ color: "rgba(0, 0, 0, 0.36)", }}>{props.title}</div>
        </Button>
    );
};

export default Checkout;