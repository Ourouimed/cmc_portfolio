export default function Hero() {
    return (
      <section id="hero" className="p-5">
          <div className="row align-items-center flex-column-reverse flex-md-row">
            <div className="col-md-6">
              <h6>Hi I'm</h6>
              <h4 style={{ color: 'var(--main-color)' }}>Ouroui Medamine</h4>
              <h1 className="fw-bold">Full stack web developer</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptas
                iure quidem atque adipisci suscipit ipsa rem, tempora quod doloribus!
              </p>
              <button className="btn dw-btn px-4 rounded-none">Hire me</button>
            </div>
            <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
              <div className="rounded-circle border overflow-hidden" style={{ width: '250px', height: '250px'  , borderColor : 'var(--main-color) !important'}}>
                <img src="/assets/person1.png" alt="avatar" className="w-100" />
              </div>
            </div>
        </div>
      </section>
    );
  }
  