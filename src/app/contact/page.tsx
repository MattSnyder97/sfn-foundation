"use client";

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
	return (
		<>
			<Header />
			<section className="container-padding mx-auto py-16 max-w-xl">
				<h1 className="text-4xl font-bold mb-6 text-primary">Contact</h1>
				<p className="mb-8 text-lg text-gray-700">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
				<form
					className="space-y-6"
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
