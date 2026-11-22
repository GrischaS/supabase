import { useMemo, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  Bell,
  Box,
  Check,
  ChevronDown,
  CircleHelp,
  Code2,
  Command,
  FileCode2,
  FolderGit2,
  GitBranch,
  Github,
  Globe2,
  Hammer,
  LayoutDashboard,
  LockKeyhole,
  Menu,
  MessageSquare,
  MoreHorizontal,
  PanelLeft,
  Play,
  Plus,
  Search,
  Send,
  Settings2,
  Sparkles,
  TerminalSquare,
  UserRound,
  X,
  Zap,
} from "lucide-react";

type Message = { role: "user" | "assistant"; text: string; time: string };

const starterMessages: Message[] = [
  {
    role: "assistant",
    text: "Guten Morgen, Grigori. Ich bin Georg, dein AI Engineering Partner. Was möchtest du heute bauen?",
    time: "09:41",
  },
  {
    role: "user",
    text: "Prüfe den aktuellen Workspace und schlage die nächsten drei Schritte für den Enterprise-Launch vor.",
    time: "09:42",
  },
  {
    role: "assistant",
    text: "Ich habe den Workspace analysiert. Der schnellste Weg zum Launch ist: 1) Authentifizierung und Rollenmodell härten, 2) Preview-Build als isolierten Job ausführen, 3) Deployment erst nach einem erfolgreichen Quality Gate freigeben. Ich kann mit Schritt 1 beginnen.",
    time: "09:42",
  },
];

const navItems = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "Georg Chat", icon: MessageSquare, active: true },
  { label: "Projects", icon: Box },
  { label: "Deployments", icon: RocketIcon },
];

function RocketIcon(props: { size?: number; strokeWidth?: number }) {
  return <Zap {...props} />;
}

