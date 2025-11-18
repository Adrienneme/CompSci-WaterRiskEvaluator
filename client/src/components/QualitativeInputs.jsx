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
            <option value="tap">Tap Water (faucet)</option>
            <option value="deepwell">Deep Well</option>
           <option value="shallowwell">Shallow Well</option>
            <option value="river">River</option>
            <option value="lakepond">Lake/Pond</option>
            <option value="reservoirdam">Reservoir/Dam</option>
            <option value="rainwater">Rainwater</option>
             <option value="mountainspring">Mountain Spring</option>
            <option value="undergroundaquifer">Underground Aquifer</option>
             <option value="coastalwell">Coastal Well</option>
              <option value="irrigationcanal">Irrigation Canal</option>

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
            <option value="clear">Clear</option>
            <option value="slightlycloudy">Slightly Cloudy</option>
            <option value="brownmuddy">Brown/Muddy</option>
            <option value="greenalgal">Green/Algal</option>
          <option value="blackgrey">Black/Grey</option>  
          <option value="yellowish">Yellowish</option>
          <option value="reddish">Reddish</option>
            <option value="oilySheen">Oily Sheen</option>
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
            <option value="none">None</option>
            <option value="earthymusty">Earthy</option>
            <option value="sulfurrottenegg">Sulfur</option>
            <option value="chemicals smell">Chemical</option>
                <option value="sewageodor">Sewage-like</option>
            <option value="fishy smell">Fishy</option>
        <option value="chlorine smell">Chlorine</option>
            <option value="landfillLeachate">Landfill Leachate</option>
            
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
               <option value="protectedforest">Protected Forest</option>
               <option value="agriculture">Agriculture</option>
                <option value="livestockgrazing">Livestock Grazing</option>
                <option value="industrialsites">Industrial Sites</option>
                 <option value="urbanresidential">Urban Residential</option>
                 <option value="landfill">Land Fill</option>
                 <option value="miningsite">Mining Site</option>
                  <option value="aquaculture">Aqua Culture</option>
         
           
            
            
           
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
            <option value="nonegeological">None</option>
             <option value="volcanicactivity">Volcanic Activity</option>
             <option value="landslideerosion">Landslide/Erosion</option>
            <option value="earthquake">Earthquake</option>
            <option value="soilerosion">Soil Erosion</option>
            <option value="landsubsidence">Land Subsidence</option>
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
            <option value="noneweather">None</option>
            <option value="heavyrainfall">Heavy Rainfall</option>
            <option value="drought">Drought</option>
            <option value="heatwave">Heatwave</option>
            <option value="typhoon">Typhoon</option>
            <option value="stormsurge">Storm Surge</option>
          </select>
        </div>
      </div>
    </section>
  );
}
