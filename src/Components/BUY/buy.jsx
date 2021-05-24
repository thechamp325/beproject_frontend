import React ,{ReactDOM} from "react";
import './buy.css';
import veg from '../../media/image.jpg';

class Buy extends React.Component {
  constructor(props) {
    super(props);
    
  }

render()
{

    return (
        <div class="row rowpadding ">

        <div  class="col-md-6" >
          <div className="d-flex justify-content-center align-items-center" style={{padding: '30px 25px'}}>
            <img className="product-image" src={veg}  />;
            </div>
            <div className="d-flex justify-content-center align-items-center">
              {/* <button className="btn btn-primary a-button-primary" onClick={this.handleclick}>Add To Cart</button> */}
              <a href='/checkout' className="btn btn-primary a-button-primary ml-3">Buy</a>
            </div>
        </div>
        <div  class="col-md-6">
            <span className="product-font">Product and Model Name</span> 
            <div className="d-flex align-items-center">
              <span style={{fontSize:'20px'}}>Price:</span> <span className="price ml-2">₹ 500</span>
            </div>
            <div>inclusive all taxes.</div>
            <div style={{marginTop:'20px'}}>
              <span className="details-font"> Features </span>
              <table class="table table-borderless">
                <tbody>
                  <tr>
                    <th scope="row">size</th>
                    <td>240*500</td>
                    
                  </tr>
                  <tr>
                    <th scope="row">model</th>
                    <td>iadnkn</td>
                  
                  </tr>
                  <tr>
                    <th scope="row">type</th>
                    <td>plastic</td>
                  
                  </tr>
                  <tr>
                    <th scope="row">arthnb</th>
                    <td>sudbfb</td>
                  
                  </tr>
                  <tr>
                    <th scope="row">oinef</th>
                    <td>sdkng</td>
                  
                  </tr>
                </tbody>
              </table>
              <span className="details-font"> About This Item </span>
              <ul class="list-group ">
                <li class="list-group-item disabled">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Morbi leo risus</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
                <li class="list-group-item">Vestibulum at eros</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
            
              </ul>
            </div>
        </div>
        </div>
    );
}
}
export default Buy;
