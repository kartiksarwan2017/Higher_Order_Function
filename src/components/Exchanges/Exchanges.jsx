import HighOrder from '../HighOrder/HighOrder';

const Custom = ({data}) => {
  return(
    <>
     <div>
      <h1>{data}</h1>
     </div>
    </>
  )
}

const ExchangesNewComponent = HighOrder("/exchanges", Custom);

export default ExchangesNewComponent;