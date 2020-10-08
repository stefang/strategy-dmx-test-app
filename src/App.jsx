import React, { useEffect } from 'react'
import './App.css'
import { createDeviceDispatchable } from '@iotes/core'
import { createIotes } from '@iotes/react-hooks'
import { dmxStrategy } from '@iotes/strategy-dmx'
import * as brightsignBindings from './serial-bindings/bs-binding'

const topology = {
  client: {
    name: 'dmx-strategy-test',
  },
  hosts: [{
    name: 'dmx-host',
    host: 'enttec-usb-dmx-pro',
    port: '/dev/cu.usbserial-EN085546',
    serialbindings: brightsignBindings,
  }],
  devices: [{
    hostName: 'dmx-host',
    type: 'DMX_FIXTURE',
    name: 'PARCAN',
  }],
}

const { useIotesDevice } = createIotes({ topology: topology, strategy: dmxStrategy })

const App = () => {
  const [deviceSubscribe, deviceDispatch] = useIotesDevice()

    const handleDataFrame = () => {
      deviceDispatch(
        createDeviceDispatchable('PARCAN', 'UPDATE', {
          1: 255,
          2: Math.random() > 0.5 ? 250 : 0,
          3: Math.random() > 0.5 ? 255 : 0,
          4: Math.random() > 0.5 ? 255 : 0,
        })
      )
    }

    useEffect(() => {
      setInterval(
        () => handleDataFrame()
        , 100)
    }, [])
  return (
    <>
      <p>Device Subscribe: {JSON.stringify(deviceSubscribe)}</p>
    </>
  )
}

export default App
