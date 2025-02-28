# Job Match Dashboard

A modern web application that helps users find their perfect job match based on their skills and preferences. The dashboard provides an intuitive interface to browse, filter, and apply for jobs with a match score system that highlights the best opportunities for each user.

![Job Match Dashboard](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80)

## Features

- **Job Match Scoring**: Automatically calculates how well your skills match with job requirements
- **Intuitive Filtering**: Filter jobs by match score, search for specific skills, companies, or locations
- **Detailed Job View**: View comprehensive job details including required skills and descriptions
- **Skill Gap Analysis**: Identifies missing skills needed for specific positions
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between dark and light themes based on your preference

## Tech Stack

- **Framework**: Next.js 13 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui component library
- **Icons**: Lucide React
- **Theming**: next-themes for dark/light mode support
- **TypeScript**: For type safety and better developer experience

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Home page component
├── components/           # React components
│   ├── ui/               # UI components from shadcn/ui
│   ├── JobCard.tsx       # Job listing card component
│   ├── JobDetailModal.tsx # Job details modal
│   ├── JobMatchDashboard.tsx # Main dashboard component
│   ├── ThemeProvider.tsx # Theme provider component
│   ├── ThemeToggle.tsx   # Theme toggle component
│   └── UserSkillsCard.tsx # User skills display component
├── lib/                  # Utility functions and types
│   ├── data.ts           # Mock data and data fetching functions
│   ├── types.ts          # TypeScript type definitions
│   └── utils.ts          # Utility functions
├── public/               # Static assets
├── .eslintrc.json        # ESLint configuration
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Elite1dev1/project.git
cd project
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Building for Production

To create an optimized production build:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm run start
# or
yarn start
```

## Static Export

This project is configured for static exports. To generate static files:

```bash
npm run build
# or
yarn build
```

The static files will be generated in the `out` directory.

## Customization

### Adding Real Data

To replace the mock data with real data:

1. Update the data fetching functions in `lib/data.ts`
2. Connect to your API or database
3. Ensure the data structure matches the defined TypeScript interfaces

### Modifying Themes

The color scheme can be customized in `app/globals.css` by modifying the CSS variables in the `:root` and `.dark` selectors.

## Future Enhancements

- User authentication and profile management
- Job application tracking
- Skill development recommendations
- Company profiles and reviews
- Interview preparation resources
- Salary insights and comparisons

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)
