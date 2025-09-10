"use client";

import Header from '@/components/core/Header';
import Footer from '@/components/core/Footer';
import { Button } from '@/components/primitives/Button';
import { useRef, useState } from 'react';
import AnimatedCheck from '@/components/primitives/AnimatedCheck';
import { FiInfo } from 'react-icons/fi';

// InfoHero intentionally not used here; removed to satisfy lint

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
	const nameRef = useRef<HTMLInputElement | null>(null);
	const [messageText, setMessageText] = useState('');
	const [formError, setFormError] = useState('');
	const hiddenSubjectRef = useRef<HTMLInputElement | null>(null);
	const formRef = useRef<HTMLFormElement | null>(null);

	// (removed unused handleSubmit) - client uses handleSubmitAsync via onSubmit

	// Auto-focus credentials when user selects portal access
	function handleSubjectChange(val: string) {
		setSubjectSelect(val);
		// Focus the name input whenever a subject is selected to guide the user to provide contact info
		setTimeout(() => nameRef.current?.focus(), 50);
	}

	const [isSending, setIsSending] = useState(false);
	const [isSent, setIsSent] = useState(false);

	async function submitFormdata(form: HTMLFormElement) {
		const action = form.action;
		// Ensure the hidden subject input is populated from the select right before building the payload
		try {
			const subjectInput = form.querySelector<HTMLInputElement>('input[name="subject"]');
			const subjectSelectEl = form.querySelector<HTMLSelectElement>('select[name="subject_select"]');
			if (subjectInput && subjectSelectEl) {
				subjectInput.value = subjectSelectEl.value;
			}
		} catch {
			// no-op; fallback to existing values
		}
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
				<div className="bg-white rounded-none sm:rounded-2xl default-shadow w-full max-w-2xl mx-auto mt-0 md:mt-12 mb-0 md:mb-16 overflow-hidden">
					{/* Filled header */}
					<div className="w-full sm:rounded-t-2xl" style={{ background: 'var(--color-primary)' }}>
						<div className="px-6 md:px-8 py-8 md:py-8 text-offWhite">
							<h3 className="text-4xl font-bold">Contact</h3>
						</div>
					</div>
					<form
						ref={formRef}
						className="p-8 space-y-6"
						action="/api/contact"
						method="POST"
						onSubmit={handleSubmitAsync}
					>
					{/* Hidden subject input that will contain the final subject value sent to Formspree */}
					<input type="hidden" name="subject" ref={hiddenSubjectRef} />

					{/* Subject select */}
					<div>
						<label htmlFor="subject_select" className="block mb-2 font-semibold text-dark">Subject</label>
						<select
							id="subject_select"
							name="subject_select"
							value={subjectSelect}
							onChange={e => handleSubjectChange(e.target.value)}
							className="w-full pl-4 pr-8 py-3 border rounded-lg focus:outline-none focus:ring focus:border-primary text-dark bg-white"
							required
						>
							{SUBJECT_OPTIONS.map(opt => (
								<option key={opt} value={opt} className="hover:bg-primary/10">{opt}</option>
							))}
						</select>
					</div>

					{/* No custom subject input; dropdown value is used for subject */}

					<div>
						<label htmlFor="name" className="block mb-2 font-semibold text-dark">Name</label>
								<input
									type="text"
									id="name"
									name="name"
									ref={nameRef}
									required
									  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-primary text-dark bg-white"
								/>
					</div>
					<div>
						<label htmlFor="email" className="block mb-2 font-semibold text-dark">Email</label>
									<input
										type="email"
										id="email"
										name="email"
										required
										  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-primary text-dark bg-white"
									/>
					</div>
						{/* If requesting portal access, show credentials field and change message copy */}
						{subjectSelect === 'Research Portal Access' && (
							<div>
								<label htmlFor="credentials" className="block mb-2 font-semibold text-dark">Please enter your certifications and other information proving your credibility.</label>
		                        <textarea
									id="credentials"
									name="credentials"
										ref={credentialsRef}
										value={credentials}
										onChange={e => setCredentials(e.target.value)}
									rows={4}
									className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-primary text-dark bg-white"
								/>
							</div>
						)}

						<div>
							<label htmlFor="message" className="block mb-2 font-semibold text-dark">{subjectSelect === 'Research Portal Access' ? 'Why you are wanting to request access to the Research Portal?' : 'Message'}</label>
							<textarea
								id="message"
								name="message"
								value={messageText}
								onChange={e => setMessageText(e.target.value)}
								required
								rows={5}
								className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-primary text-dark bg-white"
							/>
						</div>
								{formError && <div className="text-sm text-error">{formError}</div>}

								<div className="flex justify-center md:justify-start">
									<Button
										type="submit"
										variant={'outlinePrimary'}
										size="md"
										disabled={isSent || isSending}
										className={`${isSent ? 'border-tertiary text-tertiary hover:text-tertiary hover:bg-transparent' : ''}`}
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
								</div>

								<div className="text-xs text-dark/60 mt-2 inline-flex text-center md:text-left items-center md:items-start gap-2">
									<FiInfo className="text-dark/60 mt-1 hidden md:inline-block" size={24} />
									<span>
										We will try to respond to emails within 2-3 business days. If you are experiencing a medical emergency, please contact your local hospital or emergency services immediately.
									</span>
								</div>
							</form>
					</div>
			</section>
			<Footer />
		</>
	);
}
