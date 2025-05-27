/* Global Styles */
:root {
    --primary-color: #3498db;
    --secondary-color: #2c3e50;
    --light-color: #ecf0f1;
    --dark-color: #2c3e50;
    --accent-color: #e74c3c;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

h1, h2, h3, h4 {
    margin-bottom: 1rem;
}

a {
    text-decoration: none;
    color: var(--primary-color);
}

.btn {
    display: inline-block;
    background: var(--primary-color);
    color: white;
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn:hover {
    background: var(--secondary-color);
    transform: translateY(-3px);
}

/* Header */
header {
    background: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: fixed;
    width: 100%;
    z-index: 1000;
}

header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
}

.logo {
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--primary-color);
}

nav ul {
    display: flex;
    list-style: none;
}

nav ul li {
    margin-left: 2rem;
}

nav ul li a {
    color: var(--dark-color);
    font-weight: 500;
    transition: color 0.3s ease;
}

nav ul li a:hover {
    color: var(--primary-color);
}

/* Hero Section */
.hero {
    height: 100vh;
    display: flex;
    align-items: center;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('assets/images/hero-bg.jpg');
    background-size: cover;
    background-position: center;
    color: white;
    text-align: center;
    padding-top: 80px;
}

.hero h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
}

.hero h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    font-weight: 300;
}

/* About Section */
.about {
    padding: 5rem 0;
    background: var(--light-color);
}

.about-content {
    display: flex;
    align-items: center;
    gap: 3rem;
    margin-top: 2rem;
}

.about-img {
    flex: 1;
}

.about-img img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.about-text {
    flex: 1;
}

/* Skills Section */
.skills {
    padding: 5rem 0;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.skill-item {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease;
}

.skill-item:hover {
    transform: translateY(-10px);
}

.skill-item i {
    font-size: 3rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
}

/* Projects Section */
.projects {
    padding: 5rem 0;
    background: var(--light-color);
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.project-card {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.project-card:hover {
    transform: translateY(-10px);
}

.project-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.project-info {
    padding: 1.5rem;
}

/* Contact Section */
.contact {
    padding: 5rem 0;
}

.contact-content {
    display: flex;
    gap: 3rem;
    margin-top: 3rem;
}

.contact-info {
    flex: 1;
}

.contact-info p {
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
}

.contact-info i {
    margin-right: 1rem;
    color: var(--primary-color);
}

.social-links {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
}

.social-links a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: var(--primary-color);
    color: white;
    border-radius: 50%;
    transition: all 0.3s ease;
}

.social-links a:hover {
    background: var(--secondary-color);
    transform: translateY(-3px);
}

.contact-form {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.contact-form input,
.contact-form textarea {
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-family: inherit;
}

.contact-form textarea {
    height: 150px;
    resize: vertical;
}

/* Footer */
footer {
    background: var(--dark-color);
    color: white;
    text-align: center;
    padding: 2rem 0;
}

/* Responsive Design */
@media (max-width: 768px) {
    .about-content,
    .contact-content {
        flex-direction: column;
    }
    
    .hero h1 {
        font-size: 2.5rem;
    }
    
    .hero h2 {
        font-size: 1.5rem;
    }
    
    nav ul {
        display: none;
    }
}
