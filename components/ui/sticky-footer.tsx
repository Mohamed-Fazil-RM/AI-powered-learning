import React from 'react';
import { cn } from '../../lib/utils';
import { motion, useReducedMotion } from 'motion/react';
import {
	FacebookIcon,
	FrameIcon,
	InstagramIcon,
	LinkedinIcon,
	YoutubeIcon,
} from 'lucide-react';
import { Button } from './button';
import Logo from '../Logo';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}
interface FooterLinkGroup {
	label: string;
	links: FooterLink[];
}

type StickyFooterProps = React.ComponentProps<'footer'>;

export function StickyFooter({ className, ...props }: StickyFooterProps) {
	return (
		<footer
			className={cn('relative h-auto lg:h-[550px] w-full bg-white', className)}
			style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
			{...props}
		>
			<div className="lg:fixed bottom-0 lg:h-[550px] w-full bg-white">
				<div className="lg:sticky lg:top-[calc(100vh-550px)] h-full overflow-y-auto custom-scrollbar">
					<div className="relative flex size-full flex-col justify-between gap-5 border-t px-6 pt-12 pb-6 md:px-12">
						<div
							aria-hidden
							className="absolute inset-0 isolate z-0 contain-strict pointer-events-none overflow-hidden"
						>
							<div className="bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,rgba(59,130,246,0.06)_0,hsla(0,0%,55%,.02)_50%,rgba(59,130,246,0.01)_80%)] absolute top-0 left-0 h-[320px] w-[640px] -translate-y-[87.5px] -rotate-45 rounded-full" />
							<div className="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(59,130,246,0.04)_0,rgba(59,130,246,0.01)_80%,transparent_100%)] absolute top-0 left-0 h-[320px] w-[240px] translate-x-[5%] -translate-y-[50%] -rotate-45 rounded-full" />
						</div>
						
						<div className="relative z-10 mt-4 flex flex-col gap-12 lg:flex-row xl:mt-0">
							<AnimatedContainer className="w-full max-sm min-w-[320px] space-y-6">
								<div className="flex items-center gap-3">
                  <Logo size={48} />
                  <span className="text-3xl font-black font-display text-gray-900 tracking-tight">LearnEzily</span>
                </div>
								<p className="text-gray-600 mt-4 text-lg font-medium leading-relaxed max-w-md">
									The future of education is personal. Empowering learners worldwide with adaptive, AI-driven infrastructure to master any skill 10x faster.
								</p>
								<div className="flex gap-3">
									{socialLinks.map((link, idx) => (
										<Button key={idx} size="icon" variant="outline" className="size-11 rounded-full hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 transition-all">
											<link.icon className="size-5" />
										</Button>
									))}
								</div>
							</AnimatedContainer>
              
							<div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full relative z-10">
                {footerLinkGroups.map((group, index) => (
                  <AnimatedContainer
                    key={group.label}
                    delay={0.1 + index * 0.1}
                    className="w-full"
                  >
                    <div className="mb-6 md:mb-0">
                      <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-6">{group.label}</h3>
                      <ul className="text-gray-700 space-y-3 text-base font-semibold">
                        {group.links.map((link) => (
                          <li key={link.title}>
                            <a
                              href={link.href}
                              className="hover:text-blue-600 inline-flex items-center transition-all duration-300"
                            >
                              {link.icon && <link.icon className="me-2 size-5" />}
                              {link.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimatedContainer>
                ))}
              </div>
						</div>
            
						<div className="relative z-10 text-gray-400 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-6 pb-2 text-[11px] font-bold uppercase tracking-widest md:flex-row">
							<p>© 2026 LearnEzily, Inc. All rights reserved.</p>
							<div className="flex gap-8">
                <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
                <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
                <a href="#" className="hover:text-gray-900 transition-colors">Cookies</a>
              </div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

const socialLinks = [
	{ title: 'Facebook', href: '#', icon: FacebookIcon },
	{ title: 'Instagram', href: '#', icon: InstagramIcon },
	{ title: 'Youtube', href: '#', icon: YoutubeIcon },
	{ title: 'LinkedIn', href: '#', icon: LinkedinIcon },
];

const footerLinkGroups: FooterLinkGroup[] = [
	{
		label: 'Learning',
		links: [
			{ title: 'Personalized Paths', href: '#' },
			{ title: 'AI Tutoring', href: '#' },
			{ title: 'Skill Analysis', href: '#' },
			{ title: 'Certification', href: '#' },
			{ title: 'Pricing Plans', href: '#' },
		],
	},
	{
		label: 'Solutions',
		links: [
			{ title: 'Individual Learners', href: '#' },
			{ title: 'Enterprise Teams', href: '#' },
			{ title: 'Higher Ed', href: '#' },
			{ title: 'High Schools', href: '#' },
			{ title: 'Hiring Partners', href: '#' },
		],
	},
	{
		label: 'Support',
		links: [
			{ title: 'Help Center', href: '#' },
			{ title: 'Documentation', href: '#' },
			{ title: 'Community Forum', href: '#' },
			{ title: 'Status Page', href: '#' },
			{ title: 'Contact Support', href: '#' },
		],
	},
	{
		label: 'Company',
		links: [
			{ title: 'About Us', href: '#' },
			{ title: 'Leadership', href: '#' },
			{ title: 'Careers', href: '#' },
			{ title: 'Press Kit', href: '#' },
			{ title: 'Contact Us', href: '#' },
		],
	},
];

type AnimatedContainerProps = React.ComponentProps<typeof motion.div> & {
	children?: React.ReactNode;
	delay?: number;
};

function AnimatedContainer({
	delay = 0.1,
	children,
	...props
}: AnimatedContainerProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div {...(props as any)}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			{...props}
		>
			{children}
		</motion.div>
	);
}