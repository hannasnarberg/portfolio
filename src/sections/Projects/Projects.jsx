// Components
import ProjectItem from "components/ProjectItem/ProjectItem";
import IconHome from "components/Icons/IconHome";
import projects from "data/projects";

// Styles
import "sections/Projects/Projects.css";

function Projects() {
	return (
		<section id="projects" className="projects section">
			<h1 className="section-header">Projects</h1>
			{projects.map((project) => (
				<ProjectItem
					title={project.title}
					src={project.src}
					alt={project.alt}
					disclaimer={project.disclaimer}
					skills={project.skills}
					paragraphOne={project.paragraphOne}
					paragraphTwo={project.paragraphTwo}
					paragraphThree={project.paragraphThree}
					siteLink={project.siteLink}
					repoLink={project.repoLink}
				/>
			))}
			<IconHome />
		</section>
	);
}

export default Projects;
