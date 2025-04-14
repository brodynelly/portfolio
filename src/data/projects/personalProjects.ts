
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
    title: "iCARE Health Management Systems",
    description: "A comprehensive healthcare management system built with Django that streamlines patient care, document management, and healthcare provider workflows. Features role-based access control, customizable medical documents, and PDF generation capabilities.",
    tech: [
      { name: "Django", category: "backend" },
      { name: "PostGresSQL", category: "database" },
      { name: "Bootstrap", category: "frontend" },
      { name: "Docker", category: "deployment" },
      { name: "jQuery", category: "frontend" },
    ],
    challenges: [
      "Implemented complex role-based access control for doctors, nurses, and administrators",
      "Developed a flexible document system with customizable fields and PDF generation",
      "Created a geocode-based organization system for patient and provider management",
      "Integrated multiple Django apps for modular functionality while maintaining data consistency", 
    ],
images: [
      "https://private-user-images.githubusercontent.com/127979848/433532753-3e47f786-4a8e-4b22-8a82-9ca337fad865.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2NjA2MDksIm5iZiI6MTc0NDY2MDMwOSwicGF0aCI6Ii8xMjc5Nzk4NDgvNDMzNTMyNzUzLTNlNDdmNzg2LTRhOGUtNGIyMi04YTgyLTljYTMzN2ZhZDg2NS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxNFQxOTUxNDlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mNGU5NTFmNGI1YmQ0MTZlNGMzNTI0ZWJhYWEwOGZlZGQ0ODZlZWE1YTQzZjM4YmRlODZkMGJlMzZlMTc5OWIyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.57ej8OFd4NhiXrC-lpuxTfbbhXeRznlO3EK-9ZeSRMg",
      "https://private-user-images.githubusercontent.com/127979848/433514158-06b74985-378c-4dd2-8515-770670809478.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2NTkyNDMsIm5iZiI6MTc0NDY1ODk0MywicGF0aCI6Ii8xMjc5Nzk4NDgvNDMzNTE0MTU4LTA2Yjc0OTg1LTM3OGMtNGRkMi04NTE1LTc3MDY3MDgwOTQ3OC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxNFQxOTI5MDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xMmFiMmRkNTZlZjU4NjRkMjA4MzlkODEzYWUyNzIyOWE2MjYwOGViN2RjNTZhYjI2NTYxOWU1MjcwMWM5ODEzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.e8vzYQNOw3n4PENpyBCWiSbmKyqoVViBtn5JateSyVM",
      "https://private-user-images.githubusercontent.com/127979848/433514499-468f9897-7297-42f1-be9a-0ed71b471509.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2NTkyNDMsIm5iZiI6MTc0NDY1ODk0MywicGF0aCI6Ii8xMjc5Nzk4NDgvNDMzNTE0NDk5LTQ2OGY5ODk3LTcyOTctNDJmMS1iZTlhLTBlZDcxYjQ3MTUwOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxNFQxOTI5MDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yZTkxM2YxNzEwY2EyNzQ3M2E2ZWIxNWM5NGQwYmRmMjk2ZDgxNTJmODk1NzJiYTFhOWU5ZTgxYTE3MDFmYTNmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.2lY4gdsxRwGw-l3mA1XOuH6bTGd8NFGF-j0fKbXF0uQ", 
      "https://private-user-images.githubusercontent.com/127979848/433514662-4f7696fd-9510-4fc5-93d3-190f70434e08.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2NTkyNDMsIm5iZiI6MTc0NDY1ODk0MywicGF0aCI6Ii8xMjc5Nzk4NDgvNDMzNTE0NjYyLTRmNzY5NmZkLTk1MTAtNGZjNS05M2QzLTE5MGY3MDQzNGUwOC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxNFQxOTI5MDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03ZDYyNmU3NzM2NThkNzNhMjBkMmM0ZjVlZWFkNmMwNjY4ZDI3MDVlMjA3MmZjNzQ3Y2QyODNhYzE0NGY3ZDdkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.8AfmkTAcaiaZ8nXCCb8sD1HY6MHn4gVHYQvoN6kT9ao", 
      "https://private-user-images.githubusercontent.com/127979848/433514872-84e5d6c9-70d3-44fd-b6d8-2d48264a3e38.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2NTkyNDMsIm5iZiI6MTc0NDY1ODk0MywicGF0aCI6Ii8xMjc5Nzk4NDgvNDMzNTE0ODcyLTg0ZTVkNmM5LTcwZDMtNDRmZC1iNmQ4LTJkNDgyNjRhM2UzOC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxNFQxOTI5MDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lOWM1ZTkwMmQ1ZTc4ZGQyNzhiMzg1ZGM1MDM4ZTIzMjA2OTIyZDNjZTk1NDEwNjgyZTFhMzliNDQ4OGY1NmRkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.dZn6lINRQB5Zz4PstU_EoPLjmJvRJExVnOevB8glsAE", 
      "https://private-user-images.githubusercontent.com/127979848/433515126-89691628-a70f-4d0f-b817-26ec13caaed1.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2NTkyNDMsIm5iZiI6MTc0NDY1ODk0MywicGF0aCI6Ii8xMjc5Nzk4NDgvNDMzNTE1MTI2LTg5NjkxNjI4LWE3MGYtNGQwZi1iODE3LTI2ZWMxM2NhYWVkMS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxNFQxOTI5MDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zODhhNGM5MTgxN2NmMWY3YTljYTg4YjFmOThjY2JmNTY5ODkzZTRkYzk3MjY4ZTk1YjdmNjc4MzY2MTg0Y2E3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.SrOXlvGe9vny_fpzW_K3n-8HvJ-mB6D1O8gz0hXXl_Y"
   
    ], 
    image: "https://sdmntpreastus2.oaiusercontent.com/files/00000000-bdf0-61f6-bd6a-72eaa06cad91/raw?se=2025-04-14T20%3A45%3A57Z&sp=r&sv=2024-08-04&sr=b&scid=1e42519b-139b-538a-98fb-7378ae1064c0&skoid=3f3a9132-9530-48ef-96b7-fee5a811733f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-14T11%3A30%3A06Z&ske=2025-04-15T11%3A30%3A06Z&sks=b&skv=2024-08-04&sig=E%2BljvvrCUVD3ftVTJh492pOWDTz5nSQR7o%2BxUACQBTI%3D",

    githubUrl: "https://github.com/brodynelly/iCAREProject-Public",
    // liveUrl: "https://example.com",
    documentation: [
      {
        title: "Overview",
        content: "# iCARE System\n\niCARE is a healthcare management platform that provides a unified interface for patient care coordination. The system follows Django's MTV architecture pattern and uses Docker for consistent deployment.\n\n## Key Features\n\n- **User Role Management**: Separate interfaces for doctors, nurses, and administrators\n- **Patient Management**: Comprehensive patient profiles and provider assignments\n- **Document System**: Customizable medical document types with PDF generation\n- **Geocode Organization**: Location-based grouping of patients and providers\n- **Interactive Dashboards**: Role-specific views for patient management\n- **Drug Database**: Medication prescriptions with autocomplete functionality"
      },
      {
        title: "Architecture",
        content: "## System Architecture\n\n### Core Components\n- **accounts**: User authentication and profile management\n- **patients**: Patient data and provider assignment handling\n- **documents**: Document creation and PDF generation\n- **pages**: Static content and dashboard interfaces\n\n### Technology Stack\n- Django backend with MTV pattern\n- PostgreSQL database\n- Bootstrap 5 frontend\n- Docker containerization\n- Various Django extensions for enhanced functionality\n\n### Authentication Flow\n- Email-based authentication using django-allauth\n- Role-based access control\n- Session management and security features"
      },
      {
        title: "Implementation",
        content: "## Implementation Details\n\n### Document System\n- Flexible document type definitions\n- Custom field configurations\n- PDF generation using xhtml2pdf\n- Document ownership and access control\n\n### Patient Assignment\n- Maximum 3 nurses per patient\n- Single doctor assignment\n- Nurse requirement before doctor assignment\n- Geocode-based organization\n\n### Data Models\n- CustomUser model with role integration\n- Patient-Provider relationships\n- Document type and field definitions\n- Treatment record tracking"
      },
      {
        title: "User Guide",
        content: "## User Guide\n\n### Getting Started\n1. Access the system at localhost:8000\n2. Log in with role-specific credentials\n3. Navigate using the sidebar menu\n\n### Key Workflows\n- **Patient Management**: View and manage assigned patients\n- **Document Creation**: Create and edit medical documents\n- **PDF Generation**: Convert documents to PDF format\n- **Dashboard Usage**: Access role-specific views\n\n### User Roles\n- **Admin**: Full system management\n- **Doctor**: Patient care and document creation\n- **Nurse**: Patient care and documentation\n\n### Tips\n- Use the iCARE Board for location-based patient overview\n- Utilize document templates for consistent recording\n- Monitor assigned patients through My Board"
      }
    ]
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
    documentation: [
      {
        title: "Overview",
        content: "# Web Journaling Application Concept\n\nThis project presents a conceptual design for a digital journaling application specifically optimized for iPad with Apple Pencil support. It explores the intersection of traditional journaling practices and modern digital capabilities.\n\n## Key Features\n\n- **Drawable Entries**: Create journal entries using Apple Pencil with natural writing feel\n- **Guided Prompts**: Daily journaling prompts to inspire reflection and consistency\n- **Template Library**: Various page layouts for different journaling styles\n- **Handwriting Recognition**: Optional conversion of handwritten text to digital text\n- **Mixed Media Support**: Combine handwriting, typing, photos, and sketches\n- **Calendar Integration**: Track journaling streaks and build consistency"
      },
      {
        title: "Design Philosophy",
        content: "## Design Philosophy\n\n### User Experience Principles\n\nThe design of this journaling application is guided by several core principles:\n\n1. **Minimal Friction**: The interface should disappear, allowing users to focus on their thoughts\n2. **Natural Writing Experience**: Digital writing should feel as natural as pen on paper\n3. **Guided but Flexible**: Provide structure for those who need it, freedom for those who don't\n4. **Calm Aesthetics**: Visual design that promotes reflection and mindfulness\n\n### Design Inspirations\n\nThe visual and interaction design draws inspiration from:\n\n- Traditional paper journals and notebooks\n- Minimalist iOS applications\n- Mindfulness and meditation apps\n- Physical journaling tools and techniques\n\n### Color Palette\n\nThe application uses a carefully selected color palette:\n\n- Primary background: Soft off-white (#F8F7F4)\n- Accent colors: Muted earth tones\n- Text: Dark charcoal (#2A2A2A)\n- Highlights: Subtle pastels for categorization\n\nThis palette creates a calm, distraction-free environment that mimics high-quality paper while maintaining good readability and contrast."
      },
      {
        title: "UI Components",
        content: "## UI Components\n\n### Main Interface Elements\n\nThe application features several key interface components designed for optimal journaling experience:\n\n- **Drawing Canvas**: High-resolution canvas optimized for Apple Pencil input\n- **Tool Palette**: Minimalist set of drawing and writing tools\n- **Template Selector**: Quick access to different page layouts\n- **Navigation Bar**: Simple controls for moving between entries\n\n### Key Screens\n\n1. **Home Dashboard**:\n   - Calendar view showing journaling streak\n   - Quick access to today's entry\n   - Recent entries preview\n   - Daily prompt suggestion\n\n2. **Entry Editor**:\n   - Full-screen canvas for writing/drawing\n   - Minimal toolbar with essential tools\n   - Template selector\n   - Media insertion options\n\n3. **Template Gallery**:\n   - Various page layouts (blank, lined, dot grid, etc.)\n   - Guided prompt templates\n   - Mood tracking templates\n   - Goal setting frameworks\n\n4. **Settings**:\n   - Personalization options\n   - Backup and sync settings\n   - Notification preferences\n   - Handwriting recognition settings"
      },
      {
        title: "User Research",
        content: "## User Research\n\n### Target Audience\n\nThe application is designed primarily for:\n\n1. **Digital Journalers**: Users who already keep journals but want the flexibility of digital tools\n2. **iPad Owners**: Users who own an iPad and Apple Pencil and want to maximize their utility\n3. **Mindfulness Practitioners**: People who journal as part of mindfulness or mental health practices\n4. **Creative Writers**: Those who use journaling for creative expression and ideation\n\n### User Testing Insights\n\nPreliminary user testing revealed several key insights:\n\n- Users strongly prefer minimal UI that doesn't distract from the writing experience\n- The feeling of pen on screen is crucial - any latency or unnatural behavior breaks immersion\n- Many users want structure (prompts, templates) but don't want to feel constrained by it\n- Privacy features are essential, as journals often contain personal thoughts\n- The ability to mix media types (writing, typing, photos) in a single entry is highly valued\n\n### Persona: Maya, 34\n\n**Background**: Graphic designer who has kept paper journals for years but wants the convenience of digital\n\n**Goals**:\n- Maintain her journaling habit while reducing physical clutter\n- Have her journal accessible across devices\n- Preserve the creative, free-form nature of her paper journaling\n\n**Pain Points**:\n- Most digital journaling apps feel too rigid and text-focused\n- Wants to draw and sketch alongside writing\n- Needs an intuitive interface that doesn't require learning complex tools"
      },
      {
        title: "Future Directions",
        content: "## Future Directions\n\n### Planned Enhancements\n\n1. **AI-Powered Insights**:\n   - Analysis of journaling patterns and mood trends\n   - Personalized prompt suggestions based on previous entries\n   - Optional sentiment analysis to track emotional well-being\n\n2. **Advanced Media Integration**:\n   - Voice memo recording and transcription\n   - Video journal entries\n   - Location tagging and weather information\n\n3. **Collaboration Features**:\n   - Shared journals for partners or families\n   - Guided group journaling for teams or classes\n   - Private sharing of selected entries with trusted contacts\n\n4. **Extended Platform Support**:\n   - Native applications for iPhone and Mac\n   - Web-based viewer with limited editing capabilities\n   - Cross-device synchronization\n\n### Technical Roadmap\n\n**Phase 1: Core Experience**\n- Perfecting the drawing experience\n- Implementing basic templates and prompts\n- Building the calendar and streak tracking\n\n**Phase 2: Enhanced Functionality**\n- Adding handwriting recognition\n- Implementing search capabilities\n- Creating advanced templates and guides\n\n**Phase 3: Ecosystem Development**\n- Building cross-platform synchronization\n- Developing companion applications\n- Implementing AI-powered features\n\n**Phase 4: Community Features**\n- Adding optional sharing capabilities\n- Creating guided group journaling tools\n- Developing journaling challenges and programs"
      }
    ]
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
    documentation: [
      {
        title: "Overview",
        content: "# ThreeJS Graphics Demonstration\n\nThis project showcases the capabilities of ThreeJS, a powerful JavaScript library for creating and displaying 3D computer graphics in web browsers. It serves as both a learning tool and a demonstration of what's possible with modern web-based 3D rendering.\n\n## Key Features\n\n- **Interactive 3D Models**: Manipulable objects with realistic lighting and textures\n- **Camera Controls**: Orbit, pan, and zoom functionality for exploring 3D scenes\n- **Physics Simulation**: Basic physics interactions between objects\n- **Particle Systems**: Dynamic particle effects for visual enhancement\n- **Responsive Design**: Adapts to different screen sizes while maintaining performance\n- **Custom Shaders**: Advanced visual effects using GLSL shader programming"
      },
      {
        title: "Technical Architecture",
        content: "## Technical Architecture\n\n### Core Components\n\n1. **Scene Setup**:\n   - Scene initialization and management\n   - Camera configuration (perspective and orthographic)\n   - Lighting setup (ambient, directional, point, and spot lights)\n   - Renderer configuration with WebGL\n\n2. **Asset Management**:\n   - 3D model loading and optimization\n   - Texture and material handling\n   - Custom geometry creation\n\n3. **Interaction Layer**:\n   - Mouse and touch controls\n   - Camera movement constraints\n   - Object selection and manipulation\n\n4. **Performance Optimization**:\n   - Level of detail (LOD) implementation\n   - Frustum culling\n   - Texture compression\n   - Shader optimization"
      },
      {
        title: "Implementation Details",
        content: "## Implementation Details\n\n### Custom Shader Implementation\n\nThe project uses custom GLSL shaders for advanced visual effects:\n\n- **Vertex Shaders**: Handle position calculations and pass data to fragment shaders\n- **Fragment Shaders**: Create visual effects like pulsing glow, color transitions, and texture manipulation\n- **Uniform Variables**: Pass time and other parameters to create dynamic animations\n\n### Physics Integration\n\nThe demonstration incorporates basic physics using the Cannon.js physics engine:\n\n- **World Setup**: Physics world with gravity and collision detection\n- **Rigid Bodies**: Physical representations of visual objects\n- **Constraints**: Connections between objects like hinges and springs\n- **Collision Detection**: Accurate interaction between objects\n\n### Particle System\n\nThe project features a dynamic particle system for visual effects:\n\n- **Particle Generation**: Thousands of small points with individual properties\n- **Movement Patterns**: Particles follow programmed behaviors and respond to forces\n- **Visual Effects**: Glow, trails, and color changes create atmospheric effects\n- **Performance Optimization**: Efficient handling of large numbers of particles"
      },
      {
        title: "Performance Optimization",
        content: "## Performance Optimization\n\n### Rendering Efficiency\n\nThe demonstration implements several techniques to maintain high performance:\n\n1. **Frustum Culling**:\n   Objects outside the camera's view are not rendered, reducing GPU load.\n\n2. **Level of Detail (LOD)**:\n   Models switch to simpler versions when far from the camera.\n\n3. **Instanced Rendering**:\n   For repeated objects, instanced rendering significantly reduces draw calls.\n\n4. **Texture Optimization**:\n   - Texture atlasing to reduce draw calls\n   - Mipmap generation for distance-appropriate textures\n   - Texture compression (DXT/ETC) for reduced memory usage\n\n5. **Post-processing Pipeline**:\n   Efficient post-processing using WebGL render targets and custom shaders."
      },
      {
        title: "User Interaction",
        content: "## User Interaction\n\n### Camera Controls\n\nThe demonstration provides intuitive camera controls for exploring the 3D scene:\n\n- **Orbit**: Click and drag to rotate the camera around the scene\n- **Pan**: Right-click and drag (or two-finger drag) to move the camera parallel to the view plane\n- **Zoom**: Mouse wheel or pinch gesture to zoom in and out\n- **Reset**: Double-click to return to the default camera position\n\n### Object Interaction\n\nUsers can interact with objects in the scene:\n\n1. **Selection**: Click on objects to select them\n2. **Transformation**: Drag handles to move, rotate, or scale selected objects\n3. **Properties**: Adjust material properties, physics behavior, and effects through the UI panel\n\n### UI Controls\n\nThe interface includes a control panel for adjusting scene parameters:\n\n- **Lighting**: Adjust light intensity, color, and position\n- **Effects**: Toggle post-processing effects like bloom, ambient occlusion, and depth of field\n- **Physics**: Modify gravity, friction, and restitution values\n- **Animation**: Control animation speed and transitions\n\n### Mobile Optimization\n\nThe controls are optimized for both desktop and mobile devices:\n\n- **Touch Controls**: Specialized handling for touch gestures\n- **Responsive UI**: Control panels that adapt to screen size\n- **Performance Scaling**: Automatic quality adjustments based on device capabilities\n- **Gesture Recognition**: Intuitive touch interactions for camera and object manipulation"
      }
    ]
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
    documentation: [
      {
        title: "Overview",
        content: "# E-Commerce Platform\n\nThis project is a comprehensive e-commerce solution that provides businesses with everything needed to run an online store. It features a modern, responsive frontend coupled with a robust backend for inventory management, order processing, and secure payments.\n\n## Key Features\n\n- **Product Management**: Comprehensive catalog with categories, variants, and attributes\n- **Shopping Cart**: Persistent cart with real-time updates and saved items\n- **Checkout Process**: Streamlined, multi-step checkout with address validation\n- **Payment Processing**: Secure integration with Stripe for multiple payment methods\n- **User Accounts**: Customer profiles with order history and saved preferences\n- **Admin Dashboard**: Complete store management interface for business owners\n- **Analytics**: Sales reporting and customer behavior insights"
      },
      {
        title: "Architecture",
        content: "## System Architecture\n\n### Frontend Architecture\n\nThe frontend is built with React, utilizing a component-based architecture for maximum reusability and maintainability.\n\n- **State Management**: Redux for global state with Redux Toolkit for simplified logic\n- **Routing**: React Router with protected routes for admin sections\n- **Styling**: Styled Components with a custom theming system\n- **Form Handling**: Formik with Yup validation schemas\n\n### Backend Architecture\n\nThe backend follows a RESTful API design with Node.js and Express.js.\n\n- **API Structure**: Resource-based endpoints with consistent response formats\n- **Authentication**: JWT-based auth with refresh tokens and role-based access control\n- **Database**: MongoDB with Mongoose ODM for data modeling\n- **Payment Processing**: Stripe API integration with webhooks for event handling\n\n### System Diagram\n\nThe system architecture follows a modern three-tier design with:\n\n- Frontend React application communicating with backend API\n- Express.js API server handling business logic\n- MongoDB database for data persistence\n- Stripe integration for payment processing\n\n### Database Schema\n\nThe MongoDB database uses the following main collections:\n\n- **Products**: Product information, variants, pricing, and inventory\n- **Categories**: Hierarchical category structure with metadata\n- **Users**: Customer and admin user accounts with authentication data\n- **Orders**: Order details, status, payment information, and history\n- **Carts**: Active shopping carts with product selections and quantities"
      },
      {
        title: "Implementation Details",
        content: "## Implementation Details\n\n### Product Catalog Implementation\n\nThe product catalog system supports complex product structures:\n\n- **Product Schema**: Comprehensive data model for products with variants, options, and inventory tracking\n- **Category Management**: Hierarchical category system with inheritance of attributes\n- **Search & Filtering**: Advanced product search with faceted filtering options\n- **Image Management**: Multiple product images with automatic optimization\n\n### Shopping Cart System\n\nThe cart system maintains state across sessions and devices:\n\n- **State Management**: Redux-based cart with persistent storage\n- **Real-time Updates**: Automatic price and availability updates\n- **Cross-device Sync**: Cart synchronization for logged-in users\n- **Abandoned Cart Recovery**: Tools to recover abandoned shopping carts\n\n### Payment Processing\n\nThe Stripe integration handles payment processing securely:\n\n- **Payment Intents API**: Modern Stripe integration with SCA compliance\n- **Multiple Payment Methods**: Support for cards, digital wallets, and local payment methods\n- **Subscription Support**: Recurring billing capabilities for subscription products\n- **Webhook Integration**: Real-time payment event handling"
      },
      {
        title: "Admin Dashboard",
        content: "## Admin Dashboard\n\n### Dashboard Overview\n\nThe admin dashboard provides comprehensive store management capabilities:\n\n1. **Analytics Dashboard**:\n   - Sales overview with charts and KPIs\n   - Customer acquisition metrics\n   - Inventory status and alerts\n   - Order fulfillment performance\n\n2. **Order Management**:\n   - Order listing with filtering and search\n   - Detailed order view with customer information\n   - Order status updates and history\n   - Fulfillment and shipping management\n\n3. **Product Management**:\n   - Product catalog with bulk operations\n   - Category and collection management\n   - Inventory tracking and adjustments\n   - Product import/export functionality\n\n4. **Customer Management**:\n   - Customer profiles and purchase history\n   - Customer segmentation and groups\n   - Communication tools and notes\n\n5. **Content Management**:\n   - Homepage layout and featured products\n   - Banner and promotion management\n   - Blog and article publishing\n\n6. **Settings**:\n   - Payment gateway configuration\n   - Shipping methods and rates\n   - Tax settings and rules\n   - User roles and permissions\n\n### Admin Interface\n\nThe admin interface uses a modular design with reusable components:\n\n- **Layout System**: Consistent layout with sidebar navigation\n- **Data Tables**: Sortable and filterable data tables for all resources\n- **Form Builder**: Reusable form components with validation\n- **Dashboard Widgets**: Customizable dashboard with drag-and-drop widgets"
      },
      {
        title: "User Experience",
        content: "## User Experience\n\n### Customer Journey\n\nThe platform is designed around an optimized customer journey:\n\n1. **Discovery Phase**:\n   - Homepage with featured products and promotions\n   - Category browsing with filtering options\n   - Search functionality with autocomplete\n   - Personalized recommendations based on browsing history\n\n2. **Consideration Phase**:\n   - Detailed product pages with comprehensive information\n   - Product image galleries with zoom functionality\n   - Customer reviews and ratings\n   - Related and complementary product suggestions\n\n3. **Purchase Phase**:\n   - Streamlined add-to-cart process\n   - Mini-cart preview with quick checkout option\n   - Guest checkout with account creation option\n   - Multi-step checkout with progress indication\n\n4. **Post-Purchase Phase**:\n   - Order confirmation with details\n   - Shipping and delivery updates\n   - Account dashboard for order tracking\n   - Review solicitation and feedback collection\n\n### Mobile Optimization\n\nThe platform is fully responsive with mobile-specific optimizations:\n\n- Touch-friendly interface elements\n- Simplified navigation for smaller screens\n- Optimized image loading for faster mobile performance\n- Mobile payment options (Apple Pay, Google Pay)\n\n### Performance Considerations\n\nPerformance optimizations include:\n\n- Code splitting and lazy loading for faster initial load\n- Image optimization and lazy loading\n- Server-side rendering for critical pages\n- Caching strategies for product and category data\n- Database indexing for faster queries\n- CDN integration for static assets"
      }
    ]
  },
];
