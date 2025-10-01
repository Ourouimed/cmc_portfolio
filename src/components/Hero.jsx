import { social } from "../lib/social-media";

export default function Hero() {
    return (
      <section id="hero">
          <div className="row align-items-center flex-column-reverse flex-md-row">
            <div className="col-md-6">
              <h6>Hi I'm</h6>
              <h4 style={{ color: 'var(--main-color)' }}>Ouroui Medamine</h4>
              <h1 className="fw-bold">Full stack web developer</h1>
              <p>
              I'm a full stack web developer from Morocco, passionate about building beautiful, performant, and functional web experiences.
              </p>
              <button className="btn dw-btn px-4 rounded-none">Hire me</button>
            </div>
            <div className="col-md-6 d-flex justify-content-center justify-content-md-end ">
              <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="rounded-circle border overflow-hidden mb-4" style={{ width: '250px', height: '250px'  , borderColor : 'var(--main-color) !important'}}>
                <img src="/assets/person1.png" alt="avatar" className="w-100" />
              </div>
              <ul className="d-flex align-items-center gap-2">
              {social.map(({icon : Icon ,  url} , i)=> <li key={i} style={{listStyle : 'none'}}><a className='text-black' href={url}><Icon/></a></li>)}
            </ul>
              </div>
              
            </div>
        </div>
      </section>
    );
  }
  