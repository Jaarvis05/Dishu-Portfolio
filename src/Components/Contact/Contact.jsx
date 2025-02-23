import React from 'react'
import './Contact.css'
import mail_icon from '/src/assets/email.png'
import call_icon from '/src/assets/telephone.png'
import location_icon from '/src/assets/map.png'
import underline from '/src/assets/underline.png'


const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "5821f816-8c09-4576-9a4f-25ddd281884f");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        alert(data.message);
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };  


  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={underline} alt="none" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="none" />  <p>jaarviskumar05@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="none" />  <p>+91 7011593308</p>                        
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="none" />  <p>Gurugram, Haryana</p>                        
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email' />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows={8} placeholder='Enter your message'></textarea>
                <button type='submit' className="contact-submit">Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
