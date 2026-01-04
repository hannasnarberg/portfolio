// Components
import SkillList from "components/SkillList/SkillList";
import Button from "components/Button/Button";

// Styling
import "components/ProjectItem/ProjectItem.css";
import Icon from "components/Icons/Icon";

function ProjectItem({
	title,
	src,
	alt,
	imageCaption,
	skills,
	paragraphs,
	repoLink,
	siteLink,
}) {
	return (
		<div className="project-item">
			<h2 className="project-title">{title}</h2>
			<div className="project-image-container">
				<img className="project-image" src={src} alt={alt} />
				{imageCaption && (
					<strong className="description">{imageCaption}</strong>
				)}
			</div>
			<SkillList className="skill-list" skills={skills} />
			<div className="paragraph-container">
				{paragraphs.map((paragraph) => (
					<p className={`paragraph description`}>{paragraph}</p>
				))}
			</div>
			<div className="button-container">
				{siteLink && (
					<a href={siteLink} target="_blank" rel="noreferrer">
						<Button
							icon={
								<Icon>
									<path d="M14 11.9976C14 9.5059 11.683 7 8.85714 7C8.52241 7 7.41904 7.00001 7.14286 7.00001C4.30254 7.00001 2 9.23752 2 11.9976C2 14.376 3.70973 16.3664 6 16.8714C6.36756 16.9525 6.75006 16.9952 7.14286 16.9952" />
									<path d="M10 11.9976C10 14.4893 12.317 16.9952 15.1429 16.9952C15.4776 16.9952 16.581 16.9952 16.8571 16.9952C19.6975 16.9952 22 14.7577 22 11.9976C22 9.6192 20.2903 7.62884 18 7.12383C17.6324 7.04278 17.2499 6.99999 16.8571 6.99999" />
								</Icon>
							}
							variant="dark"
						>
							Visit
						</Button>
					</a>
				)}
				{repoLink && (
					<a href={repoLink} target="_blank" rel="noreferrer">
						<Button
							icon={
								<Icon>
									<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
									<path d="M14.3333 19V17.137C14.3583 16.8275 14.3154 16.5163 14.2073 16.2242C14.0993 15.9321 13.9286 15.6657 13.7067 15.4428C15.8 15.2156 18 14.4431 18 10.8989C17.9998 9.99256 17.6418 9.12101 17 8.46461C17.3039 7.67171 17.2824 6.79528 16.94 6.01739C16.94 6.01739 16.1533 5.7902 14.3333 6.97811C12.8053 6.57488 11.1947 6.57488 9.66666 6.97811C7.84666 5.7902 7.05999 6.01739 7.05999 6.01739C6.71757 6.79528 6.69609 7.67171 6.99999 8.46461C6.35341 9.12588 5.99501 10.0053 5.99999 10.9183C5.99999 14.4366 8.19999 15.2091 10.2933 15.4622C10.074 15.6829 9.90483 15.9461 9.79686 16.2347C9.68889 16.5232 9.64453 16.8306 9.66666 17.137V19" />
									<path d="M9.66667 17.7018C7.66667 18.3335 6 17.7018 5 15.7544" />
								</Icon>
							}
							variant="light"
							href={repoLink}
						>
							Github
						</Button>
					</a>
				)}
			</div>
		</div>
	);
}

export default ProjectItem;
