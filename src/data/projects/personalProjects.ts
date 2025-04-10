
import { Project } from './types';

export const personalProjects: Project[] = [
  {
    title: "Journaling Application",
    description: "A personal project to help users maintain and organize their daily journal entries with secure and efficient storage using MongoDB.",
    tech: [
      { name: "MongoDB", category: "database" },
      { name: "Express.js", category: "backend" },
      { name: "Node.js", category: "backend" },
      { name: "JavaScript", category: "language" },
      { name: "CSS", category: "frontend" },
    ],
    challenges: [
      "Designed flexible document schemas to accommodate various journal entry formats",
      "Implemented secure user authentication to protect private journal content",
      "Created an intuitive UI for efficient journal entry management",
    ],
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1470&auto=format&fit=crop",
    githubUrl: "https://github.com",
    liveUrl: "https://www.youtube.com",
    documentation: [
      {
        title: "Overview",
        content: "# Journaling Application\n\nThis application provides users with a digital journaling platform that combines the therapeutic benefits of traditional journaling with modern digital convenience.\n\n## Key Features\n\n- **Daily Entries**: Create and organize journal entries by date\n- **Rich Text Formatting**: Express yourself with formatting options\n- **Mood Tracking**: Track your emotional state over time\n- **Search Functionality**: Easily find past entries\n- **Privacy Controls**: Keep your thoughts secure"
      },
      {
        title: "Architecture",
        content: "## System Architecture\n\n### Frontend\nThe frontend is built with vanilla JavaScript, HTML, and CSS, focusing on a clean and intuitive user interface.\n\n### Backend\nThe backend uses Express.js running on Node.js with the following components:\n\n- **Authentication Service**: Handles user registration and login\n- **Journal Service**: Manages journal entries and metadata\n- **Search Service**: Provides full-text search capabilities\n\n### Database\nMongoDB was chosen for its flexibility with document schemas, allowing for:\n\n- Varied journal entry formats\n- Rich metadata storage\n- Efficient querying\n\n```javascript\n// Example Journal Entry Schema\nconst journalEntrySchema = new mongoose.Schema({\n  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },\n  date: { type: Date, default: Date.now },\n  title: { type: String, required: true },\n  content: { type: String, required: true },\n  mood: { type: String, enum: ['happy', 'sad', 'neutral', 'anxious', 'excited'] },\n  tags: [{ type: String }],\n  isPrivate: { type: Boolean, default: true }\n});\n```"
      },
      {
        title: "Implementation",
        content: "## Implementation Details\n\n### Authentication\n\nThe application uses JWT (JSON Web Tokens) for authentication, providing a secure and stateless authentication mechanism.\n\n```javascript\n// JWT Authentication Middleware\nconst authenticateToken = (req, res, next) => {\n  const authHeader = req.headers['authorization'];\n  const token = authHeader && authHeader.split(' ')[1];\n  \n  if (token == null) return res.sendStatus(401);\n  \n  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {\n    if (err) return res.sendStatus(403);\n    req.user = user;\n    next();\n  });\n};\n```\n\n### Data Storage\n\nJournal entries are stored in MongoDB with indexes on user ID, date, and tags for efficient retrieval.\n\n### Text Search\n\nThe application implements MongoDB's text search capabilities for finding entries based on content.\n\n```javascript\n// Example search implementation\napp.get('/api/entries/search', authenticateToken, async (req, res) => {\n  try {\n    const { query } = req.query;\n    const entries = await JournalEntry.find({\n      userId: req.user.id,\n      $text: { $search: query }\n    }).sort({ score: { $meta: 'textScore' } });\n    \n    res.json(entries);\n  } catch (error) {\n    res.status(500).json({ message: error.message });\n  }\n});\n```"
      },
      {
        title: "User Guide",
        content: "## User Guide\n\n### Getting Started\n\n1. **Create an Account**: Sign up with your email and a secure password\n2. **Login**: Access your journal dashboard\n3. **Create Your First Entry**: Click the 'New Entry' button\n\n### Writing Entries\n\n- **Title**: Give your entry a meaningful title\n- **Content**: Write your thoughts, experiences, or reflections\n- **Mood**: Select your current emotional state\n- **Tags**: Add relevant tags for easier searching later\n- **Privacy**: Choose whether the entry is private or shareable\n\n### Searching and Filtering\n\n- Use the search bar to find entries by content\n- Filter entries by date, mood, or tags\n- Sort entries chronologically or by title\n\n### Account Management\n\n- Update your profile information\n- Change your password regularly\n- Enable two-factor authentication for added security"
      }
    ]
  },
  {
    title: "Article Translator",
    description: "A website for learning Spanish by reading and translating articles using Google Translate API, featuring priority-driven selection and text-to-speech functionality.",
    tech: [
      { name: "React", category: "frontend" },
      { name: "Node.js", category: "backend" },
      { name: "HTML/CSS", category: "frontend" },
      { name: "Google Translate API", category: "backend" },
      { name: "npm", category: "deployment" },
    ],
    challenges: [
      "Integrated Google Translate API for accurate and contextual translations",
      "Implemented text-to-speech functionality for pronunciation assistance",
      "Created a responsive design that works seamlessly across devices",
    ],
    image: "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?q=80&w=1470&auto=format&fit=crop",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Web Journaling Application Concept",
    description: "A mock-up design for a daily journaling application with drawable entries for iPad pencil. This concept explores layout design and UI decisions for a guided journaling app.",
    tech: [
      { name: "React", category: "frontend" },
      { name: "JavaScript", category: "language" },
      { name: "CSS", category: "frontend" },
      { name: "Netlify", category: "deployment" },
    ],
    challenges: [
      "Designed an intuitive interface for digital journaling with Apple Pencil support",
      "Created a guided journaling experience to help users build a consistent routine",
      "Implemented drawable entry capabilities that mimic writing on paper",
    ],
    images: [
      "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517842536804-bf6629e2c291?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544164559-2e84642d931c?q=80&w=1470&auto=format&fit=crop"
    ],
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1470&auto=format&fit=crop",
    githubUrl: "https://github.com",
    liveUrl: "https://marvelous-kelpie-866eb4.netlify.app/",
  },
  {
    title: "ThreeJS Graphics Demonstration",
    description: "A graphical demonstration using ThreeJS to visualize 3D graphics in JavaScript. This project was created to learn and explore ThreeJS capabilities.",
    tech: [
      { name: "ThreeJS", category: "frontend" },
      { name: "JavaScript", category: "language" },
      { name: "HTML5", category: "frontend" },
      { name: "CSS", category: "frontend" },
    ],
    challenges: [
      "Implemented 3D rendering with ThreeJS for interactive graphics",
      "Created optimized models and scenes for web-based 3D visualization",
      "Built responsive controls for camera manipulation and object interaction",
    ],
    images: [
      "https://images.unsplash.com/photo-1544164559-2e84642d931c?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1623946724421-364fd73e811b?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541752177894-e6dae16ad3e6?q=80&w=1348&auto=format&fit=crop"
    ],
    image: "https://images.unsplash.com/photo-1544164559-2e84642d931c?q=80&w=1470&auto=format&fit=crop",
    githubUrl: "https://github.com",
    liveUrl: "https://stalwart-kelpie-24b105.netlify.app/",
  },
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with product management, cart functionality, and payment processing.",
    tech: [
      { name: "React", category: "frontend" },
      { name: "Node.js", category: "backend" },
      { name: "Express.js", category: "backend" },
      { name: "MongoDB", category: "database" },
      { name: "Stripe", category: "backend" },
    ],
    challenges: [
      "Implemented secure payment processing with Stripe",
      "Created a responsive design that works across all devices",
      "Built a custom CMS for product management",
    ],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1470&auto=format&fit=crop",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];
