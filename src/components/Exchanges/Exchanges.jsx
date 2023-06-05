import HighOrder from '../HighOrder/HighOrder';

const Heading = ({text}) => <h1 style={{fontSize: 30, textAlign: "center"}}>{text}</h1>;

const ExchangesNewComponent = HighOrder(
    "/exchanges", 
    Heading, 
    "Exchanges", 
    "Error while fetching the Exchanges"
);

export default ExchangesNewComponent;