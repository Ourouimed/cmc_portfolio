export default function Contact() {
  return (
    <section id="contact" className="text-center">
      <h1>Let's Work Together</h1>
      <p className="mb-5">
      Reach out for collaborations, questions, or just to say hi!


      </p>
      
      <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
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
