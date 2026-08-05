const projects = [
  {
    number: "01",
    title: "Human-Aware Robotic Arm",
    type: "Collaborative Robotics · Safety",
    summary:
      "HANA is a vision-guided pick-and-place system that reads hand presence and operator state before delivering a part.",
    proof:
      "Best Prototype · three-zone motion scheme · automatic and manual modes",
    tags: ["Dobot Magician", "Orbbec", "MediaPipe", "Python"],
    visual: "video",
    image: "/portfolio/hana-demo-video.jpg",
    imageAlt:
      "HANA operator-monitor interface detecting a hand and tracking team members during the live demo",
    videoLabel: "HANA / LIVE DEMO",
    videoTitle: "VISION-GUIDED PICK & PLACE",
    github:
      "https://github.com/DavidWang1231/Toyota-Innovation-Challenge-2026",
    video: "https://youtu.be/CwtKIzEQ1do?si=inl6vFvUxomHFXr9",
    deck: "/portfolio/hana-tmmc-presentation.pdf",
  },
  {
    number: "02",
    title: "Personal LDO Regulator Board",
    type: "PCB Design · Power",
    summary:
      "A fabrication-ready 5 V to 3.3 V regulator board taken through the complete Altium schematic-to-layout flow.",
    proof: "NJM2884 · 2-layer PCB · copper pour · thermal relief · DFM review",
    tags: ["Altium Designer", "PCB Layout", "DFM"],
    visual: "ldo",
  },
  {
    number: "03",
    title: "12 V to 5 V Buck Converter",
    type: "Power Electronics · In Progress",
    summary:
      "An in-progress two-layer power board moving through schematic capture, component placement, routing and 3D clearance review.",
    proof:
      "Feedback network · 4.7 µH power stage · input/output filtering · two-layer PCB",
    tags: ["Altium Designer", "Buck Converter", "PCB Layout", "DFM"],
    visual: "buck",
  },
  {
    number: "04",
    title: "150 g Battle Robot",
    type: "Combat Robotics · Completed",
    summary:
      "A completed 150 g combat robot, developed with a team from mechanical packaging through electrical integration and final assembly.",
    proof:
      "Team CAD design contributor · motor, ESC and battery selection · power-distribution planning · hands-on assembly",
    tags: ["Electrical Integration", "Component Selection", "Soldering", "Combat Robotics"],
    visual: "battle",
  },
  {
    number: "05",
    title: "MiniSpice",
    type: "Analog Circuits · Simulation",
    summary:
      "A dependency-free browser circuit simulator with a hand-written Modified Nodal Analysis engine and LU solver.",
    proof: "DC, transient and AC analyses verified against analytical results",
    tags: ["MNA", "Numerical Methods", "JavaScript"],
    visual: "image",
    image:
      "https://raw.githubusercontent.com/DavidWang1231/minispice/main/docs/screenshot-dc.png",
    github: "https://github.com/DavidWang1231/minispice",
    live: "https://davidwang1231.github.io/minispice/",
  },
  {
    number: "06",
    title: "Autonomous Robot Navigation",
    type: "Embedded Software · ROS 2",
    summary:
      "A C++ ROS 2 node that turns raw 2D LiDAR scans into a dynamically sized occupancy-grid costmap.",
    proof:
      "2D LiDAR · dynamic occupancy grid · obstacle-cost falloff · Foxglove",
    tags: ["C++", "ROS 2", "LiDAR", "Docker"],
    visual: "video",
    image: "/portfolio/autonomous-robot-demo.jpg",
    imageAlt:
      "Foxglove Studio visualization of the robot occupancy-grid costmap, obstacle costs, teleoperation controls and camera feed",
    videoLabel: "WATONOMOUS / DEMO",
    videoTitle: "LIDAR → OCCUPANCY GRID",
    video: "https://youtu.be/6_97NwCJwpA",
    github: "https://github.com/DavidWang1231/wato_asd_training",
  },
  {
    number: "07",
    title: "VoltStream",
    type: "Electrical Systems · Monitoring",
    summary:
      "A real-time fault-injection lab for fleets of 600 V three-phase induction motors, with explainable fault detection.",
    proof: "MQTT telemetry · 50-device simulation · live diagnostics",
    tags: ["Three-Phase Motors", "MQTT", "SSE"],
    visual: "image",
    image:
      "https://raw.githubusercontent.com/DavidWang1231/voltstream/main/docs/voltstream-demo.jpg",
    github: "https://github.com/DavidWang1231/voltstream",
    live: "https://voltstream-davidwang.wangjiacheng1231.chatgpt.site",
  },
  {
    number: "08",
    title: "FPGA Neural-Network Accelerator",
    type: "Digital Design · In Progress",
    summary:
      "A from-scratch Verilog inference accelerator, built from a MAC unit toward an MNIST datapath on an Intel MAX 10.",
    proof: "Golden-vector co-simulation · Quartus · TinyTapeout target",
    tags: ["Verilog", "FPGA", "Quartus", "Python"],
    visual: "rtl",
    github: "https://github.com/DavidWang1231/fpga-nn-accelerator",
  },
] as const;

