import React, { useState, useEffect } from 'react';
import { Github, Mail, Phone, Download, Menu, X, ExternalLink, Award, Code, Users } from 'lucide-react';

const AnimatedCounter = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime = null;
        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = (currentTime - startTime) / duration;

            if (progress < 1) {
                setCount(Math.floor(end * progress));
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };
        requestAnimationFrame(animate);
    }, [end, duration]);

    return <span>{count.toLocaleString()}+</span>;
};

const SkillBar = ({ skill, percentage }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setTimeout(() => setWidth(percentage), 500);
    }, [percentage]);

    return (
        <div className="mb-4">
            <div className="flex justify-between mb-1">
                <span className="text-gray-700">{skill}</span>
                <span className="text-indigo-600">{percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                    className="bg-indigo-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${width}%` }}
                />
            </div>
        </div>
    );
};

const Portfolio = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const stats = [
        { icon: Code, label: "Projects Completed", value: 25 },
        { icon: Users, label: "Happy Clients", value: 15 },
        { icon: Award, label: "Awards", value: 5 }
    ];

    const skills = {
        technical: [
            { name: 'Flutter/Dart', level: 95 },
            { name: 'iOS Development', level: 90 },
            { name: 'React Native', level: 85 },
            { name: 'UI/UX Design', level: 80 }
        ],
        languages: [
            'Dart', 'Swift', 'Objective-C', 'Kotlin',
            'JavaScript', 'Python', 'Java'
        ]
    };

    const projects = [
        {
            title: "ScanPay",
            description: "Mobile payment application with 10M+ monthly transactions",
            tech: ["Flutter", "GetX", "Firebase"],
            stats: { users: "1M+", rating: 4.8 }
        },
        {
            title: "AI Integration",
            description: "AI-driven feature implementation using Claude and Copilot",
            tech: ["Flutter", "AI Tools", "REST APIs"],
            stats: { efficiency: "+40%", accuracy: "95%" }
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            sections.forEach(section => {
                const top = section.offsetTop;
                const height = section.offsetHeight;

                if (scrollPosition >= top && scrollPosition < top + height) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-md z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text 
                             hover:scale-110 transition-transform duration-300">JJ</span>
                        </div>

                        <div className="hidden md:flex md:items-center md:space-x-6">
                            {['about', 'experience', 'skills', 'projects'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item}`}
                                    className={`text-gray-700 hover:text-indigo-600 capitalize transition-colors duration-300
                            ${activeSection === item ? 'text-indigo-600 font-medium' : ''}`}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 transition-colors duration-300"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <div
                    className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                        } overflow-hidden`}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {['about', 'experience', 'skills', 'projects'].map((item) => (
                            <a
                                key={item}
                                href={`#${item}`}
                                className="block px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 pt-16">
                <div className="text-center text-white z-10 px-4 animate-fadeIn">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Julien Joseph Thomas
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 opacity-90">
                        Crafting Exceptional Mobile Experiences
                    </p>
                    <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                        <a
                            href="mailto:julienjthomas@gmail.com"
                            className="group flex items-center justify-center bg-white text-indigo-600 px-8 py-3 rounded-lg 
                       hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
                        >
                            <Mail className="mr-2 group-hover:rotate-12 transition-transform duration-300" size={20} />
                            Contact Me
                        </a>
                        <a
                            href="#"
                            className="group flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-3 
                       rounded-lg hover:bg-white hover:text-indigo-600 transform hover:scale-105 transition-all duration-300"
                        >
                            <Download className="mr-2 group-hover:translate-y-1 transition-transform duration-300" size={20} />
                            Download CV
                        </a>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <section id="about" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 
                         transform hover:scale-105 transition-all duration-300"
                            >
                                <stat.icon className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                                <div className="text-3xl font-bold text-gray-900 mb-2">
                                    <AnimatedCounter end={stat.value} />
                                </div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Technical Expertise</h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-indigo-600 mb-6">Core Skills</h3>
                            {skills.technical.map((skill, index) => (
                                <SkillBar key={index} skill={skill.name} percentage={skill.level} />
                            ))}
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-indigo-600 mb-6">Programming Languages</h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.languages.map((lang, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md 
                             transform hover:scale-105 transition-all duration-300"
                                    >
                                        {lang}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl 
                         transform hover:scale-105 transition-all duration-300"
                            >
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-indigo-600 mb-2">{project.title}</h3>
                                    <p className="text-gray-600 mb-4">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex justify-between text-sm text-gray-500">
                                        {Object.entries(project.stats).map(([key, value], i) => (
                                            <span key={i} className="flex items-center">
                                                <Award className="w-4 h-4 mr-1" />
                                                {key}: {value}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gradient-to-r from-gray-900 to-indigo-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-center md:text-left mb-6 md:mb-0">
                            <h3 className="text-xl font-bold">Let's Connect</h3>
                            <p className="text-gray-400">Open for exciting opportunities</p>
                        </div>
                        <div className="flex space-x-6">
                            {[
                                { icon: Mail, href: "mailto:julienjthomas@gmail.com" },
                                { icon: Phone, href: "tel:+919495718991" },
                                { icon: Github, href: "#" }
                            ].map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className="hover:text-indigo-400 transform hover:scale-110 transition-all duration-300"
                                >
                                    <item.icon size={24} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;