export default function App() {
  const [messages, setMessages] = useState<Message[]>(starterMessages);
  const [draft, setDraft] = useState("");
  const [activeTab, setActiveTab] = useState("Preview");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [modelOpen, setModelOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState("Georg Pro");
  const [notice, setNotice] = useState("");

  const projectStats = useMemo(() => [
    { label: "Build status", value: "Ready", tone: "green" },
    { label: "Last deploy", value: "8 min ago", tone: "blue" },
    { label: "Branch", value: "main", tone: "purple" },
  ], []);

  const sendMessage = () => {
    const text = draft.trim();
    if (!text) return;
    setMessages((current) => [
      ...current,
      { role: "user", text, time: "09:44" },
      { role: "assistant", text: "Verstanden. Ich erstelle einen sicheren Plan und halte Änderungen zunächst als Preview bereit. Du bekommst vor jedem Schreib- oder Deploy-Schritt eine explizite Freigabe.", time: "09:44" },
    ]);
    setDraft("");
  };

  const toast = (text: string) => {
    setNotice(text);
    window.setTimeout(() => setNotice(""), 2600);
  };

  return (
    <div className="georg-shell">
      <header className="topbar">
        <div className="brand-lockup">
          <button className="icon-button mobile-only" onClick={() => setSidebarOpen((open) => !open)} aria-label="Menü"><Menu size={18} /></button>
          <div className="georg-mark"><Sparkles size={17} strokeWidth={2.4} /></div>
          <div><div className="brand-name">Georg <span>AI</span></div><div className="brand-subtitle">Studio</div></div>
        </div>
        <div className="topbar-center"><div className="workspace-pill"><div className="status-dot" /> Grigori Saks / Enterprise Workspace <ChevronDown size={14} /></div></div>
        <div className="topbar-actions"><button className="icon-button" aria-label="Suche"><Search size={18} /></button><button className="icon-button" aria-label="Benachrichtigungen"><Bell size={18} /></button><div className="avatar">GS</div></div>
      </header>

      <div className="app-body">
        <aside className={`sidebar ${sidebarOpen ? "" : "closed"}`}>
          <div className="sidebar-section project-select"><div className="project-icon"><Code2 size={17} /></div><div className="project-copy"><strong>Georg Studio</strong><span>Private workspace</span></div><MoreHorizontal size={17} className="muted" /></div>
          <button className="new-project" onClick={() => toast("Neues Projekt wird vorbereitet") }><Plus size={16} /> Neues Projekt</button>
          <div className="section-label">Workspace</div>
          <nav className="side-nav">{navItems.map(({ label, icon: Icon, active }) => <button key={label} className={`side-link ${active ? "active" : ""}`} onClick={() => toast(`${label} ist in der Vorschau aktiv`)}><Icon size={17} /> <span>{label}</span>{label === "Deployments" && <span className="nav-badge">2</span>}</button>)}</nav>
          <div className="section-label projects-label">Recent projects</div>
          <div className="recent-project"><span className="project-status green" /><div><strong>georg-finance</strong><small>Updated 8 min ago</small></div><GitBranch size={14} /></div>
          <div className="recent-project"><span className="project-status amber" /><div><strong>client-portal</strong><small>Needs review</small></div><GitBranch size={14} /></div>
          <div className="sidebar-spacer" />
          <div className="secure-note"><LockKeyhole size={16} /><div><strong>Enterprise secure</strong><span>Private by default</span></div></div>
          <button className="side-link"><Settings2 size={17} /><span>Settings</span></button>
          <button className="side-link"><CircleHelp size={17} /><span>Help center</span></button>
        </aside>

        <main className="main-stage">
          <div className="content-head"><div><div className="eyebrow"><span className="live-dot" /> LIVE WORKSPACE</div><h1>Good morning, Grigori.</h1><p>Build, review and ship with an AI engineering partner.</p></div><div className="head-actions"><button className="secondary-button" onClick={() => toast("GitHub-Verbindung wird geprüft") }><Github size={16} /> Connect GitHub</button><button className="primary-button" onClick={() => toast("Preview build gestartet") }><Play size={15} fill="currentColor" /> Run preview</button></div></div>
          <div className="stats-row">{projectStats.map((stat) => <div className="stat-card" key={stat.label}><div className={`stat-icon ${stat.tone}`}>{stat.tone === "green" ? <Check size={15} /> : stat.tone === "blue" ? <Activity size={15} /> : <GitBranch size={15} />}</div><div><span>{stat.label}</span><strong>{stat.value}</strong></div></div>)}</div>

          <div className="studio-grid">
            <section className="chat-panel panel-card">
              <div className="panel-head"><div className="panel-title"><div className="georg-mini"><Sparkles size={14} /></div><div><strong>Georg</strong><span>AI engineering partner · Online</span></div></div><div className="model-select-wrap"><button className="model-select" onClick={() => setModelOpen((open) => !open)}><span className="model-dot" />{selectedModel}<ChevronDown size={14} /></button>{modelOpen && <div className="model-menu"><button onClick={() => { setSelectedModel("Georg Pro"); setModelOpen(false); }}>Georg Pro <Check size={13} /></button><button onClick={() => { setSelectedModel("Georg Fast"); setModelOpen(false); }}>Georg Fast</button><button onClick={() => { setSelectedModel("Georg Reasoning"); setModelOpen(false); }}>Georg Reasoning</button></div>}</div></div>
              <div className="chat-history">{messages.map((message, index) => <div className={`message-row ${message.role}`} key={`${message.time}-${index}`}><div className={`message-avatar ${message.role}`}>{message.role === "assistant" ? <Sparkles size={14} /> : "GS"}</div><div className="message-content"><div className="message-meta"><strong>{message.role === "assistant" ? "Georg" : "You"}</strong><span>{message.time}</span></div><div className="message-bubble">{message.text}</div>{message.role === "assistant" && index === messages.length - 1 && <div className="message-tools"><button onClick={() => toast("Plan zur Prüfung markiert")}>Review plan</button><button onClick={() => toast("Änderungen bleiben zunächst in Preview")}>Open preview <ArrowUpRight size={13} /></button></div>}</div></div>)}</div>
              <div className="composer"><div className="composer-tools"><button title="Datei anhängen" onClick={() => toast("Datei-Upload folgt im nächsten Schritt")}><Plus size={17} /></button><button title="Repository-Datei auswählen" onClick={() => toast("Repository-Dateien werden geladen")}><FileCode2 size={16} /></button><span className="composer-hint">Shift + Enter für neue Zeile</span></div><textarea value={draft} onChange={(event) => setDraft(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); sendMessage(); } }} placeholder="Ask Georg to build, review or explain..." /><div className="composer-bottom"><span><LockKeyhole size={12} /> Private session</span><button className="send-button" onClick={sendMessage} aria-label="Nachricht senden"><Send size={16} /></button></div></div>
            </section>

            <aside className="inspector panel-card"><div className="inspector-head"><div><div className="eyebrow">PROJECT</div><h2>georg-finance</h2></div><button className="icon-button"><MoreHorizontal size={18} /></button></div><div className="repo-line"><Github size={14} /> GrischaS / georg-finance <span className="private-tag"><LockKeyhole size={11} /> Private</span></div><div className="inspector-tabs">{["Preview", "Changes", "Logs"].map((tab) => <button key={tab} className={activeTab === tab ? "selected" : ""} onClick={() => setActiveTab(tab)}>{tab}{tab === "Changes" && <span>3</span>}</button>)}</div>{activeTab === "Preview" ? <><div className="preview-window"><div className="preview-toolbar"><span className="browser-dot red" /><span className="browser-dot yellow" /><span className="browser-dot green" /><div className="preview-url"><LockKeyhole size={10} /> preview.georg.ai/georg-finance</div><ArrowUpRight size={13} /></div><div className="preview-content"><div className="preview-logo"><Sparkles size={17} /></div><strong>Georg Finance</strong><span>Enterprise workspace preview</span><div className="preview-bars"><i /><i /><i /></div><button onClick={() => toast("Preview in neuem Tab geöffnet")}>Open preview <ArrowUpRight size={12} /></button></div></div><div className="deploy-card"><div><span className="deploy-label"><span className="live-dot" /> Preview ready</span><strong>Build passed successfully</strong></div><button className="deploy-button" onClick={() => toast("Deployment benötigt noch eine Freigabe")}>Deploy <ArrowUpRight size={14} /></button></div></> : <div className="tab-placeholder">{activeTab === "Changes" ? <><GitBranch size={26} /><strong>3 files changed</strong><span>Review changes with Georg before committing.</span></> : <><TerminalSquare size={26} /><strong>Build log is ready</strong><span>Run a preview build to see live output.</span></>}</div>}<div className="quick-actions"><button onClick={() => toast("Build läuft in einer isolierten Preview") }><Hammer size={15} /> Build</button><button onClick={() => toast("Branch-Auswahl geöffnet")}><GitBranch size={15} /> main</button><button onClick={() => toast("Vercel-Adapter wartet auf Verbindung")}><Globe2 size={15} /> Vercel</button></div></aside>
          </div>
        </main>
      </div>
      {notice && <div className="toast"><Check size={15} /> {notice}<button onClick={() => setNotice("")}><X size={14} /></button></div>}
    </div>
  );
}
