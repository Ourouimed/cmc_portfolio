export default function Contact() {
  return (
    <section id="contact" className="text-center p-5">
      <h1>Let's Work Together</h1>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta blanditiis saepe, rem voluptatibus natus harum perferendis commodi doloremque porro officiis!
      </p>
      
      <div className="d-flex justify-content-center align-items-center gap-3">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Enter your message..." 
           style={{maxWidth: '400px' , borderColor : '#AFAFAF' , background : '#F8F8F8'}}
        />
        <button className="btn dw-btn" >
          Contact Me
        </button>
      </div>
    </section>
  );
}
