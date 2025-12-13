import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const alt = 'Mohaned Ashraf | Software Engineer';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #0F172A, #020617)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Decorative Gradients */}
        <div style={{ 
            position: 'absolute', 
            top: -150, 
            left: -150, 
            width: 600, 
            height: 600, 
            background: 'rgba(20, 184, 166, 0.15)', // Teal
            borderRadius: '50%', 
            filter: 'blur(120px)' 
        }} />
        <div style={{ 
            position: 'absolute', 
            bottom: -150, 
            right: -150, 
            width: 600, 
            height: 600, 
            background: 'rgba(245, 158, 11, 0.15)', // Amber
            borderRadius: '50%', 
            filter: 'blur(120px)' 
        }} />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
            {/* Name with Gradient */}
            <div style={{ 
                fontSize: 80, 
                fontWeight: 900, 
                marginBottom: 20, 
                display: 'flex',
                background: 'linear-gradient(to right, #fbbf24, #2dd4bf)',
                backgroundClip: 'text',
                color: 'transparent',
            }}>
            Mohaned Ashraf
            </div>
            
            {/* Title */}
            <div style={{ 
                fontSize: 42, 
                color: '#94a3b8',
                letterSpacing: '-0.02em',
                fontWeight: 500
            }}>
            Software Engineer
            </div>

             {/* URL/Tagline */}
             <div style={{ 
                marginTop: 60,
                fontSize: 24, 
                color: '#64748b',
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '12px 32px',
                borderRadius: 50,
                border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
            mohanedashraf.com
            </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