const otherBuilds = [
  {
    index: "A / 01",
    title: "SIGNAL // Signal Defender",
    type: "Browser Game · Software Experiment",
    summary:
      "A PCB-aesthetic bullet-hell shooter built as one dependency-free HTML file, with six modes, bilingual controls and mobile support.",
    proof:
      "Canvas 2D · procedural Web Audio · 23 ships · seeded daily challenge",
    tags: ["Vanilla JavaScript", "Canvas 2D", "Web Audio", "Zero Dependencies"],
    image: "/portfolio/signal-defender-og.png",
    imageAlt:
      "Signal Defender boss fight with PCB traces, projectiles and the Thermal Runaway boss",
    github: "https://github.com/DavidWang1231/signal-defender",
    live: "https://davidwang1231.github.io/signal-defender/",
  },
  {
    index: "A / 02",
    title: "Dou Dizhu Online",
    type: "P2P Multiplayer · Card Game",
    summary:
      "A browser-based Dou Dizhu game for one to three people, with AI-filled seats and serverless peer-to-peer rooms.",
    proof:
      "WebRTC rooms · rules engine + heuristic AI · 720 simulated test rounds",
    tags: ["JavaScript", "WebRTC", "Game AI", "Node Tests"],
    image: "/portfolio/doudizhu-icon.png",
    imageAlt:
      "Dou Dizhu Online app icon showing playing cards and a landlord crown",
    github: "https://github.com/DavidWang1231/doudizhu-online",
    live: "https://davidwang1231.github.io/doudizhu-online/",
  },
] as const;

const experiences = [
  {
    date: "MAY 2026 — PRESENT",
    role: "Electrical Team Member",
    org: "Waterloo Aerial Robotics Group",
    detail:
      "Designing an in-progress 12 V buck-converter power board in Altium, from schematic capture and footprint selection through PCB layout and 3D clearance review.",
  },
  {
    date: "MAY 2026 — PRESENT",
    role: "Electrical Team Member",
    org: "Waterloo Rocketry",
    detail:
      "Assembling and validating avionics PCBs with continuity checks, battery measurements, component-spec confirmation and PCB revision feedback.",
  },
  {
    date: "JAN — APR 2026",
    role: "UX/UI Designer",
    org: "WE Accelerate · Magnify Access",
    detail:
      "Translated client requirements into accessible, multi-role product workflows and Figma specifications. Earned an Outstanding co-op evaluation.",
  },
] as const;

