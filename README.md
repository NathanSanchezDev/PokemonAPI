# Pokémon API

The Pokémon Information API is a RESTful web service that provides detailed information about Pokémon. You can use this API to retrieve data about specific Pokémon, such as their names, types, abilities, and images.

## API Endpoints

The API offers the following endpoints for accessing Pokémon data:

- `/api/:identifier`: Retrieves Pokémon data by name or number. Replace `:identifier` with the name or number of the Pokémon you want to retrieve.

- `/api/pokemon-names`: Retrieves a list of Pokémon names.

## Pokémon Data

The API provides the following information for each Pokémon:

- `name`: The name of the Pokémon.

- `type`: An array of types that describe the Pokémon (e.g., "Water," "Fire").

- `abilities`: An array of abilities that the Pokémon possesses (e.g., "Torrent," "Blaze").

- `image`: A URL to an image of the Pokémon.

## How to Use the API Locally

To use the Pokémon Information API locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/pokemon-info-api.git
   ```

2. Change to the project directory:

   ```bash
   cd pokemon-info-api
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the local server:

   ```bash
   npm start
   ```

5. You can now make API requests by using the following URL format:

   ```
   http://localhost:8000/api/:identifier
   ```

   Replace `:identifier` with the name or number of the Pokémon you want to retrieve.

## How to Use the API Online

The Pokémon Information API is also available online for public use. You can make API requests by using the following URL format:

```
https://your-api-url.com/api/:identifier
```

Replace `your-api-url.com` with the actual URL of the API server, and `:identifier` with the name or number of the Pokémon you want to retrieve.

## Examples

### Retrieve Pokémon Data

- Local:

  ```
  http://localhost:8000/api/pikachu
  ```

- Online:

  ```
  https://your-api-url.com/api/25
  ```

This will return information about Pikachu, including its name, types, abilities, and an image URL.

## Author

- Nathan Sanchez