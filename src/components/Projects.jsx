import { useState } from "react";

export default function Projects() {
    const projects = [
        {
            skill: 'Full stack',
            title: 'eFootball25',
            img: 'assets/projects/project1.png',
            link : 'https://github.com/Ourouimed/efootball25',
        },
        {
            skill: 'Frontend',
            title: 'RabatBus',
            img: 'assets/projects/project2.png',
            link : 'https://rabat-bus.vercel.app/',
        },
        {
            skill: 'Frontend',
            title: 'Dream House',
            img: 'assets/projects/project3.png',
            link : 'https://ourouimed.github.io/dream-House/',
        },
        {
            skill: 'Frontend',
            title: 'AI Quiz Generator',
            img: 'assets/projects/project4.png',
            link : 'https://github.com/Ourouimed/react-quiz',
        },
        {
            skill: 'Backend',
            title: 'Todo List (Flask)',
            img: 'assets/projects/project5.png',
            link : 'https://github.com/Ourouimed/flask-todo',
        },
    ];

    const [currTab, setCurrTab] = useState('All');
    const tabs = ['All', 'Frontend', 'Backend', 'Full stack'];

    const renderProjects = () => {
        const filteredProjects =
            currTab === 'All'
                ? projects
                : projects.filter((e) => e.skill === currTab); 

        return filteredProjects.map(({ skill, title, img , link}) => (
            <div className='col-12 col-md-6 col-lg-4 text-start' key={title}>
                <div
                    className='w-100 rounded mb-3 ratio ratio-4x3 w-100 overflow-hidden position-relative'
                    style={{ background: '#FFEBDB' }}
                >
                    <img
                        src={img}
                        alt={title}
                        style={{ position: 'absolute', bottom: '-50%' }}
                    />
                </div>
                <span style={{ color: 'var(--main-color)' }}>{skill}</span>
                <h4>
                    <a href={link} target="_blank" style={{textDecoration : 'none' , color : 'black'}}>{title}</a>
                </h4>
            </div>
        ));
    };

    return (
        <section id="projects" className="text-center p-5">
            <h1>Projects</h1>
            <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta blanditiis saepe, rem voluptatibus natus harum perferendis commodi doloremque porro officiis!
            </p>
            <ul className="d-flex align-items-center justify-content-center gap-3">
                {tabs.map((t) => (
                    <li key={t} style={{ listStyle: 'none' }}>
                        <button
                            onClick={() => setCurrTab(t)}
                            className={`btn border ${currTab === t ? 'dw-btn' : ''}`}
                            style={{ background: '#F8F8F8' }}
                        >
                            {t}
                        </button>
                    </li>
                ))}
            </ul>

            <div className="row">{renderProjects()}</div>
        </section>
    );
}
