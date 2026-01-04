// Styles
import "components/Button/Button.css";

const Button = ({
	href,
	variant = "light",
	target = "_self",
	rel,
	icon,
	onClick,
	children,
}) => {
	return (
		<a
			href={href}
			className={`button ${variant}`}
			target={target}
			onClick={onClick}
			rel={rel}
		>
			<p className="button-text">{children}</p>
			{icon}
		</a>
	);
};

export default Button;
