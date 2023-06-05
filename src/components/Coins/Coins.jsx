import HighOrder from '../HighOrder/HighOrder';

const Heading = ({ text }) => <h1 style={{fontSize: 30, textAlign: "center"}}>{text}</h1>;

const CoinsNewComponent = HighOrder("/coins/markets?vs_currency=usd", Heading, "Coins", "Error while fetching the Coins");

export default CoinsNewComponent;