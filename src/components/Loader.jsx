import React from 'react'

const Loader = () => {
  return (
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100px',
        height: '100px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
    }}>
          <div style={{
              width: '50px',
              height: '50px',
              border: '5px solid #fff',
              borderRadius: '50%',
              borderLeftColor: 'transparent',
              animation: 'spin 1s linear infinite',
          }}></div>
      </div >
  )
}

export default Loader
