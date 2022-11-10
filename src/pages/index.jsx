import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import logoSomdobomk from '@/images/logos/somdobomk.png'
import logoCrossland from '@/images/logos/crossland.png'
import logoSct from '@/images/logos/logo-sct.svg'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function Resume() {
  let resume = [
    {
      company: 'Safety Compliance and Training',
      title: 'Web Developer',
      logo: logoSct,
      start: '2020',
      end: {
        label: '2022',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Freelance Frontend Web Developer',
      title: 'Web Developer',
      logo: logoSomdobomk,
      start: '2020',
      end: {
        label: 'current',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Crossland Oilfield Services',
      title: 'Network Admin',
      logo: logoCrossland,
      start: '2016',
      end: '2020',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button
        href="resume.pdf"
        variant="secondary"
        className="group mt-6 w-full"
      >
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-orange-500 dark:text-zinc-200 dark:hover:text-orange-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-orange-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - David Zapico</title>
        <meta
          name="description"
          content="I’m David Zapico. I live in San Antonio, TX, where I tinker with all my hobbies."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div cssName="lg:pl-20">
            {/* <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div> */}
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m David Zapico. I live in San Antonio, TX, where I tinker with
              all my hobbies.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                ab totam officiis assumenda nostrum modi suscipit fugiat eius,
                reprehenderit velit quam illo, quasi minima! Earum mollitia
                accusamus ipsam pariatur saepe!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                deserunt iste fugiat nobis, voluptas architecto ratione alias
                corrupti quo libero a sequi eveniet expedita hic in omnis nihil
                velit maiores.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                laborum, aperiam quisquam quasi dolorum beatae. Ab magnam
                distinctio, exercitationem cum odio reiciendis placeat nihil
                obcaecati consectetur veritatis, molestiae maiores iure?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam, illum voluptate! Praesentium tempore, necessitatibus
                at id quod hic corporis ducimus alias perferendis, enim
                laudantium, soluta deserunt aspernatur omnis similique dolorum?
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://github.com/Somdobomk" icon={GitHubIcon}>
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/somdobomk/"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>

              <SocialLink
                href="https://www.linkedin.com/in/davidzapicojr/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="https://twitter.com/somdobomk"
                icon={TwitterIcon}
                className="mt-4"
              >
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="mailto:contact@davidzapico.dev"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                contact@davidzapico.dev
              </SocialLink>
            </ul>
            {/* <div className="mt-24 md:mt-28">
              <div className="max-w-xl grid-cols-1">
                <Resume />
              </div>
            </div> */}
          </div>
        </div>
      </Container>
    </>
  )
}
