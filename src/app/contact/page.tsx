"use client";

import Header from '@/components/core/Header';
import Footer from '@/components/core/Footer';
import { Button } from '@/components/primitives/Button';
import { useRef, useState } from 'react';
import AnimatedCheck from '@/components/primitives/AnimatedCheck';

import InfoHero from '@/components/content/info/InfoHero';

export default function ContactPage() {

	// Edit this array to change the dropdown options shown in the Subject field
	const SUBJECT_OPTIONS = [
		'General Inquiry',
		'Feedback / Suggestion',
		'Media / Press',
		'Research Portal Access',
		'SFN Question',
		'Other',
	];

	const [subjectSelect, setSubjectSelect] = useState('General Inquiry');
	const [credentials, setCredentials] = useState('');
	const credentialsRef = useRef<HTMLTextAreaElement | null>(null);
	const [messageText, setMessageText] = useState('');
	const [formError, setFormError] = useState('');
	const hiddenSubjectRef = useRef<HTMLInputElement | null>(null);
	const formRef = useRef<HTMLFormElement | null>(null);

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		setFormError('');
	const subjectValue = subjectSelect;
		if (!subjectValue) {
			e.preventDefault();
			setFormError('Please choose a subject or enter a custom subject.');
			return;
		}

	 	// If requesting portal access, require credentials and a reason message
	 		if (subjectValue === 'Research Portal Access') {
			if (!credentials.trim()) {
				e.preventDefault();
				setFormError('Please provide your certifications and credentials to request portal access.');
				return;
			}
			if (!messageText.trim()) {
				e.preventDefault();
				setFormError('Please explain why you are requesting access to the Research Portal.');
				return;
			}
		}

		if (hiddenSubjectRef.current) hiddenSubjectRef.current.value = subjectValue;
		// allow normal form submission to proceed
	}

	// Auto-focus credentials when user selects portal access
	function handleSubjectChange(val: string) {
		setSubjectSelect(val);
		if (val === 'Research Portal Access') {
			setTimeout(() => credentialsRef.current?.focus(), 50);
		}
	}

	const [isSending, setIsSending] = useState(false);
	const [isSent, setIsSent] = useState(false);

	async function submitFormdata(form: HTMLFormElement) {
		const action = form.action;
		// Convert form fields to URLSearchParams so the API route can parse them as urlencoded body
		const fd = new FormData(form);
		const params = new URLSearchParams();
		for (const [k, v] of fd.entries()) {
			params.append(k, String(v));
		}
		const res = await fetch(action, {
			method: 'POST',
			body: params,
			headers: { 'Accept': 'application/json', 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
		});
		return res;
	}

		// New submit handler that posts via fetch, shows success state, and disables the button
		async function handleSubmitAsync(e: React.FormEvent<HTMLFormElement>) {
			e.preventDefault();
			setFormError('');
			const subjectValue = subjectSelect;
			if (!subjectValue) {
				setFormError('Please choose a subject or enter a custom subject.');
				return;
			}

			if (subjectValue === 'Research Portal Access') {
				if (!credentials.trim()) {
					setFormError('Please provide your certifications and credentials to request portal access.');
					return;
				}
				if (!messageText.trim()) {
					setFormError('Please explain why you are requesting access to the Research Portal.');
					return;
				}
			}

			if (hiddenSubjectRef.current) hiddenSubjectRef.current.value = subjectValue;

			const formEl = formRef.current;
			if (!formEl) return;

					try {
						setIsSending(true);
						const res = await submitFormdata(formEl);
						console.debug('Contact API response', res.status, res);
						if (res.ok) {
							setIsSent(true);
							return;
						}
						// non-ok response: show parsed error to user
						const json = await res.json().catch(() => null);
						const errMsg = json?.error || 'Submission failed. Please try again.';
						console.warn('Contact API non-ok response', errMsg);
						setFormError(errMsg);
					} catch (err) {
						console.error('Fetch to contact API failed', err);
						setFormError('Submission failed — network error. Please try again.');
					} finally {
						setIsSending(false);
					}
		}

	return (
		<>
			<Header />
			<section>
				{/* InfoHero replaces the Contact title */}
				<InfoHero title="Contact" />
				<form
					ref={formRef}
					className="space-y-6 container-padding mx-auto py-16"
						action="/api/contact"
						method="POST"
						onSubmit={handleSubmitAsync}
				>
					{/* Hidden subject input that will contain the final subject value sent to Formspree */}
					<input type="hidden" name="subject" ref={hiddenSubjectRef} />

					{/* Subject select */}
					<div>
						<label htmlFor="subject_select" className="block mb-2 font-medium">Subject</label>
						<select
							id="subject_select"
							name="subject_select"
							value={subjectSelect}
							onChange={e => handleSubjectChange(e.target.value)}
							className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-primary"
							required
						>
							{SUBJECT_OPTIONS.map(opt => (
								<option key={opt} value={opt}>{opt}</option>
							))}
						</select>
					</div>

					{/* No custom subject input; dropdown value is used for subject */}

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
						{/* If requesting portal access, show credentials field and change message copy */}
						{subjectSelect === 'Research Portal Access' && (
							<div>
								<label htmlFor="credentials" className="block mb-2 font-medium">Please enter your certifications, credentials, and other information proving your credibility to access the Research Portal</label>
		                        <textarea
									id="credentials"
									name="credentials"
										ref={credentialsRef}
										value={credentials}
										onChange={e => setCredentials(e.target.value)}
									rows={4}
									className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-primary"
								/>
							</div>
						)}

						<div>
							<label htmlFor="message" className="block mb-2 font-medium">{subjectSelect === 'Research Portal Access' ? 'Please tell us why you are wanting to request access to the Research Portal.' : 'Message'}</label>
							<textarea
								id="message"
								name="message"
								value={messageText}
								onChange={e => setMessageText(e.target.value)}
								required
								rows={5}
								className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-primary"
							/>
						</div>
								{formError && <div className="text-sm text-error">{formError}</div>}
								<Button
									type="submit"
									variant={'outlinePrimary'}
									size="md"
									disabled={isSent || isSending}
									className={isSent ? 'border-tertiary text-tertiary hover:text-tertiary hover:bg-transparent' : ''}
								>
									{isSent ? (
										<span className="inline-flex items-center gap-2">
											<AnimatedCheck size={20} />
											<span className="text-tertiary">Email Sent</span>
										</span>
									) : isSending ? (
										'Sending...'
									) : (
										'Send Email'
									)}
								</Button>
				</form>
			</section>
			<Footer />
		</>
	);
}
