# React Web MVVM Boilerplate

A modern React TypeScript boilerplate implementing the Model-View-ViewModel (MVVM) architecture pattern, built with Vite for optimal development experience and performance.

## 🚀 Features

- **⚡ Vite** - Lightning fast build tool and development server
- **🔥 React 19** - Latest React with modern features
- **📘 TypeScript** - Full type safety and IntelliSense
- **🎨 Tailwind CSS** - Utility-first CSS framework
- **🏗️ MVVM Architecture** - Clean separation of concerns
- **🔄 TanStack Query** - Powerful data fetching and caching
- **📦 Zustand** - Simple and scalable state management
- **🌐 Axios** - HTTP client for API requests
- **🧪 Testing Setup** - Jest and React Testing Library
- **📋 ESLint** - Code linting with modern flat config
- **🔧 Zod** - Runtime type validation

## 📋 Prerequisites

- Node.js (v16 or higher)
- Yarn or npm package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-web-mvvm-boilerplate
```

2. Install dependencies:
```bash
yarn install
# or
npm install
```

3. Start the development server:
```bash
yarn dev
# or
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `yarn dev` | Start development server with HMR |
| `yarn start` | Alias for `yarn dev` |
| `yarn build` | Build the app for production |
| `yarn preview` | Preview the production build locally |
| `yarn lint` | Run ESLint to check code quality |
| `yarn lint:fix` | Run ESLint and automatically fix issues |

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   └── common/         # Common components (Button, Input, etc.)
├── features/           # Feature-based modules
│   └── example/        # Example feature implementation
├── lib/                # Library code
│   ├── api/           # API clients and endpoints
│   └── store/         # State management (Zustand stores)
├── providers/          # React context providers
├── styles/            # Global styles and CSS
├── types/             # TypeScript type definitions
└── main.tsx           # Application entry point
```

## 🎯 MVVM Architecture

This boilerplate follows the Model-View-ViewModel pattern:

- **Model**: Data layer (API clients, types, validation)
- **View**: React components (UI presentation)
- **ViewModel**: Custom hooks that manage state and business logic

### Example Structure:
```typescript
// Model: Type definitions and API calls
export interface Example {
  id: string;
  name: string;
  value: number;
  createdAt: Date;
}

export interface CreateExampleRequest {
  name: string;
  value: number;
}

// ViewModel: Business logic and state management
export const useExampleViewModel = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["examples"],
    queryFn: getExamples,
  });
  
  const createMutation = useMutation({
    mutationFn: (newExample: CreateExampleRequest) => createExample(newExample),
  });

  return {
    examples: data || [],
    isLoading,
    createExample: createMutation.mutate,
    isCreating: createMutation.isPending,
  };
};

// View: React component
export const ExampleView = () => {
  const { examples, isLoading, createExample, isCreating } = useExampleViewModel();
  const [newExample, setNewExample] = useState({ name: "", value: 0 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createExample(newExample);
    setNewExample({ name: "", value: 0 });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Form inputs */}
      </form>
      <ul>
        {examples.map(example => (
          <li key={example.id}>{example.name}: {example.value}</li>
        ))}
      </ul>
    </div>
  );
};
```

## 🔧 Configuration

### Vite Configuration
The project uses Vite for blazing fast development. Configuration is in `vite.config.js`.

### Tailwind CSS
Tailwind is configured in `tailwind.config.js` with content paths optimized for the project structure.

### ESLint
Modern flat config setup in `eslint.config.js` with TypeScript and React rules.

### TypeScript
Strict TypeScript configuration in `tsconfig.json` for maximum type safety.

## 📚 Key Dependencies

### Production
- **React 19.1.1** - UI library
- **@tanstack/react-query 5.87.4** - Server state management
- **zustand 5.0.8** - Client state management
- **axios 1.12.2** - HTTP client
- **zod 4.1.8** - Schema validation
- **tailwindcss 3.4.0** - CSS framework

### Development
- **vite 7.1.5** - Build tool
- **typescript 4.9.5** - Type checking
- **eslint 9.35.0** - Code linting
- **@vitejs/plugin-react 5.0.2** - React plugin for Vite

## 🌟 Best Practices

1. **Feature-based organization** - Group related components, hooks, and types
2. **TypeScript first** - Leverage types for better development experience
3. **Custom hooks for logic** - Keep components focused on presentation
4. **API abstraction** - Centralized API clients and error handling
5. **Consistent naming** - Follow established conventions

## 🚀 Getting Started with Development

1. **Create a new feature**:
   ```bash
   mkdir src/features/my-feature
   # Add components, hooks, types, and tests
   ```

2. **Add a new API endpoint**:
   ```typescript
   // src/lib/api/myApi.ts
   export const fetchData = () => apiClient.get('/api/data')
   ```

3. **Create a ViewModel hook**:
   ```typescript
   // src/features/my-feature/hooks/useMyFeatureViewModel.ts
   export const useMyFeatureViewModel = () => {
     // Business logic here
   }
   ```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- State management with [Zustand](https://github.com/pmndrs/zustand)
- Data fetching with [TanStack Query](https://tanstack.com/query)
