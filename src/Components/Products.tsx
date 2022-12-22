import { IProduct } from "../Types/Product";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./SearchCategory.css"; 

export const Products = (props: IProduct ) => (
  <>
  <Col>
    <Card style={{ width: '18rem', minHeight: "300px" ,marginBottom: "3px"}}>
        <Card.Img variant="top" style={{height: "220px"}} src={props.images} />
        <Card.Body style={{minHeight: "214px"}}>
            
            {props.stock_in_USA ? 
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center"><img className="img-USA" src="	https://thebuyhive.com/buy/img/usa.cbfe8d83.svg"/></div>
                <div className="" style={{fontSize: "0.75rem"}}> Stock in USA </div> 
              </div>
              : <div className="d-flex align-items-center">
                  <div className="" style={{width: "32px", height: "32px"}}></div>
                  <div className="text-white" style={{fontSize: "0.75rem"}}> Stock in USA </div> 
                </div>
            }
            <Card.Text className="text-truncate">{props.product_name}</Card.Text>
            <Card.Text className="text-muted"> MOQ: {props.minimum_order_quantity} Pieces</Card.Text>
            <Card.Text className="" style={{fontWeight: "bold"}}>$ {props.price} / piece</Card.Text>
            <button style={{backgroundColor: "#00b2c9", borderColor: "#00b2c9"}} className="w-100 text-white rounded-2">Add to Cart</button>
        </Card.Body>
      </Card>
    </Col>
    

    {/* <h2>{props.product_name}</h2>
    <p>{props.short_description}</p>
    <img src={props.images} alt="" /> */}
  </>
)
