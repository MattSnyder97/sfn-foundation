"use client";

import Header from '@/components/core/Header';
import Footer from '@/components/core/Footer';
import { Button } from '@/components/primitives/Button';

import InfoHero from '@/components/content/info/InfoHero';

export default function ContactPage() {
	return (
		<>
			<Header />
			<section>
				{/* InfoHero replaces the Contact title */}
				<InfoHero title="Contact" />
				<form
					className="space-y-6 container-padding mx-auto py-16"
					action="https://formspree.io/f/xjkebokb"
					method="POST"
				>
					<div>
						<label htmlFor="name" className="block mb-2 font-medium">Name</label>
									<input
										type="text"
										id="name"
										name="name"
										required
										  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-primary"
									/>
					</div>
					<div>
						<label htmlFor="email" className="block mb-2 font-medium">Email</label>
									<input
										type="email"
										id="email"
										name="email"
										required
										  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-primary"
									/>
					</div>
					<div>
						<label htmlFor="message" className="block mb-2 font-medium">Message</label>
									<textarea
										id="message"
										name="message"
										required
										rows={5}
										  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-primary"
									/>
					</div>
								<Button
									type="submit"
									variant="outlinePrimary"
									size="md"
								>
									Send Message
								</Button>
				</form>
			</section>
			<Footer />
		</>
	);
}
