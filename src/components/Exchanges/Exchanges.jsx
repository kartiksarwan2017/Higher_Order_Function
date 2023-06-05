import HighOrder from '../HighOrder/HighOrder';

const Heading = ({text}) => <h1>{text}</h1>;

const ExchangesNewComponent = HighOrder(
    "/exchanges", 
    Heading, 
    "Exchanges", 
    "Error while fetching the Exchanges"
);

export default ExchangesNewComponent;