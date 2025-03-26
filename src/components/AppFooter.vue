<template>
	<footer>
		<div class="container">
			<div class="row">
				<div>
					<p>Is there a project?</p>

					<h3>Let’s work</h3>
					<h3>together</h3>
				</div>

				<address class="contacts">
					<ul>
						<li v-for="item in contacts" :key="item.label">
							<p class="label">{{ item.label }}</p>

							<a v-if="item.phone" :href="'tel:' + item.phone">
								{{ item.phone }}
							</a>
							<a v-if="item.mail" :href="'mailto:' + item.mail">
								{{ item.mail }}
							</a>

							<template v-if="item.location">
								<p>{{ item.location }}</p>

								<svg
									width="32"
									height="32"
									viewBox="0 0 32 32"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect
										width="32"
										height="32"
										rx="16"
										fill="#101010"
									/>
									<path
										d="M17.5 20.5L20.5 11.5L11.5 14.5L15.25 16.75L17.5 20.5Z"
										stroke="#E2BEFF"
										stroke-width="1.4"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</template>
						</li>
					</ul>
				</address>
			</div>

			<div class="links">
				<ul>
					<li><a href="/">Facebook</a></li>
					<li><a href="/">Instagram</a></li>
					<li><a href="/">Telegram</a></li>
				</ul>

				<button class="btn-go"><span>Go</span></button>

				<ul>
					<li><a href="/">Behance</a></li>
					<li><a href="/">Linkedn</a></li>
					<li><a href="/">Privacy Policy</a></li>
				</ul>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
const contacts = [
	{
		label: 'For all questions',
		phone: '+7 (920) 278—00—68',
		mail: 'qtim@agency.com'
	},
	{
		label: 'Office in Russia',
		location: '139 Ruben Station Lake Drew, NM 52678'
	},
	{
		label: 'Office in Dubai',
		location: '139 Ruben Station Lake Drew, NM 52678'
	}
];
</script>

<style lang="scss" scoped>
footer {
	font-size: 16px;
	position: relative;
	background-color: var(--color-violet-2);
	overflow: hidden;
}

.container {
	min-height: 900px;
	max-width: 1257px;
	margin-inline: auto;
	padding-inline: 20px;
	padding-block: 140px 30px;
	display: flex;
	flex-direction: column;
}

h3 {
	font-size: 112px;
	line-height: 100%;
	letter-spacing: 0%;
	text-decoration: underline;

	&:first-of-type {
		margin-top: 56px;
	}
}

.contacts {
	margin-top: 75px;
	line-height: 120%;
	letter-spacing: 1%;
	margin-right: 233px;
	width: 152px;

	.label {
		margin-bottom: 12px;
	}

	li {
		display: flex;
		flex-direction: column;
		gap: 4px;

		&:not(:first-of-type) {
			margin-top: 36px;
		}
	}
}

.row {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}

.links {
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	margin-top: auto;
	overflow: hidden;

	ul {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 32px;

		a {
			text-decoration: underline;
			white-space: nowrap;
		}
	}
}

.btn-go {
	width: 358px;
	height: 358px;
	position: absolute;
	display: flex;
	justify-content: center;
	font-size: 32px;
	line-height: 100%;
	color: var(--color-white);
	background-color: var(--color-black);
	border-radius: 50%;
	bottom: calc(-358px / 2);
	left: 0;
	right: 0;
	margin: auto;

	span {
		margin-top: 122px;
	}
}
</style>
