import "./contact.css"

const Contacts = () => {
    return (
        <div className="contacts">
            <div className="contacts-info">
                <div className="info-text">
                    <h1>Need a direct line?</h1>
                    <p>Cras massa et odio donec faucibus in. Vitae pretium massa dolor ullamcorper lectus elit quam. massa et odio donec faucibus in. Vitae pretium massa dolor ullamcorper lectus elit quam.</p>
                    <div className="info-soc">
                        <img src="/mobile.png" alt="" />
                        <div>
                            <h5>Phone</h5>
                            <p>+998886785454</p>
                        </div>
                    </div>
                    <div className="info-soc">
                        <img src="/mobile.png" alt="" />
                        <div>
                            <h5>Phone</h5>
                            <p>+998886785454</p>
                        </div>
                    </div>
                </div>
                 <div className='map' data-mapbox>
                <figure>
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd'
                        width='1085'
                        height='650'
                        loading='lazy'></iframe>
                </figure>
            </div>
            </div>
            <div className="us">
                <h1>Contact Us</h1>
                <p>Your email address will not be published. Required fields are marked *</p>
                <div className="inputs">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                </div>
                <textarea name="comments" id="#"></textarea>
                <div className="check">
                     <input type="checkbox" /><p>Save my name, email in this brower for the next time I comment</p>
                </div>
                <button>Send</button>
            </div>
        </div>
    )
}
export default Contacts;