
import { Project } from './types';
import cover  from '../../../public/studentmanagement/cover.png';
import coverCalc from '../../../public/calculator/cover.png'

export const academicProjects: Project[] = [
  {
    title: "Calculator App NET-WPF",
    description: "A calculator application built with C# and displayed using Windows Presentation Foundation (WPF). This project was completed for a .NET/C# class.",
    tech: [
      { name: "C#", category: "language" },
      { name: "WPF", category: "frontend" },
      { name: ".NET", category: "backend" },
    ],
    challenges: [
      "Created a responsive calculator interface using WPF controls",
      "Implemented mathematical operations with proper order of operations",
      "Designed a user-friendly layout with keyboard shortcuts",
    ],

    image: coverCalc,
    githubUrl: "https://github.com/brodynelly/CalculatorC-Sharp-/tree/main",
  },

  {
    title: "Student Management System",
    description: "A comprehensive WPF application for managing undergraduate and graduate students, their enrolled courses, and GPA calculations. Built for Module 11, this system implements inheritance, data validation, and serialization with a clean, intuitive user interface.",
    tech: [
      { name: "C#", category: "language" },
      { name: "WPF", category: "frontend" },
      { name: ".NET", category: "backend" },
      { name: "OOP", category: "language" },
      { name: "JSON Serialization", category: "backend" },
    ],
    challenges: [
      "Implemented a robust class hierarchy with inheritance for different student types",
      "Created comprehensive data validation with appropriate error handling",
      "Designed an intuitive UI with real-time updates through data binding",
      "Built persistence through JSON serialization for saving and loading student data",
      "Implemented intelligent sorting for both students and courses",
    ],
    image: cover,
    githubUrl: "https://github.com/brodynelly/Student-Management-System",
    documentation: [
      {
        title: "Overview",
        content: "# Student Management System\n\nA comprehensive WPF application for managing undergraduate and graduate students along with their enrolled courses. The system allows users to add, edit, and delete student records and courses, automatically calculate GPAs, and persist data through serialization.\n\n## Key Features\n\n- **Student Management**: Add, edit, and delete both undergraduate and graduate students\n- **Course Tracking**: Manage courses with appropriate validation for student level\n- **GPA Calculation**: Automatic weighted GPA calculation based on course grades\n- **Data Persistence**: Save and load functionality using JSON serialization\n- **Intelligent Sorting**: Students sorted by name and courses by prefix/number\n- **Comprehensive Validation**: Input validation with helpful error messages"
      },
      {
        title: "Class Structure",
        content: "## Class Structure\n\n### Class Hierarchy\n\nThe application implements an object-oriented design with inheritance:\n\n- **Person (Base Class)**\n  - Contains common properties like first name, last name, and date of birth\n  - Provides base functionality for all person types\n\n- **UndergraduateStudent (Derived Class)**\n  - Inherits from Person\n  - Restricted to courses with numbers between 1000-4999\n  - Contains undergraduate-specific properties and methods\n\n- **GraduateStudent (Derived Class)**\n  - Inherits from Person\n  - Restricted to courses with numbers between 5000-9999\n  - Contains graduate-specific properties and methods\n\n- **Course Class**\n  - Properties:\n    - Course Name (string)\n    - Course Prefix (string)\n    - Course Number (int)\n    - Grade (double: 0.0-4.0)\n  - Methods for validation and display"
      },
      {
        title: "Features & Implementation",
        content: "## Features & Implementation\n\n### Student Management\n\n- **Adding Students**:\n  - Input fields for student information (name, DOB, etc.)\n  - Radio buttons to select student type (Undergraduate/Graduate)\n  - Validation ensures all required fields are completed\n\n- **Viewing Students**:\n  - Students displayed in a ListBox sorted alphabetically by last name, then first name\n  - Selecting a student loads their profile and associated courses\n\n- **Editing & Deleting Students**:\n  - Select a student to pre-fill the form for editing\n  - Delete button removes the selected student and their courses\n\n### Course Management\n\n- **Adding Courses**:\n  - Input fields for course details (name, prefix, number, grade)\n  - Validation ensures course numbers are appropriate for student type:\n    - Undergraduate: 1000-4999\n    - Graduate: 5000-9999\n\n- **GPA Calculation**:\n  - Automatically calculated as a weighted average of course grades\n  - Updates in real-time when courses are added, edited, or removed\n\n- **Course Sorting**:\n  - Courses displayed in order by prefix, then by number\n\n### Data Persistence\n\n- **Save Functionality**:\n  - Serializes all student and course data to a JSON file\n  - Includes error handling for file operations\n\n- **Load Functionality**:\n  - Deserializes data from JSON file\n  - Restores complete student and course information"
      },
      {
        title: "Usage Guide",
        content: "## Usage Guide\n\n### Managing Students\n\n1. **Adding a New Student**:\n   - Fill in the student information fields (First Name, Last Name, Date of Birth)\n   - Select either 'Undergraduate' or 'Graduate' student type\n   - Click 'Add Student'\n   - The student will appear in the student list, sorted alphabetically\n\n2. **Editing a Student**:\n   - Select the student from the list\n   - Their information will populate the input fields\n   - Make your changes\n   - Click 'Update Student'\n\n3. **Deleting a Student**:\n   - Select the student from the list\n   - Click 'Delete Student'\n   - Confirm the deletion when prompted\n\n### Managing Courses\n\n1. **Adding a Course to a Student**:\n   - Select a student from the list\n   - Fill in the course details (Name, Prefix, Number, Grade)\n   - Click 'Add Course'\n   - The course will appear in the course list for that student\n   - The student's GPA will automatically update\n\n2. **Editing a Course**:\n   - Select the student who owns the course\n   - Select the course from the course list\n   - Make your changes to the course details\n   - Click 'Update Course'\n\n3. **Deleting a Course**:\n   - Select the student who owns the course\n   - Select the course from the course list\n   - Click 'Delete Course'\n\n### Data Persistence\n\n1. **Saving Student Data**:\n   - Click 'Save Students' button\n   - Choose a location to save the JSON file\n   - Click 'Save'\n\n2. **Loading Student Data**:\n   - Click 'Load Students' button\n   - Navigate to and select the previously saved JSON file\n   - Click 'Open'\n   - All student and course data will be loaded into the application"
      }
    ]
  },
  {
    title: "Plain Text Editor",
    description: "A lightweight plain text editor built using C# and WPF for Module 8 of the course. The project demonstrates essential file I/O, dynamic UI scaling, and stateful document handling following the MVC architecture pattern.",
    tech: [
      { name: "C#", category: "language" },
      { name: "WPF", category: "frontend" },
      { name: ".NET", category: "backend" },
      { name: "File I/O", category: "backend" },
    ],
    challenges: [
      "Implemented responsive UI with dynamic scaling and proper overflow handling",
      "Created a complete file management system with validation and state tracking",
      "Designed an intuitive menu system with contextual states based on document status",
      "Built intelligent file path handling with persistence of last used locations",
    ],
    images: [
      "/texteditor/cover.webp",
      "/texteditor/one.webp",
      "/texteditor/two.webp",
      "/texteditor/three.webp",
    ],
    image: "/texteditor/cover.webp",
    githubUrl: "https://github.com/brodynelly/TextFileEditorWPF/tree/main",
    documentation: [
      {
        title: "Overview",
        content: "# Plain Text Editor\n\nA lightweight plain text editor built using C# and WPF (Windows Presentation Foundation) that demonstrates essential file I/O operations, dynamic UI scaling, and stateful document handling following the MVC architecture pattern.\n\n## Key Features\n\n- **Responsive Interface**: Text area scales with window size and properly handles overflow\n- **Complete File Management**: Open, save, and create text documents with proper state tracking\n- **Intelligent Menu System**: Context-aware menu items that enable/disable based on document state\n- **Change Tracking**: Prompts users to save unsaved changes before destructive actions\n- **File Path Intelligence**: Remembers last used locations and pre-fills file names"
      },
      {
        title: "User Interface",
        content: "## User Interface\n\n### Main Components\n\n- **Resizable TextBox**: The primary editing area scales with the window and wraps long lines. Vertical scrollbars appear automatically when content overflows.\n\n- **Menu Bar**: Provides access to all application functions:\n  - **File Menu**:\n    - New: Start a new, blank document\n    - Open: Open existing .txt files using a file dialog\n    - Save: Save to the current file, or prompt if unsaved\n    - Save As: Save the current content to a new file\n    - Exit: Closes the application\n  - **Help Menu**:\n    - About: Displays application and developer information\n\n### Dynamic Behavior\n\n- All UI components maintain proper layout and functionality when resizing the window\n- Menu items are contextually enabled or disabled based on the current document state\n- Unsaved changes are tracked and users are prompted before potential data loss"
      },
      {
        title: "Implementation Details",
        content: "## Implementation Details\n\n### Architecture\n\nThe application follows the Model-View-Controller (MVC) pattern:\n\n- **Model**: Manages document content, file paths, and change tracking\n- **View**: WPF interface with XAML-defined components\n- **Controller**: Event handlers that connect user actions to model operations\n\n### Key Components\n\n- **Document State Management**:\n  - Tracks whether the current document has unsaved changes\n  - Maintains the current file path for save operations\n  - Handles the 'dirty' state to prompt users when needed\n\n- **File Operations**:\n  - File validation ensures only .txt files can be opened and saved\n  - Exception handling for all I/O operations\n  - Intelligent path management remembers previous locations\n\n- **UI Responsiveness**:\n  - TextBox configured for proper wrapping and scrolling\n  - Menu items bound to command handlers with conditional enabling\n  - Window resize events properly handled"
      },
      {
        title: "Usage Guide",
        content: "## Usage Guide\n\n### Basic Text Editing\n\n1. **Creating a New Document**:\n   - Launch the application to start with a blank document\n   - Select File → New to clear the current document\n   - You'll be prompted to save any unsaved changes\n\n2. **Opening Existing Files**:\n   - Select File → Open\n   - Navigate to and select a .txt file\n   - The file content will load into the editor\n\n3. **Saving Documents**:\n   - **Save**: Select File → Save\n     - If this is a new document, you'll be prompted for a location\n     - If the document was previously saved, it will save to the same location\n   - **Save As**: Select File → Save As\n     - Always prompts for a new location\n     - The file dialog will default to the last used location\n\n4. **Editing Text**:\n   - Type directly in the main text area\n   - The editor supports standard keyboard shortcuts:\n     - Ctrl+C: Copy\n     - Ctrl+X: Cut\n     - Ctrl+V: Paste\n     - Ctrl+Z: Undo\n     - Ctrl+Y: Redo\n\n5. **Exiting the Application**:\n   - Select File → Exit or click the window close button\n   - If there are unsaved changes, you'll be prompted to save them"
      }
    ]
  },
  {
    title: "Library Management System",
    description: "A comprehensive library management system for a library to store records of books, keep track of librarians, patrons and record the transactions between books leaving and returning from the Library. This project utilizes MySQL for the DBMS and Python for the backend to pose the necessary SQL queries to retrieve data from the database.",
    tech: [
      { name: "Python", category: "language" },
      { name: "MySQL", category: "database" },
      { name: "SQL", category: "language" },
    ],
    challenges: [
      "Designed a normalized database schema for efficient data storage and retrieval",
      "Implemented Python backend to handle complex SQL queries",
      "Created user-friendly interfaces for different roles (librarians, patrons)",
      "Developed a transaction system for tracking book checkouts and returns",
    ],

    image: "/LibraryManagement/screenshot.webp",
    githubUrl: "https://github.com/brodynelly/Library-Database-Mangement",
    documentation: [
      {
        title: "Overview",
        content: "# Library Management System\n\nA comprehensive library management system for a library to store records of books, keep track of librarians, patrons and record the transactions between books leaving and returning from the Library. This project utilizes MySQL for the DBMS and the application uses Python to work as the backend to pose the necessary SQL queries to retrieve the necessary data from the database.\n\n## Key Features\n\n- **Book Management**: Catalog and track all library materials\n- **Patron Management**: Register and manage library users\n- **Transaction System**: Handle checkouts, returns, and renewals\n- **Multiple User Views**: Different interfaces for different roles\n- **Search Functionality**: Advanced search options for books and patrons"
      },
      {
        title: "Deployment Guide",
        content: "## Deployment Guide\n\nDeploying the Database and Utilizing the Library Application can be done in two different segments.\n\n### Database Deployment\n\nI tried to make the process as easy as possible for anyone who might be using this application. Personally, in creating this application I was working with MySQL from my local computer and created a new user and instance.\n\nIf you haven't already done this, I would recommend downloading MySQL and creating an instance and a user, keeping track of the username, password, and the name you used for your host. After you have done this, you can follow these steps to deploy the DATABASE:\n\n1. Go into the `./Database` directory from the root file\n2. Change the information in `database.py` to correspond to your created MySQL user, password, and host\n3. Follow the instructions in `database.py` to help you run the code and deploy the database and populate the database with artificial data\n\n*Note: You are able to tinker with the populated data in `database.py` by adding more rows to the INSERT INTO commands*"
      },
      {
        title: "Application Usage",
        content: "## Application Usage\n\nInteracting with the database that you have just created with the LibraryApp application coded in Python is straightforward. This is an application that allows for different end users/different views to interact with the Library Management database.\n\nTo actually use the database application, you must only do two things:\n\n1. Navigate to `./LibraryApp` and in `sqlqueries.py` please change the information in `connect_to_database()` to accommodate your instance of MySQL that you created in `database.py` in the previous set of directions\n\n2. After changing this, you are ready to connect to your created database and start using the library application. To do this, run the Python file `main.py` and enjoy the application\n\n### User Interface\n\nThe application provides different views for:\n- Librarians: Manage books, patrons, and transactions\n- Patrons: Browse books, check account status, and request items\n- Administrators: Oversee system operations and generate reports"
      },
      {
        title: "Implementation Details",
        content: "## Implementation Details\n\n### Database Schema\n- **Books Table**: ISBN, title, author, publisher, genre, etc.\n- **Patrons Table**: ID, name, contact info, membership status\n- **Transactions Table**: Checkout date, due date, return date\n- **Librarians Table**: Staff information and access levels\n\n### Core Functionality\n- **Book Checkout Process**: Validates patron status and book availability\n- **Return Processing**: Updates inventory and calculates fines if applicable\n- **Catalog Management**: CRUD operations for library materials\n- **User Authentication**: Secure login for staff members\n\n### Python Backend\n- Handles SQL query generation and execution\n- Processes data for presentation to users\n- Implements business logic for library operations\n- Provides error handling and data validation"
      }
    ]
  },
  {
    title: "Advanced Priority Queue Management in C",
    description: "An advanced implementation of a Priority Queue in C, showcasing skills in creating efficient, scalable data structures with optimal time complexity for insertion and extraction operations.",
    tech: [
      { name: "C", category: "language" },
      { name: "Data Structures", category: "language" },
      { name: "Algorithms", category: "language" },
    ],
    challenges: [
      "Implemented priority-based insertion and extraction with optimal time complexity",
      "Designed dynamic resizing capabilities to handle varying workloads",
      "Optimized memory allocation and deallocation to prevent memory leaks",
      "Created comprehensive error handling for edge cases",
    ],
    image: "/Datastructures/PQueue.webp",
    githubUrl: "https://github.com/brodynelly/data-structure-basics/tree/main/PQueue%20funct/lab",
    documentation: [
      {
        title: "Overview",
        content: "# Priority Queue Implementation in C\n\nThis project implements a priority queue data structure in C, providing efficient operations for inserting elements with priorities and extracting the highest-priority element. The implementation uses a binary heap as the underlying data structure to achieve optimal time complexity.\n\n## Key Features\n\n- **O(log n) Insertion**: Elements are inserted with their priority in logarithmic time\n- **O(log n) Extraction**: Highest-priority element extraction in logarithmic time\n- **O(1) Peek**: Constant-time access to the highest-priority element\n- **Dynamic Resizing**: Automatic capacity adjustment based on queue size\n- **Memory Management**: Careful allocation and deallocation to prevent leaks"
      },
      {
        title: "Implementation Details",
        content: "## Implementation Details\n\n### Data Structure\n\nThe priority queue is implemented using a binary max-heap with the following structure:\n\n```c\ntypedef struct {\n    int* data;       // Array to store elements\n    int* priorities; // Array to store priorities\n    int capacity;    // Maximum capacity\n    int size;        // Current number of elements\n} PriorityQueue;\n```\n\n### Core Operations\n\n- **Initialization**: Creates an empty priority queue with initial capacity\n- **Insertion**: Places a new element in the appropriate position based on priority\n- **Heapify**: Maintains the heap property after insertions and extractions\n- **Extract Max**: Removes and returns the highest-priority element\n- **Resize**: Doubles capacity when full, shrinks when significantly empty\n\n### Memory Management\n\nThe implementation carefully manages memory through:\n- Proper initialization of all data structures\n- Reallocation during resize operations\n- Complete cleanup during queue destruction"
      },
      {
        title: "Usage Guide",
        content: "## Usage Guide\n\n### Creating a Priority Queue\n\n```c\n// Create a priority queue with initial capacity 10\nPriorityQueue* pq = pq_create(10);\n```\n\n### Basic Operations\n\n```c\n// Insert elements with priorities\npq_insert(pq, 42, 5);  // Insert value 42 with priority 5\npq_insert(pq, 18, 10); // Insert value 18 with priority 10\npq_insert(pq, 27, 7);  // Insert value 27 with priority 7\n\n// Get highest priority element without removing it\nint top = pq_peek(pq);  // Returns 18 (highest priority)\n\n// Extract highest priority element\nint highest = pq_extract_max(pq);  // Returns 18 and removes it\n\n// Check if empty\nint isEmpty = pq_is_empty(pq);\n\n// Get current size\nint size = pq_size(pq);\n\n// Clean up when done\npq_destroy(pq);\n```\n\n### Error Handling\n\nAll functions include proper error checking:\n- NULL checks for queue pointer\n- Capacity validation during insertion\n- Empty queue checks during extraction"
      }
    ]
  },
  {
    title: "Optimized Binary Search Tree Implementation in C",
    description: "A robust implementation of a Binary Search Tree (BST) in C, highlighting expertise in efficient data structures with balanced tree operations for optimal search performance.",
    tech: [
      { name: "C", category: "language" },
      { name: "Data Structures", category: "language" },
      { name: "Algorithms", category: "language" },
    ],
    challenges: [
      "Developed efficient node insertion and deletion algorithms",
      "Implemented balanced tree operations to maintain optimal search performance",
      "Created comprehensive traversal methods for different use cases",
      "Designed self-balancing mechanisms to prevent performance degradation",
    ],
    image: "/Datastructures/binarytree.webp",
    githubUrl: "https://github.com/brodynelly/data-structure-basics/tree/main/binary%20search%20(BST)",
    documentation: [
      {
        title: "Overview",
        content: "# Binary Search Tree Implementation in C\n\nThis project implements a self-balancing Binary Search Tree (BST) in C, providing efficient operations for inserting, searching, and deleting elements while maintaining optimal tree height for performance.\n\n## Key Features\n\n- **O(log n) Search**: Efficient element lookup in logarithmic time\n- **O(log n) Insertion**: New elements are added while maintaining tree balance\n- **O(log n) Deletion**: Elements are removed with proper tree restructuring\n- **Multiple Traversal Methods**: In-order, pre-order, post-order, and level-order\n- **Self-Balancing**: Automatic rebalancing to maintain optimal tree height"
      },
      {
        title: "Implementation Details",
        content: "## Implementation Details\n\n### Data Structure\n\nThe BST is implemented using a node-based structure:\n\n```c\ntypedef struct Node {\n    int data;           // Node value\n    struct Node* left;  // Pointer to left child\n    struct Node* right; // Pointer to right child\n    int height;         // Height for balancing\n} Node;\n\ntypedef struct {\n    Node* root;         // Root of the tree\n    int size;           // Number of nodes\n} BST;\n```\n\n### Core Operations\n\n- **Initialization**: Creates an empty BST\n- **Insertion**: Adds a new node while maintaining the BST property\n- **Deletion**: Removes a node with proper successor handling\n- **Search**: Finds a node with a specific value\n- **Balancing**: Performs rotations to maintain optimal tree height\n\n### Traversal Methods\n\n- **In-order**: Left subtree, current node, right subtree (sorted order)\n- **Pre-order**: Current node, left subtree, right subtree\n- **Post-order**: Left subtree, right subtree, current node\n- **Level-order**: Breadth-first traversal by levels"
      },
      {
        title: "Usage Guide",
        content: "## Usage Guide\n\n### Creating a BST\n\n```c\n// Create a new BST\nBST* tree = bst_create();\n```\n\n### Basic Operations\n\n```c\n// Insert elements\nbst_insert(tree, 50);\nbst_insert(tree, 30);\nbst_insert(tree, 70);\nbst_insert(tree, 20);\nbst_insert(tree, 40);\n\n// Search for an element\nNode* found = bst_search(tree, 30);  // Returns node with value 30\n\n// Delete an element\nbst_delete(tree, 30);\n\n// Check if empty\nint isEmpty = bst_is_empty(tree);\n\n// Get current size\nint size = bst_size(tree);\n```\n\n### Traversals\n\n```c\n// Print elements in different orders\nbst_inorder_traversal(tree, print_node);    // 20, 40, 50, 70\nbst_preorder_traversal(tree, print_node);   // 50, 20, 40, 70\nbst_postorder_traversal(tree, print_node);  // 20, 40, 70, 50\nbst_levelorder_traversal(tree, print_node); // 50, 20, 70, 40\n\n// Clean up when done\nbst_destroy(tree);\n```\n\n### Balancing\n\nThe tree automatically maintains balance during insertions and deletions using AVL rotations."
      }
    ]
  },
  {
    title: "Efficient Linked List Operations in C",
    description: "A comprehensive implementation of singly and doubly linked lists in C, showcasing deep understanding of data structures, pointer manipulation, and memory management techniques.",
    tech: [
      { name: "C", category: "language" },
      { name: "Data Structures", category: "language" },
      { name: "Memory Management", category: "language" },
      { name: "Pointers", category: "language" },
    ],
    challenges: [
      "Implemented various linked list operations with optimal time complexity",
      "Designed memory-efficient node structures to minimize resource usage",
      "Created robust error handling for edge cases in list manipulation",
      "Developed specialized operations like cycle detection and in-place reversal",
    ],
    image: "/Datastructures/linkedlist.webp",
    githubUrl: "https://github.com/brodynelly/data-structure-basics/tree/main/Linked%20List%20Function",
    documentation: [
      {
        title: "Overview",
        content: "# Linked List Implementation in C\n\nThis project provides comprehensive implementations of both singly and doubly linked lists in C, with a focus on memory efficiency, performance, and robust error handling. The implementation includes standard operations as well as advanced algorithms for specialized tasks.\n\n## Key Features\n\n- **Singly Linked List**: Forward-only traversal with minimal memory footprint\n- **Doubly Linked List**: Bidirectional traversal for flexible operations\n- **Circular Linked List**: Specialized variant for cyclic data structures\n- **Memory Management**: Careful allocation and deallocation to prevent leaks\n- **Advanced Algorithms**: Cycle detection, in-place reversal, and more"
      },
      {
        title: "Implementation Details",
        content: "## Implementation Details\n\n### Data Structures\n\n#### Singly Linked List\n```c\ntypedef struct Node {\n    int data;           // Node value\n    struct Node* next;  // Pointer to next node\n} Node;\n\ntypedef struct {\n    Node* head;         // First node in the list\n    Node* tail;         // Last node in the list (for O(1) append)\n    int size;           // Number of nodes\n} SinglyLinkedList;\n```\n\n#### Doubly Linked List\n```c\ntypedef struct DNode {\n    int data;           // Node value\n    struct DNode* next; // Pointer to next node\n    struct DNode* prev; // Pointer to previous node\n} DNode;\n\ntypedef struct {\n    DNode* head;        // First node in the list\n    DNode* tail;        // Last node in the list\n    int size;           // Number of nodes\n} DoublyLinkedList;\n```\n\n### Core Operations\n\n- **Initialization**: Creates an empty list\n- **Insertion**: At beginning, end, or specific position\n- **Deletion**: By position or value\n- **Traversal**: Forward and backward (for doubly linked)\n- **Search**: Find elements by value or position\n\n### Advanced Algorithms\n\n- **Cycle Detection**: Floyd's Tortoise and Hare algorithm\n- **In-place Reversal**: Reverse a list without extra space\n- **Merge Sorted Lists**: Combine two sorted lists efficiently\n- **Remove Duplicates**: Filter duplicate values"
      },
      {
        title: "Usage Guide",
        content: "## Usage Guide\n\n### Singly Linked List\n\n```c\n// Create a new singly linked list\nSinglyLinkedList* list = sll_create();\n\n// Add elements\nsll_append(list, 10);  // Add to end: [10]\nsll_prepend(list, 5);  // Add to beginning: [5, 10]\nsll_insert_at(list, 7, 1);  // Insert at position: [5, 7, 10]\n\n// Access elements\nint first = sll_get_first(list);  // Returns 5\nint last = sll_get_last(list);   // Returns 10\nint at_pos = sll_get_at(list, 1); // Returns 7\n\n// Remove elements\nsll_remove_first(list);  // List: [7, 10]\nsll_remove_last(list);   // List: [7]\nsll_remove_at(list, 0);  // List: []\n\n// Clean up\nsll_destroy(list);\n```\n\n### Doubly Linked List\n\n```c\n// Create a new doubly linked list\nDoublyLinkedList* dlist = dll_create();\n\n// Add elements\ndll_append(dlist, 10);\ndll_prepend(dlist, 5);\n\n// Traverse in both directions\ndll_forward_traversal(dlist, print_node);  // 5, 10\ndll_backward_traversal(dlist, print_node); // 10, 5\n\n// Clean up\ndll_destroy(dlist);\n```\n\n### Advanced Operations\n\n```c\n// Detect cycle in a list\nbool has_cycle = sll_has_cycle(list);\n\n// Reverse a list in-place\nsll_reverse(list);\n\n// Merge two sorted lists\nSinglyLinkedList* merged = sll_merge_sorted(list1, list2);\n```"
      }
    ]
  },
  {
    title: "Advanced String Utility Toolkit in C",
    description: "A comprehensive suite of string utility functions in C, demonstrating proficiency in low-level programming, memory management, and efficient string manipulation techniques.",
    tech: [
      { name: "C", category: "language" },
      { name: "String Processing", category: "language" },
      { name: "Memory Management", category: "language" },
      { name: "Algorithm Optimization", category: "language" },
    ],
    challenges: [
      "Developed memory-safe string duplication and concatenation functions",
      "Implemented efficient case-insensitive comparison algorithms",
      "Created robust tokenization utilities for complex string parsing",
      "Optimized string search algorithms for large text processing",
      "Designed buffer overflow protection for all string operations",
    ],
    image: "/Datastructures/stringUtility.webp",
    githubUrl: "https://github.com/brodynelly/data-structure-basics/tree/main/String%20Utility%20Functions",
    documentation: [
      {
        title: "Overview",
        content: "# String Utility Toolkit in C\n\nThis project provides a comprehensive set of string manipulation functions in C, focusing on memory safety, performance, and robust error handling. The toolkit extends the standard C string library with additional functionality and safety features.\n\n## Key Features\n\n- **Memory-Safe Operations**: All functions include buffer overflow protection\n- **Efficient Algorithms**: Optimized implementations for string manipulation\n- **Extended Functionality**: Beyond what the standard C library provides\n- **Comprehensive Error Handling**: Detailed error reporting and recovery\n- **Unicode Support**: Basic handling of UTF-8 encoded strings"
      },
      {
        title: "Implementation Details",
        content: "## Implementation Details\n\n### Core String Functions\n\n- **String Duplication**: Safe alternative to `strdup()`\n- **String Concatenation**: Buffer-aware version of `strcat()`\n- **String Comparison**: Case-sensitive and case-insensitive options\n- **Substring Search**: Efficient implementations of various search algorithms\n- **String Transformation**: Case conversion, trimming, padding\n\n### Advanced Features\n\n- **String Tokenization**: Split strings by delimiters with proper memory management\n- **Pattern Matching**: Simple wildcard and regex-like pattern matching\n- **String Building**: Dynamic string construction without buffer overflows\n- **String Validation**: Check strings against various formats and constraints\n\n### Memory Management\n\nAll functions follow these principles:\n\n- Explicit buffer size parameters to prevent overflows\n- NULL pointer checks before operations\n- Proper memory allocation and deallocation\n- Consistent error reporting through return values"
      },
      {
        title: "Usage Guide",
        content: "## Usage Guide\n\n### Basic String Operations\n\n```c\n// Safe string duplication\nchar* copy = str_dup(\"original string\");\n\n// Safe string concatenation\nchar buffer[100];\nstr_copy(buffer, \"Hello, \", sizeof(buffer));\nstr_concat(buffer, \"World!\", sizeof(buffer));  // buffer now contains \"Hello, World!\"\n\n// Case-insensitive comparison\nint result = str_compare_case_insensitive(\"hello\", \"HELLO\");  // Returns 0 (equal)\n\n// String trimming\nchar trimmed[100];\nstr_trim(\" Hello, World! \", trimmed, sizeof(trimmed));  // trimmed contains \"Hello, World!\"\n```\n\n### String Tokenization\n\n```c\n// Split a string by delimiter\nchar input[] = \"apple,orange,banana\";\nchar** tokens;\nint count = str_split(input, ',', &tokens);\n\n// Use tokens\nfor (int i = 0; i < count; i++) {\n    printf(\"%s\\n\", tokens[i]);  // Prints each fruit on a new line\n}\n\n// Free allocated memory\nstr_free_tokens(tokens, count);\n```\n\n### String Building\n\n```c\n// Create a dynamic string builder\nStringBuilder* sb = sb_create(16);  // Initial capacity of 16 bytes\n\n// Append various data\nsb_append_str(sb, \"Hello, \");\nsb_append_str(sb, \"World!\");\nsb_append_char(sb, ' ');\nsb_append_int(sb, 2023);\n\n// Get the final string\nchar* result = sb_to_string(sb);  // Returns \"Hello, World! 2023\"\n\n// Clean up\nsb_destroy(sb);\nfree(result);  // Don't forget to free the returned string\n```"
      }
    ]
  },



  {
    title: "Algorithm Visualization Tool",
    description: "An educational web application that visually demonstrates common sorting and searching algorithms.",
    tech: [
      { name: "React", category: "frontend" },
      { name: "D3.js", category: "frontend" },
      { name: "TypeScript", category: "language" },
    ],
    challenges: [
      "Created smooth animations to visualize algorithm execution steps",
      "Implemented speed controls for algorithm demonstrations",
      "Designed an intuitive UI for educational purposes",
    ],
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1421&auto=format&fit=crop",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];
