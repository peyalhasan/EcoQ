# 🌤️ EcoQ - Weather Dashboard Application

A modern, real-time weather dashboard that provides comprehensive weather information and forecasts. EcoQ helps you stay informed about current weather conditions, air quality, and environmental data with a beautiful, user-friendly interface.

## 🌟 Features

- **Real-Time Weather Data**: Get current weather conditions for any location
- **Detailed Forecasts**: View hourly and daily weather predictions
- **Multiple Metrics**: Access comprehensive weather information including:
  - Temperature (current, feels like, min/max)
  - Humidity and precipitation
  - Wind speed and direction
  - Air quality index (AQI)
  - UV index
  - Visibility
  - Atmospheric pressure
- **Location Search**: Search for weather in cities worldwide
- **Geolocation Support**: Automatically detect your current location
- **Responsive Design**: Seamless experience across all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, intuitive interface with smooth animations
- **Weather Icons**: Visual representation of weather conditions

## 🚀 Live Demo

Check out the live application: [eco-q-2mea.vercel.app](https://eco-q-2mea.vercel.app)

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) - React framework with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Weather API**: Integration with weather data providers (OpenWeatherMap, WeatherAPI, or similar)
- **Deployment**: [Vercel](https://vercel.com/) - Serverless deployment platform
- **Language**: JavaScript/JSX
- **Icons**: Weather condition icons and UI components

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v18 or higher)
- npm, yarn, pnpm, or bun package manager

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/peyalhasan/EcoQ.git
   cd EcoQ
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory and add your weather API key:
   
   ```env
   NEXT_PUBLIC_WEATHER_API_KEY=your_api_key_here
   ```
   
   **To get a free API key:**
   - Sign up at [OpenWeatherMap](https://openweathermap.org/api) or your preferred weather API provider
   - Navigate to API keys section
   - Generate a new API key
   - Copy and paste it into your `.env.local` file

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application

## 📁 Project Structure

```
ecovista
├── README.md
├── app
│   ├── [location]
│   │   ├── @aqi
│   │   ├── @temperature
│   │   ├── @weather
│   │   ├── @wind
│   │   ├── default.js
│   │   ├── layout.js
│   │   └── page.js
│   ├── api
│   │   └── location
│   ├── favicon.ico
│   ├── fonts
│   │   ├── GeistMonoVF.woff
│   │   └── GeistVF.woff
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components
│   ├── AQIComponent.jsx
│   ├── Card.jsx
│   ├── LocaltionSwithcer.jsx
│   ├── LocationDetactor.jsx
│   ├── LocationInfo.jsx
│   ├── NoLocationInfo.jsx
│   ├── TemperatureComponent.jsx
│   ├── WeateherComponent.jsx
│   └── WindComponent.js
├── jsconfig.json
├── lib
│   ├── locationInfo.js
│   └── weather-info.js
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   ├── background.png
│   ├── gradient.png
│   ├── icon_air_element.png
│   ├── icon_compass.png
│   ├── icon_rain.png
│   ├── icon_tempareture.png
│   ├── icon_wind.png
│   ├── link.svg
│   ├── network.gif
│   ├── tinypng.sh
│   └── tinypng_gradient.png
└── tailwind.config.js
```

## 🎯 Usage

1. **Search for a Location**: 
   - Use the search bar to enter any city name worldwide
   - Press Enter or click the search button

2. **Use Your Current Location**: 
   - Click the location button to automatically detect your position
   - Grant location permission when prompted

3. **View Weather Information**: 
   - See current temperature and conditions
   - Check feels-like temperature
   - View humidity, wind speed, and other metrics
   - Explore hourly and daily forecasts

4. **Monitor Air Quality**: 
   - Check the Air Quality Index (AQI)
   - Understand pollution levels in your area

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Development Guidelines

- Follow the existing code style and structure
- Write meaningful commit messages
- Test your changes thoroughly before submitting
- Update documentation as needed

## 👤 Author

**Peyal Hasan**

- GitHub: [@peyalhasan](https://github.com/peyalhasan)
- Project Link: [https://github.com/peyalhasan/EcoQ](https://github.com/peyalhasan/EcoQ)

## 🙏 Acknowledgments

- Weather data provided by weather API services
- Thanks to all contributors who help improve this project
- Icons and design inspiration from modern weather applications
- Built with [Next.js](https://nextjs.org/) and deployed on [Vercel](https://vercel.com/)


## 🌟 Show Your Support

Give a ⭐️ if this project helped you stay updated with the weather!

---

**Made with ☀️ for better weather tracking**
