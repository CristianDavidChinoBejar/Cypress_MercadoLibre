# Cypress TypeScript Project

This project is a setup for end-to-end testing using Cypress with TypeScript. It includes sample tests, custom commands, and configuration files.

## Project Structure

```
cypress_test_basic
├── cypress
│   ├── e2e
│   │   └── sample.cy.ts        # Sample end-to-end test
│   ├── support
│   │   ├── commands.ts         # Custom Cypress commands
│   │   └── e2e.ts              # Global configurations for tests
│   └── fixtures
│       └── example.json        # Sample data for tests
├── cypress.config.ts           # Cypress configuration file
├── package.json                 # npm configuration file
├── tsconfig.json               # TypeScript configuration file
└── README.md                   # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd <name-project>
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run Cypress:**
   ```
   npm run open
   ```

4. **Run tests in headless mode:**
   ```
   npm run test
   ```
