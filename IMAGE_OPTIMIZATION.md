# Image Optimization Guide

This project includes image optimization to improve performance and reduce bundle size. This document explains how the optimization works and how to use it.

## Automatic Image Optimization

Images are automatically optimized during the build process using the following techniques:

1. **Vite Image Optimization**: Images imported in code are processed by `vite-imagetools` to convert them to WebP format and resize them.

2. **Manual Chunking**: The Vite configuration includes manual chunking to separate large assets into smaller chunks.

3. **Public Directory Optimization**: Images in the public directory are optimized using a script that converts them to WebP format and resizes them.

## How to Add New Images

### For Images Used in Components

1. Import the `OptimizedImage` component:
   ```tsx
   import { OptimizedImage } from '@/components/ui/optimized-image';
   ```

2. Use the component with your image path:
   ```tsx
   <OptimizedImage
     src={imagePath}
     alt="Description of the image"
     className="your-classes"
     fallbackSrc="/placeholder.webp"
   />
   ```

3. For dynamic image loading, use the `loadImage` utility:
   ```tsx
   import { loadImage } from '@/lib/image-loader';
   
   // In a useEffect or async function
   const optimizedSrc = await loadImage(imagePath);
   ```

### For Public Directory Images

1. Place your images in the appropriate subdirectory under `public/`
2. Run the optimization script:
   ```bash
   npm run optimize-images
   ```
3. This will create optimized WebP versions of your images

## Image Paths in Project Data

When adding image paths to project data files (like in `personalProjects.ts` or `academicProjects.ts`), use the following format:

```ts
images: [
  "../../../public/projectname/image1.png",
  "../../../public/projectname/image2.png",
]
```

The image loader will automatically handle converting these paths to the optimized versions.

## Optimization Script

The optimization script (`scripts/optimize-images.js`) does the following:

- Converts images to WebP format
- Resizes images to a maximum width of 1200px
- Maintains the directory structure
- Skips already optimized images

You can run it manually with:

```bash
npm run optimize-images
```

It also runs automatically before each build as part of the `prebuild` script.

## Troubleshooting

If you encounter issues with images:

1. Check that the image path is correct
2. Ensure the image exists in the specified location
3. Try running the optimization script manually
4. Check the browser console for any errors related to image loading

## Configuration

The optimization settings can be adjusted in:

- `vite.config.ts` - For imported images
- `scripts/optimize-images.js` - For public directory images
- `src/lib/image-loader.ts` - For dynamic image loading
