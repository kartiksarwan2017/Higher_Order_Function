import HighOrder from '../HighOrder/HighOrder';

const Heading = ({ text }) => <h1>{text}</h1>;

const CoinsNewComponent = HighOrder("/coins/markets?vs_currency=usd", Heading, "Coins");

export default CoinsNewComponent;