import Section 		from '../../structure/section';
import Container 	from '../../structure/container';

import Image from 'next/image'
import SectionTitle from '../../blocks/section.title.block'

import Icon from '../../utils/icon.util'

import css from '../../../styles/sections/articles/recent.module.scss'

export default function Recent({ mediumArticles }) {

	const feed 		= mediumArticles.feed
	const articles 	= mediumArticles.items

	return (
		<Section classProp="borderBottom">
			<Container spacing={'verticalXXXXLrg'}>
				<SectionTitle
					title="Contact Me"
					preTitle="You can reach me here"
					subTitle="I am always open to new opportunities and collaborations. Feel free to reach out to me."
				/>
				<section className={css.projects}>
					{/* React out to me section */}
					<div className={css.contact}>
						<div className={css.contactInfo} style={{
							// Center the contact info
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center',
							gap: '2rem'
						}}>
							<div className={css.contactItem}>
								<Icon icon={['fad', 'envelope-open-text']} />
								<p>
									<a href="mailto:

									">Email Me</a>
								</p>
							</div>
							<div className={css.contactItem}>
								<Icon icon={['fad', 'phone-alt']} />
								<p>
									<a href="tel:

									">Call Me</a>
								</p>
							</div>
							<div className={css.contactItem}>
								<Icon icon={['fad', 'map-marker-alt']} />
								<p>
									<a href="https://goo.gl/maps/

									" target="_blank" rel="noreferrer">Find Me</a>
								</p>
							</div>
						</div>
					</div>
				</section>
			</Container>
		</Section>
	)
}