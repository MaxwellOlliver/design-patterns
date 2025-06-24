#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Design Pattern Project Creator ===${NC}"
echo ""

# Function to validate input
validate_input() {
    local input="$1"
    local valid_options="$2"
    
    for option in $valid_options; do
        if [ "$input" = "$option" ]; then
            return 0
        fi
    done
    return 1
}

# Ask for design pattern category
echo -e "${YELLOW}Select the design pattern category:${NC}"
echo "1) creational"
echo "2) structural" 
echo "3) behavioral"
echo ""

while true; do
    read -p "Enter category (1-3 or name): " category_input
    
    case $category_input in
        1|creational|Creational)
            category="creational"
            break
            ;;
        2|structural|Structural)
            category="structural"
            break
            ;;
        3|behavioral|Behavioral)
            category="behavioral"
            break
            ;;
        *)
            echo -e "${RED}Invalid input. Please enter 1, 2, 3, or the category name.${NC}"
            ;;
    esac
done

echo -e "${GREEN}Selected category: $category${NC}"
echo ""

# Ask for project name
while true; do
    read -p "Enter project name (lowercase, no spaces): " project_name
    
    # Validate project name
    if [[ "$project_name" =~ ^[a-z0-9-]+$ ]]; then
        break
    else
        echo -e "${RED}Invalid project name. Use only lowercase letters, numbers, and hyphens.${NC}"
    fi
done

echo -e "${GREEN}Project name: $project_name${NC}"
echo ""

# Create project directory
project_path="apps/$category/$project_name"
echo -e "${YELLOW}Creating project at: $project_path${NC}"

# Create directories
mkdir -p "$project_path/src"

# Create package.json
cat > "$project_path/package.json" << EOF
{
  "name": "$project_name",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "tsx watch src/main.ts",
    "build": "tsc",
    "start": "node dist/main.js",
    "type-check": "tsc --noEmit",
    "clean": "rm -rf dist"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "tsx": "^4.0.0",
    "@types/node": "^20.0.0"
  }
}
EOF

# Create TypeScript configuration
cat > "$project_path/tsconfig.json" << EOF
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "allowJs": true,
    "strict": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "declaration": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "removeComments": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noImplicitReturns": true,
    "noImplicitOverride": true,
    "exactOptionalPropertyTypes": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
EOF

# Create main TypeScript file
cat > "$project_path/src/main.ts" << EOF
// $category pattern: $project_name
console.log('🚀 Starting $project_name...');

// TODO: Implement your design pattern here
class Example {
  constructor() {
    console.log('Example class created');
  }
  
  public doSomething(): void {
    console.log('Doing something...');
  }
}

// Example usage
const example = new Example();
example.doSomething();

console.log('✅ $project_name completed!');
EOF

# Create README
cat > "$project_path/README.md" << EOF
# $project_name

A $category design pattern implementation in TypeScript.

## Getting Started

\`\`\`bash
# Install dependencies
pnpm install

# Run in development mode (with hot reload)
pnpm dev

# Build for production
pnpm build

# Run production build
pnpm start

# Type check
pnpm type-check

# Clean build artifacts
pnpm clean
\`\`\`

## Pattern Description

TODO: Add description of the $category pattern being implemented.

## Implementation

The pattern is implemented in \`src/main.ts\`.

## Project Structure

\`\`\`
src/
└── main.ts          # Main entry point
dist/                # Compiled JavaScript (generated)
package.json         # Dependencies and scripts
tsconfig.json        # TypeScript configuration
README.md           # This file
\`\`\`
EOF

# Create .gitignore
cat > "$project_path/.gitignore" << EOF
# Dependencies
node_modules/

# Build output
dist/

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/
*.lcov

# nyc test coverage
.nyc_output

# Dependency directories
node_modules/
jspm_packages/

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Microbundle cache
.rpt2_cache/
.rts2_cache_cjs/
.rts2_cache_es/
.rts2_cache_umd/

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env
.env.test
.env.production

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# Next.js build output
.next

# Nuxt.js build / generate output
.nuxt

# Storybook build outputs
.out
.storybook-out

# Temporary folders
tmp/
temp/

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
EOF

echo ""
echo -e "${GREEN}✅ Project created successfully!${NC}"
echo ""

# Automatically change to project directory and install dependencies
echo -e "${YELLOW}Changing to project directory and installing dependencies...${NC}"
cd "$project_path"
pnpm install

echo ""
echo -e "${BLUE}Next steps:${NC}"
echo "1. cd $project_path"
echo "2. pnpm approve-builds"
echo "3. pnpm dev"
echo ""
echo -e "${YELLOW}Project structure:${NC}"
echo "├── node_modules/"
echo "├── src/"
echo "│   └── main.ts"
echo "├── package.json"
echo "├── tsconfig.json"
echo "├── README.md"
echo "└── .gitignore"
echo ""
echo -e "${GREEN}Happy coding! 🚀${NC}"
