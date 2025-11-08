# Image Setup Guide

## Important: Image Folder Structure

For the website to display product images correctly, you need to move all image folders into a `public` directory.

### Current Structure:
```
AJ's E Commerce/
├── caps/
├── hoodies/
├── joggers/
├── pants/
├── shirts/
├── women gym wear/
├── women kurtha/
└── women sarees/
```

### Required Structure:
```
AJ's E Commerce/
├── public/
│   ├── caps/
│   │   ├── Ferrari Motorsport Cap.avif
│   │   ├── Old School cap.jpg
│   │   ├── Puma Bmw Motorsport.avif
│   │   ├── Puma Cap.avif
│   │   └── Ralph Lauren Cap.avif
│   ├── hoodies/
│   │   ├── Black Thrift.webp
│   │   ├── Blue Custom Hoodie.webp
│   │   └── ... (all hoodie images)
│   ├── joggers/
│   │   └── ... (all jogger images)
│   ├── pants/
│   │   └── ... (all pants images)
│   ├── shirts/
│   │   └── ... (all shirt images)
│   ├── women-gym-wear/
│   │   └── ... (all women gym wear images)
│   ├── women-kurtha/
│   │   └── ... (all kurtha images)
│   └── women-sarees/
│       └── ... (all saree images)
```

## How to Fix:

### Option 1: Manual Move (Recommended)
1. Create a `public` folder in the root directory
2. Move all product image folders (caps, hoodies, joggers, etc.) into the `public` folder
3. Restart the development server

### Option 2: Using PowerShell
Run these commands in your terminal:

```powershell
# Create public directory
New-Item -ItemType Directory -Path "public" -Force

# Move image folders
Move-Item -Path "caps" -Destination "public/caps"
Move-Item -Path "hoodies" -Destination "public/hoodies"
Move-Item -Path "joggers" -Destination "public/joggers"
Move-Item -Path "pants" -Destination "public/pants"
Move-Item -Path "shirts" -Destination "public/shirts"
Move-Item -Path "women gym wear" -Destination "public/women-gym-wear"
Move-Item -Path "women kurtha" -Destination "public/women-kurtha"
Move-Item -Path "women sarees" -Destination "public/women-sarees"
```

## After Moving Images:

The website will automatically detect and display all product images correctly. The paths in the code are already configured to look in the public folder.

## Note:
- Next.js serves files from the `public` folder at the root URL path (`/`)
- Images in `public/caps/` are accessible at `/caps/`
- No code changes needed after moving the images
