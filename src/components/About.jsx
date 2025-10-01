

export default function About() {
    const skills = [
      { skill: 'React', range: 82 },
      { skill: 'Node', range: 40 },
      { skill: 'tailwind', range: 90 },
      { skill: 'Bootstrap', range: 75 },
      { skill: 'Php', range: 60 },
      { skill: 'javascript', range: 90 },
      { skill: 'express', range: 35 }
    ];
  
    return (
      <section id="about">
        <div className="row align-items-center">
          <div className="col-md-6 d-flex justify-content-center justify-content-md-start">
            <div
              className="rounded-circle border overflow-hidden border"
              style={{ width: '250px', height: '250px' , borderColor : 'var(--main-color) !important'}}
            >
              <img src="/assets/person2.png" alt="avatar" className="w-100" />
            </div>
          </div>
          <div className="col-md-6">
            <h1 className="fw-bold">About me</h1>
            <p>
            I’m a full stack web developer skilled in React, Next.js, Tailwind CSS, and backend technologies like Express, MySQL, Python, and PHP — focused on building fast, responsive, and scalable web applications.
            </p>
  
            {skills.map(({ skill, range }, i) => (
              <div key={skill} className="mb-4">
                <h4>{skill}</h4>
                <div
                  style={{
                    background: '#E6E6E6',
                    height: '10px',
                    width: '100%'
                  }}
                  className="w-100 rounded-pill position-relative"
                >
                  <div
                    className="position-absolute rounded-pill"
                    style={{
                      top: 0,
                      left: 0,
                      background: 'var(--main-color)',
                      height: '100%',
                      width: `${range}%`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      paddingRight: '4px'
                    }}
                  >
                    <div
                      className="rounded-circle border"
                      style={{
                        width: '25px',
                        height: '25px',
                        borderColor: 'var(--main-color) !important',
                        backgroundColor: 'white'
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  