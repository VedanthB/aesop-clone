import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__top'>
                <div className='footer__topLeft'>
                
                    <div className='footer__email'>
                      <input placeholder='Enter Email' /> 
                        <p> Subscribe to receive communications from Aesop about our products and services. 
                           By subscribing, you confirm you have read and accept our<span>privacy policy.</span>
                        </p>
                    </div>
                    
                    <div className='footer__topLeftBottom' >
                        <h3>Sustainability</h3>

                        <p>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. 
                            We are Leaping Bunny approved and a Certified B Corporation. Learn more</p>
                    </div>
                </div>

                <div className='footer__topCenter'>
                    <div  className='footer__topCenterLeft'>
                        
                        <div className='footer__topCenterLeftTop'> 
                         <h3>Orders and support</h3>
                          <p>Contact us </p>
                         <p>FAQs </p>
                         <p>Delivery and returns </p>
                         <p>Delivery and returns </p>
                        </div>


                       <div className='footer__topCenterLeftBottom'>
                         <h3>About</h3>
                         <p>Our story</p>
                         <p>Foundation </p>
                         <p>Careers</p>
                         <p>Privacy policy</p>
                       </div>
                       

                    </div>

                    <div  className='footer__topCenterRight'>
                        
                        <div className='footer__topCenterRightTop'>
                         <h3>Services</h3>
                         <p>Live assistance </p>
                         <p>Corporate gifts </p>
                         <p>Facial appointments </p> 
                        </div>
                        
                        <div className='footer__topCenterRightBottom'>
                         <h3>Social media</h3>
                         <p>Instagram </p>
                         <p>Twitter  </p>
                         <p>LinkedIn </p>
                         <p>WeChat</p>
                        </div>
                        
                    </div>
                </div>

                <div className='footer__topRight'>
                    <h3>Location preferences</h3>
                    <p>Shipping:Hong Kong</p>
                    <p>Language:English</p>
                </div>
            </div>

          
        </div>
    )
}

export default Footer
