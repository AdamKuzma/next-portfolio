const fs = require('fs');
const path = require('path');
const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse').default;

// Directories to scan for text content
const dirsToScan = ['pages', 'components'];
// File extensions to process
const extensions = ['.js', '.jsx', '.ts', '.tsx'];
// Output CSV file
const outputFile = 'app-text-content.csv';

// Structure for CSV data
const textItems = [];

// Function to extract text from a file
function extractTextFromFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Parse the file
    const ast = parse(content, {
      sourceType: 'module',
      plugins: ['jsx', 'typescript'],
    });
    
    // Extract JSX text content
    traverse(ast, {
      StringLiteral({ node }) {
        if (node.value.trim()) {
          textItems.push({
            file: filePath,
            text: node.value,
            type: 'string'
          });
        }
      },
      JSXText({ node }) {
        const text = node.value.trim();
        if (text) {
          textItems.push({
            file: filePath,
            text: text,
            type: 'jsx'
          });
        }
      },
      TemplateElement({ node }) {
        const text = node.value.cooked?.trim();
        if (text) {
          textItems.push({
            file: filePath,
            text: text,
            type: 'template'
          });
        }
      }
    });
  } catch (error) {
    console.error(`Error processing ${filePath}: ${error.message}`);
  }
}

// Function to scan directories recursively
function scanDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      // Skip node_modules and .next directories
      if (entry.name !== 'node_modules' && entry.name !== '.next') {
        scanDirectory(fullPath);
      }
    } else if (entry.isFile() && extensions.includes(path.extname(entry.name))) {
      extractTextFromFile(fullPath);
    }
  }
}

// Start scanning directories
dirsToScan.forEach(dir => {
  if (fs.existsSync(dir)) {
    scanDirectory(dir);
  }
});

// Convert to CSV
const csvContent = [
  'File,Type,Text', // CSV header
  ...textItems.map(item => `"${item.file}","${item.type}","${item.text.replace(/"/g, '""')}"`),
].join('\n');

// Write to file
fs.writeFileSync(outputFile, csvContent, 'utf8');

console.log(`Extracted ${textItems.length} text items to ${outputFile}`); 