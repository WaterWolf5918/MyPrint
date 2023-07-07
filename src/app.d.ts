// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
		export interface previewJSON {
			title: string
			desc: string
			img: string
		}
	}

	export interface ticketBuilder {
		timestamp: number
		title: string
		desc: string
		link: string
		priority: number
		userAgent: string
	}
}

export {};
