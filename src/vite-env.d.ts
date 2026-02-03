/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module "*.svg?react" {
	import * as React from "react";
	const ReactComponent: React.FunctionComponent<
		React.SVGProps<SVGSVGElement> & { title?: string }
	>;
	export default ReactComponent;
}

declare module "*.svg" {
	import * as React from "react";
	const ReactComponent: React.FunctionComponent<
		React.SVGProps<SVGSVGElement> & { title?: string }
	>;
	export default ReactComponent;
}

interface ImportMetaEnv {
	readonly VITE_IMAGES_URL: string;
	readonly VITE_API_URL: string;
	// add other env vars here as needed
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
