# Tunisia Tourism Map - Backend

Mock REST API powering the Tunisia Tourism Map frontend. Provides tourism data for cities, attractions, categories with full CRUD operations using JSON Server.

## Features
- City-based organization (Tunis, Sousse)
- CRUD operations for attractions
- Image hosting via Cloudinary CDN URLs

## Tech Stack
- JSON Server (mock REST API)
- Cloudinary for image storage/CDN
- Realistic JSON tourism dataset
## API Endpoints

**Base URL:** `${import.meta.env.VITE_SERVER_URL}` (e.g., `http://localhost:3001`)

### Places Endpoints

| Method | Endpoint | Description | Parameters | Example |
|--------|----------|-------------|------------|---------|
| `GET` | `/places` | Get all places | `cityId` | `/places?cityId=1` |
| `GET` | `/places/:placeId` | Get single place | `placeId` | `/places/5` |
| `GET` | `/places/:placeId?_embed=photos` | Get place with embedded photos | `placeId` | `/places/5?_embed=photos` |
| `POST` | `/places/` | Create new place | JSON body | `POST /places/` |
| `PATCH` | `/places/:placeId` | Update place | `placeId`, JSON body | `PATCH /places/5` |

### Cities Endpoints

| Method | Endpoint | Description | Parameters | Example |
|--------|----------|-------------|------------|---------|
| `GET` | `/cities` | Get all cities | `_sort`, `_limit` | `/cities` |
| `GET` | `/cities/:cityId` | Get single city | `cityId` | `/cities/1` |
| `GET` | `/cities/:cityId?_embed=places` | Get city with embedded places | `cityId` | `/cities/1?_embed=places` |

## Common Query Examples

```bash
# All places for a city (embedded)
GET /cities/1?_embed=places

# Single place with photos
GET /places/5?_embed=photos

# All cities
GET /cities

# Create new place
POST /places/
{
  "name": "New Attraction",
  "cityId": 1,
  "lat": 36.85,
  "lng": 10.32
}

# Update place
PATCH /places/5
{
  "rating": 4.8,
  "description": "Updated info"
}


## Quick Start

1. Ensure Node.js is installed

2. Clone repo:
   git clone https://github.com/bilelmarzouki/WelcomeToTunisia.git
   cd WelcomeToTunisia
3. start the server side:
  node server.js
