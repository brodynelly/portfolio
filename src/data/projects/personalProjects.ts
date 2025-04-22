
import { Project } from './types';
import  coverStock  from '../../../public/stockPrediction/cover.png'
import prediction from '../../../public/stockPrediction/prediction.png'
import stocks from '../../../public/stockPrediction/stocks.png'
import coverSpanish from '../../../public/articleTranslator/cover.png'
import coverWEBGL from '../../../public/webGL/cover.png'

export const personalProjects: Project[] = [
  {
    title: "AI Stock Prediction Web App",
    description: "A powerful web application that uses machine learning to forecast stock prices. Built with Streamlit, Prophet, and yfinance for real-time data analysis and interactive visualizations.",
    tech: [
      { name: "Python", category: "language" },
      { name: "Streamlit", category: "frontend" },
      { name: "Prophet", category: "backend" },
      { name: "yfinance", category: "backend" },
      { name: "Plotly", category: "frontend" },
      { name: "Machine Learning", category: "backend" },
    ],
    challenges: [
      "Implemented Facebook's Prophet algorithm for accurate time series forecasting",
      "Created interactive visualizations for complex financial data analysis",
      "Developed a responsive UI that adapts to different forecast periods",
      "Integrated real-time stock data fetching with error handling and caching",
      "Optimized performance for handling large datasets and complex calculations",
      "Designed component analysis views to explain prediction factors",
    ],
    images: [
      coverStock,
      prediction, 
      stocks,
    ],
    image: coverStock,
    githubUrl: "https://github.com/brodynelly/AI_StockPredictionWeb",
    liveUrl: "https://stockpredictionapp.streamlit.app/",
    documentation: [
      {
        title: "Overview",
        content: "# AI Stock Prediction Web App\n\nA powerful web application that uses machine learning to forecast stock prices. Built with Streamlit, Prophet, and yfinance, this app provides interactive visualizations and AI-powered predictions for stock market analysis.\n\n## Key Features\n\n- **Real-time Stock Data**: Fetch the latest stock data from Yahoo Finance\n- **Interactive Visualizations**: Explore historical stock prices with interactive charts\n- **AI-Powered Forecasting**: Predict future stock prices using Facebook's Prophet algorithm\n- **Customizable Predictions**: Adjust the forecast period from 1 to 4 years\n- **Data Transparency**: View the raw data and forecasted values\n- **Component Analysis**: Understand trend and seasonal factors affecting stock prices"
      },
      {
        title: "Technical Architecture",
        content: "## Technical Architecture\n\n### Core Components\n\n- **Data Acquisition Layer**:\n  - yfinance API integration for fetching historical stock data\n  - Caching mechanism for optimized performance\n  - Error handling for API failures and data inconsistencies\n\n- **Forecasting Engine**:\n  - Prophet time series model for prediction\n  - Custom parameter tuning based on stock volatility\n  - Trend, seasonality, and holiday effect modeling\n\n- **Visualization Framework**:\n  - Plotly for interactive charts and graphs\n  - Custom color schemes for different data components\n  - Responsive layouts for different screen sizes\n\n- **User Interface**:\n  - Streamlit components for interactive controls\n  - Sidebar for parameter adjustments\n  - Tabbed interface for organizing different views\n\n### Data Flow\n\n1. User selects a stock and forecast parameters\n2. Application fetches historical data (cached when possible)\n3. Prophet model processes the data and generates predictions\n4. Results are visualized through interactive charts\n5. Component breakdown shows factors influencing the forecast"
      },
      {
        title: "Implementation Details",
        content: "## Implementation Details\n\n### Prophet Model Configuration\n\nThe application uses Facebook's Prophet model with custom configurations:\n\n```python\nmodel = Prophet(\n    changepoint_prior_scale=0.05,  # Flexibility in trend changes\n    seasonality_prior_scale=10,    # Strength of seasonality\n    daily_seasonality=False,       # Disable daily patterns for stocks\n    weekly_seasonality=True,       # Enable weekly patterns\n    yearly_seasonality=True        # Enable yearly patterns\n)\n\n# Add stock market holidays\nmodel.add_country_holidays(country_name='US')\n```\n\n### Data Processing Pipeline\n\n1. **Data Cleaning**:\n   - Handling missing values in stock data\n   - Resampling to appropriate intervals\n   - Normalizing data for consistent analysis\n\n2. **Feature Engineering**:\n   - Creating date-based features (day of week, month, etc.)\n   - Calculating technical indicators (moving averages, etc.)\n   - Preparing data in Prophet's required format (ds/y columns)\n\n3. **Forecast Generation**:\n   - Training the model on historical data\n   - Generating future dates for prediction\n   - Creating confidence intervals for predictions\n\n### Visualization Techniques\n\n- **Interactive Time Series**:\n  Custom Plotly charts with hover information and zoom capabilities\n\n- **Component Plots**:\n  Breakdown of trend, weekly, and yearly patterns\n\n- **Forecast vs Actual**:\n  Overlay of predictions on historical data for validation"
      },
      {
        title: "User Guide",
        content: "## User Guide\n\n### Getting Started\n\n1. **Select a Stock**:\n   - Choose from popular options (AAPL, GOOG, MSFT, GME)\n   - Or enter a custom stock ticker\n\n2. **Adjust Forecast Parameters**:\n   - Use the slider to set prediction period (1-4 years)\n   - Toggle additional options for visualization\n\n3. **Explore the Data**:\n   - View historical stock prices\n   - Analyze the forecast with confidence intervals\n   - Examine component breakdowns\n\n### Understanding the Forecast\n\n- **Blue Line**: Historical stock prices\n- **Red Line**: Forecasted values\n- **Shaded Area**: Prediction confidence interval (wider = less certain)\n\n### Component Analysis\n\n- **Trend**: Long-term direction of the stock\n- **Weekly**: Patterns that repeat every week (market day effects)\n- **Yearly**: Seasonal patterns over the course of a year\n- **Holidays**: Effects of market holidays on stock prices\n\n### Tips for Best Results\n\n- Longer historical data provides better forecasts\n- Volatile stocks have wider confidence intervals\n- Market disruptions may not be predictable\n- Use the component analysis to understand what drives the forecast"
      },
      {
        title: "Development Process",
        content: "## Development Process\n\n### Project Evolution\n\nThis project evolved through several phases:\n\n1. **Initial Prototype**:\n   - Basic Streamlit interface with minimal styling\n   - Simple Prophet implementation with default parameters\n   - Limited to a few pre-selected stocks\n\n2. **Enhanced Forecasting**:\n   - Customized Prophet parameters for financial data\n   - Added component analysis for deeper insights\n   - Implemented error handling for API failures\n\n3. **UI Refinement**:\n   - Redesigned interface with improved user experience\n   - Added interactive elements and tooltips\n   - Created responsive layouts for different devices\n\n4. **Performance Optimization**:\n   - Implemented caching for faster data retrieval\n   - Optimized chart rendering for large datasets\n   - Reduced memory usage for resource-intensive operations\n\n### Challenges Overcome\n\n- **Data Consistency**: Handling irregular trading days and market closures\n- **Model Tuning**: Finding optimal Prophet parameters for different stock types\n- **UI Responsiveness**: Ensuring smooth experience despite complex calculations\n- **Deployment Constraints**: Working within Streamlit Cloud resource limitations\n\n### Future Directions\n\n- Integration of additional technical indicators\n- Comparison view for multiple stocks simultaneously\n- Backtesting framework to evaluate prediction accuracy\n- Advanced user settings for model parameter customization"
      }
    ]
  },

  {
    title: "Precision Automated Agricultural Lab Web application",
    description: "PAAL (Precision Agriculture and Animal Livestock) Monitoring System is a comprehensive web application designed for agricultural operations management. This system provides real-time monitoring, data analytics, and management tools for farms, barns, stalls, and livestock.",
    tech: [
      { name: "Next.js", category: "frontend" },
      { name: "Node.js", category: "backend" },
      { name: "Express.js", category: "backend" },
      { name: "MongoDB", category: "database" },
    ],
    challenges: [
      "Implemented a real-time monitoring system for farm operations",
      "Developed a user-friendly interface for livestock management",
      "Integrated data analytics for informed decision-making",
      "Ensured secure data handling and compliance with agricultural regulations",
    ],
    images: [
      "/PAAL/cover.webp",
      "/PAAL/login.webp",
      "/PAAL/dashboard.webp",
      "/PAAL/adminDash.webp",
      "/PAAL/adminControl.webp",
      "/PAAL/addFarm.webp",
      "/PAAL/pigtwo.webp",
    ],
    image: "/PAAL/cover.webp",
    githubUrl: "https://github.com",
    documentation: [
      {
        title: "Overview",
        content: "## PAAL Monitoring System\n\nPAAL (Precision Agriculture and Animal Livestock) Monitoring System is a comprehensive web application designed for agricultural operations management. This system provides real-time monitoring, data analytics, and management tools for farms, barns, stalls, and livestock.\n\n**Features**\n\n- **Real-time Monitoring**: Track all your farm operations with real-time data and analytics\n- **Enterprise Security**: Industry-leading security protocols to protect your data\n- **Advanced Analytics**: Make data-driven decisions with comprehensive analytics\n- **Role-Based Access Control**: Admin and Farmer user roles with appropriate permissions\n- **Farm Management**: View and edit farm details, barns, stalls, and livestock\n- **System Administration**: Backup & restore, maintenance, and system logs"
      },
      {
        title: "Architecture",
        content: "## System Architecture\n\n**Frontend**\n- Next.js 14\n- React\n- TailwindCSS\n- Recharts (data visualization)\n- Radix UI (accessible components)\n\n**Backend**\n- Node.js\n- Express\n- MongoDB (replica set, internal auth)\n- Mongoose"
      },
      {
        title: "Implementation Details",
        content: "## Implementation Details\n\n**Livestock Monitoring Infrastructure**\n- **Posture Schema**: Flexible data structure for storing per-pig time-series posture scores\n- **Batch Segmentation**: Pigs are grouped by batch ID for comparative analysis\n- **Historical Data Indexing**: Each pig’s metrics are indexed by timestamp for fast querying\n- **Graph Integration**: Posture scores rendered using dynamic charts within the dashboard\n\n**Database Automation**\n- **Seed Scripts**: Populate your database with default test records and posture data\n- **Backup Strategy**: Git-integrated dump and restore scripts for portable development\n- **Replica Set Configuration**: rs0 initialized for high-availability and authentication\n\n**API Interaction Layer**\n- **RESTful Routes**: Fully documented endpoints for pig management, batch uploading, and posture analytics\n- **File Upload Support**: Accepts ZIPs of CSVs through a dedicated upload route\n- **Multer Integration**: Handles multipart/form-data for ZIP processing on the server\n- **Batch Insertions**: Optimized MongoDB bulk insert for large CSV files"
      },
      {
        title: "Admin Dashboard",
        content: "## Admin Dashboard\n\n**Dashboard Overview**\n\nThe Admin Dashboard is the primary control center for system administrators to view, manage, and interact with all facets of the application environment.\n\n1. **System Analytics**:\n   - Visualized metrics including farm count, active users, and recent database events\n   - Admin-only access to global configuration statistics and update logs\n\n2. **Farm Oversight**:\n   - Global view of all registered farms\n   - View/edit barn and stall metadata per farm\n   - Assign pigs to stalls and monitor posture activity\n\n3. **User Management**:\n   - Create and manage Farmer accounts\n   - Assign Farmers to specific farms\n   - Role control and user permissions for safe delegation\n\n4. **System Tools**:\n   - Access the automated backup interface\n   - View real-time logs from system services\n   - Trigger restore operations when needed\n\n**Administrative Interface**\n- **Modular Layout**: Cards, tables, and dropdowns allow for intuitive navigation\n- **Real-Time Insights**: Automatically refreshed components reflect database state\n- **Scoped Access**: All Admin tools are protected via authentication guardrails"
      },
      {
        title: "User Experience",
        content: "## User Experience\n\n**Farmer Workflow**\n\n1. **Onboarding Experience**:\n   - Farmers are guided through a multi-step wizard to register their first farm, barn, and stall\n   - Smart prompts and validations ensure required metadata is complete\n\n2. **Daily Dashboard**:\n   - Displays live updates of pig posture data\n   - Aggregated analytics show average health scores, anomalies, and activity spikes\n\n3. **Data Interaction**:\n   - Users can filter posture data by time (7/30/90/180/365 days)\n   - Graphs support toggling pigs by ID and viewing historical posture trends\n\n4. **Mobile Optimization**:\n   - Touch-friendly chart views for quick scroll and swipe-based filtering\n   - Responsive cards and modals adjust to smaller devices\n   - Mobile-first workflows for farmers on the move\n\n**Performance & UX Optimizations**\n- Lazy loading of heavy data components\n- Indexed queries for all posture retrieval\n- CDN usage for static asset distribution\n- Dedicated WebSocket channels (future) for live posture event streams"
      }
    ]

  },
  {
    title: "Journaling Application",
    description: "A personal project to help users maintain and organize their daily journal entries with secure and efficient storage using MongoDB.",
    tech: [
      { name: "React", category: "frontend" },
      { name: "TypeScript", category: "language" },
      { name: "Tailwind CSS", category: "frontend" },
      { name: "Vite", category: "deployment" },
      { name: "Supabase", category: "database" },
      { name: "Lucide Icons", category: "frontend" },
    ],
    challenges: [
      "Implemented a responsive, iOS-style interface with smooth animations and transitions",
      "Created a flexible handwriting canvas with pressure sensitivity and tool selection",
      "Built an intelligent prompt system for daily writing inspiration",
      "Developed a comprehensive mood tracking system with visual feedback",
      "Integrated multimedia support for images, voice notes, and handwritten content",
      "Designed an intuitive timeline view for journal entries with rich metadata"
    ],
    images: [
      "/JournalingApp/cover.webp",
      "/JournalingApp/home.webp",
      "/JournalingApp/welcome.webp",
      "/JournalingApp/entries.webp",
      "/JournalingApp/newentry.webp",
      "/JournalingApp/sidebar.webp",
    ],
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1470&auto=format&fit=crop",
    githubUrl: "https://github.com/brodynelly/Web-Journaling-Application-",
    liveUrl: " https://marvelous-kelpie-866eb4.netlify.app/",
    documentation:
      [
        {
          title: "Overview",
          content: "## Modern Journaling Application\n\nThe Modern Journaling Application is a sleek, feature-rich platform inspired by Apple's iOS Journal app. It is engineered for users seeking a beautiful and functional environment for daily self-reflection, creative writing, and emotional tracking.\n\n**Key Features**\n\n- **Rich Entry Creation**: Capture thoughts with support for text, handwriting, images, and voice recordings\n- **Intelligent Prompts**: Daily writing suggestions tailored to inspire and encourage reflection\n- **Mood Tracking**: Emoji and color-coded indicators to reflect your emotional state over time\n- **Timeline View**: Chronologically organized journal entries with intuitive navigation\n- **Handwriting Support**: Canvas-based drawing with support for pressure-sensitive styluses\n- **Location Tagging**: Geolocation features to embed places and memories within your entries\n- **Activity Logging**: Automatically associate daily steps and activities with each entry\n- **End-to-End Encryption**: All data is securely encrypted both at rest and in transit"
        },
        {
          title: "Architecture",
          content: "## System Architecture\n\n**Frontend**\n- React with TypeScript for maintainable, scalable UI development\n- Vite for ultra-fast builds and live development\n- Tailwind CSS for responsive, utility-first styling\n- Canvas API for fluid handwriting capture\n- Web Audio API for native browser voice note recording\n- Service Workers enabling offline journaling experiences\n\n**Backend**\n- Supabase as a managed PostgreSQL database with real-time capabilities\n- Authentication, storage, and secure API layer via Supabase SDK\n\n**Entry Data Model**\n- Fully extensible journal entry object with metadata support including mood, media, tags, and activity logs"
        },
        {
          title: "Implementation Details",
          content: "## Implementation Details\n\n**Handwriting System**\n- Pressure-sensitive canvas interface captures strokes in real time\n- Toggle tools between pen and eraser modes\n- Customizable brush color and stroke width for personalization\n\n**Mood Tracking System**\n- Visual moods tied to specific color identifiers\n- Emotion states saved as metadata alongside each journal entry\n- Supports trend visualizations and data exports\n\n**Data Synchronization**\n- Entries are synced via Supabase APIs in real-time\n- Offline-first architecture ensures entries persist during loss of connectivity\n\n**Media Management**\n- Integrated voice note recorder linked to journal sessions\n- Image uploads stored securely via Supabase Storage bucket\n- Optional activity metadata for logging duration, steps, and location"
        },
        {
          title: "User Guide",
          content: "## User Guide\n\n**Getting Started**\n1. **Welcome Screen**: A brief overview introducing users to journaling tools\n2. **Timeline View**: Scrollable list of entries organized by date\n3. **Create Entry**: Tap into rich journaling with one of many input modes\n\n**Journal Entry Options**\n- **Text**: Rich text editor for expressive writing\n- **Handwriting**: Write or sketch directly on the screen\n- **Voice Notes**: Dictate feelings or record conversations\n- **Media**: Attach images to enrich journal content\n- **Mood**: Choose a mood icon to reflect your state of mind\n- **Location**: Automatically or manually tag your location\n\n**Writing Aids**\n- **Daily Prompts**: Curated inspiration delivered daily\n- **Tags**: Categorize entries for better organization\n- **Activity Tracker**: Track movement and contextual behaviors tied to moments\n\n**Security & Privacy**\n- End-to-end encryption ensures journal data remains confidential\n- Biometric authentication available for app access\n- No public sharing or cloud syncing by default\n- Supabase-secured encrypted backups allow safe cloud storage"
        }
      ]
    },


  {
    title: "Spanish Article Translater",
    description: "A web application that allows users to translate articles from spanish to english.",
    tech: [
      { name: "React", category: "frontend" },
      { name: "Google Translate API", category: "backend" },
      { name: "JavaScript", category: "language" },
      { name: "TailwindCSS", category: "frontend" },
      { name: "GitHub Pages", category: "deployment" },
    ],
    challenges: [
      "Integrated the Google Translate API to provide accurate translations",
      "Developed a user-friendly interface for article translation",
      "Ensured responsive design for optimal user experience",
      "Implemented error handling for API requests and user input validation",
    ],
    images: [
      coverSpanish,
      "/articleTranslator/home.webp",
      "/articleTranslator/translate.webp",
    ],
    image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=1470&auto=format&fit=crop",
    githubUrl: "https://github.com/brodynelly/translation-website",
    liveUrl: "https://brodynelly.github.io/admin/dashboard",
    documentation:[
      {
        title: "Overview",
        content: "## Article Translator\n\nThe Article Translator is a lightweight yet powerful web-based tool that enables users to translate full-length articles into multiple languages with high accuracy. Designed for writers, researchers, and global readers, it integrates the Google Translate API within a fast, intuitive React frontend.\n\n**Core Features**\n\n- **Multilingual Support**: Translate articles into over 100+ supported languages\n- **Side-by-Side Viewer**: Read original and translated text simultaneously\n- **Auto Language Detection**: Automatically identifies source language\n- **Manual Language Override**: Easily select preferred source and target languages\n- **Paste & Upload Modes**: Input content manually or upload `.txt`/`.md` files\n- **Optimized for Speed**: Fast, efficient translations with real-time UI updates\n- **Responsive Design**: Fully optimized for both desktop and mobile devices\n- **Smart Error Feedback**: Handles API issues, invalid inputs, and character limits with clarity"
      },
      {
        title: "Architecture",
        content: "## System Architecture\n\n**Frontend**\n- Built with React and TypeScript for scalability and type safety\n- Vite for blazing-fast development and optimized builds\n- Tailwind CSS for responsive UI and modular design\n- Axios for handling async requests to the translation API\n\n**Backend / External Services**\n- Google Translate API handles text translation requests\n- Optional use of a lightweight Node.js proxy server for managing API keys securely (if needed in production)\n\n**Component Breakdown**\n- **LanguageSelector**: Dropdowns to choose source and target languages\n- **TextInputArea**: Rich textarea with autosizing and Markdown support\n- **TranslationPane**: Displays translated output alongside original\n- **UploadManager**: Processes and sanitizes uploaded text files for translation\n- **ErrorAlert**: Reusable alert banner for displaying API or UI issues"
      },
      {
        title: "Implementation Details",
        content: "## Implementation Details\n\n**Google Translate API Integration**\n- Translations performed using `translateText` endpoint with dynamically selected languages\n- Supports batch translation of paragraph blocks for performance\n- API key stored securely using environment variables or serverless proxy for production\n\n**Auto Detection Workflow**\n- Source language is auto-detected using Google's `detectLanguage` endpoint when no source is manually selected\n- Target language defaults to the user’s browser locale if unspecified\n\n**Translation State Management**\n- React context manages language preferences, API results, and error states\n- Debounced input listener minimizes unnecessary API calls during typing\n\n**File Upload Pipeline**\n- Accepts `.txt` and `.md` formats\n- Strips unsupported characters, markdown headers, or symbols as needed\n- Renders original and translated versions side-by-side\n\n**Error Handling**\n- Gracefully manages rate limits, content length limits, unsupported languages, and malformed responses\n- Alerts users with human-readable messages, not raw API codes"
      },
      {
        title: "User Guide",
        content: "## User Guide\n\n**Translating Text Manually**\n\n1. **Paste Article Content**\n   - Copy any text-based article into the original input area\n\n2. **Select Languages**\n   - By default, the app detects your input language\n   - You may override the detected language by choosing from the dropdown\n   - Choose your target language from the right-hand selector\n\n3. **Translate**\n   - Click the **Translate** button to send the content to the Google Translate API\n   - The translated version appears instantly in the right-hand panel\n\n**Uploading Articles**\n\n1. **Click Upload Button**\n   - Upload `.txt` or `.md` files from your local machine\n   - Content is sanitized and prepared for translation\n\n2. **Review and Translate**\n   - Review the input in the text area, select your languages, then click **Translate**\n\n**Translation Output Features**\n- See original vs translated version in a split view\n- Copy the result to clipboard using the action buttons\n- Clear all content to reset the session at any time"
      },
      {
        title: "Future Directions",
        content: "## Future Directions\n\n**Planned Features**\n\n1. **Translation History**\n   - Save and review past translations locally or via secure login\n   - Label and tag translations for future reference\n\n2. **Export Options**\n   - Export translated articles to `.txt`, `.pdf`, or `.docx` formats\n   - Download dual-language files with original + translated content side-by-side\n\n3. **Extended File Support**\n   - Add support for `.docx`, `.html`, and `.pdf` input formats\n\n4. **AI-Powered Enhancements**\n   - Intelligent paragraph grouping for large documents\n   - Optional tone-matching and context-preserving translation mode\n\n5. **Authentication Layer (Pro Version)**\n   - Create accounts for saving translation preferences\n   - Premium users get increased character limits and API performance tier\n\n**Technical Roadmap**\n\n- **Phase 1**: Core MVP with Google Translate integration, manual/paste/upload support\n- **Phase 2**: File export tools, error logging, accessibility updates\n- **Phase 3**: Account-based translation memory and user dashboards\n- **Phase 4**: Advanced AI features (tone detection, adaptive translation models)"
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
      "/ICARE/cover.webp",
      "/ICARE/home.webp",
      "/ICARE/patientlist.webp",
      '/ICARE/DocumentTypes.webp',
      "/ICARE/DocumentCreation.webp",
      "/ICARE/Admin.webp",
    ],
    image: "/ICARE/cover.webp",

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
      coverWEBGL,
      "/webGL/screenshot.webp",
    ],
    image: "/webGL/cover.webp",
    githubUrl: "https://github.com/brodynelly/Three.js-WebGL-",
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
    title: "Reflectly - AI-Powered Journaling App",
    description: "A modern journaling application that leverages artificial intelligence to generate personalized daily prompts, helping users reflect more deeply and maintain consistent journaling habits. The app adapts to user preferences and emotional patterns over time.",
    tech: [
      { name: "React Native", category: "frontend" },
      { name: "TypeScript", category: "language" },
      { name: "OpenAI API", category: "backend" },
      { name: "Firebase", category: "database" },
      { name: "Redux", category: "frontend" },
      { name: "Expo", category: "deployment" },
    ],
    challenges: [
      "Developed an AI prompt generation system that creates personalized reflection questions",
      "Implemented sentiment analysis to track emotional patterns and tailor future prompts",
      "Created an elegant, animation-rich UI with smooth transitions and micro-interactions",
      "Built a secure journaling system with end-to-end encryption for user privacy",
      "Designed an offline-first architecture that syncs seamlessly when connectivity returns",
      "Integrated spaced repetition algorithms to resurface important past reflections",
    ],
    images: [
      "/reflectly/cover.webp",
      "/reflectly/home.webp",
      "/reflectly/prompt.webp",
      "/reflectly/entry.webp",
      "/reflectly/insights.webp",
      "/reflectly/settings.webp",
    ],
    image: "/reflectly/cover.webp",
    githubUrl: "https://github.com/brodynelly/reflectly-app",
    liveUrl: "https://reflectly-demo.netlify.app",
    documentation: [
      {
        title: "Overview",
        content: "# Reflectly: AI-Powered Journaling\n\nReflectly is a modern journaling application that uses artificial intelligence to generate personalized daily prompts, helping users develop deeper self-awareness and maintain consistent journaling habits. The app learns from user responses and emotional patterns to create increasingly relevant prompts over time.\n\n## Key Features\n\n- **AI-Generated Prompts**: Personalized daily questions based on user history and preferences\n- **Emotion Tracking**: Visual mood tracking with sentiment analysis of journal entries\n- **Insight Generation**: AI-powered patterns and insights from your journaling history\n- **Spaced Repetition**: Strategic resurfacing of important past reflections\n- **Rich Media Support**: Text, voice notes, images, and drawing capabilities\n- **End-to-End Encryption**: Complete privacy for all journal entries\n- **Cross-Platform Sync**: Seamless experience across mobile and web platforms\n- **Offline Support**: Full functionality without an internet connection"
      },
      {
        title: "AI Prompt System",
        content: "## AI Prompt System\n\n### Personalization Engine\n\nThe core of Reflectly is its AI prompt generation system, which creates deeply personalized reflection questions:\n\n- **Initial Calibration**: New users complete a brief onboarding questionnaire to establish baseline preferences and interests\n\n- **Adaptive Learning**: The system analyzes:  \n  - Previous journal entries (topics, sentiment, depth)  \n  - Response patterns (which prompts generate longer or more engaged responses)  \n  - Explicitly stated preferences and feedback  \n  - Time of day and contextual factors\n\n- **Prompt Categories**:  \n  - **Emotional Reflection**: Questions about feelings and reactions  \n  - **Growth & Goals**: Prompts related to personal development  \n  - **Gratitude**: Structured appreciation exercises  \n  - **Relationship**: Questions about interpersonal connections  \n  - **Creative**: Open-ended imaginative prompts  \n  - **Challenge**: Prompts that push comfort zones\n\n- **OpenAI Integration**: Leverages GPT models to generate novel, contextually relevant prompts while maintaining privacy\n\n### Sentiment Analysis\n\nThe app includes sophisticated emotion tracking:  \n\n- Real-time analysis of journal content to detect emotional states  \n- Tracking of emotional patterns over time  \n- Visualization of mood trends with actionable insights  \n- Adaptive prompt selection based on emotional state"
      },
      {
        title: "Technical Architecture",
        content: "## Technical Architecture\n\n### Frontend\n\n- **React Native**: Cross-platform mobile application with shared codebase\n- **Expo**: Streamlined development and deployment workflow\n- **TypeScript**: Type-safe code with enhanced developer experience\n- **Redux Toolkit**: State management with efficient updates\n- **React Navigation**: Smooth navigation between screens\n- **Reanimated**: Fluid animations and transitions\n- **Styled Components**: Component-based styling system\n\n### Backend\n\n- **Firebase**:  \n  - Authentication with multiple providers  \n  - Firestore for scalable data storage  \n  - Cloud Functions for serverless operations\n\n- **OpenAI API Integration**:  \n  - Secure proxy for API calls  \n  - Rate limiting and usage optimization  \n  - Prompt engineering and context management\n\n### Data Flow\n\n1. **User Authentication**: Secure login with multiple providers\n2. **Local Storage**: Entries saved locally first for offline support\n3. **Encryption**: Client-side encryption before cloud storage\n4. **Cloud Sync**: Background synchronization when online\n5. **AI Processing**: Secure, anonymized processing for insights\n\n### Privacy & Security\n\n- End-to-end encryption for all journal content\n- Zero-knowledge architecture where possible\n- Transparent data usage policies\n- Optional local-only mode with no cloud sync"
      },
      {
        title: "User Experience",
        content: "## User Experience\n\n### Daily Flow\n\n1. **Daily Prompt**: Users receive a personalized prompt each day\n2. **Reflection Space**: Clean, distraction-free writing environment\n3. **Mood Selection**: Visual emotion tracking before and after journaling\n4. **Media Enrichment**: Option to add photos, voice notes, or drawings\n5. **Insights**: AI-generated observations about the entry\n6. **Streak Tracking**: Gentle motivation through consistency metrics\n\n### Design Philosophy\n\nReflectly embraces several key design principles:\n\n- **Calm Technology**: Minimizing cognitive load and creating a peaceful experience\n- **Progressive Disclosure**: Revealing features gradually as needed\n- **Emotional Design**: Using color, animation, and imagery to create an emotional connection\n- **Accessibility**: Ensuring the app is usable by people with diverse abilities\n\n### Micro-interactions\n\nThe app features numerous thoughtful micro-interactions:\n\n- Subtle animations when transitioning between screens\n- Haptic feedback for important actions\n- Dynamic color shifts based on mood selection\n- Breathing animation during loading states\n- Celebration animations for streaks and milestones"
      },
      {
        title: "AI Insights & Features",
        content: "## AI Insights & Features\n\n### Pattern Recognition\n\nThe AI analyzes journal entries over time to identify patterns:\n\n- **Emotional Trends**: Visualizations of mood patterns over time\n- **Topic Analysis**: Identification of recurring themes and subjects\n- **Behavioral Insights**: Recognition of habits and routines\n- **Language Patterns**: Analysis of writing style and emotional expression\n\n### Smart Reminders\n\nReflectly uses AI to create meaningful reminders:\n\n- **Optimal Timing**: Learning when users are most receptive to journaling\n- **Contextual Prompts**: Reminders that reference relevant past entries\n- **Gentle Accountability**: Non-judgmental nudges to maintain consistency\n\n### Spaced Repetition\n\nThe app strategically resurfaces past content:\n\n- **Growth Tracking**: Comparing responses to similar prompts over time\n- **Resolution Follow-up**: Checking in on past goals or intentions\n- **Gratitude Reinforcement**: Reminding users of things they've appreciated\n\n### Voice Features\n\n- **Voice-to-Text**: Hands-free journaling option\n- **Voice Analysis**: Optional tone analysis for additional emotional insights\n- **Guided Audio Reflections**: Spoken prompts and meditation guidance"
      }
    ]
  },
];
