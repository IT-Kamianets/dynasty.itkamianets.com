import { Component } from '@angular/core';

@Component({
	selector: 'app-home',
	standalone: true,
	template: `
		<main class="page-shell">
			<section>
				<h1>DYNASTY</h1>
				<p>Home page</p>
			</section>
		</main>
	`,
	styles: [
		`:host { display: block; padding: 2rem 1rem; min-height: calc(100vh - 4rem); }
		.page-shell { max-width: 900px; margin: 0 auto; padding-top: 3rem; text-align: center; }
		h1 { font-size: clamp(2.5rem, 4vw, 4rem); margin: 0 0 1rem; }
		p { color: var(--c-text-secondary); font-size: 1.05rem; margin: 0; }
		`,
	],
})
export class HomeComponent {}