const skillGroups = [
  {
    label: "PROGRAMMING",
    items: ["C++", "Python", "Java", "Verilog HDL"],
  },
  {
    label: "HARDWARE + EDA",
    items: [
      "Altium Designer",
      "KiCad",
      "Quartus Prime",
      "PCB layout",
      "Soldering",
    ],
  },
  {
    label: "ROBOTICS",
    items: ["ROS 2", "Docker", "Foxglove Studio", "LiDAR"],
  },
  {
    label: "DESIGN + SIMULATION",
    items: ["COMSOL Multiphysics", "Figma", "Git / GitHub"],
  },
] as const;

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function ProjectVisual({
  project,
}: {
  project: (typeof projects)[number];
}) {
  if (project.visual === "image") {
    return (
      <div className="project-visual project-image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.image} alt="" loading="lazy" />
      </div>
    );
  }

  if (project.visual === "ldo") {
    return (
      <figure className="project-visual ldo-visual">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="ldo-render"
          src="/portfolio/ldo-board-3d.png"
          alt="3D assembly render of the 5 volt to 3.3 volt LDO regulator PCB"
          loading="lazy"
        />
        <div className="ldo-layout-frame">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/portfolio/ldo-board-layout.png"
            alt="Two-layer PCB layout showing copper pours, routed traces and component footprints"
            loading="lazy"
          />
          <span>02 / PCB LAYOUT</span>
        </div>
        <figcaption>
          <span>01 / 3D ASSEMBLY</span>
          <strong>5V → 3V3</strong>
        </figcaption>
      </figure>
    );
  }

  if (project.visual === "buck") {
    return (
      <figure className="project-visual buck-visual">
        <div className="buck-panel buck-panel-main">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/portfolio/buck-converter-3d.png"
            alt="3D assembly render of the in-progress 12 volt to 5 volt buck converter board"
            loading="lazy"
          />
          <span>03 / 3D ASSEMBLY</span>
        </div>
        <div className="buck-side">
          <div className="buck-panel">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/portfolio/buck-converter-layout.png"
              alt="Two-layer routed PCB layout for the buck converter"
              loading="lazy"
            />
            <span>02 / PCB LAYOUT</span>
          </div>
          <div className="buck-panel">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/portfolio/buck-converter-schematic.png"
              alt="Buck converter schematic showing 12 volt input, switching stage, feedback network and 5 volt output"
              loading="lazy"
            />
            <span>01 / SCHEMATIC</span>
          </div>
        </div>
        <figcaption>
          <strong>IN PROGRESS</strong>
          <span>12V → 5V</span>
        </figcaption>
      </figure>
    );
  }

  if (project.visual === "battle") {
    return (
      <figure className="project-visual battle-visual">
        <div className="battle-finished">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/portfolio/battle-robot-finished.jpg"
            alt="Completed 150 gram battle robot with a black chassis, blue armor and dual vertical weapon supports"
            loading="lazy"
          />
          <span>FINAL BUILD / 150 g</span>
        </div>
        <div className="battle-details">
          <div className="battle-detail battle-assembly">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/portfolio/battle-robot-assembly.jpg"
              alt="Soldering the power connector during final electrical assembly of the battle robot"
              loading="lazy"
            />
            <span>03 / ASSEMBLY + SOLDERING</span>
          </div>
          <div className="battle-detail battle-prototype">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/portfolio/battle-robot-prototype.jpg"
              alt="150 gram battle robot chassis beside the motor controller, receiver and wiring under evaluation"
              loading="lazy"
            />
            <span>02 / ELECTRICAL PROTOTYPE</span>
          </div>
          <div className="battle-detail battle-cad">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/portfolio/battle-robot-cad.png"
              alt="Team SolidWorks assembly for the 150 gram battle robot"
              loading="lazy"
            />
            <span>01 / TEAM CAD</span>
          </div>
        </div>
        <figcaption>
          <strong>BUILD COMPLETE</strong>
          <span>150 g CLASS · DESIGNED, WIRED + ASSEMBLED</span>
        </figcaption>
      </figure>
    );
  }

  if (project.visual === "video") {
    return (
      <a
        className="project-visual video-visual"
        href={project.video}
        target="_blank"
        rel="noreferrer"
        aria-label={`Watch the ${project.title} demo on YouTube`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
        />
        <span className="video-shade" />
        <span className="video-label">{project.videoLabel}</span>
        <span className="play-button" aria-hidden="true">
          ▶
        </span>
        <span className="video-note">
          {project.videoTitle}
          <small>WATCH ON YOUTUBE ↗</small>
        </span>
      </a>
    );
  }

  return (
    <div className="project-visual rtl-visual" aria-hidden="true">
      <span className="rtl-title">MAC_ARRAY</span>
      <span className="rtl-block block-a">INT8<br />WGT</span>
      <span className="rtl-block block-b">×</span>
      <span className="rtl-block block-c">ACC</span>
      <span className="rtl-line line-a" />
      <span className="rtl-line line-b" />
      <span className="rtl-wave">▁▁▇▇▁▇▁▁▇▇▇▁</span>
      <span className="rtl-status">IN PROGRESS / GOLDEN VECTOR</span>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#work">
        Skip to selected work
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Jiacheng Wang, home">
          <span>JW</span>
          <small>EE / 26</small>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
        </nav>
        <a
          className="header-link"
          href="/portfolio/Jiacheng_Wang_Resume_Fall2026.pdf"
          target="_blank"
        >
          Résumé <Arrow />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> AVAILABLE FOR FALL 2026 CO-OP
          </p>
          <h1>
            I build across
            <br />
            the stack—from
            <br />
            <em>circuits to systems.</em>
          </h1>
          <p className="hero-intro">
            I’m <strong>Jiacheng Wang</strong>, an Electrical Engineering co-op
            student at the University of Waterloo. I design hardware, embedded
            systems and engineering tools that are built to be understood,
            tested and used.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore my work <span aria-hidden="true">↓</span>
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/DavidWang1231"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <Arrow />
            </a>
          </div>
        </div>

        <div className="hero-console" aria-label="Engineering focus summary">
          <div className="console-top">
            <span>SYSTEM / J.WANG</span>
            <span className="console-live">● ONLINE</span>
          </div>
          <div className="console-grid">
            <div className="signal-panel">
              <span className="axis axis-x" />
              <span className="axis axis-y" />
              <span className="wave wave-a" />
              <span className="wave wave-b" />
              <span className="signal-label">VOUT / 3.30 V</span>
            </div>
            <div className="console-data">
              <div>
                <small>PCB</small>
                <strong>POWER</strong>
                <span>ALTIUM / KICAD</span>
              </div>
              <div>
                <small>RTL</small>
                <strong>VERILOG</strong>
                <span>MAX 10 / FPGA</span>
              </div>
              <div>
                <small>BOT</small>
                <strong>ROS 2</strong>
                <span>LIDAR / VISION</span>
              </div>
            </div>
          </div>
          <div className="console-footer">
            <span>43° 28&apos; N</span>
            <span>WATERLOO, ON</span>
            <span>REV. 2026.07</span>
          </div>
        </div>

        <div className="hero-metrics">
          <div>
            <strong>2</strong>
            <span>Student design teams</span>
          </div>
          <div>
            <strong>01</strong>
            <span>Best Prototype award</span>
          </div>
          <div>
            <strong>5→3.3</strong>
            <span>Volts, designed end-to-end</span>
          </div>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="kicker">01 / SELECTED WORK</p>
          <h2>Proof is in the build.</h2>
          <p>
            Projects spanning power electronics, digital design, robotics and
            electrical-system software.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <ProjectVisual project={project} />
              <div className="project-body">
                <div className="project-meta">
                  <span>{project.number}</span>
                  <span>{project.type}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <p className="project-proof">{project.proof}</p>
                <ul className="tag-list" aria-label={`${project.title} tools`}>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="project-links">
                  {"github" in project && project.github ? (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      View repository <Arrow />
                    </a>
                  ) : (
                    <span>Hardware case study</span>
                  )}
                  {"live" in project && project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live demo <Arrow />
                    </a>
                  )}
                  {"video" in project && project.video && (
                    <a href={project.video} target="_blank" rel="noreferrer">
                      Watch demo <Arrow />
                    </a>
                  )}
                  {"deck" in project && project.deck && (
                    <a href={project.deck} target="_blank">
                      Presentation (PDF) <Arrow />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="other-builds-section" aria-labelledby="other-builds-title">
        <div className="other-builds-heading">
          <p className="kicker">APPENDIX / OTHER BUILDS</p>
          <h2 id="other-builds-title">Built for the fun of figuring it out.</h2>
          <p>
            Smaller software experiments that explore real-time interaction,
            game systems and browser-native engineering.
          </p>
        </div>
        <div className="other-builds-grid">
          {otherBuilds.map((project) => (
            <article className="other-build-card" key={project.title}>
              <div className="other-build-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={project.image} alt={project.imageAlt} loading="lazy" />
              </div>
              <div className="other-build-body">
                <div className="other-build-meta">
                  <span>{project.index}</span>
                  <span>{project.type}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <p className="other-build-proof">{project.proof}</p>
                <ul className="tag-list" aria-label={`${project.title} tools`}>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    View repository <Arrow />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Play online <Arrow />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-heading inverse">
          <p className="kicker">02 / EXPERIENCE</p>
          <h2>From schematic to flight hardware.</h2>
        </div>
        <div className="timeline">
          {experiences.map((experience, index) => (
            <article className="timeline-row" key={experience.org}>
              <span className="timeline-index">0{index + 1}</span>
              <p className="timeline-date">{experience.date}</p>
              <div className="timeline-title">
                <h3>{experience.role}</h3>
                <p>{experience.org}</p>
              </div>
              <p className="timeline-detail">{experience.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="toolkit-section">
        <div className="section-heading">
          <p className="kicker">03 / TOOLKIT</p>
          <h2>Hands-on by default.</h2>
        </div>
        <div className="skill-grid">
          {skillGroups.map((group, index) => (
            <article key={group.label}>
              <span className="skill-number">0{index + 1}</span>
              <h3>{group.label}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-lead">
          <p className="kicker">04 / ABOUT</p>
          <h2>
            Curious about the layer
            <br />
            <em>underneath.</em>
          </h2>
        </div>
        <div className="about-copy">
          <p>
            Whether I’m tracing a rail on a PCB, converting LiDAR returns into
            a costmap, or writing a simulator from first principles, I want to
            understand the mechanism—not just make the demo work.
          </p>
          <p>
            At Waterloo, I’m building that depth through Electrical Engineering
            coursework, design teams, and self-directed projects. I’m currently
            looking for a Fall 2026 co-op where I can contribute to hardware,
            embedded or electrical systems with a team that values careful
            engineering.
          </p>
          <div className="education-card">
            <div>
              <span>UNIVERSITY OF WATERLOO</span>
              <strong>BASc, Electrical Engineering (Co-op)</strong>
            </div>
            <span>2025 — 2030</span>
          </div>
        </div>
      </section>

      <footer>
        <p className="footer-prompt">Have a hard problem?</p>
        <a className="footer-email" href="mailto:j2873wan@uwaterloo.ca">
          Let&apos;s build it. <Arrow />
        </a>
        <div className="footer-bottom">
          <span>Jiacheng Wang · Electrical Engineering</span>
          <div>
            <a
              href="https://github.com/DavidWang1231"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="/portfolio/Jiacheng_Wang_Resume_Fall2026.pdf"
              target="_blank"
            >
              Résumé
            </a>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
