# Tawhul Dashboard

A modern, feature-rich dashboard application built with React, TypeScript, and Redux Toolkit Query for managing perspectives, evidence, and compliance tracking.

## 🚀 How to Run the Project

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd tawhul-dashboard
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:5173
   ```

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🏗️ How the Code Was Built

### Architecture Overview

The application follows a **feature-based architecture** with clear separation of concerns:

```
src/
├── features/              # Feature modules
│   ├── Dashboard/        # Dashboard feature
│   │   ├── api/          # RTK Query API slices
│   │   ├── mockData/     # JSON mock data & loaders
│   │   ├── component/     # Feature-specific components
│   │   ├── hooks/        # Custom hooks
│   │   └── pages/        # Feature pages
│   └── Perspectives/     # Perspectives feature
│       ├── api/          # RTK Query API slices
│       ├── mockData/     # JSON mock data & loaders
│       ├── components/   # Feature-specific components
│       └── pages/        # Feature pages
├── components/           # Shared UI components
├── store/                # Redux store configuration
├── @types/               # TypeScript type definitions
└── routes/               # React Router configuration
```

### Technology Stack

- **React 19** - UI library with latest features
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and dev server
- **Redux Toolkit + RTK Query** - State management and data fetching
- **React Router v7** - Client-side routing
- **Tailwind CSS v4** - Utility-first CSS framework
- **Recharts** - Charting library for data visualization

### Key Implementation Details

#### 1. **State Management with Redux Toolkit Query**

- All data fetching is handled through RTK Query API slices
- Mock data is stored in JSON files and loaded via TypeScript loaders
- Each feature has its own API slice (e.g., `dashboardApi`, `perspectivesApi`)
- Automatic caching, loading states, and error handling

#### 2. **Feature-Based Organization**

- Each feature (Dashboard, Perspectives) is self-contained
- API slices and mock data are co-located with their features
- Promotes modularity and easier maintenance

#### 3. **Mock Data Structure**

- Mock data stored in JSON files for easy editing
- TypeScript loaders provide type safety and transformations
- JSX content in JSON is converted to React elements via helper functions

#### 4. **Loading States**

- Skeleton components for all major UI sections
- Individual loading states per component
- Smooth user experience during data fetching

#### 5. **Type Safety**

- Centralized type definitions in `@types/types.ts`
- Shared types across features
- Strong TypeScript coverage throughout

### Data Flow

1. **Components** use RTK Query hooks (e.g., `useGetLeadersQuery`)
2. **API Slices** fetch from mock data loaders
3. **Mock Data Loaders** read JSON files and provide typed data
4. **Redux Store** manages caching and state
5. **Components** re-render with fresh data

## 📋 Assumptions Made

1. **Authentication**: Currently, authentication is mocked (always returns `true` in `ProtectedRoute`). In production, this would integrate with a real auth service.

2. **API Endpoints**: All API calls are simulated with mock data. The structure is ready for real API integration by replacing `queryFn` implementations.

3. **Data Format**: Mock data structure matches expected API response format to ease future integration.

4. **Browser Support**: Modern browsers with ES2022+ support are assumed.

5. **Responsive Design**: The application is designed to work on desktop, tablet, and mobile devices using Tailwind's responsive utilities.

6. **Icon Handling**: Icons are React components, and some mock data stores `null` for icons that are mapped in components.

## 🔮 What Would Be Improved With More Time

### 1. **Real API Integration**
- Replace mock data with actual API endpoints
- Implement proper error handling and retry logic
- Add request/response interceptors for authentication
- Implement optimistic updates for better UX

### 2. **Authentication & Authorization**
- Implement real authentication flow (login, logout, token refresh)
- Add role-based access control (RBAC)
- Secure route protection
- Session management

### 3. **Testing**
- Unit tests for components and utilities
- Integration tests for API slices
- E2E tests for critical user flows
- Test coverage reporting

### 4. **Accessibility (a11y)**
- ARIA labels and roles
- Keyboard navigation support
- Screen reader optimization
- Focus management
- Color contrast improvements

### 5. **Internationalization (i18n)**
- Multi-language support
- RTL (Right-to-Left) language support
- Date and number formatting

### 6. **Data Management**
- Data synchronization strategies
- Optimistic UI updates

### 7. **Developer Experience**
- Storybook for component documentation
- Better TypeScript strict mode compliance
- Pre-commit hooks (Husky + lint-staged)
- Automated dependency updates

### 8. **Documentation**
- API documentation
- Component storybook
- Contributing guidelines

## 📁 Project Structure

```
tawhul-dashboard/
├── src/
│   ├── @types/              # TypeScript type definitions
│   ├── assets/              # Static assets (icons, images)
│   ├── components/          # Shared UI components
│   │   ├── common/         # Common components (Table, Tab, etc.)
│   │   ├── layout/         # Layout components (NavBar, Sidebar)
│   │   └── ui/             # UI primitives (Card, Button, etc.)
│   ├── features/           # Feature modules
│   │   ├── Dashboard/     # Dashboard feature
│   │   └── Perspectives/  # Perspectives feature
│   ├── hooks/              # Shared custom hooks
│   ├── layouts/            # Page layouts
│   ├── routes/             # Routing configuration
│   ├── store/              # Redux store setup
│   └── utils/              # Utility functions
├── public/                 # Public assets
└── package.json           # Dependencies and scripts
```

## 🛠️ Development Guidelines

### Adding New Features

1. Create a new feature folder in `src/features/`
2. Add API slice in `feature/api/`
3. Add mock data in `feature/mockData/`
4. Create components in `feature/components/`
5. Register API in `src/store/store.ts`

### Adding New Types

- Add shared types to `src/@types/types.ts`
- Feature-specific types can live in the feature folder

### Code Style

- Follow TypeScript best practices
- Use functional components with hooks
- Prefer composition over inheritance
- Keep components small and focused

