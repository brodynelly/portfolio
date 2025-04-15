#!/usr/bin/env node

/**
 * Image optimization script for the public directory
 * 
 * This script optimizes all images in the public directory and its subdirectories
 * It converts images to WebP format and resizes them to a maximum width of 1200px
 * 
 * Usage:
 * node scripts/optimize-images.cjs
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuration
const PUBLIC_DIR = path.join(__dirname, '../public');
const MAX_WIDTH = 1200;
const QUALITY = 80;
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif'];

// Create a directory if it doesn't exist
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
}

// Process a single image
async function processImage(filePath, outputPath) {
  try {
    const ext = path.extname(filePath).toLowerCase();
    
    // Skip if not an image or already a webp
    if (!IMAGE_EXTENSIONS.includes(ext) || ext === '.webp') {
      return;
    }
    
    // Get image metadata
    const metadata = await sharp(filePath).metadata();
    
    // Skip if already optimized (check if width is less than MAX_WIDTH)
    if (metadata.width <= MAX_WIDTH) {
      console.log(`Skipping already optimized image: ${filePath}`);
      return;
    }
    
    // Create output directory if it doesn't exist
    const outputDir = path.dirname(outputPath);
    ensureDirectoryExists(outputDir);
    
    // Optimize image
    await sharp(filePath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outputPath);
    
    console.log(`Optimized: ${filePath} -> ${outputPath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

// Process all images in a directory recursively
async function processDirectory(dirPath, baseOutputDir = PUBLIC_DIR) {
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Process subdirectory
      await processDirectory(filePath, baseOutputDir);
    } else {
      const ext = path.extname(file).toLowerCase();
      
      // Only process image files
      if (IMAGE_EXTENSIONS.includes(ext)) {
        // Create output path with .webp extension
        const relativePath = path.relative(PUBLIC_DIR, filePath);
        const outputPath = path.join(
          baseOutputDir,
          path.dirname(relativePath),
          `${path.basename(file, ext)}.webp`
        );
        
        await processImage(filePath, outputPath);
      }
    }
  }
}

// Main function
async function main() {
  console.log('Starting image optimization...');
  
  try {
    await processDirectory(PUBLIC_DIR);
    console.log('Image optimization completed successfully!');
  } catch (error) {
    console.error('Error during image optimization:', error);
    process.exit(1);
  }
}

// Run the script
main();
