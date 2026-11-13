import {
	_React,
	Css,
	ExpoIcon,
	FirebaseIcon,
	Html5,
	Javascript,
	Jest,
	Postgresql,
	TailwindIcon,
	TypescriptIcon,
	Vite,
} from "@dev.icons/react";

const techIcons = {
	CSS: Css,
	Expo: ExpoIcon,
	"Firebase Authentication": FirebaseIcon,
	"Firebase Realtime Database": FirebaseIcon,
	HTML: Html5,
	JavaScript: Javascript,
	Jest: Jest,
	PSQL: Postgresql,
	React: _React,
	"React Native": _React,
	Tailwind: TailwindIcon,
	TypeScript: TypescriptIcon,
	Vite: Vite,
};

// Icons drawn in black, which disappear on the dark modal
export const darkTechIcons = new Set(["HTML", "Expo"]);

export default techIcons;
