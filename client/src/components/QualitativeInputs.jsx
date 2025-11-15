import React from 'react';

export default function QualitativeInputs({ inputs, onChange }) {
  const handleSelect = (field, value) => onChange(field, value);

  return (
    <section className="bg-blue-100 shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Qualitative Parameters</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Water Source */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Water Source</label>
          <select
            value={inputs.water_source}
            onChange={(e) => handleSelect('water_source', e.target.value)}
            className="w-full border-gray-500 rounded-lg p-3 focus:ring-2 focus:ring-cyan-500"
          >
            <option value="">Select source</option>
            <option value="River">River</option>
            <option value="LakePond">Lake/Pond</option>
            <option value="ShallowWell">Shallow Well</option>
            <option value="Tap">Tap</option>
            <option value="RainWater">Rainwater</option>
            <option value="ReservoirDam">Reservoir/Dam</option>
            <option value="UndergroundAquifer">Underground Aquifer</option>
          </select>
        </div>

        {/* Color */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Color</label>
          <select
            value={inputs.color}
            onChange={(e) => handleSelect('color', e.target.value)}
            className="w-full border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-cyan-500"
          >
            <option value="">Select color</option>
            <option value="Clear">Clear</option>
            <option value="SlightlyCloudy">Slightly Cloudy</option>
            <option value="BrownMuddy">Brown/Muddy</option>
            <option value="GreenAlgal">Green/Algal</option>
            <option value="Yellowish">Yellowish</option>
            <option value="BlackGrey">Black/Grey</option>
            <option value="OilySheen">Oily Sheen</option>
          </select>
        </div>

        {/* Odor */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Odor</label>
          <select
            value={inputs.odor}
            onChange={(e) => handleSelect('odor', e.target.value)}
            className="w-full border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-cyan-500"
          >
            <option value="">Select odor</option>
            <option value="None">None</option>
            <option value="EarthyMusty">Earthy</option>
            <option value="FishySmell">Fishy</option>
            <option value="Sewage">Sewage-like</option>
            <option value="ChemicalSmell">Chemical</option>
            <option value="SulfurRottenEgg">Sulfur</option>
            <option value="LandfillLeachate">Landfill Leachate</option>
            <option value="ChlorineSmell">Chlorine</option>
          </select>
        </div>

        {/* Nearby Land Use */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Nearby Land Use</label>
          <select
            value={inputs.nearby_land_use}
            onChange={(e) => handleSelect('nearby_land_use', e.target.value)}
            className="w-full border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-cyan-500"
          >
            <option value="">Select land use</option>
            <option value="Urban">Urban</option>
            <option value="Agriculture">Agriculture</option>
            <option value="ProtectedForest">Protected Forest</option>
            <option value="LivestockGrazing">Livestock Grazing</option>
            <option value="MiningSite">Mining Site</option>
            <option value="Aquaculture">Aquaculture</option>
            <option value="UrbanResidential">Urban Residential</option>
          </select>
        </div>

        {/* Geological Events */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Recent Geological Events</label>
          <select
            value={inputs.geological_event}
            onChange={(e) => handleSelect('geological_event', e.target.value)}
            className="w-full border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-cyan-500"
          >
            <option value="NoneGeological">None</option>
            <option value="Earthquake">Earthquake</option>
            <option value="LandslideErosion">Landslide/Erosion</option>
            <option value="VolcanicActivity">Volcanic Activity</option>
            <option value="SoilErosion">Soil Erosion</option>
            <option value="LandSubsidence">Land Subsidence</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Weather Events */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Recent Weather Events</label>
          <select
            value={inputs.weather_event}
            onChange={(e) => handleSelect('weather_event', e.target.value)}
            className="w-full border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-cyan-500"
          >
            <option value="NoneWeather">None</option>
            <option value="HeavyRainfall">Heavy Rainfall</option>
            <option value="Typhoon">Typhoon</option>
            <option value="Heatwave">Heatwave</option>
            <option value="Drought">Drought</option>
            <option value="StormSurge">Storm Surge</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
    </section>
  );
}
