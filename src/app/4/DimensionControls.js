
export default function DimensionControls({ dimensions, setDimensions, color, setColor }) {
  return (
    <div>
      <h2>가구 크기 조절</h2>
      <div>
        <label>
          폭 (m)
          <input 
            type="range" 
            min="0.5" 
            max="3" 
            step="0.1"
            value={dimensions.width}
            onChange={(e) => setDimensions(prev => ({
              ...prev,
              width: parseFloat(e.target.value)
            }))}
          />
          <span>{dimensions.width.toFixed(1)}m</span>
        </label>

        <label>
          높이 (m)
          <input 
            type="range" 
            min="0.5" 
            max="3" 
            step="0.1"
            value={dimensions.height}
            onChange={(e) => setDimensions(prev => ({
              ...prev,
              height: parseFloat(e.target.value)
            }))}
          />
          <span>{dimensions.height.toFixed(1)}m</span>
        </label>

        <label>
          깊이 (m)
          <input 
            type="range" 
            min="0.5" 
            max="3" 
            step="0.1"
            value={dimensions.depth}
            onChange={(e) => setDimensions(prev => ({
              ...prev,
              depth: parseFloat(e.target.value)
            }))}
          />
          <span>{dimensions.depth.toFixed(1)}m</span>
        </label>

        <label>
          색상
          <input 
            type="color" 
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
      </div>
    </div>
  )
}