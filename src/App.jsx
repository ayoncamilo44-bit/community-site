import { Link, NavLink, Route, Routes } from 'react-router-dom'

const discussions = [
  {
    title: 'Building sustainable routines together',
    category: 'Wellbeing',
    members: '312 members',
    excerpt: 'Share your weekly rhythm, practical habits, and what keeps you focused long-term.'
  },
  {
    title: 'Career pivots and new opportunities',
    category: 'Growth',
    members: '489 members',
    excerpt: 'Discuss transitions, learning paths, confidence-building, and staying motivated.'
  },
  {
    title: 'Creative projects that matter',
    category: 'Creativity',
    members: '278 members',
    excerpt: 'Swap ideas, concept feedback, and inspiration for meaningful work that lasts.'
  }
]

const topics = [
  'Personal development',
  'Community building',
  'Work-life balance',
  'Career leadership',
  'Mindful routines',
  'Creative strategy',
  'Networking',
  'Wellness and energy'
]

const memberSpotlights = [
  { name: 'Alicia M.', role: 'Community Host', detail: 'Helps members turn ideas into action with thoughtful conversations.' },
  { name: 'Jordan T.', role: 'Mentor', detail: 'Guides people through professional growth and personal clarity.' },
  { name: 'Reina S.', role: 'Creative Lead', detail: 'Connects communities with storytelling and impactful experiences.' }
]

const stats = [
  { value: '18k+', label: 'Community members' },
  { value: '1.2k', label: 'Weekly discussions' },
  { value: '92%', label: 'Member satisfaction' },
  { value: '24/7', label: 'Supportive space' }
]

function Layout({ children }) {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">TTM</div>
          <div>
            <div className="brand-name">TTM Your Way</div>
            <div className="brand-tag">Community</div>
          </div>
        </div>

        <nav className="nav" aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/discussions">Discussions</NavLink>
          <NavLink to="/topics">Topics</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>

        <div className="nav-actions">
          <button className="secondary-button">Log in</button>
          <button className="primary-button">Join free</button>
        </div>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <div>
          <div className="brand-name">TTM Your Way</div>
          <p>Built for meaningful conversations and authentic connection.</p>
        </div>
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/topics">Topics</Link>
          <Link to="/discussions">Discussions</Link>
        </div>
      </footer>
    </div>
  )
}

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">A better way to connect</span>
          <h1>Bring your ideas, energy, and ambition into a thriving community.</h1>
          <p>
            TTM Your Way is a modern online space where people discover meaningful conversations,
            build lasting relationships, and grow with intention.
          </p>

          <div className="hero-actions">
            <button className="primary-button large">Join the community</button>
            <button className="secondary-button large">Explore topics</button>
          </div>

          <div className="social-proof">
            <div>
              <strong>4.9/5</strong>
              <span>community rating</span>
            </div>
            <div>
              <strong>250+</strong>
              <span>new conversations this week</span>
            </div>
          </div>
        </div>

        <div className="hero-panel">
          <div className="mini-card highlight-card">
            <span>Trending</span>
            <h3>How are you building a life that feels aligned?</h3>
            <p>1,283 members sharing practical insights and honest reflections.</p>
          </div>

          <div className="mini-card stat-grid">
            {stats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <span className="eyebrow">Featured discussions</span>
          <h2>Fresh conversation worth joining.</h2>
        </div>

        <div className="discussion-grid">
          {discussions.map((discussion) => (
            <article key={discussion.title} className="discussion-card">
              <span className="pill">{discussion.category}</span>
              <h3>{discussion.title}</h3>
              <p>{discussion.excerpt}</p>
              <div className="card-meta">
                <span>{discussion.members}</span>
                <button className="link-button">Join thread</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block spotlight-block">
        <div className="section-heading">
          <span className="eyebrow">Member spotlights</span>
          <h2>People bringing this community to life.</h2>
        </div>

        <div className="spotlight-grid">
          {memberSpotlights.map((member) => (
            <div className="spotlight-card" key={member.name}>
              <div className="avatar">{member.name.charAt(0)}</div>
              <div>
                <h3>{member.name}</h3>
                <span>{member.role}</span>
              </div>
              <p>{member.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function DiscussionsPage() {
  return (
    <div className="inner-page">
      <div className="page-header">
        <span className="eyebrow">Discussions</span>
        <h1>Engage with the people and ideas shaping our community.</h1>
      </div>

      <div className="discussion-list">
        {discussions.map((discussion) => (
          <article className="list-card" key={discussion.title}>
            <div className="list-card-top">
              <span className="pill">{discussion.category}</span>
              <span className="mini-count">{discussion.members}</span>
            </div>
            <h3>{discussion.title}</h3>
            <p>{discussion.excerpt}</p>
            <button className="secondary-button">View discussion</button>
          </article>
        ))}
      </div>
    </div>
  )
}

function TopicsPage() {
  return (
    <div className="inner-page">
      <div className="page-header">
        <span className="eyebrow">Topics</span>
        <h1>Explore the conversations and themes that matter most.</h1>
      </div>

      <div className="topics-grid">
        {topics.map((topic) => (
          <div key={topic} className="topic-card">
            <span>{topic}</span>
            <button className="link-button">Explore</button>
          </div>
        ))}
      </div>
    </div>
  )
}

function AboutPage() {
  return (
    <div className="inner-page about-page">
      <div className="page-header narrow">
        <span className="eyebrow">About</span>
        <h1>TTM Your Way was built to help people feel seen, heard, and connected.</h1>
      </div>

      <div className="about-grid">
        <div className="info-card">
          <h3>Our mission</h3>
          <p>
            We create a welcoming space where conversations move beyond small talk and into meaningful
            connection, thoughtful support, and genuine progress.
          </p>
        </div>

        <div className="info-card">
          <h3>What you’ll find</h3>
          <p>
            Warm community energy, value-driven discussions, practical ideas, and room for personal and
            professional growth alike.
          </p>
        </div>

        <div className="info-card">
          <h3>Who it’s for</h3>
          <p>
            Curious people, creators, professionals, mentors, and anyone looking for a positive place to
            connect and grow.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/discussions" element={<DiscussionsPage />} />
        <Route path="/topics" element={<TopicsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Layout>
  )
}
