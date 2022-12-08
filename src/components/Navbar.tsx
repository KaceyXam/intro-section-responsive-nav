import styles from "./Navbar.module.css";
import { useState } from "react";

const dropNames = {
	features: "features",
	company: "company",
};

const DropBtn = (props: { title: string; links: string[] }) => {
	const [showDrop, setShowDrop] = useState(false);

	const listItems = props.links.map((link) => {
		return <li>{link}</li>;
	});

	return (
		<div className={styles.dropcontain}>
			<button
				className={`dropbtn ${showDrop ? "active" : ""}`}
				onClick={() => {
					setShowDrop(() => !showDrop);
				}}
			>
				{props.title}
			</button>
			{showDrop ? (
				<ul
					onMouseLeave={() => setShowDrop(() => false)}
					className={styles.droplist}
				>
					{listItems}
				</ul>
			) : null}
		</div>
	);
};

const MobileDrop = (props: { title: string; links: string[] }) => {
	const [showDrop, setShowDrop] = useState(false);

	const listItems = props.links.map((link) => {
		return <li>{link}</li>;
	});

	return (
		<div className={styles.mobiledropcontain}>
			<button
				onClick={() => setShowDrop(() => !showDrop)}
				className={`dropbtn ${showDrop ? "active" : ""}`}
			>
				{props.title}
			</button>
			{showDrop ? <ul className={styles.mobiledroplist}>{listItems}</ul> : null}
		</div>
	);
};

export default function Navbar() {
	const [showMobile, setShowMobile] = useState(false);

	return (
		<nav className={styles.navigation}>
			<ul className={styles.navlist}>
				<img src="/images/logo.svg" alt="Snap Logo" />
				<li>
					<DropBtn
						title="Features"
						links={["Todo List", "Calender", "Reminders", "Planning"]}
					/>
				</li>
				<li>
					<DropBtn title="Company" links={["History", "Our Team", "Blog"]} />
				</li>
				<li className={styles.navelement}>Careers</li>
				<li className={styles.navelement}>About</li>
				<li className={styles.login}>Login</li>
				<li>
					<button className={styles.registerbtn}>Register</button>
				</li>
				<li className={styles.hamburger}>
					<button
						onClick={() => setShowMobile(() => !showMobile)}
						className={styles.burgerbutton}
					>
						{showMobile ? (
							<svg width="26" height="26" xmlns="http://www.w3.org/2000/svg">
								<g fill="#151515" fill-rule="evenodd">
									<path d="m2.393.98 22.628 22.628-1.414 1.414L.979 2.395z" />
									<path d="M.98 23.607 23.609.979l1.414 1.414L2.395 25.021z" />
								</g>
							</svg>
						) : (
							<svg width="32" height="18" xmlns="http://www.w3.org/2000/svg">
								<g fill="#151515" fill-rule="evenodd">
									<path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z" />
								</g>
							</svg>
						)}
					</button>
					{showMobile ? (
						<ul className={styles.mobilemenu}>
							<li>
								<MobileDrop
									title="Features"
									links={["Todo List", "Calender", "Reminders", "Planning"]}
								/>
							</li>
							<li>
								<MobileDrop
									title="Company"
									links={["History", "Our Team", "Blog"]}
								/>
							</li>

							<li className={styles.mobilenav}>Careers</li>
							<li className={styles.mobilenav}>About</li>
							<li className={styles.mobilelogin}>Login</li>
							<li className={styles.mobileregister}>Register</li>
						</ul>
					) : null}
				</li>
			</ul>
		</nav>
	);
}
