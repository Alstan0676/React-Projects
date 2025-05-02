# Cruiscape - Goa Dinner Cruise Booking Platform

A modern web application for booking dinner cruises in Goa, built with Next.js, TypeScript, Tailwind CSS, and Prisma.

## Features

- 🚢 Browse and book dinner cruises
- 👤 User authentication and registration
- 🛠️ Admin panel for managing cruises
- 💳 Secure payment processing
- 📱 Responsive design
- 🔍 SEO optimized
- 📸 Image upload support

## Tech Stack

- **Frontend**: Next.js 13 (App Router), React, TypeScript
- **Styling**: Tailwind CSS, Headless UI
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: NextAuth.js
- **Image Storage**: Cloudinary
- **State Management**: React Hooks
- **Form Handling**: React Hook Form (to be implemented)
- **API**: REST API with Next.js API routes

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- PostgreSQL
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/cruiscape.git
   cd cruiscape
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Update the variables with your values

4. Set up the database:
   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Database Setup

1. Create a PostgreSQL database
2. Update the `DATABASE_URL` in `.env`
3. Run migrations:
   ```bash
   npx prisma migrate dev
   ```

## Project Structure

```
cruiscape/
├── src/
│   ├── app/                 # Next.js 13 app directory
│   ├── components/          # Reusable components
│   ├── lib/                 # Utility functions and configurations
│   └── types/              # TypeScript type definitions
├── prisma/                 # Prisma schema and migrations
├── public/                 # Static assets
└── package.json           # Project dependencies and scripts
```

## Development

### Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

### Environment Variables

Required environment variables:

- `DATABASE_URL`: PostgreSQL connection string
- `NEXTAUTH_URL`: Your application URL
- `NEXTAUTH_SECRET`: Random string for session encryption
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`: Cloudinary cloud name
- `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET`: Cloudinary upload preset

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design inspiration from [Thrillophilia](https://www.thrillophilia.com/collections/cruises-in-goa)
- Icons from [Heroicons](https://heroicons.com/)
- UI components from [Headless UI](https://headlessui.dev/) 