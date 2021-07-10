import React, { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"

const TurnInfo = () => {
  const totalTurns = useSelector(state => state.turns.totalTurns)
  const turnTime = useSelector(state => state.turns.turnTime)

  const [time, setTime] = useState(1)
  const [turn, setTurn] = useState(1)
  const [timeId, setTimeId] = useState(null)

  const timeRef = useRef(time)

  useEffect(() => {
    timeRef.current = time + 1
  }, [time])

  const onBegin = () => {
    if (!timeId) {
      setTimeId(
        setInterval(() => {
          if (timeRef.current + 1 > turnTime) {
            timeRef.current = 1
            setTime(1)
            setTurn(prev => prev + 1)
          } else {
            setTime(prev => prev + 1)
          }
        }, 1000)
      )
    }
  }

  const onPause = () => {
    clearInterval(timeId)
    setTimeId(null)
  }

  const onReset = () => {
    clearInterval(timeId)
    setTimeId(null)
    setTime(1)
    setTurn(1)
  }

  return (
    <>
      <div className="buttons is-justify-content-center">
        <button className="button is-primary" onClick={onBegin}>
          Begin
        </button>
        <button className="button is-warning" onClick={onReset}>
          Reset
        </button>
        <button className="button is-danger" onClick={onPause}>
          Pause
        </button>
      </div>

      <nav className="level">
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Total turns</p>
            <p className="title">{totalTurns}</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Current Turn</p>
            <p className="title">{turn}</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Turn Time</p>
            <p className="title">{turnTime}s</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Current Time</p>
            <p className="title">{time}s</p>
          </div>
        </div>
      </nav>
    </>
  )
}

export default TurnInfo
