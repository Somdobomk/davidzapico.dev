import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - David Zapico</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="16” MacBook Pro, M1 Pro, 16GB RAM (2021)">
              I was using an Intel-based 16” MacBook Pro prior to this and the
              difference is night and day. I’ve never heard the fans turn on a
              single time, and the battery seems to last forever.
            </Tool>
            <Tool title="16” Macbook Pro, Intel 6‑core 9th‑gen i7, 16GB RAM (2019)">
              This was the Intel-based Macbook Pro prior to purchasing the M1
              Pro Macbook and it worked great for me. I keep it up-to-date but
              other than that it just stays put away.
            </Tool>
            <Tool title="MSI Summit E15, Intel 6-core 11th-gen i7, 16GB RAM">
              The VA gave me this laptop when I was attending the University of
              Texas at Austin Fullstack Web Developer Bootcamp. I keep it up to
              date and also use WSL (Windows Subsystem Linux) with Arch Linux. I
              alternate using the M1 Macbook Pro and this Windows laptop.
            </Tool>
            <Tool title="Custom Desktop, Intel 8-core 9th-gen i9-9900K, 32GB RAM">
              I use this desktop as my gaming machine but also have WSL (Windows
              Subsystem Linux) so I can tinker around using Arch Linux.
            </Tool>
            <Tool title="Keychron K6 Keyboard">
              This keyboard is great because it allows me to connect via
              bluetooth up to 3 devices. I can switch between MacOS and Windows
              layout by toggling a switch.
            </Tool>
            <Tool title="Logitech MX Master 3 Mouse">
              This mouse lets me connect to 3 devices via bluetooth. It works
              great paired with the Keychron K6 keyboard.
            </Tool>
            <Tool title="LG 49WL95C-W Ultrawide">
              This monitor is impressive! I can have up to 4 browser windows
              open side-by-side and won’t have to scroll sideways to view the
              websites.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="VS Code">
              I don’t care if it’s missing all of the fancy IDE features
              everyone else relies on, VS Code is still the best text editor
              ever made. I’m able to use my config in Codespaces in the browser.
            </Tool>
            <Tool title="Hyper Terminal">
              I’m honestly not even sure what features I get with this that
              aren’t just part of the macOS Terminal but it’s what I use.
            </Tool>
            <Tool title="Warp Terminal">
              I have been testing out this new terminal for a few months and it
              feels great. It’s a Rust based terminal with AI built-in and feels
              like a code editor.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Raycast">
              I replaced Alfred with Raycast and it is amazing. It allowed me to
              uninstall some other apps such as Rectangle (window manager).
              Raycast has it built-in and also has an extensive library for
              plugins. I hope they make a Windows version.
            </Tool>
            <Tool title="Arc Browser">
              My daily driver browser. Arc Browser aims to take on Google Chrome
              and Safari as a more efficient (space-wise) and productive way to
              browse the web with split view, easal and notes.
            </Tool>
            <Tool title="Brave Browser">
              Brave was my daily browser for several years until Arc Browser
              sent me an invite to early access. Brave brings truly independent
              search, free video calls, offline playlists, even a customizable
              news feed. All fully private.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
