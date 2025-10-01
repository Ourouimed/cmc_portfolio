import { useState } from "react";
import { projects } from "../lib/projects";

export default function Projects() {
   

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
        <section id="projects" className="text-center">
            <h1>Projects</h1>
            <p className="mb-5">
            Some of the work I’ve built recently
            </p>
            <ul className="d-flex align-items-center justify-content-center gap-3 flex-wrap">
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
